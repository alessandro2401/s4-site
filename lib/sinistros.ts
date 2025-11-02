/**
 * Biblioteca de Análise de Sinistralidade
 * ONDA 8.4: Análise de Sinistralidade
 * 
 * Esta biblioteca fornece funções avançadas para análise de sinistros,
 * cálculo de frequência, severidade e indicadores de performance.
 * 
 * @module sinistros
 * @version 8.4.0
 */

import { 
  Sinistro, 
  Apolice, 
  listarSinistros, 
  listarApolices,
  buscarApolicePorId,
  buscarCotacaoPorId 
} from './storage';
import { formatarReais } from './cotacoes';

// ============================================================================
// TIPOS E INTERFACES
// ============================================================================

export interface EstatisticasSinistros {
  total: number;
  porTipo: {
    colisao: number;
    roubo: number;
    furto: number;
    incendio: number;
    outros: number;
  };
  porStatus: {
    aberto: number;
    em_analise: number;
    aprovado: number;
    pago: number;
    negado: number;
  };
  valorTotalIndenizado: number;
  valorMedioIndenizado: number;
  frequencia: number; // sinistros por 100 apólices
  severidade: number; // custo médio por sinistro
  indicesinistralidade: number; // (valor indenizado / prêmios) * 100
}

export interface SinistrosPorRegiao {
  regiao: number;
  quantidade: number;
  valorTotal: number;
  valorMedio: number;
  frequencia: number;
  percentual: number;
}

export interface SinistrosPorPerfil {
  faixaIdade: string;
  quantidade: number;
  valorTotal: number;
  valorMedio: number;
  percentual: number;
}

export interface SinistrosPorTempoCNH {
  faixa: string;
  quantidade: number;
  valorTotal: number;
  valorMedio: number;
  percentual: number;
}

export interface IndicadoresSinistralidade {
  frequencia: number;
  severidade: number;
  indice: number;
  custoMedioPorApolice: number;
  taxaAprovacao: number;
  tempoMedioAnalise: number;
}

// ============================================================================
// FUNÇÕES DE ESTATÍSTICAS GERAIS
// ============================================================================

/**
 * Calcula estatísticas gerais de sinistros
 */
export function calcularEstatisticasSinistros(
  sinistros?: Sinistro[],
  apolices?: Apolice[]
): EstatisticasSinistros {
  const dadosSinistros = sinistros || listarSinistros();
  const dadosApolices = apolices || listarApolices();
  
  const total = dadosSinistros.length;
  
  // Por tipo
  const porTipo = {
    colisao: dadosSinistros.filter(s => s.tipo === 'colisao').length,
    roubo: dadosSinistros.filter(s => s.tipo === 'roubo').length,
    furto: dadosSinistros.filter(s => s.tipo === 'furto').length,
    incendio: dadosSinistros.filter(s => s.tipo === 'incendio').length,
    outros: dadosSinistros.filter(s => s.tipo === 'outros').length,
  };
  
  // Por status
  const porStatus = {
    aberto: dadosSinistros.filter(s => s.status === 'aberto').length,
    em_analise: dadosSinistros.filter(s => s.status === 'em_analise').length,
    aprovado: dadosSinistros.filter(s => s.status === 'aprovado').length,
    pago: dadosSinistros.filter(s => s.status === 'pago').length,
    negado: dadosSinistros.filter(s => s.status === 'negado').length,
  };
  
  // Valores
  const sinistrosPagos = dadosSinistros.filter(s => s.status === 'pago');
  const valorTotalIndenizado = sinistrosPagos.reduce((acc, s) => acc + s.valorIndenizado, 0);
  const valorMedioIndenizado = sinistrosPagos.length > 0
    ? valorTotalIndenizado / sinistrosPagos.length
    : 0;
  
  // Frequência (sinistros por 100 apólices)
  const apolicesAtivas = dadosApolices.filter(a => a.status === 'ativa');
  const frequencia = apolicesAtivas.length > 0
    ? (total / apolicesAtivas.length) * 100
    : 0;
  
  // Severidade (custo médio por sinistro)
  const severidade = total > 0
    ? valorTotalIndenizado / total
    : 0;
  
  // Índice de sinistralidade (valor indenizado / prêmios)
  const premiosTotal = apolicesAtivas.reduce((acc, a) => acc + a.valorAnual, 0);
  const indicesinistralidade = premiosTotal > 0
    ? (valorTotalIndenizado / premiosTotal) * 100
    : 0;
  
  return {
    total,
    porTipo,
    porStatus,
    valorTotalIndenizado,
    valorMedioIndenizado,
    frequencia,
    severidade,
    indicesinistralidade,
  };
}

// ============================================================================
// ANÁLISE POR REGIÃO
// ============================================================================

/**
 * Analisa sinistros por região
 */
export function analisarSinistrosPorRegiao(
  sinistros?: Sinistro[],
  apolices?: Apolice[]
): SinistrosPorRegiao[] {
  const dadosSinistros = sinistros || listarSinistros();
  const dadosApolices = apolices || listarApolices();
  
  const regioes = [1, 2, 3, 4, 5];
  const totalSinistros = dadosSinistros.length;
  
  return regioes.map(regiao => {
    // Filtra sinistros da região
    const sinistrosRegiao = dadosSinistros.filter(s => {
      const apolice = buscarApolicePorId(s.apoliceId);
      if (!apolice) return false;
      
      const cotacao = buscarCotacaoPorId(apolice.cotacaoId);
      return cotacao?.localizacao.regiao === regiao;
    });
    
    // Apólices da região
    const apolicesRegiao = dadosApolices.filter(a => {
      const cotacao = buscarCotacaoPorId(a.cotacaoId);
      return cotacao?.localizacao.regiao === regiao && a.status === 'ativa';
    });
    
    const quantidade = sinistrosRegiao.length;
    const valorTotal = sinistrosRegiao
      .filter(s => s.status === 'pago')
      .reduce((acc, s) => acc + s.valorIndenizado, 0);
    
    const valorMedio = quantidade > 0 ? valorTotal / quantidade : 0;
    const frequencia = apolicesRegiao.length > 0
      ? (quantidade / apolicesRegiao.length) * 100
      : 0;
    const percentual = totalSinistros > 0
      ? (quantidade / totalSinistros) * 100
      : 0;
    
    return {
      regiao,
      quantidade,
      valorTotal,
      valorMedio,
      frequencia,
      percentual,
    };
  });
}

// ============================================================================
// ANÁLISE POR PERFIL DE CONDUTOR
// ============================================================================

/**
 * Analisa sinistros por faixa etária
 */
export function analisarSinistrosPorIdade(
  sinistros?: Sinistro[]
): SinistrosPorPerfil[] {
  const dadosSinistros = sinistros || listarSinistros();
  
  const faixas = [
    { nome: '18-25 anos', min: 18, max: 25 },
    { nome: '26-35 anos', min: 26, max: 35 },
    { nome: '36-50 anos', min: 36, max: 50 },
    { nome: '51-65 anos', min: 51, max: 65 },
    { nome: '65+ anos', min: 66, max: 999 },
  ];
  
  const totalSinistros = dadosSinistros.length;
  
  return faixas.map(faixa => {
    const sinistrosFaixa = dadosSinistros.filter(s => {
      const apolice = buscarApolicePorId(s.apoliceId);
      if (!apolice) return false;
      
      const cotacao = buscarCotacaoPorId(apolice.cotacaoId);
      if (!cotacao) return false;
      
      const idade = cotacao.condutor.idade;
      return idade >= faixa.min && idade <= faixa.max;
    });
    
    const quantidade = sinistrosFaixa.length;
    const valorTotal = sinistrosFaixa
      .filter(s => s.status === 'pago')
      .reduce((acc, s) => acc + s.valorIndenizado, 0);
    
    const valorMedio = quantidade > 0 ? valorTotal / quantidade : 0;
    const percentual = totalSinistros > 0
      ? (quantidade / totalSinistros) * 100
      : 0;
    
    return {
      faixaIdade: faixa.nome,
      quantidade,
      valorTotal,
      valorMedio,
      percentual,
    };
  });
}

/**
 * Analisa sinistros por tempo de CNH
 */
export function analisarSinistrosPorTempoCNH(
  sinistros?: Sinistro[]
): SinistrosPorTempoCNH[] {
  const dadosSinistros = sinistros || listarSinistros();
  
  const faixas = [
    { nome: '0-2 anos', min: 0, max: 2 },
    { nome: '3-5 anos', min: 3, max: 5 },
    { nome: '6-10 anos', min: 6, max: 10 },
    { nome: '11-20 anos', min: 11, max: 20 },
    { nome: '20+ anos', min: 21, max: 999 },
  ];
  
  const totalSinistros = dadosSinistros.length;
  
  return faixas.map(faixa => {
    const sinistrosFaixa = dadosSinistros.filter(s => {
      const apolice = buscarApolicePorId(s.apoliceId);
      if (!apolice) return false;
      
      const cotacao = buscarCotacaoPorId(apolice.cotacaoId);
      if (!cotacao) return false;
      
      const tempoCNH = cotacao.condutor.tempoCNH;
      return tempoCNH >= faixa.min && tempoCNH <= faixa.max;
    });
    
    const quantidade = sinistrosFaixa.length;
    const valorTotal = sinistrosFaixa
      .filter(s => s.status === 'pago')
      .reduce((acc, s) => acc + s.valorIndenizado, 0);
    
    const valorMedio = quantidade > 0 ? valorTotal / quantidade : 0;
    const percentual = totalSinistros > 0
      ? (quantidade / totalSinistros) * 100
      : 0;
    
    return {
      faixa: faixa.nome,
      quantidade,
      valorTotal,
      valorMedio,
      percentual,
    };
  });
}

// ============================================================================
// INDICADORES DE SINISTRALIDADE
// ============================================================================

/**
 * Calcula indicadores de sinistralidade
 */
export function calcularIndicadoresSinistralidade(
  sinistros?: Sinistro[],
  apolices?: Apolice[]
): IndicadoresSinistralidade {
  const dadosSinistros = sinistros || listarSinistros();
  const dadosApolices = apolices || listarApolices();
  
  const stats = calcularEstatisticasSinistros(dadosSinistros, dadosApolices);
  
  // Custo médio por apólice
  const apolicesAtivas = dadosApolices.filter(a => a.status === 'ativa');
  const custoMedioPorApolice = apolicesAtivas.length > 0
    ? stats.valorTotalIndenizado / apolicesAtivas.length
    : 0;
  
  // Taxa de aprovação
  const sinistrosFinalizados = dadosSinistros.filter(s => 
    s.status === 'aprovado' || s.status === 'pago' || s.status === 'negado'
  );
  const sinistrosAprovados = dadosSinistros.filter(s => 
    s.status === 'aprovado' || s.status === 'pago'
  );
  const taxaAprovacao = sinistrosFinalizados.length > 0
    ? (sinistrosAprovados.length / sinistrosFinalizados.length) * 100
    : 0;
  
  // Tempo médio de análise (simulado - em dias)
  const tempoMedioAnalise = 15; // Placeholder - seria calculado com datas reais
  
  return {
    frequencia: stats.frequencia,
    severidade: stats.severidade,
    indice: stats.indicesinistralidade,
    custoMedioPorApolice,
    taxaAprovacao,
    tempoMedioAnalise,
  };
}

// ============================================================================
// FUNÇÕES AUXILIARES
// ============================================================================

/**
 * Obtém cor do tipo de sinistro
 */
export function obterCorTipo(tipo: Sinistro['tipo']): string {
  const cores: { [key in Sinistro['tipo']]: string } = {
    colisao: 'blue',
    roubo: 'red',
    furto: 'orange',
    incendio: 'purple',
    outros: 'gray',
  };
  return cores[tipo];
}

/**
 * Obtém label do tipo de sinistro
 */
export function obterLabelTipo(tipo: Sinistro['tipo']): string {
  const labels: { [key in Sinistro['tipo']]: string } = {
    colisao: 'Colisão',
    roubo: 'Roubo',
    furto: 'Furto',
    incendio: 'Incêndio',
    outros: 'Outros',
  };
  return labels[tipo];
}

/**
 * Obtém cor do status de sinistro
 */
export function obterCorStatus(status: Sinistro['status']): string {
  const cores: { [key in Sinistro['status']]: string } = {
    aberto: 'yellow',
    em_analise: 'blue',
    aprovado: 'green',
    pago: 'green',
    negado: 'red',
  };
  return cores[status];
}

/**
 * Obtém label do status de sinistro
 */
export function obterLabelStatus(status: Sinistro['status']): string {
  const labels: { [key in Sinistro['status']]: string } = {
    aberto: 'Aberto',
    em_analise: 'Em Análise',
    aprovado: 'Aprovado',
    pago: 'Pago',
    negado: 'Negado',
  };
  return labels[status];
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
    1: 'Região 1',
    2: 'Região 2',
    3: 'Região 3',
    4: 'Região 4',
    5: 'Região 5',
  };
  return nomes[regiao] || `Região ${regiao}`;
}

