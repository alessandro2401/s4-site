"use client";

import { Card } from "@/components/ui/card";
import { DollarSign, Shield, CheckCircle2 } from "lucide-react";

interface CalculadoraPremioProps {
  valorFipe: number;
}

interface Plano {
  nome: string;
  taxa: number;
  sinistralidade: number;
  coberturas: string[];
  destaque?: boolean;
}

export default function CalculadoraPremio({ valorFipe }: CalculadoraPremioProps) {
  const planos: Plano[] = [
    {
      nome: "AURA Digital",
      taxa: 0.0075,
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
      taxa: 0.0084,
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
      taxa: 0.0097,
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

  function calcularPremio(taxa: number): { mensal: number; anual: number } {
    const premioMensal = valorFipe * taxa;
    return {
      mensal: premioMensal,
      anual: premioMensal * 12,
    };
  }

  function formatarMoeda(valor: number): string {
    return valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }

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

      <div className="grid md:grid-cols-3 gap-6">
        {planos.map((plano) => {
          const { mensal, anual } = calcularPremio(plano.taxa);
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
                    {formatarMoeda(mensal)}
                  </span>
                  <span className="text-sm text-slate-600">/mês</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  ou {formatarMoeda(anual)}/ano
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
              Os prêmios são calculados com base no valor FIPE do veículo e incluem todos os carregamentos
              (administração, margem de risco, comissão e impostos). Os valores são estimados e podem
              variar conforme análise de risco individual. Vigência mensal com renovação automática.
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
}
