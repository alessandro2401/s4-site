'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get('redirect') || '/';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.success) {
        router.push(redirect);
        router.refresh();
      } else {
        setError(data.message || 'Credenciais inválidas.');
      }
    } catch {
      setError('Erro de conexão. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1628] via-[#0d1f3c] to-[#0a1628]">
      <div className="w-full max-w-md mx-4">
        {/* Card de Login */}
        <div className="bg-[#111c32]/90 backdrop-blur-xl border border-[#1e3a5f]/50 rounded-2xl shadow-2xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
              <span className="text-emerald-400 text-sm font-medium tracking-wider uppercase">
                Área Restrita
              </span>
            </div>
            <h1 className="text-2xl font-bold text-white mb-2">
              Acesso ao Sistema
            </h1>
            <p className="text-gray-400 text-sm">
              Insira suas credenciais para acessar o conteúdo protegido.
            </p>
          </div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
                E-mail
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com.br"
                required
                className="w-full px-4 py-3 bg-[#0a1628] border border-[#1e3a5f]/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400/50 transition-all"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1.5">
                Senha
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••"
                required
                className="w-full px-4 py-3 bg-[#0a1628] border border-[#1e3a5f]/50 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 focus:border-emerald-400/50 transition-all"
              />
            </div>

            {error && (
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-red-400 text-sm text-center">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-emerald-500 hover:bg-emerald-600 disabled:bg-emerald-500/50 text-white font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Autenticando...
                </>
              ) : (
                'Entrar'
              )}
            </button>
          </form>

          {/* Footer */}
          <div className="mt-6 pt-6 border-t border-[#1e3a5f]/30 text-center">
            <p className="text-gray-500 text-xs">
              Acesso restrito à diretoria e colaboradores autorizados.
            </p>
          </div>
        </div>

        {/* Link público */}
        <div className="text-center mt-6">
          <a
            href="/estudo"
            className="text-emerald-400/70 hover:text-emerald-400 text-sm transition-colors"
          >
            Acessar Estudo de Viabilidade (público) →
          </a>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a1628] via-[#0d1f3c] to-[#0a1628]">
        <div className="text-white">Carregando...</div>
      </div>
    }>
      <LoginForm />
    </Suspense>
  );
}
