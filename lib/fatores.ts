/**
 * Biblioteca de Gerenciamento de Fatores
 * ONDA 8.6: Ajuste de Fatores
 * 
 * @module fatores
 * @version 8.6.0
 */

// ============================================================================
// INTERFACES
// ============================================================================

export interface FatorConfig {
  id: string;
  nome: string;
  categoria: 'veiculo' | 'condutor' | 'uso' | 'cobertura';
  tipo: 'percentual' | 'valor_fixo';
  valorAtual: number;
  valorPadrao: number;
  minimo: number;
  maximo: number;
  unidade: '%' | 'R$';
  descricao: string;
  impacto: 'alto' | 'medio' | 'baixo';
}

export interface GrupoFatores {
  categoria: string;
  nome: string;
  descricao: string;
  fatores: FatorConfig[];
}

export interface AlteracaoFator {
  id: string;
  fatorId: string;
  nomeFator: string;
  valorAnterior: number;
  valorNovo: number;
  usuario: string;
  data: Date;
  status: 'pendente' | 'aprovado' | 'rejeitado';
  aprovadoPor?: string;
  dataAprovacao?: Date;
  justificativa?: string;
  comentarios?: string;
}

export interface SimulacaoImpacto {
  fatorId: string;
  valorAtual: number;
  valorNovo: number;
  impactoPercentual: number;
  impactoAbsoluto: number;
  cotacoesAfetadas: number;
  receitaAtual: number;
  receitaProjetada: number;
  diferencaReceita: number;
}

// ============================================================================
// CONFIGURAÇÃO DOS FATORES
// ============================================================================

export const FATORES_DISPONIVEIS: FatorConfig[] = [
  // Fatores de Veículo
  {
    id: 'taxa_base',
    nome: 'Taxa Base',
    categoria: 'veiculo',
    tipo: 'percentual',
    valorAtual: 3.0,
    valorPadrao: 3.0,
    minimo: 2.0,
    maximo: 5.0,
    unidade: '%',
    descricao: 'Percentual base sobre o valor FIPE',
    impacto: 'alto'
  },
  {
    id: 'idade_0_3',
    nome: 'Idade 0-3 anos',
    categoria: 'veiculo',
    tipo: 'percentual',
    valorAtual: 0.0,
    valorPadrao: 0.0,
    minimo: 0.0,
    maximo: 1.0,
    unidade: '%',
    descricao: 'Adicional para veículos de 0 a 3 anos',
    impacto: 'baixo'
  },
  {
    id: 'idade_4_7',
    nome: 'Idade 4-7 anos',
    categoria: 'veiculo',
    tipo: 'percentual',
    valorAtual: 0.3,
    valorPadrao: 0.3,
    minimo: 0.0,
    maximo: 1.0,
    unidade: '%',
    descricao: 'Adicional para veículos de 4 a 7 anos',
    impacto: 'medio'
  },
  {
    id: 'idade_8_12',
    nome: 'Idade 8-12 anos',
    categoria: 'veiculo',
    tipo: 'percentual',
    valorAtual: 0.45,
    valorPadrao: 0.45,
    minimo: 0.0,
    maximo: 1.5,
    unidade: '%',
    descricao: 'Adicional para veículos de 8 a 12 anos',
    impacto: 'medio'
  },
  {
    id: 'idade_13_mais',
    nome: 'Idade 13+ anos',
    categoria: 'veiculo',
    tipo: 'percentual',
    valorAtual: 0.6,
    valorPadrao: 0.6,
    minimo: 0.0,
    maximo: 2.0,
    unidade: '%',
    descricao: 'Adicional para veículos com 13 anos ou mais',
    impacto: 'alto'
  },
  
  // Fatores de Condutor
  {
    id: 'idade_condutor_18_25',
    nome: 'Condutor 18-25 anos',
    categoria: 'condutor',
    tipo: 'percentual',
    valorAtual: 11.0,
    valorPadrao: 11.0,
    minimo: 5.0,
    maximo: 20.0,
    unidade: '%',
    descricao: 'Acréscimo para condutores de 18 a 25 anos',
    impacto: 'alto'
  },
  {
    id: 'idade_condutor_26_35',
    nome: 'Condutor 26-35 anos',
    categoria: 'condutor',
    tipo: 'percentual',
    valorAtual: 0.0,
    valorPadrao: 0.0,
    minimo: -5.0,
    maximo: 5.0,
    unidade: '%',
    descricao: 'Ajuste para condutores de 26 a 35 anos',
    impacto: 'baixo'
  },
  {
    id: 'idade_condutor_36_60',
    nome: 'Condutor 36-60 anos',
    categoria: 'condutor',
    tipo: 'percentual',
    valorAtual: -1.0,
    valorPadrao: -1.0,
    minimo: -10.0,
    maximo: 0.0,
    unidade: '%',
    descricao: 'Desconto para condutores de 36 a 60 anos',
    impacto: 'medio'
  },
  {
    id: 'idade_condutor_61_mais',
    nome: 'Condutor 61+ anos',
    categoria: 'condutor',
    tipo: 'percentual',
    valorAtual: 15.0,
    valorPadrao: 15.0,
    minimo: 5.0,
    maximo: 25.0,
    unidade: '%',
    descricao: 'Acréscimo para condutores com 61 anos ou mais',
    impacto: 'alto'
  },
  {
    id: 'tempo_cnh_0_2',
    nome: 'CNH 0-2 anos',
    categoria: 'condutor',
    tipo: 'percentual',
    valorAtual: 5.0,
    valorPadrao: 5.0,
    minimo: 0.0,
    maximo: 15.0,
    unidade: '%',
    descricao: 'Acréscimo para CNH de 0 a 2 anos',
    impacto: 'medio'
  },
  {
    id: 'tempo_cnh_3_5',
    nome: 'CNH 3-5 anos',
    categoria: 'condutor',
    tipo: 'percentual',
    valorAtual: 3.0,
    valorPadrao: 3.0,
    minimo: 0.0,
    maximo: 10.0,
    unidade: '%',
    descricao: 'Acréscimo para CNH de 3 a 5 anos',
    impacto: 'baixo'
  },
  {
    id: 'tempo_cnh_6_mais',
    nome: 'CNH 6+ anos',
    categoria: 'condutor',
    tipo: 'percentual',
    valorAtual: -3.0,
    valorPadrao: -3.0,
    minimo: -10.0,
    maximo: 0.0,
    unidade: '%',
    descricao: 'Desconto para CNH com 6 anos ou mais',
    impacto: 'medio'
  },
  
  // Fatores de Uso
  {
    id: 'km_alta',
    nome: 'Quilometragem Alta',
    categoria: 'uso',
    tipo: 'percentual',
    valorAtual: 1.0,
    valorPadrao: 1.0,
    minimo: 0.0,
    maximo: 5.0,
    unidade: '%',
    descricao: 'Acréscimo para quilometragem acima de 70.000 km/ano',
    impacto: 'baixo'
  },
  {
    id: 'finalidade_particular',
    nome: 'Uso Particular',
    categoria: 'uso',
    tipo: 'percentual',
    valorAtual: 0.0,
    valorPadrao: 0.0,
    minimo: -5.0,
    maximo: 5.0,
    unidade: '%',
    descricao: 'Ajuste para uso particular',
    impacto: 'baixo'
  },
  {
    id: 'finalidade_uber',
    nome: 'Uso Uber/Táxi',
    categoria: 'uso',
    tipo: 'percentual',
    valorAtual: 5.0,
    valorPadrao: 5.0,
    minimo: 0.0,
    maximo: 15.0,
    unidade: '%',
    descricao: 'Acréscimo para uso como Uber/Táxi',
    impacto: 'alto'
  },
  {
    id: 'finalidade_comercial',
    nome: 'Uso Comercial',
    categoria: 'uso',
    tipo: 'percentual',
    valorAtual: 3.0,
    valorPadrao: 3.0,
    minimo: 0.0,
    maximo: 10.0,
    unidade: '%',
    descricao: 'Acréscimo para uso comercial (entregas)',
    impacto: 'medio'
  },
  {
    id: 'desconto_rastreador',
    nome: 'Desconto Rastreador',
    categoria: 'uso',
    tipo: 'percentual',
    valorAtual: -5.0,
    valorPadrao: -5.0,
    minimo: -15.0,
    maximo: 0.0,
    unidade: '%',
    descricao: 'Desconto para veículos com rastreador',
    impacto: 'medio'
  },
  
  // Fatores de Cobertura
  {
    id: 'franquia_normal',
    nome: 'Franquia Normal',
    categoria: 'cobertura',
    tipo: 'percentual',
    valorAtual: 0.0,
    valorPadrao: 0.0,
    minimo: -10.0,
    maximo: 10.0,
    unidade: '%',
    descricao: 'Ajuste para franquia normal (6% FIPE)',
    impacto: 'baixo'
  },
  {
    id: 'franquia_reduzida',
    nome: 'Franquia Reduzida',
    categoria: 'cobertura',
    tipo: 'percentual',
    valorAtual: 20.0,
    valorPadrao: 20.0,
    minimo: 10.0,
    maximo: 30.0,
    unidade: '%',
    descricao: 'Acréscimo para franquia reduzida (3% FIPE)',
    impacto: 'medio'
  },
  {
    id: 'franquia_agravada',
    nome: 'Franquia Agravada',
    categoria: 'cobertura',
    tipo: 'percentual',
    valorAtual: -10.0,
    valorPadrao: -10.0,
    minimo: -20.0,
    maximo: 0.0,
    unidade: '%',
    descricao: 'Desconto para franquia agravada (12% FIPE)',
    impacto: 'medio'
  },
  {
    id: 'cobertura_vidros',
    nome: 'Cobertura de Vidros',
    categoria: 'cobertura',
    tipo: 'valor_fixo',
    valorAtual: 5.0,
    valorPadrao: 5.0,
    minimo: 0.0,
    maximo: 20.0,
    unidade: 'R$',
    descricao: 'Valor mensal da cobertura de vidros',
    impacto: 'baixo'
  },
  {
    id: 'cobertura_rcf',
    nome: 'RCF Majorado',
    categoria: 'cobertura',
    tipo: 'valor_fixo',
    valorAtual: 12.0,
    valorPadrao: 12.0,
    minimo: 5.0,
    maximo: 30.0,
    unidade: 'R$',
    descricao: 'Valor mensal do RCF majorado',
    impacto: 'baixo'
  },
  {
    id: 'cobertura_app',
    nome: 'APP',
    categoria: 'cobertura',
    tipo: 'valor_fixo',
    valorAtual: 5.0,
    valorPadrao: 5.0,
    minimo: 0.0,
    maximo: 20.0,
    unidade: 'R$',
    descricao: 'Valor mensal da APP',
    impacto: 'baixo'
  },
  {
    id: 'cobertura_carro_reserva',
    nome: 'Carro Reserva',
    categoria: 'cobertura',
    tipo: 'valor_fixo',
    valorAtual: 15.0,
    valorPadrao: 15.0,
    minimo: 5.0,
    maximo: 40.0,
    unidade: 'R$',
    descricao: 'Valor mensal do carro reserva',
    impacto: 'baixo'
  },
  {
    id: 'assistencia_completa',
    nome: 'Assistência Completa',
    categoria: 'cobertura',
    tipo: 'percentual',
    valorAtual: 10.0,
    valorPadrao: 10.0,
    minimo: 0.0,
    maximo: 20.0,
    unidade: '%',
    descricao: 'Acréscimo para assistência 24h completa (500km)',
    impacto: 'baixo'
  },
  {
    id: 'desconto_regiao_3',
    nome: 'Desconto Região 3',
    categoria: 'veiculo',
    tipo: 'percentual',
    valorAtual: -10.0,
    valorPadrao: -10.0,
    minimo: -20.0,
    maximo: 0.0,
    unidade: '%',
    descricao: 'Desconto para estados da Região 3 (AL, PB, PE, RN)',
    impacto: 'alto'
  }
];

// ============================================================================
// FUNÇÕES DE GERENCIAMENTO
// ============================================================================

/**
 * Agrupa fatores por categoria
 */
export function agruparFatoresPorCategoria(): GrupoFatores[] {
  const categorias = {
    veiculo: {
      nome: 'Fatores de Veículo',
      descricao: 'Fatores relacionados ao veículo segurado'
    },
    condutor: {
      nome: 'Fatores de Condutor',
      descricao: 'Fatores relacionados ao perfil do condutor'
    },
    uso: {
      nome: 'Fatores de Uso',
      descricao: 'Fatores relacionados ao uso do veículo'
    },
    cobertura: {
      nome: 'Fatores de Cobertura',
      descricao: 'Fatores relacionados às coberturas contratadas'
    }
  };

  return Object.entries(categorias).map(([key, info]) => ({
    categoria: key,
    nome: info.nome,
    descricao: info.descricao,
    fatores: FATORES_DISPONIVEIS.filter(f => f.categoria === key)
  }));
}

/**
 * Busca um fator por ID
 */
export function buscarFatorPorId(id: string): FatorConfig | undefined {
  return FATORES_DISPONIVEIS.find(f => f.id === id);
}

/**
 * Valida se um valor está dentro dos limites permitidos
 */
export function validarValorFator(fator: FatorConfig, valor: number): {
  valido: boolean;
  erro?: string;
} {
  if (valor < fator.minimo) {
    return {
      valido: false,
      erro: `Valor abaixo do mínimo permitido (${fator.minimo}${fator.unidade})`
    };
  }
  
  if (valor > fator.maximo) {
    return {
      valido: false,
      erro: `Valor acima do máximo permitido (${fator.maximo}${fator.unidade})`
    };
  }
  
  return { valido: true };
}

/**
 * Calcula o impacto percentual de uma alteração
 */
export function calcularImpactoPercentual(valorAtual: number, valorNovo: number): number {
  if (valorAtual === 0) return valorNovo * 100;
  return ((valorNovo - valorAtual) / Math.abs(valorAtual)) * 100;
}

/**
 * Simula o impacto de uma alteração em um fator
 */
export function simularImpactoAlteracao(
  fatorId: string,
  valorNovo: number,
  cotacoesExistentes: number = 0,
  receitaAtual: number = 0
): SimulacaoImpacto | null {
  const fator = buscarFatorPorId(fatorId);
  if (!fator) return null;

  const impactoPercentual = calcularImpactoPercentual(fator.valorAtual, valorNovo);
  const impactoAbsoluto = valorNovo - fator.valorAtual;
  
  // Estimativa simplificada do impacto na receita
  const fatorImpacto = fator.tipo === 'percentual' ? impactoAbsoluto / 100 : 0;
  const receitaProjetada = receitaAtual * (1 + fatorImpacto);
  const diferencaReceita = receitaProjetada - receitaAtual;

  return {
    fatorId,
    valorAtual: fator.valorAtual,
    valorNovo,
    impactoPercentual,
    impactoAbsoluto,
    cotacoesAfetadas: cotacoesExistentes,
    receitaAtual,
    receitaProjetada,
    diferencaReceita
  };
}

/**
 * Retorna a cor do indicador de impacto
 */
export function getCorImpacto(impacto: 'alto' | 'medio' | 'baixo'): string {
  const cores = {
    alto: '#EF4444',    // Vermelho
    medio: '#F59E0B',   // Laranja
    baixo: '#10B981'    // Verde
  };
  return cores[impacto];
}

/**
 * Retorna o label do impacto
 */
export function getLabelImpacto(impacto: 'alto' | 'medio' | 'baixo'): string {
  const labels = {
    alto: 'Alto Impacto',
    medio: 'Médio Impacto',
    baixo: 'Baixo Impacto'
  };
  return labels[impacto];
}

/**
 * Formata valor com unidade
 */
export function formatarValorComUnidade(valor: number, unidade: '%' | 'R$'): string {
  if (unidade === '%') {
    return `${valor >= 0 ? '+' : ''}${valor.toFixed(2)}%`;
  }
  return `R$ ${valor.toFixed(2)}`;
}

/**
 * Retorna estatísticas dos fatores
 */
export function getEstatisticasFatores() {
  const total = FATORES_DISPONIVEIS.length;
  const modificados = FATORES_DISPONIVEIS.filter(f => f.valorAtual !== f.valorPadrao).length;
  const porCategoria = {
    veiculo: FATORES_DISPONIVEIS.filter(f => f.categoria === 'veiculo').length,
    condutor: FATORES_DISPONIVEIS.filter(f => f.categoria === 'condutor').length,
    uso: FATORES_DISPONIVEIS.filter(f => f.categoria === 'uso').length,
    cobertura: FATORES_DISPONIVEIS.filter(f => f.categoria === 'cobertura').length
  };
  const porImpacto = {
    alto: FATORES_DISPONIVEIS.filter(f => f.impacto === 'alto').length,
    medio: FATORES_DISPONIVEIS.filter(f => f.impacto === 'medio').length,
    baixo: FATORES_DISPONIVEIS.filter(f => f.impacto === 'baixo').length
  };

  return {
    total,
    modificados,
    padrao: total - modificados,
    porCategoria,
    porImpacto
  };
}

/**
 * Reseta um fator para o valor padrão
 */
export function resetarFatorParaPadrao(fatorId: string): boolean {
  const fator = buscarFatorPorId(fatorId);
  if (!fator) return false;
  
  fator.valorAtual = fator.valorPadrao;
  return true;
}

/**
 * Reseta todos os fatores para os valores padrão
 */
export function resetarTodosFatores(): void {
  FATORES_DISPONIVEIS.forEach(fator => {
    fator.valorAtual = fator.valorPadrao;
  });
}

/**
 * Exporta configuração atual dos fatores
 */
export function exportarConfiguracao(): string {
  return JSON.stringify(FATORES_DISPONIVEIS, null, 2);
}

/**
 * Importa configuração de fatores
 */
export function importarConfiguracao(json: string): {
  sucesso: boolean;
  erro?: string;
  fatoresImportados?: number;
} {
  try {
    const fatores = JSON.parse(json);
    
    if (!Array.isArray(fatores)) {
      return {
        sucesso: false,
        erro: 'Formato inválido: esperado um array de fatores'
      };
    }

    let importados = 0;
    
    fatores.forEach((fatorImportado: any) => {
      const fator = buscarFatorPorId(fatorImportado.id);
      if (fator) {
        const validacao = validarValorFator(fator, fatorImportado.valorAtual);
        if (validacao.valido) {
          fator.valorAtual = fatorImportado.valorAtual;
          importados++;
        }
      }
    });

    return {
      sucesso: true,
      fatoresImportados: importados
    };
  } catch (error) {
    return {
      sucesso: false,
      erro: 'Erro ao processar JSON: ' + (error as Error).message
    };
  }
}

