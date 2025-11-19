import { Card } from "@/components/ui/card";
import { FileText, Download, Shield, AlertCircle } from "lucide-react";

export default function CondicoesGeraisPage() {
  return (
    <section className="container py-10 space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-aura-primary mb-3">
          Condições Gerais - Seguro Auto Mensal
        </h1>
        <p className="text-lg text-slate-600">
          Documentação técnica completa do produto Auto Mensal AURA/BVix
        </p>
      </div>

      {/* Informações Contratuais */}
      <Card className="p-6 bg-blue-50 border-l-4 border-blue-500">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-bold text-blue-900 mb-2">Informação Importante</h3>
            <p className="text-sm text-blue-800">
              Durante o período de autorização da AURA Seguradora pela SUSEP, o produto Auto Mensal 
              é operado pela <strong>BVix Seguradora</strong> em parceria com <strong>Potere Seguro Auto</strong> (MGA) 
              e <strong>Soluções Corretora</strong> (intermediadora).
            </p>
          </div>
        </div>
      </Card>

      {/* Seção 1: Objeto do Seguro */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold text-aura-primary mb-4 flex items-center gap-2">
          <Shield className="w-6 h-6" />
          1. Objeto do Seguro
        </h2>
        <div className="space-y-4 text-slate-700">
          <p>
            O Seguro Auto Mensal tem por objetivo garantir ao segurado, até o limite máximo de indenização 
            (LMI) contratado, o pagamento de indenização por prejuízos causados ao veículo segurado em 
            consequência de riscos cobertos, bem como indenização por danos materiais causados a terceiros.
          </p>
          
          <div className="bg-slate-50 p-4 rounded-lg">
            <h3 className="font-bold text-slate-800 mb-2">Modalidade de Contratação</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-aura-primary mt-1">•</span>
                <span><strong>Vigência:</strong> 30 dias corridos com renovação automática</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-aura-primary mt-1">•</span>
                <span><strong>Pagamento:</strong> Mensal via cartão de crédito, débito automático ou PIX</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-aura-primary mt-1">•</span>
                <span><strong>Cancelamento:</strong> Pode ser solicitado a qualquer momento sem multa</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Seção 2: Riscos Cobertos */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold text-aura-primary mb-4">
          2. Riscos Cobertos
        </h2>
        <div className="space-y-6">
          {/* 2.1 Danos ao Veículo */}
          <div>
            <h3 className="font-bold text-slate-800 mb-3">2.1. Cobertura de Danos ao Veículo</h3>
            <div className="bg-slate-50 p-4 rounded-lg space-y-3">
              <div>
                <p className="font-semibold text-slate-800 mb-1">Eventos Cobertos:</p>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Colisão, capotamento e abalroamento</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Incêndio e explosão</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Roubo e furto total</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Fenômenos naturais (granizo, vendaval, queda de raio)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Danos causados por terceiros (vandalismo)</span>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-slate-800 mb-1">Limite Máximo de Indenização (LMI):</p>
                <p className="text-sm text-slate-700">100% do valor FIPE do veículo na data do sinistro</p>
              </div>

              <div>
                <p className="font-semibold text-slate-800 mb-1">Franquia:</p>
                <p className="text-sm text-slate-700">
                  6% do valor FIPE do veículo, <strong>dedutível diretamente do valor pago ao segurado</strong>
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-800 mb-1">Perda Total:</p>
                <p className="text-sm text-slate-700">
                  Caracteriza-se quando os danos atingem ou ultrapassam 65% do valor FIPE ou quando 
                  há comprometimento estrutural do veículo
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-800 mb-1">Oficina:</p>
                <p className="text-sm text-slate-700">
                  Livre escolha do segurado - não há rede credenciada obrigatória
                </p>
              </div>
            </div>
          </div>

          {/* 2.2 Vidros e Faróis */}
          <div>
            <h3 className="font-bold text-slate-800 mb-3">2.2. Cobertura de Vidros e Faróis</h3>
            <div className="bg-slate-50 p-4 rounded-lg space-y-3">
              <div>
                <p className="font-semibold text-slate-800 mb-1">Itens Cobertos:</p>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Para-brisa, vidros laterais e traseiro</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Faróis dianteiros e traseiros</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Lanternas de sinalização</span>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-slate-800 mb-1">Franquia:</p>
                <p className="text-sm text-slate-700">35% do valor da peça original</p>
              </div>

              <div>
                <p className="font-semibold text-slate-800 mb-1">Execução:</p>
                <p className="text-sm text-slate-700">
                  Substituição em oficina de livre escolha do segurado
                </p>
              </div>
            </div>
          </div>

          {/* 2.3 Responsabilidade Civil */}
          <div>
            <h3 className="font-bold text-slate-800 mb-3">2.3. Responsabilidade Civil - Danos Materiais a Terceiros</h3>
            <div className="bg-slate-50 p-4 rounded-lg space-y-3">
              <div>
                <p className="font-semibold text-slate-800 mb-1">Limite Máximo de Indenização:</p>
                <p className="text-sm text-slate-700">R$ 50.000,00 por sinistro</p>
              </div>

              <div>
                <p className="font-semibold text-slate-800 mb-1">Franquia Opcional:</p>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-aura-primary">•</span>
                    <span><strong>Plano Digital:</strong> 2% do valor do dano (reduz prêmio)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-aura-primary">•</span>
                    <span><strong>Planos Básico/Essencial:</strong> 3% do valor do dano (reduz prêmio)</span>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-slate-800 mb-1">Cobertura:</p>
                <p className="text-sm text-slate-700">
                  Danos materiais causados a veículos e propriedades de terceiros em acidentes de trânsito 
                  nos quais o segurado seja considerado responsável
                </p>
              </div>
            </div>
          </div>

          {/* 2.4 Assistências */}
          <div>
            <h3 className="font-bold text-slate-800 mb-3">2.4. Assistências (Planos Básico e Essencial)</h3>
            <div className="bg-slate-50 p-4 rounded-lg space-y-3">
              <div>
                <p className="font-semibold text-slate-800 mb-1">Assistência 24 horas:</p>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Reboque até 500km de distância</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Chaveiro em caso de perda ou quebra de chave</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Troca de pneu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span>Pane seca (fornecimento de combustível)</span>
                  </li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-slate-800 mb-1">Carro Reserva (Plano Essencial):</p>
                <p className="text-sm text-slate-700">
                  Até 15 dias em caso de sinistro coberto com veículo em reparo
                </p>
              </div>

              <div>
                <p className="font-semibold text-slate-800 mb-1">Seguro APP:</p>
                <p className="text-sm text-slate-700">
                  Cobertura de R$ 10.000,00 para acidentes pessoais de passageiros
                </p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Seção 3: Riscos Excluídos */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold text-aura-primary mb-4">
          3. Riscos Excluídos
        </h2>
        <div className="bg-red-50 p-4 rounded-lg">
          <p className="text-sm font-semibold text-red-900 mb-3">
            Não estão cobertos por este seguro:
          </p>
          <ul className="space-y-2 text-sm text-red-800">
            <li className="flex items-start gap-2">
              <span className="text-red-600">✗</span>
              <span>Danos causados por motorista sem habilitação válida</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600">✗</span>
              <span>Danos causados sob efeito de álcool ou substâncias ilícitas</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600">✗</span>
              <span>Participação em competições, apostas ou provas de velocidade</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600">✗</span>
              <span>Danos decorrentes de guerra, atos terroristas ou comoção civil</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600">✗</span>
              <span>Desgaste natural, vício intrínseco ou defeito de fabricação</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600">✗</span>
              <span>Danos a equipamentos não originais de fábrica (som, acessórios)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600">✗</span>
              <span>Furto de peças ou acessórios sem o veículo completo</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-red-600">✗</span>
              <span>Danos causados por uso comercial não declarado (táxi, app de transporte)</span>
            </li>
          </ul>
        </div>
      </Card>

      {/* Seção 4: Obrigações do Segurado */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold text-aura-primary mb-4">
          4. Obrigações do Segurado
        </h2>
        <div className="space-y-4">
          <div className="bg-slate-50 p-4 rounded-lg">
            <h3 className="font-bold text-slate-800 mb-2">4.1. No Momento da Contratação</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-aura-primary">•</span>
                <span>Prestar informações verdadeiras e completas sobre o veículo e perfil de uso</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-aura-primary">•</span>
                <span>Declarar sinistros anteriores nos últimos 24 meses</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-aura-primary">•</span>
                <span>Informar corretamente CEP de pernoite e uso do veículo</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg">
            <h3 className="font-bold text-slate-800 mb-2">4.2. Durante a Vigência</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-aura-primary">•</span>
                <span>Comunicar alterações no perfil de risco (mudança de CEP, condutor principal)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-aura-primary">•</span>
                <span>Manter o veículo em bom estado de conservação e segurança</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-aura-primary">•</span>
                <span>Manter pagamento em dia para garantir continuidade da cobertura</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg">
            <h3 className="font-bold text-slate-800 mb-2">4.3. Em Caso de Sinistro</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-aura-primary">•</span>
                <span>Comunicar o sinistro em até 24 horas via app, site ou central de atendimento</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-aura-primary">•</span>
                <span>Registrar Boletim de Ocorrência em casos de roubo, furto ou colisão com terceiros</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-aura-primary">•</span>
                <span>Fornecer documentação completa e fotos do sinistro</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-aura-primary">•</span>
                <span>Aguardar autorização da seguradora antes de iniciar reparos</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Seção 5: Regulação e Liquidação de Sinistros */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold text-aura-primary mb-4">
          5. Regulação e Liquidação de Sinistros
        </h2>
        <div className="space-y-4">
          <div className="bg-slate-50 p-4 rounded-lg">
            <h3 className="font-bold text-slate-800 mb-2">5.1. Processo de Regulação</h3>
            <ol className="space-y-2 text-sm text-slate-700 list-decimal list-inside">
              <li>Abertura de sinistro via app, site ou central 0800</li>
              <li>Envio de documentação e fotos pelo segurado</li>
              <li>Análise técnica e validação antifraude</li>
              <li>Vistoria presencial (se necessário)</li>
              <li>Aprovação ou recusa fundamentada</li>
              <li>Pagamento conforme SLA estabelecido</li>
            </ol>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg">
            <h3 className="font-bold text-slate-800 mb-2">5.2. SLAs de Liquidação</h3>
            <p className="text-sm text-slate-700 mb-3">
              Prazos máximos para pagamento após aprovação do sinistro:
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-3 rounded border-l-4 border-green-500">
                <p className="font-bold text-green-600 text-lg">D+5</p>
                <p className="text-xs text-slate-600">Sinistros até R$ 5.000</p>
              </div>
              <div className="bg-white p-3 rounded border-l-4 border-amber-500">
                <p className="font-bold text-amber-600 text-lg">D+10</p>
                <p className="text-xs text-slate-600">De R$ 5.000 a R$ 20.000</p>
              </div>
              <div className="bg-white p-3 rounded border-l-4 border-red-500">
                <p className="font-bold text-red-600 text-lg">D+15</p>
                <p className="text-xs text-slate-600">Acima de R$ 20.000</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg">
            <h3 className="font-bold text-slate-800 mb-2">5.3. Forma de Pagamento</h3>
            <p className="text-sm text-slate-700">
              <strong>Indenização Direta ao Segurado:</strong> O pagamento é feito diretamente ao segurado, 
              com a franquia já deduzida do valor. O segurado escolhe livremente onde reparar o veículo.
            </p>
          </div>
        </div>
      </Card>

      {/* Seção 6: Cancelamento e Renovação */}
      <Card className="p-6">
        <h2 className="text-2xl font-bold text-aura-primary mb-4">
          6. Cancelamento e Renovação
        </h2>
        <div className="space-y-4">
          <div className="bg-slate-50 p-4 rounded-lg">
            <h3 className="font-bold text-slate-800 mb-2">6.1. Renovação Automática</h3>
            <p className="text-sm text-slate-700">
              O seguro renova automaticamente a cada 30 dias, mediante pagamento do prêmio mensal. 
              O segurado será notificado 7 dias antes da renovação.
            </p>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg">
            <h3 className="font-bold text-slate-800 mb-2">6.2. Cancelamento pelo Segurado</h3>
            <p className="text-sm text-slate-700 mb-2">
              O segurado pode cancelar a qualquer momento, sem multa ou taxa de cancelamento.
            </p>
            <ul className="space-y-1 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-aura-primary">•</span>
                <span>Solicitação via app, site ou central de atendimento</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-aura-primary">•</span>
                <span>Cancelamento efetivado em até 48 horas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-aura-primary">•</span>
                <span>Prêmio proporcional aos dias de vigência não será devolvido</span>
              </li>
            </ul>
          </div>

          <div className="bg-slate-50 p-4 rounded-lg">
            <h3 className="font-bold text-slate-800 mb-2">6.3. Cancelamento pela Seguradora</h3>
            <p className="text-sm text-slate-700 mb-2">
              A seguradora pode cancelar o contrato nas seguintes situações:
            </p>
            <ul className="space-y-1 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-red-600">•</span>
                <span>Inadimplência superior a 30 dias</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">•</span>
                <span>Prestação de informações falsas ou omissão de fatos relevantes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">•</span>
                <span>Agravamento do risco não comunicado</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600">•</span>
                <span>Tentativa de fraude comprovada</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Seção 7: Informações Regulatórias */}
      <Card className="p-6 bg-gradient-to-r from-slate-50 to-blue-50">
        <h2 className="text-2xl font-bold text-aura-primary mb-4">
          7. Informações Regulatórias
        </h2>
        <div className="space-y-3 text-sm text-slate-700">
          <p>
            <strong>Seguradora Operacional:</strong> BVix Seguradora S/A - CNPJ: XX.XXX.XXX/0001-XX
          </p>
          <p>
            <strong>SUSEP:</strong> Processo SUSEP nº XXXXX.XXXXXX/XXXX-XX
          </p>
          <p>
            <strong>Código do Produto:</strong> XXXX.XXXXXX/XXXX-XX
          </p>
          <p>
            <strong>Ouvidoria:</strong> 0800 XXX XXXX
          </p>
          <p>
            <strong>SUSEP - Superintendência de Seguros Privados:</strong> 0800 021 8484
          </p>
          <p className="text-xs text-slate-600 mt-4">
            Este documento apresenta um resumo das principais condições gerais. Para informações completas, 
            consulte as Condições Gerais registradas na SUSEP.
          </p>
        </div>
      </Card>

      {/* Botão de Download */}
      <div className="flex justify-center">
        <button className="flex items-center gap-2 px-6 py-3 bg-aura-primary text-white rounded-lg hover:bg-aura-primary/90 transition-colors">
          <Download className="w-5 h-5" />
          <span>Baixar Condições Gerais Completas (PDF)</span>
        </button>
      </div>
    </section>
  );
}
