/**
 * Biblioteca de Análise Financeira
 * ONDA 8.5: Relatórios Financeiros
 * 
 * Esta biblioteca fornece funções para análise financeira,
 * cálculo de prêmios, projeções e fluxo de caixa.
 * 
 * @module financeiro
 * @version 8.5.0
 */

import { Apolice, Sinistro, listarApolices, listarSinistros } from './storage';
import { formatarReais } from './cotacoes';

// ============================================================================
// TIPOS E INTERFACES
// ============================================================================

export interface DadosFinanceiros {
  premiosMensais: number;
  premiosAnuais: number;
  sinistrosPagos: number;
  resultado: number; // prêmios - sinistros
  margemLucro: number; // (resultado / prêmios) * 100
  indicesinistralidade: number;
}

export interface ProjecaoReceita {
  mes: string;
  premios: number;
  sinistros: number;
  resultado: number;
}

export interface FluxoCaixa {
  mes: string;
  entradas: number;
  saidas: number;
  saldo: number;
  saldoAcumulado: number;
}

export interface AnaliseInadimplencia {
  totalInadimplente: number;
  valorMensalPerdido: number;
  valorAnualPerdido: number;
  taxaInadimplencia: number;
  impactoReceita: number;
}

export interface MetricasFinanceiras {
  receitaMensalRecorrente: number;
  receitaAnualProjetada: number;
  custoAquisicaoCliente: number;
  valorVidaCliente: number;
  taxaRetencao: number;
  taxaCrescimento: number;
}

export interface ComparativoTemporal {
  periodo: string;
  premios: number;
  sinistros: number;
  resultado: number;
  crescimento: number;
}

// ============================================================================
// ANÁLISE DE PRÊMIOS
// ============================================================================

/**
 * Calcula dados financeiros gerais
 */
export function calcularDadosFinanceiros(
  apolices?: Apolice[],
  sinistros?: Sinistro[]
): DadosFinanceiros {
  const dadosApolices = apolices || listarApolices();
  const dadosSinistros = sinistros || listarSinistros();
  
  // Apenas apólices ativas
  const apolicesAtivas = dadosApolices.filter(a => a.status === 'ativa');
  
  // Prêmios
  const premiosMensais = apolicesAtivas.reduce((acc, a) => acc + a.valorMensal, 0);
  const premiosAnuais = apolicesAtivas.reduce((acc, a) => acc + a.valorAnual, 0);
  
  // Sinistros pagos
  const sinistrosPagos = dadosSinistros
    .filter(s => s.status === 'pago')
    .reduce((acc, s) => acc + s.valorIndenizado, 0);
  
  // Resultado
  const resultado = premiosAnuais - sinistrosPagos;
  
  // Margem de lucro
  const margemLucro = premiosAnuais > 0
    ? (resultado / premiosAnuais) * 100
    : 0;
  
  // Índice de sinistralidade
  const indicesinistralidade = premiosAnuais > 0
    ? (sinistrosPagos / premiosAnuais) * 100
    : 0;
  
  return {
    premiosMensais,
    premiosAnuais,
    sinistrosPagos,
    resultado,
    margemLucro,
    indicesinistralidade,
  };
}

// ============================================================================
// PROJEÇÕES
// ============================================================================

/**
 * Gera projeção de receita para os próximos meses
 */
export function gerarProjecaoReceita(
  meses: number = 12,
  taxaCrescimento: number = 5
): ProjecaoReceita[] {
  const apolices = listarApolices();
  const sinistros = listarSinistros();
  
  const dados = calcularDadosFinanceiros(apolices, sinistros);
  const premioMensalBase = dados.premiosMensais;
  const sinistroMensalBase = dados.sinistrosPagos / 12;
  
  const projecao: ProjecaoReceita[] = [];
  const hoje = new Date();
  
  for (let i = 0; i < meses; i++) {
    const data = new Date(hoje.getFullYear(), hoje.getMonth() + i, 1);
    const mes = data.toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' });
    
    // Aplica taxa de crescimento
    const fatorCrescimento = Math.pow(1 + taxaCrescimento / 100, i / 12);
    const premios = premioMensalBase * fatorCrescimento;
    const sinistros = sinistroMensalBase * fatorCrescimento;
    const resultado = premios - sinistros;
    
    projecao.push({
      mes,
      premios,
      sinistros,
      resultado,
    });
  }
  
  return projecao;
}

// ============================================================================
// FLUXO DE CAIXA
// ============================================================================

/**
 * Gera análise de fluxo de caixa
 */
export function gerarFluxoCaixa(meses: number = 12): FluxoCaixa[] {
  const projecao = gerarProjecaoReceita(meses);
  const fluxo: FluxoCaixa[] = [];
  let saldoAcumulado = 0;
  
  projecao.forEach((item) => {
    const entradas = item.premios;
    const saidas = item.sinistros;
    const saldo = entradas - saidas;
    saldoAcumulado += saldo;
    
    fluxo.push({
      mes: item.mes,
      entradas,
      saidas,
      saldo,
      saldoAcumulado,
    });
  });
  
  return fluxo;
}

// ============================================================================
// ANÁLISE DE INADIMPLÊNCIA
// ============================================================================

/**
 * Analisa impacto da inadimplência
 */
export function analisarInadimplencia(apolices?: Apolice[]): AnaliseInadimplencia {
  const dadosApolices = apolices || listarApolices();
  
  const inadimplentes = dadosApolices.filter(a => a.status === 'inadimplente');
  const totalInadimplente = inadimplentes.length;
  
  const valorMensalPerdido = inadimplentes.reduce((acc, a) => acc + a.valorMensal, 0);
  const valorAnualPerdido = inadimplentes.reduce((acc, a) => acc + a.valorAnual, 0);
  
  const totalApolices = dadosApolices.length;
  const taxaInadimplencia = totalApolices > 0
    ? (totalInadimplente / totalApolices) * 100
    : 0;
  
  // Impacto na receita
  const apolicesAtivas = dadosApolices.filter(a => a.status === 'ativa');
  const receitaAtual = apolicesAtivas.reduce((acc, a) => acc + a.valorMensal, 0);
  const receitaPotencial = receitaAtual + valorMensalPerdido;
  const impactoReceita = receitaPotencial > 0
    ? (valorMensalPerdido / receitaPotencial) * 100
    : 0;
  
  return {
    totalInadimplente,
    valorMensalPerdido,
    valorAnualPerdido,
    taxaInadimplencia,
    impactoReceita,
  };
}

// ============================================================================
// MÉTRICAS FINANCEIRAS
// ============================================================================

/**
 * Calcula métricas financeiras avançadas
 */
export function calcularMetricasFinanceiras(
  apolices?: Apolice[]
): MetricasFinanceiras {
  const dadosApolices = apolices || listarApolices();
  const dados = calcularDadosFinanceiros(dadosApolices);
  
  // MRR (Monthly Recurring Revenue)
  const receitaMensalRecorrente = dados.premiosMensais;
  
  // ARR (Annual Recurring Revenue)
  const receitaAnualProjetada = dados.premiosAnuais;
  
  // CAC (Customer Acquisition Cost) - Simulado
  const custoAquisicaoCliente = 500; // Valor médio estimado
  
  // LTV (Lifetime Value)
  const apolicesAtivas = dadosApolices.filter(a => a.status === 'ativa');
  const ticketMedio = apolicesAtivas.length > 0
    ? dados.premiosAnuais / apolicesAtivas.length
    : 0;
  const tempoMedioVida = 3; // anos
  const valorVidaCliente = ticketMedio * tempoMedioVida;
  
  // Taxa de retenção
  const totalApolices = dadosApolices.length;
  const canceladas = dadosApolices.filter(a => a.status === 'cancelada').length;
  const taxaRetencao = totalApolices > 0
    ? ((totalApolices - canceladas) / totalApolices) * 100
    : 0;
  
  // Taxa de crescimento (simulada - últimos 12 meses)
  const taxaCrescimento = 5; // 5% ao ano
  
  return {
    receitaMensalRecorrente,
    receitaAnualProjetada,
    custoAquisicaoCliente,
    valorVidaCliente,
    taxaRetencao,
    taxaCrescimento,
  };
}

// ============================================================================
// COMPARATIVOS TEMPORAIS
// ============================================================================

/**
 * Gera comparativo temporal (últimos 12 meses)
 */
export function gerarComparativoTemporal(): ComparativoTemporal[] {
  const dados = calcularDadosFinanceiros();
  const premioMensalBase = dados.premiosMensais;
  const sinistroMensalBase = dados.sinistrosPagos / 12;
  
  const comparativo: ComparativoTemporal[] = [];
  const hoje = new Date();
  
  for (let i = 11; i >= 0; i--) {
    const data = new Date(hoje.getFullYear(), hoje.getMonth() - i, 1);
    const periodo = data.toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' });
    
    // Simula variação histórica (crescimento gradual)
    const fatorHistorico = 0.85 + (0.15 * (11 - i) / 11);
    const premios = premioMensalBase * fatorHistorico;
    const sinistros = sinistroMensalBase * fatorHistorico;
    const resultado = premios - sinistros;
    
    // Crescimento em relação ao mês anterior
    const crescimento = i < 11
      ? ((premios - comparativo[comparativo.length - 1]?.premios) / 
         comparativo[comparativo.length - 1]?.premios) * 100
      : 0;
    
    comparativo.push({
      periodo,
      premios,
      sinistros,
      resultado,
      crescimento: isNaN(crescimento) ? 0 : crescimento,
    });
  }
  
  return comparativo;
}

// ============================================================================
// EXPORTAÇÃO
// ============================================================================

/**
 * Prepara dados para exportação
 */
export function prepararDadosExportacao() {
  const dados = calcularDadosFinanceiros();
  const metricas = calcularMetricasFinanceiras();
  const inadimplencia = analisarInadimplencia();
  const projecao = gerarProjecaoReceita(12);
  const fluxo = gerarFluxoCaixa(12);
  const comparativo = gerarComparativoTemporal();
  
  return {
    resumo: {
      'Prêmios Mensais': formatarReais(dados.premiosMensais),
      'Prêmios Anuais': formatarReais(dados.premiosAnuais),
      'Sinistros Pagos': formatarReais(dados.sinistrosPagos),
      'Resultado': formatarReais(dados.resultado),
      'Margem de Lucro': `${dados.margemLucro.toFixed(1)}%`,
      'Índice de Sinistralidade': `${dados.indicesinistralidade.toFixed(1)}%`,
    },
    metricas: {
      'MRR': formatarReais(metricas.receitaMensalRecorrente),
      'ARR': formatarReais(metricas.receitaAnualProjetada),
      'CAC': formatarReais(metricas.custoAquisicaoCliente),
      'LTV': formatarReais(metricas.valorVidaCliente),
      'Taxa de Retenção': `${metricas.taxaRetencao.toFixed(1)}%`,
      'Taxa de Crescimento': `${metricas.taxaCrescimento.toFixed(1)}%`,
    },
    inadimplencia: {
      'Total Inadimplente': inadimplencia.totalInadimplente,
      'Valor Mensal Perdido': formatarReais(inadimplencia.valorMensalPerdido),
      'Valor Anual Perdido': formatarReais(inadimplencia.valorAnualPerdido),
      'Taxa de Inadimplência': `${inadimplencia.taxaInadimplencia.toFixed(1)}%`,
      'Impacto na Receita': `${inadimplencia.impactoReceita.toFixed(1)}%`,
    },
    projecao,
    fluxo,
    comparativo,
  };
}

// ============================================================================
// FUNÇÕES AUXILIARES
// ============================================================================

/**
 * Formata percentual
 */
export function formatarPercentual(valor: number): string {
  return `${valor.toFixed(1)}%`;
}

/**
 * Calcula variação percentual
 */
export function calcularVariacao(valorAtual: number, valorAnterior: number): number {
  if (valorAnterior === 0) return 0;
  return ((valorAtual - valorAnterior) / valorAnterior) * 100;
}

/**
 * Determina cor da variação
 */
export function obterCorVariacao(variacao: number): string {
  if (variacao > 0) return 'text-green-600';
  if (variacao < 0) return 'text-red-600';
  return 'text-gray-600';
}

/**
 * Determina ícone da variação
 */
export function obterIconeVariacao(variacao: number): 'up' | 'down' | 'neutral' {
  if (variacao > 0) return 'up';
  if (variacao < 0) return 'down';
  return 'neutral';
}

