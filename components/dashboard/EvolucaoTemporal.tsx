'use client';

import { useMemo } from 'react';
import { calcularEstatisticas, formatarPercentual } from '@/lib/cotacoes';
import { Cotacao } from '@/lib/storage';
import { Calendar, TrendingUp } from 'lucide-react';

interface EvolucaoTemporalProps {
  cotacoes: Cotacao[];
}

export default function EvolucaoTemporal({ cotacoes }: EvolucaoTemporalProps) {
  const stats = useMemo(() => calcularEstatisticas(cotacoes), [cotacoes]);

  // Pega apenas os últimos 6 meses com dados
  const mesesComDados = stats.porMes.filter(m => m.quantidade > 0).slice(-6);

  // Calcula valor máximo para escala
  const maxQuantidade = Math.max(...mesesComDados.map(m => m.quantidade), 1);

  // Formata nome do mês
  const formatarMes = (mesAno: string) => {
    const [ano, mes] = mesAno.split('-');
    const meses = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
    return `${meses[parseInt(mes) - 1]}/${ano.slice(2)}`;
  };

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Evolução Temporal</h3>
        <Calendar className="w-5 h-5 text-gray-400" />
      </div>

      {mesesComDados.length === 0 ? (
        <div className="text-center py-12">
          <Calendar className="w-12 h-12 mx-auto mb-3 text-gray-300" />
          <p className="text-gray-500">Sem dados para exibir</p>
        </div>
      ) : (
        <>
          {/* Gráfico de Barras */}
          <div className="relative h-64 mb-4">
            <div className="absolute inset-0 flex items-end justify-around gap-2">
              {mesesComDados.map((item) => {
                const altura = (item.quantidade / maxQuantidade) * 100;
                const taxaConversao = item.quantidade > 0 
                  ? (item.conversoes / item.quantidade) * 100 
                  : 0;

                return (
                  <div key={item.mes} className="flex-1 flex flex-col items-center">
                    {/* Barra de Conversões */}
                    <div className="w-full relative group">
                      <div
                        className="w-full bg-gradient-to-t from-blue-500 to-blue-400 rounded-t-lg transition-all duration-300 hover:from-blue-600 hover:to-blue-500"
                        style={{ height: `${altura}%` }}
                      >
                        {/* Tooltip */}
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block">
                          <div className="bg-gray-900 text-white text-xs rounded-lg py-2 px-3 whitespace-nowrap">
                            <p className="font-semibold">{item.quantidade} cotações</p>
                            <p className="text-gray-300">{item.conversoes} conversões</p>
                            <p className="text-green-400">{formatarPercentual(taxaConversao)}</p>
                          </div>
                        </div>
                      </div>

                      {/* Indicador de conversões */}
                      {item.conversoes > 0 && (
                        <div
                          className="absolute bottom-0 left-0 right-0 bg-green-500 rounded-t-lg"
                          style={{ height: `${(item.conversoes / item.quantidade) * altura}%` }}
                        ></div>
                      )}
                    </div>

                    {/* Label do mês */}
                    <div className="mt-2 text-xs text-gray-600 font-medium">
                      {formatarMes(item.mes)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Legenda */}
          <div className="flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-blue-500 rounded"></div>
              <span className="text-gray-600">Cotações</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-green-500 rounded"></div>
              <span className="text-gray-600">Conversões</span>
            </div>
          </div>

          {/* Estatísticas */}
          <div className="mt-6 pt-6 border-t border-gray-200 grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-xs text-gray-600 mb-1">Total Período</p>
              <p className="text-lg font-bold text-gray-900">
                {mesesComDados.reduce((acc, m) => acc + m.quantidade, 0)}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-600 mb-1">Conversões</p>
              <p className="text-lg font-bold text-green-600">
                {mesesComDados.reduce((acc, m) => acc + m.conversoes, 0)}
              </p>
            </div>
            <div>
              <p className="text-xs text-gray-600 mb-1">Taxa Média</p>
              <p className="text-lg font-bold text-blue-600">
                {formatarPercentual(
                  mesesComDados.reduce((acc, m) => acc + m.quantidade, 0) > 0
                    ? (mesesComDados.reduce((acc, m) => acc + m.conversoes, 0) /
                        mesesComDados.reduce((acc, m) => acc + m.quantidade, 0)) *
                        100
                    : 0
                )}
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

