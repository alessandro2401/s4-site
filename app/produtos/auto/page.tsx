import { Card } from "@/components/ui/card";
import { Check, Shield, Clock, Car, Wrench, Phone } from "lucide-react";

export default function Page() {
  return (
    <section className="container py-10 space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-aura-primary mb-3">
          Seguro Auto Mensal AURA
        </h1>
        <p className="text-lg text-slate-600">
          Proteção completa para seu veículo com <strong>indenização direta ao segurado</strong>, 
          oficina livre, franquia dedutível e SLA de liquidação em até <strong>D+15 úteis</strong>.
        </p>
      </div>

      {/* Planos Disponíveis */}
      <div>
        <h2 className="text-2xl font-bold text-aura-primary mb-4">
          Planos Disponíveis
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 border-2 hover:border-aura-primary transition-colors">
            <h3 className="text-xl font-bold text-aura-primary mb-2">AURA Digital</h3>
            <p className="text-sm text-slate-600 mb-4">
              Plano básico com funcionalidades digitais e franquia opcional de 2% para terceiros.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Indenização direta ao segurado</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Oficina livre</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Franquia opcional 2% terceiros</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-2 border-aura-primary shadow-lg">
            <div className="inline-block bg-aura-primary text-white text-xs px-3 py-1 rounded-full mb-2">
              MAIS POPULAR
            </div>
            <h3 className="text-xl font-bold text-aura-primary mb-2">AURA Básico</h3>
            <p className="text-sm text-slate-600 mb-4">
              Plano intermediário com cobertura completa e franquia opcional de 3% para terceiros.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Todas as coberturas do Digital</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Assistência 24h até 500km</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Franquia opcional 3% terceiros</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 border-2 hover:border-aura-primary transition-colors">
            <h3 className="text-xl font-bold text-aura-primary mb-2">AURA Essencial</h3>
            <p className="text-sm text-slate-600 mb-4">
              Plano completo com todas as coberturas e franquia opcional de 3% para terceiros.
            </p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Todas as coberturas do Básico</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Carro reserva 15 dias</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm">Franquia opcional 3% terceiros</span>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Público-Alvo */}
      <Card className="p-6 bg-slate-50">
        <h2 className="text-2xl font-bold text-aura-primary mb-4">
          Público-Alvo
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <p className="font-semibold text-slate-700">Classes Sociais</p>
            <p className="text-slate-600">C, D e E</p>
          </div>
          <div>
            <p className="font-semibold text-slate-700">Tabela FIPE</p>
            <p className="text-slate-600">Até R$ 250.000,00</p>
          </div>
          <div>
            <p className="font-semibold text-slate-700">Idade do Veículo</p>
            <p className="text-slate-600">Até 25 anos de uso</p>
          </div>
        </div>
      </Card>

      {/* Coberturas Detalhadas */}
      <div>
        <h2 className="text-2xl font-bold text-aura-primary mb-4">
          Coberturas Detalhadas
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-aura-primary/10 rounded-lg">
                <Shield className="w-6 h-6 text-aura-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Danos ao Veículo</h3>
            </div>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-aura-primary mt-1">•</span>
                <span><strong>Franquia:</strong> 6% do valor FIPE</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-aura-primary mt-1">•</span>
                <span><strong>Perda Total:</strong> ≥ 65% FIPE ou dano estrutural</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-aura-primary mt-1">•</span>
                <span><strong>Pagamento:</strong> Franquia dedutível diretamente do valor pago ao segurado</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-aura-primary mt-1">•</span>
                <span><strong>Oficina:</strong> Livre escolha do reparador (sem rede credenciada)</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-aura-primary/10 rounded-lg">
                <Wrench className="w-6 h-6 text-aura-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Vidros e Faróis</h3>
            </div>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-aura-primary mt-1">•</span>
                <span><strong>Cobertura:</strong> Troca de vidros e faróis</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-aura-primary mt-1">•</span>
                <span><strong>Franquia:</strong> 35% do valor da peça</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-aura-primary mt-1">•</span>
                <span><strong>Execução:</strong> Substituição em oficina de livre escolha</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-aura-primary/10 rounded-lg">
                <Car className="w-6 h-6 text-aura-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Responsabilidade Civil</h3>
            </div>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-aura-primary mt-1">•</span>
                <span><strong>Danos Materiais a Terceiros:</strong> Até R$ 50.000,00</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-aura-primary mt-1">•</span>
                <span><strong>Franquia Opcional (Digital):</strong> 2% (reduz prêmio)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-aura-primary mt-1">•</span>
                <span><strong>Franquia Opcional (Básico/Essencial):</strong> 3% (reduz prêmio)</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-aura-primary/10 rounded-lg">
                <Phone className="w-6 h-6 text-aura-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Assistências</h3>
            </div>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-aura-primary mt-1">•</span>
                <span><strong>Assistência 24 horas:</strong> Até 500km de distância</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-aura-primary mt-1">•</span>
                <span><strong>Carro reserva:</strong> Até 15 dias</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-aura-primary mt-1">•</span>
                <span><strong>Seguro APP:</strong> Cobertura de R$ 10.000,00</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>

      {/* SLAs de Liquidação */}
      <Card className="p-6 bg-gradient-to-r from-aura-primary/5 to-transparent">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-aura-primary/10 rounded-lg">
            <Clock className="w-6 h-6 text-aura-primary" />
          </div>
          <h2 className="text-2xl font-bold text-aura-primary">
            SLAs de Liquidação
          </h2>
        </div>
        <p className="text-slate-700 mb-4">
          Prazos máximos para pagamento de indenizações após aprovação do sinistro:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
            <p className="text-2xl font-bold text-green-600">D+5</p>
            <p className="text-sm text-slate-600">Sinistros até R$ 5.000,00</p>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-500">
            <p className="text-2xl font-bold text-yellow-600">D+10</p>
            <p className="text-sm text-slate-600">Sinistros de R$ 5.000,00 a R$ 20.000,00</p>
          </div>
          <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500">
            <p className="text-2xl font-bold text-orange-600">D+15</p>
            <p className="text-sm text-slate-600">Sinistros acima de R$ 20.000,00</p>
          </div>
        </div>
      </Card>

      {/* Diferenciais */}
      <div>
        <h2 className="text-2xl font-bold text-aura-primary mb-4">
          Diferenciais AURA Auto Mensal
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="p-4 flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold text-slate-800">Indenização Direta</p>
              <p className="text-sm text-slate-600">Pagamento direto ao segurado, sem intermediários</p>
            </div>
          </Card>
          <Card className="p-4 flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold text-slate-800">Oficina Livre</p>
              <p className="text-sm text-slate-600">Você escolhe onde reparar seu veículo</p>
            </div>
          </Card>
          <Card className="p-4 flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold text-slate-800">Vigência Mensal</p>
              <p className="text-sm text-slate-600">Renovação automática a cada 30 dias</p>
            </div>
          </Card>
          <Card className="p-4 flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold text-slate-800">SLA Garantido</p>
              <p className="text-sm text-slate-600">Prazos definidos para cada faixa de valor</p>
            </div>
          </Card>
          <Card className="p-4 flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold text-slate-800">Controle Antifraude</p>
              <p className="text-sm text-slate-600">Tecnologia de segurança na regulação</p>
            </div>
          </Card>
          <Card className="p-4 flex items-start gap-3">
            <Check className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
            <div>
              <p className="font-semibold text-slate-800">Planos Flexíveis</p>
              <p className="text-sm text-slate-600">Escolha o plano ideal para seu perfil</p>
            </div>
          </Card>
        </div>
      </div>

      {/* Informações Adicionais */}
      <Card className="p-6 bg-slate-50">
        <h2 className="text-xl font-bold text-aura-primary mb-3">
          Informações Importantes
        </h2>
        <ul className="space-y-2 text-slate-700">
          <li className="flex items-start gap-2">
            <span className="text-aura-primary mt-1">•</span>
            <span>Vigência de 30 dias com renovação automática</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-aura-primary mt-1">•</span>
            <span>Comissão padrão de 10% já incluída no prêmio</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-aura-primary mt-1">•</span>
            <span>Possibilidade de franquia opcional para terceiros (reduz prêmio)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-aura-primary mt-1">•</span>
            <span>Análise antifraude em todos os sinistros</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-aura-primary mt-1">•</span>
            <span>Conformidade total com regulamentação SUSEP</span>
          </li>
        </ul>
      </Card>
    </section>
  );
}

