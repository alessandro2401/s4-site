"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { DollarSign, Shield, CheckCircle2, Info, MapPin } from "lucide-react";
import { 
  calcularPremioOnda2, 
  formatarMoeda, 
  formatarPercentual, 
  obterFaixaIdade,
  isRegiao3,
  obterNomeRegiao
} from "@/lib/precificacao";
import ConsultaCEP, { DadosCEP } from "@/components/ConsultaCEP";

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

  // Calcular prêmio com ONDA 2
  const resultado = calcularPremioOnda2({
    valorFipe,
    anoFabricacao,
    uf: dadosCEP?.uf
  });

  // Gerar anos disponíveis (últimos 30 anos)
  const anoAtual = new Date().getFullYear();
  const anos = Array.from({ length: 31 }, (_, i) => anoAtual - i);

  // Mostrar calculadora quando CEP for validado
  useEffect(() => {
    if (dadosCEP && dadosCEP.valido) {
      setMostrarCalculadora(true);
    } else {
      setMostrarCalculadora(false);
    }
  }, [dadosCEP]);

  const handleCEPConsultado = (dados: DadosCEP | null) => {
    setDadosCEP(dados);
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

      {/* Calculadora (só aparece após CEP válido) */}
      {mostrarCalculadora && dadosCEP && resultado.sucesso && (
        <>
          {/* Campos de Ajuste */}
          <Card className="p-6 bg-gradient-to-br from-slate-50 to-white">
            <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-aura-primary" />
              Informações do Veículo
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
                    <p>• Idade do veículo: {resultado.idadeVeiculo} anos ({obterFaixaIdade(resultado.idadeVeiculo)})</p>
                    <p>• Região: {obterNomeRegiao(dadosCEP.uf)}</p>
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
                  Os prêmios são calculados com base no valor FIPE do veículo, idade do veículo e localização (CEP). 
                  A Região 3 (AL, PB, PE, RN) recebe um desconto de 10% sobre o prêmio final. Todos os carregamentos 
                  (administração, margem de risco, comissão e impostos) já estão incluídos. Os valores são estimados 
                  e podem variar conforme análise de risco individual. Vigência mensal com renovação automática.
                </p>
              </div>
            </div>
          </Card>
        </>
      )}

      {/* Mensagem quando CEP não foi consultado */}
      {!mostrarCalculadora && (
        <Card className="p-8 text-center bg-gradient-to-br from-blue-50 to-white">
          <MapPin className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h4 className="text-lg font-bold text-slate-800 mb-2">
            Consulte seu CEP para ver os prêmios
          </h4>
          <p className="text-sm text-slate-600">
            Informe o CEP do local de pernoite do veículo para calcularmos o valor do seu seguro.
          </p>
        </Card>
      )}
    </div>
  );
}

