/**
 * Biblioteca de Precificação AURA Auto Mensal
 * ONDA 5: Coberturas Personalizadas
 * 
 * @module precificacao
 * @version 5.0.0 - ONDA 5 (Coberturas Personalizadas)
 */

// ============================================================================
// CONFIGURAÇÕES DO MODELO ATUARIAL - VERSÃO 5.0
// ============================================================================

const TAXA_BASE = 0.025; // 2,5% sobre o valor FIPE

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

// Fatores Aditivos de Quilometragem (em % sobre o prêmio com perfil)
const FATOR_QUILOMETRAGEM_ALTA = 0.01; // +1% para > 70.001 km/ano

// Fatores Aditivos de Finalidade (em % sobre o prêmio com perfil)
const FATORES_FINALIDADE: Record<string, number> = {
  'particular': 0.00,  // Particular: 0% (base)
  'uber': 0.05,        // Uber/Táxi: +5%
  'comercial': 0.03    // Comercial (entregas): +3%
};

// Desconto de Rastreador (em % sobre o prêmio com perfil)
const DESCONTO_RASTREADOR = 0.05; // -5%

// Franquias (% sobre valor FIPE e impacto no prêmio)
const FRANQUIAS = {
  'normal': { percentualFIPE: 0.06, fatorPremio: 0.00 },    // 6% FIPE, 0% prêmio
  'reduzida': { percentualFIPE: 0.03, fatorPremio: 0.20 },  // 3% FIPE, +20% prêmio
  'agravada': { percentualFIPE: 0.12, fatorPremio: -0.10 }  // 12% FIPE, -10% prêmio
};

// Coberturas Opcionais (valores fixos em R$ por mês)
const COBERTURAS_OPCIONAIS = {
  vidros: 5.00,
  rcf: 12.00,
  app: 5.00,
  carroReserva: 15.00
};

// Assistência 24h
const ASSISTENCIA_24H = {
  basica: 0.00,    // 100km, inclusa
  completa: 0.10   // 500km, +10%
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

export interface UsoVeiculo {
  quilometragemAnual: number;
  finalidade: 'particular' | 'uber' | 'comercial';
  temRastreador: boolean;
}

export interface CoberturasPersonalizadas {
  franquia: 'normal' | 'reduzida' | 'agravada';
  vidros: boolean;
  rcf: boolean;
  app: boolean;
  carroReserva: boolean;
  assistencia: 'basica' | 'completa';
}

export interface DadosVeiculoOnda5 {
  valorFipe: number;
  anoFabricacao: number;
  uf?: string;
  perfilCondutor?: PerfilCondutor;
  usoVeiculo?: UsoVeiculo;
  coberturas?: CoberturasPersonalizadas; // Novo campo ONDA 5
}

export interface ResultadoCalculoOnda5 {
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
  // Campos ONDA 3
  perfilCondutor?: PerfilCondutor;
  fatorIdadeCondutor?: number;
  aditivoIdadeCondutor?: number;
  fatorTempoCNH?: number;
  aditivoTempoCNH?: number;
  // Campos ONDA 4
  usoVeiculo?: UsoVeiculo;
  fatorQuilometragem?: number;
  aditivoQuilometragem?: number;
  fatorFinalidade?: number;
  aditivoFinalidade?: number;
  descontoRastreador?: number;
  // Novos campos ONDA 5
  coberturas?: CoberturasPersonalizadas;
  valorFranquia?: number;
  fatorFranquia?: number;
  aditivoFranquia?: number;
  custoVidros?: number;
  custoRCF?: number;
  custoAPP?: number;
  custoCarroReserva?: number;
  fatorAssistencia?: number;
  aditivoAssistencia?: number;
  totalCoberturasOpcionais?: number;
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
  if (idadeCondutor < 18) return 0;
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

/**
 * Retorna o fator de quilometragem
 */
export function obterFatorQuilometragem(km: number): number {
  return km > 70000 ? FATOR_QUILOMETRAGEM_ALTA : 0;
}

/**
 * Retorna a descrição da faixa de quilometragem
 */
export function obterFaixaQuilometragem(km: number): string {
  if (km <= 70000) return 'Até 70.000 km/ano';
  return 'Acima de 70.000 km/ano';
}

/**
 * Retorna o fator de finalidade
 */
export function obterFatorFinalidade(finalidade: string): number {
  return FATORES_FINALIDADE[finalidade] || 0;
}

/**
 * Retorna a descrição da finalidade
 */
export function obterDescricaoFinalidade(finalidade: string): string {
  const descricoes: Record<string, string> = {
    'particular': 'Particular',
    'uber': 'Transporte de Passageiros (Uber/Táxi)',
    'comercial': 'Comercial (Entregas)'
  };
  return descricoes[finalidade] || 'Não especificado';
}

/**
 * Retorna o valor da franquia baseado no tipo
 */
export function obterValorFranquia(valorFipe: number, tipoFranquia: string): number {
  const franquia = FRANQUIAS[tipoFranquia as keyof typeof FRANQUIAS];
  return franquia ? valorFipe * franquia.percentualFIPE : 0;
}

/**
 * Retorna o fator de impacto da franquia no prêmio
 */
export function obterFatorFranquia(tipoFranquia: string): number {
  const franquia = FRANQUIAS[tipoFranquia as keyof typeof FRANQUIAS];
  return franquia ? franquia.fatorPremio : 0;
}

/**
 * Retorna a descrição do tipo de franquia
 */
export function obterDescricaoFranquia(tipoFranquia: string): string {
  const descricoes: Record<string, string> = {
    'normal': 'Normal (6% FIPE)',
    'reduzida': 'Reduzida (3% FIPE)',
    'agravada': 'Agravada (12% FIPE)'
  };
  return descricoes[tipoFranquia] || 'Não especificado';
}

/**
 * Retorna o custo mensal de uma cobertura opcional
 */
export function obterCustoCobertura(cobertura: string): number {
  return COBERTURAS_OPCIONAIS[cobertura as keyof typeof COBERTURAS_OPCIONAIS] || 0;
}

/**
 * Retorna o fator de assistência 24h
 */
export function obterFatorAssistencia(tipoAssistencia: string): number {
  return ASSISTENCIA_24H[tipoAssistencia as keyof typeof ASSISTENCIA_24H] || 0;
}

/**
 * Retorna a descrição da assistência 24h
 */
export function obterDescricaoAssistencia(tipoAssistencia: string): string {
  const descricoes: Record<string, string> = {
    'basica': 'Básica (100km)',
    'completa': 'Completa (500km)'
  };
  return descricoes[tipoAssistencia] || 'Não especificado';
}

// ============================================================================
// FUNÇÃO PRINCIPAL DE CÁLCULO
// ============================================================================

/**
 * Calcula o prêmio do seguro com base no modelo ONDA 5
 * 
 * @param dados - Dados completos do veículo, condutor, uso e coberturas
 * @returns Resultado completo do cálculo
 */
export function calcularPremioOnda5(dados: DadosVeiculoOnda5): ResultadoCalculoOnda5 {
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

  // Validar uso do veículo se fornecido
  if (dados.usoVeiculo) {
    if (dados.usoVeiculo.quilometragemAnual < 0) {
      return {
        sucesso: false,
        erro: 'Quilometragem anual inválida',
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

  // 4. Calcular Prêmio Sem Desconto
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

  // 7. Calcular Aditivos de Uso do Veículo (se fornecido)
  let fatorQuilometragem = 0;
  let aditivoQuilometragem = 0;
  let fatorFinalidade = 0;
  let aditivoFinalidade = 0;
  let descontoRastreador = 0;

  if (dados.usoVeiculo) {
    fatorQuilometragem = obterFatorQuilometragem(dados.usoVeiculo.quilometragemAnual);
    aditivoQuilometragem = premioComPerfil * fatorQuilometragem;

    fatorFinalidade = obterFatorFinalidade(dados.usoVeiculo.finalidade);
    aditivoFinalidade = premioComPerfil * fatorFinalidade;

    if (dados.usoVeiculo.temRastreador) {
      descontoRastreador = premioComPerfil * DESCONTO_RASTREADOR;
    }
  }

  // 8. Prêmio com Uso do Veículo
  const premioComUso = premioComPerfil + aditivoQuilometragem + aditivoFinalidade - descontoRastreador;

  // 9. Calcular Ajustes de Coberturas (se fornecido)
  let valorFranquia = 0;
  let fatorFranquia = 0;
  let aditivoFranquia = 0;
  let custoVidros = 0;
  let custoRCF = 0;
  let custoAPP = 0;
  let custoCarroReserva = 0;
  let fatorAssistencia = 0;
  let aditivoAssistencia = 0;
  let totalCoberturasOpcionais = 0;

  if (dados.coberturas) {
    // Franquia
    valorFranquia = obterValorFranquia(dados.valorFipe, dados.coberturas.franquia);
    fatorFranquia = obterFatorFranquia(dados.coberturas.franquia);
    aditivoFranquia = premioComUso * fatorFranquia;

    // Coberturas opcionais (valores fixos)
    if (dados.coberturas.vidros) custoVidros = COBERTURAS_OPCIONAIS.vidros;
    if (dados.coberturas.rcf) custoRCF = COBERTURAS_OPCIONAIS.rcf;
    if (dados.coberturas.app) custoAPP = COBERTURAS_OPCIONAIS.app;
    if (dados.coberturas.carroReserva) custoCarroReserva = COBERTURAS_OPCIONAIS.carroReserva;

    totalCoberturasOpcionais = custoVidros + custoRCF + custoAPP + custoCarroReserva;

    // Assistência 24h
    fatorAssistencia = obterFatorAssistencia(dados.coberturas.assistencia);
    aditivoAssistencia = premioComUso * fatorAssistencia;
  }

  // 10. Prêmio com Coberturas
  const premioComCoberturas = premioComUso + aditivoFranquia + aditivoAssistencia;

  // 11. Aplicar Desconto Regional (se aplicável)
  const isRegiao3Calc = dados.uf ? isRegiao3(dados.uf) : false;
  const valorDesconto = isRegiao3Calc ? premioComCoberturas * PERCENTUAL_DESCONTO_REGIAO_3 : 0;

  // 12. Prêmio Final
  const premioAnual = premioComCoberturas - valorDesconto + (totalCoberturasOpcionais * 12);
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
    usoVeiculo: dados.usoVeiculo,
    fatorQuilometragem: dados.usoVeiculo ? fatorQuilometragem : undefined,
    aditivoQuilometragem: dados.usoVeiculo ? Math.round(aditivoQuilometragem * 100) / 100 : undefined,
    fatorFinalidade: dados.usoVeiculo ? fatorFinalidade : undefined,
    aditivoFinalidade: dados.usoVeiculo ? Math.round(aditivoFinalidade * 100) / 100 : undefined,
    descontoRastreador: dados.usoVeiculo ? Math.round(descontoRastreador * 100) / 100 : undefined,
    coberturas: dados.coberturas,
    valorFranquia: dados.coberturas ? Math.round(valorFranquia * 100) / 100 : undefined,
    fatorFranquia: dados.coberturas ? fatorFranquia : undefined,
    aditivoFranquia: dados.coberturas ? Math.round(aditivoFranquia * 100) / 100 : undefined,
    custoVidros: dados.coberturas ? custoVidros : undefined,
    custoRCF: dados.coberturas ? custoRCF : undefined,
    custoAPP: dados.coberturas ? custoAPP : undefined,
    custoCarroReserva: dados.coberturas ? custoCarroReserva : undefined,
    fatorAssistencia: dados.coberturas ? fatorAssistencia : undefined,
    aditivoAssistencia: dados.coberturas ? Math.round(aditivoAssistencia * 100) / 100 : undefined,
    totalCoberturasOpcionais: dados.coberturas ? Math.round(totalCoberturasOpcionais * 100) / 100 : undefined,
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

