'use client';

import { useState } from 'react';
import { User, Calendar, CreditCard, Info } from 'lucide-react';
import { 
  obterFaixaIdadeCondutor, 
  obterFaixaTempoCNH,
  formatarPercentualComSinal
} from '@/lib/precificacao';

export interface DadosCondutor {
  idadeCondutor: number;
  tempoCNH: number;
  valido: boolean;
}

interface PerfilCondutorProps {
  onCondutorPreenchido: (dados: DadosCondutor | null) => void;
}

export default function PerfilCondutor({ onCondutorPreenchido }: PerfilCondutorProps) {
  const [idadeCondutor, setIdadeCondutor] = useState<string>('');
  const [tempoCNH, setTempoCNH] = useState<string>('');
  const [erro, setErro] = useState<string | null>(null);
  const [mostrarDetalhes, setMostrarDetalhes] = useState(false);

  // Gerar opções de idade (18 a 100 anos)
  const opcoesIdade = Array.from({ length: 83 }, (_, i) => 18 + i);

  // Gerar opções de tempo de CNH (0 a 60 anos)
  const opcoesTempoCNH = Array.from({ length: 61 }, (_, i) => i);

  const validarDados = () => {
    setErro(null);

    const idade = parseInt(idadeCondutor);
    const tempo = parseInt(tempoCNH);

    // Validações
    if (!idadeCondutor || isNaN(idade)) {
      setErro('Por favor, selecione a idade do condutor');
      onCondutorPreenchido(null);
      return false;
    }

    if (!tempoCNH || isNaN(tempo)) {
      setErro('Por favor, selecione o tempo de habilitação');
      onCondutorPreenchido(null);
      return false;
    }

    if (idade < 18) {
      setErro('Condutor deve ter no mínimo 18 anos');
      onCondutorPreenchido(null);
      return false;
    }

    if (tempo < 0) {
      setErro('Tempo de CNH inválido');
      onCondutorPreenchido(null);
      return false;
    }

    // Validação lógica: tempo de CNH não pode ser maior que (idade - 18)
    const tempoMaximo = idade - 18;
    if (tempo > tempoMaximo) {
      setErro(`Tempo de CNH não pode ser maior que ${tempoMaximo} anos (idade - 18)`);
      onCondutorPreenchido(null);
      return false;
    }

    // Dados válidos
    const dadosValidos: DadosCondutor = {
      idadeCondutor: idade,
      tempoCNH: tempo,
      valido: true
    };

    onCondutorPreenchido(dadosValidos);
    setMostrarDetalhes(true);
    return true;
  };

  const handleIdadeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const novaIdade = e.target.value;
    setIdadeCondutor(novaIdade);
    setErro(null);
    setMostrarDetalhes(false);

    // Se já tem tempo de CNH selecionado, revalidar
    if (tempoCNH) {
      setTimeout(() => validarDados(), 100);
    }
  };

  const handleTempoCNHChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const novoTempo = e.target.value;
    setTempoCNH(novoTempo);
    setErro(null);
    setMostrarDetalhes(false);

    // Se já tem idade selecionada, revalidar
    if (idadeCondutor) {
      setTimeout(() => validarDados(), 100);
    }
  };

  const limparDados = () => {
    setIdadeCondutor('');
    setTempoCNH('');
    setErro(null);
    setMostrarDetalhes(false);
    onCondutorPreenchido(null);
  };

  // Calcular fatores para exibição (se dados válidos)
  const getFatorIdade = () => {
    if (!idadeCondutor) return null;
    const idade = parseInt(idadeCondutor);
    if (idade >= 18 && idade <= 25) return '+11%';
    if (idade >= 26 && idade <= 35) return '+0%';
    if (idade >= 36 && idade <= 60) return '-1%';
    if (idade >= 61) return '+15%';
    return null;
  };

  const getFatorTempoCNH = () => {
    if (!tempoCNH) return null;
    const tempo = parseInt(tempoCNH);
    if (tempo <= 2) return '+5%';
    if (tempo <= 5) return '+3%';
    if (tempo >= 6) return '-3%';
    return null;
  };

  return (
    <div className="bg-white rounded-lg border-2 border-purple-200 p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <User className="w-6 h-6 text-purple-600" />
        <h3 className="text-lg font-semibold text-gray-900">Perfil do Condutor</h3>
      </div>

      <p className="text-sm text-gray-600 mb-4">
        Informe os dados do condutor principal para calcular o prêmio personalizado.
      </p>

      <div className="grid md:grid-cols-2 gap-4 mb-4">
        {/* Idade do Condutor */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-purple-600" />
            Idade do Condutor
          </label>
          <select
            value={idadeCondutor}
            onChange={handleIdadeChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          >
            <option value="">Selecione a idade</option>
            {opcoesIdade.map((idade) => (
              <option key={idade} value={idade}>
                {idade} anos
              </option>
            ))}
          </select>
          {idadeCondutor && (
            <p className="text-xs text-gray-500 mt-1">
              Faixa: {obterFaixaIdadeCondutor(parseInt(idadeCondutor))}
              {getFatorIdade() && (
                <span className={`ml-2 font-semibold ${getFatorIdade()?.startsWith('+') ? 'text-red-600' : 'text-green-600'}`}>
                  {getFatorIdade()}
                </span>
              )}
            </p>
          )}
        </div>

        {/* Tempo de CNH */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
            <CreditCard className="w-4 h-4 text-purple-600" />
            Tempo de Habilitação (CNH)
          </label>
          <select
            value={tempoCNH}
            onChange={handleTempoCNHChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            disabled={!idadeCondutor}
          >
            <option value="">Selecione o tempo</option>
            {opcoesTempoCNH.map((tempo) => {
              // Limitar opções baseado na idade
              const idadeNum = parseInt(idadeCondutor);
              if (idadeCondutor && tempo > (idadeNum - 18)) {
                return null; // Não mostrar opções inválidas
              }
              return (
                <option key={tempo} value={tempo}>
                  {tempo} {tempo === 1 ? 'ano' : 'anos'}
                </option>
              );
            })}
          </select>
          {tempoCNH && (
            <p className="text-xs text-gray-500 mt-1">
              Faixa: {obterFaixaTempoCNH(parseInt(tempoCNH))}
              {getFatorTempoCNH() && (
                <span className={`ml-2 font-semibold ${getFatorTempoCNH()?.startsWith('+') ? 'text-red-600' : 'text-green-600'}`}>
                  {getFatorTempoCNH()}
                </span>
              )}
            </p>
          )}
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
      {mostrarDetalhes && !erro && idadeCondutor && tempoCNH && (
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <svg className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <div className="flex-1">
              <p className="text-sm font-medium text-purple-800 mb-2">✅ Perfil do condutor registrado!</p>
              <div className="text-sm text-purple-700 space-y-1">
                <p>
                  <strong>Idade:</strong> {idadeCondutor} anos ({obterFaixaIdadeCondutor(parseInt(idadeCondutor))})
                  <span className={`ml-2 font-semibold ${getFatorIdade()?.startsWith('+') ? 'text-red-700' : 'text-green-700'}`}>
                    {getFatorIdade()}
                  </span>
                </p>
                <p>
                  <strong>Tempo de CNH:</strong> {tempoCNH} {parseInt(tempoCNH) === 1 ? 'ano' : 'anos'} ({obterFaixaTempoCNH(parseInt(tempoCNH))})
                  <span className={`ml-2 font-semibold ${getFatorTempoCNH()?.startsWith('+') ? 'text-red-700' : 'text-green-700'}`}>
                    {getFatorTempoCNH()}
                  </span>
                </p>
              </div>
              <button
                onClick={limparDados}
                className="mt-3 text-xs text-purple-700 hover:text-purple-900 underline"
              >
                Alterar dados do condutor
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
              <li>• <strong>Idade:</strong> Condutores jovens (18-25) e idosos (61+) têm ajuste positivo</li>
              <li>• <strong>CNH:</strong> Menos experiência (0-5 anos) aumenta o prêmio</li>
              <li>• <strong>Desconto:</strong> Condutores experientes (6+ anos) têm desconto de 3%</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Nota sobre API futura */}
      <div className="mt-4 p-3 bg-gray-50 border border-gray-200 rounded-lg">
        <p className="text-xs text-gray-600">
          <strong>Nota:</strong> Em breve, os dados do condutor serão validados automaticamente via integração com APIs externas (Detran, Serasa, etc.).
        </p>
      </div>
    </div>
  );
}

