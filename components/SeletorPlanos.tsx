'use client';

import { useState } from 'react';
import { PLANOS, TipoPlano, calcularFranquia, obterResumoCobertura } from '@/lib/planos';

interface SeletorPlanosProps {
  valorFipe?: number;
}

export default function SeletorPlanos({ valorFipe = 30000 }: SeletorPlanosProps) {
  const [planoSelecionado, setPlanoSelecionado] = useState<TipoPlano>('basico');

  const plano = PLANOS[planoSelecionado];
  const franquia = calcularFranquia(planoSelecionado, valorFipe);
  const resumoCoberturas = obterResumoCobertura(planoSelecionado);

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      {/* Título */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          Escolha seu Plano
        </h2>
        <p className="text-gray-600">
          Todos os planos incluem Vidros, RC, Assistências 24h e APP
        </p>
      </div>

      {/* Cards dos Planos */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {Object.values(PLANOS).map((p) => (
          <div
            key={p.id}
            onClick={() => setPlanoSelecionado(p.id)}
            className={`
              relative cursor-pointer rounded-lg border-2 p-6 transition-all
              ${
                planoSelecionado === p.id
                  ? 'border-blue-600 bg-blue-50 shadow-lg'
                  : 'border-gray-200 bg-white hover:border-blue-300 hover:shadow-md'
              }
            `}
          >
            {/* Badge de recomendado */}
            {p.id === 'basico' && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                  MAIS POPULAR
                </span>
              </div>
            )}

            {/* Nome do plano */}
            <h3 className="text-xl font-bold text-gray-900 mb-2">{p.nome}</h3>
            
            {/* Descrição */}
            <p className="text-sm text-gray-600 mb-4">{p.descricao}</p>

            {/* Preço */}
            <div className="mb-4">
              <div className="flex items-baseline">
                <span className="text-4xl font-bold text-gray-900">
                  R$ {p.valorMensal}
                </span>
                <span className="text-gray-600 ml-2">/mês</span>
              </div>
            </div>

            {/* Franquia */}
            <div className="mb-4 p-3 bg-gray-100 rounded">
              <div className="text-sm text-gray-600">Franquia</div>
              <div className="text-lg font-semibold text-gray-900">
                {p.coberturas.casco.franquia}% FIPE
              </div>
            </div>

            {/* Coberturas principais */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center text-sm">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Casco {p.coberturas.casco.lmi}</span>
              </div>

              <div className="flex items-center text-sm">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Vidros/Faróis</span>
              </div>

              <div className="flex items-center text-sm">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>RC R$ {(p.coberturas.rc.lmi / 1000).toFixed(0)}k</span>
              </div>

              <div className="flex items-center text-sm">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Assistências {p.coberturas.assistencias.reboque}km</span>
              </div>

              <div className="flex items-center text-sm">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>APP R$ 10k/passageiro</span>
              </div>

              {p.coberturas.carroReserva.incluso ? (
                <div className="flex items-center text-sm font-semibold text-blue-600">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span>Carro Reserva (15 dias)</span>
                </div>
              ) : (
                <div className="flex items-center text-sm text-gray-400">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  <span>Sem Carro Reserva</span>
                </div>
              )}
            </div>

            {/* Botão de seleção */}
            <button
              className={`
                w-full py-2 px-4 rounded font-semibold transition-colors
                ${
                  planoSelecionado === p.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }
              `}
            >
              {planoSelecionado === p.id ? 'Selecionado' : 'Selecionar'}
            </button>
          </div>
        ))}
      </div>

      {/* Detalhes do Plano Selecionado */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Resumo: {plano.nome}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Coluna 1: Informações Gerais */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Informações Gerais</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Valor Mensal:</span>
                <span className="font-semibold">R$ {plano.valorMensal}/mês</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Valor FIPE (exemplo):</span>
                <span className="font-semibold">R$ {valorFipe.toLocaleString('pt-BR')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Franquia:</span>
                <span className="font-semibold">
                  {plano.coberturas.casco.franquia}% = R$ {franquia.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </span>
              </div>
            </div>
          </div>

          {/* Coluna 2: Coberturas Detalhadas */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-3">Coberturas Inclusas</h4>
            <ul className="space-y-1 text-sm">
              {resumoCoberturas.map((cobertura, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{cobertura}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Diferenciais */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h4 className="font-semibold text-gray-900 mb-3">Diferenciais</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {plano.diferenciais.map((diferencial, index) => (
              <div key={index} className="flex items-center text-sm">
                <svg className="w-4 h-4 text-blue-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">{diferencial}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Botão de Contratação */}
        <div className="mt-6 pt-6 border-t border-gray-200">
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
            Contratar {plano.nome} - R$ {plano.valorMensal}/mês
          </button>
          <p className="text-xs text-gray-500 text-center mt-2">
            Aprovação em até 24h • Sem multa de cancelamento
          </p>
        </div>
      </div>
    </div>
  );
}
