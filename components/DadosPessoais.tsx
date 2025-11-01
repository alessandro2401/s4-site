'use client';

import { useState, useEffect } from 'react';
import { User, CheckCircle2, AlertCircle, Loader2, Shield } from 'lucide-react';
import {
  validarCPF,
  aplicarMascaraCPF,
  validarCNH,
  aplicarMascaraCNH,
  validarEmail,
  aplicarMascaraTelefone,
  validarTelefone,
  capitalizarNome
} from '@/lib/validacoes';
import {
  validarCPFReceitaFederal,
  validarCNHDetran,
  obterModoAPI
} from '@/lib/servicos-externos';

export interface DadosPessoaisCompletos {
  nome: string;
  cpf: string;
  email: string;
  telefone: string;
  cnh: string;
  uf: string;
  valido: boolean;
}

interface DadosPessoaisProps {
  uf: string; // UF vem do CEP consultado anteriormente
  onDadosPreenchidos: (dados: DadosPessoaisCompletos | null) => void;
}

export default function DadosPessoais({ uf, onDadosPreenchidos }: DadosPessoaisProps) {
  const [nome, setNome] = useState<string>('');
  const [cpf, setCPF] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [telefone, setTelefone] = useState<string>('');
  const [cnh, setCNH] = useState<string>('');

  const [validandoCPF, setValidandoCPF] = useState<boolean>(false);
  const [cpfValidado, setCPFValidado] = useState<boolean>(false);
  const [erroCPF, setErroCPF] = useState<string>('');

  const [validandoCNH, setValidandoCNH] = useState<boolean>(false);
  const [cnhValidada, setCNHValidada] = useState<boolean>(false);
  const [erroCNH, setErroCNH] = useState<string>('');

  const [erroNome, setErroNome] = useState<string>('');
  const [erroEmail, setErroEmail] = useState<string>('');
  const [erroTelefone, setErroTelefone] = useState<string>('');

  const modoAPI = obterModoAPI();

  // Validar CPF
  const handleValidarCPF = async () => {
    setErroCPF('');
    setCPFValidado(false);

    // Validação local
    if (!validarCPF(cpf)) {
      setErroCPF('CPF inválido');
      return;
    }

    // Validação na Receita Federal (mock ou real)
    setValidandoCPF(true);
    try {
      const resultado = await validarCPFReceitaFederal(cpf.replace(/\D/g, ''));
      
      if (resultado.valido) {
        setCPFValidado(true);
        if (resultado.nome && !nome) {
          setNome(capitalizarNome(resultado.nome));
        }
      } else {
        setErroCPF(resultado.erro || 'CPF não encontrado na Receita Federal');
      }
    } catch (error) {
      setErroCPF('Erro ao validar CPF. Tente novamente.');
    } finally {
      setValidandoCPF(false);
    }
  };

  // Validar CNH
  const handleValidarCNH = async () => {
    setErroCNH('');
    setCNHValidada(false);

    // Validação local
    if (!validarCNH(cnh)) {
      setErroCNH('CNH inválida');
      return;
    }

    // Validação no Detran (mock ou real)
    setValidandoCNH(true);
    try {
      const resultado = await validarCNHDetran(cnh.replace(/\D/g, ''), uf);
      
      if (resultado.valido) {
        setCNHValidada(true);
        if (resultado.situacao !== 'regular') {
          setErroCNH(`CNH com situação: ${resultado.situacao}`);
        }
      } else {
        setErroCNH(resultado.erro || 'CNH não encontrada no Detran');
      }
    } catch (error) {
      setErroCNH('Erro ao validar CNH. Tente novamente.');
    } finally {
      setValidandoCNH(false);
    }
  };

  // Validar nome
  const handleNomeChange = (valor: string) => {
    setNome(valor);
    if (valor.length < 3) {
      setErroNome('Nome deve ter pelo menos 3 caracteres');
    } else {
      setErroNome('');
    }
  };

  // Validar email
  const handleEmailChange = (valor: string) => {
    setEmail(valor);
    if (valor && !validarEmail(valor)) {
      setErroEmail('Email inválido');
    } else {
      setErroEmail('');
    }
  };

  // Validar telefone
  const handleTelefoneChange = (valor: string) => {
    const telefoneFormatado = aplicarMascaraTelefone(valor);
    setTelefone(telefoneFormatado);
    
    const telefoneLimpo = valor.replace(/\D/g, '');
    if (telefoneLimpo.length >= 10 && !validarTelefone(telefoneLimpo)) {
      setErroTelefone('Telefone inválido');
    } else {
      setErroTelefone('');
    }
  };

  // Atualizar dados sempre que houver mudança
  useEffect(() => {
    const todosValidos = 
      nome.length >= 3 &&
      cpfValidado &&
      cnhValidada &&
      validarEmail(email) &&
      validarTelefone(telefone.replace(/\D/g, '')) &&
      !erroNome &&
      !erroEmail &&
      !erroTelefone &&
      !erroCPF &&
      !erroCNH;

    if (todosValidos) {
      onDadosPreenchidos({
        nome,
        cpf: cpf.replace(/\D/g, ''),
        email,
        telefone: telefone.replace(/\D/g, ''),
        cnh: cnh.replace(/\D/g, ''),
        uf,
        valido: true
      });
    } else {
      onDadosPreenchidos(null);
    }
  }, [nome, cpf, cpfValidado, email, telefone, cnh, cnhValidada, uf, erroNome, erroEmail, erroTelefone, erroCPF, erroCNH, onDadosPreenchidos]);

  return (
    <div className="bg-white rounded-lg border-2 border-blue-200 p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-4">
        <User className="w-6 h-6 text-blue-600" />
        <h3 className="text-lg font-semibold text-gray-900">Dados Pessoais</h3>
      </div>

      <p className="text-sm text-gray-600 mb-4">
        Informe seus dados pessoais para continuar com a cotação.
      </p>

      {modoAPI === 'mock' && (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
          <div className="flex items-start gap-2">
            <Shield className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" />
            <p className="text-xs text-yellow-700">
              <strong>Modo de desenvolvimento:</strong> As validações estão simuladas. 
              Em produção, os dados serão validados nas bases oficiais (Receita Federal, Detran).
            </p>
          </div>
        </div>
      )}

      <div className="space-y-4">
        {/* Nome Completo */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Nome Completo *
          </label>
          <input
            type="text"
            value={nome}
            onChange={(e) => handleNomeChange(e.target.value)}
            placeholder="Digite seu nome completo"
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              erroNome ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {erroNome && (
            <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {erroNome}
            </p>
          )}
        </div>

        {/* CPF */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            CPF *
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={cpf}
              onChange={(e) => setCPF(aplicarMascaraCPF(e.target.value))}
              placeholder="000.000.000-00"
              maxLength={14}
              className={`flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                erroCPF ? 'border-red-500' : cpfValidado ? 'border-green-500' : 'border-gray-300'
              }`}
            />
            <button
              onClick={handleValidarCPF}
              disabled={validandoCPF || cpfValidado || cpf.replace(/\D/g, '').length !== 11}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                cpfValidado
                  ? 'bg-green-500 text-white cursor-not-allowed'
                  : validandoCPF
                  ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {validandoCPF ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : cpfValidado ? (
                <CheckCircle2 className="w-5 h-5" />
              ) : (
                'Validar'
              )}
            </button>
          </div>
          {erroCPF && (
            <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {erroCPF}
            </p>
          )}
          {cpfValidado && (
            <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              CPF validado com sucesso
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => handleEmailChange(e.target.value)}
            placeholder="seu@email.com"
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              erroEmail ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {erroEmail && (
            <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {erroEmail}
            </p>
          )}
        </div>

        {/* Telefone */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Telefone/Celular *
          </label>
          <input
            type="tel"
            value={telefone}
            onChange={(e) => handleTelefoneChange(e.target.value)}
            placeholder="(00) 00000-0000"
            maxLength={15}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              erroTelefone ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {erroTelefone && (
            <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {erroTelefone}
            </p>
          )}
        </div>

        {/* CNH */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Número da CNH *
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={cnh}
              onChange={(e) => setCNH(aplicarMascaraCNH(e.target.value))}
              placeholder="00000000000"
              maxLength={11}
              className={`flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                erroCNH ? 'border-red-500' : cnhValidada ? 'border-green-500' : 'border-gray-300'
              }`}
            />
            <button
              onClick={handleValidarCNH}
              disabled={validandoCNH || cnhValidada || cnh.replace(/\D/g, '').length !== 11}
              className={`px-4 py-2 rounded-lg font-semibold transition-colors ${
                cnhValidada
                  ? 'bg-green-500 text-white cursor-not-allowed'
                  : validandoCNH
                  ? 'bg-gray-300 text-gray-600 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700'
              }`}
            >
              {validandoCNH ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : cnhValidada ? (
                <CheckCircle2 className="w-5 h-5" />
              ) : (
                'Validar'
              )}
            </button>
          </div>
          {erroCNH && (
            <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              {erroCNH}
            </p>
          )}
          {cnhValidada && (
            <p className="text-xs text-green-600 mt-1 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              CNH validada com sucesso
            </p>
          )}
          <p className="text-xs text-gray-500 mt-1">
            UF da CNH: <span className="font-semibold">{uf}</span>
          </p>
        </div>
      </div>

      {/* Informação sobre proteção de dados */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-4">
        <div className="flex items-start gap-2">
          <Shield className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-blue-700">
            <p className="font-semibold mb-1">Seus dados estão protegidos</p>
            <p>
              Utilizamos criptografia de ponta a ponta e seguimos a LGPD (Lei Geral de Proteção de Dados). 
              Seus dados pessoais são utilizados apenas para emissão da apólice e não são compartilhados 
              com terceiros sem sua autorização.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

