import Link from "next/link";
import { Card } from "@/components/ui/card";
import { FileText, Shield, DollarSign, MapPin, CheckCircle, AlertCircle, ExternalLink, Award } from "lucide-react";

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
          A AURA Seguradora S/A está enquadrada no <strong>Segmento S4</strong>, conforme Resolução CNSP nº 388/2020 
          e normativos subsequentes. Este segmento é destinado a seguradoras com perfil específico de operação, 
          correspondendo ao menor nível de porte e perfil de risco mais simplificado, com <strong>diversas dispensas de requisitos regulatórios</strong>.
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

      {/* Vantagens do Segmento S4 */}
      <Card className="p-6 bg-green-50 border-l-4 border-l-green-500">
        <div className="flex items-start gap-3">
          <Award className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-slate-800 mb-2">Vantagens do Segmento S4</h3>
            <ul className="text-sm text-slate-700 space-y-1">
              <li>• Requisitos de capital mínimo reduzidos em comparação aos segmentos S1, S2 e S3</li>
              <li>• Dispensa de comitês obrigatórios (as atividades são exercidas pela própria diretoria)</li>
              <li>• Estrutura de governança simplificada</li>
              <li>• Menor custo operacional de compliance</li>
              <li>• Ideal para seguradoras focadas em nichos específicos e operações regionais</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Base Legal */}
      <div>
        <h2 className="text-2xl font-bold text-aura-primary mb-4">Base Legal</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="p-4 hover:shadow-md transition-shadow">
            <p className="font-semibold text-slate-800">Resolução CNSP nº 388/2020</p>
            <p className="text-sm text-slate-600 mb-2">Segmentação de supervisionadas (S1 a S4)</p>
            <Link 
              href="https://www.gov.br/susep/pt-br" 
              target="_blank"
              className="text-xs text-aura-primary hover:underline flex items-center gap-1"
            >
              Ver na SUSEP <ExternalLink className="w-3 h-3" />
            </Link>
          </Card>
          <Card className="p-4 hover:shadow-md transition-shadow">
            <p className="font-semibold text-slate-800">Resolução CNSP nº 416/2021</p>
            <p className="text-sm text-slate-600 mb-2">Sistema de Controles Internos, Gestão de Riscos e Auditoria Interna</p>
            <Link 
              href="https://www.gov.br/susep/pt-br" 
              target="_blank"
              className="text-xs text-aura-primary hover:underline flex items-center gap-1"
            >
              Ver na SUSEP <ExternalLink className="w-3 h-3" />
            </Link>
          </Card>
          <Card className="p-4 hover:shadow-md transition-shadow">
            <p className="font-semibold text-slate-800">Resolução CNSP nº 432/2021</p>
            <p className="text-sm text-slate-600 mb-2">Provisões técnicas, capitais de risco, PLA e CMR</p>
            <Link 
              href="https://www.gov.br/susep/pt-br" 
              target="_blank"
              className="text-xs text-aura-primary hover:underline flex items-center gap-1"
            >
              Ver na SUSEP <ExternalLink className="w-3 h-3" />
            </Link>
          </Card>
          <Card className="p-4 hover:shadow-md transition-shadow">
            <p className="font-semibold text-slate-800">Circular SUSEP nº 700/2024</p>
            <p className="text-sm text-slate-600 mb-2">Procedimentos de autorização (consolidada)</p>
            <Link 
              href="https://www.gov.br/susep/pt-br" 
              target="_blank"
              className="text-xs text-aura-primary hover:underline flex items-center gap-1"
            >
              Ver na SUSEP <ExternalLink className="w-3 h-3" />
            </Link>
          </Card>
          <Card className="p-4 hover:shadow-md transition-shadow">
            <p className="font-semibold text-slate-800">Lei Complementar nº 213/2025</p>
            <p className="text-sm text-slate-600 mb-2">Cooperativas de seguros e proteção patrimonial mutualista</p>
            <Link 
              href="https://www.planalto.gov.br/ccivil_03/leis/lcp/Lcp213.htm" 
              target="_blank"
              className="text-xs text-aura-primary hover:underline flex items-center gap-1"
            >
              Ver no Planalto <ExternalLink className="w-3 h-3" />
            </Link>
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
        
        {/* Nota sobre fonte dos dados */}
        <Card className="p-4 bg-blue-50 border-l-4 border-l-blue-500 mb-6">
          <p className="text-sm text-slate-700">
            <strong>Fonte:</strong> Valores conforme Anexo XXIII da Resolução CNSP nº 432/2021 e documento 
            "Cálculo do Capital Mínimo Requerido - Orientações da Susep ao Mercado" (Março/2025).
          </p>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-bold text-slate-800 mb-3">Capital Base (CB) - Segmento S4</h3>
            <div className="space-y-4">
              <div className="p-3 bg-slate-50 rounded-lg">
                <p className="text-sm font-semibold text-slate-600">Parcela Fixa (todas as regiões)</p>
                <p className="text-xl font-bold text-aura-primary">R$ 1.200.000</p>
              </div>
              <div className="border-t pt-3">
                <p className="text-sm font-semibold text-slate-600 mb-2">Parcela Variável por Região:</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-700">Região 3 (PE, RN, PB, AL)</span>
                    <span className="font-semibold text-slate-800">R$ 36.000</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-slate-700">Região 5 (GO, DF, TO, MT, MS)</span>
                    <span className="font-semibold text-slate-800">R$ 120.000</span>
                  </div>
                </div>
              </div>
              <div className="border-t pt-3">
                <p className="text-sm font-semibold text-slate-600">CB Total (Regiões 3 + 5)</p>
                <p className="text-lg font-bold text-aura-primary">R$ 1.356.000</p>
                <p className="text-xs text-slate-500">(R$ 1.200.000 + R$ 36.000 + R$ 120.000)</p>
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
            <div className="mt-4 p-3 bg-slate-50 rounded-lg">
              <p className="text-sm text-slate-600">
                <strong>CMR:</strong> Capital Mínimo Requerido = Maior valor entre CB e CR
              </p>
            </div>
          </Card>

          <Card className="p-6 bg-aura-primary/5 border-2 border-aura-primary/20">
            <h3 className="text-lg font-bold text-slate-800 mb-3">Capital Social Integralizado</h3>
            <p className="text-3xl font-bold text-aura-primary mb-2">R$ 3.500.000</p>
            <p className="text-sm text-slate-600 mb-3">
              Capital integralizado que proporciona <strong>margem de segurança de 158%</strong> acima do Capital Base mínimo
            </p>
            <div className="p-3 bg-green-100 rounded-lg">
              <p className="text-sm text-green-800 font-medium">
                ✓ Atende com folga aos requisitos de solvência
              </p>
            </div>
          </Card>
        </div>

        <Card className="p-6 mt-6">
          <h3 className="text-lg font-bold text-slate-800 mb-3">Provisões Técnicas</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold text-slate-800">PPNG</p>
              <p className="text-sm text-slate-600">Provisão de Prêmios Não Ganhos</p>
            </div>
            <div>
              <p className="font-semibold text-slate-800">PSL</p>
              <p className="text-sm text-slate-600">Provisão de Sinistros a Liquidar</p>
            </div>
            <div>
              <p className="font-semibold text-slate-800">IBNR</p>
              <p className="text-sm text-slate-600">Provisão de Sinistros Ocorridos e Não Avisados</p>
            </div>
            <div>
              <p className="font-semibold text-slate-800">PMBAC</p>
              <p className="text-sm text-slate-600">Provisão Matemática de Benefícios a Conceder (Vida)</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Processo de Autorização */}
      <div>
        <h2 className="text-2xl font-bold text-aura-primary mb-4">
          Processo de Autorização SUSEP
        </h2>
        <p className="text-slate-600 mb-4">
          Conforme Circular SUSEP nº 700/2024, o processo de autorização para funcionamento de seguradoras segue as etapas abaixo:
        </p>
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
