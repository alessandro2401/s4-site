"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { TrendingUp, DollarSign, Shield, BarChart3 } from "lucide-react";

type Scenario = "cenario1" | "cenario2";

const scenarios = {
  cenario1: {
    name: "Cenário 1 - Conservador",
    description: "Base inicial menor, crescimento moderado",
    baseInicial: "50 apólices",
    crescimentoAno1: "+15% ao mês",
    crescimentoAnos25: "+15% ao ano",
    dre: [
      { ano: 1, apolicesMes: 120.8, premio: 664515, sinistros: 330465, despesas: 131179, resultado: 202872 },
      { ano: 2, apolicesMes: 287.6, premio: 1581415, sinistros: 780586, despesas: 309957, resultado: 490871 },
      { ano: 3, apolicesMes: 330.7, premio: 1818627, sinistros: 897674, despesas: 356451, resultado: 564502 },
      { ano: 4, apolicesMes: 380.3, premio: 2091421, sinistros: 1032325, despesas: 409918, resultado: 649177 },
      { ano: 5, apolicesMes: 437.4, premio: 2405134, sinistros: 1187174, despesas: 471406, resultado: 746554 },
    ],
    totais: {
      premio: 8561111,
      sinistros: 4228225,
      despesas: 1678911,
      resultado: 2653975,
    },
    indicadores: {
      crescimentoPremio: "+262%",
      margemTecnica: "31%",
      sinistralidade: "49,4%",
      resultadoAcum: "R$ 2,7M",
    },
  },
  cenario2: {
    name: "Cenário 2 - Agressivo",
    description: "Base inicial maior, crescimento acelerado",
    baseInicial: "200 apólices",
    crescimentoAno1: "+15% ao mês",
    crescimentoAnos25: "+20% ao ano",
    dre: [
      { ano: 1, apolicesMes: 483.0, premio: 2657511, sinistros: 1311748, despesas: 520872, resultado: 824891 },
      { ano: 2, apolicesMes: 1027.8, premio: 5651721, sinistros: 2789680, despesas: 1107737, resultado: 1754304 },
      { ano: 3, apolicesMes: 1181.9, premio: 6499502, sinistros: 3208154, despesas: 1273902, resultado: 2017446 },
      { ano: 4, apolicesMes: 1359.2, premio: 7474427, sinistros: 3689377, despesas: 1464988, resultado: 2320062 },
      { ano: 5, apolicesMes: 1563.1, premio: 8595584, sinistros: 4242780, despesas: 1684734, resultado: 2668070 },
    ],
    totais: {
      premio: 30878745,
      sinistros: 15241739,
      despesas: 6052233,
      resultado: 9584773,
    },
    indicadores: {
      crescimentoPremio: "+223%",
      margemTecnica: "31%",
      sinistralidade: "49,4%",
      resultadoAcum: "R$ 9,6M",
    },
  },
};

export default function ScenarioSelector() {
  const [selectedScenario, setSelectedScenario] = useState<Scenario>("cenario1");
  const data = scenarios[selectedScenario];

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="space-y-6">
      {/* Seletor de Cenários */}
      <div className="flex gap-4">
        <button
          onClick={() => setSelectedScenario("cenario1")}
          className={`flex-1 p-4 rounded-lg border-2 transition-all ${
            selectedScenario === "cenario1"
              ? "border-blue-500 bg-blue-50"
              : "border-slate-200 hover:border-slate-300"
          }`}
        >
          <h3 className="font-bold text-slate-800 mb-1">Cenário 1 - Conservador</h3>
          <p className="text-sm text-slate-600">50 apólices | +15% a.a.</p>
        </button>
        <button
          onClick={() => setSelectedScenario("cenario2")}
          className={`flex-1 p-4 rounded-lg border-2 transition-all ${
            selectedScenario === "cenario2"
              ? "border-green-500 bg-green-50"
              : "border-slate-200 hover:border-slate-300"
          }`}
        >
          <h3 className="font-bold text-slate-800 mb-1">Cenário 2 - Agressivo</h3>
          <p className="text-sm text-slate-600">200 apólices | +20% a.a.</p>
        </button>
      </div>

      {/* Premissas do Cenário Selecionado */}
      <Card className="p-6 bg-slate-50">
        <h3 className="font-bold text-slate-800 mb-3">{data.name}</h3>
        <p className="text-sm text-slate-600 mb-4">{data.description}</p>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <p className="font-semibold text-slate-700">Base inicial</p>
            <p className="text-slate-600">{data.baseInicial}</p>
          </div>
          <div>
            <p className="font-semibold text-slate-700">Crescimento Ano 1</p>
            <p className="text-slate-600">{data.crescimentoAno1}</p>
          </div>
          <div>
            <p className="font-semibold text-slate-700">Crescimento Anos 2-5</p>
            <p className="text-slate-600">{data.crescimentoAnos25}</p>
          </div>
        </div>
      </Card>

      {/* DRE do Cenário Selecionado */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-aura-primary text-white">
              <th className="p-3 text-left">Ano</th>
              <th className="p-3 text-right">Apólices/Mês</th>
              <th className="p-3 text-right">Prêmio Anual</th>
              <th className="p-3 text-right">Sinistros</th>
              <th className="p-3 text-right">Despesas</th>
              <th className="p-3 text-right">Resultado Técnico</th>
            </tr>
          </thead>
          <tbody>
            {data.dre.map((row, idx) => (
              <tr
                key={row.ano}
                className={idx % 2 === 0 ? "border-b" : "border-b bg-slate-50"}
              >
                <td className="p-3 font-semibold">Ano {row.ano}</td>
                <td className="p-3 text-right">{row.apolicesMes.toFixed(1)}</td>
                <td className="p-3 text-right">{formatCurrency(row.premio)}</td>
                <td className="p-3 text-right">{formatCurrency(row.sinistros)}</td>
                <td className="p-3 text-right">{formatCurrency(row.despesas)}</td>
                <td className="p-3 text-right font-bold text-green-600">
                  {formatCurrency(row.resultado)}
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr className="bg-slate-100 font-bold">
              <td className="p-3">TOTAL (5 anos)</td>
              <td className="p-3 text-right">-</td>
              <td className="p-3 text-right">{formatCurrency(data.totais.premio)}</td>
              <td className="p-3 text-right">{formatCurrency(data.totais.sinistros)}</td>
              <td className="p-3 text-right">{formatCurrency(data.totais.despesas)}</td>
              <td className="p-3 text-right text-green-700">
                {formatCurrency(data.totais.resultado)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      {/* Indicadores do Cenário Selecionado */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card className="p-6 bg-gradient-to-br from-green-50 to-white">
          <div className="flex items-center gap-3 mb-2">
            <DollarSign className="w-8 h-8 text-green-600" />
            <div>
              <p className="text-sm text-slate-600">Crescimento Prêmio</p>
              <p className="text-2xl font-bold text-green-600">
                {data.indicadores.crescimentoPremio}
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-500">Ano 1 → Ano 5</p>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-blue-50 to-white">
          <div className="flex items-center gap-3 mb-2">
            <BarChart3 className="w-8 h-8 text-blue-600" />
            <div>
              <p className="text-sm text-slate-600">Margem Técnica</p>
              <p className="text-2xl font-bold text-blue-600">
                {data.indicadores.margemTecnica}
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-500">Média 5 anos</p>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-purple-50 to-white">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="w-8 h-8 text-purple-600" />
            <div>
              <p className="text-sm text-slate-600">Sinistralidade</p>
              <p className="text-2xl font-bold text-purple-600">
                {data.indicadores.sinistralidade}
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-500">Média ponderada</p>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-amber-50 to-white">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-8 h-8 text-amber-600" />
            <div>
              <p className="text-sm text-slate-600">Resultado Acum.</p>
              <p className="text-2xl font-bold text-amber-600">
                {data.indicadores.resultadoAcum}
              </p>
            </div>
          </div>
          <p className="text-xs text-slate-500">5 anos</p>
        </Card>
      </div>

      {/* Comparação entre Cenários */}
      <Card className="p-6 bg-blue-50 border-l-4 border-l-blue-500">
        <h3 className="font-bold text-slate-800 mb-3">Comparação entre Cenários</h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <p className="font-semibold text-slate-700 mb-2">Cenário 1 - Conservador</p>
            <ul className="space-y-1 text-slate-600">
              <li>• Base inicial: 50 apólices</li>
              <li>• Crescimento anos 2-5: +15% a.a.</li>
              <li>• Prêmio 5 anos: R$ 8,6M</li>
              <li>• Resultado 5 anos: R$ 2,7M</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-slate-700 mb-2">Cenário 2 - Agressivo</p>
            <ul className="space-y-1 text-slate-600">
              <li>• Base inicial: 200 apólices (4x maior)</li>
              <li>• Crescimento anos 2-5: +20% a.a.</li>
              <li>• Prêmio 5 anos: R$ 30,9M (+261%)</li>
              <li>• Resultado 5 anos: R$ 9,6M (+261%)</li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-slate-600 mt-4">
          <strong>Observação:</strong> Ambos os cenários mantêm a mesma margem técnica de 31%, 
          mas o Cenário 2 gera 3,6x mais resultado em 5 anos devido à base inicial maior e 
          crescimento mais agressivo.
        </p>
      </Card>
    </div>
  );
}
