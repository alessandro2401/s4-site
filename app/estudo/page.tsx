import { Card } from "@/components/ui/card";
import {
  BookOpen, TrendingUp, Shield, DollarSign, Users, Building2,
  Calendar, Target, BarChart3, FileText, Download, AlertTriangle,
  CheckCircle2, ArrowRight, Briefcase, Globe, Award, Zap,
  PieChart, Activity, Landmark, Car, Heart, Scale, Clock,
  ChevronRight, MapPin, Layers
} from "lucide-react";
import EstudoClient from "./EstudoClient";
import AccordionBlindagem from "@/components/AccordionBlindagem";

/* ═══════════════════════════════════════════════════════════════
   DADOS DO MODELO FINANCEIRO
   ═══════════════════════════════════════════════════════════════ */

// ── Seguradora S4 - Projeção 5 anos ──
const seguradoraAuto = {
  headers: ["Indicador", "Ano 1", "Ano 2", "Ano 3", "Ano 4", "Ano 5"],
  rows: [
    ["Apólices Ativas (média)", "800", "2.400", "5.500", "9.000", "13.500"],
    ["Ticket Médio Mensal", "R$ 145", "R$ 152", "R$ 160", "R$ 168", "R$ 176"],
    ["Prêmios Emitidos", "R$ 696.000", "R$ 2.188.800", "R$ 5.280.000", "R$ 9.072.000", "R$ 14.256.000"],
    ["Prêmios Ganhos", "R$ 580.000", "R$ 2.044.800", "R$ 5.016.000", "R$ 8.708.000", "R$ 13.824.000"],
    ["Sinistros Retidos (58%)", "R$ 336.400", "R$ 1.185.984", "R$ 2.909.280", "R$ 5.050.640", "R$ 8.017.920"],
    ["Comissões (18%)", "R$ 104.400", "R$ 368.064", "R$ 902.880", "R$ 1.567.440", "R$ 2.488.320"],
    ["Custo Administrativo", "R$ 180.000", "R$ 280.000", "R$ 420.000", "R$ 600.000", "R$ 840.000"],
    ["Resultado Operacional", "-R$ 40.800", "R$ 210.752", "R$ 783.840", "R$ 1.489.920", "R$ 2.477.760"],
    ["Resultado Financeiro", "R$ 420.000", "R$ 385.000", "R$ 450.000", "R$ 580.000", "R$ 720.000"],
    ["Resultado Líquido", "R$ 379.200", "R$ 595.752", "R$ 1.233.840", "R$ 2.069.920", "R$ 3.197.760"],
  ],
};

const seguradoraVida = {
  headers: ["Indicador", "Ano 1", "Ano 2", "Ano 3", "Ano 4", "Ano 5"],
  rows: [
    ["Segurados Ativos (média)", "1.200", "4.000", "8.500", "14.000", "20.000"],
    ["Ticket Médio Mensal", "R$ 42", "R$ 44", "R$ 46", "R$ 48", "R$ 50"],
    ["Prêmios Emitidos", "R$ 302.400", "R$ 1.056.000", "R$ 2.346.000", "R$ 4.032.000", "R$ 6.000.000"],
    ["Prêmios Ganhos", "R$ 252.000", "R$ 988.000", "R$ 2.230.000", "R$ 3.880.000", "R$ 5.820.000"],
    ["Sinistros Retidos (40%)", "R$ 100.800", "R$ 395.200", "R$ 892.000", "R$ 1.552.000", "R$ 2.328.000"],
    ["Comissões (28%)", "R$ 70.560", "R$ 276.640", "R$ 624.400", "R$ 1.086.400", "R$ 1.629.600"],
    ["Custo Administrativo", "R$ 120.000", "R$ 180.000", "R$ 260.000", "R$ 360.000", "R$ 480.000"],
    ["Resultado Operacional", "-R$ 39.360", "R$ 136.160", "R$ 453.600", "R$ 881.600", "R$ 1.382.400"],
    ["Resultado Financeiro", "R$ 85.000", "R$ 95.000", "R$ 130.000", "R$ 180.000", "R$ 240.000"],
    ["Resultado Líquido", "R$ 45.640", "R$ 231.160", "R$ 583.600", "R$ 1.061.600", "R$ 1.622.400"],
  ],
};

const seguradoraConsolidada = {
  headers: ["Indicador", "Ano 1", "Ano 2", "Ano 3", "Ano 4", "Ano 5"],
  rows: [
    ["Prêmios Emitidos Total", "R$ 998.400", "R$ 3.244.800", "R$ 7.626.000", "R$ 13.104.000", "R$ 20.256.000"],
    ["Prêmios Ganhos Total", "R$ 832.000", "R$ 3.032.800", "R$ 7.246.000", "R$ 12.588.000", "R$ 19.644.000"],
    ["Sinistros Totais", "R$ 437.200", "R$ 1.581.184", "R$ 3.801.280", "R$ 6.602.640", "R$ 10.345.920"],
    ["Sinistralidade Média", "52,5%", "52,1%", "52,5%", "52,5%", "52,7%"],
    ["Comissões Totais", "R$ 174.960", "R$ 644.704", "R$ 1.527.280", "R$ 2.653.840", "R$ 4.117.920"],
    ["Custos Administrativos", "R$ 300.000", "R$ 460.000", "R$ 680.000", "R$ 960.000", "R$ 1.320.000"],
    ["Resultado Operacional", "-R$ 80.160", "R$ 346.912", "R$ 1.237.440", "R$ 2.371.520", "R$ 3.860.160"],
    ["Resultado Financeiro", "R$ 505.000", "R$ 480.000", "R$ 580.000", "R$ 760.000", "R$ 960.000"],
    ["Resultado Líquido", "R$ 424.840", "R$ 826.912", "R$ 1.817.440", "R$ 3.131.520", "R$ 4.820.160"],
    ["Margem Líquida", "51,1%", "27,3%", "25,1%", "24,9%", "24,5%"],
  ],
};

// ── Administradora PPM - Projeção 5 anos ──
const admPPM = {
  headers: ["Indicador", "Ano 1", "Ano 2", "Ano 3", "Ano 4", "Ano 5"],
  rows: [
    ["Placas Ativas (média)", "30.000", "37.500", "48.000", "62.000", "80.000"],
    ["Crescimento Anual", "—", "+25%", "+28%", "+29%", "+29%"],
    ["Ticket Médio Mensal", "R$ 110", "R$ 115", "R$ 120", "R$ 126", "R$ 132"],
    ["Arrecadação Rateio (anual)", "R$ 39.600.000", "R$ 51.750.000", "R$ 69.120.000", "R$ 93.744.000", "R$ 126.720.000"],
    ["Taxa Administrativa (20%)", "R$ 7.920.000", "R$ 10.350.000", "R$ 13.824.000", "R$ 18.748.800", "R$ 25.344.000"],
    ["Sinistros Pagos (55%)", "R$ 21.780.000", "R$ 28.462.500", "R$ 38.016.000", "R$ 51.559.200", "R$ 69.696.000"],
    ["Fundo de Reserva (5%)", "R$ 1.980.000", "R$ 2.587.500", "R$ 3.456.000", "R$ 4.687.200", "R$ 6.336.000"],
    ["Custos Operacionais", "R$ 3.600.000", "R$ 4.200.000", "R$ 5.100.000", "R$ 6.200.000", "R$ 7.500.000"],
    ["Tecnologia e Sistemas", "R$ 960.000", "R$ 1.080.000", "R$ 1.200.000", "R$ 1.380.000", "R$ 1.560.000"],
    ["Pessoal (folha)", "R$ 1.800.000", "R$ 2.160.000", "R$ 2.640.000", "R$ 3.240.000", "R$ 3.960.000"],
    ["Marketing e Aquisição", "R$ 480.000", "R$ 600.000", "R$ 780.000", "R$ 960.000", "R$ 1.200.000"],
    ["Compliance e Regulatório", "R$ 360.000", "R$ 420.000", "R$ 480.000", "R$ 540.000", "R$ 600.000"],
    ["Resultado Operacional", "R$ 720.000", "R$ 1.890.000", "R$ 3.624.000", "R$ 6.368.800", "R$ 10.284.000"],
    ["Resultado Financeiro", "R$ 280.000", "R$ 380.000", "R$ 520.000", "R$ 720.000", "R$ 960.000"],
    ["Resultado Líquido", "R$ 1.000.000", "R$ 2.270.000", "R$ 4.144.000", "R$ 7.088.800", "R$ 11.244.000"],
  ],
};

// ── Investimento Consolidado ──
const investimento = {
  total: 806000,
  seguradora: 560000,
  administradora: 196000,
  gestao: 50000,
  porSocio: 268667,
};

// ── Cronograma de Pagamentos ──
const cronogramaSeguradora = [
  { mes: "Fev/2026", evento: "Assinatura do Contrato", valor: 160000, fase: 1 },
  { mes: "Mar/2026", evento: "30 dias", valor: 58000, fase: 1 },
  { mes: "Abr/2026", evento: "60 dias", valor: 58000, fase: 1 },
  { mes: "Mai/2026", evento: "90 dias", valor: 58000, fase: 1 },
  { mes: "Jun/2026", evento: "120 dias", valor: 58000, fase: 1 },
  { mes: "Jul-Dez/2026", evento: "Ofício SUSEP", valor: 84000, fase: 2 },
  { mes: "2027", evento: "Publicação DOU", valor: 84000, fase: 2 },
];

const cronogramaAdm = [
  { mes: "Fev/2026", evento: "Assinatura (até 5 dias)", valor: 76000, fase: 1 },
  { mes: "Mar/2026", evento: "30 dias", valor: 40000, fase: 1 },
  { mes: "Abr/2026", evento: "60 dias", valor: 40000, fase: 1 },
  { mes: "Mai/2026", evento: "90 dias", valor: 40000, fase: 1 },
];

// ── Custos Operacionais Iniciais ──
const custosIniciais = {
  seguradora: [
    { item: "Capital Social Integralizado", valor: 3500000 },
    { item: "Consultoria JH (Seguradora)", valor: 560000 },
    { item: "Gestão Renner Fidélis", valor: 50000 },
    { item: "Infraestrutura TI (Core Insurance)", valor: 350000 },
    { item: "Escritório e Mobiliário", valor: 120000 },
    { item: "Folha de Pagamento (6 meses)", valor: 480000 },
    { item: "Reserva de Contingência", valor: 200000 },
  ],
  administradora: [
    { item: "Capital Social Integralizado", valor: 1500000 },
    { item: "Consultoria JH (Administradora)", valor: 196000 },
    { item: "Plataforma Tecnológica PPM", valor: 280000 },
    { item: "Escritório e Infraestrutura", valor: 80000 },
    { item: "Folha de Pagamento (6 meses)", valor: 360000 },
    { item: "Marketing Inicial", valor: 150000 },
    { item: "Reserva de Contingência", valor: 150000 },
  ],
};

export default function Page() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* ═══ HERO ═══ */}
      <div className="bg-gradient-to-r from-aura-primary via-aura-secondary to-aura-primary text-white py-16 px-4">
        <div className="container max-w-6xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-full uppercase tracking-wide">
              Documento Estratégico
            </span>
            <span className="px-3 py-1 bg-emerald-500/80 text-white text-xs font-bold rounded-full uppercase tracking-wide">
              Confidencial
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Estudo de Viabilidade<br />
            <span className="text-emerald-300">Econômico-Financeira</span>
          </h1>
          <p className="text-lg text-white/80 max-w-3xl mb-6">
            Análise consolidada para constituição da <strong>AURA Seguradora S4</strong> e da{" "}
            <strong>Administradora de Proteção Patrimonial Mutualista</strong>, com projeções financeiras 
            de 5 anos, estrutura de investimento, cronograma regulatório e análise de riscos.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-emerald-300">R$ 806 mil</p>
              <p className="text-xs text-white/70 mt-1">Investimento Total</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-emerald-300">4</p>
              <p className="text-xs text-white/70 mt-1">Sócios Fundadores</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-emerald-300">5 anos</p>
              <p className="text-xs text-white/70 mt-1">Horizonte de Projeção</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <p className="text-3xl font-bold text-emerald-300">12 UFs + DF</p>
              <p className="text-xs text-white/70 mt-1">Área de Atuação</p>
            </div>
          </div>
        </div>
      </div>

      {/* ═══ SUMÁRIO EXECUTIVO ═══ */}
      <div className="container max-w-6xl mx-auto px-4 py-12 space-y-12">

        {/* Navegação rápida */}
        <Card className="p-6 bg-white border-l-4 border-aura-primary">
          <h2 className="text-xl font-bold text-aura-primary mb-4 flex items-center gap-2">
            <BookOpen className="w-5 h-5" /> Índice do Estudo
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { n: "1", t: "Sumário Executivo", icon: <Target className="w-4 h-4" /> },
              { n: "2", t: "Estrutura Societária", icon: <Users className="w-4 h-4" /> },
              { n: "3", t: "Investimento e Cronograma", icon: <DollarSign className="w-4 h-4" /> },
              { n: "4", t: "Projeções — Seguradora S4", icon: <Car className="w-4 h-4" /> },
              { n: "5", t: "Projeções — Administradora PPM", icon: <Shield className="w-4 h-4" /> },
              { n: "6", t: "Provisões e Capital Regulatório", icon: <Landmark className="w-4 h-4" /> },
              { n: "7", t: "Custos Operacionais Detalhados", icon: <BarChart3 className="w-4 h-4" /> },
              { n: "8", t: "Análise de Riscos e Mitigação", icon: <AlertTriangle className="w-4 h-4" /> },
              { n: "9", t: "Cronograma e Marcos Regulatórios", icon: <Calendar className="w-4 h-4" /> },
              { n: "10", t: "Blindagem Societária e Estruturação Regulatória", icon: <Shield className="w-4 h-4" /> },
            ].map(item => (
              <a key={item.n} href={`#secao-${item.n}`} className="flex items-center gap-3 p-3 rounded-lg hover:bg-aura-primary/5 transition-colors group">
                <span className="w-8 h-8 bg-aura-primary text-white rounded-full flex items-center justify-center text-sm font-bold group-hover:bg-aura-secondary transition-colors">
                  {item.n}
                </span>
                <span className="flex items-center gap-2 text-sm font-medium text-slate-700 group-hover:text-aura-primary transition-colors">
                  {item.icon} {item.t}
                </span>
              </a>
            ))}
          </div>
        </Card>

        {/* ═══ SEÇÃO 1: SUMÁRIO EXECUTIVO ═══ */}
        <div id="secao-1" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-aura-primary text-white rounded-full flex items-center justify-center font-bold">1</div>
            <h2 className="text-3xl font-bold text-aura-primary">Sumário Executivo</h2>
          </div>

          <Card className="p-8 bg-gradient-to-br from-blue-50 to-white">
            <p className="text-slate-700 leading-relaxed mb-6">
              O presente estudo de viabilidade econômico-financeira analisa a constituição simultânea de duas entidades complementares 
              no mercado de proteção patrimonial e seguros: a <strong>AURA Seguradora S/A</strong> (segmento S4 SUSEP) e uma{" "}
              <strong>Administradora de Proteção Patrimonial Mutualista (PPM)</strong>, conforme previsto na Lei Complementar nº 213/2025 
              e na minuta de Resolução CNSP em consulta pública.
            </p>
            <p className="text-slate-700 leading-relaxed mb-6">
              A estratégia de dupla constituição permite capturar dois mercados distintos e complementares: o mercado regulado de seguros 
              (auto e vida) através da Seguradora S4, e o mercado de proteção veicular mutualista através da Administradora PPM, 
              que já inicia com uma base de <strong>30.000 placas ativas</strong> provenientes das operações existentes dos sócios.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white rounded-xl p-6 border border-blue-100">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-6 h-6 text-blue-600" />
                  <h3 className="font-bold text-slate-800">AURA Seguradora S4</h3>
                </div>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" /> Seguro Auto e Vida Mensal</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" /> Capital Social: R$ 3.500.000</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" /> 3 Regiões (12 UFs + DF)</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" /> Produção inicia do zero</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" /> Break-even operacional: Ano 2</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" /> Prêmios Ano 5: R$ 20,3 milhões</li>
                </ul>
              </div>
              <div className="bg-white rounded-xl p-6 border border-emerald-100">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-6 h-6 text-emerald-600" />
                  <h3 className="font-bold text-slate-800">Administradora PPM</h3>
                </div>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" /> Proteção Patrimonial Mutualista</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" /> Base inicial: 30.000 placas</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" /> LC 213/2025 + Minuta CNSP</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" /> Receita desde o Ano 1</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" /> Resultado positivo: Ano 1</li>
                  <li className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" /> Receita Ano 5: R$ 25,3 milhões</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* ═══ SEÇÃO 2: ESTRUTURA SOCIETÁRIA ═══ */}
        <div id="secao-2" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-aura-primary text-white rounded-full flex items-center justify-center font-bold">2</div>
            <h2 className="text-3xl font-bold text-aura-primary">Estrutura Societária</h2>
          </div>

          <Card className="p-8">
            <p className="text-slate-700 leading-relaxed mb-6">
              A estrutura societária é composta por <strong>4 sócios com participação igualitária de 25%</strong> cada. 
              O modelo distingue entre o <strong>sócio-administrador</strong> (Renner Fidélis / Grupo A12), que não realiza aporte financeiro 
              mas contribui com gestão e expertise regulatória, e os <strong>3 sócios-aportadores</strong> que dividem igualmente 
              os custos de constituição e capitalização.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-5 text-center border border-blue-200 relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-full">Administrador</span>
                </div>
                <div className="text-3xl font-bold text-blue-700 mt-3">25%</div>
                <div className="font-bold text-blue-800 mt-1">Renner Fidélis</div>
                <div className="text-xs text-blue-600 mt-1">Grupo A12</div>
                <div className="text-xs text-slate-500 mt-2">Sem aporte financeiro</div>
              </div>
              <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-5 text-center border border-emerald-200">
                <div className="text-3xl font-bold text-emerald-700">25%</div>
                <div className="font-bold text-emerald-800 mt-1">Alessandro</div>
                <div className="text-xs text-emerald-600 mt-1">Movimento Mais Brasil</div>
                <span className="inline-block mt-2 px-2 py-0.5 bg-emerald-200 text-emerald-700 text-xs font-bold rounded-full">R$ 268.667</span>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-5 text-center border border-purple-200">
                <div className="text-3xl font-bold text-purple-700">25%</div>
                <div className="font-bold text-purple-800 mt-1">Rodrigo</div>
                <div className="text-xs text-purple-600 mt-1">Uniauto</div>
                <span className="inline-block mt-2 px-2 py-0.5 bg-purple-200 text-purple-700 text-xs font-bold rounded-full">R$ 268.667</span>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-5 text-center border border-orange-200">
                <div className="text-3xl font-bold text-orange-700">25%</div>
                <div className="font-bold text-orange-800 mt-1">Dennis</div>
                <div className="text-xs text-orange-600 mt-1">Grupo Ello</div>
                <span className="inline-block mt-2 px-2 py-0.5 bg-orange-200 text-orange-700 text-xs font-bold rounded-full">R$ 268.667</span>
              </div>
            </div>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
              <p className="text-sm text-amber-800">
                <strong>Modelo de Aporte:</strong> Os custos de consultoria (R$ 806.000) são divididos igualmente entre os 3 sócios aportadores 
                (R$ 268.667 cada). O capital social de ambas as entidades será integralizado proporcionalmente à participação de cada sócio (25%).
              </p>
            </div>
          </Card>
        </div>

        {/* ═══ SEÇÃO 3: INVESTIMENTO E CRONOGRAMA ═══ */}
        <div id="secao-3" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-aura-primary text-white rounded-full flex items-center justify-center font-bold">3</div>
            <h2 className="text-3xl font-bold text-aura-primary">Investimento e Cronograma de Pagamentos</h2>
          </div>

          {/* Resumo do Investimento */}
          <Card className="p-8 mb-6">
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-emerald-600" /> Investimento em Consultoria — JH Administração
            </h3>

            <div className="grid md:grid-cols-4 gap-4 mb-8">
              <div className="bg-blue-50 rounded-xl p-5 text-center border border-blue-100">
                <Building2 className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <p className="text-sm text-slate-500">Seguradora S4</p>
                <p className="text-2xl font-bold text-blue-700">R$ 560.000</p>
              </div>
              <div className="bg-emerald-50 rounded-xl p-5 text-center border border-emerald-100">
                <Shield className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                <p className="text-sm text-slate-500">Administradora PPM</p>
                <p className="text-2xl font-bold text-emerald-700">R$ 196.000</p>
              </div>
              <div className="bg-amber-50 rounded-xl p-5 text-center border border-amber-100">
                <Briefcase className="w-6 h-6 text-amber-600 mx-auto mb-2" />
                <p className="text-sm text-slate-500">Gestão Renner</p>
                <p className="text-2xl font-bold text-amber-700">R$ 50.000</p>
              </div>
              <div className="bg-aura-primary/10 rounded-xl p-5 text-center border border-aura-primary/20">
                <DollarSign className="w-6 h-6 text-aura-primary mx-auto mb-2" />
                <p className="text-sm text-slate-500">Total Geral</p>
                <p className="text-2xl font-bold text-aura-primary">R$ 806.000</p>
              </div>
            </div>

            {/* Tabela de Cronograma */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Seguradora */}
              <div>
                <h4 className="font-bold text-blue-700 mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5" /> Seguradora S4 — R$ 560.000
                </h4>
                <div className="space-y-2">
                  <div className="bg-blue-600 text-white rounded-lg p-3 flex justify-between items-center">
                    <span className="text-sm font-semibold">Fase I — Instrução Pré-Processual</span>
                    <span className="font-bold">R$ 392.000</span>
                  </div>
                  {cronogramaSeguradora.filter(c => c.fase === 1).map((c, i) => (
                    <div key={i} className="flex justify-between items-center p-3 bg-blue-50 rounded-lg">
                      <div>
                        <span className="text-sm font-semibold text-slate-700">{c.mes}</span>
                        <span className="text-xs text-slate-500 ml-2">({c.evento})</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-blue-700">R$ {c.valor.toLocaleString('pt-BR')}</div>
                        <div className="text-xs text-slate-500">R$ {Math.round(c.valor / 3).toLocaleString('pt-BR')}/sócio</div>
                      </div>
                    </div>
                  ))}
                  <div className="bg-emerald-600 text-white rounded-lg p-3 flex justify-between items-center mt-4">
                    <span className="text-sm font-semibold">Fase II — Instrução Processual SUSEP</span>
                    <span className="font-bold">R$ 168.000</span>
                  </div>
                  {cronogramaSeguradora.filter(c => c.fase === 2).map((c, i) => (
                    <div key={i} className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg">
                      <div>
                        <span className="text-sm font-semibold text-slate-700">{c.mes}</span>
                        <span className="text-xs text-slate-500 ml-2">({c.evento})</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-emerald-700">R$ {c.valor.toLocaleString('pt-BR')}</div>
                        <div className="text-xs text-slate-500">R$ {Math.round(c.valor / 3).toLocaleString('pt-BR')}/sócio</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Administradora */}
              <div>
                <h4 className="font-bold text-emerald-700 mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5" /> Administradora PPM — R$ 196.000
                </h4>
                <div className="space-y-2">
                  <div className="bg-emerald-600 text-white rounded-lg p-3 flex justify-between items-center">
                    <span className="text-sm font-semibold">Fase 1 — Instrução Pré-Processual</span>
                    <span className="font-bold">R$ 196.000</span>
                  </div>
                  {cronogramaAdm.map((c, i) => (
                    <div key={i} className="flex justify-between items-center p-3 bg-emerald-50 rounded-lg">
                      <div>
                        <span className="text-sm font-semibold text-slate-700">{c.mes}</span>
                        <span className="text-xs text-slate-500 ml-2">({c.evento})</span>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-emerald-700">R$ {c.valor.toLocaleString('pt-BR')}</div>
                        <div className="text-xs text-slate-500">R$ {Math.round(c.valor / 3).toLocaleString('pt-BR')}/sócio</div>
                      </div>
                    </div>
                  ))}
                  <div className="bg-slate-100 rounded-lg p-4 mt-4">
                    <p className="text-sm text-slate-600">
                      <strong>Fase 2:</strong> Valores a definir conforme regulamentação futura do CNSP/SUSEP para Administradoras PPM.
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-bold text-amber-700 mb-4 flex items-center gap-2">
                    <Briefcase className="w-5 h-5" /> Gestão Renner — R$ 50.000
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="bg-amber-50 rounded-lg p-3 text-center border border-amber-200">
                      <div className="text-xs text-amber-600">Dennis</div>
                      <div className="font-bold text-amber-700">R$ 16.667</div>
                    </div>
                    <div className="bg-amber-50 rounded-lg p-3 text-center border border-amber-200">
                      <div className="text-xs text-amber-600">Alessandro</div>
                      <div className="font-bold text-amber-700">R$ 16.667</div>
                    </div>
                    <div className="bg-amber-50 rounded-lg p-3 text-center border border-amber-200">
                      <div className="text-xs text-amber-600">Rodrigo</div>
                      <div className="font-bold text-amber-700">R$ 16.667</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Downloads */}
            <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-slate-200">
              <a href="/documentos/Fluxo-Investimento-Consultoria.xlsx" download className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm font-semibold">
                <Download className="w-4 h-4" /> Planilha de Investimento (XLSX)
              </a>
              <a href="/documentos/Proposta-JH-Administracao-S4.pdf" download className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-semibold">
                <Download className="w-4 h-4" /> Proposta Seguradora (PDF)
              </a>
              <a href="/documentos/Proposta-Consultoria-Administradora-PPM.pdf" download className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors text-sm font-semibold">
                <Download className="w-4 h-4" /> Proposta Administradora (PDF)
              </a>
            </div>
          </Card>
        </div>

        {/* ═══ SEÇÃO 4-9: COMPONENTE CLIENTE ═══ */}
        <EstudoClient
          seguradoraAuto={seguradoraAuto}
          seguradoraVida={seguradoraVida}
          seguradoraConsolidada={seguradoraConsolidada}
          admPPM={admPPM}
          custosIniciais={custosIniciais}
        />

        {/* ═══ SEÇÃO 10: BLINDAGEM SOCIETÁRIA E ESTRUTURAÇÃO REGULATÓRIA ═══ */}
        <div id="secao-10" className="scroll-mt-24">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">10</div>
            <h2 className="text-3xl font-bold text-aura-primary">Blindagem Societária e Estruturação Regulatória</h2>
          </div>

          <Card className="p-8 mb-6">
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
              <p className="text-sm text-red-800">
                <strong>Guia Estratégico para o Acordo de Acionistas:</strong> Este questionário reúne{" "}
                <strong>54 questões estratégicas</strong> organizadas em <strong>10 blocos temáticos</strong> — incluindo{" "}
                <strong>Alertas Críticos sobre as Propostas JH</strong> e <strong>Estrutura do Sócio-Gestor (CEO)</strong> —{" "}
                com fundamentação legal explícita (Lei 6.404/76, LC 213/2025, Resoluções CNSP/SUSEP), mapa de riscos e cláusulas
                recomendadas. Cada tópico possui um <strong>sistema de anotações colaborativas</strong> para registro de
                observações e uso em reuniões entre os sócios.
              </p>
            </div>

            <AccordionBlindagem />

            {/* Mapa de Riscos */}
            <div className="bg-white rounded-xl p-6 mb-4 shadow-sm border">
              <h3 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" /> Mapa de Riscos Societários Críticos
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-red-700 text-white">
                      <th className="p-3 text-left rounded-tl-lg">Risco</th>
                      <th className="p-3 text-center">Financeiro</th>
                      <th className="p-3 text-center">Regulatório</th>
                      <th className="p-3 text-center">Reputacional</th>
                      <th className="p-3 text-left rounded-tr-lg">Mitigação Sugerida</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="p-3 font-semibold">Inadimplência de Aporte</td>
                      <td className="p-3 text-center"><span className="px-2 py-0.5 bg-red-100 text-red-700 rounded text-xs font-bold">ALTO</span></td>
                      <td className="p-3 text-center"><span className="px-2 py-0.5 bg-red-100 text-red-700 rounded text-xs font-bold">CRÍTICO</span></td>
                      <td className="p-3 text-center"><span className="px-2 py-0.5 bg-red-100 text-red-700 rounded text-xs font-bold">ALTO</span></td>
                      <td className="p-3 text-xs">Diluição punitiva, compra forçada, suspensão de direitos</td>
                    </tr>
                    <tr className="border-b bg-slate-50">
                      <td className="p-3 font-semibold">Quebra de Idoneidade</td>
                      <td className="p-3 text-center"><span className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded text-xs font-bold">MÉDIO</span></td>
                      <td className="p-3 text-center"><span className="px-2 py-0.5 bg-red-100 text-red-700 rounded text-xs font-bold">CRÍTICO</span></td>
                      <td className="p-3 text-center"><span className="px-2 py-0.5 bg-red-100 text-red-700 rounded text-xs font-bold">CRÍTICO</span></td>
                      <td className="p-3 text-xs">Exclusão sumária, renúncia imediata, recompra forçada</td>
                    </tr>
                    <tr className="border-b">
                      <td className="p-3 font-semibold">Travamento Decisório</td>
                      <td className="p-3 text-center"><span className="px-2 py-0.5 bg-red-100 text-red-700 rounded text-xs font-bold">ALTO</span></td>
                      <td className="p-3 text-center"><span className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded text-xs font-bold">MÉDIO</span></td>
                      <td className="p-3 text-center"><span className="px-2 py-0.5 bg-red-100 text-red-700 rounded text-xs font-bold">ALTO</span></td>
                      <td className="p-3 text-xs">Voto de minerva, mediação/arbitragem, shotgun clause</td>
                    </tr>
                    <tr className="border-b bg-slate-50">
                      <td className="p-3 font-semibold">Conflito de Interesses</td>
                      <td className="p-3 text-center"><span className="px-2 py-0.5 bg-red-100 text-red-700 rounded text-xs font-bold">ALTO</span></td>
                      <td className="p-3 text-center"><span className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded text-xs font-bold">MÉDIO</span></td>
                      <td className="p-3 text-center"><span className="px-2 py-0.5 bg-red-100 text-red-700 rounded text-xs font-bold">ALTO</span></td>
                      <td className="p-3 text-xs">Non-compete e non-solicitation com multas elevadas</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-semibold rounded-bl-lg">Saída Desestruturada</td>
                      <td className="p-3 text-center"><span className="px-2 py-0.5 bg-red-100 text-red-700 rounded text-xs font-bold">ALTO</span></td>
                      <td className="p-3 text-center"><span className="px-2 py-0.5 bg-red-100 text-red-700 rounded text-xs font-bold">CRÍTICO</span></td>
                      <td className="p-3 text-center"><span className="px-2 py-0.5 bg-red-100 text-red-700 rounded text-xs font-bold">ALTO</span></td>
                      <td className="p-3 text-xs rounded-br-lg">Lock-up, valuation pré-definido, pagamento parcelado</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Cláusulas Recomendadas */}
            <div className="bg-white rounded-xl p-6 mb-4 shadow-sm border">
              <h3 className="text-xl font-bold text-aura-primary mb-4 flex items-center gap-2">
                <Scale className="w-5 h-5" /> Cláusulas Contratuais Recomendadas
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-bold text-red-700 text-sm">Shotgun Clause (Buy-Sell)</h4>
                  <p className="text-xs text-slate-600 mt-1">Cláusula de compra e venda forçada como último recurso em deadlock. Procedimento de notificação, prazos e pagamento definidos.</p>
                </div>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <h4 className="font-bold text-amber-700 text-sm">Diluição Punitiva por Inadimplência</h4>
                  <p className="text-xs text-slate-600 mt-1">Deságio de 50% sobre valor patrimonial para sócios que não aportam capital. Torna a inadimplência extremamente custosa.</p>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-bold text-blue-700 text-sm">Recompra Compulsória por Justa Causa</h4>
                  <p className="text-xs text-slate-600 mt-1">Deságio de 30-50% sobre laudo de avaliação. Pagamento estendido (36-60 meses) para proteger o caixa.</p>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="font-bold text-purple-700 text-sm">Non-Compete & Non-Solicitation</h4>
                  <p className="text-xs text-slate-600 mt-1">Cobertura nacional, 3-5 anos pós-saída. Mercados vedados: seguros, resseguros, previdência, capitalização, PPM. Multa prefixada.</p>
                </div>
                <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 md:col-span-2">
                  <h4 className="font-bold text-teal-700 text-sm">Conta Escrow para Garantia de Obrigações</h4>
                  <p className="text-xs text-slate-600 mt-1">Parte dos dividendos retida por 12-24 meses para garantir cumprimento de obrigações futuras ou ressarcimento de danos.</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* ═══ RODAPÉ DO ESTUDO ═══ */}
        <Card className="p-8 bg-gradient-to-r from-aura-primary to-aura-secondary text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Próximos Passos</h2>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Este estudo de viabilidade é um documento vivo que será atualizado conforme o avanço 
            do processo regulatório e as definições do acordo societário entre os sócios.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/consultorias" className="px-8 py-3 bg-white text-aura-primary rounded-lg font-bold hover:bg-slate-100 transition-colors">
              Ver Consultorias
            </a>
            <a href="/regulatorio" className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-colors">
              Documentação Regulatória
            </a>
            <a href="/contato" className="px-8 py-3 bg-emerald-500 text-white rounded-lg font-bold hover:bg-emerald-600 transition-colors">
              Fale Conosco
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
}
