'use client';

import { useMemo } from 'react';
import { analisarSinistrosPorRegiao, obterNomeRegiao } from '@/lib/sinistros';
import { formatarReais } from '@/lib/cotacoes';
import { Sinistro, Apolice } from '@/lib/storage';

interface SinistrosPorRegiaoProps {
  sinistros: Sinistro[];
  apolices: Apolice[];
}

export default function SinistrosPorRegiao({ sinistros, apolices }: SinistrosPorRegiaoProps) {
  const dados = useMemo(
    () => analisarSinistrosPorRegiao(sinistros, apolices),
    [sinistros, apolices]
  );

  const maxQuantidade = Math.max(...dados.map(d => d.quantidade), 1);
  const cores = ['bg-green-500', 'bg-blue-500', 'bg-yellow-500', 'bg-orange-500', 'bg-red-500'];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">
        Sinistros por Região de Risco
      </h3>

      <div className="space-y-4">
        {dados.map((item, index) => {
          const largura = (item.quantidade / maxQuantidade) * 100;

          return (
            <div key={item.regiao}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">
                  {obterNomeRegiao(item.regiao)}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-gray-900">{item.quantidade}</span>
                  <span className="text-xs text-gray-500">
                    ({item.percentual.toFixed(1)}%)
                  </span>
                </div>
              </div>
              <div className="relative h-8 bg-gray-100 rounded-lg overflow-hidden">
                <div
                  className={`h-full ${cores[index]} transition-all duration-500 flex items-center justify-between px-3`}
                  style={{ width: `${largura}%` }}
                >
                  {item.quantidade > 0 && (
                    <span className="text-xs font-semibold text-white">
                      {item.quantidade}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between mt-1 text-xs text-gray-600">
                <span>Frequência: {item.frequencia.toFixed(1)}%</span>
                <span>Médio: {formatarReais(item.valorMedio)}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Legenda */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="text-xs text-gray-600 mb-2">Classificação de Risco</p>
        <div className="grid grid-cols-5 gap-2 text-xs">
          <div className="text-center">
            <div className="w-full h-2 bg-green-500 rounded mb-1"></div>
            <span className="text-gray-600">Baixo</span>
          </div>
          <div className="text-center">
            <div className="w-full h-2 bg-blue-500 rounded mb-1"></div>
            <span className="text-gray-600">Médio-Baixo</span>
          </div>
          <div className="text-center">
            <div className="w-full h-2 bg-yellow-500 rounded mb-1"></div>
            <span className="text-gray-600">Médio</span>
          </div>
          <div className="text-center">
            <div className="w-full h-2 bg-orange-500 rounded mb-1"></div>
            <span className="text-gray-600">Médio-Alto</span>
          </div>
          <div className="text-center">
            <div className="w-full h-2 bg-red-500 rounded mb-1"></div>
            <span className="text-gray-600">Alto</span>
          </div>
        </div>
      </div>
    </div>
  );
}

