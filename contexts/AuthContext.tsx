'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import {
  NivelAcesso,
  Usuario,
  Sessao,
  buscarUsuarioPorEmail,
  salvarSessao,
  carregarSessao,
  removerSessao,
  inicializarUsuariosPadrao,
  buscarUsuarioPorId,
} from '@/lib/storage';

// ============================================================================
// INTERFACES
// ============================================================================

interface AuthContextType {
  usuario: Usuario | null;
  nivel: NivelAcesso | null;
  autenticado: boolean;
  carregando: boolean;
  login: (email: string, senha: string) => Promise<boolean>;
  logout: () => void;
  temPermissao: (niveisPermitidos: NivelAcesso[]) => boolean;
}

// ============================================================================
// CONTEXT
// ============================================================================

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// ============================================================================
// PROVIDER
// ============================================================================

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [carregando, setCarregando] = useState<boolean>(true);

  // Inicializa usuários padrão e carrega sessão
  useEffect(() => {
    inicializarUsuariosPadrao();
    
    const sessao = carregarSessao();
    if (sessao) {
      const usuarioSessao = buscarUsuarioPorId(sessao.usuarioId);
      if (usuarioSessao && usuarioSessao.ativo) {
        setUsuario(usuarioSessao);
      } else {
        removerSessao();
      }
    }
    
    setCarregando(false);
  }, []);

  /**
   * Faz login do usuário
   * 
   * NOTA: Em produção, a senha deve ser verificada no backend
   * Por enquanto, estamos usando uma senha padrão "aura123" para todos
   */
  const login = async (email: string, senha: string): Promise<boolean> => {
    // Simula delay de API
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const usuarioEncontrado = buscarUsuarioPorEmail(email);
    
    if (!usuarioEncontrado) {
      return false;
    }
    
    if (!usuarioEncontrado.ativo) {
      return false;
    }
    
    // NOTA: Senha hardcoded apenas para desenvolvimento
    // Em produção, usar Firebase Authentication ou backend com hash
    if (senha !== 'aura123') {
      return false;
    }
    
    // Salva sessão
    const sessao: Sessao = {
      usuarioId: usuarioEncontrado.id,
      email: usuarioEncontrado.email,
      nivel: usuarioEncontrado.nivel,
      dataLogin: new Date().toISOString(),
    };
    
    salvarSessao(sessao);
    setUsuario(usuarioEncontrado);
    
    return true;
  };

  /**
   * Faz logout do usuário
   */
  const logout = () => {
    removerSessao();
    setUsuario(null);
  };

  /**
   * Verifica se o usuário tem permissão
   */
  const temPermissao = (niveisPermitidos: NivelAcesso[]): boolean => {
    if (!usuario) return false;
    return niveisPermitidos.includes(usuario.nivel);
  };

  const value: AuthContextType = {
    usuario,
    nivel: usuario?.nivel || null,
    autenticado: !!usuario,
    carregando,
    login,
    logout,
    temPermissao,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// ============================================================================
// HOOK
// ============================================================================

export function useAuth() {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  
  return context;
}

// ============================================================================
// UTILITÁRIOS
// ============================================================================

/**
 * Hierarquia de níveis de acesso
 * Master > Admin > Atuário > Administrativo > Vendedor
 */
const HIERARQUIA_NIVEIS: Record<NivelAcesso, number> = {
  master: 5,
  admin: 4,
  atuario: 3,
  administrativo: 2,
  vendedor: 1,
};

/**
 * Verifica se o nível do usuário é maior ou igual ao nível mínimo
 */
export function nivelSuficiente(nivelUsuario: NivelAcesso, nivelMinimo: NivelAcesso): boolean {
  return HIERARQUIA_NIVEIS[nivelUsuario] >= HIERARQUIA_NIVEIS[nivelMinimo];
}

/**
 * Retorna o nome amigável do nível de acesso
 */
export function getNomeNivel(nivel: NivelAcesso): string {
  const nomes: Record<NivelAcesso, string> = {
    master: 'Master',
    admin: 'Administrador',
    atuario: 'Atuário',
    administrativo: 'Administrativo',
    vendedor: 'Vendedor',
  };
  
  return nomes[nivel];
}

/**
 * Retorna a cor do badge do nível
 */
export function getCorNivel(nivel: NivelAcesso): string {
  const cores: Record<NivelAcesso, string> = {
    master: 'bg-purple-100 text-purple-800',
    admin: 'bg-blue-100 text-blue-800',
    atuario: 'bg-green-100 text-green-800',
    administrativo: 'bg-yellow-100 text-yellow-800',
    vendedor: 'bg-gray-100 text-gray-800',
  };
  
  return cores[nivel];
}

