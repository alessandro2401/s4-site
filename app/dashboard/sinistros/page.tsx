'use client';

import { useMemo } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { listarSinistros, listarApolices } from '@/lib/storage';
import { 
  calcularEstatisticasSinistros,
  calcularIndicadoresSinistralidade,
  analisarSinistrosPorTempoCNH,
} from '@/lib/sinistros';
import { formatarReais } from '@/lib/cotacoes';
import IndicadoresSinistralidade from '@/components/dashboard/IndicadoresSinistralidade';
import SinistrosPorTipo from '@/components/dashboard/SinistrosPorTipo';
import SinistrosPorRegiao from '@/components/dashboard/SinistrosPorRegiao';
import SinistrosPorIdade from '@/components/dashboard/SinistrosPorIdade';
import { AlertTriangle, TrendingUp, Shield, DollarSign } from 'lucide-react';

export default function SinistrosPage() {
  const { usuario } = useAuth();
  
  // Dados
  const sinistros = listarSinistros();
  const apolices = listarApolices();
  
  const stats = useMemo(
    () => calcularEstatisticasSinistros(sinistros, apolices),
    [sinistros, apolices]
  );
  
  const indicadores = useMemo(
    () => calcularIndicadoresSinistralidade(sinistros, apolices),
    [sinistros, apolices]
  );
  
  const dadosCNH = useMemo(
    () => analisarSinistrosPorTempoCNH(sinistros),
    [sinistros]
  );
  
  return (
    <div className="space-y-6">
      {/* Cabeçalho */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Análise de Sinistralidade</h1>
        <p className="text-gray-600 mt-1">
          Indicadores de frequência, severidade e performance de sinistros
        </p>
      </div>

      {/* Indicadores Principais */}
      <IndicadoresSinistralidade sinistros={sinistros} apolices={apolices} />

      {/* Resumo Executivo */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          📊 Resumo Executivo
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">Total de Sinistros</p>
            <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">Valor Total Indenizado</p>
            <p className="text-2xl font-bold text-blue-600">
              {formatarReais(stats.valorTotalIndenizado)}
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">Valor Médio</p>
            <p className="text-2xl font-bold text-purple-600">
              {formatarReais(stats.valorMedioIndenizado)}
            </p>
          </div>
          <div className="bg-white rounded-lg p-4">
            <p className="text-sm text-gray-600 mb-1">Custo por Apólice</p>
            <p className="text-2xl font-bold text-orange-600">
              {formatarReais(indicadores.custoMedioPorApolice)}
            </p>
          </div>
        </div>
      </div>

      {/* Gráficos - Linha 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SinistrosPorTipo sinistros={sinistros} apolices={apolices} />
        <SinistrosPorRegiao sinistros={sinistros} apolices={apolices} />
      </div>

      {/* Gráficos - Linha 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <SinistrosPorIdade sinistros={sinistros} />
        
        {/* Sinistros por Tempo de CNH */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">
            Sinistros por Tempo de CNH
          </h3>
          <div className="space-y-4">
            {dadosCNH.map((item, index) => {
              const maxQuantidade = Math.max(...dadosCNH.map(d => d.quantidade), 1);
              const largura = (item.quantidade / maxQuantidade) * 100;
              const cores = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-blue-500', 'bg-green-500'];

              return (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-700">{item.faixa}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-bold text-gray-900">{item.quantidade}</span>
                      <span className="text-xs text-gray-500">
                        ({item.percentual.toFixed(1)}%)
                      </span>
                    </div>
                  </div>
                  <div className="relative h-8 bg-gray-100 rounded-lg overflow-hidden">
                    <div
                      className={`h-full ${cores[index]} transition-all duration-500 flex items-center justify-end pr-3`}
                      style={{ width: `${largura}%` }}
                    >
                      {item.quantidade > 0 && (
                        <span className="text-xs font-semibold text-white">
                          {item.quantidade}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center justify-end mt-1 text-xs text-gray-600">
                    <span>Médio: {formatarReais(item.valorMedio)}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Distribuição por Status */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Distribuição por Status
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <p className="text-sm text-yellow-600 mb-1">Abertos</p>
            <p className="text-3xl font-bold text-yellow-900">{stats.porStatus.aberto}</p>
            <p className="text-xs text-yellow-600 mt-1">
              {stats.total > 0 ? ((stats.porStatus.aberto / stats.total) * 100).toFixed(1) : 0}%
            </p>
          </div>
          <div className="text-center p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-600 mb-1">Em Análise</p>
            <p className="text-3xl font-bold text-blue-900">{stats.porStatus.em_analise}</p>
            <p className="text-xs text-blue-600 mt-1">
              {stats.total > 0 ? ((stats.porStatus.em_analise / stats.total) * 100).toFixed(1) : 0}%
            </p>
          </div>
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <p className="text-sm text-green-600 mb-1">Aprovados</p>
            <p className="text-3xl font-bold text-green-900">{stats.porStatus.aprovado}</p>
            <p className="text-xs text-green-600 mt-1">
              {stats.total > 0 ? ((stats.porStatus.aprovado / stats.total) * 100).toFixed(1) : 0}%
            </p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg">
            <p className="text-sm text-purple-600 mb-1">Pagos</p>
            <p className="text-3xl font-bold text-purple-900">{stats.porStatus.pago}</p>
            <p className="text-xs text-purple-600 mt-1">
              {stats.total > 0 ? ((stats.porStatus.pago / stats.total) * 100).toFixed(1) : 0}%
            </p>
          </div>
          <div className="text-center p-4 bg-red-50 rounded-lg">
            <p className="text-sm text-red-600 mb-1">Negados</p>
            <p className="text-3xl font-bold text-red-900">{stats.porStatus.negado}</p>
            <p className="text-xs text-red-600 mt-1">
              {stats.total > 0 ? ((stats.porStatus.negado / stats.total) * 100).toFixed(1) : 0}%
            </p>
          </div>
        </div>
      </div>

      {/* Insights e Recomendações */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            ⚠️ Pontos de Atenção
          </h3>
          <div className="space-y-3">
            {indicadores.indice > 70 && (
              <div className="bg-white rounded-lg p-3 border border-red-200">
                <p className="font-medium text-red-900">Índice de Sinistralidade Alto</p>
                <p className="text-sm text-red-700">
                  {indicadores.indice.toFixed(1)}% - Acima do limite recomendado (70%)
                </p>
              </div>
            )}
            {indicadores.frequencia > 20 && (
              <div className="bg-white rounded-lg p-3 border border-orange-200">
                <p className="font-medium text-orange-900">Frequência Elevada</p>
                <p className="text-sm text-orange-700">
                  {indicadores.frequencia.toFixed(1)} sinistros por 100 apólices
                </p>
              </div>
            )}
            {stats.porStatus.aberto > 5 && (
              <div className="bg-white rounded-lg p-3 border border-yellow-200">
                <p className="font-medium text-yellow-900">Sinistros Pendentes</p>
                <p className="text-sm text-yellow-700">
                  {stats.porStatus.aberto} sinistros aguardando análise
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
              <p className="font-medium text-gray-900">Performance Geral</p>
              <p className="text-gray-700">
                {indicadores.indice < 50
                  ? 'Excelente - Sinistralidade controlada'
                  : indicadores.indice < 70
                  ? 'Boa - Dentro dos parâmetros'
                  : 'Atenção - Sinistralidade elevada'}
              </p>
            </div>
            <div className="bg-white rounded-lg p-3">
              <p className="font-medium text-gray-900">Taxa de Aprovação</p>
              <p className="text-gray-700">
                {indicadores.taxaAprovacao.toFixed(1)}% dos sinistros são aprovados
              </p>
            </div>
            <div className="bg-white rounded-lg p-3">
              <p className="font-medium text-gray-900">Tipo Mais Comum</p>
              <p className="text-gray-700">
                {stats.porTipo.colisao > stats.porTipo.roubo
                  ? `Colisão (${stats.porTipo.colisao} casos)`
                  : `Roubo (${stats.porTipo.roubo} casos)`}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

