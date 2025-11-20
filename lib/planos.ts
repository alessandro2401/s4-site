/**
 * Definição dos Planos de Seguro Auto Mensal
 * Valores e coberturas conforme Manual do Produto
 * 
 * @module planos
 * @version 1.0.0
 */

// ============================================================================
// TIPOS E INTERFACES
// ============================================================================

export type TipoPlano = 'digital' | 'basico' | 'essencial';

export interface CoberturasPlano {
  casco: {
    lmi: string; // Limite Máximo de Indenização
    franquia: number; // % sobre FIPE
  };
  vidros: {
    incluso: boolean;
    franquia: string;
  };
  rc: {
    incluso: boolean;
    lmi: number; // em R$
  };
  assistencias: {
    incluso: boolean;
    reboque: number; // em km
    chaveiro: number; // em R$
    pneu: boolean;
    paneSeca: boolean;
  };
  app: {
    incluso: boolean;
    valorPorPassageiro: number; // em R$
    maxPassageiros: number;
  };
  carroReserva: {
    incluso: boolean;
    diasMaximos?: number;
  };
}

export interface PlanoSeguro {
  id: TipoPlano;
  nome: string;
  descricao: string;
  valorMensal: number; // Valor fixo em R$
  coberturas: CoberturasPlano;
  diferenciais: string[];
}

// ============================================================================
// DEFINIÇÃO DOS PLANOS
// ============================================================================

export const PLANOS: Record<TipoPlano, PlanoSeguro> = {
  digital: {
    id: 'digital',
    nome: 'Plano Digital',
    descricao: 'Proteção essencial com o melhor custo-benefício',
    valorMensal: 150,
    coberturas: {
      casco: {
        lmi: '100% FIPE',
        franquia: 6, // 6% FIPE
      },
      vidros: {
        incluso: true,
        franquia: '35% do valor da peça',
      },
      rc: {
        incluso: true,
        lmi: 50000,
      },
      assistencias: {
        incluso: true,
        reboque: 200,
        chaveiro: 500,
        pneu: true,
        paneSeca: true,
      },
      app: {
        incluso: true,
        valorPorPassageiro: 10000,
        maxPassageiros: 4,
      },
      carroReserva: {
        incluso: false,
      },
    },
    diferenciais: [
      'Contratação 100% digital',
      'Renovação automática mensal',
      'Sem multa de cancelamento',
      'Aprovação em até 24h',
    ],
  },

  basico: {
    id: 'basico',
    nome: 'Plano Básico',
    descricao: 'Proteção completa com franquia reduzida',
    valorMensal: 180,
    coberturas: {
      casco: {
        lmi: '100% FIPE',
        franquia: 5, // 5% FIPE
      },
      vidros: {
        incluso: true,
        franquia: '35% do valor da peça',
      },
      rc: {
        incluso: true,
        lmi: 100000,
      },
      assistencias: {
        incluso: true,
        reboque: 350,
        chaveiro: 500,
        pneu: true,
        paneSeca: true,
      },
      app: {
        incluso: true,
        valorPorPassageiro: 10000,
        maxPassageiros: 4,
      },
      carroReserva: {
        incluso: false,
      },
    },
    diferenciais: [
      'Tudo do Plano Digital',
      'Franquia reduzida (5% vs 6%)',
      'RC ampliada (R$ 100.000)',
      'Assistências estendidas (350km)',
    ],
  },

  essencial: {
    id: 'essencial',
    nome: 'Plano Essencial',
    descricao: 'Proteção premium com carro reserva',
    valorMensal: 220,
    coberturas: {
      casco: {
        lmi: '100% FIPE',
        franquia: 4, // 4% FIPE
      },
      vidros: {
        incluso: true,
        franquia: '35% do valor da peça',
      },
      rc: {
        incluso: true,
        lmi: 150000,
      },
      assistencias: {
        incluso: true,
        reboque: 500,
        chaveiro: 500,
        pneu: true,
        paneSeca: true,
      },
      app: {
        incluso: true,
        valorPorPassageiro: 10000,
        maxPassageiros: 4,
      },
      carroReserva: {
        incluso: true,
        diasMaximos: 15,
      },
    },
    diferenciais: [
      'Tudo do Plano Básico',
      'Franquia mínima (4%)',
      'RC máxima (R$ 150.000)',
      'Carro reserva (até 15 dias)',
      'Assistências premium (500km)',
    ],
  },
};

// ============================================================================
// FUNÇÕES AUXILIARES
// ============================================================================

/**
 * Retorna os dados de um plano específico
 */
export function obterPlano(tipo: TipoPlano): PlanoSeguro {
  return PLANOS[tipo];
}

/**
 * Retorna todos os planos disponíveis
 */
export function obterTodosPlanos(): PlanoSeguro[] {
  return Object.values(PLANOS);
}

/**
 * Calcula o valor da franquia para um plano e valor FIPE
 */
export function calcularFranquia(tipo: TipoPlano, valorFipe: number): number {
  const plano = PLANOS[tipo];
  return valorFipe * (plano.coberturas.casco.franquia / 100);
}

/**
 * Retorna um resumo das coberturas de um plano
 */
export function obterResumoCobertura(tipo: TipoPlano): string[] {
  const plano = PLANOS[tipo];
  const resumo: string[] = [];

  resumo.push(`Casco: ${plano.coberturas.casco.lmi} (franquia ${plano.coberturas.casco.franquia}%)`);
  
  if (plano.coberturas.vidros.incluso) {
    resumo.push(`Vidros/Faróis: Incluso (franquia ${plano.coberturas.vidros.franquia})`);
  }
  
  if (plano.coberturas.rc.incluso) {
    resumo.push(`RC: R$ ${plano.coberturas.rc.lmi.toLocaleString('pt-BR')}`);
  }
  
  if (plano.coberturas.assistencias.incluso) {
    resumo.push(`Assistências 24h: Reboque ${plano.coberturas.assistencias.reboque}km`);
  }
  
  if (plano.coberturas.app.incluso) {
    resumo.push(`APP: R$ ${plano.coberturas.app.valorPorPassageiro.toLocaleString('pt-BR')}/passageiro`);
  }
  
  if (plano.coberturas.carroReserva.incluso) {
    resumo.push(`Carro Reserva: Até ${plano.coberturas.carroReserva.diasMaximos} dias`);
  }

  return resumo;
}

/**
 * Compara dois planos e retorna as diferenças
 */
export function compararPlanos(plano1: TipoPlano, plano2: TipoPlano): string[] {
  const p1 = PLANOS[plano1];
  const p2 = PLANOS[plano2];
  const diferencas: string[] = [];

  // Comparar valores
  const difValor = p2.valorMensal - p1.valorMensal;
  if (difValor > 0) {
    diferencas.push(`+R$ ${difValor}/mês`);
  }

  // Comparar franquia
  const difFranquia = p1.coberturas.casco.franquia - p2.coberturas.casco.franquia;
  if (difFranquia > 0) {
    diferencas.push(`Franquia ${difFranquia}% menor`);
  }

  // Comparar RC
  const difRC = p2.coberturas.rc.lmi - p1.coberturas.rc.lmi;
  if (difRC > 0) {
    diferencas.push(`RC +R$ ${difRC.toLocaleString('pt-BR')}`);
  }

  // Comparar assistências
  const difReboque = p2.coberturas.assistencias.reboque - p1.coberturas.assistencias.reboque;
  if (difReboque > 0) {
    diferencas.push(`Reboque +${difReboque}km`);
  }

  // Carro reserva
  if (p2.coberturas.carroReserva.incluso && !p1.coberturas.carroReserva.incluso) {
    diferencas.push('Carro reserva incluso');
  }

  return diferencas;
}
