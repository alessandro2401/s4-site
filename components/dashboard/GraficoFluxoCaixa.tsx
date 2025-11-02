'use client';

import { useMemo } from 'react';
import { gerarFluxoCaixa } from '@/lib/financeiro';
import { formatarReais } from '@/lib/cotacoes';

export default function GraficoFluxoCaixa() {
  const dados = useMemo(() => gerarFluxoCaixa(12), []);

  const maxValor = Math.max(...dados.map(d => Math.max(d.entradas, d.saidas)), 1);
  const maxAltura = 160; // pixels

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">
        Fluxo de Caixa Projetado (12 Meses)
      </h3>

      {/* Gráfico */}
      <div className="mb-6">
        <div className="flex items-end justify-between gap-1" style={{ height: `${maxAltura}px` }}>
          {dados.map((item, index) => {
            const alturaEntradas = (item.entradas / maxValor) * maxAltura;
            const alturaSaidas = (item.saidas / maxValor) * maxAltura;

            return (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div className="w-full flex flex-col justify-end items-center" style={{ height: `${maxAltura}px` }}>
                  <div className="group relative w-full">
                    <div className="flex gap-0.5 items-end justify-center">
                      {/* Barra de Entradas */}
                      <div
                        className="flex-1 bg-green-500 rounded-t transition-all duration-300 hover:bg-green-600"
                        style={{ height: `${alturaEntradas}px`, minHeight: '4px' }}
                      ></div>
                      {/* Barra de Saídas */}
                      <div
                        className="flex-1 bg-orange-400 rounded-t transition-all duration-300 hover:bg-orange-500"
                        style={{ height: `${alturaSaidas}px`, minHeight: '4px' }}
                      ></div>
                    </div>
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block z-10">
                      <div className="bg-gray-900 text-white text-xs rounded py-2 px-3 whitespace-nowrap">
                        <p className="font-semibold mb-1">{item.mes}</p>
                        <p className="text-green-300">Entradas: {formatarReais(item.entradas)}</p>
                        <p className="text-orange-300">Saídas: {formatarReais(item.saidas)}</p>
                        <p className={`mt-1 ${item.saldo >= 0 ? 'text-green-300' : 'text-red-300'}`}>
                          Saldo: {formatarReais(item.saldo)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Labels */}
        <div className="flex items-center justify-between gap-1 mt-2">
          {dados.map((item, index) => (
            <div key={index} className="flex-1 text-center">
              <p className="text-xs text-gray-600 transform -rotate-45 origin-top-left">
                {item.mes.split(' ')[0]}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Legenda */}
      <div className="flex items-center justify-center gap-6 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-500 rounded"></div>
          <span className="text-sm text-gray-700">Entradas</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-orange-400 rounded"></div>
          <span className="text-sm text-gray-700">Saídas</span>
        </div>
      </div>

      {/* Saldo Acumulado */}
      <div className="pt-4 border-t border-gray-200">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-gray-600 mb-1">Saldo Final Projetado</p>
            <p className="text-2xl font-bold text-green-600">
              {formatarReais(dados[dados.length - 1]?.saldo || 0)}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-600 mb-1">Saldo Acumulado (12m)</p>
            <p className="text-2xl font-bold text-blue-600">
              {formatarReais(dados[dados.length - 1]?.saldoAcumulado || 0)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

