import { Card } from "@/components/ui/card";
import { Building2, Users, HeadphonesIcon, Wrench, TrendingUp, Network, Shield, Store, FileText, Scale, Landmark, Calendar, DollarSign, CheckCircle2, AlertTriangle, ArrowRight, BookOpen } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <section className="container py-10 space-y-10">
      <div>
        <h1 className="text-4xl font-bold text-aura-primary mb-3">
          Ecossistema AURA
        </h1>
        <p className="text-lg text-slate-600">
          Integração estratégica com parceiros do Grupo MMB
        </p>
        <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
          <p className="text-sm font-semibold text-blue-900 mb-1">Modelo Operacional Temporário</p>
          <p className="text-sm text-blue-800">
            Enquanto a AURA Seguradora aguarda autorização final da SUSEP, o ecossistema opera 
            em parceria com <strong>Potere Seguro Auto</strong> (MGA) e 
            <strong> Soluções Corretora</strong> (intermediadora).
          </p>
        </div>
      </div>

      {/* ========== PROJETO ADMINISTRADORA PPM ========== */}
      <div className="relative">
        <div className="absolute -top-3 left-6 z-10">
          <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
            NOVO PROJETO
          </span>
        </div>
        <Card className="p-0 overflow-hidden border-2 border-emerald-200 shadow-lg">
          {/* Header */}
          <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 p-8 text-white">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                <Landmark className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold">
                  Administradora de Proteção Patrimonial Mutualista
                </h2>
                <p className="text-emerald-100 text-sm mt-1">
                  Projeto de Constituição — Subsistema de Proteção Patrimonial Mutualista
                </p>
              </div>
            </div>
            <p className="text-emerald-50 leading-relaxed">
              O Grupo MMB está avançando na constituição de uma <strong>Administradora de Proteção Patrimonial 
              Mutualista</strong>, conforme previsto na <strong>Lei Complementar nº 213/2025</strong>. Este novo 
              ente regulado será constituído sob a forma de Sociedade Anônima (S/A), com objeto social exclusivo 
              de gerir operações de proteção patrimonial mutualista, e deverá ser previamente autorizado a 
              funcionar pela SUSEP.
            </p>
          </div>

          {/* Conteúdo Principal */}
          <div className="p-8 space-y-8">
            
            {/* Base Legal */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Scale className="w-5 h-5 text-emerald-600" />
                <h3 className="text-lg font-bold text-slate-800">Base Legal e Regulatória</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                  <p className="font-semibold text-emerald-800 text-sm">Lei Complementar nº 213/2025</p>
                  <p className="text-slate-600 text-sm mt-1">
                    Trata das operações de proteção patrimonial mutualistas. Promoveu alteração do art. 32 
                    do Decreto-Lei nº 73/66, em especial o inciso XI, que estabelece critérios para constituição 
                    das administradoras.
                  </p>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <p className="font-semibold text-blue-800 text-sm">Decreto-Lei nº 73/66 (Art. 88-E e 88-H)</p>
                  <p className="text-slate-600 text-sm mt-1">
                    <strong>Art. 88-H:</strong> Administradora deve ser S/A, com objeto social exclusivo, autorizada pela SUSEP.<br/>
                    <strong>Art. 88-E:</strong> Estatutos devem prever critérios para constituição do grupo de PPM e 
                    seleção/substituição da administradora.
                  </p>
                </div>
              </div>
              <div className="mt-3 p-3 bg-amber-50 border border-amber-200 rounded-lg flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-amber-800">
                  <strong>Nota:</strong> A regulamentação infralegal por parte do CNSP e da SUSEP ainda está em curso. 
                  A proposta contempla a Fase 1 (pré-processual) com base na minuta de Resolução CNSP já disponibilizada.
                </p>
              </div>
            </div>

            {/* Requisitos */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                <h3 className="text-lg font-bold text-slate-800">Requisitos para Constituição</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="p-4 bg-slate-50 rounded-lg text-center">
                  <Building2 className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                  <p className="font-semibold text-slate-800 text-sm">Sociedade Anônima</p>
                  <p className="text-xs text-slate-500 mt-1">Forma jurídica obrigatória (S/A)</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg text-center">
                  <Shield className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                  <p className="font-semibold text-slate-800 text-sm">Objeto Exclusivo</p>
                  <p className="text-xs text-slate-500 mt-1">Gerir operação de PPM exclusivamente</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg text-center">
                  <Landmark className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                  <p className="font-semibold text-slate-800 text-sm">Autorização SUSEP</p>
                  <p className="text-xs text-slate-500 mt-1">Previamente autorizada a funcionar</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-lg text-center">
                  <FileText className="w-6 h-6 text-emerald-600 mx-auto mb-2" />
                  <p className="font-semibold text-slate-800 text-sm">Estatuto Específico</p>
                  <p className="text-xs text-slate-500 mt-1">Critérios de constituição e governança</p>
                </div>
              </div>
            </div>

            {/* Proposta de Consultoria */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-5 h-5 text-emerald-600" />
                <h3 className="text-lg font-bold text-slate-800">Proposta de Consultoria — JH Administração</h3>
              </div>
              <p className="text-slate-600 text-sm mb-4">
                Proposta complementar de prestação de serviços apresentada pela <strong>JH Administração Empreendimentos 
                Consultoria e Participações LTDA</strong> (CNPJ: 28.993.821/0001-95), datada de 06/02/2026, endereçada ao 
                Sr. Renner Fidélis, com objetivo de realizar estudo de viabilidade e estruturação de projeto técnico e 
                jurídico para constituição da Administradora.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Fase 1 */}
                <div className="border border-emerald-200 rounded-xl overflow-hidden">
                  <div className="bg-emerald-600 text-white p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-emerald-200 uppercase tracking-wider">Fase 1</p>
                        <p className="font-bold text-lg">Instrução Pré-Processual</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold">R$ 196.000</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 space-y-4">
                    <div>
                      <p className="font-semibold text-slate-800 text-sm mb-2">Escopo dos Trabalhos:</p>
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li className="flex items-start gap-2">
                          <ArrowRight className="w-3.5 h-3.5 text-emerald-500 mt-1 flex-shrink-0" />
                          <span>Estudo de viabilidade técnica, jurídica e econômica para constituição de Administradora no Subsistema de PPM</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="w-3.5 h-3.5 text-emerald-500 mt-1 flex-shrink-0" />
                          <span>Elaboração de Plano de Negócios com base na minuta de Resolução CNSP</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="w-3.5 h-3.5 text-emerald-500 mt-1 flex-shrink-0" />
                          <span>Avaliação prévia da viabilidade econômica individual dos acionistas/investidores (origem e lastro financeiro comprovável)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="w-3.5 h-3.5 text-emerald-500 mt-1 flex-shrink-0" />
                          <span>Análise detalhada e definição conjunta dos integrantes do futuro grupo de controle</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="w-3.5 h-3.5 text-emerald-500 mt-1 flex-shrink-0" />
                          <span>Esboço do Plano de Negócios dentro dos padrões regulatórios exigidos</span>
                        </li>
                      </ul>
                    </div>
                    <div className="border-t pt-3">
                      <p className="font-semibold text-slate-800 text-sm mb-2">Condições de Pagamento:</p>
                      <div className="space-y-1.5 text-sm">
                        <div className="flex justify-between items-center p-2 bg-emerald-50 rounded">
                          <span className="text-slate-600">Na assinatura (até 5 dias)</span>
                          <span className="font-semibold text-emerald-700">R$ 76.000</span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-slate-50 rounded">
                          <span className="text-slate-600">30 dias após assinatura</span>
                          <span className="font-semibold text-slate-700">R$ 40.000</span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-slate-50 rounded">
                          <span className="text-slate-600">60 dias após assinatura</span>
                          <span className="font-semibold text-slate-700">R$ 40.000</span>
                        </div>
                        <div className="flex justify-between items-center p-2 bg-slate-50 rounded">
                          <span className="text-slate-600">90 dias após assinatura</span>
                          <span className="font-semibold text-slate-700">R$ 40.000</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 border-t pt-3">
                      <Calendar className="w-4 h-4" />
                      <span>Prazo estimado: <strong>120 a 180 dias</strong></span>
                    </div>
                  </div>
                </div>

                {/* Fase 2 */}
                <div className="border border-slate-200 rounded-xl overflow-hidden">
                  <div className="bg-slate-600 text-white p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-slate-300 uppercase tracking-wider">Fase 2</p>
                        <p className="font-bold text-lg">Instrução Processual SUSEP</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold">A definir</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-5 space-y-4">
                    <div>
                      <p className="font-semibold text-slate-800 text-sm mb-2">Escopo dos Trabalhos:</p>
                      <ul className="space-y-2 text-sm text-slate-600">
                        <li className="flex items-start gap-2">
                          <ArrowRight className="w-3.5 h-3.5 text-slate-400 mt-1 flex-shrink-0" />
                          <span>A definir conforme legislação e regulamentação futuras do CNSP</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="w-3.5 h-3.5 text-slate-400 mt-1 flex-shrink-0" />
                          <span>Resoluções, Circulares e Instruções da SUSEP a serem publicadas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="w-3.5 h-3.5 text-slate-400 mt-1 flex-shrink-0" />
                          <span>Acompanhamento do processo junto à autarquia reguladora</span>
                        </li>
                      </ul>
                    </div>
                    <div className="border-t pt-3">
                      <p className="font-semibold text-slate-800 text-sm mb-2">Condições de Pagamento:</p>
                      <div className="p-3 bg-amber-50 rounded-lg border border-amber-100">
                        <p className="text-sm text-amber-800">
                          Valores a definir a partir da criação e regulamentação da figura da Administradora 
                          junto ao Subsistema da Proteção Patrimonial Mutualista.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 border-t pt-3">
                      <Calendar className="w-4 h-4" />
                      <span>Prazo: <strong>Conforme prazos da autarquia</strong></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Observações */}
              <div className="mt-4 p-4 bg-blue-50 border border-blue-100 rounded-lg">
                <p className="text-sm font-semibold text-blue-800 mb-2">Observações Importantes:</p>
                <ul className="space-y-1.5 text-sm text-blue-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">•</span>
                    <span>Caso os interessados contratem a JH Consultoria também para constituição de sociedade seguradora S3 ou S4, o valor da Fase 1 desta proposta permanece R$ 196.000,00.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">•</span>
                    <span>Caso optem apenas pelo escopo da administradora de PPM, será estabelecido novo valor em consonância com a proposta de constituição de seguradora.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 mt-0.5">•</span>
                    <span>Proposta com validade de 5 dias úteis a partir de 06/02/2026.</span>
                  </li>
                </ul>
              </div>

              {/* Download */}
              <div className="mt-4 flex items-center gap-4">
                <a 
                  href="/documentos/Proposta-Consultoria-Administradora-PPM.pdf" 
                  target="_blank"
                  className="inline-flex items-center gap-2 bg-emerald-600 text-white px-5 py-2.5 rounded-lg hover:bg-emerald-700 transition-colors text-sm font-medium"
                >
                  <FileText className="w-4 h-4" />
                  Baixar Proposta Completa (PDF)
                </a>
              </div>
            </div>

            {/* Papel no Ecossistema */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-100">
              <h3 className="font-bold text-slate-800 mb-3">Papel da Administradora no Ecossistema AURA</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Users className="w-6 h-6 text-emerald-600" />
                  </div>
                  <p className="font-semibold text-sm text-slate-800">Front-Office Comunitário</p>
                  <p className="text-xs text-slate-500 mt-1">Canal de distribuição e porta de entrada para grupos mutualistas</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Network className="w-6 h-6 text-teal-600" />
                  </div>
                  <p className="font-semibold text-sm text-slate-800">Gestão Operacional</p>
                  <p className="text-xs text-slate-500 mt-1">Função relacional e administrativa dos grupos de proteção patrimonial</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Shield className="w-6 h-6 text-cyan-600" />
                  </div>
                  <p className="font-semibold text-sm text-slate-800">Lastro Regulatório</p>
                  <p className="text-xs text-slate-500 mt-1">AURA Seguradora fornece cobertura plena e conformidade SUSEP</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* ========== MODELO HÍBRIDO ========== */}
      <Card className="p-8 bg-gradient-to-r from-aura-primary/10 to-transparent">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-aura-primary/10 rounded-lg">
            <Network className="w-6 h-6 text-aura-primary" />
          </div>
          <h2 className="text-2xl font-bold text-aura-primary">
            Modelo Híbrido de Integração
          </h2>
        </div>
        <p className="text-slate-700 mb-4">
          A AURA Seguradora S/A é o <strong>eixo regulado de proteção do Grupo MMB</strong>, conectando-se 
          operacionalmente a entidades especializadas que formam um ecossistema completo de serviços.
        </p>
        <div className="bg-white rounded-lg p-6">
          <h3 className="font-bold text-slate-800 mb-3">Como Funciona</h3>
          <div className="space-y-2 text-slate-700">
            <p className="flex items-start gap-2">
              <span className="text-aura-primary mt-1">•</span>
              <span>
                <strong>Mutualismo como porta de entrada comunitária:</strong> Administradora Mutualista 
                atua como canal de distribuição (front-office)
              </span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-aura-primary mt-1">•</span>
              <span>
                <strong>AURA Seguradora oferece lastro técnico e regulatório:</strong> Funciona como 
                back-office regulado, responsável pela cobertura plena
              </span>
            </p>
            <p className="flex items-start gap-2">
              <span className="text-aura-primary mt-1">•</span>
              <span>
                <strong>Administradora mantém gestão operacional:</strong> Continua com função relacional 
                e administrativa dos grupos mutualistas
              </span>
            </p>
          </div>
        </div>
      </Card>

      {/* ========== PARCEIROS ESTRATÉGICOS ========== */}
      <div>
        <h2 className="text-2xl font-bold text-aura-primary mb-4">
          Parceiros Estratégicos
        </h2>
        <div className="grid md:grid-cols-2 gap-6">


          {/* Soluções Corretora */}
          <Card className="p-6 border-l-4 border-l-teal-500 bg-teal-50/50">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-teal-100 rounded-lg">
                <Store className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">
                Soluções Corretora de Seguros
              </h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-slate-800">Função</p>
                <p className="text-slate-600">Intermediadora / Corretora</p>
              </div>
              <div>
                <p className="font-semibold text-slate-800">Atuação</p>
                <p className="text-slate-600">
                  Intermediação comercial entre segurados e seguradora. Canal de distribuição e 
                  relacionamento com clientes finais no modelo operacional temporário.
                </p>
              </div>
            </div>
          </Card>

          {/* Grupo MMB Holding */}
          <Card className="p-6 border-l-4 border-l-purple-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Building2 className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">
                Grupo MMB Holding S/A
              </h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-slate-800">Função</p>
                <p className="text-slate-600">Controlador Financeiro e Estratégico</p>
              </div>
              <div>
                <p className="font-semibold text-slate-800">Atuação</p>
                <p className="text-slate-600">
                  Governança corporativa e direcionamento estratégico do grupo. Acionista controlador 
                  da AURA Seguradora.
                </p>
              </div>
            </div>
          </Card>

          {/* Potere */}
          <Card className="p-6 border-l-4 border-l-blue-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">
                Potere Representações e Corretagem
              </h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-slate-800">Função</p>
                <p className="text-slate-600">MGA/Representante Comercial</p>
              </div>
              <div>
                <p className="font-semibold text-slate-800">Atuação</p>
                <p className="text-slate-600">
                  Canal técnico de subscrição, distribuição e gestão de apólices. Responsável pela 
                  interface comercial e técnica com segurados.
                </p>
              </div>
            </div>
          </Card>

          {/* Movimento Mais Brasil */}
          <Card className="p-6 border-l-4 border-l-green-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">
                Movimento Mais Brasil
              </h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-slate-800">Função</p>
                <p className="text-slate-600">Associação Mutualista</p>
              </div>
              <div>
                <p className="font-semibold text-slate-800">Atuação</p>
                <p className="text-slate-600">
                  Origem e manutenção de grupos de proteção. Canal de entrada comunitária com valores 
                  mutualistas.
                </p>
              </div>
            </div>
          </Card>

          {/* Alpha Proteções */}
          <Card className="p-6 border-l-4 border-l-amber-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-amber-100 rounded-lg">
                <Wrench className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">
                Alpha Proteções e Benefícios
              </h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-slate-800">Função</p>
                <p className="text-slate-600">Backoffice e Atendimento</p>
              </div>
              <div>
                <p className="font-semibold text-slate-800">Atuação</p>
                <p className="text-slate-600">
                  Apoio técnico e administrativo. Gestão operacional de processos internos e suporte 
                  aos canais de distribuição.
                </p>
              </div>
            </div>
          </Card>


        </div>
      </div>

      {/* ========== FLUXO OPERACIONAL ========== */}
      <div>
        <h2 className="text-2xl font-bold text-aura-primary mb-4">
          Fluxo Operacional Integrado
        </h2>
        <Card className="p-6">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-green-100 rounded-lg flex-shrink-0">
                <span className="text-lg font-bold text-green-600">1</span>
              </div>
              <div>
                <p className="font-bold text-slate-800">Captação</p>
                <p className="text-slate-600">
                  <strong>Movimento Mais Brasil</strong> capta interessados através de grupos mutualistas 
                  e canais comunitários
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 bg-blue-100 rounded-lg flex-shrink-0">
                <span className="text-lg font-bold text-blue-600">2</span>
              </div>
              <div>
                <p className="font-bold text-slate-800">Subscrição</p>
                <p className="text-slate-600">
                  <strong>Potere</strong> realiza análise técnica, subscrição e emissão de apólices 
                  em nome da AURA Seguradora
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 bg-purple-100 rounded-lg flex-shrink-0">
                <span className="text-lg font-bold text-purple-600">3</span>
              </div>
              <div>
                <p className="font-bold text-slate-800">Cobertura</p>
                <p className="text-slate-600">
                  <strong>AURA Seguradora</strong> assume o risco, mantém reservas técnicas e garante 
                  conformidade regulatória SUSEP
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-2 bg-amber-100 rounded-lg flex-shrink-0">
                <span className="text-lg font-bold text-amber-600">4</span>
              </div>
              <div>
                <p className="font-bold text-slate-800">Gestão</p>
                <p className="text-slate-600">
                  <strong>Alpha Proteções</strong> cuida do backoffice, atendimento e processos 
                  administrativos
                </p>
              </div>
            </div>


          </div>
        </Card>
      </div>

      {/* ========== BENEFÍCIOS ========== */}
      <Card className="p-8 bg-gradient-to-r from-green-50 to-blue-50">
        <h2 className="text-2xl font-bold text-slate-800 mb-4">
          Benefícios da Integração
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-bold text-slate-800 mb-2">Para o Segurado</h3>
            <ul className="space-y-1 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Atendimento humanizado e próximo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Segurança regulatória SUSEP</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Assistência 24h especializada</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span>Valores mutualistas preservados</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-slate-800 mb-2">Para o Grupo</h3>
            <ul className="space-y-1 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Sinergia operacional</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Especialização por função</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Economia de escala</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">✓</span>
                <span>Governança integrada</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-slate-800 mb-2">Para o Mercado</h3>
            <ul className="space-y-1 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">✓</span>
                <span>Modelo inovador S4</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">✓</span>
                <span>Inclusão financeira</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">✓</span>
                <span>Transparência e compliance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">✓</span>
                <span>Sustentabilidade do modelo</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </section>
  );
}
