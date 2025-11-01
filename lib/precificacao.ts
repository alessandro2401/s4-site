/**
 * Biblioteca de Precificação AURA Auto Mensal
 * ONDA 3: Perfil do Condutor
 * 
 * @module precificacao
 * @version 3.0.0 - ONDA 3 (Perfil do Condutor)
 */

// ============================================================================
// CONFIGURAÇÕES DO MODELO ATUARIAL - VERSÃO 3.0
// ============================================================================

const TAXA_BASE = 0.03; // 3,0% sobre o valor FIPE

// Fatores Aditivos de Idade do Veículo (em % sobre o valor FIPE)
const FATORES_IDADE_VEICULO: Record<string, number> = {
  '0-3': 0.0000,   // 0-3 anos: 0,00%
  '4-7': 0.0030,   // 4-7 anos: 0,30%
  '8-12': 0.0045,  // 8-12 anos: 0,45%
  '13+': 0.0060    // 13+ anos: 0,60%
};

// Fatores Aditivos de Idade do Condutor (em % sobre o prêmio sem desconto)
const FATORES_IDADE_CONDUTOR: Record<string, number> = {
  '18-25': 0.11,   // 18-25 anos: +11%
  '26-35': 0.00,   // 26-35 anos: +0%
  '36-60': -0.01,  // 36-60 anos: -1%
  '61+': 0.15      // 61+ anos: +15%
};

// Fatores Aditivos de Tempo de Habilitação (em % sobre o prêmio sem desconto)
const FATORES_TEMPO_CNH: Record<string, number> = {
  '0-2': 0.05,     // 0-2 anos: +5%
  '3-5': 0.03,     // 3-5 anos: +3%
  '6+': -0.03      // 6+ anos: -3%
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

export interface PerfilCondutor {
  idadeCondutor: number;
  tempoCNH: number; // em anos
}

export interface DadosVeiculoOnda3 {
  valorFipe: number;
  anoFabricacao: number;
  uf?: string; // UF do CEP (opcional, mas recomendado)
  perfilCondutor?: PerfilCondutor; // Opcional para manter compatibilidade
}

export interface ResultadoCalculoOnda3 {
  sucesso: boolean;
  erro?: string;
  valorFipe: number;
  idadeVeiculo: number;
  uf?: string;
  isRegiao3: boolean;
  taxaBase: number;
  premioBase: number;
  fatorIdadeVeiculo: number;
  aditivoIdadeVeiculo: number;
  premioSemDesconto: number;
  percentualDesconto: number;
  valorDesconto: number;
  // Novos campos ONDA 3
  perfilCondutor?: PerfilCondutor;
  fatorIdadeCondutor?: number;
  aditivoIdadeCondutor?: number;
  fatorTempoCNH?: number;
  aditivoTempoCNH?: number;
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
export function obterFatorIdadeVeiculo(idadeVeiculo: number): number {
  if (idadeVeiculo <= 3) return FATORES_IDADE_VEICULO['0-3'];
  if (idadeVeiculo <= 7) return FATORES_IDADE_VEICULO['4-7'];
  if (idadeVeiculo <= 12) return FATORES_IDADE_VEICULO['8-12'];
  return FATORES_IDADE_VEICULO['13+'];
}

/**
 * Retorna a descrição da faixa de idade do veículo
 */
export function obterFaixaIdadeVeiculo(idadeVeiculo: number): string {
  if (idadeVeiculo <= 3) return '0-3 anos';
  if (idadeVeiculo <= 7) return '4-7 anos';
  if (idadeVeiculo <= 12) return '8-12 anos';
  return '13+ anos';
}

/**
 * Retorna o fator aditivo de idade do condutor
 */
export function obterFatorIdadeCondutor(idadeCondutor: number): number {
  if (idadeCondutor < 18) return 0; // Menor de idade não pode contratar
  if (idadeCondutor <= 25) return FATORES_IDADE_CONDUTOR['18-25'];
  if (idadeCondutor <= 35) return FATORES_IDADE_CONDUTOR['26-35'];
  if (idadeCondutor <= 60) return FATORES_IDADE_CONDUTOR['36-60'];
  return FATORES_IDADE_CONDUTOR['61+'];
}

/**
 * Retorna a descrição da faixa de idade do condutor
 */
export function obterFaixaIdadeCondutor(idadeCondutor: number): string {
  if (idadeCondutor < 18) return 'Menor de idade';
  if (idadeCondutor <= 25) return '18-25 anos';
  if (idadeCondutor <= 35) return '26-35 anos';
  if (idadeCondutor <= 60) return '36-60 anos';
  return '61+ anos';
}

/**
 * Retorna o fator aditivo de tempo de CNH
 */
export function obterFatorTempoCNH(tempoCNH: number): number {
  if (tempoCNH <= 2) return FATORES_TEMPO_CNH['0-2'];
  if (tempoCNH <= 5) return FATORES_TEMPO_CNH['3-5'];
  return FATORES_TEMPO_CNH['6+'];
}

/**
 * Retorna a descrição da faixa de tempo de CNH
 */
export function obterFaixaTempoCNH(tempoCNH: number): string {
  if (tempoCNH <= 2) return '0-2 anos';
  if (tempoCNH <= 5) return '3-5 anos';
  return '6+ anos';
}

// ============================================================================
// FUNÇÃO PRINCIPAL DE CÁLCULO
// ============================================================================

/**
 * Calcula o prêmio do seguro com base no modelo ONDA 3
 * 
 * @param dados - Dados do veículo e condutor para cálculo
 * @returns Resultado completo do cálculo com perfil do condutor
 * 
 * @example
 * // Veículo em Recife com condutor jovem
 * calcularPremioOnda3({
 *   valorFipe: 32000,
 *   anoFabricacao: 2015,
 *   uf: 'PE',
 *   perfilCondutor: {
 *     idadeCondutor: 23,
 *     tempoCNH: 2
 *   }
 * })
 */
export function calcularPremioOnda3(dados: DadosVeiculoOnda3): ResultadoCalculoOnda3 {
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
      fatorIdadeVeiculo: 0,
      aditivoIdadeVeiculo: 0,
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
      fatorIdadeVeiculo: 0,
      aditivoIdadeVeiculo: 0,
      premioSemDesconto: 0,
      percentualDesconto: 0,
      valorDesconto: 0,
      premioAnual: 0,
      premioMensal: 0
    };
  }

  // Validar perfil do condutor se fornecido
  if (dados.perfilCondutor) {
    if (dados.perfilCondutor.idadeCondutor < 18) {
      return {
        sucesso: false,
        erro: 'Condutor deve ter no mínimo 18 anos',
        valorFipe: dados.valorFipe,
        idadeVeiculo: 0,
        isRegiao3: false,
        taxaBase: 0,
        premioBase: 0,
        fatorIdadeVeiculo: 0,
        aditivoIdadeVeiculo: 0,
        premioSemDesconto: 0,
        percentualDesconto: 0,
        valorDesconto: 0,
        premioAnual: 0,
        premioMensal: 0
      };
    }

    if (dados.perfilCondutor.tempoCNH < 0) {
      return {
        sucesso: false,
        erro: 'Tempo de CNH inválido',
        valorFipe: dados.valorFipe,
        idadeVeiculo: 0,
        isRegiao3: false,
        taxaBase: 0,
        premioBase: 0,
        fatorIdadeVeiculo: 0,
        aditivoIdadeVeiculo: 0,
        premioSemDesconto: 0,
        percentualDesconto: 0,
        valorDesconto: 0,
        premioAnual: 0,
        premioMensal: 0
      };
    }
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
      fatorIdadeVeiculo: 0,
      aditivoIdadeVeiculo: 0,
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

  // 3. Calcular Aditivo de Idade do Veículo
  const fatorIdadeVeiculo = obterFatorIdadeVeiculo(idadeVeiculo);
  const aditivoIdadeVeiculo = dados.valorFipe * fatorIdadeVeiculo;

  // 4. Calcular Prêmio Sem Desconto (base para cálculos de condutor)
  const premioSemDesconto = premioBase + aditivoIdadeVeiculo;

  // 5. Calcular Aditivos de Perfil do Condutor (se fornecido)
  let fatorIdadeCondutor = 0;
  let aditivoIdadeCondutor = 0;
  let fatorTempoCNH = 0;
  let aditivoTempoCNH = 0;

  if (dados.perfilCondutor) {
    fatorIdadeCondutor = obterFatorIdadeCondutor(dados.perfilCondutor.idadeCondutor);
    aditivoIdadeCondutor = premioSemDesconto * fatorIdadeCondutor;

    fatorTempoCNH = obterFatorTempoCNH(dados.perfilCondutor.tempoCNH);
    aditivoTempoCNH = premioSemDesconto * fatorTempoCNH;
  }

  // 6. Prêmio com Perfil do Condutor
  const premioComPerfil = premioSemDesconto + aditivoIdadeCondutor + aditivoTempoCNH;

  // 7. Aplicar Desconto Regional (se aplicável)
  const isRegiao3Calc = dados.uf ? isRegiao3(dados.uf) : false;
  const valorDesconto = isRegiao3Calc ? premioComPerfil * PERCENTUAL_DESCONTO_REGIAO_3 : 0;

  // 8. Prêmio Final
  const premioAnual = premioComPerfil - valorDesconto;
  const premioMensal = premioAnual / 12;

  return {
    sucesso: true,
    valorFipe: dados.valorFipe,
    idadeVeiculo,
    uf: dados.uf,
    isRegiao3: isRegiao3Calc,
    taxaBase: TAXA_BASE,
    premioBase: Math.round(premioBase * 100) / 100,
    fatorIdadeVeiculo,
    aditivoIdadeVeiculo: Math.round(aditivoIdadeVeiculo * 100) / 100,
    premioSemDesconto: Math.round(premioSemDesconto * 100) / 100,
    percentualDesconto: isRegiao3Calc ? PERCENTUAL_DESCONTO_REGIAO_3 : 0,
    valorDesconto: Math.round(valorDesconto * 100) / 100,
    perfilCondutor: dados.perfilCondutor,
    fatorIdadeCondutor: dados.perfilCondutor ? fatorIdadeCondutor : undefined,
    aditivoIdadeCondutor: dados.perfilCondutor ? Math.round(aditivoIdadeCondutor * 100) / 100 : undefined,
    fatorTempoCNH: dados.perfilCondutor ? fatorTempoCNH : undefined,
    aditivoTempoCNH: dados.perfilCondutor ? Math.round(aditivoTempoCNH * 100) / 100 : undefined,
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
 * Formata percentual com sinal (+/-)
 */
export function formatarPercentualComSinal(valor: number): string {
  const percentual = valor * 100;
  const sinal = percentual >= 0 ? '+' : '';
  return `${sinal}${percentual.toFixed(0)}%`;
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

