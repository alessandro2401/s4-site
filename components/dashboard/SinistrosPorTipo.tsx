'use client';

import { useMemo } from 'react';
import { calcularEstatisticasSinistros, obterLabelTipo } from '@/lib/sinistros';
import { formatarReais, formatarPercentual } from '@/lib/cotacoes';
import { Sinistro, Apolice } from '@/lib/storage';

interface SinistrosPorTipoProps {
  sinistros: Sinistro[];
  apolices: Apolice[];
}

export default function SinistrosPorTipo({ sinistros, apolices }: SinistrosPorTipoProps) {
  const stats = useMemo(
    () => calcularEstatisticasSinistros(sinistros, apolices),
    [sinistros, apolices]
  );

  const dados = [
    { tipo: 'colisao', label: 'Colisão', quantidade: stats.porTipo.colisao, cor: 'bg-blue-500' },
    { tipo: 'roubo', label: 'Roubo', quantidade: stats.porTipo.roubo, cor: 'bg-red-500' },
    { tipo: 'furto', label: 'Furto', quantidade: stats.porTipo.furto, cor: 'bg-orange-500' },
    { tipo: 'incendio', label: 'Incêndio', quantidade: stats.porTipo.incendio, cor: 'bg-purple-500' },
    { tipo: 'outros', label: 'Outros', quantidade: stats.porTipo.outros, cor: 'bg-gray-500' },
  ];

  const maxQuantidade = Math.max(...dados.map(d => d.quantidade), 1);

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">
        Distribuição por Tipo de Sinistro
      </h3>

      <div className="space-y-4">
        {dados.map((item) => {
          const percentual = stats.total > 0 ? (item.quantidade / stats.total) * 100 : 0;
          const largura = (item.quantidade / maxQuantidade) * 100;

          return (
            <div key={item.tipo}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">{item.label}</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-gray-900">{item.quantidade}</span>
                  <span className="text-xs text-gray-500">({percentual.toFixed(1)}%)</span>
                </div>
              </div>
              <div className="relative h-8 bg-gray-100 rounded-lg overflow-hidden">
                <div
                  className={`h-full ${item.cor} transition-all duration-500 flex items-center justify-end pr-3`}
                  style={{ width: `${largura}%` }}
                >
                  {item.quantidade > 0 && (
                    <span className="text-xs font-semibold text-white">
                      {item.quantidade}
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Resumo */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-xs text-gray-600 mb-1">Total de Sinistros</p>
            <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
          </div>
          <div>
            <p className="text-xs text-gray-600 mb-1">Valor Total Indenizado</p>
            <p className="text-2xl font-bold text-blue-600">
              {formatarReais(stats.valorTotalIndenizado)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

