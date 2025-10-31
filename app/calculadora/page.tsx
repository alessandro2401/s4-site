import { Card } from "@/components/ui/card";
import { Calculator, TrendingUp, Shield, AlertCircle } from "lucide-react";
import FipeConsulta from "@/components/FipeConsulta";

export default function CalculadoraPage() {
  return (
    <section className="container py-10 space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-aura-primary mb-3">
          Calculadora de Seguro Auto
        </h1>
        <p className="text-lg text-slate-600">
          Consulte o valor FIPE do seu veículo e calcule o prêmio do seguro AURA Auto Mensal
        </p>
      </div>

      {/* Aviso */}
      <Card className="p-6 bg-blue-50 border-l-4 border-l-blue-500">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-slate-800 mb-2">Como Funciona</h3>
            <p className="text-sm text-slate-700">
              Nossa calculadora utiliza os valores oficiais da Tabela FIPE (Fundação Instituto de Pesquisas Econômicas)
              para calcular o prêmio do seu seguro. Os valores são atualizados mensalmente e incluem todos os
              carregamentos (administração, margem de risco, comissão e impostos).
            </p>
          </div>
        </div>
      </Card>

      {/* Diferenciais */}
      <div>
        <h2 className="text-2xl font-bold text-aura-primary mb-4">
          Por que escolher a AURA?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <Calculator className="w-10 h-10 text-blue-600 mb-3" />
            <h3 className="text-lg font-bold text-slate-800 mb-2">
              Cálculo Transparente
            </h3>
            <p className="text-sm text-slate-600">
              Precificação baseada em valores oficiais FIPE, com metodologia clara e auditável.
            </p>
          </Card>

          <Card className="p-6">
            <TrendingUp className="w-10 h-10 text-green-600 mb-3" />
            <h3 className="text-lg font-bold text-slate-800 mb-2">
              Planos Flexíveis
            </h3>
            <p className="text-sm text-slate-600">
              Escolha entre 3 planos (Digital, Básico, Essencial) conforme suas necessidades.
            </p>
          </Card>

          <Card className="p-6">
            <Shield className="w-10 h-10 text-purple-600 mb-3" />
            <h3 className="text-lg font-bold text-slate-800 mb-2">
              Seguradora S4
            </h3>
            <p className="text-sm text-slate-600">
              Modelo comunitário regulado pela SUSEP, unindo mutualismo e segurança jurídica.
            </p>
          </Card>
        </div>
      </div>

      {/* Consulta FIPE */}
      <div>
        <h2 className="text-2xl font-bold text-aura-primary mb-4">
          Consulte e Calcule
        </h2>
        <Card className="p-8">
          <FipeConsulta />
        </Card>
      </div>

      {/* Informações Adicionais */}
      <Card className="p-6 bg-amber-50 border-l-4 border-l-amber-500">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-slate-800 mb-2">Importante</h3>
            <ul className="text-sm text-slate-700 space-y-1">
              <li>• Os valores apresentados são estimativas baseadas no valor FIPE do veículo</li>
              <li>• O prêmio final pode variar conforme análise de risco individual (perfil do condutor, CEP, etc.)</li>
              <li>• Vigência mensal com renovação automática condicionada ao pagamento</li>
              <li>• Consulta FIPE atualizada mensalmente com dados oficiais</li>
            </ul>
          </div>
        </div>
      </Card>
    </section>
  );
}
