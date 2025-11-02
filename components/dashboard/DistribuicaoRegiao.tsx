'use client';

import { useMemo } from 'react';
import { calcularEstatisticas, formatarPercentual, obterNomeRegiao } from '@/lib/cotacoes';
import { Cotacao } from '@/lib/storage';
import { MapPin } from 'lucide-react';

interface DistribuicaoRegiaoProps {
  cotacoes: Cotacao[];
}

export default function DistribuicaoRegiao({ cotacoes }: DistribuicaoRegiaoProps) {
  const stats = useMemo(() => calcularEstatisticas(cotacoes), [cotacoes]);

  const cores = [
    'bg-blue-500',
    'bg-green-500',
    'bg-yellow-500',
    'bg-orange-500',
    'bg-red-500',
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Distribuição por Região</h3>
        <MapPin className="w-5 h-5 text-gray-400" />
      </div>

      <div className="space-y-4">
        {stats.porRegiao.map((item, index) => (
          <div key={item.regiao}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">
                Região {item.regiao}
              </span>
              <div className="text-right">
                <span className="text-sm font-bold text-gray-900">{item.quantidade}</span>
                <span className="text-xs text-gray-500 ml-2">
                  ({formatarPercentual(item.percentual)})
                </span>
              </div>
            </div>
            <div className="relative h-8 bg-gray-100 rounded-lg overflow-hidden">
              <div
                className={`h-full ${cores[index]} transition-all duration-500`}
                style={{ width: `${item.percentual}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Legenda */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="text-xs text-gray-500 mb-3">Classificação de Risco:</p>
        <div className="grid grid-cols-1 gap-2 text-xs">
          {[1, 2, 3, 4, 5].map((regiao, index) => (
            <div key={regiao} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded ${cores[index]}`}></div>
              <span className="text-gray-600">{obterNomeRegiao(regiao)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

