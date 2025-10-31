import { Card } from "@/components/ui/card";
import { Building2, Users, HeadphonesIcon, Wrench, TrendingUp, Network } from "lucide-react";

export default function Page() {
  return (
    <section className="container py-10 space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-aura-primary mb-3">
          Ecossistema AURA
        </h1>
        <p className="text-lg text-slate-600">
          Integração estratégica com parceiros do Grupo MMB
        </p>
      </div>

      {/* Modelo de Sinergia */}
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

      {/* Parceiros do Ecossistema */}
      <div>
        <h2 className="text-2xl font-bold text-aura-primary mb-4">
          Parceiros Estratégicos
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
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

          {/* Soma Assistência */}
          <Card className="p-6 border-l-4 border-l-red-500">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-red-100 rounded-lg">
                <HeadphonesIcon className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">
                Soma Assistência
              </h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-slate-800">Função</p>
                <p className="text-slate-600">Serviços de Assistência</p>
              </div>
              <div>
                <p className="font-semibold text-slate-800">Atuação</p>
                <p className="text-slate-600">
                  Assistência 24h e regulação de sinistros. Prestação de serviços emergenciais e 
                  gestão de sinistros para segurados.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Fluxo Operacional */}
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

            <div className="flex items-start gap-4">
              <div className="p-2 bg-red-100 rounded-lg flex-shrink-0">
                <span className="text-lg font-bold text-red-600">5</span>
              </div>
              <div>
                <p className="font-bold text-slate-800">Sinistros</p>
                <p className="text-slate-600">
                  <strong>Soma Assistência</strong> presta assistência 24h, regula sinistros e 
                  coordena prestadores de serviço
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Benefícios da Integração */}
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
