"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { DollarSign, Shield, CheckCircle2, Info, MapPin } from "lucide-react";
import { 
  calcularPremioOnda3, 
  formatarMoeda, 
  formatarPercentual, 
  formatarPercentualComSinal,
  obterFaixaIdadeVeiculo,
  isRegiao3,
  obterNomeRegiao,
  obterFaixaIdadeCondutor,
  obterFaixaTempoCNH
} from "@/lib/precificacao";
import ConsultaCEP, { DadosCEP } from "@/components/ConsultaCEP";
import PerfilCondutor, { DadosCondutor } from "@/components/PerfilCondutor";

interface CalculadoraPremioProps {
  valorFipe: number;
}

interface Plano {
  nome: string;
  sinistralidade: number;
  coberturas: string[];
  destaque?: boolean;
}

export default function CalculadoraPremio({ valorFipe }: CalculadoraPremioProps) {
  const [anoFabricacao, setAnoFabricacao] = useState<number>(new Date().getFullYear() - 5);
  const [dadosCEP, setDadosCEP] = useState<DadosCEP | null>(null);
  const [dadosCondutor, setDadosCondutor] = useState<DadosCondutor | null>(null);
  const [mostrarCalculadora, setMostrarCalculadora] = useState(false);

  const planos: Plano[] = [
    {
      nome: "AURA Digital",
      sinistralidade: 44.5,
      coberturas: [
        "Danos ao Veículo",
        "Vidros e Faróis",
        "RCF até R$ 50mil",
        "Assistência 24h",
      ],
    },
    {
      nome: "AURA Básico",
      sinistralidade: 51.5,
      coberturas: [
        "Danos ao Veículo",
        "Vidros e Faróis",
        "RCF até R$ 50mil",
        "Assistência 24h",
        "APP R$ 10mil",
      ],
      destaque: true,
    },
    {
      nome: "AURA Essencial",
      sinistralidade: 54.8,
      coberturas: [
        "Danos ao Veículo",
        "Vidros e Faróis",
        "RCF até R$ 50mil",
        "Assistência 24h",
        "APP R$ 10mil",
        "Carro Reserva 15 dias",
      ],
    },
  ];

  // Calcular prêmio com ONDA 3
  const resultado = calcularPremioOnda3({
    valorFipe,
    anoFabricacao,
    uf: dadosCEP?.uf,
    perfilCondutor: dadosCondutor ? {
      idadeCondutor: dadosCondutor.idadeCondutor,
      tempoCNH: dadosCondutor.tempoCNH
    } : undefined
  });

  // Gerar anos disponíveis (últimos 30 anos)
  const anoAtual = new Date().getFullYear();
  const anos = Array.from({ length: 31 }, (_, i) => anoAtual - i);

  // Mostrar calculadora quando CEP e Condutor forem validados
  useEffect(() => {
    if (dadosCEP && dadosCEP.valido && dadosCondutor && dadosCondutor.valido) {
      setMostrarCalculadora(true);
    } else {
      setMostrarCalculadora(false);
    }
  }, [dadosCEP, dadosCondutor]);

  const handleCEPConsultado = (dados: DadosCEP | null) => {
    setDadosCEP(dados);
  };

  const handleCondutorPreenchido = (dados: DadosCondutor | null) => {
    setDadosCondutor(dados);
  };

  // Calcular prêmios para cada plano (usando sinistralidade como base)
  const calcularPremioPorPlano = (sinistralidade: number) => {
    if (!resultado.sucesso) return { mensal: 0, anual: 0 };
    
    // Ajustar prêmio baseado na sinistralidade do plano
    // Digital (44.5%) = base
    // Básico (51.5%) = +15.7%
    // Essencial (54.8%) = +23.1%
    const fatorPlano = sinistralidade / 44.5;
    const premioAnual = resultado.premioAnual * fatorPlano;
    const premioMensal = premioAnual / 12;
    
    return {
      mensal: Math.round(premioMensal * 100) / 100,
      anual: Math.round(premioAnual * 100) / 100
    };
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-aura-primary mb-2">
          Calcule seu Seguro
        </h3>
        <p className="text-slate-600">
          Valor FIPE do veículo: <span className="font-bold text-green-600">{formatarMoeda(valorFipe)}</span>
        </p>
      </div>

      {/* Consulta CEP */}
      <ConsultaCEP onCEPConsultado={handleCEPConsultado} />

      {/* Perfil do Condutor (só aparece após CEP válido) */}
      {dadosCEP && dadosCEP.valido && (
        <PerfilCondutor onCondutorPreenchido={handleCondutorPreenchido} />
      )}

      {/* Calculadora (só aparece após CEP e Condutor válidos) */}
      {mostrarCalculadora && dadosCEP && dadosCondutor && resultado.sucesso && (
        <>
          {/* Campos de Ajuste */}
          <Card className="p-6 bg-gradient-to-br from-slate-50 to-white">
            <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-aura-primary" />
              Resumo do Cálculo
            </h4>
            
            <div className="grid md:grid-cols-2 gap-4">
              {/* Localização (apenas exibição) */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Localização
                </label>
                <div className="w-full p-3 border border-slate-300 rounded-lg bg-gray-50 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-slate-500" />
                  <span className="text-slate-700">{dadosCEP.cidade}/{dadosCEP.uf}</span>
                </div>
              </div>

              {/* Ano de Fabricação */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Ano de Fabricação
                </label>
                <select
                  value={anoFabricacao}
                  onChange={(e) => setAnoFabricacao(parseInt(e.target.value))}
                  className="w-full p-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-aura-primary focus:border-transparent"
                >
                  {anos.map((ano) => (
                    <option key={ano} value={ano}>
                      {ano}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Informações do Cálculo */}
            <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg space-y-2">
              <div className="flex items-start gap-2">
                <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div className="text-sm flex-1">
                  <p className="font-semibold text-blue-900 mb-2">
                    Composição do Prêmio
                  </p>
                  <div className="space-y-1 text-blue-700">
                    <p>• <strong>Veículo:</strong> {resultado.idadeVeiculo} anos ({obterFaixaIdadeVeiculo(resultado.idadeVeiculo)}) - {formatarPercentual(resultado.fatorIdadeVeiculo)}</p>
                    <p>• <strong>Condutor:</strong> {dadosCondutor.idadeCondutor} anos ({obterFaixaIdadeCondutor(dadosCondutor.idadeCondutor)}) - {formatarPercentualComSinal(resultado.fatorIdadeCondutor || 0)}</p>
                    <p>• <strong>Experiência:</strong> {dadosCondutor.tempoCNH} {dadosCondutor.tempoCNH === 1 ? 'ano' : 'anos'} de CNH ({obterFaixaTempoCNH(dadosCondutor.tempoCNH)}) - {formatarPercentualComSinal(resultado.fatorTempoCNH || 0)}</p>
                    <p>• <strong>Região:</strong> {obterNomeRegiao(dadosCEP.uf)}</p>
                    {resultado.isRegiao3 && (
                      <p className="text-green-700 font-semibold">
                        🎉 Desconto regional de 10% aplicado!
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Planos */}
          <div className="grid md:grid-cols-3 gap-6">
            {planos.map((plano) => {
              const premios = calcularPremioPorPlano(plano.sinistralidade);
              return (
                <Card
                  key={plano.nome}
                  className={`p-6 relative ${
                    plano.destaque
                      ? "border-2 border-aura-primary shadow-lg"
                      : "border border-slate-200"
                  }`}
                >
                  {plano.destaque && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-aura-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                        MAIS POPULAR
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-4">
                    <h4 className="text-lg font-bold text-slate-800 mb-2">
                      {plano.nome}
                    </h4>
                    <div className="flex items-baseline justify-center gap-1">
                      <span className="text-3xl font-bold text-aura-primary">
                        {formatarMoeda(premios.mensal)}
                      </span>
                      <span className="text-sm text-slate-600">/mês</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">
                      ou {formatarMoeda(premios.anual)}/ano
                    </p>
                  </div>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Shield className="w-4 h-4 text-purple-600" />
                      <span className="text-slate-600">
                        Sinistralidade: <span className="font-semibold">{plano.sinistralidade}%</span>
                      </span>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <p className="text-xs font-semibold text-slate-700 mb-2">
                      Coberturas Incluídas:
                    </p>
                    <ul className="space-y-2">
                      {plano.coberturas.map((cobertura) => (
                        <li key={cobertura} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-600">{cobertura}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    className={`w-full mt-6 py-3 rounded-lg font-semibold transition-colors ${
                      plano.destaque
                        ? "bg-aura-primary text-white hover:bg-blue-700"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    Contratar Agora
                  </button>
                </Card>
              );
            })}
          </div>

          <Card className="p-6 bg-amber-50 border-l-4 border-l-amber-500">
            <div className="flex items-start gap-3">
              <DollarSign className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-slate-800 mb-2">Sobre os Cálculos</h4>
                <p className="text-sm text-slate-700">
                  Os prêmios são calculados com base no valor FIPE do veículo, idade do veículo, localização (CEP), 
                  idade do condutor e tempo de habilitação. A Região 3 (AL, PB, PE, RN) recebe um desconto de 10% 
                  sobre o prêmio final. Condutores jovens (18-25 anos) e com pouca experiência (0-2 anos de CNH) têm 
                  ajustes positivos no prêmio. Condutores experientes (6+ anos de CNH) recebem desconto de 3%. 
                  Todos os carregamentos (administração, margem de risco, comissão e impostos) já estão incluídos. 
                  Os valores são estimados e podem variar conforme análise de risco individual. Vigência mensal com 
                  renovação automática.
                </p>
              </div>
            </div>
          </Card>
        </>
      )}

      {/* Mensagem quando CEP não foi consultado */}
      {!dadosCEP && (
        <Card className="p-8 text-center bg-gradient-to-br from-blue-50 to-white">
          <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h4 className="text-lg font-bold text-slate-800 mb-2">
            Consulte seu CEP para continuar
          </h4>
          <p className="text-sm text-slate-600">
            Informe o CEP do local de pernoite do veículo para calcularmos o valor do seu seguro.
          </p>
        </Card>
      )}

      {/* Mensagem quando Condutor não foi preenchido */}
      {dadosCEP && dadosCEP.valido && !dadosCondutor && (
        <Card className="p-8 text-center bg-gradient-to-br from-purple-50 to-white">
          <svg className="w-12 h-12 text-purple-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <h4 className="text-lg font-bold text-slate-800 mb-2">
            Informe os dados do condutor
          </h4>
          <p className="text-sm text-slate-600">
            Preencha a idade e o tempo de habilitação do condutor principal para ver os prêmios personalizados.
          </p>
        </Card>
      )}
    </div>
  );
}

