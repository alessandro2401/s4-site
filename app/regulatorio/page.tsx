import Link from "next/link";
import { Card } from "@/components/ui/card";
import { FileText, Shield, DollarSign, MapPin, CheckCircle, AlertCircle } from "lucide-react";

const docs = [
  { nome: "Estatuto Social", arquivo: "AURA_Seguradora_Estatuto.docx" },
  { nome: "Plano de Negócios", arquivo: "AURA_Plano_Negocios.docx" },
  { nome: "Matriz Antifraude e SLA", arquivo: "AURA_Matriz_Antifraude.xlsx" },
  { nome: "Condições Gerais Auto", arquivo: "AURA_SeguroAuto_Mensal.docx" },
  { nome: "Condições Gerais Vida", arquivo: "AURA_SeguroVida_Mensal.docx" }
];

export default function Page() {
  return (
    <section className="container py-10 space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-aura-primary mb-3">
          Documentação Regulatória – SUSEP
        </h1>
        <p className="text-lg text-slate-600">
          Informações sobre enquadramento regulatório, processo de autorização e documentação oficial
        </p>
      </div>

      {/* Enquadramento Regulatório S4 */}
      <Card className="p-8 bg-gradient-to-r from-aura-primary/10 to-transparent">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-aura-primary/10 rounded-lg">
            <Shield className="w-6 h-6 text-aura-primary" />
          </div>
          <h2 className="text-2xl font-bold text-aura-primary">
            Enquadramento Regulatório – Segmento S4
          </h2>
        </div>
        <p className="text-slate-700 mb-4">
          A AURA Seguradora S/A está enquadrada no <strong>Segmento S4</strong>, conforme Resolução CNSP nº 416/2021 
          e normativos subsequentes. Este segmento é destinado a seguradoras com perfil específico de operação.
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-slate-800">Ativos Totais</p>
              <p className="text-sm text-slate-600">Inferiores a R$ 50 milhões</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-slate-800">Prêmios Emitidos Anuais</p>
              <p className="text-sm text-slate-600">Inferiores a R$ 15 milhões</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-slate-800">Risco de Solvência</p>
              <p className="text-sm text-slate-600">Baixo, com controles adequados</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-slate-800">Estrutura Operacional</p>
              <p className="text-sm text-slate-600">Enxuta e escalável</p>
            </div>
          </div>
        </div>
      </Card>

      {/* Base Legal */}
      <div>
        <h2 className="text-2xl font-bold text-aura-primary mb-4">Base Legal</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="p-4">
            <p className="font-semibold text-slate-800">Resolução CNSP nº 416/2021</p>
            <p className="text-sm text-slate-600">Enquadramento de seguradoras por segmento</p>
          </Card>
          <Card className="p-4">
            <p className="font-semibold text-slate-800">Resolução CNSP nº 416-A/2023</p>
            <p className="text-sm text-slate-600">Atualizações e complementos S4</p>
          </Card>
          <Card className="p-4">
            <p className="font-semibold text-slate-800">Resolução CNSP nº 431/2021</p>
            <p className="text-sm text-slate-600">Capital mínimo requerido</p>
          </Card>
          <Card className="p-4">
            <p className="font-semibold text-slate-800">Resolução CNSP nº 432/2021</p>
            <p className="text-sm text-slate-600">Cálculo de capital de risco</p>
          </Card>
          <Card className="p-4">
            <p className="font-semibold text-slate-800">LC 213/2025</p>
            <p className="text-sm text-slate-600">Lei Complementar de Seguros</p>
          </Card>
        </div>
      </div>

      {/* Regiões de Atuação */}
      <div>
        <h2 className="text-2xl font-bold text-aura-primary mb-4 flex items-center gap-2">
          <MapPin className="w-6 h-6" />
          Regiões de Atuação
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 border-l-4 border-l-blue-500">
            <h3 className="text-xl font-bold text-slate-800 mb-2">Região 3</h3>
            <p className="text-slate-600 mb-3">Nordeste</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">PE</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">RN</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">PB</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">AL</span>
            </div>
          </Card>
          <Card className="p-6 border-l-4 border-l-green-500">
            <h3 className="text-xl font-bold text-slate-800 mb-2">Região 5</h3>
            <p className="text-slate-600 mb-3">Centro-Oeste</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">GO</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">DF</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">TO</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">MT</span>
              <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">MS</span>
            </div>
          </Card>
        </div>
      </div>

      {/* Capital e Reservas */}
      <div>
        <h2 className="text-2xl font-bold text-aura-primary mb-4 flex items-center gap-2">
          <DollarSign className="w-6 h-6" />
          Capital e Reservas Técnicas
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-bold text-slate-800 mb-3">Capital Base (CB)</h3>
            <div className="space-y-2">
              <div>
                <p className="text-sm font-semibold text-slate-600">Região 3</p>
                <p className="text-slate-800">R$ 270.000</p>
                <p className="text-xs text-slate-500">(Fixa R$ 180k + Variável R$ 90k)</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-600">Região 5</p>
                <p className="text-slate-800">R$ 900.000</p>
                <p className="text-xs text-slate-500">(Fixa R$ 600k + Variável R$ 300k)</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-bold text-slate-800 mb-3">Capital de Risco (CR)</h3>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-aura-primary mt-1">•</span>
                <span>Risco de subscrição (danos e pessoas)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-aura-primary mt-1">•</span>
                <span>Risco de crédito</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-aura-primary mt-1">•</span>
                <span>Risco operacional</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-aura-primary mt-1">•</span>
                <span>Risco de mercado</span>
              </li>
            </ul>
            <p className="text-sm text-slate-600 mt-3">
              <strong>CMR:</strong> Maior entre CB e CR
            </p>
          </Card>

          <Card className="p-6 bg-aura-primary/5">
            <h3 className="text-lg font-bold text-slate-800 mb-3">Capital Social</h3>
            <p className="text-3xl font-bold text-aura-primary mb-2">R$ 3.500.000</p>
            <p className="text-sm text-slate-600">
              Capital integralizado que proporciona margem de segurança acima do CMR estimado
            </p>
          </Card>
        </div>

        <Card className="p-6 mt-6">
          <h3 className="text-lg font-bold text-slate-800 mb-3">Reservas Técnicas</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold text-slate-800">PSAL</p>
              <p className="text-sm text-slate-600">Provisão de Sinistros Avisados e Não Liquidados</p>
            </div>
            <div>
              <p className="font-semibold text-slate-800">IBNR</p>
              <p className="text-sm text-slate-600">Provisão de Sinistros Ocorridos e Não Avisados</p>
            </div>
            <div>
              <p className="font-semibold text-slate-800">PMBAC</p>
              <p className="text-sm text-slate-600">Provisão Matemática de Benefícios a Conceder (Vida)</p>
            </div>
            <div>
              <p className="font-semibold text-slate-800">Outras Provisões</p>
              <p className="text-sm text-slate-600">Conforme exigências regulatórias SUSEP</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Processo de Autorização */}
      <div>
        <h2 className="text-2xl font-bold text-aura-primary mb-4">
          Processo de Autorização SUSEP
        </h2>
        <div className="space-y-4">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-100 rounded-lg flex-shrink-0">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  Planejamento e Estruturação Jurídica
                </h3>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Constituição de Sociedade Anônima (S/A) com objeto exclusivo de seguros</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Elaboração do Estatuto Social, Plano de Negócios e DRE projetado (3-5 anos)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Definição de acionistas controladores, diretores técnicos e atuário responsável</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Contratação de empresa de auditoria independente</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-green-100 rounded-lg flex-shrink-0">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  Protocolo na SUSEP
                </h3>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Protocolo formal do pedido de autorização (Sistema SEI/SUSEP)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Análise documental e de viabilidade econômico-financeira</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Exigências técnicas complementares (eventuais diligências)</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-purple-100 rounded-lg flex-shrink-0">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">
                  Aprovação e Registro
                </h3>
                <ul className="space-y-1 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span>Aprovação da constituição pela SUSEP</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span>Registro da seguradora no Cadastro SUSEP</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span>Liberação para início das operações após comprovação de capital e estrutura mínima</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Documentos para Download */}
      <div>
        <h2 className="text-2xl font-bold text-aura-primary mb-4 flex items-center gap-2">
          <FileText className="w-6 h-6" />
          Documentos Disponíveis
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {docs.map(d => (
            <Card key={d.nome} className="p-6 flex flex-col gap-2 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-slate-800">{d.nome}</h3>
              <p className="text-sm text-slate-600">Acesso e download do documento institucional.</p>
              <Link 
                href={`/docs/${d.arquivo}`} 
                className="text-aura-primary hover:text-aura-secondary font-medium transition-colors"
              >
                Baixar documento →
              </Link>
            </Card>
          ))}
        </div>
      </div>

      {/* Aviso Regulatório */}
      <Card className="p-6 bg-amber-50 border-l-4 border-l-amber-500">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-slate-800 mb-2">Aviso Regulatório</h3>
            <p className="text-sm text-slate-700">
              A AURA Seguradora S/A opera sob regulação e fiscalização da SUSEP - Superintendência de Seguros Privados. 
              Todas as operações seguem rigorosamente as normas estabelecidas pelo CNSP - Conselho Nacional de Seguros Privados 
              e demais órgãos reguladores do setor de seguros no Brasil.
            </p>
          </div>
        </div>
      </Card>
    </section>
  );
}
