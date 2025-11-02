'use client';

import { useMemo } from 'react';
import { gerarComparativoTemporal } from '@/lib/financeiro';
import { formatarReais } from '@/lib/cotacoes';
import { TrendingUp, TrendingDown } from 'lucide-react';

export default function EvolucaoReceita() {
  const dados = useMemo(() => gerarComparativoTemporal(), []);

  const maxValor = Math.max(...dados.map(d => Math.max(d.premios, d.sinistros)), 1);
  const maxAltura = 180; // pixels

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">
        Evolução de Receita (Últimos 12 Meses)
      </h3>

      {/* Gráfico de Barras */}
      <div className="mb-6">
        <div className="flex items-end justify-between gap-1" style={{ height: `${maxAltura}px` }}>
          {dados.map((item, index) => {
            const alturaPremios = (item.premios / maxValor) * maxAltura;
            const alturaSinistros = (item.sinistros / maxValor) * maxAltura;

            return (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div className="w-full flex flex-col justify-end items-center" style={{ height: `${maxAltura}px` }}>
                  {/* Tooltip ao hover */}
                  <div className="group relative w-full">
                    <div className="flex gap-0.5 items-end justify-center">
                      {/* Barra de Prêmios */}
                      <div
                        className="flex-1 bg-blue-500 rounded-t transition-all duration-300 hover:bg-blue-600"
                        style={{ height: `${alturaPremios}px`, minHeight: item.premios > 0 ? '4px' : '0' }}
                        title={`Prêmios: ${formatarReais(item.premios)}`}
                      ></div>
                      {/* Barra de Sinistros */}
                      <div
                        className="flex-1 bg-red-400 rounded-t transition-all duration-300 hover:bg-red-500"
                        style={{ height: `${alturaSinistros}px`, minHeight: item.sinistros > 0 ? '4px' : '0' }}
                        title={`Sinistros: ${formatarReais(item.sinistros)}`}
                      ></div>
                    </div>
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-10">
                      <div className="bg-gray-900 text-white text-xs rounded py-2 px-3 whitespace-nowrap">
                        <p className="font-semibold mb-1">{item.periodo}</p>
                        <p className="text-blue-300">Prêmios: {formatarReais(item.premios)}</p>
                        <p className="text-red-300">Sinistros: {formatarReais(item.sinistros)}</p>
                        <p className="text-green-300 mt-1">Resultado: {formatarReais(item.resultado)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Labels dos meses */}
        <div className="flex items-center justify-between gap-1 mt-2">
          {dados.map((item, index) => (
            <div key={index} className="flex-1 text-center">
              <p className="text-xs text-gray-600 transform -rotate-45 origin-top-left">
                {item.periodo.split(' ')[0]}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Legenda */}
      <div className="flex items-center justify-center gap-6 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-blue-500 rounded"></div>
          <span className="text-sm text-gray-700">Prêmios</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-red-400 rounded"></div>
          <span className="text-sm text-gray-700">Sinistros</span>
        </div>
      </div>

      {/* Resumo */}
      <div className="pt-4 border-t border-gray-200">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-gray-600 mb-1">Crescimento Médio</p>
            <div className="flex items-center gap-2">
              {dados[dados.length - 1]?.crescimento >= 0 ? (
                <TrendingUp className="w-4 h-4 text-green-600" />
              ) : (
                <TrendingDown className="w-4 h-4 text-red-600" />
              )}
              <p className={`text-lg font-bold ${
                dados[dados.length - 1]?.crescimento >= 0 ? 'text-green-600' : 'text-red-600'
              }`}>
                {Math.abs(dados[dados.length - 1]?.crescimento || 0).toFixed(1)}%
              </p>
            </div>
          </div>
          <div>
            <p className="text-xs text-gray-600 mb-1">Resultado Acumulado</p>
            <p className="text-lg font-bold text-blue-600">
              {formatarReais(dados.reduce((acc, d) => acc + d.resultado, 0))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

