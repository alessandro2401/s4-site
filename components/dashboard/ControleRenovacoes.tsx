'use client';

import { useMemo } from 'react';
import { calcularRenovacoesPendentes } from '@/lib/apolices';
import { formatarReais } from '@/lib/cotacoes';
import { Apolice } from '@/lib/storage';
import { Calendar, RefreshCw, Clock } from 'lucide-react';

interface ControleRenovacoesProps {
  apolices: Apolice[];
}

export default function ControleRenovacoes({ apolices }: ControleRenovacoesProps) {
  const renovacoes = useMemo(() => calcularRenovacoesPendentes(apolices, 60), [apolices]);
  
  const totalValor = renovacoes.reduce((acc, r) => acc + r.valorAnual, 0);
  
  // Agrupa por urgência
  const urgentes = renovacoes.filter(r => r.diasParaVencimento <= 15);
  const proximas = renovacoes.filter(r => r.diasParaVencimento > 15 && r.diasParaVencimento <= 30);
  const futuras = renovacoes.filter(r => r.diasParaVencimento > 30);
  
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Controle de Renovações</h3>
        <RefreshCw className="w-5 h-5 text-blue-500" />
      </div>

      {/* Resumo */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-600 mb-1">Renovações Pendentes</p>
          <p className="text-3xl font-bold text-blue-900">{renovacoes.length}</p>
        </div>
        <div className="text-center p-4 bg-green-50 rounded-lg">
          <p className="text-sm text-green-600 mb-1">Valor Total</p>
          <p className="text-2xl font-bold text-green-900">
            {formatarReais(totalValor)}
          </p>
        </div>
      </div>

      {/* Por Urgência */}
      <div className="space-y-4 mb-6">
        <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-red-600" />
            <span className="text-sm font-medium text-red-900">Urgentes (até 15 dias)</span>
          </div>
          <span className="text-lg font-bold text-red-600">{urgentes.length}</span>
        </div>

        <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-yellow-600" />
            <span className="text-sm font-medium text-yellow-900">Próximas (16-30 dias)</span>
          </div>
          <span className="text-lg font-bold text-yellow-600">{proximas.length}</span>
        </div>

        <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-900">Futuras (31-60 dias)</span>
          </div>
          <span className="text-lg font-bold text-blue-600">{futuras.length}</span>
        </div>
      </div>

      {/* Lista de Próximas Renovações */}
      {renovacoes.length > 0 ? (
        <div>
          <h4 className="text-sm font-semibold text-gray-900 mb-3">Próximas Renovações</h4>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {renovacoes.slice(0, 10).map((renovacao) => (
              <div
                key={renovacao.apoliceId}
                className={`p-3 rounded-lg border ${
                  renovacao.diasParaVencimento <= 15
                    ? 'border-red-200 bg-red-50'
                    : renovacao.diasParaVencimento <= 30
                    ? 'border-yellow-200 bg-yellow-50'
                    : 'border-blue-200 bg-blue-50'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-900 truncate">
                    {renovacao.clienteNome}
                  </span>
                  <span
                    className={`text-xs font-semibold px-2 py-1 rounded ${
                      renovacao.diasParaVencimento <= 15
                        ? 'bg-red-200 text-red-800'
                        : renovacao.diasParaVencimento <= 30
                        ? 'bg-yellow-200 text-yellow-800'
                        : 'bg-blue-200 text-blue-800'
                    }`}
                  >
                    {renovacao.diasParaVencimento}d
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-600">
                  <span>{renovacao.numero}</span>
                  <span className="font-semibold">{formatarReais(renovacao.valorAnual)}</span>
                </div>
              </div>
            ))}
          </div>
          {renovacoes.length > 10 && (
            <p className="text-xs text-gray-500 mt-2 text-center">
              + {renovacoes.length - 10} renovações adicionais
            </p>
          )}
        </div>
      ) : (
        <div className="text-center py-8">
          <Calendar className="w-12 h-12 mx-auto mb-3 text-gray-300" />
          <p className="text-sm text-gray-500">Nenhuma renovação pendente</p>
        </div>
      )}
    </div>
  );
}

