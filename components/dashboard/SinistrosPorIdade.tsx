'use client';

import { useMemo } from 'react';
import { analisarSinistrosPorIdade } from '@/lib/sinistros';
import { formatarReais } from '@/lib/cotacoes';
import { Sinistro } from '@/lib/storage';

interface SinistrosPorIdadeProps {
  sinistros: Sinistro[];
}

export default function SinistrosPorIdade({ sinistros }: SinistrosPorIdadeProps) {
  const dados = useMemo(() => analisarSinistrosPorIdade(sinistros), [sinistros]);

  const maxQuantidade = Math.max(...dados.map(d => d.quantidade), 1);
  const maxAltura = 200; // pixels

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">
        Sinistros por Faixa Etária
      </h3>

      {/* Gráfico de Barras */}
      <div className="flex items-end justify-between gap-2 mb-4" style={{ height: `${maxAltura}px` }}>
        {dados.map((item, index) => {
          const altura = (item.quantidade / maxQuantidade) * maxAltura;
          const cores = ['bg-blue-400', 'bg-blue-500', 'bg-blue-600', 'bg-blue-700', 'bg-blue-800'];

          return (
            <div key={index} className="flex-1 flex flex-col items-center">
              <div className="w-full flex flex-col justify-end items-center" style={{ height: `${maxAltura}px` }}>
                {item.quantidade > 0 && (
                  <div className="mb-2 text-center">
                    <p className="text-xs font-bold text-gray-900">{item.quantidade}</p>
                    <p className="text-xs text-gray-500">{item.percentual.toFixed(0)}%</p>
                  </div>
                )}
                <div
                  className={`w-full ${cores[index]} rounded-t-lg transition-all duration-500`}
                  style={{ height: `${altura}px`, minHeight: item.quantidade > 0 ? '20px' : '0' }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Labels */}
      <div className="flex items-center justify-between gap-2 mb-6">
        {dados.map((item, index) => (
          <div key={index} className="flex-1 text-center">
            <p className="text-xs font-medium text-gray-700">{item.faixaIdade}</p>
          </div>
        ))}
      </div>

      {/* Detalhes */}
      <div className="pt-6 border-t border-gray-200">
        <div className="grid grid-cols-2 gap-4">
          {dados.map((item, index) => (
            <div key={index} className="text-sm">
              <p className="font-medium text-gray-900">{item.faixaIdade}</p>
              <div className="flex items-center justify-between text-gray-600 mt-1">
                <span>{item.quantidade} sinistros</span>
                <span className="font-semibold">{formatarReais(item.valorMedio)}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

