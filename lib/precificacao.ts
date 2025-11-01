/**
 * Biblioteca de Precificação AURA Auto Mensal
 * ONDA 2: Modelo Revisado com Desconto Regional
 * 
 * @module precificacao
 * @version 2.0.0 - ONDA 2 (Desconto Regional 10% Região 3)
 */

// ============================================================================
// CONFIGURAÇÕES DO MODELO ATUARIAL - VERSÃO 2.0
// ============================================================================

const TAXA_BASE = 0.03; // 3,0% sobre o valor FIPE

// Fatores Aditivos de Idade do Veículo (em % sobre o valor FIPE)
const FATORES_IDADE: Record<string, number> = {
  '0-3': 0.0000,   // 0-3 anos: 0,00%
  '4-7': 0.0030,   // 4-7 anos: 0,30%
  '8-12': 0.0045,  // 8-12 anos: 0,45%
  '13+': 0.0060    // 13+ anos: 0,60%
};

// Estados autorizados (Regiões 3 e 5)
export const ESTADOS_AUTORIZADOS = ['AL', 'PB', 'PE', 'RN', 'DF', 'ES', 'GO', 'MG', 'TO'];

// Estados da Região 3 (com desconto)
export const ESTADOS_REGIAO_3 = ['AL', 'PB', 'PE', 'RN'];

// Percentual de desconto para a Região 3
const PERCENTUAL_DESCONTO_REGIAO_3 = 0.10; // 10%

// ============================================================================
// INTERFACES
// ============================================================================

export interface DadosVeiculoOnda2 {
  valorFipe: number;
  anoFabricacao: number;
  uf?: string; // UF do CEP (opcional, mas recomendado)
}

export interface ResultadoCalculoOnda2 {
  sucesso: boolean;
  erro?: string;
  valorFipe: number;
  idadeVeiculo: number;
  uf?: string;
  isRegiao3: boolean;
  taxaBase: number;
  premioBase: number;
  fatorIdade: number;
  aditivoIdade: number;
  premioSemDesconto: number;
  percentualDesconto: number;
  valorDesconto: number;
  premioAnual: number;
  premioMensal: number;
}

// ============================================================================
// FUNÇÕES AUXILIARES
// ============================================================================

/**
 * Calcula a idade do veículo baseado no ano de fabricação
 */
export function calcularIdadeVeiculo(anoFabricacao: number): number {
  const anoAtual = new Date().getFullYear();
  return anoAtual - anoFabricacao;
}

/**
 * Valida se a UF está na área de atuação da seguradora
 */
export function validarAreaAtuacao(uf: string): boolean {
  return ESTADOS_AUTORIZADOS.includes(uf.toUpperCase());
}

/**
 * Verifica se a UF pertence à Região 3 (com desconto)
 */
export function isRegiao3(uf: string): boolean {
  return ESTADOS_REGIAO_3.includes(uf.toUpperCase());
}

/**
 * Retorna o fator aditivo de idade do veículo
 */
export function obterFatorIdade(idadeVeiculo: number): number {
  if (idadeVeiculo <= 3) return FATORES_IDADE['0-3'];
  if (idadeVeiculo <= 7) return FATORES_IDADE['4-7'];
  if (idadeVeiculo <= 12) return FATORES_IDADE['8-12'];
  return FATORES_IDADE['13+'];
}

/**
 * Retorna a descrição da faixa de idade
 */
export function obterFaixaIdade(idadeVeiculo: number): string {
  if (idadeVeiculo <= 3) return '0-3 anos';
  if (idadeVeiculo <= 7) return '4-7 anos';
  if (idadeVeiculo <= 12) return '8-12 anos';
  return '13+ anos';
}

// ============================================================================
// FUNÇÃO PRINCIPAL DE CÁLCULO
// ============================================================================

/**
 * Calcula o prêmio do seguro com base no modelo revisado (ONDA 2)
 * 
 * @param dados - Dados do veículo para cálculo
 * @returns Resultado completo do cálculo com desconto regional
 * 
 * @example
 * // Veículo em Recife (Região 3 - com desconto)
 * calcularPremioOnda2({
 *   valorFipe: 32000,
 *   anoFabricacao: 2015,
 *   uf: 'PE'
 * })
 * 
 * // Veículo em Belo Horizonte (Região 5 - sem desconto)
 * calcularPremioOnda2({
 *   valorFipe: 45000,
 *   anoFabricacao: 2018,
 *   uf: 'MG'
 * })
 */
export function calcularPremioOnda2(dados: DadosVeiculoOnda2): ResultadoCalculoOnda2 {
  // Validações básicas
  if (dados.valorFipe <= 0) {
    return {
      sucesso: false,
      erro: 'Valor FIPE deve ser maior que zero',
      valorFipe: dados.valorFipe,
      idadeVeiculo: 0,
      isRegiao3: false,
      taxaBase: 0,
      premioBase: 0,
      fatorIdade: 0,
      aditivoIdade: 0,
      premioSemDesconto: 0,
      percentualDesconto: 0,
      valorDesconto: 0,
      premioAnual: 0,
      premioMensal: 0
    };
  }

  const anoAtual = new Date().getFullYear();
  if (dados.anoFabricacao < 1900 || dados.anoFabricacao > anoAtual + 1) {
    return {
      sucesso: false,
      erro: 'Ano de fabricação inválido',
      valorFipe: dados.valorFipe,
      idadeVeiculo: 0,
      isRegiao3: false,
      taxaBase: 0,
      premioBase: 0,
      fatorIdade: 0,
      aditivoIdade: 0,
      premioSemDesconto: 0,
      percentualDesconto: 0,
      valorDesconto: 0,
      premioAnual: 0,
      premioMensal: 0
    };
  }

  // Validar área de atuação (se UF fornecida)
  if (dados.uf && !validarAreaAtuacao(dados.uf)) {
    return {
      sucesso: false,
      erro: `Não atuamos no estado ${dados.uf}. Atuação limitada a: ${ESTADOS_AUTORIZADOS.join(', ')}`,
      valorFipe: dados.valorFipe,
      idadeVeiculo: 0,
      uf: dados.uf,
      isRegiao3: false,
      taxaBase: 0,
      premioBase: 0,
      fatorIdade: 0,
      aditivoIdade: 0,
      premioSemDesconto: 0,
      percentualDesconto: 0,
      valorDesconto: 0,
      premioAnual: 0,
      premioMensal: 0
    };
  }

  // 1. Calcular Idade do Veículo
  const idadeVeiculo = calcularIdadeVeiculo(dados.anoFabricacao);

  // 2. Calcular Prêmio Base
  const premioBase = dados.valorFipe * TAXA_BASE;

  // 3. Calcular Aditivo de Idade
  const fatorIdade = obterFatorIdade(idadeVeiculo);
  const aditivoIdade = dados.valorFipe * fatorIdade;

  // 4. Calcular Prêmio Sem Desconto
  const premioSemDesconto = premioBase + aditivoIdade;

  // 5. Aplicar Desconto Regional (se aplicável)
  const isRegiao3Calc = dados.uf ? isRegiao3(dados.uf) : false;
  const valorDesconto = isRegiao3Calc ? premioSemDesconto * PERCENTUAL_DESCONTO_REGIAO_3 : 0;

  // 6. Prêmio Final
  const premioAnual = premioSemDesconto - valorDesconto;
  const premioMensal = premioAnual / 12;

  return {
    sucesso: true,
    valorFipe: dados.valorFipe,
    idadeVeiculo,
    uf: dados.uf,
    isRegiao3: isRegiao3Calc,
    taxaBase: TAXA_BASE,
    premioBase: Math.round(premioBase * 100) / 100,
    fatorIdade,
    aditivoIdade: Math.round(aditivoIdade * 100) / 100,
    premioSemDesconto: Math.round(premioSemDesconto * 100) / 100,
    percentualDesconto: isRegiao3Calc ? PERCENTUAL_DESCONTO_REGIAO_3 : 0,
    valorDesconto: Math.round(valorDesconto * 100) / 100,
    premioAnual: Math.round(premioAnual * 100) / 100,
    premioMensal: Math.round(premioMensal * 100) / 100
  };
}

// ============================================================================
// FUNÇÕES DE FORMATAÇÃO
// ============================================================================

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
export function formatarPercentual(valor: number, casasDecimais: number = 2): string {
  return `${(valor * 100).toFixed(casasDecimais)}%`;
}

/**
 * Obtém nome da região por UF
 */
export function obterNomeRegiao(uf: string): string {
  if (ESTADOS_REGIAO_3.includes(uf.toUpperCase())) {
    return 'Região 3 (Nordeste)';
  }
  if (ESTADOS_AUTORIZADOS.includes(uf.toUpperCase())) {
    return 'Região 5 (Centro-Oeste/Sudeste)';
  }
  return 'Região não autorizada';
}

