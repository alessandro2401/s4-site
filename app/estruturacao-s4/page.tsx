import { Card } from "@/components/ui/card";
import { Building2, Users, Cpu, FileText, CheckCircle2, TrendingUp, Shield, Briefcase } from "lucide-react";

export default function EstruturacaoS4Page() {
  return (
    <section className="container py-10 space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-aura-primary mb-3">
          Estruturação Integral de Seguradora S4
        </h1>
        <p className="text-lg text-slate-600">
          Capacidade completa de abertura, estruturação e operacionalização de seguradoras especializadas
        </p>
      </div>

      {/* Introdução */}
      <Card className="p-6 bg-gradient-to-r from-aura-primary/10 to-transparent">
        <h2 className="text-2xl font-bold text-aura-primary mb-4">
          Nossa Expertise em Constituições S4
        </h2>
        <p className="text-slate-700 mb-4">
          A <strong>Administradora Mutual</strong>, em parceria com a <strong>MC Seguros Consultoria</strong>, 
          oferece um serviço completo de estruturação de seguradoras do segmento S4 (Seguradoras Especializadas), 
          abrangendo desde a viabilidade inicial até a operação plena autorizada pela SUSEP.
        </p>
        <p className="text-slate-700">
          Nossa <strong>visão holística</strong> integra aspectos regulatórios, operacionais, tecnológicos e 
          humanos, garantindo que a seguradora nasça com bases sólidas e sustentáveis para crescimento de longo prazo.
        </p>
      </Card>

      {/* Pilares da Estruturação */}
      <div>
        <h2 className="text-2xl font-bold text-aura-primary mb-4">
          Pilares da Estruturação Integral
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Viabilidade */}
          <Card className="p-6 border-l-4 border-l-green-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-green-100 rounded-lg">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">
                1. Viabilidade Estratégica
              </h3>
            </div>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Análise de mercado e posicionamento competitivo</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Modelagem atuarial e precificação de produtos</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Projeções financeiras e análise de retorno (ROI)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span>Estrutura de capital social e acionistas</span>
              </li>
            </ul>
          </Card>

          {/* RH e Governança */}
          <Card className="p-6 border-l-4 border-l-blue-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-100 rounded-lg">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">
                2. Recursos Humanos e Governança
              </h3>
            </div>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Estruturação de Conselho de Administração</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Recrutamento de Diretoria Executiva qualificada</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Políticas de compliance e controles internos</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                <span>Treinamento e capacitação de equipes</span>
              </li>
            </ul>
          </Card>

          {/* TI e Sistemas */}
          <Card className="p-6 border-l-4 border-l-purple-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-purple-100 rounded-lg">
                <Cpu className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">
                3. Tecnologia da Informação
              </h3>
            </div>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                <span>Sistema de gestão integrado (core insurance)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                <span>Integração com SUSEP DataHub</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                <span>Plataforma de subscrição e precificação</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0 mt-0.5" />
                <span>Canais digitais (site, app, chatbot)</span>
              </li>
            </ul>
          </Card>

          {/* Processos */}
          <Card className="p-6 border-l-4 border-l-amber-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-amber-100 rounded-lg">
                <FileText className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">
                4. Processos Operacionais
              </h3>
            </div>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <span>Mapeamento e documentação de processos</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <span>Fluxos de subscrição e emissão</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <span>Gestão de sinistros e regulação</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <span>Controles financeiros e contábeis SUSEP</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>

      {/* Cronograma de Implementação */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold text-aura-primary mb-4">
          Cronograma de Implementação
        </h2>
        <p className="text-slate-700 mb-6">
          Processo completo de constituição de seguradora S4, desde a concepção até a operação autorizada pela SUSEP.
        </p>

        <div className="space-y-4">
          {/* Fase 1 */}
          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-100 rounded-lg flex-shrink-0">
              <span className="text-sm font-bold text-blue-600">Mês 1-2</span>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-slate-800 mb-2">Fase 1: Viabilidade e Planejamento</h3>
              <ul className="space-y-1 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Estudo de viabilidade técnica e financeira</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Definição de produtos e público-alvo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Estruturação societária e governança</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Elaboração de Business Plan</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Fase 2 */}
          <div className="flex items-start gap-4">
            <div className="p-3 bg-purple-100 rounded-lg flex-shrink-0">
              <span className="text-sm font-bold text-purple-600">Mês 3-4</span>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-slate-800 mb-2">Fase 2: Documentação Regulatória</h3>
              <ul className="space-y-1 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-purple-600">•</span>
                  <span>Elaboração de Estatuto Social</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600">•</span>
                  <span>Notas técnicas atuariais dos produtos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600">•</span>
                  <span>Condições gerais e contratuais</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-600">•</span>
                  <span>Políticas de compliance e controles internos</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Fase 3 */}
          <div className="flex items-start gap-4">
            <div className="p-3 bg-green-100 rounded-lg flex-shrink-0">
              <span className="text-sm font-bold text-green-600">Mês 5-6</span>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-slate-800 mb-2">Fase 3: Infraestrutura e Tecnologia</h3>
              <ul className="space-y-1 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600">•</span>
                  <span>Implementação de sistema core insurance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">•</span>
                  <span>Integração com SUSEP DataHub</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">•</span>
                  <span>Desenvolvimento de canais digitais</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600">•</span>
                  <span>Testes e homologação de sistemas</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Fase 4 */}
          <div className="flex items-start gap-4">
            <div className="p-3 bg-amber-100 rounded-lg flex-shrink-0">
              <span className="text-sm font-bold text-amber-600">Mês 7-9</span>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-slate-800 mb-2">Fase 4: Processo SUSEP</h3>
              <ul className="space-y-1 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">•</span>
                  <span>Protocolo de pedido de autorização na SUSEP</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">•</span>
                  <span>Análise e diligências da SUSEP</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">•</span>
                  <span>Adequações e complementações solicitadas</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">•</span>
                  <span>Aprovação e publicação no DOU</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Fase 5 */}
          <div className="flex items-start gap-4">
            <div className="p-3 bg-red-100 rounded-lg flex-shrink-0">
              <span className="text-sm font-bold text-red-600">Mês 10-12</span>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-slate-800 mb-2">Fase 5: Operação e Go-Live</h3>
              <ul className="space-y-1 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span>Contratação e treinamento de equipes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span>Estruturação de canais de distribuição</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span>Lançamento comercial dos produtos</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600">•</span>
                  <span>Monitoramento e ajustes operacionais</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
          <p className="text-sm text-blue-800">
            <strong>⏱️ Prazo Total:</strong> 10 a 12 meses desde o início do projeto até a operação plena autorizada pela SUSEP.
          </p>
        </div>
      </Card>

      {/* Parceria BVix */}
      <Card className="p-6 bg-gradient-to-r from-cyan-50 to-blue-50 border-l-4 border-cyan-500">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="w-8 h-8 text-cyan-600" />
          <h2 className="text-2xl font-bold text-slate-800">
            Parceria Estratégica com BVix Seguradora
          </h2>
        </div>
        <p className="text-slate-700 mb-4">
          Durante o processo de autorização da AURA Seguradora pela SUSEP, estabelecemos parceria estratégica 
          com a <strong>BVix Seguradora</strong> para operacionalização imediata dos produtos desenvolvidos.
        </p>
        <div className="space-y-3">
          <div>
            <h3 className="font-bold text-slate-800 mb-2">Benefícios da Parceria:</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                <span><strong>Aprovação SUSEP acelerada:</strong> BVix já possui autorização para operar no segmento S4</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                <span><strong>Validação de mercado:</strong> Produtos testados e ajustados antes da operação própria</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                <span><strong>Geração de receita imediata:</strong> Operação comercial enquanto aguarda autorização</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                <span><strong>Transferência de carteira:</strong> Migração suave para AURA após autorização</span>
              </li>
            </ul>
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
        </div>
      </Card>

      {/* Investimento */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold text-aura-primary mb-4 flex items-center gap-2">
          <Briefcase className="w-6 h-6" />
          Estrutura de Investimento
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-50 p-4 rounded-lg">
            <h3 className="font-bold text-slate-800 mb-3">Capital Social Mínimo</h3>
            <p className="text-3xl font-bold text-aura-primary mb-2">R$ 3,5 milhões</p>
            <p className="text-sm text-slate-600">
              Conforme Resolução CNSP nº 416/2021 para seguradoras S4
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg">
            <h3 className="font-bold text-slate-800 mb-3">Investimento em Estruturação</h3>
            <p className="text-3xl font-bold text-aura-primary mb-2">R$ 700.000</p>
            <p className="text-sm text-slate-600">
              Consultoria MC Seguros + serviços complementares (jurídico, atuária, TI)
            </p>
          </div>
        </div>

        <div className="mt-6 bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
          <h3 className="font-bold text-green-900 mb-2">Investimento Total Estimado</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-green-100">
                  <th className="p-2 text-left text-green-900">Item</th>
                  <th className="p-2 text-right text-green-900">Valor</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr className="border-b">
                  <td className="p-2">Capital Social (SUSEP)</td>
                  <td className="p-2 text-right">R$ 3.500.000,00</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Consultoria MC Seguros</td>
                  <td className="p-2 text-right">R$ 700.000,00</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Jurídico e Atuária</td>
                  <td className="p-2 text-right">R$ 300.000,00</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Tecnologia e Sistemas</td>
                  <td className="p-2 text-right">R$ 400.000,00</td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">Infraestrutura e RH</td>
                  <td className="p-2 text-right">R$ 200.000,00</td>
                </tr>
                <tr className="border-b bg-green-100">
                  <td className="p-2 font-bold text-green-900">Total</td>
                  <td className="p-2 text-right font-bold text-green-900">R$ 5.100.000,00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-green-800 mt-3">
            * Valores estimados e podem variar conforme escopo e complexidade do projeto
          </p>
        </div>
      </Card>

      {/* Diferenciais Competitivos */}
      <Card className="p-6 bg-gradient-to-r from-slate-50 to-blue-50">
        <h2 className="text-2xl font-bold text-aura-primary mb-4">
          Diferenciais da Nossa Estruturação
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-bold text-slate-800 mb-2">🎯 Visão Holística</h3>
            <p className="text-sm text-slate-700">
              Integramos todos os aspectos da seguradora: regulatório, operacional, tecnológico e humano, 
              garantindo coesão e eficiência desde o início.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
            <h3 className="font-bold text-slate-800 mb-2">🤝 Parcerias Consolidadas</h3>
            <p className="text-sm text-slate-700">
              Rede de parceiros especializados (BVix, R2 Assessoria, Way Business) que aceleram 
              aprovações e reduzem riscos.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
            <h3 className="font-bold text-slate-800 mb-2">💡 Experiência Prática</h3>
            <p className="text-sm text-slate-700">
              Equipe com vivência real em constituições S4, conhecimento profundo dos processos 
              SUSEP e melhores práticas do mercado.
            </p>
          </div>

          <div className="bg-white p-4 rounded-lg border-l-4 border-amber-500">
            <h3 className="font-bold text-slate-800 mb-2">🚀 Modelo Operacional Temporário</h3>
            <p className="text-sm text-slate-700">
              Operação imediata via BVix enquanto aguarda autorização, gerando receita e 
              validando produtos antes da operação própria.
            </p>
          </div>
        </div>
      </Card>

      {/* Call to Action */}
      <Card className="p-8 bg-gradient-to-r from-aura-primary to-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-4">
          Pronto para Estruturar sua Seguradora S4?
        </h2>
        <p className="text-lg mb-6 opacity-90">
          Entre em contato com a MC Seguros Consultoria e Administradora Mutual para 
          iniciar seu projeto de constituição de seguradora especializada.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="/contato" 
            className="px-8 py-3 bg-white text-aura-primary rounded-lg font-bold hover:bg-slate-100 transition-colors"
          >
            Fale Conosco
          </a>
          <a 
            href="/consultorias" 
            className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-bold hover:bg-white/10 transition-colors"
          >
            Ver Consultorias
          </a>
        </div>
      </Card>
    </section>
  );
}
