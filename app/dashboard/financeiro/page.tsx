'use client';

import { useMemo, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import {
  calcularDadosFinanceiros,
  calcularMetricasFinanceiras,
  analisarInadimplencia,
  gerarProjecaoReceita,
  prepararDadosExportacao,
} from '@/lib/financeiro';
import { formatarReais } from '@/lib/cotacoes';

import EvolucaoReceita from '@/components/dashboard/EvolucaoReceita';
import GraficoFluxoCaixa from '@/components/dashboard/GraficoFluxoCaixa';
import {
  DollarSign,
  TrendingUp,
  TrendingDown,
  Download,
  FileText,
  Copy,
  Check,
  AlertTriangle,
  Target,
  Users,
  Zap,
} from 'lucide-react';

export default function FinanceiroPage() {
  const { usuario } = useAuth();
  const [copiado, setCopiado] = useState(false);
  
  // Dados
  const dados = useMemo(() => calcularDadosFinanceiros(), []);
  const metricas = useMemo(() => calcularMetricasFinanceiras(), []);
  const inadimplencia = useMemo(() => analisarInadimplencia(), []);
  const projecao = useMemo(() => gerarProjecaoReceita(12, 5), []);
  
  // Handlers de exportação
  const handleExportarExcel = () => {
    const dadosExportacao = prepararDadosExportacao();
    // Implementação simplificada - em produção usaria biblioteca real
    alert('Exportação para Excel em desenvolvimento');
  };
  
  const handleExportarPDF = () => {
    alert('Exportação para PDF em desenvolvimento');
  };
  
  const handleCopiarResumo = () => {
    const resumo = `
RELATÓRIO FINANCEIRO - S4 SEGUROS

RESUMO EXECUTIVO
Prêmios Mensais: ${formatarReais(dados.premiosMensais)}
Prêmios Anuais: ${formatarReais(dados.premiosAnuais)}
Sinistros Pagos: ${formatarReais(dados.sinistrosPagos)}
Resultado: ${formatarReais(dados.resultado)}
Margem de Lucro: ${dados.margemLucro.toFixed(1)}%
Índice de Sinistralidade: ${dados.indicesinistralidade.toFixed(1)}%

MÉTRICAS FINANCEIRAS
MRR: ${formatarReais(metricas.receitaMensalRecorrente)}
ARR: ${formatarReais(metricas.receitaAnualProjetada)}
LTV: ${formatarReais(metricas.valorVidaCliente)}
Taxa de Retenção: ${metricas.taxaRetencao.toFixed(1)}%
    `.trim();
    
    navigator.clipboard.writeText(resumo);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };
  
  // Indicadores principais
  const indicadores = [
    {
      titulo: 'Prêmios Mensais',
      valor: formatarReais(dados.premiosMensais),
      descricao: 'Receita recorrente',
      icon: DollarSign,
      cor: 'bg-blue-500',
    },
    {
      titulo: 'Margem de Lucro',
      valor: `${dados.margemLucro.toFixed(1)}%`,
      descricao: 'Resultado / Prêmios',
      icon: TrendingUp,
      cor: dados.margemLucro > 30 ? 'bg-green-500' : dados.margemLucro > 15 ? 'bg-yellow-500' : 'bg-red-500',
    },
    {
      titulo: 'MRR',
      valor: formatarReais(metricas.receitaMensalRecorrente),
      descricao: 'Monthly Recurring Revenue',
      icon: Zap,
      cor: 'bg-purple-500',
    },
    {
      titulo: 'LTV / CAC',
      valor: (metricas.valorVidaCliente / metricas.custoAquisicaoCliente).toFixed(1),
      descricao: 'Retorno sobre investimento',
      icon: Target,
      cor: 'bg-orange-500',
    },
  ];
  
  return (
    <div className="space-y-6">
      {/* Cabeçalho */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Relatórios Financeiros</h1>
          <p className="text-gray-600 mt-1">
            Análise de prêmios, projeções e rentabilidade
          </p>
        </div>

        {/* Botões de Exportação */}
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
            <FileText className="w-4 h-4" />
            PDF
          </button>
          <button
            onClick={handleCopiarResumo}
            className="flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            {copiado ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            {copiado ? 'Copiado!' : 'Copiar'}
          </button>
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

      {/* Resumo Financeiro */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          💰 Resumo Financeiro
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">Prêmios Anuais</p>
            <p className="text-3xl font-bold text-blue-600">
              {formatarReais(dados.premiosAnuais)}
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">Sinistros Pagos</p>
            <p className="text-3xl font-bold text-red-600">
              {formatarReais(dados.sinistrosPagos)}
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">Resultado</p>
            <p className={`text-3xl font-bold ${dados.resultado >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {formatarReais(dados.resultado)}
            </p>
          </div>
        </div>
      </div>

      {/* Gráficos - Linha 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <EvolucaoReceita />
        <GraficoFluxoCaixa />
      </div>

      {/* Métricas Avançadas */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          📊 Métricas Avançadas
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="text-sm text-gray-600 mb-1">ARR</p>
            <p className="text-2xl font-bold text-blue-600">
              {formatarReais(metricas.receitaAnualProjetada)}
            </p>
            <p className="text-xs text-gray-500 mt-1">Annual Recurring Revenue</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">CAC</p>
            <p className="text-2xl font-bold text-orange-600">
              {formatarReais(metricas.custoAquisicaoCliente)}
            </p>
            <p className="text-xs text-gray-500 mt-1">Customer Acquisition Cost</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">LTV</p>
            <p className="text-2xl font-bold text-purple-600">
              {formatarReais(metricas.valorVidaCliente)}
            </p>
            <p className="text-xs text-gray-500 mt-1">Lifetime Value</p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Taxa de Retenção</p>
            <p className="text-2xl font-bold text-green-600">
              {metricas.taxaRetencao.toFixed(1)}%
            </p>
            <p className="text-xs text-gray-500 mt-1">Clientes mantidos</p>
          </div>
        </div>
      </div>

      {/* Análise de Inadimplência */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          ⚠️ Análise de Inadimplência
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <p className="text-sm text-gray-600 mb-1">Total Inadimplente</p>
            <p className="text-3xl font-bold text-red-600">
              {inadimplencia.totalInadimplente}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Valor Mensal Perdido</p>
            <p className="text-2xl font-bold text-orange-600">
              {formatarReais(inadimplencia.valorMensalPerdido)}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Taxa de Inadimplência</p>
            <p className="text-2xl font-bold text-yellow-600">
              {inadimplencia.taxaInadimplencia.toFixed(1)}%
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Impacto na Receita</p>
            <p className="text-2xl font-bold text-red-600">
              {inadimplencia.impactoReceita.toFixed(1)}%
            </p>
          </div>
        </div>
      </div>

      {/* Projeção de Receita */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          📈 Projeção de Receita (12 Meses)
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Mês</th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Prêmios</th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Sinistros</th>
                <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Resultado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {projecao.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">{item.mes}</td>
                  <td className="px-4 py-3 text-sm text-right text-blue-600">
                    {formatarReais(item.premios)}
                  </td>
                  <td className="px-4 py-3 text-sm text-right text-red-600">
                    {formatarReais(item.sinistros)}
                  </td>
                  <td className={`px-4 py-3 text-sm text-right font-semibold ${
                    item.resultado >= 0 ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {formatarReais(item.resultado)}
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-gray-50 border-t-2 border-gray-300">
              <tr>
                <td className="px-4 py-3 text-sm font-bold text-gray-900">TOTAL</td>
                <td className="px-4 py-3 text-sm text-right font-bold text-blue-600">
                  {formatarReais(projecao.reduce((acc, p) => acc + p.premios, 0))}
                </td>
                <td className="px-4 py-3 text-sm text-right font-bold text-red-600">
                  {formatarReais(projecao.reduce((acc, p) => acc + p.sinistros, 0))}
                </td>
                <td className="px-4 py-3 text-sm text-right font-bold text-green-600">
                  {formatarReais(projecao.reduce((acc, p) => acc + p.resultado, 0))}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Insights */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          💡 Insights e Recomendações
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-lg p-4">
            <p className="font-medium text-gray-900 mb-2">Saúde Financeira</p>
            <p className="text-sm text-gray-700">
              {dados.margemLucro > 30
                ? 'Excelente - Margem de lucro acima de 30%'
                : dados.margemLucro > 15
                ? 'Boa - Margem de lucro saudável'
                : 'Atenção - Margem de lucro abaixo do ideal'}
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <p className="font-medium text-gray-900 mb-2">LTV / CAC Ratio</p>
            <p className="text-sm text-gray-700">
              Ratio de {(metricas.valorVidaCliente / metricas.custoAquisicaoCliente).toFixed(1)}:1
              {' - '}
              {metricas.valorVidaCliente / metricas.custoAquisicaoCliente > 3
                ? 'Excelente retorno sobre investimento'
                : 'Bom retorno sobre investimento'}
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <p className="font-medium text-gray-900 mb-2">Projeção de Crescimento</p>
            <p className="text-sm text-gray-700">
              Com taxa de {metricas.taxaCrescimento}% ao ano, a receita anual pode atingir{' '}
              {formatarReais(metricas.receitaAnualProjetada * 1.05)} no próximo ano
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <p className="font-medium text-gray-900 mb-2">Oportunidade de Recuperação</p>
            <p className="text-sm text-gray-700">
              Recuperar inadimplentes pode adicionar{' '}
              {formatarReais(inadimplencia.valorAnualPerdido)} à receita anual
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

