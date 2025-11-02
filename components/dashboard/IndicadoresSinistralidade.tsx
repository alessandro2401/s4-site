'use client';

import { useMemo } from 'react';
import { calcularIndicadoresSinistralidade } from '@/lib/sinistros';
import { formatarReais } from '@/lib/cotacoes';
import { Sinistro, Apolice } from '@/lib/storage';
import { TrendingUp, TrendingDown, Activity, DollarSign } from 'lucide-react';

interface IndicadoresSinistralidadeProps {
  sinistros: Sinistro[];
  apolices: Apolice[];
}

export default function IndicadoresSinistralidade({ sinistros, apolices }: IndicadoresSinistralidadeProps) {
  const indicadores = useMemo(
    () => calcularIndicadoresSinistralidade(sinistros, apolices),
    [sinistros, apolices]
  );

  const cards = [
    {
      titulo: 'Frequência',
      valor: `${indicadores.frequencia.toFixed(2)}%`,
      descricao: 'Sinistros por 100 apólices',
      icon: Activity,
      cor: 'bg-blue-500',
      tendencia: indicadores.frequencia < 10 ? 'baixa' : indicadores.frequencia < 20 ? 'media' : 'alta',
    },
    {
      titulo: 'Severidade',
      valor: formatarReais(indicadores.severidade),
      descricao: 'Custo médio por sinistro',
      icon: DollarSign,
      cor: 'bg-purple-500',
      tendencia: indicadores.severidade < 10000 ? 'baixa' : indicadores.severidade < 20000 ? 'media' : 'alta',
    },
    {
      titulo: 'Índice de Sinistralidade',
      valor: `${indicadores.indice.toFixed(1)}%`,
      descricao: 'Indenizações / Prêmios',
      icon: TrendingUp,
      cor: indicadores.indice < 50 ? 'bg-green-500' : indicadores.indice < 70 ? 'bg-yellow-500' : 'bg-red-500',
      tendencia: indicadores.indice < 50 ? 'baixa' : indicadores.indice < 70 ? 'media' : 'alta',
    },
    {
      titulo: 'Taxa de Aprovação',
      valor: `${indicadores.taxaAprovacao.toFixed(1)}%`,
      descricao: 'Sinistros aprovados',
      icon: TrendingUp,
      cor: 'bg-green-500',
      tendencia: indicadores.taxaAprovacao > 70 ? 'alta' : indicadores.taxaAprovacao > 50 ? 'media' : 'baixa',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card) => {
        const Icon = card.icon;
        const TendenciaIcon = card.tendencia === 'alta' ? TrendingUp : TrendingDown;
        const tendenciaCor = card.tendencia === 'baixa' ? 'text-green-600' : card.tendencia === 'media' ? 'text-yellow-600' : 'text-red-600';

        return (
          <div
            key={card.titulo}
            className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 ${card.cor} rounded-lg flex items-center justify-center`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <TendenciaIcon className={`w-5 h-5 ${tendenciaCor}`} />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-1">
              {card.valor}
            </h3>
            <p className="text-sm font-medium text-gray-600 mb-1">
              {card.titulo}
            </p>
            <p className="text-xs text-gray-500">
              {card.descricao}
            </p>
          </div>
        );
      })}
    </div>
  );
}

