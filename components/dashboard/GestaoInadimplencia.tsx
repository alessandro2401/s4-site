'use client';

import { useMemo } from 'react';
import { calcularEstatisticasApolices } from '@/lib/apolices';
import { formatarReais } from '@/lib/cotacoes';
import { Apolice } from '@/lib/storage';
import { AlertTriangle, DollarSign, TrendingDown } from 'lucide-react';

interface GestaoInadimplenciaProps {
  apolices: Apolice[];
}

export default function GestaoInadimplencia({ apolices }: GestaoInadimplenciaProps) {
  const stats = useMemo(() => calcularEstatisticasApolices(apolices), [apolices]);
  
  const inadimplentes = apolices.filter(a => a.status === 'inadimplente');
  const valorPerdido = inadimplentes.reduce((acc, a) => acc + a.valorMensal, 0);
  
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Gestão de Inadimplência</h3>
        <AlertTriangle className="w-5 h-5 text-red-500" />
      </div>

      {/* Indicadores */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-1">Total Inadimplente</p>
          <p className="text-2xl font-bold text-red-600">{stats.porStatus.inadimplente}</p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-1">Taxa</p>
          <p className="text-2xl font-bold text-orange-600">
            {stats.taxaInadimplencia.toFixed(1)}%
          </p>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-1">Valor Mensal</p>
          <p className="text-2xl font-bold text-gray-900">
            {formatarReais(valorPerdido)}
          </p>
        </div>
      </div>

      {/* Gráfico de Barras */}
      <div className="space-y-3">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Ativas</span>
            <span className="text-sm font-bold text-green-600">{stats.porStatus.ativa}</span>
          </div>
          <div className="relative h-8 bg-gray-100 rounded-lg overflow-hidden">
            <div
              className="h-full bg-green-500 transition-all duration-500"
              style={{ 
                width: `${stats.total > 0 ? (stats.porStatus.ativa / stats.total) * 100 : 0}%` 
              }}
            ></div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Inadimplentes</span>
            <span className="text-sm font-bold text-red-600">{stats.porStatus.inadimplente}</span>
          </div>
          <div className="relative h-8 bg-gray-100 rounded-lg overflow-hidden">
            <div
              className="h-full bg-red-500 transition-all duration-500"
              style={{ 
                width: `${stats.total > 0 ? (stats.porStatus.inadimplente / stats.total) * 100 : 0}%` 
              }}
            ></div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Vencidas</span>
            <span className="text-sm font-bold text-orange-600">{stats.porStatus.vencida}</span>
          </div>
          <div className="relative h-8 bg-gray-100 rounded-lg overflow-hidden">
            <div
              className="h-full bg-orange-500 transition-all duration-500"
              style={{ 
                width: `${stats.total > 0 ? (stats.porStatus.vencida / stats.total) * 100 : 0}%` 
              }}
            ></div>
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Canceladas</span>
            <span className="text-sm font-bold text-gray-600">{stats.porStatus.cancelada}</span>
          </div>
          <div className="relative h-8 bg-gray-100 rounded-lg overflow-hidden">
            <div
              className="h-full bg-gray-500 transition-all duration-500"
              style={{ 
                width: `${stats.total > 0 ? (stats.porStatus.cancelada / stats.total) * 100 : 0}%` 
              }}
            ></div>
          </div>
        </div>
      </div>

      {/* Impacto Financeiro */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="text-sm font-semibold text-gray-900 mb-3">Impacto Financeiro</h4>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Receita Mensal Ativa</span>
            <span className="font-semibold text-green-600">
              {formatarReais(stats.valorMensalTotal)}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Perda por Inadimplência</span>
            <span className="font-semibold text-red-600">
              {formatarReais(valorPerdido)}
            </span>
          </div>
          <div className="flex items-center justify-between text-sm pt-2 border-t">
            <span className="text-gray-900 font-medium">Receita Efetiva</span>
            <span className="font-bold text-blue-600">
              {formatarReais(stats.valorMensalTotal - valorPerdido)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

