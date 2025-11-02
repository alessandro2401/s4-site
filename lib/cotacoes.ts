/**
 * Biblioteca de Gerenciamento de Cotações
 * ONDA 8.2: Painel de Cotações
 * 
 * Esta biblioteca fornece funções avançadas para análise,
 * filtro, busca e exportação de cotações.
 * 
 * @module cotacoes
 * @version 8.2.0
 */

import { Cotacao, listarCotacoes } from './storage';

// ============================================================================
// TIPOS E INTERFACES
// ============================================================================

export interface FiltrosCotacao {
  dataInicio?: string;
  dataFim?: string;
  status?: Cotacao['status'] | 'todos';
  valorMin?: number;
  valorMax?: number;
  regiao?: number | 'todas';
  vendedorId?: string;
  busca?: string; // CPF, nome, email, telefone
}

export interface EstatisticasCotacoes {
  total: number;
  porStatus: {
    cotacao: number;
    proposta: number;
    apolice: number;
    cancelada: number;
  };
  taxaConversao: number;
  valorMedioMensal: number;
  valorMedioAnual: number;
  valorTotalPotencial: number;
  porRegiao: {
    regiao: number;
    quantidade: number;
    percentual: number;
  }[];
  porMes: {
    mes: string;
    quantidade: number;
    conversoes: number;
  }[];
}

export interface FunilVendas {
  cotacoes: number;
  propostas: number;
  apolices: number;
  taxaCotacaoParaProposta: number;
  taxaPropostaParaApolice: number;
  taxaConversaoGeral: number;
}

// ============================================================================
// FUNÇÕES DE FILTRO E BUSCA
// ============================================================================

/**
 * Filtra cotações com base nos critérios fornecidos
 */
export function filtrarCotacoes(filtros: FiltrosCotacao): Cotacao[] {
  let cotacoes = listarCotacoes();

  // Filtro por data
  if (filtros.dataInicio) {
    const dataInicio = new Date(filtros.dataInicio);
    cotacoes = cotacoes.filter(c => new Date(c.data) >= dataInicio);
  }

  if (filtros.dataFim) {
    const dataFim = new Date(filtros.dataFim);
    dataFim.setHours(23, 59, 59, 999); // Inclui todo o dia
    cotacoes = cotacoes.filter(c => new Date(c.data) <= dataFim);
  }

  // Filtro por status
  if (filtros.status && filtros.status !== 'todos') {
    cotacoes = cotacoes.filter(c => c.status === filtros.status);
  }

  // Filtro por valor
  if (filtros.valorMin !== undefined) {
    cotacoes = cotacoes.filter(c => c.resultado.premioMensal >= filtros.valorMin!);
  }

  if (filtros.valorMax !== undefined) {
    cotacoes = cotacoes.filter(c => c.resultado.premioMensal <= filtros.valorMax!);
  }

  // Filtro por região
  if (filtros.regiao && filtros.regiao !== 'todas') {
    cotacoes = cotacoes.filter(c => c.localizacao.regiao === filtros.regiao);
  }

  // Filtro por vendedor
  if (filtros.vendedorId) {
    cotacoes = cotacoes.filter(c => c.vendedorId === filtros.vendedorId);
  }

  // Busca textual
  if (filtros.busca) {
    const termo = filtros.busca.toLowerCase().trim();
    cotacoes = cotacoes.filter(c => {
      const cpf = c.dadosPessoais.cpf.replace(/\D/g, '');
      const nome = c.dadosPessoais.nome.toLowerCase();
      const email = c.dadosPessoais.email.toLowerCase();
      const telefone = c.dadosPessoais.telefone.replace(/\D/g, '');
      
      return (
        cpf.includes(termo) ||
        nome.includes(termo) ||
        email.includes(termo) ||
        telefone.includes(termo)
      );
    });
  }

  return cotacoes;
}

/**
 * Busca cotações por termo (CPF, nome, email, telefone)
 */
export function buscarCotacoes(termo: string): Cotacao[] {
  return filtrarCotacoes({ busca: termo });
}

// ============================================================================
// FUNÇÕES DE ESTATÍSTICAS
// ============================================================================

/**
 * Calcula estatísticas gerais das cotações
 */
export function calcularEstatisticas(cotacoes?: Cotacao[]): EstatisticasCotacoes {
  const dados = cotacoes || listarCotacoes();
  
  // Total
  const total = dados.length;
  
  // Por status
  const porStatus = {
    cotacao: dados.filter(c => c.status === 'cotacao').length,
    proposta: dados.filter(c => c.status === 'proposta').length,
    apolice: dados.filter(c => c.status === 'apolice').length,
    cancelada: dados.filter(c => c.status === 'cancelada').length,
  };
  
  // Taxa de conversão
  const taxaConversao = total > 0 
    ? (porStatus.apolice / total) * 100 
    : 0;
  
  // Valores médios
  const valorMedioMensal = total > 0
    ? dados.reduce((acc, c) => acc + c.resultado.premioMensal, 0) / total
    : 0;
  
  const valorMedioAnual = total > 0
    ? dados.reduce((acc, c) => acc + c.resultado.premioAnual, 0) / total
    : 0;
  
  // Valor total potencial (apólices)
  const valorTotalPotencial = dados
    .filter(c => c.status === 'apolice')
    .reduce((acc, c) => acc + c.resultado.premioAnual, 0);
  
  // Por região
  const regioes = [1, 2, 3, 4, 5];
  const porRegiao = regioes.map(regiao => {
    const quantidade = dados.filter(c => c.localizacao.regiao === regiao).length;
    return {
      regiao,
      quantidade,
      percentual: total > 0 ? (quantidade / total) * 100 : 0,
    };
  });
  
  // Por mês (últimos 12 meses)
  const porMes = calcularPorMes(dados);
  
  return {
    total,
    porStatus,
    taxaConversao,
    valorMedioMensal,
    valorMedioAnual,
    valorTotalPotencial,
    porRegiao,
    porMes,
  };
}

/**
 * Calcula funil de vendas
 */
export function calcularFunilVendas(cotacoes?: Cotacao[]): FunilVendas {
  const dados = cotacoes || listarCotacoes();
  
  const cotacoesCount = dados.filter(c => c.status === 'cotacao').length;
  const propostasCount = dados.filter(c => c.status === 'proposta').length;
  const apolicesCount = dados.filter(c => c.status === 'apolice').length;
  
  const total = dados.length;
  
  const taxaCotacaoParaProposta = total > 0
    ? ((propostasCount + apolicesCount) / total) * 100
    : 0;
  
  const taxaPropostaParaApolice = (propostasCount + apolicesCount) > 0
    ? (apolicesCount / (propostasCount + apolicesCount)) * 100
    : 0;
  
  const taxaConversaoGeral = total > 0
    ? (apolicesCount / total) * 100
    : 0;
  
  return {
    cotacoes: total,
    propostas: propostasCount + apolicesCount,
    apolices: apolicesCount,
    taxaCotacaoParaProposta,
    taxaPropostaParaApolice,
    taxaConversaoGeral,
  };
}

/**
 * Calcula distribuição por mês
 */
function calcularPorMes(cotacoes: Cotacao[]): EstatisticasCotacoes['porMes'] {
  const meses: { [key: string]: { quantidade: number; conversoes: number } } = {};
  
  // Últimos 12 meses
  const hoje = new Date();
  for (let i = 11; i >= 0; i--) {
    const data = new Date(hoje.getFullYear(), hoje.getMonth() - i, 1);
    const chave = `${data.getFullYear()}-${String(data.getMonth() + 1).padStart(2, '0')}`;
    meses[chave] = { quantidade: 0, conversoes: 0 };
  }
  
  // Conta cotações por mês
  cotacoes.forEach(c => {
    const data = new Date(c.data);
    const chave = `${data.getFullYear()}-${String(data.getMonth() + 1).padStart(2, '0')}`;
    
    if (meses[chave]) {
      meses[chave].quantidade++;
      if (c.status === 'apolice') {
        meses[chave].conversoes++;
      }
    }
  });
  
  return Object.entries(meses).map(([mes, dados]) => ({
    mes,
    quantidade: dados.quantidade,
    conversoes: dados.conversoes,
  }));
}

// ============================================================================
// FUNÇÕES DE ORDENAÇÃO
// ============================================================================

export type OrdenacaoCotacao = 
  | 'data-desc' 
  | 'data-asc' 
  | 'valor-desc' 
  | 'valor-asc' 
  | 'nome-asc' 
  | 'nome-desc';

/**
 * Ordena cotações
 */
export function ordenarCotacoes(
  cotacoes: Cotacao[], 
  ordenacao: OrdenacaoCotacao
): Cotacao[] {
  const copia = [...cotacoes];
  
  switch (ordenacao) {
    case 'data-desc':
      return copia.sort((a, b) => 
        new Date(b.data).getTime() - new Date(a.data).getTime()
      );
    
    case 'data-asc':
      return copia.sort((a, b) => 
        new Date(a.data).getTime() - new Date(b.data).getTime()
      );
    
    case 'valor-desc':
      return copia.sort((a, b) => 
        b.resultado.premioMensal - a.resultado.premioMensal
      );
    
    case 'valor-asc':
      return copia.sort((a, b) => 
        a.resultado.premioMensal - b.resultado.premioMensal
      );
    
    case 'nome-asc':
      return copia.sort((a, b) => 
        a.dadosPessoais.nome.localeCompare(b.dadosPessoais.nome)
      );
    
    case 'nome-desc':
      return copia.sort((a, b) => 
        b.dadosPessoais.nome.localeCompare(a.dadosPessoais.nome)
      );
    
    default:
      return copia;
  }
}

// ============================================================================
// FUNÇÕES DE EXPORTAÇÃO
// ============================================================================

/**
 * Converte cotações para formato CSV
 */
export function exportarParaCSV(cotacoes: Cotacao[]): string {
  const headers = [
    'ID',
    'Data',
    'Nome',
    'CPF',
    'Email',
    'Telefone',
    'Veículo',
    'Ano',
    'Valor FIPE',
    'Cidade',
    'UF',
    'Região',
    'Prêmio Mensal',
    'Prêmio Anual',
    'Status',
  ];
  
  const linhas = cotacoes.map(c => [
    c.id,
    new Date(c.data).toLocaleDateString('pt-BR'),
    c.dadosPessoais.nome,
    c.dadosPessoais.cpf,
    c.dadosPessoais.email,
    c.dadosPessoais.telefone,
    `${c.veiculo.marca} ${c.veiculo.modelo}`,
    c.veiculo.ano,
    c.veiculo.valorFipe.toFixed(2),
    c.localizacao.cidade,
    c.localizacao.uf,
    c.localizacao.regiao,
    c.resultado.premioMensal.toFixed(2),
    c.resultado.premioAnual.toFixed(2),
    c.status,
  ]);
  
  const csv = [
    headers.join(','),
    ...linhas.map(linha => linha.map(campo => `"${campo}"`).join(',')),
  ].join('\n');
  
  return csv;
}

/**
 * Prepara dados para exportação Excel
 */
export function prepararDadosExcel(cotacoes: Cotacao[]) {
  return cotacoes.map(c => ({
    ID: c.id,
    Data: new Date(c.data).toLocaleDateString('pt-BR'),
    Nome: c.dadosPessoais.nome,
    CPF: c.dadosPessoais.cpf,
    Email: c.dadosPessoais.email,
    Telefone: c.dadosPessoais.telefone,
    Veículo: `${c.veiculo.marca} ${c.veiculo.modelo}`,
    Ano: c.veiculo.ano,
    'Valor FIPE': c.veiculo.valorFipe,
    Cidade: c.localizacao.cidade,
    UF: c.localizacao.uf,
    Região: c.localizacao.regiao,
    'Prêmio Mensal': c.resultado.premioMensal,
    'Prêmio Anual': c.resultado.premioAnual,
    Status: c.status,
  }));
}

// ============================================================================
// FUNÇÕES AUXILIARES
// ============================================================================

/**
 * Formata valor em reais
 */
export function formatarReais(valor: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(valor);
}

/**
 * Formata percentual
 */
export function formatarPercentual(valor: number): string {
  return `${valor.toFixed(1)}%`;
}

/**
 * Obtém nome da região
 */
export function obterNomeRegiao(regiao: number): string {
  const nomes: { [key: number]: string } = {
    1: 'Região 1 - Menor Risco',
    2: 'Região 2 - Risco Baixo',
    3: 'Região 3 - Risco Médio',
    4: 'Região 4 - Risco Alto',
    5: 'Região 5 - Maior Risco',
  };
  return nomes[regiao] || `Região ${regiao}`;
}

/**
 * Obtém cor do status
 */
export function obterCorStatus(status: Cotacao['status']): string {
  const cores: { [key in Cotacao['status']]: string } = {
    cotacao: 'blue',
    proposta: 'yellow',
    apolice: 'green',
    cancelada: 'red',
  };
  return cores[status];
}

/**
 * Obtém label do status
 */
export function obterLabelStatus(status: Cotacao['status']): string {
  const labels: { [key in Cotacao['status']]: string } = {
    cotacao: 'Cotação',
    proposta: 'Proposta',
    apolice: 'Apólice',
    cancelada: 'Cancelada',
  };
  return labels[status];
}

