'use client';

import { useMemo } from 'react';
import { calcularFunilVendas, formatarPercentual } from '@/lib/cotacoes';
import { Cotacao } from '@/lib/storage';
import { TrendingDown } from 'lucide-react';

interface FunilVendasProps {
  cotacoes: Cotacao[];
}

export default function FunilVendas({ cotacoes }: FunilVendasProps) {
  const funil = useMemo(() => calcularFunilVendas(cotacoes), [cotacoes]);

  const etapas = [
    {
      nome: 'Cotações',
      valor: funil.cotacoes,
      cor: 'bg-blue-500',
      largura: 100,
    },
    {
      nome: 'Propostas',
      valor: funil.propostas,
      cor: 'bg-yellow-500',
      largura: funil.cotacoes > 0 ? (funil.propostas / funil.cotacoes) * 100 : 0,
      taxa: funil.taxaCotacaoParaProposta,
    },
    {
      nome: 'Apólices',
      valor: funil.apolices,
      cor: 'bg-green-500',
      largura: funil.cotacoes > 0 ? (funil.apolices / funil.cotacoes) * 100 : 0,
      taxa: funil.taxaConversaoGeral,
    },
  ];

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Funil de Vendas</h3>
        <TrendingDown className="w-5 h-5 text-gray-400" />
      </div>

      <div className="space-y-4">
        {etapas.map((etapa, index) => (
          <div key={etapa.nome}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">{etapa.nome}</span>
              <div className="text-right">
                <span className="text-sm font-bold text-gray-900">{etapa.valor}</span>
                {etapa.taxa !== undefined && (
                  <span className="text-xs text-gray-500 ml-2">
                    ({formatarPercentual(etapa.taxa)})
                  </span>
                )}
              </div>
            </div>
            <div className="relative h-12 bg-gray-100 rounded-lg overflow-hidden">
              <div
                className={`h-full ${etapa.cor} transition-all duration-500 flex items-center justify-center`}
                style={{ width: `${etapa.largura}%` }}
              >
                {etapa.largura > 20 && (
                  <span className="text-white font-semibold text-sm">
                    {etapa.valor}
                  </span>
                )}
              </div>
            </div>
            {index < etapas.length - 1 && (
              <div className="flex items-center justify-center my-2">
                <div className="w-px h-4 bg-gray-300"></div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Resumo */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <p className="text-sm text-gray-600 mb-1">Taxa de Conversão</p>
            <p className="text-2xl font-bold text-green-600">
              {formatarPercentual(funil.taxaConversaoGeral)}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600 mb-1">Proposta → Apólice</p>
            <p className="text-2xl font-bold text-yellow-600">
              {formatarPercentual(funil.taxaPropostaParaApolice)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

