import { initializeApp, getApps } from "firebase/app";
import {
  getDatabase,
  ref,
  push,
  onValue,
  remove,
  update,
  off,
  Database,
  DataSnapshot,
} from "firebase/database";

// ============================================================================
// FIREBASE CONFIG
// ============================================================================
const firebaseConfig = {
  apiKey: "AIzaSyBEyk14eOK9Pythap1O5IkVKLtAqgsto4s",
  authDomain: "aura-seguradora.firebaseapp.com",
  databaseURL: "https://aura-seguradora-default-rtdb.firebaseio.com",
  projectId: "aura-seguradora",
  storageBucket: "aura-seguradora.appspot.com",
  messagingSenderId: "000000000000",
  appId: "1:000000000000:web:000000000000",
};

// Inicializar Firebase (singleton)
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
let db: Database;

try {
  db = getDatabase(app);
} catch {
  // fallback silencioso — será tratado no serviço
  db = null as unknown as Database;
}

// ============================================================================
// TIPOS
// ============================================================================
export interface Anotacao {
  id?: string;
  autor: string;
  texto: string;
  criadoEm: number; // timestamp
  editadoEm?: number;
}

// ============================================================================
// SERVIÇO DE ANOTAÇÕES
// ============================================================================

/**
 * Escuta anotações em tempo real para uma questão específica.
 * Retorna uma função de cleanup para desinscrever o listener.
 */
export function escutarAnotacoes(
  questaoId: string,
  callback: (anotacoes: Anotacao[]) => void
): () => void {
  // Se Firebase não está disponível, usar localStorage como fallback
  if (!db) {
    const stored = localStorage.getItem(`anotacoes_${questaoId}`);
    callback(stored ? JSON.parse(stored) : []);
    return () => {};
  }

  const anotacoesRef = ref(db, `blindagem/anotacoes/${questaoId}`);

  const handler = (snapshot: DataSnapshot) => {
    const data = snapshot.val();
    if (!data) {
      callback([]);
      return;
    }
    const lista: Anotacao[] = Object.entries(data).map(([key, val]) => ({
      ...(val as Anotacao),
      id: key,
    }));
    // Ordenar por data de criação (mais recente primeiro)
    lista.sort((a, b) => (b.criadoEm || 0) - (a.criadoEm || 0));
    callback(lista);
  };

  onValue(anotacoesRef, handler);

  return () => {
    off(anotacoesRef, "value", handler);
  };
}

/**
 * Adiciona uma nova anotação a uma questão.
 */
export async function adicionarAnotacao(
  questaoId: string,
  anotacao: Omit<Anotacao, "id">
): Promise<void> {
  if (!db) {
    // Fallback localStorage
    const stored = localStorage.getItem(`anotacoes_${questaoId}`);
    const lista: Anotacao[] = stored ? JSON.parse(stored) : [];
    lista.unshift({ ...anotacao, id: `local_${Date.now()}` });
    localStorage.setItem(`anotacoes_${questaoId}`, JSON.stringify(lista));
    return;
  }

  const anotacoesRef = ref(db, `blindagem/anotacoes/${questaoId}`);
  await push(anotacoesRef, anotacao);
}

/**
 * Remove uma anotação específica.
 */
export async function removerAnotacao(
  questaoId: string,
  anotacaoId: string
): Promise<void> {
  if (!db) {
    const stored = localStorage.getItem(`anotacoes_${questaoId}`);
    const lista: Anotacao[] = stored ? JSON.parse(stored) : [];
    const filtrada = lista.filter((a) => a.id !== anotacaoId);
    localStorage.setItem(`anotacoes_${questaoId}`, JSON.stringify(filtrada));
    return;
  }

  const anotacaoRef = ref(db, `blindagem/anotacoes/${questaoId}/${anotacaoId}`);
  await remove(anotacaoRef);
}

/**
 * Edita uma anotação existente.
 */
export async function editarAnotacao(
  questaoId: string,
  anotacaoId: string,
  novoTexto: string
): Promise<void> {
  if (!db) {
    const stored = localStorage.getItem(`anotacoes_${questaoId}`);
    const lista: Anotacao[] = stored ? JSON.parse(stored) : [];
    const idx = lista.findIndex((a) => a.id === anotacaoId);
    if (idx >= 0) {
      lista[idx].texto = novoTexto;
      lista[idx].editadoEm = Date.now();
    }
    localStorage.setItem(`anotacoes_${questaoId}`, JSON.stringify(lista));
    return;
  }

  const anotacaoRef = ref(db, `blindagem/anotacoes/${questaoId}/${anotacaoId}`);
  await update(anotacaoRef, { texto: novoTexto, editadoEm: Date.now() });
}

/**
 * Exporta todas as anotações de todas as questões (para uso em reuniões).
 */
export function escutarTodasAnotacoes(
  callback: (dados: Record<string, Anotacao[]>) => void
): () => void {
  if (!db) {
    // Fallback localStorage
    const todas: Record<string, Anotacao[]> = {};
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key?.startsWith("anotacoes_")) {
        const qId = key.replace("anotacoes_", "");
        todas[qId] = JSON.parse(localStorage.getItem(key) || "[]");
      }
    }
    callback(todas);
    return () => {};
  }

  const todasRef = ref(db, "blindagem/anotacoes");

  const handler = (snapshot: DataSnapshot) => {
    const data = snapshot.val();
    if (!data) {
      callback({});
      return;
    }
    const resultado: Record<string, Anotacao[]> = {};
    Object.entries(data).forEach(([questaoId, anotacoes]) => {
      resultado[questaoId] = Object.entries(anotacoes as Record<string, Anotacao>)
        .map(([key, val]) => ({ ...val, id: key }))
        .sort((a, b) => (b.criadoEm || 0) - (a.criadoEm || 0));
    });
    callback(resultado);
  };

  onValue(todasRef, handler);
  return () => off(todasRef, "value", handler);
}

export { db };
