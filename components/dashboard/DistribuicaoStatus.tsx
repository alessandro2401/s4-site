'use client';

import { useMemo } from 'react';
import { calcularEstatisticas, formatarPercentual, obterLabelStatus } from '@/lib/cotacoes';
import { Cotacao } from '@/lib/storage';
import { PieChart } from 'lucide-react';

interface DistribuicaoStatusProps {
  cotacoes: Cotacao[];
}

export default function DistribuicaoStatus({ cotacoes }: DistribuicaoStatusProps) {
  const stats = useMemo(() => calcularEstatisticas(cotacoes), [cotacoes]);

  const dados = [
    {
      status: 'cotacao' as const,
      quantidade: stats.porStatus.cotacao,
      cor: 'bg-blue-500',
      corTexto: 'text-blue-700',
      corFundo: 'bg-blue-50',
    },
    {
      status: 'proposta' as const,
      quantidade: stats.porStatus.proposta,
      cor: 'bg-yellow-500',
      corTexto: 'text-yellow-700',
      corFundo: 'bg-yellow-50',
    },
    {
      status: 'apolice' as const,
      quantidade: stats.porStatus.apolice,
      cor: 'bg-green-500',
      corTexto: 'text-green-700',
      corFundo: 'bg-green-50',
    },
    {
      status: 'cancelada' as const,
      quantidade: stats.porStatus.cancelada,
      cor: 'bg-red-500',
      corTexto: 'text-red-700',
      corFundo: 'bg-red-50',
    },
  ];

  // Calcula percentuais
  const dadosComPercentual = dados.map(item => ({
    ...item,
    percentual: stats.total > 0 ? (item.quantidade / stats.total) * 100 : 0,
  }));

  // Simula gráfico de pizza com círculos concêntricos
  const raio = 80;
  const circunferencia = 2 * Math.PI * raio;
  let acumulado = 0;

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Distribuição por Status</h3>
        <PieChart className="w-5 h-5 text-gray-400" />
      </div>

      {/* Gráfico de Pizza SVG */}
      <div className="flex items-center justify-center mb-6">
        <svg width="200" height="200" viewBox="0 0 200 200" className="transform -rotate-90">
          <circle
            cx="100"
            cy="100"
            r={raio}
            fill="none"
            stroke="#f3f4f6"
            strokeWidth="40"
          />
          {dadosComPercentual.map((item, index) => {
            const offset = circunferencia - (circunferencia * acumulado) / 100;
            const dashArray = `${(circunferencia * item.percentual) / 100} ${circunferencia}`;
            const resultado = (
              <circle
                key={item.status}
                cx="100"
                cy="100"
                r={raio}
                fill="none"
                stroke={item.cor.replace('bg-', '#').replace('500', '500')}
                strokeWidth="40"
                strokeDasharray={dashArray}
                strokeDashoffset={offset}
                className={item.cor.replace('bg-', 'stroke-')}
              />
            );
            acumulado += item.percentual;
            return resultado;
          })}
        </svg>
      </div>

      {/* Legenda e Valores */}
      <div className="space-y-3">
        {dadosComPercentual.map((item) => (
          <div
            key={item.status}
            className={`${item.corFundo} rounded-lg p-3 flex items-center justify-between`}
          >
            <div className="flex items-center gap-3">
              <div className={`w-4 h-4 ${item.cor} rounded-full`}></div>
              <span className={`text-sm font-medium ${item.corTexto}`}>
                {obterLabelStatus(item.status)}
              </span>
            </div>
            <div className="text-right">
              <span className={`text-sm font-bold ${item.corTexto}`}>
                {item.quantidade}
              </span>
              <span className="text-xs text-gray-500 ml-2">
                ({formatarPercentual(item.percentual)})
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Total */}
      <div className="mt-6 pt-6 border-t border-gray-200 text-center">
        <p className="text-sm text-gray-600 mb-1">Total de Cotações</p>
        <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
      </div>
    </div>
  );
}

