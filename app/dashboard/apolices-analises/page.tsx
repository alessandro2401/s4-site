'use client';

import { useMemo } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { listarApolices } from '@/lib/storage';
import { calcularEstatisticasApolices } from '@/lib/apolices';
import { formatarReais, formatarPercentual } from '@/lib/cotacoes';
import GestaoInadimplencia from '@/components/dashboard/GestaoInadimplencia';
import ControleRenovacoes from '@/components/dashboard/ControleRenovacoes';
import {
  Shield,
  TrendingUp,
  DollarSign,
  AlertTriangle,
  Calendar,
  CheckCircle,
} from 'lucide-react';

export default function ApolicesAnalisesPage() {
  const { usuario } = useAuth();
  
  // Dados
  const apolices = listarApolices();
  const stats = useMemo(() => calcularEstatisticasApolices(apolices), [apolices]);
  
  // Indicadores principais
  const indicadores = [
    {
      titulo: 'Total de Apólices',
      valor: stats.total.toString(),
      descricao: `${stats.porStatus.ativa} ativas`,
      icon: Shield,
      cor: 'bg-blue-500',
    },
    {
      titulo: 'Taxa de Retenção',
      valor: formatarPercentual(100 - stats.taxaCancelamento),
      descricao: 'Apólices mantidas',
      icon: CheckCircle,
      cor: 'bg-green-500',
    },
    {
      titulo: 'Taxa de Inadimplência',
      valor: formatarPercentual(stats.taxaInadimplencia),
      descricao: `${stats.porStatus.inadimplente} inadimplentes`,
      icon: AlertTriangle,
      cor: 'bg-red-500',
    },
    {
      titulo: 'Receita Mensal Recorrente',
      valor: formatarReais(stats.valorMensalTotal),
      descricao: 'MRR de apólices ativas',
      icon: DollarSign,
      cor: 'bg-purple-500',
    },
  ];
  
  return (
    <div className="space-y-6">
      {/* Cabeçalho */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Análises de Apólices</h1>
        <p className="text-gray-600 mt-1">
          Indicadores de performance e gestão de carteira
        </p>
      </div>

      {/* Indicadores Principais */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {indicadores.map((indicador) => {
          const Icon = indicador.icon;
          return (
            <div
              key={indicador.titulo}
              className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 ${indicador.cor} rounded-lg flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-1">
                {indicador.valor}
              </h3>
              <p className="text-sm font-medium text-gray-600 mb-1">
                {indicador.titulo}
              </p>
              <p className="text-xs text-gray-500">
                {indicador.descricao}
              </p>
            </div>
          );
        })}
      </div>

      {/* Métricas Financeiras */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Métricas Financeiras
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <p className="text-sm text-gray-600 mb-2">Receita Mensal Recorrente</p>
            <p className="text-3xl font-bold text-blue-600">
              {formatarReais(stats.valorMensalTotal)}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Média: {formatarReais(stats.valorMedioMensal)}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Receita Anual Projetada</p>
            <p className="text-3xl font-bold text-green-600">
              {formatarReais(stats.valorAnualTotal)}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Média: {formatarReais(stats.valorMedioAnual)}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-2">Ticket Médio</p>
            <p className="text-3xl font-bold text-purple-600">
              {formatarReais(stats.valorMedioMensal)}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Por apólice ativa
            </p>
          </div>
        </div>
      </div>

      {/* Gráficos - Linha 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GestaoInadimplencia apolices={apolices} />
        <ControleRenovacoes apolices={apolices} />
      </div>

      {/* Distribuição por Status */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Distribuição por Status
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-green-600 mb-1">Ativas</p>
            <p className="text-3xl font-bold text-green-900">{stats.porStatus.ativa}</p>
            <p className="text-xs text-green-600 mt-1">
              {stats.total > 0 ? ((stats.porStatus.ativa / stats.total) * 100).toFixed(1) : 0}%
            </p>
          </div>
          <div className="text-center p-4 bg-red-50 rounded-lg">
            <p className="text-sm text-red-600 mb-1">Inadimplentes</p>
            <p className="text-3xl font-bold text-red-900">{stats.porStatus.inadimplente}</p>
            <p className="text-xs text-red-600 mt-1">
              {stats.taxaInadimplencia.toFixed(1)}%
            </p>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-lg">
            <p className="text-sm text-orange-600 mb-1">Vencidas</p>
            <p className="text-3xl font-bold text-orange-900">{stats.porStatus.vencida}</p>
            <p className="text-xs text-orange-600 mt-1">
              {stats.total > 0 ? ((stats.porStatus.vencida / stats.total) * 100).toFixed(1) : 0}%
            </p>
          </div>
          <div className="text-center p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Canceladas</p>
            <p className="text-3xl font-bold text-gray-900">{stats.porStatus.cancelada}</p>
            <p className="text-xs text-gray-600 mt-1">
              {stats.taxaCancelamento.toFixed(1)}%
            </p>
          </div>
        </div>
      </div>

      {/* Alertas e Ações */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            ⚠️ Ações Necessárias
          </h3>
          <div className="space-y-3">
            {stats.porStatus.inadimplente > 0 && (
              <div className="bg-white rounded-lg p-3 border border-red-200">
                <p className="font-medium text-red-900">Inadimplência</p>
                <p className="text-sm text-red-700">
                  {stats.porStatus.inadimplente} apólices precisam de atenção
                </p>
              </div>
            )}
            {stats.proximosVencimentos > 0 && (
              <div className="bg-white rounded-lg p-3 border border-orange-200">
                <p className="font-medium text-orange-900">Vencimentos Próximos</p>
                <p className="text-sm text-orange-700">
                  {stats.proximosVencimentos} apólices vencem em 30 dias
                </p>
              </div>
            )}
            {stats.renovacoesPendentes > 0 && (
              <div className="bg-white rounded-lg p-3 border border-blue-200">
                <p className="font-medium text-blue-900">Renovações Pendentes</p>
                <p className="text-sm text-blue-700">
                  {stats.renovacoesPendentes} renovações para processar
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            💡 Insights
          </h3>
          <div className="space-y-3 text-sm">
            <div className="bg-white rounded-lg p-3">
              <p className="font-medium text-gray-900">Taxa de Retenção</p>
              <p className="text-gray-700">
                {(100 - stats.taxaCancelamento).toFixed(1)}% das apólices são mantidas
              </p>
            </div>
            <div className="bg-white rounded-lg p-3">
              <p className="font-medium text-gray-900">Saúde da Carteira</p>
              <p className="text-gray-700">
                {stats.porStatus.ativa > 0 && stats.taxaInadimplencia < 5
                  ? 'Excelente - Baixa inadimplência'
                  : stats.taxaInadimplencia < 10
                  ? 'Boa - Inadimplência controlada'
                  : 'Atenção - Alta inadimplência'}
              </p>
            </div>
            <div className="bg-white rounded-lg p-3">
              <p className="font-medium text-gray-900">Oportunidade</p>
              <p className="text-gray-700">
                {stats.renovacoesPendentes} renovações podem gerar{' '}
                {formatarReais(stats.valorAnualTotal * (stats.renovacoesPendentes / stats.total))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

