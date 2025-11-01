'use client';

import { useState } from 'react';
import { validarAreaAtuacao, ESTADOS_AUTORIZADOS } from '@/lib/precificacao';

export interface DadosCEP {
  cep: string;
  logradouro: string;
  bairro: string;
  cidade: string;
  uf: string;
  valido: boolean;
}

interface ConsultaCEPProps {
  onCEPConsultado: (dados: DadosCEP | null) => void;
}

export default function ConsultaCEP({ onCEPConsultado }: ConsultaCEPProps) {
  const [cep, setCep] = useState('');
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState<string | null>(null);
  const [dadosCEP, setDadosCEP] = useState<DadosCEP | null>(null);

  // Formata CEP com máscara
  const formatarCEP = (valor: string) => {
    const numeros = valor.replace(/\D/g, '');
    if (numeros.length <= 5) {
      return numeros;
    }
    return `${numeros.slice(0, 5)}-${numeros.slice(5, 8)}`;
  };

  const handleCEPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valorFormatado = formatarCEP(e.target.value);
    setCep(valorFormatado);
    setErro(null);
  };

  const consultarCEP = async () => {
    // Validar formato
    const cepLimpo = cep.replace(/\D/g, '');
    if (cepLimpo.length !== 8) {
      setErro('CEP deve ter 8 dígitos');
      return;
    }

    setLoading(true);
    setErro(null);
    setDadosCEP(null);

    try {
      // Consultar API ViaCEP através da nossa API Route
      const response = await fetch(`/api/cep?cep=${cepLimpo}`);
      
      if (!response.ok) {
        throw new Error('Erro ao consultar CEP');
      }

      const data = await response.json();

      if (data.erro) {
        setErro('CEP não encontrado');
        onCEPConsultado(null);
        return;
      }

      const uf = data.uf.toUpperCase();

      // Validar área de atuação
      if (!validarAreaAtuacao(uf)) {
        setErro(`Não atuamos no estado ${uf}. Atendemos apenas: ${ESTADOS_AUTORIZADOS.join(', ')}`);
        onCEPConsultado(null);
        return;
      }

      // CEP válido e na área de atuação
      const dadosValidos: DadosCEP = {
        cep: cepLimpo,
        logradouro: data.logradouro || '',
        bairro: data.bairro || '',
        cidade: data.localidade || '',
        uf: uf,
        valido: true
      };

      setDadosCEP(dadosValidos);
      onCEPConsultado(dadosValidos);
    } catch (error) {
      console.error('Erro ao consultar CEP:', error);
      setErro('Erro ao consultar CEP. Tente novamente.');
      onCEPConsultado(null);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      consultarCEP();
    }
  };

  const limparCEP = () => {
    setCep('');
    setErro(null);
    setDadosCEP(null);
    onCEPConsultado(null);
  };

  return (
    <div className="bg-white rounded-lg border-2 border-blue-200 p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <h3 className="text-lg font-semibold text-gray-900">Consultar CEP</h3>
      </div>

      <p className="text-sm text-gray-600 mb-4">
        Informe o CEP do local de pernoite do veículo para calcular o prêmio.
      </p>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={cep}
          onChange={handleCEPChange}
          onKeyPress={handleKeyPress}
          placeholder="00000-000"
          maxLength={9}
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          disabled={loading}
        />
        <button
          onClick={consultarCEP}
          disabled={loading || cep.length < 9}
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors font-medium"
        >
          {loading ? 'Consultando...' : 'Consultar'}
        </button>
      </div>

      {/* Erro */}
      {erro && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
          <svg className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
          <div className="flex-1">
            <p className="text-sm font-medium text-red-800">{erro}</p>
            {erro.includes('Não atuamos') && (
              <p className="text-xs text-red-600 mt-1">
                Atualmente operamos apenas nos estados: {ESTADOS_AUTORIZADOS.join(', ')}
              </p>
            )}
          </div>
        </div>
      )}

      {/* Sucesso */}
      {dadosCEP && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div className="flex-1">
              <p className="text-sm font-medium text-green-800 mb-2">✅ CEP válido!</p>
              <div className="text-sm text-green-700 space-y-1">
                <p><strong>Cidade:</strong> {dadosCEP.cidade}/{dadosCEP.uf}</p>
                {dadosCEP.bairro && <p><strong>Bairro:</strong> {dadosCEP.bairro}</p>}
                {dadosCEP.logradouro && <p><strong>Logradouro:</strong> {dadosCEP.logradouro}</p>}
              </div>
              <button
                onClick={limparCEP}
                className="mt-3 text-xs text-green-700 hover:text-green-900 underline"
              >
                Alterar CEP
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Informação sobre regiões */}
      {!dadosCEP && !erro && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
          <p className="text-xs text-blue-700">
            <strong>Regiões de atuação:</strong>
          </p>
          <ul className="text-xs text-blue-600 mt-2 space-y-1">
            <li>• <strong>Região 3:</strong> AL, PB, PE, RN</li>
            <li>• <strong>Região 5:</strong> DF, ES, GO, MG, TO</li>
          </ul>
        </div>
      )}
    </div>
  );
}

