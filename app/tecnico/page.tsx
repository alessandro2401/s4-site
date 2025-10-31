import { Card } from "@/components/ui/card";
import { TrendingUp, DollarSign, Shield, AlertTriangle, Calculator, BarChart3 } from "lucide-react";

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

      {/* DRE Projetado */}
      <div>
        <h2 className="text-2xl font-bold text-aura-primary mb-4 flex items-center gap-2">
          <BarChart3 className="w-6 h-6" />
          Demonstrativo de Resultados (DRE) - Projeção 5 Anos
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-aura-primary text-white">
                <th className="p-3 text-left">Ano</th>
                <th className="p-3 text-right">Apólices/Mês</th>
                <th className="p-3 text-right">Prêmio Anual</th>
                <th className="p-3 text-right">Sinistros</th>
                <th className="p-3 text-right">Despesas</th>
                <th className="p-3 text-right">Resultado Técnico</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="p-3 font-semibold">Ano 1</td>
                <td className="p-3 text-right">120,8</td>
                <td className="p-3 text-right">R$ 664.515</td>
                <td className="p-3 text-right">R$ 330.465</td>
                <td className="p-3 text-right">R$ 131.179</td>
                <td className="p-3 text-right font-bold text-green-600">R$ 202.872</td>
              </tr>
              <tr className="border-b bg-slate-50">
                <td className="p-3 font-semibold">Ano 2</td>
                <td className="p-3 text-right">287,6</td>
                <td className="p-3 text-right">R$ 1.581.415</td>
                <td className="p-3 text-right">R$ 780.586</td>
                <td className="p-3 text-right">R$ 309.957</td>
                <td className="p-3 text-right font-bold text-green-600">R$ 490.871</td>
              </tr>
              <tr className="border-b">
                <td className="p-3 font-semibold">Ano 3</td>
                <td className="p-3 text-right">330,7</td>
                <td className="p-3 text-right">R$ 1.818.627</td>
                <td className="p-3 text-right">R$ 897.674</td>
                <td className="p-3 text-right">R$ 356.451</td>
                <td className="p-3 text-right font-bold text-green-600">R$ 564.502</td>
              </tr>
              <tr className="border-b bg-slate-50">
                <td className="p-3 font-semibold">Ano 4</td>
                <td className="p-3 text-right">380,3</td>
                <td className="p-3 text-right">R$ 2.091.421</td>
                <td className="p-3 text-right">R$ 1.032.325</td>
                <td className="p-3 text-right">R$ 409.918</td>
                <td className="p-3 text-right font-bold text-green-600">R$ 649.177</td>
              </tr>
              <tr className="border-b bg-aura-primary/10">
                <td className="p-3 font-semibold">Ano 5</td>
                <td className="p-3 text-right font-bold">437,4</td>
                <td className="p-3 text-right font-bold">R$ 2.405.134</td>
                <td className="p-3 text-right font-bold">R$ 1.187.174</td>
                <td className="p-3 text-right font-bold">R$ 471.406</td>
                <td className="p-3 text-right font-bold text-green-700">R$ 746.554</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="bg-slate-100 font-bold">
                <td className="p-3">TOTAL (5 anos)</td>
                <td className="p-3 text-right">-</td>
                <td className="p-3 text-right">R$ 8.561.111</td>
                <td className="p-3 text-right">R$ 4.228.225</td>
                <td className="p-3 text-right">R$ 1.678.911</td>
                <td className="p-3 text-right text-green-700">R$ 2.653.975</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Indicadores Financeiros */}
      <div>
        <h2 className="text-2xl font-bold text-aura-primary mb-4 flex items-center gap-2">
          <TrendingUp className="w-6 h-6" />
          Indicadores Financeiros
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          <Card className="p-6 bg-gradient-to-br from-green-50 to-white">
            <div className="flex items-center gap-3 mb-2">
              <DollarSign className="w-8 h-8 text-green-600" />
              <div>
                <p className="text-sm text-slate-600">Crescimento Prêmio</p>
                <p className="text-2xl font-bold text-green-600">+262%</p>
              </div>
            </div>
            <p className="text-xs text-slate-500">Ano 1 → Ano 5</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-blue-50 to-white">
            <div className="flex items-center gap-3 mb-2">
              <BarChart3 className="w-8 h-8 text-blue-600" />
              <div>
                <p className="text-sm text-slate-600">Margem Técnica</p>
                <p className="text-2xl font-bold text-blue-600">31%</p>
              </div>
            </div>
            <p className="text-xs text-slate-500">Média 5 anos</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-purple-50 to-white">
            <div className="flex items-center gap-3 mb-2">
              <Shield className="w-8 h-8 text-purple-600" />
              <div>
                <p className="text-sm text-slate-600">Sinistralidade</p>
                <p className="text-2xl font-bold text-purple-600">49,4%</p>
              </div>
            </div>
            <p className="text-xs text-slate-500">Média ponderada</p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-amber-50 to-white">
            <div className="flex items-center gap-3 mb-2">
              <TrendingUp className="w-8 h-8 text-amber-600" />
              <div>
                <p className="text-sm text-slate-600">Resultado Acum.</p>
                <p className="text-2xl font-bold text-amber-600">R$ 2,7M</p>
              </div>
            </div>
            <p className="text-xs text-slate-500">5 anos</p>
          </Card>
        </div>
      </div>

      {/* Provisões Técnicas - SEÇÃO EXPANDIDA */}
      <div>
        <h2 className="text-2xl font-bold text-aura-primary mb-4 flex items-center gap-2">
          <Shield className="w-6 h-6" />
          Provisões Técnicas Detalhadas
        </h2>
        
        {/* Definições */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          <Card className="p-6 border-l-4 border-l-blue-500">
            <h3 className="text-lg font-bold text-slate-800 mb-3">PPNG</h3>
            <p className="text-sm text-slate-600 mb-2">Provisão de Prêmios Não Ganhos</p>
            <div className="bg-slate-50 p-3 rounded text-xs text-slate-700 space-y-1">
              <p><strong>Método:</strong> Pro rata temporis</p>
              <p><strong>Vigência:</strong> 30 dias (mensal)</p>
              <p><strong>Saldo fim do mês:</strong> ≈ R$ 0</p>
              <p className="text-xs text-slate-500 mt-2">
                * Prêmio ganho ao longo do mês. PPNG início ≈ 100% do prêmio mensal.
              </p>
            </div>
          </Card>

          <Card className="p-6 border-l-4 border-l-purple-500">
            <h3 className="text-lg font-bold text-slate-800 mb-3">IBNR</h3>
            <p className="text-sm text-slate-600 mb-2">Sinistros Ocorridos e Não Avisados</p>
            <div className="bg-slate-50 p-3 rounded text-xs text-slate-700 space-y-1">
              <p><strong>Proxy:</strong> 10% do sinistro incorrido</p>
              <p><strong>Base:</strong> Sinistro do mês</p>
              <p><strong>Caráter:</strong> Prudencial</p>
              <p className="text-xs text-slate-500 mt-2">
                * Ajuste após 6-12 meses com triângulos de run-off
              </p>
            </div>
          </Card>

          <Card className="p-6 border-l-4 border-l-green-500">
            <h3 className="text-lg font-bold text-slate-800 mb-3">PSL</h3>
            <p className="text-sm text-slate-600 mb-2">Sinistros Avisados e Não Liquidados</p>
            <div className="bg-slate-50 p-3 rounded text-xs text-slate-700 space-y-1">
              <p><strong>Proxy:</strong> 5% do sinistro incorrido</p>
              <p><strong>Base:</strong> Sinistro do mês</p>
              <p><strong>Caráter:</strong> Prudencial</p>
              <p className="text-xs text-slate-500 mt-2">
                * Ajuste após 6-12 meses com triângulos de run-off
              </p>
            </div>
          </Card>
        </div>

        {/* Tabela Ano 1 - Mensal */}
        <div className="mb-6">
          <h3 className="text-xl font-bold text-slate-800 mb-3">Ano 1 - Evolução Mensal</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-slate-700 text-white">
                  <th className="p-2 text-left">Mês</th>
                  <th className="p-2 text-right">Apólices</th>
                  <th className="p-2 text-right">Prêmio</th>
                  <th className="p-2 text-right">Sinistro</th>
                  <th className="p-2 text-right">IBNR</th>
                  <th className="p-2 text-right">PSL</th>
                </tr>
              </thead>
              <tbody className="text-xs">
                <tr className="border-b hover:bg-slate-50">
                  <td className="p-2">1</td>
                  <td className="p-2 text-right">50</td>
                  <td className="p-2 text-right">R$ 22.913</td>
                  <td className="p-2 text-right">R$ 11.310</td>
                  <td className="p-2 text-right">R$ 1.131</td>
                  <td className="p-2 text-right">R$ 566</td>
                </tr>
                <tr className="border-b hover:bg-slate-50">
                  <td className="p-2">2</td>
                  <td className="p-2 text-right">58</td>
                  <td className="p-2 text-right">R$ 26.350</td>
                  <td className="p-2 text-right">R$ 13.007</td>
                  <td className="p-2 text-right">R$ 1.301</td>
                  <td className="p-2 text-right">R$ 650</td>
                </tr>
                <tr className="border-b hover:bg-slate-50">
                  <td className="p-2">3</td>
                  <td className="p-2 text-right">66</td>
                  <td className="p-2 text-right">R$ 30.305</td>
                  <td className="p-2 text-right">R$ 14.958</td>
                  <td className="p-2 text-right">R$ 1.496</td>
                  <td className="p-2 text-right">R$ 748</td>
                </tr>
                <tr className="border-b hover:bg-slate-50">
                  <td className="p-2">4</td>
                  <td className="p-2 text-right">76</td>
                  <td className="p-2 text-right">R$ 34.851</td>
                  <td className="p-2 text-right">R$ 17.202</td>
                  <td className="p-2 text-right">R$ 1.720</td>
                  <td className="p-2 text-right">R$ 860</td>
                </tr>
                <tr className="border-b hover:bg-slate-50">
                  <td className="p-2">5</td>
                  <td className="p-2 text-right">87</td>
                  <td className="p-2 text-right">R$ 40.079</td>
                  <td className="p-2 text-right">R$ 19.783</td>
                  <td className="p-2 text-right">R$ 1.978</td>
                  <td className="p-2 text-right">R$ 989</td>
                </tr>
                <tr className="border-b hover:bg-slate-50">
                  <td className="p-2">6</td>
                  <td className="p-2 text-right">101</td>
                  <td className="p-2 text-right">R$ 46.092</td>
                  <td className="p-2 text-right">R$ 22.751</td>
                  <td className="p-2 text-right">R$ 2.275</td>
                  <td className="p-2 text-right">R$ 1.138</td>
                </tr>
                <tr className="border-b hover:bg-slate-50">
                  <td className="p-2">7</td>
                  <td className="p-2 text-right">116</td>
                  <td className="p-2 text-right">R$ 53.002</td>
                  <td className="p-2 text-right">R$ 26.162</td>
                  <td className="p-2 text-right">R$ 2.616</td>
                  <td className="p-2 text-right">R$ 1.308</td>
                </tr>
                <tr className="border-b hover:bg-slate-50">
                  <td className="p-2">8</td>
                  <td className="p-2 text-right">133</td>
                  <td className="p-2 text-right">R$ 60.953</td>
                  <td className="p-2 text-right">R$ 30.086</td>
                  <td className="p-2 text-right">R$ 3.009</td>
                  <td className="p-2 text-right">R$ 1.504</td>
                </tr>
                <tr className="border-b hover:bg-slate-50">
                  <td className="p-2">9</td>
                  <td className="p-2 text-right">153</td>
                  <td className="p-2 text-right">R$ 70.095</td>
                  <td className="p-2 text-right">R$ 34.600</td>
                  <td className="p-2 text-right">R$ 3.460</td>
                  <td className="p-2 text-right">R$ 1.730</td>
                </tr>
                <tr className="border-b hover:bg-slate-50">
                  <td className="p-2">10</td>
                  <td className="p-2 text-right">177</td>
                  <td className="p-2 text-right">R$ 81.066</td>
                  <td className="p-2 text-right">R$ 40.014</td>
                  <td className="p-2 text-right">R$ 4.001</td>
                  <td className="p-2 text-right">R$ 2.001</td>
                </tr>
                <tr className="border-b hover:bg-slate-50">
                  <td className="p-2">11</td>
                  <td className="p-2 text-right">203</td>
                  <td className="p-2 text-right">R$ 93.228</td>
                  <td className="p-2 text-right">R$ 46.018</td>
                  <td className="p-2 text-right">R$ 4.602</td>
                  <td className="p-2 text-right">R$ 2.301</td>
                </tr>
                <tr className="border-b bg-slate-100 font-semibold">
                  <td className="p-2">12</td>
                  <td className="p-2 text-right">235</td>
                  <td className="p-2 text-right">R$ 107.673</td>
                  <td className="p-2 text-right">R$ 53.148</td>
                  <td className="p-2 text-right text-blue-600">R$ 5.315</td>
                  <td className="p-2 text-right text-green-600">R$ 2.657</td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="bg-slate-200 font-bold">
                  <td className="p-2" colSpan={2}>TOTAL ANO 1</td>
                  <td className="p-2 text-right">R$ 668.680</td>
                  <td className="p-2 text-right">R$ 329.000</td>
                  <td className="p-2 text-right text-blue-700">R$ 5.315</td>
                  <td className="p-2 text-right text-green-700">R$ 2.657</td>
                </tr>
              </tfoot>
            </table>
          </div>
          <p className="text-xs text-slate-600 mt-3">
            * Saldos IBNR e PSL referem-se ao fim de cada mês (baseados no sinistro do próprio mês)
          </p>
        </div>

        {/* Tabela Anos 2-5 - Anual */}
        <div>
          <h3 className="text-xl font-bold text-slate-800 mb-3">Anos 2-5 - Resumo Anual</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-slate-700 text-white">
                  <th className="p-3 text-left">Ano</th>
                  <th className="p-3 text-right">Apólices-Mês</th>
                  <th className="p-3 text-right">Prêmio Anual</th>
                  <th className="p-3 text-right">Sinistro Anual</th>
                  <th className="p-3 text-right">IBNR (Dez)</th>
                  <th className="p-3 text-right">PSL (Dez)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Ano 2</td>
                  <td className="p-3 text-right">3.010</td>
                  <td className="p-3 text-right">R$ 1.379.000</td>
                  <td className="p-3 text-right">R$ 680.900</td>
                  <td className="p-3 text-right text-blue-600">R$ 6.050</td>
                  <td className="p-3 text-right text-green-600">R$ 3.025</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="p-3 font-semibold">Ano 3</td>
                  <td className="p-3 text-right">3.462</td>
                  <td className="p-3 text-right">R$ 1.586.500</td>
                  <td className="p-3 text-right">R$ 783.100</td>
                  <td className="p-3 text-right text-blue-600">R$ 6.960</td>
                  <td className="p-3 text-right text-green-600">R$ 3.480</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3 font-semibold">Ano 4</td>
                  <td className="p-3 text-right">3.981</td>
                  <td className="p-3 text-right">R$ 1.824.300</td>
                  <td className="p-3 text-right">R$ 900.500</td>
                  <td className="p-3 text-right text-blue-600">R$ 8.010</td>
                  <td className="p-3 text-right text-green-600">R$ 4.005</td>
                </tr>
                <tr className="border-b bg-slate-50">
                  <td className="p-3 font-semibold">Ano 5</td>
                  <td className="p-3 text-right">4.578</td>
                  <td className="p-3 text-right">R$ 2.097.900</td>
                  <td className="p-3 text-right">R$ 1.035.500</td>
                  <td className="p-3 text-right text-blue-600">R$ 9.190</td>
                  <td className="p-3 text-right text-green-600">R$ 4.595</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-600 mt-3">
            * Saldos IBNR e PSL referem-se ao fim de dezembro de cada ano (baseados no sinistro de dezembro)
          </p>
        </div>

        {/* Nota sobre PPNG */}
        <Card className="p-4 bg-blue-50 border-l-4 border-l-blue-500 mt-6">
          <p className="text-sm text-slate-700">
            <strong>Nota sobre PPNG:</strong> Para produto com vigência mensal e cobrança no início do mês, 
            o saldo de PPNG ao final de cada mês tende a R$ 0 (prêmio totalmente ganho). Se a emissão for 
            distribuída ao longo do mês, pode-se adotar aproximação de 50% do prêmio mensal como PPNG de fim de mês.
          </p>
        </Card>
      </div>

      {/* Diferenciais Técnicos */}
      <div>
        <h2 className="text-2xl font-bold text-aura-primary mb-4">
          Diferenciais Técnicos
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 border-l-4 border-l-blue-500">
            <h3 className="text-xl font-bold text-slate-800 mb-3">Franquia RCF</h3>
            <div className="space-y-2 text-sm text-slate-700">
              <p>
                <strong>Digital:</strong> 2% (fator 0,88) - Redução de custo ~12%
              </p>
              <p>
                <strong>Básico/Essencial:</strong> 3% (fator 0,82) - Redução de custo ~18%
              </p>
              <p className="mt-3 text-xs text-slate-600">
                <strong>Impacto:</strong> Redução do capital de risco RCF e melhora de solvência (~+4 p.p.)
              </p>
            </div>
          </Card>

          <Card className="p-6 border-l-4 border-l-green-500">
            <h3 className="text-xl font-bold text-slate-800 mb-3">Sistema Antifraude</h3>
            <div className="space-y-2 text-sm text-slate-700">
              <p>
                <strong>Custo:</strong> R$ 4,00 por sinistro
              </p>
              <p>
                <strong>Metas:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs">
                <li>Suspeitos ≤ 5%</li>
                <li>Falsos positivos ≤ 3%</li>
                <li>Economia ≥ 1,5% do prêmio</li>
              </ul>
              <p className="mt-3 text-xs text-slate-600">
                <strong>Tecnologia:</strong> IA + Georreferenciamento + Auditoria humana
              </p>
            </div>
          </Card>
        </div>
      </div>

      {/* Estrutura de Carregamentos */}
      <div>
        <h2 className="text-2xl font-bold text-aura-primary mb-4">
          Estrutura de Carregamentos
        </h2>
        <Card className="p-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-bold text-slate-800 mb-3">Componentes do Prêmio</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between items-center">
                  <span className="text-slate-700">Administração</span>
                  <span className="font-semibold text-slate-800">10%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-700">Margem de Risco</span>
                  <span className="font-semibold text-slate-800">5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-700">Funding (custo de capital)</span>
                  <span className="font-semibold text-slate-800">3% a.m.</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-700">Comissão</span>
                  <span className="font-semibold text-slate-800">10%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-700">Impostos</span>
                  <span className="font-semibold text-slate-800">2%</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-slate-800 mb-3">Componentes do Prêmio Puro</h3>
              <div className="space-y-1 text-sm text-slate-700">
                <p>• Casco (colisão, perda total, roubo/furto)</p>
                <p>• Vidros e faróis</p>
                <p>• Assistência 24h</p>
                <p>• Carro reserva (Essencial)</p>
                <p>• APP - Acidentes Pessoais de Passageiros</p>
                <p>• RCF - Responsabilidade Civil Facultativa</p>
                <p>• Antifraude</p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Nota Técnica Final */}
      <Card className="p-6 bg-slate-50">
        <h3 className="font-bold text-slate-800 mb-3">Nota Técnica</h3>
        <p className="text-sm text-slate-700 mb-3">
          O modelo atuarial apresentado demonstra <strong>trajetória sustentável e prudencial</strong>, 
          com prêmio total evoluindo de R$ 665 mil (ano 1) para R$ 2,41 milhões (ano 5), mantendo 
          resultado técnico positivo em todos os períodos projetados.
        </p>
        <p className="text-sm text-slate-700 mb-3">
          A formação do preço via prêmio puro mais carregamentos (Adm, Margem, Funding) e comissão 
          base de 10% assegura <strong>equilíbrio atuarial</strong>. A franquia RCF reduz custo e melhora 
          solvência, enquanto o sistema antifraude (IA + perícia digital) protege o modelo de ressarcimento direto.
        </p>
        <p className="text-sm text-slate-700 mb-3">
          As <strong>provisões técnicas</strong> (PPNG, IBNR, PSL) foram calculadas com proxies prudenciais 
          (10% e 5% do sinistro incorrido) e serão ajustadas após 6-12 meses de operação com base em 
          triângulos de run-off reais.
        </p>
        <p className="text-sm text-slate-700">
          O desenho está em conformidade com as normas <strong>SUSEP/CNSP</strong> (Resolução 416/2021, 
          Circular 700/2024) e pronto para compor a Nota Técnica Atuarial (NTA), Parecer Atuarial e 
          Plano de Negócios a protocolar.
        </p>
      </Card>
    </section>
  );
}
