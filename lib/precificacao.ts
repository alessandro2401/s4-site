/**
 * Biblioteca de Precificação AURA Auto Mensal
 * ONDA 1: Cálculos básicos (origem, idade veículo)
 * 
 * @module precificacao
 * @version 1.0.0 - ONDA 1
 */

export interface DadosVeiculoOnda1 {
  valorFipe: number;
  plano: 'digital' | 'basico' | 'essencial';
  origem: 'Nacional' | 'Importado';
  anoFabricacao: number;
}

export interface ResultadoCalculo {
  premioMensal: number;
  premioAnual: number;
  fatorAjuste: number;
  detalhes: {
    premioBase: number;
    ajusteOrigem: number;
    ajusteIdade: number;
    ajusteNacionalNovo: number;
  };
}

export interface ResultadoTodosPlanos {
  digital: ResultadoCalculo;
  basico: ResultadoCalculo;
  essencial: ResultadoCalculo;
  fatorAjuste: number;
}

// Coeficientes base (mesmos da planilha Excel)
const COEFICIENTES = {
  digital: 0.007553,
  basico: 0.008427,
  essencial: 0.0097
} as const;

// Fatores de ajuste
const FATORES = {
  importado: 1.05,        // +5%
  idadeMaior15: 1.05,     // +5%
  nacionalNovo: 0.97      // -3%
} as const;

/**
 * Calcula a idade do veículo baseado no ano de fabricação
 */
export function calcularIdadeVeiculo(anoFabricacao: number): number {
  const anoAtual = new Date().getFullYear();
  return anoAtual - anoFabricacao;
}

/**
 * Calcula fator de ajuste baseado em origem e idade do veículo
 * ONDA 1: Apenas variáveis básicas
 * 
 * @param origem - Origem do veículo (Nacional ou Importado)
 * @param anoFabricacao - Ano de fabricação do veículo
 * @returns Fator de ajuste multiplicativo
 * 
 * @example
 * calcularFatorAjusteOnda1('Importado', 2005) // 1.1025 (importado + >15 anos)
 * calcularFatorAjusteOnda1('Nacional', 2023) // 0.97 (nacional novo)
 */
export function calcularFatorAjusteOnda1(
  origem: 'Nacional' | 'Importado',
  anoFabricacao: number
): number {
  let fator = 1.0;
  
  // Calcular idade do veículo
  const idade = calcularIdadeVeiculo(anoFabricacao);
  
  // Aplicar ajustes (multiplicativos)
  if (origem === 'Importado') {
    fator *= FATORES.importado; // +5%
  }
  
  if (idade > 15) {
    fator *= FATORES.idadeMaior15; // +5%
  }
  
  if (origem === 'Nacional' && idade <= 5) {
    fator *= FATORES.nacionalNovo; // -3%
  }
  
  return fator;
}

/**
 * Calcula prêmio mensal com ajustes da ONDA 1
 * 
 * @param dados - Dados do veículo para cálculo
 * @returns Resultado completo do cálculo
 */
export function calcularPremioOnda1(dados: DadosVeiculoOnda1): ResultadoCalculo {
  // Validações
  if (dados.valorFipe <= 0) {
    throw new Error('Valor FIPE deve ser maior que zero');
  }
  if (dados.anoFabricacao < 1900 || dados.anoFabricacao > new Date().getFullYear() + 1) {
    throw new Error('Ano de fabricação inválido');
  }
  
  // Prêmio base
  const coef = COEFICIENTES[dados.plano];
  const premioBase = dados.valorFipe * coef;
  
  // Calcular idade
  const idade = calcularIdadeVeiculo(dados.anoFabricacao);
  
  // Calcular ajustes individuais
  const ajusteOrigem = dados.origem === 'Importado' ? FATORES.importado : 1.0;
  const ajusteIdade = idade > 15 ? FATORES.idadeMaior15 : 1.0;
  const ajusteNacionalNovo = (dados.origem === 'Nacional' && idade <= 5) ? FATORES.nacionalNovo : 1.0;
  
  // Fator de ajuste total
  const fatorAjuste = ajusteOrigem * ajusteIdade * ajusteNacionalNovo;
  
  // Prêmio final
  const premioMensal = Math.round(premioBase * fatorAjuste * 100) / 100; // 2 casas decimais
  const premioAnual = Math.round(premioMensal * 12 * 100) / 100;
  
  return {
    premioMensal,
    premioAnual,
    fatorAjuste,
    detalhes: {
      premioBase: Math.round(premioBase * 100) / 100,
      ajusteOrigem,
      ajusteIdade,
      ajusteNacionalNovo
    }
  };
}

/**
 * Calcula prêmios para todos os planos de uma vez
 * 
 * @param valorFipe - Valor FIPE do veículo
 * @param origem - Origem do veículo
 * @param anoFabricacao - Ano de fabricação
 * @returns Resultado para os 3 planos
 */
export function calcularTodosPlanosOnda1(
  valorFipe: number,
  origem: 'Nacional' | 'Importado',
  anoFabricacao: number
): ResultadoTodosPlanos {
  const fatorAjuste = calcularFatorAjusteOnda1(origem, anoFabricacao);
  
  return {
    digital: calcularPremioOnda1({ valorFipe, plano: 'digital', origem, anoFabricacao }),
    basico: calcularPremioOnda1({ valorFipe, plano: 'basico', origem, anoFabricacao }),
    essencial: calcularPremioOnda1({ valorFipe, plano: 'essencial', origem, anoFabricacao }),
    fatorAjuste
  };
}

/**
 * Formata valor monetário para exibição
 */
export function formatarMoeda(valor: number): string {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(valor);
}

/**
 * Formata percentual para exibição
 */
export function formatarPercentual(valor: number): string {
  const percentual = (valor - 1) * 100;
  const sinal = percentual >= 0 ? '+' : '';
  return `${sinal}${percentual.toFixed(2)}%`;
}
