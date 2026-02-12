import { Card } from "@/components/ui/card";
import { Building2, CheckCircle2, Shield, TrendingUp, Users, Cpu, FileText, Download, Calendar, Lock, Scale, AlertTriangle, Globe, FileCheck, ChevronDown, ChevronUp, Briefcase, DollarSign, Clock, Award, BookOpen, Gavel, BarChart3, Target, Trophy, Star, Zap, ArrowRight } from "lucide-react";
import Image from "next/image";

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
  },
  {
    nome: "JH Administração Empreendimentos",
    foco: "Constituição completa de seguradora S3 ou S4 (viabilidade, projeto, plano de negócios, instrução SUSEP, assessoria jurídica)",
    custo: "R$ 560.000 em 2 fases: R$ 392.000 (Fase 1) + R$ 168.000 (Fase 2)",
    forcas: "Escopo flexível S3/S4; media training; pagamento vinculado a marcos regulatórios; assessoria jurídica para constituição inclusa"
  }
];

const clausulasNDA = [
  {
    numero: "1ª",
    titulo: "Objeto do Acordo",
    categoria: "Considerações Preliminares",
    resumo: "Estabelece os fundamentos para viabilizar a divulgação e acesso a informações sigilosas entre as partes, incluindo estudos para emissão de apólices, informações de negócios, dados técnicos, econômicos, financeiros e comerciais."
  },
  {
    numero: "2ª",
    titulo: "Definição de Informações Confidenciais",
    categoria: "Definições",
    resumo: "Define como Informações Confidenciais todas as informações sigilosas transmitidas por qualquer meio (escrito, digital, magnético, eletrônico, fotográfico e oral), incluindo processos, tecnologia, segredos comerciais, know-how, pesquisas, estudos, metodologias, projetos e protótipos."
  },
  {
    numero: "3ª",
    titulo: "Tratamento das Informações",
    categoria: "Obrigações",
    resumo: "A RECEPTORA compromete-se a não divulgar, não utilizar em benefício próprio além dos fins estabelecidos, e necessita consentimento prévio por escrito para divulgar a terceiros. Inclui exceções para informações já públicas ou exigidas por lei."
  },
  {
    numero: "4ª",
    titulo: "Prazo da Confidencialidade",
    categoria: "Vigência",
    resumo: "Vigência de 3 (três) anos a partir da assinatura. As disposições de sigilo permanecem válidas por 5 (cinco) anos adicionais após o término da vigência."
  },
  {
    numero: "5ª",
    titulo: "Tratamento de Dados Pessoais",
    categoria: "LGPD",
    resumo: "Conformidade com a Lei 13.709/2018 (LGPD), incluindo registro de operações de tratamento, medidas técnicas e organizativas de proteção, notificação sobre reclamações e solicitações de titulares, e eliminação/anonimização de dados em caso de não celebração de contrato definitivo."
  },
  {
    numero: "6ª",
    titulo: "Propriedade Intelectual",
    categoria: "Disposições Gerais",
    resumo: "A DIVULGADORA mantém a titularidade e todos os direitos de propriedade intelectual das Informações Confidenciais."
  },
  {
    numero: "7ª",
    titulo: "Caráter Irrevogável",
    categoria: "Disposições Gerais",
    resumo: "Acordo firmado em caráter irretratável e irrevogável, constituindo acordo integral entre as Partes. Substitui todos os entendimentos anteriores e obriga herdeiros e sucessores."
  },
  {
    numero: "8ª",
    titulo: "Comunicações",
    categoria: "Disposições Gerais",
    resumo: "Comunicações por escrito, transmitidas por meio eletrônico. Notificações de descumprimento devem ser por fax ou carta registrada."
  },
  {
    numero: "9ª",
    titulo: "Tolerância",
    categoria: "Disposições Gerais",
    resumo: "A tolerância ou abstenção do exercício de qualquer direito somente terá eficácia se devidamente formalizada pelas Partes."
  },
  {
    numero: "10ª",
    titulo: "Cessão de Direitos",
    categoria: "Disposições Gerais",
    resumo: "Direitos e obrigações não podem ser cedidos ou substabelecidos sem consentimento prévio por escrito da outra parte."
  },
  {
    numero: "11ª",
    titulo: "Independência das Partes",
    categoria: "Disposições Gerais",
    resumo: "O Acordo não obriga as Partes a celebrar qualquer tipo de contrato, nem impede celebrar contratos com terceiros."
  },
  {
    numero: "12ª",
    titulo: "Capacidade das Partes",
    categoria: "Disposições Gerais",
    resumo: "As Partes declaram possuir plenos poderes e competência para celebrar o Contrato. A DIVULGADORA declara ter poderes para divulgar as Informações Confidenciais."
  },
  {
    numero: "13ª",
    titulo: "Lei Aplicável",
    categoria: "Disposições Gerais",
    resumo: "O Acordo será regido e interpretado de acordo com as leis da República Federativa do Brasil."
  },
  {
    numero: "14ª",
    titulo: "Capacidade Jurídica",
    categoria: "Disposições Gerais",
    resumo: "As Partes declaram, sob as penas da lei, possuir plena capacidade jurídica. Todos os dados fornecidos são verdadeiros."
  },
  {
    numero: "15ª",
    titulo: "Direito de Recusa",
    categoria: "Disposições Gerais",
    resumo: "A DIVULGADORA pode, a seu exclusivo critério, negar-se a fornecer informações que extrapolem os limites e finalidades do Acordo."
  },
  {
    numero: "16ª",
    titulo: "Penalidades",
    categoria: "Sanções",
    resumo: "A quebra do sigilo possibilita imediata rescisão de qualquer contrato. A parte responsável assume toda a responsabilidade, incluindo cível, penal e administrativa."
  },
  {
    numero: "17ª",
    titulo: "Validade das Disposições",
    categoria: "Disposições Gerais",
    resumo: "Se alguma disposição for considerada inválida, a validade das demais disposições não será afetada."
  },
  {
    numero: "18ª",
    titulo: "Interpretação",
    categoria: "Disposições Gerais",
    resumo: "Na impossibilidade de substituir disposições nulas, o acordo será interpretado sem a aplicação de tais disposições."
  },
  {
    numero: "19ª",
    titulo: "Consentimentos por Escrito",
    categoria: "Disposições Gerais",
    resumo: "Quaisquer consentimentos, alterações, acordos ou renúncias devem ser feitos por escrito."
  },
  {
    numero: "20ª",
    titulo: "Assinatura Digital",
    categoria: "Formalização",
    resumo: "As Partes reconhecem como válida a assinatura eletrônica/digital, nos termos da MP 2.200-2/2001, através das plataformas Docusign ou Autentique."
  },
  {
    numero: "21ª",
    titulo: "Documentos Necessários",
    categoria: "Formalização",
    resumo: "As Partes devem apresentar: Contrato/Estatuto Social, alterações societárias, ata de eleição da Diretoria e documentos de comprovação de poderes."
  },
  {
    numero: "22ª",
    titulo: "Foro",
    categoria: "Jurisdição",
    resumo: "Foro da Cidade de São Paulo, Estado de São Paulo, para dirimir quaisquer dúvidas ou controvérsias."
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

      {/* ===================== NOVA PROPOSTA: JH Administração ===================== */}
      <Card className="p-6 bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-full uppercase tracking-wide">Nova Proposta</span>
          <span className="text-sm text-slate-500">Recebida em 06/02/2026</span>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <Briefcase className="w-8 h-8 text-amber-600" />
          <h2 className="text-2xl font-bold text-slate-800">
            JH Administração Empreendimentos Consultoria e Participações LTDA
          </h2>
        </div>
        <p className="text-slate-700 mb-4">
          Proposta de consultoria técnica integral para estudo de viabilidade e estruturação de projeto técnico e jurídico 
          visando a <strong>Constituição de Sociedade Seguradora junto à SUSEP – Segmento S3 ou S4</strong>. 
          Endereçada ao Sr. Renner Fidélis, com origem em Goiânia.
        </p>
        <p className="text-sm text-slate-500 mb-6">
          CNPJ: 28.993.821/0001-95
        </p>

        {/* Resumo Financeiro */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg border border-amber-200 text-center">
            <DollarSign className="w-6 h-6 text-amber-600 mx-auto mb-2" />
            <p className="text-sm text-slate-500 mb-1">Valor Total</p>
            <p className="text-2xl font-bold text-amber-600">R$ 560.000</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-amber-200 text-center">
            <Clock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
            <p className="text-sm text-slate-500 mb-1">Prazo Fase 1</p>
            <p className="text-2xl font-bold text-blue-600">120-180 dias</p>
          </div>
          <div className="bg-white p-4 rounded-lg border border-amber-200 text-center">
            <Award className="w-6 h-6 text-green-600 mx-auto mb-2" />
            <p className="text-sm text-slate-500 mb-1">Segmentos</p>
            <p className="text-2xl font-bold text-green-600">S3 ou S4</p>
          </div>
        </div>

        {/* Fase 1 */}
        <div className="bg-white p-6 rounded-lg border border-slate-200 mb-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded">FASE 1</span>
            <h3 className="text-lg font-bold text-slate-800">Instrução Pré-Processual</h3>
            <span className="ml-auto text-lg font-bold text-blue-600">R$ 392.000</span>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-slate-700 mb-2 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-blue-600" />
                1. Estudo de Viabilidade
              </h4>
              <ul className="space-y-1 text-sm text-slate-600 ml-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3 h-3 text-blue-500 flex-shrink-0 mt-1" />
                  <span>Levantamento de requisitos regulatórios S3/S4</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3 h-3 text-blue-500 flex-shrink-0 mt-1" />
                  <span>Análise de viabilidade operacional (administrativa, TI, governança)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3 h-3 text-blue-500 flex-shrink-0 mt-1" />
                  <span>Estudo jurídico (obrigações legais, regulamentação)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3 h-3 text-blue-500 flex-shrink-0 mt-1" />
                  <span>Avaliação econômica (capital, fluxo de caixa, modelagem com cenários)</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-700 mb-2 flex items-center gap-2">
                <FileText className="w-4 h-4 text-blue-600" />
                2. Elaboração do Projeto
              </h4>
              <ul className="space-y-1 text-sm text-slate-600 ml-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3 h-3 text-blue-500 flex-shrink-0 mt-1" />
                  <span>Viabilidade técnica, jurídica e econômico-financeira</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3 h-3 text-blue-500 flex-shrink-0 mt-1" />
                  <span>Estratégias de estruturação e modelos societários</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3 h-3 text-blue-500 flex-shrink-0 mt-1" />
                  <span>Diretrizes estratégicas e cronograma-base</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-700 mb-2 flex items-center gap-2">
                <Users className="w-4 h-4 text-blue-600" />
                3. Dirigentes e Grupo de Controle
              </h4>
              <ul className="space-y-1 text-sm text-slate-600 ml-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3 h-3 text-blue-500 flex-shrink-0 mt-1" />
                  <span>Avaliação econômica dos dirigentes estatutários</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3 h-3 text-blue-500 flex-shrink-0 mt-1" />
                  <span>Verificação de origem e lastro dos recursos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3 h-3 text-blue-500 flex-shrink-0 mt-1" />
                  <span>Análise de idoneidade conforme SUSEP</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3 h-3 text-blue-500 flex-shrink-0 mt-1" />
                  <span>Composição ideal do grupo de controle</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-700 mb-2 flex items-center gap-2">
                <BarChart3 className="w-4 h-4 text-blue-600" />
                5. Plano de Negócios Completo
              </h4>
              <ul className="space-y-1 text-sm text-slate-600 ml-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3 h-3 text-blue-500 flex-shrink-0 mt-1" />
                  <span>Estratégia institucional, missão, visão e objetivos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3 h-3 text-blue-500 flex-shrink-0 mt-1" />
                  <span>Projeções econômico-financeiras detalhadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3 h-3 text-blue-500 flex-shrink-0 mt-1" />
                  <span>Análise de riscos e mecanismos de mitigação</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3 h-3 text-blue-500 flex-shrink-0 mt-1" />
                  <span>Cronograma de implementação e marcos principais</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Condições de Pagamento Fase 1 */}
          <div className="mt-4 p-3 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-900">
              <strong>Pagamento Fase 1:</strong> R$ 160.000 na assinatura + 4 parcelas de R$ 58.000 (mensal, a partir de 30 dias)
            </p>
          </div>
        </div>

        {/* Fase 2 */}
        <div className="bg-white p-6 rounded-lg border border-slate-200 mb-4">
          <div className="flex items-center gap-3 mb-4">
            <span className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded">FASE 2</span>
            <h3 className="text-lg font-bold text-slate-800">Instrução Processual SUSEP</h3>
            <span className="ml-auto text-lg font-bold text-green-600">R$ 168.000</span>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-slate-700 mb-2 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-green-600" />
                1. Reuniões Técnicas SUSEP
              </h4>
              <ul className="space-y-1 text-sm text-slate-600 ml-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3 h-3 text-green-500 flex-shrink-0 mt-1" />
                  <span>Preparação da apresentação institucional do projeto</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3 h-3 text-green-500 flex-shrink-0 mt-1" />
                  <span>Organização e condução da 1ª reunião técnica com a SUSEP</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3 h-3 text-green-500 flex-shrink-0 mt-1" />
                  <span><strong>Media Training</strong> dos representantes da seguradora</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3 h-3 text-green-500 flex-shrink-0 mt-1" />
                  <span>Reuniões técnicas complementares (se necessárias)</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-700 mb-2 flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-600" />
                2. Aprovação Prévia SUSEP
              </h4>
              <ul className="space-y-1 text-sm text-slate-600 ml-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3 h-3 text-green-500 flex-shrink-0 mt-1" />
                  <span>Preparação da documentação regulatória completa</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3 h-3 text-green-500 flex-shrink-0 mt-1" />
                  <span>Protocolo administrativo na SUSEP</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3 h-3 text-green-500 flex-shrink-0 mt-1" />
                  <span>Acompanhamento contínuo do processo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3 h-3 text-green-500 flex-shrink-0 mt-1" />
                  <span>Obtenção do <strong>Ofício Autorizativo de Aprovação Prévia</strong></span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-700 mb-2 flex items-center gap-2">
                <Gavel className="w-4 h-4 text-green-600" />
                3. Assessoria Jurídica para Constituição
              </h4>
              <ul className="space-y-1 text-sm text-slate-600 ml-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3 h-3 text-green-500 flex-shrink-0 mt-1" />
                  <span>Elaboração de Estatuto Social, Atas, Nomeações formais</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3 h-3 text-green-500 flex-shrink-0 mt-1" />
                  <span>Registros em cartório, Junta Comercial e órgãos competentes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3 h-3 text-green-500 flex-shrink-0 mt-1" />
                  <span>Acompanhamento da integralização de capital</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-slate-700 mb-2 flex items-center gap-2">
                <Award className="w-4 h-4 text-green-600" />
                4. Aprovação Definitiva
              </h4>
              <ul className="space-y-1 text-sm text-slate-600 ml-6">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3 h-3 text-green-500 flex-shrink-0 mt-1" />
                  <span>Preparação e protocolo do processo definitivo na SUSEP</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3 h-3 text-green-500 flex-shrink-0 mt-1" />
                  <span>Acompanhamento da análise regulatória</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3 h-3 text-green-500 flex-shrink-0 mt-1" />
                  <span>Obtenção da <strong>Portaria Autorizativa</strong> (constituição e funcionamento)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3 h-3 text-green-500 flex-shrink-0 mt-1" />
                  <span>Publicação no Diário Oficial da União</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Condições de Pagamento Fase 2 */}
          <div className="mt-4 p-3 bg-green-50 rounded-lg">
            <p className="text-sm text-green-900">
              <strong>Pagamento Fase 2 (vinculado a marcos):</strong> R$ 84.000 após reunião técnica SUSEP | 
              R$ 42.000 na expedição do Ofício de Aprovação Prévia | R$ 42.000 na publicação da Portaria Definitiva no DOU
            </p>
          </div>
        </div>

        {/* Diferenciais */}
        <div className="bg-white p-4 rounded-lg border border-amber-200 mb-4">
          <h3 className="font-bold text-slate-800 mb-3 flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-amber-600" />
            Diferenciais da Proposta
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
            <div className="bg-amber-50 p-3 rounded-lg text-center">
              <p className="text-sm font-semibold text-amber-700">Flexibilidade S3/S4</p>
              <p className="text-xs text-slate-600 mt-1">Abrange ambos os segmentos</p>
            </div>
            <div className="bg-amber-50 p-3 rounded-lg text-center">
              <p className="text-sm font-semibold text-amber-700">Media Training</p>
              <p className="text-xs text-slate-600 mt-1">Preparação de dirigentes para SUSEP</p>
            </div>
            <div className="bg-amber-50 p-3 rounded-lg text-center">
              <p className="text-sm font-semibold text-amber-700">Pagamento por Marco</p>
              <p className="text-xs text-slate-600 mt-1">Fase 2 vinculada a resultados</p>
            </div>
            <div className="bg-amber-50 p-3 rounded-lg text-center">
              <p className="text-sm font-semibold text-amber-700">Assessoria Jurídica</p>
              <p className="text-xs text-slate-600 mt-1">Constituição societária inclusa</p>
            </div>
          </div>
        </div>

        {/* Download da proposta */}
        <a 
          href="/documentos/Proposta-JH-Administracao-S4.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600 text-white rounded-lg font-medium hover:bg-amber-700 transition-colors"
        >
          <Download className="w-4 h-4" />
          Baixar Proposta Completa (PDF)
        </a>
      </Card>

      {/* ===================== TABELA COMPARATIVA COMPLETA ===================== */}
      <Card className="p-6 border-l-4 border-indigo-500">
        <div className="flex items-center gap-3 mb-6">
          <BarChart3 className="w-8 h-8 text-indigo-600" />
          <h2 className="text-2xl font-bold text-slate-800">
            Tabela Comparativa Completa
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="bg-slate-100">
                <th className="text-left p-3 border border-slate-200 font-bold text-slate-700">Critério</th>
                <th className="text-left p-3 border border-slate-200 font-bold text-slate-700">MC Seguros</th>
                <th className="text-left p-3 border border-slate-200 font-bold text-amber-700 bg-amber-50">JH Administração</th>
                <th className="text-left p-3 border border-slate-200 font-bold text-slate-700">SABZ + Prevue</th>
                <th className="text-left p-3 border border-slate-200 font-bold text-slate-700">Way Business</th>
                <th className="text-left p-3 border border-slate-200 font-bold text-slate-700">R2 Assessoria</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-3 border border-slate-200 font-semibold text-slate-700">Valor Total</td>
                <td className="p-3 border border-slate-200 text-slate-600">~R$ 1.000.000</td>
                <td className="p-3 border border-slate-200 text-amber-700 bg-amber-50 font-semibold">R$ 560.000</td>
                <td className="p-3 border border-slate-200 text-slate-600">R$ 400.000</td>
                <td className="p-3 border border-slate-200 text-slate-600">R$ 250.000</td>
                <td className="p-3 border border-slate-200 text-slate-600">R$ 26.500/mês + serviços</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-3 border border-slate-200 font-semibold text-slate-700">Escopo Principal</td>
                <td className="p-3 border border-slate-200 text-slate-600">Estruturação integral (viabilidade, RH, TI, processos)</td>
                <td className="p-3 border border-slate-200 text-amber-700 bg-amber-50">Constituição completa S3/S4 (viabilidade + instrução SUSEP + jurídico)</td>
                <td className="p-3 border border-slate-200 text-slate-600">Constituição completa (jurídico, atuarial, operacional)</td>
                <td className="p-3 border border-slate-200 text-slate-600">Jurídico-regulatório SUSEP</td>
                <td className="p-3 border border-slate-200 text-slate-600">Contabilidade SUSEP, FIP, controles</td>
              </tr>
              <tr>
                <td className="p-3 border border-slate-200 font-semibold text-slate-700">Segmento</td>
                <td className="p-3 border border-slate-200 text-slate-600">S4</td>
                <td className="p-3 border border-slate-200 text-amber-700 bg-amber-50 font-semibold">S3 ou S4 (flexível)</td>
                <td className="p-3 border border-slate-200 text-slate-600">S4</td>
                <td className="p-3 border border-slate-200 text-slate-600">S4</td>
                <td className="p-3 border border-slate-200 text-slate-600">S4</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-3 border border-slate-200 font-semibold text-slate-700">Prazo Estimado</td>
                <td className="p-3 border border-slate-200 text-slate-600">~12 meses</td>
                <td className="p-3 border border-slate-200 text-amber-700 bg-amber-50">120-180 dias (Fase 1) + prazos SUSEP (Fase 2)</td>
                <td className="p-3 border border-slate-200 text-slate-600">~7 meses</td>
                <td className="p-3 border border-slate-200 text-slate-600">~40 meses (parcelamento)</td>
                <td className="p-3 border border-slate-200 text-slate-600">Contínuo (mensal)</td>
              </tr>
              <tr>
                <td className="p-3 border border-slate-200 font-semibold text-slate-700">Plano de Negócios</td>
                <td className="p-3 border border-slate-200 text-green-600 font-semibold">Incluso</td>
                <td className="p-3 border border-slate-200 text-green-600 bg-amber-50 font-semibold">Incluso</td>
                <td className="p-3 border border-slate-200 text-green-600 font-semibold">Incluso</td>
                <td className="p-3 border border-slate-200 text-red-500">Não incluso</td>
                <td className="p-3 border border-slate-200 text-slate-600">R$ 53.000 (à parte)</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-3 border border-slate-200 font-semibold text-slate-700">Assessoria Jurídica</td>
                <td className="p-3 border border-slate-200 text-slate-600">Via parceiros</td>
                <td className="p-3 border border-slate-200 text-green-600 bg-amber-50 font-semibold">Inclusa (constituição societária)</td>
                <td className="p-3 border border-slate-200 text-green-600 font-semibold">Inclusa</td>
                <td className="p-3 border border-slate-200 text-green-600 font-semibold">Inclusa</td>
                <td className="p-3 border border-slate-200 text-red-500">Não inclusa</td>
              </tr>
              <tr>
                <td className="p-3 border border-slate-200 font-semibold text-slate-700">Media Training</td>
                <td className="p-3 border border-slate-200 text-red-500">Não incluso</td>
                <td className="p-3 border border-slate-200 text-green-600 bg-amber-50 font-semibold">Incluso</td>
                <td className="p-3 border border-slate-200 text-red-500">Não incluso</td>
                <td className="p-3 border border-slate-200 text-red-500">Não incluso</td>
                <td className="p-3 border border-slate-200 text-red-500">Não incluso</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-3 border border-slate-200 font-semibold text-slate-700">Reuniões SUSEP</td>
                <td className="p-3 border border-slate-200 text-green-600 font-semibold">Incluso</td>
                <td className="p-3 border border-slate-200 text-green-600 bg-amber-50 font-semibold">Incluso</td>
                <td className="p-3 border border-slate-200 text-green-600 font-semibold">Incluso</td>
                <td className="p-3 border border-slate-200 text-green-600 font-semibold">Incluso</td>
                <td className="p-3 border border-slate-200 text-red-500">Não incluso</td>
              </tr>
              <tr>
                <td className="p-3 border border-slate-200 font-semibold text-slate-700">Estruturação TI</td>
                <td className="p-3 border border-slate-200 text-green-600 font-semibold">Incluso</td>
                <td className="p-3 border border-slate-200 text-red-500 bg-amber-50">Não incluso</td>
                <td className="p-3 border border-slate-200 text-red-500">Não incluso</td>
                <td className="p-3 border border-slate-200 text-red-500">Não incluso</td>
                <td className="p-3 border border-slate-200 text-red-500">Não incluso</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-3 border border-slate-200 font-semibold text-slate-700">Estruturação RH</td>
                <td className="p-3 border border-slate-200 text-green-600 font-semibold">Incluso</td>
                <td className="p-3 border border-slate-200 text-red-500 bg-amber-50">Não incluso</td>
                <td className="p-3 border border-slate-200 text-red-500">Não incluso</td>
                <td className="p-3 border border-slate-200 text-red-500">Não incluso</td>
                <td className="p-3 border border-slate-200 text-red-500">Não incluso</td>
              </tr>
              <tr>
                <td className="p-3 border border-slate-200 font-semibold text-slate-700">Pagamento por Performance</td>
                <td className="p-3 border border-slate-200 text-red-500">Não</td>
                <td className="p-3 border border-slate-200 text-green-600 bg-amber-50 font-semibold">Sim (Fase 2 vinculada a marcos)</td>
                <td className="p-3 border border-slate-200 text-slate-600">Parcial (por etapas)</td>
                <td className="p-3 border border-slate-200 text-red-500">Não (parcelamento fixo)</td>
                <td className="p-3 border border-slate-200 text-red-500">Não (mensal fixo)</td>
              </tr>
              <tr className="bg-slate-50">
                <td className="p-3 border border-slate-200 font-semibold text-slate-700">Portaria Autorizativa</td>
                <td className="p-3 border border-slate-200 text-green-600 font-semibold">Acompanhamento</td>
                <td className="p-3 border border-slate-200 text-green-600 bg-amber-50 font-semibold">Incluso (até publicação no DOU)</td>
                <td className="p-3 border border-slate-200 text-green-600 font-semibold">Incluso</td>
                <td className="p-3 border border-slate-200 text-green-600 font-semibold">Incluso</td>
                <td className="p-3 border border-slate-200 text-red-500">Não incluso</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4 p-4 bg-indigo-50 rounded-lg border border-indigo-200">
          <p className="text-sm text-indigo-900">
            <strong>Nota:</strong> A tabela acima apresenta uma análise comparativa baseada nas propostas recebidas. 
            Cada consultoria possui especialidades distintas e complementares. A escolha deve considerar não apenas 
            o valor, mas o escopo de serviços, a experiência no segmento e o modelo de pagamento oferecido.
          </p>
        </div>
      </Card>

      {/* ===================== MC Seguros - Escolha Estratégica ===================== */}
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
                <Cpu className="w-4 h-4 text-orange-600 flex-shrink-0 mt-0.5" />
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

      {/* Documentação da Parceria BVix - NDA */}
      <Card className="p-6 bg-gradient-to-r from-slate-50 to-blue-50 border-l-4 border-slate-500">
        <div className="flex items-center gap-3 mb-4">
          <FileText className="w-8 h-8 text-slate-600" />
          <h2 className="text-2xl font-bold text-slate-800">
            Documentação da Parceria BVix
          </h2>
        </div>
        
        <p className="text-slate-700 mb-6">
          A formalização da parceria entre a <strong>Potere Gestão de Negócios</strong> e a <strong>BVix Seguradora</strong> está 
          amparada por um Acordo de Sigilo e Confidencialidade de Informações (NDA), que estabelece os termos e condições 
          para o compartilhamento seguro de informações estratégicas entre as partes.
        </p>

        {/* Informações Gerais do Documento */}
        <div className="bg-white p-6 rounded-lg border border-slate-200 mb-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-red-100 rounded-lg">
              <FileText className="w-8 h-8 text-red-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-slate-800 mb-2">
                Acordo de Sigilo e Confidencialidade de Informações (NDA)
              </h3>
              <p className="text-sm text-slate-600 mb-4">
                Documento que regulamenta a proteção das informações confidenciais trocadas entre Potere Gestão de Negócios LTDA 
                e BVix Seguradora S.A. no âmbito da parceria estratégica para operacionalização de produtos de seguros.
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <Users className="w-4 h-4 text-blue-600" />
                    <span><strong>Partes:</strong> Potere Gestão de Negócios × BVix Seguradora</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <Calendar className="w-4 h-4 text-green-600" />
                    <span><strong>Data de Assinatura:</strong> 12 de janeiro de 2026</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <Lock className="w-4 h-4 text-purple-600" />
                    <span><strong>Vigência:</strong> 3 anos (+ 5 anos de sigilo pós-término)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <Shield className="w-4 h-4 text-cyan-600" />
                    <span><strong>Conformidade:</strong> LGPD (Lei 13.709/2018)</span>
                  </div>
                </div>
              </div>

              <a 
                href="/documentos/NDA-BVix-Seguradora-Potere.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                <Download className="w-4 h-4" />
                Baixar Documento Completo (PDF)
              </a>
            </div>
          </div>
        </div>

        {/* Resumo Detalhado das Cláusulas */}
        <div className="bg-white p-6 rounded-lg border border-slate-200">
          <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Scale className="w-6 h-6 text-blue-600" />
            Resumo Detalhado das Cláusulas
          </h3>
          <p className="text-sm text-slate-600 mb-6">
            O Acordo de Sigilo e Confidencialidade é composto por 22 cláusulas que regulamentam todos os aspectos 
            da proteção de informações confidenciais entre as partes. Abaixo, apresentamos um resumo explicativo de cada cláusula:
          </p>

          <div className="space-y-6">
            {/* Considerações Preliminares e Definições */}
            <div>
              <h4 className="text-md font-bold text-blue-700 mb-3 pb-2 border-b border-blue-200 flex items-center gap-2">
                <FileCheck className="w-5 h-5" />
                Considerações Preliminares e Definições
              </h4>
              <div className="space-y-3">
                {clausulasNDA.filter(c => ["Considerações Preliminares", "Definições"].includes(c.categoria)).map(clausula => (
                  <div key={clausula.numero} className="bg-slate-50 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
                        {clausula.numero}
                      </span>
                      <div>
                        <h5 className="font-semibold text-slate-800">{clausula.titulo}</h5>
                        <p className="text-sm text-slate-600 mt-1">{clausula.resumo}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Obrigações e Vigência */}
            <div>
              <h4 className="text-md font-bold text-green-700 mb-3 pb-2 border-b border-green-200 flex items-center gap-2">
                <Lock className="w-5 h-5" />
                Obrigações e Vigência
              </h4>
              <div className="space-y-3">
                {clausulasNDA.filter(c => ["Obrigações", "Vigência"].includes(c.categoria)).map(clausula => (
                  <div key={clausula.numero} className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">
                        {clausula.numero}
                      </span>
                      <div>
                        <h5 className="font-semibold text-slate-800">{clausula.titulo}</h5>
                        <p className="text-sm text-slate-600 mt-1">{clausula.resumo}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* LGPD */}
            <div>
              <h4 className="text-md font-bold text-purple-700 mb-3 pb-2 border-b border-purple-200 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Proteção de Dados Pessoais (LGPD)
              </h4>
              <div className="space-y-3">
                {clausulasNDA.filter(c => c.categoria === "LGPD").map(clausula => (
                  <div key={clausula.numero} className="bg-purple-50 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <span className="bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded">
                        {clausula.numero}
                      </span>
                      <div>
                        <h5 className="font-semibold text-slate-800">{clausula.titulo}</h5>
                        <p className="text-sm text-slate-600 mt-1">{clausula.resumo}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Disposições Gerais */}
            <div>
              <h4 className="text-md font-bold text-slate-700 mb-3 pb-2 border-b border-slate-200 flex items-center gap-2">
                <FileText className="w-5 h-5" />
                Disposições Gerais
              </h4>
              <div className="grid md:grid-cols-2 gap-3">
                {clausulasNDA.filter(c => c.categoria === "Disposições Gerais").map(clausula => (
                  <div key={clausula.numero} className="bg-slate-50 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <span className="bg-slate-600 text-white text-xs font-bold px-2 py-1 rounded">
                        {clausula.numero}
                      </span>
                      <div>
                        <h5 className="font-semibold text-slate-800 text-sm">{clausula.titulo}</h5>
                        <p className="text-xs text-slate-600 mt-1">{clausula.resumo}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Sanções */}
            <div>
              <h4 className="text-md font-bold text-red-700 mb-3 pb-2 border-b border-red-200 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Sanções e Penalidades
              </h4>
              <div className="space-y-3">
                {clausulasNDA.filter(c => c.categoria === "Sanções").map(clausula => (
                  <div key={clausula.numero} className="bg-red-50 p-4 rounded-lg border border-red-200">
                    <div className="flex items-start gap-3">
                      <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
                        {clausula.numero}
                      </span>
                      <div>
                        <h5 className="font-semibold text-slate-800">{clausula.titulo}</h5>
                        <p className="text-sm text-slate-600 mt-1">{clausula.resumo}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Formalização e Jurisdição */}
            <div>
              <h4 className="text-md font-bold text-cyan-700 mb-3 pb-2 border-b border-cyan-200 flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Formalização e Jurisdição
              </h4>
              <div className="space-y-3">
                {clausulasNDA.filter(c => ["Formalização", "Jurisdição"].includes(c.categoria)).map(clausula => (
                  <div key={clausula.numero} className="bg-cyan-50 p-4 rounded-lg">
                    <div className="flex items-start gap-3">
                      <span className="bg-cyan-600 text-white text-xs font-bold px-2 py-1 rounded">
                        {clausula.numero}
                      </span>
                      <div>
                        <h5 className="font-semibold text-slate-800">{clausula.titulo}</h5>
                        <p className="text-sm text-slate-600 mt-1">{clausula.resumo}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Nota Final */}
          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-900">
              <strong>Nota:</strong> Este resumo tem caráter informativo e não substitui a leitura integral do documento original. 
              Para informações completas e juridicamente vinculantes, consulte o documento PDF disponível para download acima.
            </p>
          </div>
        </div>
      </Card>

      {/* Comparativo Geral em Cards */}
      <div>
        <h2 className="text-2xl font-bold text-aura-primary mb-4">
          Comparativo Geral de Consultorias
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {consultorias.map(c => (
            <Card key={c.nome} className={`p-6 space-y-3 ${c.nome === "JH Administração Empreendimentos" ? "border-2 border-amber-400 bg-amber-50/30" : ""}`}>
              {c.nome === "JH Administração Empreendimentos" && (
                <span className="inline-block px-2 py-1 bg-amber-500 text-white text-xs font-bold rounded-full mb-1">NOVA</span>
              )}
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
            <strong>Resultado:</strong> Seguradora estruturada de forma integral, com todos os aspectos 
            regulatórios, operacionais, tecnológicos e humanos alinhados desde o início, garantindo 
            operação sustentável e escalável.
          </p>
        </div>
      </Card>

      {/* ===================== PARECER TÉCNICO - ANÁLISE MULTICRITÉRIO ===================== */}
      <Card className="p-8 bg-gradient-to-r from-emerald-50 to-teal-50 border-l-4 border-emerald-500">
        <div className="flex items-center gap-3 mb-2">
          <span className="px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded-full uppercase tracking-wide">Parecer Técnico</span>
          <span className="text-sm text-slate-500">Elaborado em 12/02/2026</span>
        </div>
        <div className="flex items-center gap-3 mb-4">
          <Target className="w-8 h-8 text-emerald-600" />
          <h2 className="text-2xl font-bold text-slate-800">
            Análise Multicritério das Propostas de Consultoria
          </h2>
        </div>
        <p className="text-slate-700 mb-6">
          Para garantir uma avaliação objetiva e imparcial, foi utilizada uma metodologia de <strong>Análise Multicritério Ponderada</strong>. 
          Foram definidos 8 critérios-chave, cada um com peso específico que reflete sua importância estratégica para o sucesso do projeto. 
          As propostas foram pontuadas de 1 a 10 em cada critério, e o score final foi calculado pela soma ponderada das notas.
        </p>

        {/* Critérios e Pesos */}
        <div className="bg-white p-6 rounded-lg border border-slate-200 mb-6">
          <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Scale className="w-5 h-5 text-emerald-600" />
            Critérios de Avaliação e Pesos
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg">
              <span className="text-lg font-bold text-emerald-700 w-12">20%</span>
              <div>
                <p className="font-semibold text-slate-800 text-sm">Custo-Benefício</p>
                <p className="text-xs text-slate-500">Relação entre custo total e valor do escopo</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-emerald-50 rounded-lg">
              <span className="text-lg font-bold text-emerald-700 w-12">20%</span>
              <div>
                <p className="font-semibold text-slate-800 text-sm">Escopo e Abrangência</p>
                <p className="text-xs text-slate-500">Profundidade e amplitude dos serviços</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
              <span className="text-lg font-bold text-blue-700 w-12">15%</span>
              <div>
                <p className="font-semibold text-slate-800 text-sm">Prazo de Entrega</p>
                <p className="text-xs text-slate-500">Velocidade para colocar a seguradora em operação</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
              <span className="text-lg font-bold text-blue-700 w-12">15%</span>
              <div>
                <p className="font-semibold text-slate-800 text-sm">Experiência / Track Record</p>
                <p className="text-xs text-slate-500">Histórico comprovado em projetos similares</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
              <span className="text-lg font-bold text-slate-600 w-12">10%</span>
              <div>
                <p className="font-semibold text-slate-800 text-sm">Modelo de Pagamento</p>
                <p className="text-xs text-slate-500">Alinhamento com o sucesso do projeto</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
              <span className="text-lg font-bold text-slate-600 w-12">10%</span>
              <div>
                <p className="font-semibold text-slate-800 text-sm">Portaria Autorizativa</p>
                <p className="text-xs text-slate-500">Comprometimento com a entrega final SUSEP</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <span className="text-lg font-bold text-gray-500 w-12">5%</span>
              <div>
                <p className="font-semibold text-slate-800 text-sm">Serviços Complementares</p>
                <p className="text-xs text-slate-500">Inclusão de TI, RH e outros</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <span className="text-lg font-bold text-gray-500 w-12">5%</span>
              <div>
                <p className="font-semibold text-slate-800 text-sm">Flexibilidade</p>
                <p className="text-xs text-slate-500">Capacidade de adaptação (ex: opção S3)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Ranking Final */}
        <div className="bg-white p-6 rounded-lg border border-slate-200 mb-6">
          <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-amber-500" />
            Ranking Final
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg border-2 border-emerald-300">
              <div className="w-10 h-10 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-lg">1</div>
              <div className="flex-1">
                <p className="font-bold text-emerald-800 text-lg">SABZ + Prevue</p>
                <p className="text-sm text-slate-600">Melhor relação custo-benefício, menor prazo (~7 meses), escopo completo</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-emerald-600">7.75</p>
                <p className="text-xs text-slate-500">R$ 400.000</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg border border-amber-200">
              <div className="w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-lg">2</div>
              <div className="flex-1">
                <p className="font-bold text-amber-800 text-lg">JH Administração</p>
                <p className="text-sm text-slate-600">Pagamento por performance, media training, flexibilidade S3/S4</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-amber-600">7.50</p>
                <p className="text-xs text-slate-500">R$ 560.000</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg border border-blue-200">
              <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">3</div>
              <div className="flex-1">
                <p className="font-bold text-blue-800 text-lg">MC Seguros</p>
                <p className="text-sm text-slate-600">Escopo mais completo (TI + RH), experiência comprovada, parceria BVix</p>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-blue-600">7.15</p>
                <p className="text-xs text-slate-500">~R$ 1.000.000</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg border border-slate-200">
              <div className="w-10 h-10 bg-purple-500 text-white rounded-full flex items-center justify-center font-bold text-lg">4</div>
              <div className="flex-1">
                <p className="font-bold text-slate-700">Way Business</p>
                <p className="text-sm text-slate-500">Foco jurídico-regulatório, menor valor total</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-slate-600">5.70</p>
                <p className="text-xs text-slate-500">R$ 250.000</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-3 bg-slate-50 rounded-lg border border-slate-200">
              <div className="w-10 h-10 bg-red-400 text-white rounded-full flex items-center justify-center font-bold text-lg">5</div>
              <div className="flex-1">
                <p className="font-bold text-slate-700">R2 Assessoria</p>
                <p className="text-sm text-slate-500">Foco contábil, escopo limitado para constituição</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold text-slate-600">4.45</p>
                <p className="text-xs text-slate-500">R$ 318.000/ano</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabela de Notas Detalhada */}
        <div className="bg-white p-6 rounded-lg border border-slate-200 mb-6">
          <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-indigo-600" />
            Notas Detalhadas por Critério (1-10)
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="text-left p-3 border border-slate-200 font-bold text-slate-700">Critério</th>
                  <th className="text-left p-3 border border-slate-200 font-bold text-slate-700">Peso</th>
                  <th className="text-center p-3 border border-slate-200 font-bold text-slate-700">MC Seguros</th>
                  <th className="text-center p-3 border border-slate-200 font-bold text-amber-700 bg-amber-50">JH Adm.</th>
                  <th className="text-center p-3 border border-slate-200 font-bold text-emerald-700 bg-emerald-50">SABZ + Prevue</th>
                  <th className="text-center p-3 border border-slate-200 font-bold text-slate-700">Way Business</th>
                  <th className="text-center p-3 border border-slate-200 font-bold text-slate-700">R2 Assess.</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-3 border border-slate-200 font-semibold text-slate-700">Custo-Benefício</td>
                  <td className="p-3 border border-slate-200 text-emerald-700 font-semibold">20%</td>
                  <td className="p-3 border border-slate-200 text-center">5</td>
                  <td className="p-3 border border-slate-200 text-center bg-amber-50">7</td>
                  <td className="p-3 border border-slate-200 text-center bg-emerald-50 font-bold text-emerald-700">8</td>
                  <td className="p-3 border border-slate-200 text-center">7</td>
                  <td className="p-3 border border-slate-200 text-center">4</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 border border-slate-200 font-semibold text-slate-700">Escopo e Abrangência</td>
                  <td className="p-3 border border-slate-200 text-emerald-700 font-semibold">20%</td>
                  <td className="p-3 border border-slate-200 text-center font-bold text-blue-700">10</td>
                  <td className="p-3 border border-slate-200 text-center bg-amber-50">8</td>
                  <td className="p-3 border border-slate-200 text-center bg-emerald-50">8</td>
                  <td className="p-3 border border-slate-200 text-center">5</td>
                  <td className="p-3 border border-slate-200 text-center">3</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-200 font-semibold text-slate-700">Prazo de Entrega</td>
                  <td className="p-3 border border-slate-200 text-blue-700 font-semibold">15%</td>
                  <td className="p-3 border border-slate-200 text-center">6</td>
                  <td className="p-3 border border-slate-200 text-center bg-amber-50">7</td>
                  <td className="p-3 border border-slate-200 text-center bg-emerald-50 font-bold text-emerald-700">9</td>
                  <td className="p-3 border border-slate-200 text-center">3</td>
                  <td className="p-3 border border-slate-200 text-center">5</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 border border-slate-200 font-semibold text-slate-700">Experiência / Track Record</td>
                  <td className="p-3 border border-slate-200 text-blue-700 font-semibold">15%</td>
                  <td className="p-3 border border-slate-200 text-center font-bold text-blue-700">9</td>
                  <td className="p-3 border border-slate-200 text-center bg-amber-50">6</td>
                  <td className="p-3 border border-slate-200 text-center bg-emerald-50">8</td>
                  <td className="p-3 border border-slate-200 text-center">7</td>
                  <td className="p-3 border border-slate-200 text-center">7</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-200 font-semibold text-slate-700">Modelo de Pagamento</td>
                  <td className="p-3 border border-slate-200 text-slate-600 font-semibold">10%</td>
                  <td className="p-3 border border-slate-200 text-center">5</td>
                  <td className="p-3 border border-slate-200 text-center bg-amber-50 font-bold text-amber-700">9</td>
                  <td className="p-3 border border-slate-200 text-center bg-emerald-50">7</td>
                  <td className="p-3 border border-slate-200 text-center">6</td>
                  <td className="p-3 border border-slate-200 text-center">5</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 border border-slate-200 font-semibold text-slate-700">Portaria Autorizativa</td>
                  <td className="p-3 border border-slate-200 text-slate-600 font-semibold">10%</td>
                  <td className="p-3 border border-slate-200 text-center">6</td>
                  <td className="p-3 border border-slate-200 text-center bg-amber-50 font-bold text-amber-700">10</td>
                  <td className="p-3 border border-slate-200 text-center bg-emerald-50">8</td>
                  <td className="p-3 border border-slate-200 text-center">8</td>
                  <td className="p-3 border border-slate-200 text-center">2</td>
                </tr>
                <tr>
                  <td className="p-3 border border-slate-200 font-semibold text-slate-700">Serviços Complementares</td>
                  <td className="p-3 border border-slate-200 text-gray-500 font-semibold">5%</td>
                  <td className="p-3 border border-slate-200 text-center font-bold text-blue-700">10</td>
                  <td className="p-3 border border-slate-200 text-center bg-amber-50">4</td>
                  <td className="p-3 border border-slate-200 text-center bg-emerald-50">4</td>
                  <td className="p-3 border border-slate-200 text-center">3</td>
                  <td className="p-3 border border-slate-200 text-center">6</td>
                </tr>
                <tr className="bg-slate-50">
                  <td className="p-3 border border-slate-200 font-semibold text-slate-700">Flexibilidade</td>
                  <td className="p-3 border border-slate-200 text-gray-500 font-semibold">5%</td>
                  <td className="p-3 border border-slate-200 text-center">6</td>
                  <td className="p-3 border border-slate-200 text-center bg-amber-50 font-bold text-amber-700">9</td>
                  <td className="p-3 border border-slate-200 text-center bg-emerald-50">6</td>
                  <td className="p-3 border border-slate-200 text-center">5</td>
                  <td className="p-3 border border-slate-200 text-center">5</td>
                </tr>
                <tr className="bg-emerald-100 font-bold">
                  <td className="p-3 border border-slate-200 text-slate-800">SCORE FINAL</td>
                  <td className="p-3 border border-slate-200 text-slate-800">100%</td>
                  <td className="p-3 border border-slate-200 text-center text-blue-700">7.15</td>
                  <td className="p-3 border border-slate-200 text-center text-amber-700 bg-amber-100">7.50</td>
                  <td className="p-3 border border-slate-200 text-center text-emerald-700 bg-emerald-200">7.75</td>
                  <td className="p-3 border border-slate-200 text-center text-slate-700">5.70</td>
                  <td className="p-3 border border-slate-200 text-center text-slate-700">4.45</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Gráficos */}
        <div className="bg-white p-6 rounded-lg border border-slate-200 mb-6">
          <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5 text-blue-600" />
            Visualizações da Análise
          </h3>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-slate-600 mb-3 font-semibold">Análise Radar e Ranking Final</p>
              <div className="rounded-lg overflow-hidden border border-slate-200">
                <Image src="/analise/grafico_analise_consultorias.png" alt="Análise Radar e Ranking Final" width={1800} height={800} className="w-full h-auto" />
              </div>
            </div>
            <div>
              <p className="text-sm text-slate-600 mb-3 font-semibold">Decomposição do Score por Critério</p>
              <div className="rounded-lg overflow-hidden border border-slate-200">
                <Image src="/analise/grafico_decomposicao_consultorias.png" alt="Decomposição do Score por Critério" width={1400} height={700} className="w-full h-auto" />
              </div>
            </div>
            <div>
              <p className="text-sm text-slate-600 mb-3 font-semibold">Custo vs. Escopo (tamanho da bolha = score final)</p>
              <div className="rounded-lg overflow-hidden border border-slate-200">
                <Image src="/analise/grafico_custo_escopo.png" alt="Custo vs Escopo" width={1000} height={700} className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>

        {/* Recomendação */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-6 rounded-lg text-white mb-6">
          <div className="flex items-center gap-3 mb-4">
            <Star className="w-7 h-7 text-amber-300" />
            <h3 className="text-xl font-bold">Recomendação Principal: SABZ + Prevue</h3>
          </div>
          <p className="text-emerald-50 mb-4">
            A combinação de um <strong className="text-white">preço competitivo (R$ 400.000)</strong>, o <strong className="text-white">menor prazo de entrega 
            do mercado (~7 meses)</strong> e um <strong className="text-white">escopo abrangente</strong> que cobre as frentes jurídica, atuarial e operacional, 
            posiciona a SABZ + Prevue como a opção de maior valor agregado. A proposta demonstra profundo entendimento do processo SUSEP 
            e oferece um caminho claro e eficiente para a obtenção da portaria autorizativa.
          </p>
        </div>

        {/* Considerações Estratégicas */}
        <div className="bg-white p-6 rounded-lg border border-slate-200">
          <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-amber-500" />
            Considerações Estratégicas
          </h3>
          <div className="space-y-4 text-sm text-slate-700">
            <p>
              Embora a SABZ + Prevue seja a recomendação principal, a <strong>JH Administração</strong> representa uma alternativa 
              extremamente forte. Seu modelo de pagamento por performance mitiga riscos financeiros, e a flexibilidade para o 
              segmento S3 pode ser uma vantagem estratégica. A diferença de pontuação entre as duas é mínima (7.75 vs 7.50), 
              e a escolha pode depender do apetite ao risco e da prioridade entre custo/prazo (SABZ) vs. pagamento por performance/flexibilidade (JH).
            </p>
            <p>
              A <strong>MC Seguros</strong>, apesar do score mais baixo devido ao custo, permanece como parceira estratégica valiosa, 
              especialmente pela expertise na estruturação de TI e RH, que não são o foco das outras duas finalistas. Uma <strong>estratégia 
              híbrida</strong>, contratando a SABZ + Prevue para o processo de constituição e a MC Seguros para projetos complementares 
              de TI/RH, poderia ser uma abordagem robusta para garantir excelência em todas as frentes.
            </p>
            <p>
              Recomenda-se uma <strong>reunião final com a JH Administração</strong> para discutir a flexibilidade de sua proposta e, 
              paralelamente, manter a <strong>MC Seguros como parceira</strong> para escopos complementares de tecnologia e recursos humanos.
            </p>
          </div>
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
