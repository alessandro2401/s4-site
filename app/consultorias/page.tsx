import { Card } from "@/components/ui/card";
import { Building2, CheckCircle2, Shield, TrendingUp, Users, Cpu, FileText, Download, Calendar, Lock, Scale, AlertTriangle, Globe, FileCheck, ChevronDown, ChevronUp } from "lucide-react";

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

      {/* Documentação da Parceria BVix - SEÇÃO EXPANDIDA */}
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

          {/* Agrupamento por Categoria */}
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
