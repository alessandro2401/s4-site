import { Card } from "@/components/ui/card";
import { TrendingUp, DollarSign, Shield, AlertTriangle, Calculator, BarChart3 } from "lucide-react";
import ScenarioSelector from "@/components/ScenarioSelector";

export default function Page() {
  return (
    <section className="container py-10 space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-aura-primary mb-3">
          Informações Técnicas e Atuariais
        </h1>
        <p className="text-lg text-slate-600">
          Demonstrativo de Resultados, premissas atuariais e projeções do produto AURA Auto Mensal
        </p>
      </div>

      {/* Aviso Técnico */}
      <Card className="p-6 bg-amber-50 border-l-4 border-l-amber-500">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-slate-800 mb-2">Informação Técnica</h3>
            <p className="text-sm text-slate-700">
              As informações apresentadas nesta página são baseadas em premissas atuariais conservadoras e 
              estão em conformidade com as normas SUSEP (Resolução CNSP nº 416/2021 e Circular SUSEP nº 700/2024). 
              Os valores projetados podem sofrer variações conforme a evolução da carteira e sinistralidade real.
            </p>
          </div>
        </div>
      </Card>

      {/* Premissas Executivas */}
      <div>
        <h2 className="text-2xl font-bold text-aura-primary mb-4 flex items-center gap-2">
          <Calculator className="w-6 h-6" />
          Premissas Executivas
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-bold text-slate-800 mb-3">Produto</h3>
            <div className="space-y-2 text-sm">
              <div>
                <p className="font-semibold text-slate-700">Vigência</p>
                <p className="text-slate-600">30 dias (mensal)</p>
              </div>
              <div>
                <p className="font-semibold text-slate-700">Renovação</p>
                <p className="text-slate-600">Condicionada ao pagamento</p>
              </div>
              <div>
                <p className="font-semibold text-slate-700">Planos</p>
                <p className="text-slate-600">Digital, Básico, Essencial</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-bold text-slate-800 mb-3">Mix Comercial</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-slate-700">Digital</span>
                <span className="text-sm text-slate-600">40%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-slate-700">Básico</span>
                <span className="text-sm text-slate-600">40%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-semibold text-slate-700">Essencial</span>
                <span className="text-sm text-slate-600">20%</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-bold text-slate-800 mb-3">Crescimento</h3>
            <div className="space-y-2 text-sm">
              <div>
                <p className="font-semibold text-slate-700">Ano 1</p>
                <p className="text-slate-600">+15% ao mês</p>
              </div>
              <div>
                <p className="font-semibold text-slate-700">Anos 2-5</p>
                <p className="text-slate-600">+15% ao ano</p>
              </div>
              <div>
                <p className="font-semibold text-slate-700">Base inicial</p>
                <p className="text-slate-600">50 apólices</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Cenários de Projeção */}
      <div>
        <h2 className="text-2xl font-bold text-aura-primary mb-4 flex items-center gap-2">
          <BarChart3 className="w-6 h-6" />
          Cenários de Projeção - DRE 5 Anos
        </h2>
        <ScenarioSelector />
      </div>

      {/* Preços e Sinistralidade */}
      <div>
        <h2 className="text-2xl font-bold text-aura-primary mb-4">
          Preços e Sinistralidade por Plano
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-aura-primary text-white">
                <th className="p-3 text-left">Plano</th>
                <th className="p-3 text-right">Prêmio Mensal</th>
                <th className="p-3 text-right">Sinistralidade</th>
                <th className="p-3 text-right">Despesas Op.</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-semibold">AURA Digital</td>
                <td className="p-3 text-right">R$ 415,40</td>
                <td className="p-3 text-right">44,5%</td>
                <td className="p-3 text-right">18%</td>
              </tr>
              <tr className="border-b bg-slate-50">
                <td className="p-3 font-semibold">AURA Básico</td>
                <td className="p-3 text-right">R$ 463,50</td>
                <td className="p-3 text-right">51,5%</td>
                <td className="p-3 text-right">20%</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-semibold">AURA Essencial</td>
                <td className="p-3 text-right">R$ 533,50</td>
                <td className="p-3 text-right">54,8%</td>
                <td className="p-3 text-right">22%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-slate-600 mt-3">
          * Valores baseados em FIPE média de R$ 55.000 e comissão de 10%
        </p>
      </div>

