'use client';

import { useState } from 'react';
import { Car, Gauge, Briefcase, MapPin, Info } from 'lucide-react';
import { 
  obterFaixaQuilometragem,
  obterDescricaoFinalidade,
  formatarPercentualComSinal
} from '@/lib/precificacao';

export interface DadosUso {
  quilometragemAnual: number;
  finalidade: 'particular' | 'uber' | 'comercial';
  temRastreador: boolean;
  valido: boolean;
}

interface UsoVeiculoProps {
  onUsoPreenchido: (dados: DadosUso | null) => void;
}

export default function UsoVeiculo({ onUsoPreenchido }: UsoVeiculoProps) {
  const [quilometragemAnual, setQuilometragemAnual] = useState<string>('');
  const [finalidade, setFinalidade] = useState<'particular' | 'uber' | 'comercial'>('particular');
  const [temRastreador, setTemRastreador] = useState<boolean>(false);
  const [erro, setErro] = useState<string | null>(null);
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);

  const validarDados = () => {
    setErro(null);

    const km = parseInt(quilometragemAnual);

    // Validações
    if (!quilometragemAnual || isNaN(km)) {
      setErro('Por favor, informe a quilometragem anual estimada');
      onUsoPreenchido(null);
      return false;
    }

    if (km < 0) {
      setErro('Quilometragem não pode ser negativa');
      onUsoPreenchido(null);
      return false;
    }

    if (km > 200000) {
      setErro('Quilometragem muito alta. Por favor, verifique o valor informado.');
      onUsoPreenchido(null);
      return false;
    }

    // Dados válidos
    const dadosValidos: DadosUso = {
      quilometragemAnual: km,
      finalidade,
      temRastreador,
      valido: true
    };

    onUsoPreenchido(dadosValidos);
    setMostrarDetalhes(true);
    return true;
  };

  const handleQuilometragemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setQuilometragemAnual(valor);
    setErro(null);
    setMostrarDetalhes(false);

    // Se já tem finalidade selecionada, revalidar
    if (valor && finalidade) {
      setTimeout(() => validarDados(), 100);
    }
  };

  const handleFinalidadeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const novaFinalidade = e.target.value as 'particular' | 'uber' | 'comercial';
    setFinalidade(novaFinalidade);
    setErro(null);
    setMostrarDetalhes(false);

    // Se já tem quilometragem, revalidar
    if (quilometragemAnual) {
      setTimeout(() => validarDados(), 100);
    }
  };

  const handleRastreadorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const novoValor = e.target.checked;
    setTemRastreador(novoValor);
    setErro(null);

    // Se já tem dados válidos, revalidar
    if (quilometragemAnual && finalidade) {
      setTimeout(() => validarDados(), 100);
    }
  };

  const limparDados = () => {
    setQuilometragemAnual('');
    setFinalidade('particular');
    setTemRastreador(false);
    setErro(null);
    setMostrarDetalhes(false);
    onUsoPreenchido(null);
  };

  // Calcular fatores para exibição
  const getFatorQuilometragem = () => {
    if (!quilometragemAnual) return null;
    const km = parseInt(quilometragemAnual);
    return km > 70000 ? '+1%' : '0%';
  };

  const getFatorFinalidade = () => {
    if (finalidade === 'particular') return '0%';
    if (finalidade === 'uber') return '+5%';
    if (finalidade === 'comercial') return '+3%';
    return null;
  };

  const getDescontoRastreador = () => {
    return temRastreador ? '-5%' : '0%';
  };

  return (
    <div className="bg-white rounded-lg border-2 border-green-200 p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <Car className="w-6 h-6 text-green-600" />
        <h3 className="text-lg font-semibold text-gray-900">Uso do Veículo</h3>
      </div>

      <p className="text-sm text-gray-600 mb-4">
        Informe como o veículo será utilizado para calcular o prêmio mais preciso.
      </p>

      <div className="space-y-4 mb-4">
        {/* Quilometragem Anual */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
            <Gauge className="w-4 h-4 text-green-600" />
            Quilometragem Anual Estimada (km)
          </label>
          <input
            type="number"
            value={quilometragemAnual}
            onChange={handleQuilometragemChange}
            placeholder="Ex: 15000"
            min="0"
            max="200000"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          />
          {quilometragemAnual && (
            <p className="text-xs text-gray-500 mt-1">
              Faixa: {obterFaixaQuilometragem(parseInt(quilometragemAnual))}
              {getFatorQuilometragem() && (
                <span className={`ml-2 font-semibold ${getFatorQuilometragem() === '+1%' ? 'text-red-600' : 'text-gray-600'}`}>
                  {getFatorQuilometragem()}
                </span>
              )}
            </p>
          )}
        </div>

        {/* Finalidade */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-green-600" />
            Finalidade do Veículo
          </label>
          <select
            value={finalidade}
            onChange={handleFinalidadeChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
          >
            <option value="particular">Particular</option>
            <option value="uber">Transporte de Passageiros (Uber/Táxi)</option>
            <option value="comercial">Comercial (Entregas)</option>
          </select>
          {finalidade && (
            <p className="text-xs text-gray-500 mt-1">
              {obterDescricaoFinalidade(finalidade)}
              {getFatorFinalidade() && (
                <span className={`ml-2 font-semibold ${getFatorFinalidade()?.startsWith('+') ? 'text-red-600' : 'text-gray-600'}`}>
                  {getFatorFinalidade()}
                </span>
              )}
            </p>
          )}
        </div>

        {/* Rastreador */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="rastreador"
              checked={temRastreador}
              onChange={handleRastreadorChange}
              className="mt-1 w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
            />
            <div className="flex-1">
              <label htmlFor="rastreador" className="text-sm font-semibold text-gray-800 cursor-pointer flex items-center gap-2">
                <MapPin className="w-4 h-4 text-blue-600" />
                Veículo possui rastreador/GPS
              </label>
              <p className="text-xs text-gray-600 mt-1">
                Rastreadores homologados pela seguradora garantem desconto de 5%
              </p>
              {temRastreador && (
                <p className="text-xs text-green-700 font-semibold mt-1">
                  ✅ Desconto de 5% aplicado!
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Erro */}
      {erro && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3 mb-4">
          <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
          <div className="flex-1">
            <p className="text-sm font-medium text-red-800">{erro}</p>
          </div>
        </div>
      )}

      {/* Sucesso com Detalhes */}
      {mostrarDetalhes && !erro && quilometragemAnual && finalidade && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div className="flex-1">
              <p className="text-sm font-medium text-green-800 mb-2">✅ Uso do veículo registrado!</p>
              <div className="text-sm text-green-700 space-y-1">
                <p>
                  <strong>Quilometragem:</strong> {parseInt(quilometragemAnual).toLocaleString('pt-BR')} km/ano ({obterFaixaQuilometragem(parseInt(quilometragemAnual))})
                  <span className={`ml-2 font-semibold ${getFatorQuilometragem() === '+1%' ? 'text-red-700' : 'text-gray-700'}`}>
                    {getFatorQuilometragem()}
                  </span>
                </p>
                <p>
                  <strong>Finalidade:</strong> {obterDescricaoFinalidade(finalidade)}
                  <span className={`ml-2 font-semibold ${getFatorFinalidade()?.startsWith('+') ? 'text-red-700' : 'text-gray-700'}`}>
                    {getFatorFinalidade()}
                  </span>
                </p>
                <p>
                  <strong>Rastreador:</strong> {temRastreador ? 'Sim' : 'Não'}
                  <span className={`ml-2 font-semibold ${temRastreador ? 'text-green-700' : 'text-gray-700'}`}>
                    {getDescontoRastreador()}
                  </span>
                </p>
              </div>
              <button
                onClick={limparDados}
                className="mt-3 text-xs text-green-700 hover:text-green-900 underline"
              >
                Alterar dados de uso
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Informação sobre fatores */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
        <div className="flex items-start gap-2">
          <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-blue-700">
            <p className="font-semibold mb-1">Como funciona o cálculo:</p>
            <ul className="space-y-1">
              <li>• <strong>Quilometragem:</strong> Acima de 70.000 km/ano aumenta o prêmio em 1%</li>
              <li>• <strong>Finalidade:</strong> Uso comercial ou transporte de passageiros aumenta o risco</li>
              <li>• <strong>Rastreador:</strong> Dispositivos homologados reduzem o prêmio em 5%</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Nota sobre API futura */}
      <div className="mt-4 p-3 bg-gray-50 border border-gray-200 rounded-lg">
        <p className="text-xs text-gray-600">
          <strong>Nota:</strong> Em breve, os dados do rastreador serão validados automaticamente via integração com APIs de rastreamento (Ituran, Tracker, etc.).
        </p>
      </div>
    </div>
  );
}

