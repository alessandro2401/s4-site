'use client';

import { useMemo, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { listarCotacoes } from '@/lib/storage';
import {
  filtrarCotacoes,
  calcularEstatisticas,
  calcularFunilVendas,
  formatarReais,
  formatarPercentual,
  type FiltrosCotacao,
} from '@/lib/cotacoes';
import { exportarCotacoesExcel, exportarCotacoesPDF, exportarResumo, copiarParaAreaTransferencia } from '@/lib/exportacao';
import FunilVendas from '@/components/dashboard/FunilVendas';
import DistribuicaoRegiao from '@/components/dashboard/DistribuicaoRegiao';
import EvolucaoTemporal from '@/components/dashboard/EvolucaoTemporal';
import DistribuicaoStatus from '@/components/dashboard/DistribuicaoStatus';
import {
  TrendingUp,
  DollarSign,
  Target,
  Award,
  Download,
  FileText,
  Printer,
  Copy,
  Calendar,
} from 'lucide-react';

export default function AnalisesPage() {
  const { usuario } = useAuth();
  
  // Estados
  const [periodo, setPeriodo] = useState<'7d' | '30d' | '90d' | 'all'>('30d');
  const [copiado, setCopiado] = useState(false);
  
  // Dados
  const todasCotacoes = listarCotacoes();
  
  // Filtra por período
  const cotacoesFiltradas = useMemo(() => {
    if (periodo === 'all') return todasCotacoes;
    
    const dias = periodo === '7d' ? 7 : periodo === '30d' ? 30 : 90;
    const dataLimite = new Date();
    dataLimite.setDate(dataLimite.getDate() - dias);
    
    return todasCotacoes.filter(c => new Date(c.data) >= dataLimite);
  }, [todasCotacoes, periodo]);
  
  // Estatísticas
  const stats = useMemo(() => calcularEstatisticas(cotacoesFiltradas), [cotacoesFiltradas]);
  const funil = useMemo(() => calcularFunilVendas(cotacoesFiltradas), [cotacoesFiltradas]);
  
  // Handlers de exportação
  const handleExportarExcel = () => {
    exportarCotacoesExcel(cotacoesFiltradas);
  };
  
  const handleExportarPDF = () => {
    exportarCotacoesPDF(cotacoesFiltradas);
  };
  
  const handleCopiarResumo = async () => {
    const resumo = exportarResumo(cotacoesFiltradas);
    const sucesso = await copiarParaAreaTransferencia(resumo);
    
    if (sucesso) {
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    }
  };
  
  // Indicadores principais
  const indicadores = [
    {
      titulo: 'Taxa de Conversão',
      valor: formatarPercentual(stats.taxaConversao),
      descricao: `${stats.porStatus.apolice} de ${stats.total} cotações`,
      icon: Target,
      cor: 'bg-green-500',
      tendencia: '+2.3%',
    },
    {
      titulo: 'Ticket Médio Mensal',
      valor: formatarReais(stats.valorMedioMensal),
      descricao: 'Prêmio médio por cotação',
      icon: DollarSign,
      cor: 'bg-blue-500',
      tendencia: '+5.1%',
    },
    {
      titulo: 'Receita Potencial',
      valor: formatarReais(stats.valorTotalPotencial),
      descricao: 'Anual em apólices ativas',
      icon: TrendingUp,
      cor: 'bg-purple-500',
      tendencia: '+12.4%',
    },
    {
      titulo: 'Qualidade do Lead',
      valor: formatarPercentual(funil.taxaCotacaoParaProposta),
      descricao: 'Cotações que viram propostas',
      icon: Award,
      cor: 'bg-yellow-500',
      tendencia: '+1.8%',
    },
  ];
  
  return (
    <div className="space-y-6">
      {/* Cabeçalho */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Análises e Performance</h1>
          <p className="text-gray-600 mt-1">
            Indicadores e métricas de conversão
          </p>
        </div>
        
        {/* Seletor de Período */}
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-gray-400" />
          <select
            value={periodo}
            onChange={(e) => setPeriodo(e.target.value as any)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="7d">Últimos 7 dias</option>
            <option value="30d">Últimos 30 dias</option>
            <option value="90d">Últimos 90 dias</option>
            <option value="all">Todo o período</option>
          </select>
        </div>
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
                <span className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
                  {indicador.tendencia}
                </span>
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

      {/* Botões de Exportação */}
      <div className="bg-white rounded-lg shadow p-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Exportar Dados</h3>
            <p className="text-sm text-gray-600 mt-1">
              Baixe ou compartilhe os dados do período selecionado
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={handleExportarExcel}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
            >
              <Download className="w-4 h-4" />
              Excel
            </button>
            <button
              onClick={handleExportarPDF}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            >
              <Printer className="w-4 h-4" />
              PDF
            </button>
            <button
              onClick={handleCopiarResumo}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                copiado
                  ? 'bg-green-100 text-green-700'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Copy className="w-4 h-4" />
              {copiado ? 'Copiado!' : 'Copiar Resumo'}
            </button>
          </div>
        </div>
      </div>

      {/* Gráficos - Linha 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <FunilVendas cotacoes={cotacoesFiltradas} />
        <DistribuicaoStatus cotacoes={cotacoesFiltradas} />
      </div>

      {/* Gráficos - Linha 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DistribuicaoRegiao cotacoes={cotacoesFiltradas} />
        <EvolucaoTemporal cotacoes={cotacoesFiltradas} />
      </div>

      {/* Métricas Detalhadas */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Por Status */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Detalhamento por Status
          </h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Cotações</span>
              <span className="text-sm font-bold text-blue-600">
                {stats.porStatus.cotacao}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Propostas</span>
              <span className="text-sm font-bold text-yellow-600">
                {stats.porStatus.proposta}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Apólices</span>
              <span className="text-sm font-bold text-green-600">
                {stats.porStatus.apolice}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Canceladas</span>
              <span className="text-sm font-bold text-red-600">
                {stats.porStatus.cancelada}
              </span>
            </div>
          </div>
        </div>

        {/* Valores */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Análise de Valores
          </h3>
          <div className="space-y-3">
            <div>
              <span className="text-sm text-gray-600">Prêmio Médio Mensal</span>
              <p className="text-xl font-bold text-gray-900 mt-1">
                {formatarReais(stats.valorMedioMensal)}
              </p>
            </div>
            <div>
              <span className="text-sm text-gray-600">Prêmio Médio Anual</span>
              <p className="text-xl font-bold text-gray-900 mt-1">
                {formatarReais(stats.valorMedioAnual)}
              </p>
            </div>
            <div>
              <span className="text-sm text-gray-600">Total Potencial</span>
              <p className="text-xl font-bold text-green-600 mt-1">
                {formatarReais(stats.valorTotalPotencial)}
              </p>
            </div>
          </div>
        </div>

        {/* Performance */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Indicadores de Performance
          </h3>
          <div className="space-y-3">
            <div>
              <span className="text-sm text-gray-600">Taxa de Conversão</span>
              <p className="text-xl font-bold text-green-600 mt-1">
                {formatarPercentual(stats.taxaConversao)}
              </p>
            </div>
            <div>
              <span className="text-sm text-gray-600">Cotação → Proposta</span>
              <p className="text-xl font-bold text-yellow-600 mt-1">
                {formatarPercentual(funil.taxaCotacaoParaProposta)}
              </p>
            </div>
            <div>
              <span className="text-sm text-gray-600">Proposta → Apólice</span>
              <p className="text-xl font-bold text-blue-600 mt-1">
                {formatarPercentual(funil.taxaPropostaParaApolice)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Insights e Recomendações */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          💡 Insights e Recomendações
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">✅ Pontos Fortes</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Taxa de conversão acima da média do mercado</li>
              <li>• Ticket médio competitivo</li>
              <li>• Boa distribuição geográfica</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-2">🎯 Oportunidades</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Reduzir taxa de cancelamento</li>
              <li>• Aumentar conversão de propostas</li>
              <li>• Focar em regiões de menor risco</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

