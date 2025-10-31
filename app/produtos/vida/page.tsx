import { Card } from "@/components/ui/card";
import { Heart, Shield, Clock, Users, Check, AlertCircle } from "lucide-react";

export default function Page() {
  return (
    <section className="container py-10 space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-aura-primary mb-3">
          Seguro de Vida Mensal Inclusivo AURA
        </h1>
        <p className="text-lg text-slate-600">
          Produto de risco puro com coberturas acessíveis, contratação simplificada 
          e renovação mensal automática. Proteção para você e sua família.
        </p>
      </div>

      {/* Público-Alvo */}
      <Card className="p-6 bg-gradient-to-r from-aura-primary/5 to-transparent">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-aura-primary/10 rounded-lg">
            <Users className="w-6 h-6 text-aura-primary" />
          </div>
          <h2 className="text-2xl font-bold text-aura-primary">
            Público-Alvo
          </h2>
        </div>
        <p className="text-slate-700 mb-4">
          Seguro de vida inclusivo desenvolvido especialmente para as <strong>classes C, D e E</strong>, 
          com cobertura acessível e processo de adesão simples.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-slate-700">Classes Sociais</p>
            <p className="text-slate-600">C, D e E</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-slate-700">Vigência</p>
            <p className="text-slate-600">30 dias (mensal)</p>
          </div>
          <div className="bg-white p-4 rounded-lg">
            <p className="font-semibold text-slate-700">Renovação</p>
            <p className="text-slate-600">Automática</p>
          </div>
        </div>
      </Card>

      {/* Coberturas */}
      <div>
        <h2 className="text-2xl font-bold text-aura-primary mb-4">
          Coberturas Disponíveis
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 border-2 border-aura-primary">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-aura-primary/10 rounded-lg">
                <Shield className="w-6 h-6 text-aura-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Coberturas Básicas</h3>
            </div>
            <p className="text-sm text-slate-600 mb-4">
              Coberturas incluídas em todos os planos:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-800">Morte Natural</p>
                  <p className="text-sm text-slate-600">Indenização em caso de falecimento por causas naturais</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-800">Morte Acidental</p>
                  <p className="text-sm text-slate-600">Indenização em caso de falecimento por acidente</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-800">IPA - Invalidez Permanente por Acidente</p>
                  <p className="text-sm text-slate-600">Indenização proporcional ao grau de invalidez</p>
                </div>
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-aura-primary/10 rounded-lg">
                <Heart className="w-6 h-6 text-aura-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Coberturas Opcionais</h3>
            </div>
            <p className="text-sm text-slate-600 mb-4">
              Coberturas adicionais que podem ser contratadas:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-slate-800">Doenças Graves Básicas</p>
                  <p className="text-sm text-slate-600">
                    Cobertura para diagnóstico de doenças graves especificadas no contrato
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-slate-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm text-slate-500 italic">
                    Outras coberturas opcionais podem ser adicionadas conforme disponibilidade
                  </p>
                </div>
              </li>
            </ul>
          </Card>
        </div>
      </div>

      {/* Carências */}
      <Card className="p-6 bg-slate-50">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-aura-primary/10 rounded-lg">
            <Clock className="w-6 h-6 text-aura-primary" />
          </div>
          <h2 className="text-2xl font-bold text-aura-primary">
            Prazos de Carência
          </h2>
        </div>
        <p className="text-slate-700 mb-4">
          Períodos de espera para utilização das coberturas após a contratação:
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-5 rounded-lg border-l-4 border-yellow-500">
            <p className="text-lg font-bold text-slate-800 mb-2">Morte Natural</p>
            <p className="text-3xl font-bold text-yellow-600 mb-2">30 dias</p>
            <p className="text-sm text-slate-600">
              Carência de 30 dias para cobertura de morte por causas naturais
            </p>
          </div>
          <div className="bg-white p-5 rounded-lg border-l-4 border-green-500">
            <p className="text-lg font-bold text-slate-800 mb-2">Morte Acidental</p>
            <p className="text-3xl font-bold text-green-600 mb-2">Isento</p>
            <p className="text-sm text-slate-600">
              Sem carência para cobertura de morte por acidente (cobertura imediata)
            </p>
          </div>
        </div>
      </Card>

      {/* Diferenciais */}
      <div>
        <h2 className="text-2xl font-bold text-aura-primary mb-4">
          Diferenciais AURA Vida Mensal
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="p-4 flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold text-slate-800">Cobertura Inclusiva</p>
              <p className="text-sm text-slate-600">Acessível para todas as classes sociais</p>
            </div>
          </Card>
          <Card className="p-4 flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold text-slate-800">Adesão Simples</p>
              <p className="text-sm text-slate-600">Processo de contratação facilitado</p>
            </div>
          </Card>
          <Card className="p-4 flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold text-slate-800">Renovação Automática</p>
              <p className="text-sm text-slate-600">Renovação mensal sem burocracia</p>
            </div>
          </Card>
          <Card className="p-4 flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold text-slate-800">Produto de Risco Puro</p>
              <p className="text-sm text-slate-600">Sem resgate, foco total em proteção</p>
            </div>
          </Card>
          <Card className="p-4 flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold text-slate-800">Vigência Mensal</p>
              <p className="text-sm text-slate-600">Flexibilidade com renovação a cada 30 dias</p>
            </div>
          </Card>
          <Card className="p-4 flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold text-slate-800">Coberturas Opcionais</p>
              <p className="text-sm text-slate-600">Personalize sua proteção</p>
            </div>
          </Card>
        </div>
      </div>

      {/* Características do Produto */}
      <div>
        <h2 className="text-2xl font-bold text-aura-primary mb-4">
          Características do Produto
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-bold text-slate-800 mb-3">Modelo de Contratação</h3>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-aura-primary mt-1">•</span>
                <span>Vigência de 30 dias com renovação automática</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-aura-primary mt-1">•</span>
                <span>Processo de adesão 100% digital</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-aura-primary mt-1">•</span>
                <span>Documentação simplificada</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-aura-primary mt-1">•</span>
                <span>Cancelamento a qualquer momento</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-bold text-slate-800 mb-3">Pagamento de Indenizações</h3>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-aura-primary mt-1">•</span>
                <span>Processo ágil de análise de sinistros</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-aura-primary mt-1">•</span>
                <span>Pagamento direto aos beneficiários</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-aura-primary mt-1">•</span>
                <span>Suporte dedicado em momentos difíceis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-aura-primary mt-1">•</span>
                <span>Conformidade total com regulamentação SUSEP</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>

      {/* Informações Importantes */}
      <Card className="p-6 bg-slate-50">
        <h2 className="text-xl font-bold text-aura-primary mb-3">
          Informações Importantes
        </h2>
        <ul className="space-y-2 text-slate-700">
          <li className="flex items-start gap-2">
            <span className="text-aura-primary mt-1">•</span>
            <span>Produto exclusivo para pessoas físicas</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-aura-primary mt-1">•</span>
            <span>Arrecadação média de R$ 200,00 por apólice/ano</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-aura-primary mt-1">•</span>
            <span>Renovação automática mensal (pode ser cancelada a qualquer momento)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-aura-primary mt-1">•</span>
            <span>Produto de risco puro (sem acúmulo de reserva ou resgate)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-aura-primary mt-1">•</span>
            <span>Condições gerais disponíveis na seção Regulatório</span>
          </li>
        </ul>
      </Card>

      {/* CTA */}
      <Card className="p-8 bg-gradient-to-r from-aura-primary to-aura-secondary text-white text-center">
        <h2 className="text-2xl font-bold mb-3">
          Proteção Acessível para Você e Sua Família
        </h2>
        <p className="text-lg mb-6 opacity-90">
          O AURA Vida Mensal foi desenvolvido pensando em oferecer segurança 
          e tranquilidade com um produto simples, acessível e inclusivo.
        </p>
        <p className="text-sm opacity-80">
          Para mais informações, consulte as Condições Gerais na seção Regulatório
        </p>
      </Card>
    </section>
  );
}

