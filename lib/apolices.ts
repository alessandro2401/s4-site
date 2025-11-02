/**
 * Biblioteca de Gerenciamento de Apólices
 * ONDA 8.3: Gestão de Apólices
 * 
 * Esta biblioteca fornece funções avançadas para gestão,
 * análise e controle de apólices de seguro.
 * 
 * @module apolices
 * @version 8.3.0
 */

import { Apolice, listarApolices, buscarCotacaoPorId } from './storage';
import { formatarReais } from './cotacoes';

// ============================================================================
// TIPOS E INTERFACES
// ============================================================================

export interface FiltrosApolice {
  dataInicio?: string;
  dataFim?: string;
  status?: Apolice['status'] | 'todos';
  valorMin?: number;
  valorMax?: number;
  vencimentoProximo?: number; // dias
  busca?: string; // número, CPF, nome
}

export interface EstatisticasApolices {
  total: number;
  porStatus: {
    ativa: number;
    cancelada: number;
    inadimplente: number;
    vencida: number;
  };
  valorMensalTotal: number;
  valorAnualTotal: number;
  valorMedioMensal: number;
  valorMedioAnual: number;
  taxaInadimplencia: number;
  taxaCancelamento: number;
  proximosVencimentos: number;
  renovacoesPendentes: number;
}

export interface AlertaApolice {
  tipo: 'vencimento' | 'inadimplencia' | 'renovacao';
  prioridade: 'alta' | 'media' | 'baixa';
  apoliceId: string;
  mensagem: string;
  diasRestantes?: number;
}

export interface DadosRenovacao {
  apoliceId: string;
  numero: string;
  clienteNome: string;
  dataFim: string;
  diasParaVencimento: number;
  valorAnual: number;
  statusAtual: Apolice['status'];
}

// ============================================================================
// FUNÇÕES DE FILTRO E BUSCA
// ============================================================================

/**
 * Filtra apólices com base nos critérios fornecidos
 */
export function filtrarApolices(filtros: FiltrosApolice): Apolice[] {
  let apolices = listarApolices();

  // Filtro por data de emissão
  if (filtros.dataInicio) {
    const dataInicio = new Date(filtros.dataInicio);
    apolices = apolices.filter(a => new Date(a.dataEmissao) >= dataInicio);
  }

  if (filtros.dataFim) {
    const dataFim = new Date(filtros.dataFim);
    dataFim.setHours(23, 59, 59, 999);
    apolices = apolices.filter(a => new Date(a.dataEmissao) <= dataFim);
  }

  // Filtro por status
  if (filtros.status && filtros.status !== 'todos') {
    apolices = apolices.filter(a => a.status === filtros.status);
  }

  // Filtro por valor
  if (filtros.valorMin !== undefined) {
    apolices = apolices.filter(a => a.valorMensal >= filtros.valorMin!);
  }

  if (filtros.valorMax !== undefined) {
    apolices = apolices.filter(a => a.valorMensal <= filtros.valorMax!);
  }

  // Filtro por vencimento próximo
  if (filtros.vencimentoProximo !== undefined) {
    const hoje = new Date();
    const diasLimite = filtros.vencimentoProximo;
    
    apolices = apolices.filter(a => {
      const dataFim = new Date(a.dataFim);
      const diasRestantes = Math.ceil((dataFim.getTime() - hoje.getTime()) / (1000 * 60 * 60 * 24));
      return diasRestantes <= diasLimite && diasRestantes >= 0;
    });
  }

  // Busca textual
  if (filtros.busca) {
    const termo = filtros.busca.toLowerCase().trim();
    apolices = apolices.filter(a => {
      const numero = a.numero.toLowerCase();
      
      // Busca também nos dados da cotação
      const cotacao = buscarCotacaoPorId(a.cotacaoId);
      if (!cotacao) return numero.includes(termo);
      
      const cpf = cotacao.dadosPessoais.cpf.replace(/\D/g, '');
      const nome = cotacao.dadosPessoais.nome.toLowerCase();
      
      return (
        numero.includes(termo) ||
        cpf.includes(termo) ||
        nome.includes(termo)
      );
    });
  }

  return apolices;
}

/**
 * Busca apólices por termo
 */
export function buscarApolices(termo: string): Apolice[] {
  return filtrarApolices({ busca: termo });
}

// ============================================================================
// FUNÇÕES DE ESTATÍSTICAS
// ============================================================================

/**
 * Calcula estatísticas gerais das apólices
 */
export function calcularEstatisticasApolices(apolices?: Apolice[]): EstatisticasApolices {
  const dados = apolices || listarApolices();
  
  // Total
  const total = dados.length;
  
  // Por status
  const porStatus = {
    ativa: dados.filter(a => a.status === 'ativa').length,
    cancelada: dados.filter(a => a.status === 'cancelada').length,
    inadimplente: dados.filter(a => a.status === 'inadimplente').length,
    vencida: dados.filter(a => a.status === 'vencida').length,
  };
  
  // Valores totais (apenas apólices ativas)
  const apolicesAtivas = dados.filter(a => a.status === 'ativa');
  const valorMensalTotal = apolicesAtivas.reduce((acc, a) => acc + a.valorMensal, 0);
  const valorAnualTotal = apolicesAtivas.reduce((acc, a) => acc + a.valorAnual, 0);
  
  // Valores médios
  const valorMedioMensal = apolicesAtivas.length > 0
    ? valorMensalTotal / apolicesAtivas.length
    : 0;
  
  const valorMedioAnual = apolicesAtivas.length > 0
    ? valorAnualTotal / apolicesAtivas.length
    : 0;
  
  // Taxas
  const taxaInadimplencia = total > 0
    ? (porStatus.inadimplente / total) * 100
    : 0;
  
  const taxaCancelamento = total > 0
    ? (porStatus.cancelada / total) * 100
    : 0;
  
  // Próximos vencimentos (30 dias)
  const proximosVencimentos = calcularProximosVencimentos(dados, 30).length;
  
  // Renovações pendentes (60 dias)
  const renovacoesPendentes = calcularRenovacoesPendentes(dados, 60).length;
  
  return {
    total,
    porStatus,
    valorMensalTotal,
    valorAnualTotal,
    valorMedioMensal,
    valorMedioAnual,
    taxaInadimplencia,
    taxaCancelamento,
    proximosVencimentos,
    renovacoesPendentes,
  };
}

// ============================================================================
// FUNÇÕES DE VENCIMENTO E RENOVAÇÃO
// ============================================================================

/**
 * Calcula dias restantes até o vencimento
 */
export function calcularDiasParaVencimento(apolice: Apolice): number {
  const hoje = new Date();
  const dataFim = new Date(apolice.dataFim);
  const diff = dataFim.getTime() - hoje.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

/**
 * Verifica se apólice está próxima do vencimento
 */
export function estaProximaDoVencimento(apolice: Apolice, dias: number = 30): boolean {
  const diasRestantes = calcularDiasParaVencimento(apolice);
  return diasRestantes <= dias && diasRestantes >= 0;
}

/**
 * Calcula apólices com vencimento próximo
 */
export function calcularProximosVencimentos(
  apolices: Apolice[], 
  dias: number = 30
): Apolice[] {
  return apolices.filter(a => 
    a.status === 'ativa' && estaProximaDoVencimento(a, dias)
  );
}

/**
 * Calcula renovações pendentes
 */
export function calcularRenovacoesPendentes(
  apolices: Apolice[],
  dias: number = 60
): DadosRenovacao[] {
  const proximasRenovacoes = apolices.filter(a =>
    a.status === 'ativa' && estaProximaDoVencimento(a, dias)
  );
  
  return proximasRenovacoes.map(a => {
    const cotacao = buscarCotacaoPorId(a.cotacaoId);
    
    return {
      apoliceId: a.id,
      numero: a.numero,
      clienteNome: cotacao?.dadosPessoais.nome || 'Não encontrado',
      dataFim: a.dataFim,
      diasParaVencimento: calcularDiasParaVencimento(a),
      valorAnual: a.valorAnual,
      statusAtual: a.status,
    };
  }).sort((a, b) => a.diasParaVencimento - b.diasParaVencimento);
}

// ============================================================================
// FUNÇÕES DE ALERTAS
// ============================================================================

/**
 * Gera alertas para apólices
 */
export function gerarAlertas(apolices?: Apolice[]): AlertaApolice[] {
  const dados = apolices || listarApolices();
  const alertas: AlertaApolice[] = [];
  const hoje = new Date();
  
  dados.forEach(apolice => {
    const cotacao = buscarCotacaoPorId(apolice.cotacaoId);
    const nomeCliente = cotacao?.dadosPessoais.nome || 'Cliente';
    
    // Alerta de inadimplência
    if (apolice.status === 'inadimplente') {
      alertas.push({
        tipo: 'inadimplencia',
        prioridade: 'alta',
        apoliceId: apolice.id,
        mensagem: `Apólice ${apolice.numero} de ${nomeCliente} está inadimplente`,
      });
    }
    
    // Alerta de vencimento próximo (15 dias)
    if (apolice.status === 'ativa') {
      const diasRestantes = calcularDiasParaVencimento(apolice);
      
      if (diasRestantes <= 15 && diasRestantes > 0) {
        alertas.push({
          tipo: 'vencimento',
          prioridade: diasRestantes <= 7 ? 'alta' : 'media',
          apoliceId: apolice.id,
          mensagem: `Apólice ${apolice.numero} de ${nomeCliente} vence em ${diasRestantes} dias`,
          diasRestantes,
        });
      }
      
      // Alerta de renovação (60 dias)
      if (diasRestantes <= 60 && diasRestantes > 15) {
        alertas.push({
          tipo: 'renovacao',
          prioridade: 'baixa',
          apoliceId: apolice.id,
          mensagem: `Renovação da apólice ${apolice.numero} de ${nomeCliente} em ${diasRestantes} dias`,
          diasRestantes,
        });
      }
    }
  });
  
  // Ordena por prioridade
  const prioridadeOrdem = { alta: 1, media: 2, baixa: 3 };
  return alertas.sort((a, b) => 
    prioridadeOrdem[a.prioridade] - prioridadeOrdem[b.prioridade]
  );
}

// ============================================================================
// FUNÇÕES DE ORDENAÇÃO
// ============================================================================

export type OrdenacaoApolice = 
  | 'emissao-desc' 
  | 'emissao-asc' 
  | 'vencimento-desc' 
  | 'vencimento-asc'
  | 'valor-desc' 
  | 'valor-asc'
  | 'numero-asc'
  | 'numero-desc';

/**
 * Ordena apólices
 */
export function ordenarApolices(
  apolices: Apolice[], 
  ordenacao: OrdenacaoApolice
): Apolice[] {
  const copia = [...apolices];
  
  switch (ordenacao) {
    case 'emissao-desc':
      return copia.sort((a, b) => 
        new Date(b.dataEmissao).getTime() - new Date(a.dataEmissao).getTime()
      );
    
    case 'emissao-asc':
      return copia.sort((a, b) => 
        new Date(a.dataEmissao).getTime() - new Date(b.dataEmissao).getTime()
      );
    
    case 'vencimento-desc':
      return copia.sort((a, b) => 
        new Date(b.dataFim).getTime() - new Date(a.dataFim).getTime()
      );
    
    case 'vencimento-asc':
      return copia.sort((a, b) => 
        new Date(a.dataFim).getTime() - new Date(b.dataFim).getTime()
      );
    
    case 'valor-desc':
      return copia.sort((a, b) => b.valorMensal - a.valorMensal);
    
    case 'valor-asc':
      return copia.sort((a, b) => a.valorMensal - b.valorMensal);
    
    case 'numero-asc':
      return copia.sort((a, b) => a.numero.localeCompare(b.numero));
    
    case 'numero-desc':
      return copia.sort((a, b) => b.numero.localeCompare(a.numero));
    
    default:
      return copia;
  }
}

// ============================================================================
// FUNÇÕES AUXILIARES
// ============================================================================

/**
 * Obtém cor do status
 */
export function obterCorStatus(status: Apolice['status']): string {
  const cores: { [key in Apolice['status']]: string } = {
    ativa: 'green',
    cancelada: 'gray',
    inadimplente: 'red',
    vencida: 'orange',
  };
  return cores[status];
}

/**
 * Obtém label do status
 */
export function obterLabelStatus(status: Apolice['status']): string {
  const labels: { [key in Apolice['status']]: string } = {
    ativa: 'Ativa',
    cancelada: 'Cancelada',
    inadimplente: 'Inadimplente',
    vencida: 'Vencida',
  };
  return labels[status];
}

/**
 * Formata número da apólice
 */
export function formatarNumeroApolice(numero: string): string {
  return numero.toUpperCase();
}

/**
 * Calcula valor total de apólices
 */
export function calcularValorTotal(apolices: Apolice[], tipo: 'mensal' | 'anual'): number {
  const apolicesAtivas = apolices.filter(a => a.status === 'ativa');
  
  if (tipo === 'mensal') {
    return apolicesAtivas.reduce((acc, a) => acc + a.valorMensal, 0);
  } else {
    return apolicesAtivas.reduce((acc, a) => acc + a.valorAnual, 0);
  }
}

/**
 * Obtém dados completos da apólice (com cotação)
 */
export function obterDadosCompletosApolice(apolice: Apolice) {
  const cotacao = buscarCotacaoPorId(apolice.cotacaoId);
  
  return {
    apolice,
    cotacao,
    diasParaVencimento: calcularDiasParaVencimento(apolice),
    proximaDoVencimento: estaProximaDoVencimento(apolice),
  };
}

/**
 * Formata período de vigência
 */
export function formatarPeriodoVigencia(apolice: Apolice): string {
  const inicio = new Date(apolice.dataInicio).toLocaleDateString('pt-BR');
  const fim = new Date(apolice.dataFim).toLocaleDateString('pt-BR');
  return `${inicio} a ${fim}`;
}

