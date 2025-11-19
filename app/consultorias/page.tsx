import { Card } from "@/components/ui/card";
import { Building2, CheckCircle2, Shield, TrendingUp, Users, Cpu } from "lucide-react";

const consultorias = [
  {
    nome: "R2 Assessoria Contábil",
    foco: "Contabilidade SUSEP, FIP, controles internos, gestão fiscal",
    custo: "R$ 26.500/mês + serviços (R$ 5.900 viabilidade; R$ 53.000 plano; R$ 40.000 controles)",
    forcas: "Backoffice regulatório e contábil sólido; execução contínua"
  },
  {
    nome: "MC Seguros Consultoria",
    foco: "Abertura e estruturação integral da seguradora (viabilidade, RH, TI, processos)",
    custo: "R$ 700.000 consultoria + R$ 300.000 jurídico/atuária/plano (estimado)",
    forcas: "Visão holística e experiência em constituições S4; parcerias consolidadas"
  },
  {
    nome: "Way Business / Brasil Atuarial",
    foco: "Jurídico-regulatório SUSEP (autorização, estatuto, atas, acordo de acionistas)",
    custo: "R$ 250.000 em 40 parcelas de R$ 6.250,00",
    forcas: "Especialistas em processos SUSEP; lidera etapas de autorização e registro"
  },
  {
    nome: "SABZ Advogados + Prevue Consultoria",
    foco: "Constituição completa de seguradora (jurídico, atuarial, operacional e regulatório)",
    custo: "R$ 400.000 divididos em 3 etapas: R$ 160.000 (Memorando), R$ 180.000 (Plano de Negócios), R$ 60.000 (Constituição)",
    forcas: "Abordagem integrada jurídico-atuarial; experiência em processos SUSEP; entrega de seguradora pronta para operar em ~7 meses"
  }
];

export default function Page() {
  return (
    <section className="container py-10 space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-aura-primary mb-3">
          Análise Comparativa de Consultorias
        </h1>
        <p className="text-lg text-slate-600">
          Comparativo técnico das propostas para constituição da AURA Seguradora S4
        </p>
      </div>

      {/* Destaque MC Seguros */}
      <Card className="p-6 bg-gradient-to-r from-blue-50 to-cyan-50 border-l-4 border-blue-500">
        <div className="flex items-center gap-3 mb-4">
          <Building2 className="w-8 h-8 text-blue-600" />
          <h2 className="text-2xl font-bold text-slate-800">
            MC Seguros Consultoria - Nossa Escolha Estratégica
          </h2>
        </div>
        <p className="text-slate-700 mb-4">
          A <strong>MC Seguros Consultoria</strong> foi selecionada como parceira estratégica para a 
          estruturação integral da AURA Seguradora devido à sua <strong>visão holística</strong> e 
          experiência comprovada em constituições de seguradoras S4.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div>
            <h3 className="font-bold text-slate-800 mb-3">Escopo de Atuação</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span><strong>Viabilidade:</strong> Estudo de mercado, modelagem atuarial, projeções financeiras</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span><strong>RH e Governança:</strong> Estruturação de conselho, recrutamento de diretoria, compliance</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span><strong>TI:</strong> Implementação de core insurance, integração SUSEP DataHub, canais digitais</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span><strong>Processos:</strong> Mapeamento operacional, subscrição, sinistros, controles financeiros</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-slate-800 mb-3">Diferenciais Competitivos</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <TrendingUp className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Experiência prática</strong> em constituições S4 bem-sucedidas</span>
              </li>
              <li className="flex items-start gap-2">
                <Users className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                <span><strong>Parcerias consolidadas</strong> com BVix, R2, Way Business</span>
              </li>
              <li className="flex items-start gap-2">
                <Cpu className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span><strong>Visão holística</strong> integrando todos os aspectos da seguradora</span>
              </li>
              <li className="flex items-start gap-2">
                <Shield className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                <span><strong>Modelo operacional temporário</strong> via BVix para operação imediata</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 p-4 bg-white rounded-lg">
          <h3 className="font-bold text-slate-800 mb-2">Investimento Total</h3>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-blue-600">R$ 1.000.000</span>
            <span className="text-sm text-slate-600">(R$ 700.000 consultoria + R$ 300.000 serviços complementares)</span>
          </div>
          <p className="text-xs text-slate-600 mt-2">
            Inclui: Consultoria integral, jurídico, atuária, plano de negócios, documentação SUSEP
          </p>
        </div>
      </Card>

      {/* Parceria BVix */}
      <Card className="p-6 bg-gradient-to-r from-cyan-50 to-blue-50 border-l-4 border-cyan-500">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="w-8 h-8 text-cyan-600" />
          <h2 className="text-2xl font-bold text-slate-800">
            Parceria Estratégica: BVix Seguradora
          </h2>
        </div>
        <p className="text-slate-700 mb-4">
          A <strong>MC Seguros Consultoria</strong> viabilizou parceria estratégica com a <strong>BVix Seguradora</strong> 
          para operacionalização imediata do produto Auto Mensal enquanto a AURA aguarda autorização final da SUSEP.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-bold text-slate-800 mb-2">Modelo Operacional Temporário</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                <span><strong>BVix Seguradora:</strong> Seguradora operacional (cobertura)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                <span><strong>Potere Seguro Auto:</strong> MGA (gestão técnica)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                <span><strong>Soluções Corretora:</strong> Intermediadora (distribuição)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                <span><strong>AURA:</strong> Stand-by (aguardando autorização SUSEP)</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-bold text-slate-800 mb-2">Benefícios da Parceria</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Aprovação SUSEP acelerada para produtos</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Validação de mercado antes da operação própria</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Geração de receita imediata</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Transferência de carteira suave pós-autorização</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4">
          <a 
            href="https://www.bvixseguradora.com.br/quem-somos" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-medium underline"
          >
            Conheça a BVix Seguradora →
          </a>
        </div>
      </Card>

      {/* Comparativo Geral */}
      <div>
        <h2 className="text-2xl font-bold text-aura-primary mb-4">
          Comparativo Geral de Consultorias
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {consultorias.map(c => (
            <Card key={c.nome} className="p-6 space-y-3">
              <h3 className="text-xl font-semibold text-aura-primary">{c.nome}</h3>
              <div>
                <p className="text-sm font-bold text-slate-800 mb-1">Foco:</p>
                <p className="text-sm text-slate-600">{c.foco}</p>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800 mb-1">Custos:</p>
                <p className="text-sm text-slate-600">{c.custo}</p>
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800 mb-1">Forças:</p>
                <p className="text-sm text-slate-600">{c.forcas}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Modelo Integrado */}
      <Card className="p-6 bg-gradient-to-r from-green-50 to-blue-50">
        <h2 className="text-2xl font-bold text-aura-primary mb-4">
          Modelo Integrado de Estruturação
        </h2>
        <p className="text-slate-700 mb-4">
          A estratégia da AURA combina as forças de múltiplas consultorias especializadas, 
          coordenadas pela <strong>MC Seguros</strong>, para garantir uma estruturação completa e eficiente:
        </p>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-bold text-slate-800 mb-2">MC Seguros</h3>
            <p className="text-sm text-slate-700">
              Coordenação geral, viabilidade, RH, TI, processos operacionais
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-bold text-slate-800 mb-2">Way Business</h3>
            <p className="text-sm text-slate-700">
              Jurídico-regulatório SUSEP, autorização, estatuto, acordo de acionistas
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg">
            <h3 className="font-bold text-slate-800 mb-2">R2 Assessoria</h3>
            <p className="text-sm text-slate-700">
              Contabilidade SUSEP, FIP, controles internos, gestão fiscal contínua
            </p>
          </div>
        </div>

        <div className="mt-6 p-4 bg-blue-100 rounded-lg">
          <p className="text-sm text-blue-900">
            <strong>✨ Resultado:</strong> Seguradora estruturada de forma integral, com todos os aspectos 
            regulatórios, operacionais, tecnológicos e humanos alinhados desde o início, garantindo 
            operação sustentável e escalável.
          </p>
        </div>
      </Card>

      {/* Call to Action */}
      <Card className="p-8 bg-gradient-to-r from-aura-primary to-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Quer Saber Mais Sobre Nossa Estruturação?
        </h2>
        <p className="text-lg mb-6 opacity-90">
          Entre em contato para conhecer em detalhes como a MC Seguros Consultoria 
          pode estruturar sua seguradora S4 de forma completa e eficiente.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/estruturacao-s4" 
            className="px-8 py-3 bg-white text-aura-primary rounded-lg font-bold hover:bg-slate-100 transition-colors"
          >
            Ver Estruturação Integral
          </a>
          <a 
            href="/contato" 
            className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-colors"
          >
            Fale Conosco
          </a>
        </div>
      </Card>
    </section>
  );
}
