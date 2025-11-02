'use client';

import { useAuth } from '@/contexts/AuthContext';
import { listarCotacoes, listarApolices, listarSinistros } from '@/lib/storage';
import {
  FileText,
  Shield,
  AlertCircle,
  TrendingUp,
  Users,
  DollarSign,
} from 'lucide-react';

export default function DashboardPage() {
  const { usuario } = useAuth();
  
  // Carrega dados
  const cotacoes = listarCotacoes();
  const apolices = listarApolices();
  const sinistros = listarSinistros();
  
  // Estatísticas
  const totalCotacoes = cotacoes.length;
  const totalApolices = apolices.length;
  const totalSinistros = sinistros.length;
  const taxaConversao = totalCotacoes > 0 
    ? ((totalApolices / totalCotacoes) * 100).toFixed(1) 
    : '0.0';

  const cards = [
    {
      titulo: 'Cotações',
      valor: totalCotacoes,
      icon: FileText,
      cor: 'bg-blue-500',
      descricao: 'Total de cotações realizadas',
    },
    {
      titulo: 'Apólices',
      valor: totalApolices,
      icon: Shield,
      cor: 'bg-green-500',
      descricao: 'Apólices ativas',
    },
    {
      titulo: 'Sinistros',
      valor: totalSinistros,
      icon: AlertCircle,
      cor: 'bg-red-500',
      descricao: 'Sinistros registrados',
    },
    {
      titulo: 'Conversão',
      valor: `${taxaConversao}%`,
      icon: TrendingUp,
      cor: 'bg-purple-500',
      descricao: 'Taxa de conversão',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Cabeçalho */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Bem-vindo, {usuario?.nome.split(' ')[0]}!
        </h1>
        <p className="text-gray-600 mt-1">
          Aqui está um resumo das suas atividades
        </p>
      </div>

      {/* Cards de Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.titulo}
              className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${card.cor} rounded-lg flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">
                {card.valor}
              </h3>
              <p className="text-sm font-medium text-gray-600 mb-1">
                {card.titulo}
              </p>
              <p className="text-xs text-gray-500">
                {card.descricao}
              </p>
            </div>
          );
        })}
      </div>

      {/* Links Rápidos */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          🚀 Acesso Rápido
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <a
            href="/dashboard/cotacoes"
            className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900">Cotações</h4>
            </div>
            <p className="text-sm text-gray-600">Visualize e gerencie todas as cotações</p>
          </a>
          <a
            href="/dashboard/analises"
            className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900">Análises</h4>
            </div>
            <p className="text-sm text-gray-600">Gráficos e indicadores de performance</p>
          </a>
          <a
            href="/calculadora"
            className="bg-white rounded-lg p-4 hover:shadow-md transition-shadow border border-gray-200"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-5 h-5 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900">Calculadora</h4>
            </div>
            <p className="text-sm text-gray-600">Realizar nova cotação</p>
          </a>
        </div>
      </div>

      {/* Status da Implementação */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          ✅ ONDA 8.2 - Painel de Cotações Implementado
        </h3>
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-xs font-bold text-green-600">✓</span>
            </div>
            <div>
              <p className="font-medium text-gray-900">Listagem de Cotações</p>
              <p className="text-sm text-gray-600">Tabela completa com filtros e busca</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-xs font-bold text-green-600">✓</span>
            </div>
            <div>
              <p className="font-medium text-gray-900">Gráficos e Análises</p>
              <p className="text-sm text-gray-600">Funil de vendas, distribuição e evolução</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-xs font-bold text-green-600">✓</span>
            </div>
            <div>
              <p className="font-medium text-gray-900">Indicadores de Performance</p>
              <p className="text-sm text-gray-600">Métricas de conversão e valores</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-6 h-6 bg-green-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
              <span className="text-xs font-bold text-green-600">✓</span>
            </div>
            <div>
              <p className="font-medium text-gray-900">Exportação de Dados</p>
              <p className="text-sm text-gray-600">Excel, PDF e resumo para compartilhamento</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

