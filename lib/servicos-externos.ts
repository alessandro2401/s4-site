/**
 * Serviços Externos (Mock)
 * ONDA 6: Preparação para APIs Externas
 * 
 * Este arquivo contém serviços mock que simulam integrações com APIs externas.
 * Quando as APIs reais estiverem disponíveis, basta substituir a implementação
 * mantendo as mesmas interfaces.
 * 
 * @module servicos-externos
 * @version 6.0.0
 */

// ============================================================================
// INTERFACES
// ============================================================================

export interface ResultadoValidacaoCPF {
  valido: boolean;
  nome?: string;
  dataNascimento?: string;
  situacao?: 'regular' | 'irregular' | 'suspenso' | 'cancelado';
  erro?: string;
}

export interface ResultadoValidacaoCNH {
  valido: boolean;
  nome?: string;
  categoria?: string;
  dataEmissao?: string;
  dataValidade?: string;
  pontos?: number;
  situacao?: 'regular' | 'suspensa' | 'cassada' | 'vencida';
  erro?: string;
}

export interface ResultadoScoreCredito {
  score?: number; // 0-1000
  classificacao?: 'muito_baixo' | 'baixo' | 'medio' | 'alto' | 'muito_alto';
  restricoes?: boolean;
  detalhes?: string;
  erro?: string;
}

export interface ResultadoHistoricoSinistros {
  quantidadeSinistros: number;
  sinistros?: Array<{
    data: string;
    tipo: 'colisao' | 'roubo' | 'furto' | 'incendio' | 'outros';
    valorIndenizado: number;
    seguradora: string;
  }>;
  erro?: string;
}

export interface ResultadoValidacaoRastreador {
  valido: boolean;
  ativo?: boolean;
  empresa?: string;
  modelo?: string;
  dataInstalacao?: string;
  erro?: string;
}

// ============================================================================
// CONFIGURAÇÃO
// ============================================================================

/**
 * Define se deve usar APIs reais ou mocks
 * Altere para 'real' quando as APIs estiverem disponíveis
 */
export const MODO_API: 'mock' | 'real' = 'mock';

/**
 * URLs das APIs reais (a serem configuradas)
 */
export const API_URLS = {
  receitaFederal: process.env.NEXT_PUBLIC_API_RECEITA_FEDERAL || '',
  detran: process.env.NEXT_PUBLIC_API_DETRAN || '',
  serasa: process.env.NEXT_PUBLIC_API_SERASA || '',
  susep: process.env.NEXT_PUBLIC_API_SUSEP || '',
  ituran: process.env.NEXT_PUBLIC_API_ITURAN || '',
  tracker: process.env.NEXT_PUBLIC_API_TRACKER || '',
  onixsat: process.env.NEXT_PUBLIC_API_ONIXSAT || '',
};

/**
 * Chaves de API (a serem configuradas em variáveis de ambiente)
 */
export const API_KEYS = {
  receitaFederal: process.env.NEXT_PUBLIC_API_KEY_RECEITA_FEDERAL || '',
  detran: process.env.NEXT_PUBLIC_API_KEY_DETRAN || '',
  serasa: process.env.NEXT_PUBLIC_API_KEY_SERASA || '',
  susep: process.env.NEXT_PUBLIC_API_KEY_SUSEP || '',
  rastreamento: process.env.NEXT_PUBLIC_API_KEY_RASTREAMENTO || '',
};

// ============================================================================
// SERVIÇO: RECEITA FEDERAL (CPF)
// ============================================================================

/**
 * Valida CPF na Receita Federal
 * 
 * @param cpf - CPF a ser validado (apenas números)
 * @returns Resultado da validação
 * 
 * @example
 * const resultado = await validarCPFReceitaFederal('12345678901');
 * if (resultado.valido) {
 *   console.log(`CPF válido: ${resultado.nome}`);
 * }
 */
export async function validarCPFReceitaFederal(cpf: string): Promise<ResultadoValidacaoCPF> {
  if (MODO_API === 'mock') {
    // Simula delay de API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock: retorna sucesso para CPFs válidos
    return {
      valido: true,
      nome: 'João da Silva Santos',
      dataNascimento: '15/03/1985',
      situacao: 'regular'
    };
  }
  
  // TODO: Implementar chamada real à API da Receita Federal
  try {
    const response = await fetch(`${API_URLS.receitaFederal}/consulta-cpf`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEYS.receitaFederal}`
      },
      body: JSON.stringify({ cpf })
    });
    
    if (!response.ok) {
      throw new Error('Erro na consulta à Receita Federal');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    return {
      valido: false,
      erro: 'Erro ao consultar Receita Federal. Tente novamente mais tarde.'
    };
  }
}

// ============================================================================
// SERVIÇO: DETRAN (CNH)
// ============================================================================

/**
 * Valida CNH no Detran
 * 
 * @param cnh - Número da CNH (apenas números)
 * @param uf - UF do Detran
 * @returns Resultado da validação
 * 
 * @example
 * const resultado = await validarCNHDetran('12345678901', 'SP');
 * if (resultado.valido) {
 *   console.log(`CNH válida: ${resultado.categoria}`);
 * }
 */
export async function validarCNHDetran(cnh: string, uf: string): Promise<ResultadoValidacaoCNH> {
  if (MODO_API === 'mock') {
    // Simula delay de API
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    // Mock: retorna sucesso para CNHs válidas
    return {
      valido: true,
      nome: 'João da Silva Santos',
      categoria: 'B',
      dataEmissao: '10/05/2018',
      dataValidade: '10/05/2028',
      pontos: 0,
      situacao: 'regular'
    };
  }
  
  // TODO: Implementar chamada real à API do Detran
  try {
    const response = await fetch(`${API_URLS.detran}/consulta-cnh`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEYS.detran}`
      },
      body: JSON.stringify({ cnh, uf })
    });
    
    if (!response.ok) {
      throw new Error('Erro na consulta ao Detran');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    return {
      valido: false,
      erro: 'Erro ao consultar Detran. Tente novamente mais tarde.'
    };
  }
}

// ============================================================================
// SERVIÇO: SERASA (SCORE DE CRÉDITO)
// ============================================================================

/**
 * Consulta score de crédito no Serasa
 * 
 * @param cpf - CPF do cliente (apenas números)
 * @returns Score de crédito
 * 
 * @example
 * const resultado = await consultarScoreCredito('12345678901');
 * if (resultado.score) {
 *   console.log(`Score: ${resultado.score} - ${resultado.classificacao}`);
 * }
 */
export async function consultarScoreCredito(cpf: string): Promise<ResultadoScoreCredito> {
  if (MODO_API === 'mock') {
    // Simula delay de API
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Mock: retorna score aleatório entre 600-900
    const score = Math.floor(Math.random() * 300) + 600;
    
    let classificacao: 'muito_baixo' | 'baixo' | 'medio' | 'alto' | 'muito_alto';
    if (score < 500) classificacao = 'muito_baixo';
    else if (score < 600) classificacao = 'baixo';
    else if (score < 700) classificacao = 'medio';
    else if (score < 800) classificacao = 'alto';
    else classificacao = 'muito_alto';
    
    return {
      score,
      classificacao,
      restricoes: false,
      detalhes: 'Perfil de crédito adequado para contratação de seguro.'
    };
  }
  
  // TODO: Implementar chamada real à API do Serasa
  try {
    const response = await fetch(`${API_URLS.serasa}/consulta-score`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEYS.serasa}`
      },
      body: JSON.stringify({ cpf })
    });
    
    if (!response.ok) {
      throw new Error('Erro na consulta ao Serasa');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    return {
      erro: 'Erro ao consultar Serasa. Tente novamente mais tarde.'
    };
  }
}

// ============================================================================
// SERVIÇO: SUSEP (HISTÓRICO DE SINISTROS)
// ============================================================================

/**
 * Consulta histórico de sinistros na SUSEP
 * 
 * @param cpf - CPF do cliente (apenas números)
 * @param anos - Quantidade de anos para consultar (padrão: 5)
 * @returns Histórico de sinistros
 * 
 * @example
 * const resultado = await consultarHistoricoSinistros('12345678901', 5);
 * console.log(`Sinistros nos últimos 5 anos: ${resultado.quantidadeSinistros}`);
 */
export async function consultarHistoricoSinistros(cpf: string, anos: number = 5): Promise<ResultadoHistoricoSinistros> {
  if (MODO_API === 'mock') {
    // Simula delay de API
    await new Promise(resolve => setTimeout(resolve, 1800));
    
    // Mock: retorna histórico vazio ou com poucos sinistros
    const quantidadeSinistros = Math.random() > 0.7 ? 1 : 0;
    
    if (quantidadeSinistros === 0) {
      return {
        quantidadeSinistros: 0,
        sinistros: []
      };
    }
    
    return {
      quantidadeSinistros: 1,
      sinistros: [
        {
          data: '15/08/2022',
          tipo: 'colisao',
          valorIndenizado: 5000,
          seguradora: 'Porto Seguro'
        }
      ]
    };
  }
  
  // TODO: Implementar chamada real à API da SUSEP
  try {
    const response = await fetch(`${API_URLS.susep}/consulta-sinistros`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEYS.susep}`
      },
      body: JSON.stringify({ cpf, anos })
    });
    
    if (!response.ok) {
      throw new Error('Erro na consulta à SUSEP');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    return {
      quantidadeSinistros: 0,
      erro: 'Erro ao consultar SUSEP. Tente novamente mais tarde.'
    };
  }
}

// ============================================================================
// SERVIÇO: RASTREAMENTO (VALIDAÇÃO DE DISPOSITIVO)
// ============================================================================

/**
 * Valida código de rastreador
 * 
 * @param codigo - Código do dispositivo
 * @param empresa - Empresa de rastreamento ('ituran', 'tracker', 'onixsat', etc.)
 * @returns Resultado da validação
 * 
 * @example
 * const resultado = await validarRastreador('1234567890', 'ituran');
 * if (resultado.valido && resultado.ativo) {
 *   console.log('Rastreador válido e ativo');
 * }
 */
export async function validarRastreador(codigo: string, empresa: string): Promise<ResultadoValidacaoRastreador> {
  if (MODO_API === 'mock') {
    // Simula delay de API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock: retorna sucesso para códigos válidos
    return {
      valido: true,
      ativo: true,
      empresa: empresa.charAt(0).toUpperCase() + empresa.slice(1),
      modelo: 'GPS Pro 3000',
      dataInstalacao: '10/01/2024'
    };
  }
  
  // TODO: Implementar chamada real às APIs de rastreamento
  try {
    let apiUrl = '';
    switch (empresa.toLowerCase()) {
      case 'ituran':
        apiUrl = API_URLS.ituran;
        break;
      case 'tracker':
        apiUrl = API_URLS.tracker;
        break;
      case 'onixsat':
        apiUrl = API_URLS.onixsat;
        break;
      default:
        throw new Error('Empresa de rastreamento não suportada');
    }
    
    const response = await fetch(`${apiUrl}/validar-dispositivo`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEYS.rastreamento}`
      },
      body: JSON.stringify({ codigo })
    });
    
    if (!response.ok) {
      throw new Error('Erro na validação do rastreador');
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    return {
      valido: false,
      erro: 'Erro ao validar rastreador. Tente novamente mais tarde.'
    };
  }
}

// ============================================================================
// UTILITÁRIOS
// ============================================================================

/**
 * Verifica se as APIs externas estão configuradas
 */
export function verificarConfiguracoesAPI(): {
  receitaFederal: boolean;
  detran: boolean;
  serasa: boolean;
  susep: boolean;
  rastreamento: boolean;
} {
  return {
    receitaFederal: !!(API_URLS.receitaFederal && API_KEYS.receitaFederal),
    detran: !!(API_URLS.detran && API_KEYS.detran),
    serasa: !!(API_URLS.serasa && API_KEYS.serasa),
    susep: !!(API_URLS.susep && API_KEYS.susep),
    rastreamento: !!(API_KEYS.rastreamento),
  };
}

/**
 * Retorna o modo atual da API (mock ou real)
 */
export function obterModoAPI(): 'mock' | 'real' {
  return MODO_API;
}

/**
 * Simula delay de rede para desenvolvimento
 */
export async function simularDelayRede(ms: number = 1000): Promise<void> {
  await new Promise(resolve => setTimeout(resolve, ms));
}

