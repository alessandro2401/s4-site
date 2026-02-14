"use client";

import { Card } from "@/components/ui/card";
import {
  TrendingUp, Shield, DollarSign, Users, Building2,
  Calendar, Target, BarChart3, AlertTriangle,
  CheckCircle2, Car, Heart, Scale, Landmark,
  Activity, Layers, MapPin, Zap, FileText, Clock
} from "lucide-react";
import { Accordion, ScenarioTabs, KPICard, ProgressBar, MiniBarChart, StackedBar, ProjectionTable, Timeline, formatCurrency } from "@/components/EstudoCharts";

interface TableData {
  headers: string[];
  rows: (string | number)[][];
}

interface CustosIniciais {
  seguradora: { item: string; valor: number }[];
  administradora: { item: string; valor: number }[];
}

interface Props {
  seguradoraAuto: TableData;
  seguradoraVida: TableData;
  seguradoraConsolidada: TableData;
  admPPM: TableData;
  custosIniciais: CustosIniciais;
}

export default function EstudoClient({ seguradoraAuto, seguradoraVida, seguradoraConsolidada, admPPM, custosIniciais }: Props) {
  return (
    <>
      {/* ═══ SEÇÃO 4: PROJEÇÕES SEGURADORA S4 ═══ */}
      <div id="secao-4" className="scroll-mt-24">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-aura-primary text-white rounded-full flex items-center justify-center font-bold">4</div>
          <h2 className="text-3xl font-bold text-aura-primary">Projeções Financeiras — Seguradora S4</h2>
        </div>

        <Card className="p-8 mb-6">
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-6">
            <p className="text-sm text-blue-800">
              <strong>Premissas-Base:</strong> A Seguradora S4 inicia com <strong>produção zero</strong>, construindo sua carteira 
              gradualmente através da rede de corretores e canais digitais. As projeções consideram sinistralidade de 58% (auto) e 40% (vida), 
              comissões de 18% (auto) e 28% (vida), e resultado financeiro sobre reservas técnicas à taxa Selic vigente (~13% a.a.).
              O mercado segurador brasileiro cresceu acima de 10% em 2025, com sinistralidade média de 56,5% no seguro auto.
            </p>
          </div>

          {/* KPIs Seguradora */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <KPICard
              title="Prêmios Ano 5"
              value="R$ 20,3 M"
              subtitle="Auto + Vida"
              icon={<TrendingUp className="w-5 h-5 text-blue-600" />}
              color="text-blue-700"
              bgColor="bg-blue-50"
            />
            <KPICard
              title="Resultado Ano 5"
              value="R$ 4,8 M"
              subtitle="Líquido"
              icon={<DollarSign className="w-5 h-5 text-emerald-600" />}
              color="text-emerald-700"
              bgColor="bg-emerald-50"
            />
            <KPICard
              title="Sinistralidade"
              value="52,7%"
              subtitle="Média ponderada"
              icon={<Activity className="w-5 h-5 text-amber-600" />}
              color="text-amber-700"
              bgColor="bg-amber-50"
            />
            <KPICard
              title="Break-even Op."
              value="Ano 2"
              subtitle="Resultado operacional positivo"
              icon={<Target className="w-5 h-5 text-purple-600" />}
              color="text-purple-700"
              bgColor="bg-purple-50"
            />
          </div>

          <ScenarioTabs
            scenarios={[
              { id: "auto", label: "Seguro Auto", color: "bg-blue-600" },
              { id: "vida", label: "Seguro Vida", color: "bg-red-500" },
              { id: "consolidado", label: "Consolidado", color: "bg-aura-primary" },
            ]}
          >
            {(active) => (
              <div>
                {active === "auto" && (
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Car className="w-5 h-5 text-blue-600" />
                      <h3 className="text-lg font-bold text-slate-800">Seguro Auto — Projeção 5 Anos</h3>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-4 mb-4">
                      <p className="text-sm text-blue-800">
                        <strong>Premissas Auto:</strong> Ticket médio inicial de R$ 145/mês com reajuste anual de 5%. 
                        Sinistralidade de 58% (abaixo da média de mercado de 61%). Comissão de corretagem de 18%. 
                        Crescimento acelerado a partir do Ano 2 com consolidação da rede de distribuição nas 3 regiões de atuação.
                      </p>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="bg-blue-600 text-white">
                            {seguradoraAuto.headers.map((h, i) => (
                              <th key={i} className={`p-3 text-left ${i === 0 ? 'rounded-tl-lg' : ''} ${i === seguradoraAuto.headers.length - 1 ? 'rounded-tr-lg' : ''}`}>{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {seguradoraAuto.rows.map((row, ri) => (
                            <tr key={ri} className={`${ri % 2 === 0 ? 'bg-white' : 'bg-blue-50/50'} ${ri === seguradoraAuto.rows.length - 1 ? 'font-bold bg-blue-100' : ''}`}>
                              {row.map((cell, ci) => (
                                <td key={ci} className={`p-3 border-b border-slate-100 ${ci === 0 ? 'font-semibold text-slate-700' : 'text-right'} ${ri === seguradoraAuto.rows.length - 1 && ci > 0 ? 'text-blue-700' : ''}`}>
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {/* Gráfico visual de prêmios */}
                    <div className="mt-6">
                      <h4 className="text-sm font-bold text-slate-600 mb-3">Evolução dos Prêmios Emitidos — Auto</h4>
                      <MiniBarChart
                        data={[
                          { label: "Ano 1", value: 696000 },
                          { label: "Ano 2", value: 2188800 },
                          { label: "Ano 3", value: 5280000 },
                          { label: "Ano 4", value: 9072000 },
                          { label: "Ano 5", value: 14256000 },
                        ]}
                        color="bg-blue-600"
                      />
                    </div>
                  </div>
                )}

                {active === "vida" && (
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Heart className="w-5 h-5 text-red-500" />
                      <h3 className="text-lg font-bold text-slate-800">Seguro Vida — Projeção 5 Anos</h3>
                    </div>
                    <div className="bg-red-50 rounded-xl p-4 mb-4">
                      <p className="text-sm text-red-800">
                        <strong>Premissas Vida:</strong> Ticket médio inicial de R$ 42/mês com reajuste anual de 5%. 
                        Sinistralidade de 40% (segmento com menor volatilidade). Comissão de corretagem de 28% (padrão vida). 
                        O segmento vida cresceu 8,6% em 2025 no Brasil, com tendência de expansão contínua.
                      </p>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="bg-red-500 text-white">
                            {seguradoraVida.headers.map((h, i) => (
                              <th key={i} className={`p-3 text-left ${i === 0 ? 'rounded-tl-lg' : ''} ${i === seguradoraVida.headers.length - 1 ? 'rounded-tr-lg' : ''}`}>{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {seguradoraVida.rows.map((row, ri) => (
                            <tr key={ri} className={`${ri % 2 === 0 ? 'bg-white' : 'bg-red-50/50'} ${ri === seguradoraVida.rows.length - 1 ? 'font-bold bg-red-100' : ''}`}>
                              {row.map((cell, ci) => (
                                <td key={ci} className={`p-3 border-b border-slate-100 ${ci === 0 ? 'font-semibold text-slate-700' : 'text-right'} ${ri === seguradoraVida.rows.length - 1 && ci > 0 ? 'text-red-700' : ''}`}>
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <div className="mt-6">
                      <h4 className="text-sm font-bold text-slate-600 mb-3">Evolução dos Prêmios Emitidos — Vida</h4>
                      <MiniBarChart
                        data={[
                          { label: "Ano 1", value: 302400 },
                          { label: "Ano 2", value: 1056000 },
                          { label: "Ano 3", value: 2346000 },
                          { label: "Ano 4", value: 4032000 },
                          { label: "Ano 5", value: 6000000 },
                        ]}
                        color="bg-red-500"
                      />
                    </div>
                  </div>
                )}

                {active === "consolidado" && (
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <Building2 className="w-5 h-5 text-aura-primary" />
                      <h3 className="text-lg font-bold text-slate-800">Resultado Consolidado — Seguradora S4</h3>
                    </div>
                    <div className="bg-aura-primary/5 rounded-xl p-4 mb-4">
                      <p className="text-sm text-slate-700">
                        <strong>Visão Consolidada:</strong> Combinação dos resultados de Auto e Vida, incluindo resultado financeiro 
                        sobre reservas técnicas investidas. O resultado financeiro é especialmente relevante nos primeiros anos, 
                        quando o capital social integralizado gera rendimentos significativos enquanto a carteira está em formação.
                      </p>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="bg-aura-primary text-white">
                            {seguradoraConsolidada.headers.map((h, i) => (
                              <th key={i} className={`p-3 text-left ${i === 0 ? 'rounded-tl-lg' : ''} ${i === seguradoraConsolidada.headers.length - 1 ? 'rounded-tr-lg' : ''}`}>{h}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {seguradoraConsolidada.rows.map((row, ri) => (
                            <tr key={ri} className={`${ri % 2 === 0 ? 'bg-white' : 'bg-slate-50'} ${ri === seguradoraConsolidada.rows.length - 2 ? 'font-bold bg-emerald-50' : ''} ${ri === seguradoraConsolidada.rows.length - 1 ? 'font-bold bg-emerald-100' : ''}`}>
                              {row.map((cell, ci) => (
                                <td key={ci} className={`p-3 border-b border-slate-100 ${ci === 0 ? 'font-semibold text-slate-700' : 'text-right'} ${(ri >= seguradoraConsolidada.rows.length - 2) && ci > 0 ? 'text-emerald-700' : ''}`}>
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {/* Composição de receitas Ano 5 */}
                    <div className="mt-6">
                      <h4 className="text-sm font-bold text-slate-600 mb-3">Composição de Receitas — Ano 5</h4>
                      <StackedBar
                        segments={[
                          { label: "Auto", value: 14256000, color: "bg-blue-600" },
                          { label: "Vida", value: 6000000, color: "bg-red-500" },
                        ]}
                        total={20256000}
                      />
                    </div>
                    <div className="mt-6">
                      <h4 className="text-sm font-bold text-slate-600 mb-3">Evolução do Resultado Líquido</h4>
                      <MiniBarChart
                        data={[
                          { label: "Ano 1", value: 424840 },
                          { label: "Ano 2", value: 826912 },
                          { label: "Ano 3", value: 1817440 },
                          { label: "Ano 4", value: 3131520 },
                          { label: "Ano 5", value: 4820160 },
                        ]}
                        color="bg-emerald-600"
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </ScenarioTabs>
        </Card>
      </div>

      {/* ═══ SEÇÃO 5: PROJEÇÕES ADMINISTRADORA PPM ═══ */}
      <div id="secao-5" className="scroll-mt-24">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-aura-primary text-white rounded-full flex items-center justify-center font-bold">5</div>
          <h2 className="text-3xl font-bold text-aura-primary">Projeções Financeiras — Administradora PPM</h2>
        </div>

        <Card className="p-8 mb-6">
          <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 mb-6">
            <p className="text-sm text-emerald-800">
              <strong>Base Legal:</strong> Lei Complementar nº 213/2025 e Minuta de Resolução CNSP (SEI 15414.611143/2025-13). 
              A Administradora PPM opera sob regime de rateio mutualista, onde as despesas com sinistros são repartidas entre os 
              participantes do grupo. A receita da administradora provém da <strong>taxa administrativa de 20%</strong> sobre o rateio total.
              A base inicial de <strong>30.000 placas</strong> provém das operações existentes dos sócios (Uniauto, Grupo Ello, Movimento Mais Brasil).
            </p>
          </div>

          {/* KPIs PPM */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <KPICard
              title="Placas Ano 5"
              value="80.000"
              subtitle="+167% vs Ano 1"
              icon={<Car className="w-5 h-5 text-emerald-600" />}
              color="text-emerald-700"
              bgColor="bg-emerald-50"
            />
            <KPICard
              title="Receita Adm. Ano 5"
              value="R$ 25,3 M"
              subtitle="Taxa administrativa"
              icon={<DollarSign className="w-5 h-5 text-blue-600" />}
              color="text-blue-700"
              bgColor="bg-blue-50"
            />
            <KPICard
              title="Resultado Ano 5"
              value="R$ 11,2 M"
              subtitle="Líquido"
              icon={<TrendingUp className="w-5 h-5 text-amber-600" />}
              color="text-amber-700"
              bgColor="bg-amber-50"
            />
            <KPICard
              title="Margem Líquida"
              value="44,4%"
              subtitle="Sobre receita administrativa"
              icon={<Target className="w-5 h-5 text-purple-600" />}
              color="text-purple-700"
              bgColor="bg-purple-50"
            />
          </div>

          {/* Tabela PPM */}
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-emerald-600 text-white">
                  {admPPM.headers.map((h, i) => (
                    <th key={i} className={`p-3 text-left ${i === 0 ? 'rounded-tl-lg' : ''} ${i === admPPM.headers.length - 1 ? 'rounded-tr-lg' : ''}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {admPPM.rows.map((row, ri) => (
                  <tr key={ri} className={`${ri % 2 === 0 ? 'bg-white' : 'bg-emerald-50/50'} ${ri === admPPM.rows.length - 1 ? 'font-bold bg-emerald-100' : ''} ${ri === admPPM.rows.length - 3 ? 'font-semibold bg-emerald-50' : ''}`}>
                    {row.map((cell, ci) => (
                      <td key={ci} className={`p-3 border-b border-slate-100 ${ci === 0 ? 'font-semibold text-slate-700' : 'text-right'} ${ri >= admPPM.rows.length - 2 && ci > 0 ? 'text-emerald-700' : ''}`}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Gráficos PPM */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-bold text-slate-600 mb-3">Evolução de Placas Ativas</h4>
              <MiniBarChart
                data={[
                  { label: "Ano 1", value: 30000 },
                  { label: "Ano 2", value: 37500 },
                  { label: "Ano 3", value: 48000 },
                  { label: "Ano 4", value: 62000 },
                  { label: "Ano 5", value: 80000 },
                ]}
                color="bg-emerald-600"
              />
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-600 mb-3">Evolução do Resultado Líquido</h4>
              <MiniBarChart
                data={[
                  { label: "Ano 1", value: 1000000 },
                  { label: "Ano 2", value: 2270000 },
                  { label: "Ano 3", value: 4144000 },
                  { label: "Ano 4", value: 7088800 },
                  { label: "Ano 5", value: 11244000 },
                ]}
                color="bg-amber-500"
              />
            </div>
          </div>

          {/* Composição de custos PPM */}
          <div className="mt-6">
            <h4 className="text-sm font-bold text-slate-600 mb-3">Composição de Custos — Ano 1</h4>
            <StackedBar
              segments={[
                { label: "Sinistros (55%)", value: 21780000, color: "bg-red-500" },
                { label: "Taxa Adm. (20%)", value: 7920000, color: "bg-emerald-600" },
                { label: "Fundo Reserva (5%)", value: 1980000, color: "bg-blue-500" },
                { label: "Custos Op.", value: 3600000, color: "bg-amber-500" },
                { label: "Outros", value: 4320000, color: "bg-slate-400" },
              ]}
              total={39600000}
            />
          </div>
        </Card>
      </div>

      {/* ═══ SEÇÃO 6: PROVISÕES E CAPITAL REGULATÓRIO ═══ */}
      <div id="secao-6" className="scroll-mt-24">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-aura-primary text-white rounded-full flex items-center justify-center font-bold">6</div>
          <h2 className="text-3xl font-bold text-aura-primary">Provisões Técnicas e Capital Regulatório</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Seguradora */}
          <Card className="p-6">
            <h3 className="text-lg font-bold text-blue-700 mb-4 flex items-center gap-2">
              <Building2 className="w-5 h-5" /> Seguradora S4 — Requisitos de Capital
            </h3>
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-slate-700">Capital Base (3 Regiões)</span>
                  <span className="font-bold text-blue-700">R$ 1.380.000</span>
                </div>
                <div className="text-xs text-slate-500 space-y-1">
                  <div className="flex justify-between"><span>Região 2 (PI, MA, CE)</span><span>R$ 1.224.000</span></div>
                  <div className="flex justify-between"><span>Região 3 (PE, RN, PB, AL)</span><span>R$ 1.236.000</span></div>
                  <div className="flex justify-between"><span>Região 5 (GO, DF, TO, MT, MS)</span><span>R$ 1.320.000</span></div>
                  <div className="flex justify-between font-semibold pt-1 border-t border-blue-200"><span>Maior valor = Capital Base</span><span>R$ 1.380.000</span></div>
                </div>
              </div>
              <div className="bg-emerald-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-slate-700">Capital Social Integralizado</span>
                  <span className="font-bold text-emerald-700">R$ 3.500.000</span>
                </div>
                <ProgressBar value={3500000} max={3500000} color="bg-emerald-600" label="Margem sobre Capital Base: 154%" />
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-700">Provisões Técnicas Obrigatórias</h4>
                {[
                  { nome: "PPNG", desc: "Provisão de Prêmios Não Ganhos", obs: "Pro rata temporis dos prêmios vigentes" },
                  { nome: "PSL", desc: "Provisão de Sinistros a Liquidar", obs: "Sinistros avisados e pendentes de pagamento" },
                  { nome: "IBNR", desc: "Sinistros Ocorridos e Não Avisados", obs: "Estimativa atuarial de sinistros não reportados" },
                  { nome: "PDR", desc: "Provisão de Despesas Relacionadas", obs: "Custos de regulação e liquidação de sinistros" },
                  { nome: "PCC", desc: "Provisão Complementar de Cobertura", obs: "Teste de adequação de passivos (TAP)" },
                ].map((p, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
                    <span className="px-2 py-0.5 bg-blue-600 text-white text-xs font-bold rounded">{p.nome}</span>
                    <div>
                      <p className="text-sm font-semibold text-slate-700">{p.desc}</p>
                      <p className="text-xs text-slate-500">{p.obs}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-sm text-amber-800">
                  <strong>CMR (Capital Mínimo Requerido):</strong> O maior entre o Capital Base (R$ 1.380.000) e o Capital de Risco 
                  (calculado com base nos riscos de subscrição, crédito, operacional e mercado). Nos primeiros anos, o Capital Base 
                  será o determinante, dado o baixo volume de operações.
                </p>
              </div>
            </div>
          </Card>

          {/* Administradora PPM */}
          <Card className="p-6">
            <h3 className="text-lg font-bold text-emerald-700 mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5" /> Administradora PPM — Requisitos Regulatórios
            </h3>
            <div className="space-y-4">
              <div className="bg-emerald-50 rounded-lg p-4">
                <h4 className="text-sm font-bold text-emerald-800 mb-2">Base Legal</h4>
                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Lei Complementar nº 213/2025</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Minuta de Resolução CNSP (SEI 15414.611143/2025-13)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span>Regulamentação SUSEP (em elaboração)</span>
                  </div>
                </div>
              </div>
              <div className="bg-emerald-50 rounded-lg p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-semibold text-slate-700">Capital Social Estimado</span>
                  <span className="font-bold text-emerald-700">R$ 1.500.000</span>
                </div>
                <p className="text-xs text-slate-500">Valor estimado com base nos requisitos da minuta CNSP. O valor definitivo será definido pela regulamentação final.</p>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-700">Requisitos da Minuta CNSP</h4>
                {[
                  { item: "Forma Jurídica", desc: "S/A com objeto social exclusivo" },
                  { item: "Grupo Mínimo", desc: "1.000 participantes ativos por grupo" },
                  { item: "Coberturas", desc: "Casco veículos, RC terceiros, assistências" },
                  { item: "Capital Base", desc: "Montante fixo a ser mantido permanentemente" },
                  { item: "Capital de Risco", desc: "Montante variável conforme riscos da operação" },
                  { item: "Ativos Garantidores", desc: "Vinculados à garantia das provisões técnicas" },
                  { item: "Atuário Responsável", desc: "Obrigatório para cálculo de provisões e rateios" },
                  { item: "PRS", desc: "Plano de Regularização de Solvência" },
                ].map((r, i) => (
                  <div key={i} className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                    <span className="text-sm font-semibold text-slate-700">{r.item}</span>
                    <span className="text-sm text-slate-600 text-right max-w-[60%]">{r.desc}</span>
                  </div>
                ))}
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <p className="text-sm text-amber-800">
                  <strong>Atenção:</strong> A regulamentação definitiva da SUSEP para Administradoras PPM ainda está em elaboração. 
                  Os valores de capital base e requisitos específicos podem ser ajustados quando da publicação da Resolução CNSP final. 
                  As projeções consideram cenário conservador baseado na minuta disponível.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* ═══ SEÇÃO 7: CUSTOS OPERACIONAIS ═══ */}
      <div id="secao-7" className="scroll-mt-24">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-aura-primary text-white rounded-full flex items-center justify-center font-bold">7</div>
          <h2 className="text-3xl font-bold text-aura-primary">Custos Operacionais Detalhados</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Seguradora */}
          <Card className="p-6">
            <h3 className="text-lg font-bold text-blue-700 mb-4 flex items-center gap-2">
              <Building2 className="w-5 h-5" /> Investimento Inicial — Seguradora S4
            </h3>
            <div className="space-y-2">
              {custosIniciais.seguradora.map((c, i) => (
                <div key={i} className="flex justify-between items-center p-3 bg-blue-50/50 rounded-lg">
                  <span className="text-sm text-slate-700">{c.item}</span>
                  <span className="font-bold text-blue-700">{formatCurrency(c.valor)}</span>
                </div>
              ))}
              <div className="flex justify-between items-center p-3 bg-blue-600 text-white rounded-lg mt-2">
                <span className="font-bold">TOTAL</span>
                <span className="font-bold text-lg">{formatCurrency(custosIniciais.seguradora.reduce((s, c) => s + c.valor, 0))}</span>
              </div>
            </div>

            <Accordion title="Custos Mensais Recorrentes" defaultOpen={false}>
              <div className="space-y-2 mt-4">
                {[
                  { item: "Folha de Pagamento (8-12 funcionários)", valor: "R$ 80.000 - R$ 120.000" },
                  { item: "Aluguel e Infraestrutura", valor: "R$ 8.000 - R$ 15.000" },
                  { item: "Tecnologia (licenças, cloud, core)", valor: "R$ 25.000 - R$ 40.000" },
                  { item: "Compliance e Auditoria", valor: "R$ 10.000 - R$ 20.000" },
                  { item: "Marketing e Aquisição", valor: "R$ 15.000 - R$ 30.000" },
                  { item: "Serviços Contábeis e Jurídicos", valor: "R$ 8.000 - R$ 15.000" },
                  { item: "Resseguro (comissão)", valor: "Variável (% dos prêmios)" },
                ].map((c, i) => (
                  <div key={i} className="flex justify-between items-center p-2 bg-slate-50 rounded">
                    <span className="text-sm text-slate-700">{c.item}</span>
                    <span className="text-sm font-semibold text-slate-600">{c.valor}</span>
                  </div>
                ))}
              </div>
            </Accordion>
          </Card>

          {/* Administradora */}
          <Card className="p-6">
            <h3 className="text-lg font-bold text-emerald-700 mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5" /> Investimento Inicial — Administradora PPM
            </h3>
            <div className="space-y-2">
              {custosIniciais.administradora.map((c, i) => (
                <div key={i} className="flex justify-between items-center p-3 bg-emerald-50/50 rounded-lg">
                  <span className="text-sm text-slate-700">{c.item}</span>
                  <span className="font-bold text-emerald-700">{formatCurrency(c.valor)}</span>
                </div>
              ))}
              <div className="flex justify-between items-center p-3 bg-emerald-600 text-white rounded-lg mt-2">
                <span className="font-bold">TOTAL</span>
                <span className="font-bold text-lg">{formatCurrency(custosIniciais.administradora.reduce((s, c) => s + c.valor, 0))}</span>
              </div>
            </div>

            <Accordion title="Custos Mensais Recorrentes" defaultOpen={false}>
              <div className="space-y-2 mt-4">
                {[
                  { item: "Folha de Pagamento (15-25 funcionários)", valor: "R$ 150.000 - R$ 220.000" },
                  { item: "Plataforma Tecnológica (SaaS + cloud)", valor: "R$ 40.000 - R$ 60.000" },
                  { item: "Vistoria e Peritagem", valor: "R$ 30.000 - R$ 50.000" },
                  { item: "Atendimento e Call Center", valor: "R$ 20.000 - R$ 35.000" },
                  { item: "Marketing e Aquisição", valor: "R$ 40.000 - R$ 80.000" },
                  { item: "Compliance e Regulatório", valor: "R$ 15.000 - R$ 30.000" },
                  { item: "Guincho e Assistência 24h", valor: "Variável (por evento)" },
                ].map((c, i) => (
                  <div key={i} className="flex justify-between items-center p-2 bg-slate-50 rounded">
                    <span className="text-sm text-slate-700">{c.item}</span>
                    <span className="text-sm font-semibold text-slate-600">{c.valor}</span>
                  </div>
                ))}
              </div>
            </Accordion>
          </Card>
        </div>

        {/* Quadro de Pessoal */}
        <Card className="p-6 mt-6">
          <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Users className="w-5 h-5 text-aura-primary" /> Quadro de Pessoal Projetado
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-blue-700 mb-3">Seguradora S4</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-blue-600 text-white">
                      <th className="p-2 text-left rounded-tl-lg">Cargo</th>
                      <th className="p-2 text-center">Ano 1</th>
                      <th className="p-2 text-center">Ano 3</th>
                      <th className="p-2 text-center rounded-tr-lg">Ano 5</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Diretoria (CEO, DT, DF)", "3", "3", "4"],
                      ["Subscrição e Produtos", "1", "2", "3"],
                      ["Sinistros", "1", "2", "4"],
                      ["Comercial", "1", "3", "5"],
                      ["TI e Dados", "1", "2", "3"],
                      ["Compliance e Jurídico", "1", "1", "2"],
                      ["Administrativo/Financeiro", "1", "2", "3"],
                      ["TOTAL", "9", "15", "24"],
                    ].map((row, ri) => (
                      <tr key={ri} className={`${ri === 7 ? 'bg-blue-100 font-bold' : ri % 2 === 0 ? 'bg-white' : 'bg-blue-50/50'}`}>
                        {row.map((cell, ci) => (
                          <td key={ci} className={`p-2 border-b border-slate-100 ${ci === 0 ? 'font-semibold text-slate-700' : 'text-center'}`}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-emerald-700 mb-3">Administradora PPM</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-emerald-600 text-white">
                      <th className="p-2 text-left rounded-tl-lg">Cargo</th>
                      <th className="p-2 text-center">Ano 1</th>
                      <th className="p-2 text-center">Ano 3</th>
                      <th className="p-2 text-center rounded-tr-lg">Ano 5</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      ["Diretoria (CEO, DT, DF)", "3", "3", "4"],
                      ["Operações e Sinistros", "4", "8", "14"],
                      ["Comercial e Parcerias", "2", "4", "6"],
                      ["Atendimento", "3", "6", "10"],
                      ["TI e Sistemas", "2", "3", "4"],
                      ["Compliance e Atuarial", "1", "2", "3"],
                      ["Administrativo/Financeiro", "2", "3", "4"],
                      ["TOTAL", "17", "29", "45"],
                    ].map((row, ri) => (
                      <tr key={ri} className={`${ri === 7 ? 'bg-emerald-100 font-bold' : ri % 2 === 0 ? 'bg-white' : 'bg-emerald-50/50'}`}>
                        {row.map((cell, ci) => (
                          <td key={ci} className={`p-2 border-b border-slate-100 ${ci === 0 ? 'font-semibold text-slate-700' : 'text-center'}`}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* ═══ SEÇÃO 8: ANÁLISE DE RISCOS ═══ */}
      <div id="secao-8" className="scroll-mt-24">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-aura-primary text-white rounded-full flex items-center justify-center font-bold">8</div>
          <h2 className="text-3xl font-bold text-aura-primary">Análise de Riscos e Estratégias de Mitigação</h2>
        </div>

        <Card className="p-8">
          <div className="overflow-x-auto mb-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-red-700 text-white">
                  <th className="p-3 text-left rounded-tl-lg">Risco</th>
                  <th className="p-3 text-center">Probabilidade</th>
                  <th className="p-3 text-center">Impacto</th>
                  <th className="p-3 text-center">Entidade</th>
                  <th className="p-3 text-left rounded-tr-lg">Estratégia de Mitigação</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { risco: "Atraso na autorização SUSEP", prob: "ALTO", impacto: "ALTO", ent: "Ambas", mitigacao: "Contratação de consultoria especializada (JH); acompanhamento proativo; documentação completa desde o início" },
                  { risco: "Sinistralidade acima do esperado", prob: "MÉDIO", impacto: "ALTO", ent: "Seguradora", mitigacao: "Política de subscrição conservadora; resseguro proporcional; monitoramento mensal de loss ratio" },
                  { risco: "Regulamentação PPM desfavorável", prob: "MÉDIO", impacto: "ALTO", ent: "Adm. PPM", mitigacao: "Participação ativa na consulta pública; adaptação do modelo de negócios; reserva de contingência" },
                  { risco: "Crescimento abaixo do projetado", prob: "MÉDIO", impacto: "MÉDIO", ent: "Seguradora", mitigacao: "Diversificação de canais; parcerias estratégicas; revisão trimestral de metas" },
                  { risco: "Evasão de participantes PPM", prob: "MÉDIO", impacto: "MÉDIO", ent: "Adm. PPM", mitigacao: "Programa de fidelização; qualidade no atendimento a sinistros; precificação competitiva" },
                  { risco: "Conflito societário", prob: "BAIXO", impacto: "CRÍTICO", ent: "Ambas", mitigacao: "Acordo de sócios robusto; cláusulas de saída; mediação/arbitragem; shotgun clause" },
                  { risco: "Inadimplência de aporte", prob: "BAIXO", impacto: "CRÍTICO", ent: "Ambas", mitigacao: "Diluição punitiva; compra forçada; suspensão de direitos; conta escrow" },
                  { risco: "Insuficiência de capital", prob: "BAIXO", impacto: "ALTO", ent: "Seguradora", mitigacao: "Margem de 154% sobre Capital Base; resultado financeiro sobre reservas; chamada de capital prevista no acordo" },
                  { risco: "Falha tecnológica", prob: "BAIXO", impacto: "ALTO", ent: "Ambas", mitigacao: "Redundância de sistemas; backup em nuvem; SLA com fornecedores; plano de continuidade" },
                  { risco: "Mudança regulatória adversa", prob: "BAIXO", impacto: "MÉDIO", ent: "Ambas", mitigacao: "Monitoramento regulatório contínuo; flexibilidade operacional; reserva de compliance" },
                ].map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-red-50/30'}>
                    <td className="p-3 border-b border-slate-100 font-semibold text-slate-700">{r.risco}</td>
                    <td className="p-3 border-b border-slate-100 text-center">
                      <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                        r.prob === 'ALTO' ? 'bg-red-100 text-red-700' :
                        r.prob === 'MÉDIO' ? 'bg-amber-100 text-amber-700' :
                        'bg-green-100 text-green-700'
                      }`}>{r.prob}</span>
                    </td>
                    <td className="p-3 border-b border-slate-100 text-center">
                      <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                        r.impacto === 'CRÍTICO' ? 'bg-red-200 text-red-800' :
                        r.impacto === 'ALTO' ? 'bg-red-100 text-red-700' :
                        'bg-amber-100 text-amber-700'
                      }`}>{r.impacto}</span>
                    </td>
                    <td className="p-3 border-b border-slate-100 text-center text-xs font-semibold">{r.ent}</td>
                    <td className="p-3 border-b border-slate-100 text-xs text-slate-600">{r.mitigacao}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Análise de Sensibilidade */}
          <Accordion title="Análise de Sensibilidade — Cenários" icon={<BarChart3 className="w-5 h-5 text-aura-primary" />}>
            <div className="grid md:grid-cols-3 gap-4 mt-4">
              <div className="bg-red-50 rounded-xl p-5 border border-red-200">
                <h4 className="font-bold text-red-700 mb-3">Cenário Pessimista</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Crescimento 50% menor</li>
                  <li>• Sinistralidade +5 p.p.</li>
                  <li>• Atraso regulatório 12 meses</li>
                  <li className="font-bold text-red-700 pt-2 border-t border-red-200">Resultado Ano 5 (Seg.): R$ 1,8 M</li>
                  <li className="font-bold text-red-700">Resultado Ano 5 (PPM): R$ 5,2 M</li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
                <h4 className="font-bold text-blue-700 mb-3">Cenário Base</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Crescimento conforme projetado</li>
                  <li>• Sinistralidade dentro do esperado</li>
                  <li>• Autorização no prazo</li>
                  <li className="font-bold text-blue-700 pt-2 border-t border-blue-200">Resultado Ano 5 (Seg.): R$ 4,8 M</li>
                  <li className="font-bold text-blue-700">Resultado Ano 5 (PPM): R$ 11,2 M</li>
                </ul>
              </div>
              <div className="bg-emerald-50 rounded-xl p-5 border border-emerald-200">
                <h4 className="font-bold text-emerald-700 mb-3">Cenário Otimista</h4>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>• Crescimento 30% maior</li>
                  <li>• Sinistralidade -3 p.p.</li>
                  <li>• Autorização antecipada</li>
                  <li className="font-bold text-emerald-700 pt-2 border-t border-emerald-200">Resultado Ano 5 (Seg.): R$ 7,2 M</li>
                  <li className="font-bold text-emerald-700">Resultado Ano 5 (PPM): R$ 15,8 M</li>
                </ul>
              </div>
            </div>
          </Accordion>
        </Card>
      </div>

      {/* ═══ SEÇÃO 9: CRONOGRAMA E MARCOS ═══ */}
      <div id="secao-9" className="scroll-mt-24">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-aura-primary text-white rounded-full flex items-center justify-center font-bold">9</div>
          <h2 className="text-3xl font-bold text-aura-primary">Cronograma e Marcos Regulatórios</h2>
        </div>

        <Card className="p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Seguradora */}
            <div>
              <h3 className="text-lg font-bold text-blue-700 mb-4 flex items-center gap-2">
                <Building2 className="w-5 h-5" /> Seguradora S4
              </h3>
              <Timeline items={[
                { date: "Fev/2026", title: "Contratação JH Consultoria", description: "Assinatura do contrato e início da Fase I — Instrução Pré-Processual", color: "bg-blue-600" },
                { date: "Mar-Jun/2026", title: "Elaboração do Projeto", description: "Estudo de viabilidade, plano de negócios, estatuto social, acordo de acionistas", color: "bg-blue-500" },
                { date: "Jul/2026", title: "Protocolo na SUSEP", description: "Entrega da documentação completa para análise da autarquia", color: "bg-blue-400" },
                { date: "Ago-Dez/2026", title: "Análise SUSEP", description: "Fase II — Instrução Processual. Resposta a diligências e complementações", color: "bg-amber-500" },
                { date: "1º Sem/2027", title: "Ofício SUSEP", description: "Emissão do ofício autorizativo para constituição da seguradora", color: "bg-emerald-500" },
                { date: "2º Sem/2027", title: "Portaria DOU", description: "Publicação da Portaria Autorizativa no Diário Oficial da União", color: "bg-emerald-600" },
                { date: "2028", title: "Início das Operações", description: "Seguradora autorizada a emitir apólices de seguro auto e vida", color: "bg-emerald-700" },
              ]} />
            </div>

            {/* Administradora PPM */}
            <div>
              <h3 className="text-lg font-bold text-emerald-700 mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5" /> Administradora PPM
              </h3>
              <Timeline items={[
                { date: "Fev/2026", title: "Contratação JH Consultoria", description: "Assinatura do contrato para constituição da Administradora PPM", color: "bg-emerald-600" },
                { date: "Mar-Mai/2026", title: "Estruturação do Projeto", description: "Estudo de viabilidade, modelo operacional, estatuto, documentação", color: "bg-emerald-500" },
                { date: "2026", title: "Publicação Resolução CNSP", description: "Aguardo da regulamentação definitiva para Administradoras PPM", color: "bg-amber-500" },
                { date: "2026-2027", title: "Pedido de Autorização", description: "Protocolo na SUSEP com prioridade (60 dias da publicação da Resolução)", color: "bg-blue-500" },
                { date: "2027", title: "Autorização SUSEP", description: "Obtenção da autorização para funcionamento como Administradora PPM", color: "bg-emerald-600" },
                { date: "2027", title: "Migração de Placas", description: "Transferência das 30.000 placas existentes para o novo modelo regulado", color: "bg-emerald-700" },
                { date: "2027-2028", title: "Operação Plena", description: "Administradora em operação com base migrada e crescimento orgânico", color: "bg-emerald-800" },
              ]} />
            </div>
          </div>

          {/* Marcos Consolidados */}
          <div className="mt-8 bg-aura-primary/5 rounded-xl p-6">
            <h3 className="text-lg font-bold text-aura-primary mb-4 flex items-center gap-2">
              <Target className="w-5 h-5" /> Marcos Consolidados — Visão Geral
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[
                { periodo: "1º Sem 2026", marco: "Constituição", desc: "Contratação de consultorias, elaboração de projetos, definição do acordo societário", color: "bg-blue-100 border-blue-300" },
                { periodo: "2º Sem 2026", marco: "Protocolo SUSEP", desc: "Entrega de documentação, início da análise regulatória para ambas as entidades", color: "bg-amber-100 border-amber-300" },
                { periodo: "2027", marco: "Autorização", desc: "Obtenção das autorizações para funcionamento da Seguradora e da Administradora PPM", color: "bg-emerald-100 border-emerald-300" },
                { periodo: "2028+", marco: "Operação", desc: "Início das operações comerciais, emissão de apólices e gestão de grupos PPM", color: "bg-purple-100 border-purple-300" },
              ].map((m, i) => (
                <div key={i} className={`${m.color} border rounded-xl p-4`}>
                  <span className="text-xs font-bold text-slate-500">{m.periodo}</span>
                  <h4 className="font-bold text-slate-800 mt-1">{m.marco}</h4>
                  <p className="text-xs text-slate-600 mt-1">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Nota metodológica */}
          <div className="mt-6 bg-slate-50 rounded-xl p-6 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
              <FileText className="w-5 h-5 text-slate-600" /> Nota Metodológica
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              As projeções financeiras deste estudo foram elaboradas com base em dados públicos do mercado segurador brasileiro 
              (SUSEP, CNseg, IRB Re), benchmarks de seguradoras S4 em operação, e premissas conservadoras de crescimento. 
              Os dados da Administradora PPM consideram a base existente de 30.000 placas dos sócios e o modelo de rateio 
              mutualista previsto na LC 213/2025.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed mb-3">
              <strong>Fontes principais:</strong> Painel de Inteligência do Mercado de Seguros (SUSEP), Relatório Setorial IRB Re, 
              Síntese Mensal SUSEP, Resolução CNSP nº 432/2021, Minuta de Resolução CNSP (SEI 15414.611143/2025-13), 
              Lei Complementar nº 213/2025.
            </p>
            <p className="text-sm text-slate-500 italic">
              Este documento tem caráter informativo e estratégico. As projeções são estimativas baseadas em premissas que podem 
              variar conforme condições de mercado, regulatórias e operacionais. Recomenda-se revisão periódica e atualização 
              conforme evolução do processo de constituição.
            </p>
          </div>
        </Card>
      </div>
    </>
  );
}
