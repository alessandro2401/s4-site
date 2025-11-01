'use client';

import { useState, useEffect } from 'react';
import { Shield, CheckCircle2, Info, DollarSign } from 'lucide-react';
import { 
  obterDescricaoFranquia,
  obterValorFranquia,
  obterFatorFranquia,
  obterCustoCobertura,
  obterDescricaoAssistencia,
  obterFatorAssistencia,
  formatarMoeda,
  formatarPercentualComSinal
} from '@/lib/precificacao';

export interface DadosCoberturas {
  franquia: 'normal' | 'reduzida' | 'agravada';
  vidros: boolean;
  rcf: boolean;
  app: boolean;
  carroReserva: boolean;
  assistencia: 'basica' | 'completa';
  valido: boolean;
}

interface CoberturasPersonalizadasProps {
  valorFipe: number;
  onCoberturasPreenchidas: (dados: DadosCoberturas | null) => void;
}

export default function CoberturasPersonalizadas({ 
  valorFipe, 
  onCoberturasPreenchidas 
}: CoberturasPersonalizadasProps) {
  const [franquia, setFranquia] = useState<'normal' | 'reduzida' | 'agravada'>('normal');
  const [vidros, setVidros] = useState<boolean>(false);
  const [rcf, setRCF] = useState<boolean>(false);
  const [app, setAPP] = useState<boolean>(false);
  const [carroReserva, setCarroReserva] = useState<boolean>(false);
  const [assistencia, setAssistencia] = useState<'basica' | 'completa'>('basica');

  // Atualizar dados sempre que houver mudança
  useEffect(() => {
    const dadosValidos: DadosCoberturas = {
      franquia,
      vidros,
      rcf,
      app,
      carroReserva,
      assistencia,
      valido: true
    };
    onCoberturasPreenchidas(dadosValidos);
  }, [franquia, vidros, rcf, app, carroReserva, assistencia, onCoberturasPreenchidas]);

  const valorFranquiaAtual = obterValorFranquia(valorFipe, franquia);
  const fatorFranquiaAtual = obterFatorFranquia(franquia);

  const custoTotal = 
    (vidros ? obterCustoCobertura('vidros') : 0) +
    (rcf ? obterCustoCobertura('rcf') : 0) +
    (app ? obterCustoCobertura('app') : 0) +
    (carroReserva ? obterCustoCobertura('carroReserva') : 0);

  return (
    <div className="bg-white rounded-lg border-2 border-purple-200 p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Shield className="w-6 h-6 text-purple-600" />
        <h3 className="text-lg font-semibold text-gray-900">Coberturas Personalizadas</h3>
      </div>

      <p className="text-sm text-gray-600 mb-4">
        Personalize seu seguro escolhendo franquia e coberturas adicionais.
      </p>

      {/* Franquia */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Franquia
        </label>
        <select
          value={franquia}
          onChange={(e) => setFranquia(e.target.value as 'normal' | 'reduzida' | 'agravada')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        >
          <option value="normal">Normal (6% FIPE) - Padrão</option>
          <option value="reduzida">Reduzida (3% FIPE) - Paga mais no prêmio</option>
          <option value="agravada">Agravada (12% FIPE) - Desconto no prêmio</option>
        </select>
        <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-xs text-blue-700">
            <strong>Valor da franquia:</strong> {formatarMoeda(valorFranquiaAtual)}
            {fatorFranquiaAtual !== 0 && (
              <span className={`ml-2 font-semibold ${fatorFranquiaAtual > 0 ? 'text-red-700' : 'text-green-700'}`}>
                ({formatarPercentualComSinal(fatorFranquiaAtual)} no prêmio)
              </span>
            )}
          </p>
          <p className="text-xs text-blue-600 mt-1">
            Valor que você paga em caso de sinistro antes do seguro cobrir.
          </p>
        </div>
      </div>

      {/* Coberturas Obrigatórias */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-700 mb-3">
          Coberturas Obrigatórias (Inclusas)
        </h4>
        <div className="space-y-2">
          {[
            'Roubo e Furto',
            'Incêndio',
            'Colisão',
            'Danos da Natureza'
          ].map((cobertura) => (
            <div key={cobertura} className="flex items-center gap-2 p-2 bg-green-50 border border-green-200 rounded-lg">
              <CheckCircle2 className="w-4 h-4 text-green-600" />
              <span className="text-sm text-gray-700">{cobertura}</span>
              <span className="ml-auto text-xs text-green-700 font-semibold">Incluso</span>
            </div>
          ))}
        </div>
      </div>

      {/* Coberturas Opcionais */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-700 mb-3">
          Coberturas Opcionais
        </h4>
        <div className="space-y-3">
          {/* Vidros */}
          <div className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg hover:border-purple-300 transition-colors">
            <input
              type="checkbox"
              id="vidros"
              checked={vidros}
              onChange={(e) => setVidros(e.target.checked)}
              className="mt-1 w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
            />
            <div className="flex-1">
              <label htmlFor="vidros" className="text-sm font-semibold text-gray-800 cursor-pointer">
                Vidros
              </label>
              <p className="text-xs text-gray-600 mt-1">
                Cobertura para danos em vidros, faróis e lanternas
              </p>
            </div>
            <span className="text-sm font-semibold text-purple-600">
              +{formatarMoeda(obterCustoCobertura('vidros'))}/mês
            </span>
          </div>

          {/* RCF */}
          <div className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg hover:border-purple-300 transition-colors">
            <input
              type="checkbox"
              id="rcf"
              checked={rcf}
              onChange={(e) => setRCF(e.target.checked)}
              className="mt-1 w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
            />
            <div className="flex-1">
              <label htmlFor="rcf" className="text-sm font-semibold text-gray-800 cursor-pointer">
                Danos a Terceiros (RCF)
              </label>
              <p className="text-xs text-gray-600 mt-1">
                Responsabilidade Civil Facultativa - Danos materiais e corporais a terceiros
              </p>
            </div>
            <span className="text-sm font-semibold text-purple-600">
              +{formatarMoeda(obterCustoCobertura('rcf'))}/mês
            </span>
          </div>

          {/* APP */}
          <div className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg hover:border-purple-300 transition-colors">
            <input
              type="checkbox"
              id="app"
              checked={app}
              onChange={(e) => setAPP(e.target.checked)}
              className="mt-1 w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
            />
            <div className="flex-1">
              <label htmlFor="app" className="text-sm font-semibold text-gray-800 cursor-pointer">
                Seguro APP (Acidentes Pessoais)
              </label>
              <p className="text-xs text-gray-600 mt-1">
                Cobertura para morte ou invalidez permanente do condutor
              </p>
            </div>
            <span className="text-sm font-semibold text-purple-600">
              +{formatarMoeda(obterCustoCobertura('app'))}/mês
            </span>
          </div>

          {/* Carro Reserva */}
          <div className="flex items-start gap-3 p-3 border border-gray-200 rounded-lg hover:border-purple-300 transition-colors">
            <input
              type="checkbox"
              id="carroReserva"
              checked={carroReserva}
              onChange={(e) => setCarroReserva(e.target.checked)}
              className="mt-1 w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
            />
            <div className="flex-1">
              <label htmlFor="carroReserva" className="text-sm font-semibold text-gray-800 cursor-pointer">
                Carro Reserva (15 dias)
              </label>
              <p className="text-xs text-gray-600 mt-1">
                Veículo reserva por até 15 dias em caso de sinistro
              </p>
            </div>
            <span className="text-sm font-semibold text-purple-600">
              +{formatarMoeda(obterCustoCobertura('carroReserva'))}/mês
            </span>
          </div>
        </div>
      </div>

      {/* Assistência 24h */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-gray-700 mb-2">
          Assistência 24h
        </label>
        <select
          value={assistencia}
          onChange={(e) => setAssistencia(e.target.value as 'basica' | 'completa')}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
        >
          <option value="basica">Básica (100km) - Inclusa</option>
          <option value="completa">Completa (500km) - +10% no prêmio</option>
        </select>
        <p className="text-xs text-gray-500 mt-1">
          {obterDescricaoAssistencia(assistencia)}
          {obterFatorAssistencia(assistencia) > 0 && (
            <span className="ml-2 font-semibold text-red-600">
              ({formatarPercentualComSinal(obterFatorAssistencia(assistencia))})
            </span>
          )}
        </p>
      </div>

      {/* Resumo */}
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
        <div className="flex items-start gap-3">
          <DollarSign className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-sm font-semibold text-purple-900 mb-2">
              Resumo das Coberturas
            </p>
            <div className="text-sm text-purple-700 space-y-1">
              <p>
                <strong>Franquia:</strong> {obterDescricaoFranquia(franquia)} - {formatarMoeda(valorFranquiaAtual)}
                {fatorFranquiaAtual !== 0 && (
                  <span className={`ml-2 font-semibold ${fatorFranquiaAtual > 0 ? 'text-red-700' : 'text-green-700'}`}>
                    ({formatarPercentualComSinal(fatorFranquiaAtual)})
                  </span>
                )}
              </p>
              <p>
                <strong>Coberturas opcionais:</strong> {custoTotal > 0 ? `+${formatarMoeda(custoTotal)}/mês` : 'Nenhuma selecionada'}
              </p>
              {custoTotal > 0 && (
                <ul className="ml-4 text-xs space-y-0.5">
                  {vidros && <li>• Vidros: +{formatarMoeda(obterCustoCobertura('vidros'))}/mês</li>}
                  {rcf && <li>• RCF: +{formatarMoeda(obterCustoCobertura('rcf'))}/mês</li>}
                  {app && <li>• APP: +{formatarMoeda(obterCustoCobertura('app'))}/mês</li>}
                  {carroReserva && <li>• Carro Reserva: +{formatarMoeda(obterCustoCobertura('carroReserva'))}/mês</li>}
                </ul>
              )}
              <p>
                <strong>Assistência:</strong> {obterDescricaoAssistencia(assistencia)}
                {obterFatorAssistencia(assistencia) > 0 && (
                  <span className="ml-2 font-semibold text-red-700">
                    ({formatarPercentualComSinal(obterFatorAssistencia(assistencia))})
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Informação */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
        <div className="flex items-start gap-2">
          <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-blue-700">
            <p className="font-semibold mb-1">Como funciona:</p>
            <ul className="space-y-1">
              <li>• <strong>Franquia:</strong> Quanto menor a franquia, maior o prêmio (você paga menos em caso de sinistro)</li>
              <li>• <strong>Coberturas opcionais:</strong> Valores fixos mensais adicionados ao prêmio</li>
              <li>• <strong>Assistência:</strong> Completa cobre reboques até 500km (10% a mais no prêmio)</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

