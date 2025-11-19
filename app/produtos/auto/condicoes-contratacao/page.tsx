import { Card } from "@/components/ui/card";
import { FileCheck, Download, UserCheck, CreditCard, AlertTriangle } from "lucide-react";

export default function CondicoesContratacaoPage() {
  return (
    <section className="container py-10 space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-aura-primary mb-3">
          Condições de Contratação - Seguro Auto Mensal
        </h1>
        <p className="text-lg text-slate-600">
          Requisitos, documentação e processo de contratação do produto
        </p>
      </div>

      {/* Seção 1: Público-Alvo e Elegibilidade */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold text-aura-primary mb-4 flex items-center gap-2">
          <UserCheck className="w-6 h-6" />
          1. Público-Alvo e Critérios de Elegibilidade
        </h2>
        
        <div className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-slate-50 p-4 rounded-lg">
              <h3 className="font-bold text-slate-800 mb-2">Classes Sociais</h3>
              <p className="text-2xl font-bold text-aura-primary mb-1">C, D e E</p>
              <p className="text-xs text-slate-600">
                Foco em inclusão e democratização do acesso ao seguro auto
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg">
              <h3 className="font-bold text-slate-800 mb-2">Valor do Veículo</h3>
              <p className="text-2xl font-bold text-aura-primary mb-1">Até R$ 250.000</p>
              <p className="text-xs text-slate-600">
                Baseado na Tabela FIPE vigente
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg">
              <h3 className="font-bold text-slate-800 mb-2">Idade do Veículo</h3>
              <p className="text-2xl font-bold text-aura-primary mb-1">Até 25 anos</p>
              <p className="text-xs text-slate-600">
                Veículos de 1999 em diante
              </p>
            </div>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
            <h3 className="font-bold text-blue-900 mb-2">Perfil do Segurado</h3>
            <ul className="space-y-2 text-sm text-blue-800">
              <li className="flex items-start gap-2">
                <span className="text-blue-600">✓</span>
                <span><strong>Idade mínima:</strong> 21 anos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">✓</span>
                <span><strong>Habilitação:</strong> CNH válida categoria B ou superior</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">✓</span>
                <span><strong>CPF:</strong> Regular perante Receita Federal</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">✓</span>
                <span><strong>Residência:</strong> Comprovante de endereço atualizado</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
            <h3 className="font-bold text-red-900 mb-2">Restrições de Aceitação</h3>
            <ul className="space-y-2 text-sm text-red-800">
              <li className="flex items-start gap-2">
                <span className="text-red-600">✗</span>
                <span>Veículos com salvados ou sinistro total anterior</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">✗</span>
                <span>Veículos modificados ou preparados</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">✗</span>
                <span>Uso comercial não declarado (táxi, transporte por aplicativo)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">✗</span>
                <span>Mais de 3 sinistros nos últimos 24 meses</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">✗</span>
                <span>Histórico de fraude em seguros anteriores</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Seção 2: Documentação Necessária */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold text-aura-primary mb-4 flex items-center gap-2">
          <FileCheck className="w-6 h-6" />
          2. Documentação Necessária
        </h2>

        <div className="space-y-6">
          <div className="bg-slate-50 p-4 rounded-lg">
            <h3 className="font-bold text-slate-800 mb-3">2.1. Documentos do Segurado</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">1.</span>
                  <span><strong>CPF</strong> - Cadastro de Pessoa Física</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">2.</span>
                  <span><strong>RG ou CNH</strong> - Documento de identificação com foto</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">3.</span>
                  <span><strong>CNH válida</strong> - Categoria B ou superior</span>
                </li>
              </ul>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">4.</span>
                  <span><strong>Comprovante de residência</strong> - Atualizado (últimos 90 dias)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">5.</span>
                  <span><strong>Comprovante de renda</strong> - Holerite, extrato bancário ou declaração</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg">
            <h3 className="font-bold text-slate-800 mb-3">2.2. Documentos do Veículo</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">1.</span>
                  <span><strong>CRLV</strong> - Certificado de Registro e Licenciamento atualizado</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">2.</span>
                  <span><strong>Nota Fiscal</strong> - Cópia da nota fiscal de compra (se veículo 0km)</span>
                </li>
              </ul>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">3.</span>
                  <span><strong>Fotos do veículo</strong> - 4 ângulos + painel com hodômetro</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">4.</span>
                  <span><strong>Laudo de vistoria</strong> - Se solicitado pela seguradora</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
            <h3 className="font-bold text-amber-900 mb-2">📸 Fotos Obrigatórias do Veículo</h3>
            <p className="text-sm text-amber-800 mb-3">
              Para agilizar a contratação, envie fotos nítidas e em boa iluminação:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 text-xs text-amber-800">
              <div className="bg-white p-2 rounded text-center">
                <p className="font-bold">Frente</p>
                <p className="text-xs">Completa</p>
              </div>
              <div className="bg-white p-2 rounded text-center">
                <p className="font-bold">Traseira</p>
                <p className="text-xs">Completa</p>
              </div>
              <div className="bg-white p-2 rounded text-center">
                <p className="font-bold">Lateral Esq.</p>
                <p className="text-xs">Completa</p>
              </div>
              <div className="bg-white p-2 rounded text-center">
                <p className="font-bold">Lateral Dir.</p>
                <p className="text-xs">Completa</p>
              </div>
              <div className="bg-white p-2 rounded text-center">
                <p className="font-bold">Painel</p>
                <p className="text-xs">Com hodômetro</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Seção 3: Processo de Contratação */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold text-aura-primary mb-4">
          3. Processo de Contratação
        </h2>

        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-green-100 rounded-lg flex-shrink-0">
              <span className="text-lg font-bold text-green-600">1</span>
            </div>
            <div>
              <h3 className="font-bold text-slate-800">Cotação Online</h3>
              <p className="text-sm text-slate-600">
                Acesse a calculadora no site, informe os dados do veículo e perfil de uso. 
                Receba cotação instantânea com os 3 planos disponíveis.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-blue-100 rounded-lg flex-shrink-0">
              <span className="text-lg font-bold text-blue-600">2</span>
            </div>
            <div>
              <h3 className="font-bold text-slate-800">Escolha do Plano</h3>
              <p className="text-sm text-slate-600">
                Compare os planos Digital, Básico e Essencial. Selecione o que melhor atende suas necessidades.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-purple-100 rounded-lg flex-shrink-0">
              <span className="text-lg font-bold text-purple-600">3</span>
            </div>
            <div>
              <h3 className="font-bold text-slate-800">Cadastro e Documentação</h3>
              <p className="text-sm text-slate-600">
                Preencha o formulário de proposta e envie a documentação via upload. 
                Processo 100% digital, sem necessidade de ir a uma agência.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-amber-100 rounded-lg flex-shrink-0">
              <span className="text-lg font-bold text-amber-600">4</span>
            </div>
            <div>
              <h3 className="font-bold text-slate-800">Análise de Risco</h3>
              <p className="text-sm text-slate-600">
                Nossa equipe analisa a proposta em até 24 horas úteis. Pode ser solicitada vistoria presencial 
                em casos específicos.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-red-100 rounded-lg flex-shrink-0">
              <span className="text-lg font-bold text-red-600">5</span>
            </div>
            <div>
              <h3 className="font-bold text-slate-800">Pagamento e Emissão</h3>
              <p className="text-sm text-slate-600">
                Após aprovação, efetue o primeiro pagamento via cartão de crédito, débito automático ou PIX. 
                A apólice é emitida imediatamente após confirmação do pagamento.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-cyan-100 rounded-lg flex-shrink-0">
              <span className="text-lg font-bold text-cyan-600">6</span>
            </div>
            <div>
              <h3 className="font-bold text-slate-800">Início da Vigência</h3>
              <p className="text-sm text-slate-600">
                A cobertura inicia às 24h do dia da emissão da apólice. Você receberá a apólice digital 
                por e-mail e poderá acessá-la pelo app.
              </p>
            </div>
          </div>
        </div>
      </Card>

      {/* Seção 4: Formas de Pagamento */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold text-aura-primary mb-4 flex items-center gap-2">
          <CreditCard className="w-6 h-6" />
          4. Formas de Pagamento
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-slate-50 p-4 rounded-lg">
            <h3 className="font-bold text-slate-800 mb-2">💳 Cartão de Crédito</h3>
            <ul className="space-y-1 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Renovação automática mensal</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Sem necessidade de novo pagamento</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Aceita Visa, Mastercard, Elo</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg">
            <h3 className="font-bold text-slate-800 mb-2">🏦 Débito Automático</h3>
            <ul className="space-y-1 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Desconto na conta corrente</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Renovação automática</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Principais bancos conveniados</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg">
            <h3 className="font-bold text-slate-800 mb-2">📱 PIX</h3>
            <ul className="space-y-1 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-amber-600">⚠</span>
                <span>Pagamento manual mensal</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600">⚠</span>
                <span>Boleto enviado por e-mail</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-600">⚠</span>
                <span>Vencimento todo dia 5</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-4 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
          <p className="text-sm text-blue-800">
            <strong>💡 Recomendação:</strong> Opte por cartão de crédito ou débito automático para garantir 
            renovação sem interrupção de cobertura.
          </p>
        </div>
      </Card>

      {/* Seção 5: Valores e Comissionamento */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold text-aura-primary mb-4">
          5. Valores e Comissionamento
        </h2>

        <div className="space-y-4">
          <div className="bg-slate-50 p-4 rounded-lg">
            <h3 className="font-bold text-slate-800 mb-2">5.1. Cálculo do Prêmio</h3>
            <p className="text-sm text-slate-700 mb-3">
              O valor do prêmio mensal é calculado com base em:
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-aura-primary">•</span>
                <span>Valor FIPE do veículo</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-aura-primary">•</span>
                <span>CEP de pernoite (índice de sinistralidade da região)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-aura-primary">•</span>
                <span>Perfil do condutor principal (idade, tempo de habilitação)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-aura-primary">•</span>
                <span>Histórico de sinistros nos últimos 24 meses</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-aura-primary">•</span>
                <span>Plano escolhido (Digital, Básico ou Essencial)</span>
              </li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
            <h3 className="font-bold text-green-900 mb-2">5.2. Comissionamento para Corretores</h3>
            <p className="text-sm text-green-800 mb-3">
              O produto já inclui comissão padrão de <strong>10%</strong> sobre o prêmio líquido, 
              paga mensalmente enquanto a apólice estiver ativa.
            </p>
            <ul className="space-y-2 text-sm text-green-800">
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Pagamento mensal recorrente</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Comissão sobre renovações automáticas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>Sem estorno em caso de cancelamento após 30 dias</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg">
            <h3 className="font-bold text-slate-800 mb-2">5.3. Exemplo de Cálculo</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-aura-primary text-white">
                    <th className="p-2 text-left">Item</th>
                    <th className="p-2 text-right">Valor</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr className="border-b">
                    <td className="p-2">Valor FIPE do veículo</td>
                    <td className="p-2 text-right">R$ 50.000,00</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Taxa base mensal (2,5%)</td>
                    <td className="p-2 text-right">R$ 1.250,00</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2">Fator de risco (CEP + perfil)</td>
                    <td className="p-2 text-right">0,85</td>
                  </tr>
                  <tr className="border-b bg-slate-100">
                    <td className="p-2 font-bold">Prêmio mensal (Plano Básico)</td>
                    <td className="p-2 text-right font-bold">R$ 1.062,50</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-2 text-green-700">Comissão corretor (10%)</td>
                    <td className="p-2 text-right text-green-700">R$ 106,25</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-600 mt-2">
              * Valores meramente ilustrativos. Cotação real depende de análise individualizada.
            </p>
          </div>
        </div>
      </Card>

      {/* Seção 6: Prazos e Vigência */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold text-aura-primary mb-4 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6" />
          6. Prazos e Vigência
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-slate-50 p-4 rounded-lg">
            <h3 className="font-bold text-slate-800 mb-2">Início de Vigência</h3>
            <p className="text-sm text-slate-700">
              A cobertura inicia às <strong>24h do dia da emissão</strong> da apólice, 
              após confirmação do pagamento do primeiro prêmio.
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg">
            <h3 className="font-bold text-slate-800 mb-2">Período de Vigência</h3>
            <p className="text-sm text-slate-700">
              <strong>30 dias corridos</strong> a partir do início da vigência, 
              com renovação automática mensal.
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg">
            <h3 className="font-bold text-slate-800 mb-2">Carência</h3>
            <p className="text-sm text-slate-700">
              <strong>Sem carência</strong> para sinistros. Cobertura plena 
              desde o início da vigência.
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg">
            <h3 className="font-bold text-slate-800 mb-2">Prazo de Análise</h3>
            <p className="text-sm text-slate-700">
              Até <strong>24 horas úteis</strong> para análise de proposta e emissão 
              da apólice (se aprovada).
            </p>
          </div>
        </div>
      </Card>

      {/* Seção 7: Canais de Atendimento */}
      <Card className="p-6 bg-gradient-to-r from-slate-50 to-blue-50">
        <h2 className="text-2xl font-bold text-aura-primary mb-4">
          7. Canais de Atendimento
        </h2>

        <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700">
          <div>
            <p className="font-bold text-slate-800 mb-1">📞 Central de Atendimento</p>
            <p>0800 XXX XXXX (seg a sex, 8h às 20h | sáb, 8h às 14h)</p>
          </div>

          <div>
            <p className="font-bold text-slate-800 mb-1">📱 WhatsApp</p>
            <p>(XX) XXXXX-XXXX (atendimento automático 24h)</p>
          </div>

          <div>
            <p className="font-bold text-slate-800 mb-1">💻 Site</p>
            <p>www.s4.administradoramutual.com.br</p>
          </div>

          <div>
            <p className="font-bold text-slate-800 mb-1">📧 E-mail</p>
            <p>contato@administradoramutual.com.br</p>
          </div>

          <div>
            <p className="font-bold text-slate-800 mb-1">📲 App Mobile</p>
            <p>Disponível para iOS e Android</p>
          </div>

          <div>
            <p className="font-bold text-slate-800 mb-1">🏢 Atendimento Presencial</p>
            <p>Mediante agendamento prévio</p>
          </div>
        </div>
      </Card>

      {/* Botão de Download */}
      <div className="flex justify-center">
        <button className="flex items-center gap-2 px-6 py-3 bg-aura-primary text-white rounded-lg hover:bg-aura-primary/90 transition-colors">
          <Download className="w-5 h-5" />
          <span>Baixar Condições de Contratação Completas (PDF)</span>
        </button>
      </div>
    </section>
  );
}
