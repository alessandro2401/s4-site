/**
 * Biblioteca de Storage
 * ONDA 8.1: Autenticação e Estrutura Base
 * 
 * Esta biblioteca abstrai o armazenamento de dados, permitindo
 * migração fácil de localStorage para Firebase no futuro.
 * 
 * @module storage
 * @version 8.1.0
 */

// ============================================================================
// TIPOS E INTERFACES
// ============================================================================

export type NivelAcesso = 'master' | 'admin' | 'atuario' | 'administrativo' | 'vendedor';

export interface Usuario {
  id: string;
  nome: string;
  email: string;
  nivel: NivelAcesso;
  ativo: boolean;
  dataCriacao: string;
  ultimoAcesso?: string;
}

export interface Cotacao {
  id: string;
  data: string;
  veiculo: {
    marca: string;
    modelo: string;
    ano: number;
    valorFipe: number;
  };
  localizacao: {
    cep: string;
    cidade: string;
    uf: string;
    regiao: number;
  };
  dadosPessoais: {
    nome: string;
    cpf: string;
    email: string;
    telefone: string;
    cnh: string;
  };
  condutor: {
    idade: number;
    tempoCNH: number;
  };
  uso: {
    quilometragem: number;
    finalidade: string;
    rastreador: boolean;
  };
  coberturas: {
    franquia: string;
    opcionais: string[];
    assistencia: string;
  };
  resultado: {
    premioMensal: number;
    premioAnual: number;
    planoEscolhido?: string;
  };
  status: 'cotacao' | 'proposta' | 'apolice' | 'cancelada';
  vendedorId?: string;
}

export interface Apolice {
  id: string;
  cotacaoId: string;
  numero: string;
  dataEmissao: string;
  dataInicio: string;
  dataFim: string;
  status: 'ativa' | 'cancelada' | 'inadimplente' | 'vencida';
  valorMensal: number;
  valorAnual: number;
}

export interface Sinistro {
  id: string;
  apoliceId: string;
  data: string;
  tipo: 'colisao' | 'roubo' | 'furto' | 'incendio' | 'outros';
  valorIndenizado: number;
  status: 'aberto' | 'em_analise' | 'aprovado' | 'pago' | 'negado';
}

// ============================================================================
// CONFIGURAÇÃO
// ============================================================================

const STORAGE_MODE: 'localStorage' | 'firebase' = 'localStorage';

const STORAGE_KEYS = {
  usuarios: 'aura_usuarios',
  cotacoes: 'aura_cotacoes',
  apolices: 'aura_apolices',
  sinistros: 'aura_sinistros',
  sessao: 'aura_sessao',
};

// ============================================================================
// FUNÇÕES DE STORAGE
// ============================================================================

/**
 * Salva dados no storage
 */
function salvarStorage<T>(chave: string, dados: T): void {
  if (STORAGE_MODE === 'localStorage') {
    if (typeof window !== 'undefined') {
      localStorage.setItem(chave, JSON.stringify(dados));
    }
  } else {
    // TODO: Implementar Firebase
    throw new Error('Firebase não implementado ainda');
  }
}

/**
 * Carrega dados do storage
 */
function carregarStorage<T>(chave: string): T | null {
  if (STORAGE_MODE === 'localStorage') {
    if (typeof window !== 'undefined') {
      const dados = localStorage.getItem(chave);
      return dados ? JSON.parse(dados) : null;
    }
    return null;
  } else {
    // TODO: Implementar Firebase
    throw new Error('Firebase não implementado ainda');
  }
}

/**
 * Remove dados do storage
 */
function removerStorage(chave: string): void {
  if (STORAGE_MODE === 'localStorage') {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(chave);
    }
  } else {
    // TODO: Implementar Firebase
    throw new Error('Firebase não implementado ainda');
  }
}

// ============================================================================
// USUÁRIOS
// ============================================================================

/**
 * Inicializa usuários padrão (apenas em desenvolvimento)
 */
export function inicializarUsuariosPadrao(): void {
  const usuarios = carregarStorage<Usuario[]>(STORAGE_KEYS.usuarios);
  
  if (!usuarios || usuarios.length === 0) {
    const usuariosPadrao: Usuario[] = [
      {
        id: '1',
        nome: 'Master Admin',
        email: 'master@aura.com.br',
        nivel: 'master',
        ativo: true,
        dataCriacao: new Date().toISOString(),
      },
      {
        id: '2',
        nome: 'Admin Geral',
        email: 'admin@aura.com.br',
        nivel: 'admin',
        ativo: true,
        dataCriacao: new Date().toISOString(),
      },
      {
        id: '3',
        nome: 'João Atuário',
        email: 'atuario@aura.com.br',
        nivel: 'atuario',
        ativo: true,
        dataCriacao: new Date().toISOString(),
      },
      {
        id: '4',
        nome: 'Maria Administrativa',
        email: 'admin.operacional@aura.com.br',
        nivel: 'administrativo',
        ativo: true,
        dataCriacao: new Date().toISOString(),
      },
      {
        id: '5',
        nome: 'Carlos Vendedor',
        email: 'vendedor@aura.com.br',
        nivel: 'vendedor',
        ativo: true,
        dataCriacao: new Date().toISOString(),
      },
    ];
    
    salvarStorage(STORAGE_KEYS.usuarios, usuariosPadrao);
  }
}

/**
 * Busca usuário por email
 */
export function buscarUsuarioPorEmail(email: string): Usuario | null {
  const usuarios = carregarStorage<Usuario[]>(STORAGE_KEYS.usuarios) || [];
  return usuarios.find(u => u.email === email) || null;
}

/**
 * Busca usuário por ID
 */
export function buscarUsuarioPorId(id: string): Usuario | null {
  const usuarios = carregarStorage<Usuario[]>(STORAGE_KEYS.usuarios) || [];
  return usuarios.find(u => u.id === id) || null;
}

/**
 * Lista todos os usuários
 */
export function listarUsuarios(): Usuario[] {
  return carregarStorage<Usuario[]>(STORAGE_KEYS.usuarios) || [];
}

/**
 * Cria novo usuário
 */
export function criarUsuario(usuario: Omit<Usuario, 'id' | 'dataCriacao'>): Usuario {
  const usuarios = carregarStorage<Usuario[]>(STORAGE_KEYS.usuarios) || [];
  
  const novoUsuario: Usuario = {
    ...usuario,
    id: Date.now().toString(),
    dataCriacao: new Date().toISOString(),
  };
  
  usuarios.push(novoUsuario);
  salvarStorage(STORAGE_KEYS.usuarios, usuarios);
  
  return novoUsuario;
}

/**
 * Atualiza usuário
 */
export function atualizarUsuario(id: string, dados: Partial<Usuario>): Usuario | null {
  const usuarios = carregarStorage<Usuario[]>(STORAGE_KEYS.usuarios) || [];
  const index = usuarios.findIndex(u => u.id === id);
  
  if (index === -1) return null;
  
  usuarios[index] = { ...usuarios[index], ...dados };
  salvarStorage(STORAGE_KEYS.usuarios, usuarios);
  
  return usuarios[index];
}

// ============================================================================
// SESSÃO
// ============================================================================

export interface Sessao {
  usuarioId: string;
  email: string;
  nivel: NivelAcesso;
  dataLogin: string;
}

/**
 * Salva sessão do usuário
 */
export function salvarSessao(sessao: Sessao): void {
  salvarStorage(STORAGE_KEYS.sessao, sessao);
  
  // Atualiza último acesso
  atualizarUsuario(sessao.usuarioId, {
    ultimoAcesso: new Date().toISOString(),
  });
}

/**
 * Carrega sessão do usuário
 */
export function carregarSessao(): Sessao | null {
  return carregarStorage<Sessao>(STORAGE_KEYS.sessao);
}

/**
 * Remove sessão do usuário (logout)
 */
export function removerSessao(): void {
  removerStorage(STORAGE_KEYS.sessao);
}

// ============================================================================
// COTAÇÕES
// ============================================================================

/**
 * Salva cotação
 */
export function salvarCotacao(cotacao: Omit<Cotacao, 'id' | 'data'>): Cotacao {
  const cotacoes = carregarStorage<Cotacao[]>(STORAGE_KEYS.cotacoes) || [];
  
  const novaCotacao: Cotacao = {
    ...cotacao,
    id: Date.now().toString(),
    data: new Date().toISOString(),
  };
  
  cotacoes.push(novaCotacao);
  salvarStorage(STORAGE_KEYS.cotacoes, cotacoes);
  
  return novaCotacao;
}

/**
 * Lista todas as cotações
 */
export function listarCotacoes(): Cotacao[] {
  return carregarStorage<Cotacao[]>(STORAGE_KEYS.cotacoes) || [];
}

/**
 * Busca cotação por ID
 */
export function buscarCotacaoPorId(id: string): Cotacao | null {
  const cotacoes = listarCotacoes();
  return cotacoes.find(c => c.id === id) || null;
}

/**
 * Atualiza cotação
 */
export function atualizarCotacao(id: string, dados: Partial<Cotacao>): Cotacao | null {
  const cotacoes = listarCotacoes();
  const index = cotacoes.findIndex(c => c.id === id);
  
  if (index === -1) return null;
  
  cotacoes[index] = { ...cotacoes[index], ...dados };
  salvarStorage(STORAGE_KEYS.cotacoes, cotacoes);
  
  return cotacoes[index];
}

// ============================================================================
// APÓLICES
// ============================================================================

/**
 * Cria apólice a partir de cotação
 */
export function criarApolice(cotacaoId: string): Apolice | null {
  const cotacao = buscarCotacaoPorId(cotacaoId);
  if (!cotacao) return null;
  
  const apolices = carregarStorage<Apolice[]>(STORAGE_KEYS.apolices) || [];
  
  const dataInicio = new Date();
  const dataFim = new Date(dataInicio);
  dataFim.setFullYear(dataFim.getFullYear() + 1);
  
  const novaApolice: Apolice = {
    id: Date.now().toString(),
    cotacaoId,
    numero: `APO-${Date.now()}`,
    dataEmissao: new Date().toISOString(),
    dataInicio: dataInicio.toISOString(),
    dataFim: dataFim.toISOString(),
    status: 'ativa',
    valorMensal: cotacao.resultado.premioMensal,
    valorAnual: cotacao.resultado.premioAnual,
  };
  
  apolices.push(novaApolice);
  salvarStorage(STORAGE_KEYS.apolices, apolices);
  
  // Atualiza status da cotação
  atualizarCotacao(cotacaoId, { status: 'apolice' });
  
  return novaApolice;
}

/**
 * Lista todas as apólices
 */
export function listarApolices(): Apolice[] {
  return carregarStorage<Apolice[]>(STORAGE_KEYS.apolices) || [];
}

/**
 * Busca apólice por ID
 */
export function buscarApolicePorId(id: string): Apolice | null {
  const apolices = listarApolices();
  return apolices.find(a => a.id === id) || null;
}

/**
 * Atualiza apólice
 */
export function atualizarApolice(id: string, dados: Partial<Apolice>): Apolice | null {
  const apolices = listarApolices();
  const index = apolices.findIndex(a => a.id === id);
  
  if (index === -1) return null;
  
  apolices[index] = { ...apolices[index], ...dados };
  salvarStorage(STORAGE_KEYS.apolices, apolices);
  
  return apolices[index];
}

// ============================================================================
// SINISTROS
// ============================================================================

/**
 * Registra sinistro
 */
export function registrarSinistro(sinistro: Omit<Sinistro, 'id' | 'data'>): Sinistro {
  const sinistros = carregarStorage<Sinistro[]>(STORAGE_KEYS.sinistros) || [];
  
  const novoSinistro: Sinistro = {
    ...sinistro,
    id: Date.now().toString(),
    data: new Date().toISOString(),
  };
  
  sinistros.push(novoSinistro);
  salvarStorage(STORAGE_KEYS.sinistros, sinistros);
  
  return novoSinistro;
}

/**
 * Lista todos os sinistros
 */
export function listarSinistros(): Sinistro[] {
  return carregarStorage<Sinistro[]>(STORAGE_KEYS.sinistros) || [];
}

/**
 * Busca sinistros por apólice
 */
export function buscarSinistrosPorApolice(apoliceId: string): Sinistro[] {
  const sinistros = listarSinistros();
  return sinistros.filter(s => s.apoliceId === apoliceId);
}

/**
 * Atualiza sinistro
 */
export function atualizarSinistro(id: string, dados: Partial<Sinistro>): Sinistro | null {
  const sinistros = listarSinistros();
  const index = sinistros.findIndex(s => s.id === id);
  
  if (index === -1) return null;
  
  sinistros[index] = { ...sinistros[index], ...dados };
  salvarStorage(STORAGE_KEYS.sinistros, sinistros);
  
  return sinistros[index];
}

// ============================================================================
// UTILITÁRIOS
// ============================================================================

/**
 * Limpa todos os dados (apenas desenvolvimento)
 */
export function limparTodosDados(): void {
  if (typeof window !== 'undefined') {
    Object.values(STORAGE_KEYS).forEach(chave => {
      localStorage.removeItem(chave);
    });
  }
}

/**
 * Exporta todos os dados
 */
export function exportarDados() {
  return {
    usuarios: listarUsuarios(),
    cotacoes: listarCotacoes(),
    apolices: listarApolices(),
    sinistros: listarSinistros(),
  };
}

