"use client";

import { useState } from "react";
import { Shield, DollarSign, AlertTriangle, Scale, TrendingUp, Lock, Gavel, Globe, ChevronDown, FileCheck, Download } from "lucide-react";

interface BlocoItem {
  numero: string;
  titulo: string;
  texto: string;
  subitens?: string[];
}

interface Bloco {
  id: number;
  titulo: string;
  descricao: string;
  cor: string;
  corBg: string;
  corBorder: string;
  corText: string;
  icon: React.ReactNode;
  itens: BlocoItem[];
}

function AccordionItem({ bloco }: { bloco: Bloco }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`bg-white rounded-xl mb-4 shadow-sm border-l-4 ${bloco.corBorder} overflow-hidden transition-all duration-300`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 flex items-center justify-between hover:bg-slate-50 transition-colors"
      >
        <div className="flex-1">
          <h3 className={`text-lg font-bold ${bloco.corText} mb-1 flex items-center gap-2`}>
            {bloco.icon} {bloco.titulo}
          </h3>
          <p className="text-sm text-slate-600">{bloco.descricao}</p>
          <p className="text-xs text-slate-400 mt-1">{bloco.itens.length} questões — Clique para expandir</p>
        </div>
        <ChevronDown className={`w-6 h-6 ${bloco.corText} transition-transform duration-300 flex-shrink-0 ml-4 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      
      <div className={`transition-all duration-500 ease-in-out ${isOpen ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}>
        <div className="px-6 pb-6 space-y-4">
          <div className="border-t border-slate-200 pt-4"></div>
          {bloco.itens.map((item, idx) => (
            <div key={idx} className={`${bloco.corBg} rounded-lg p-4 border ${bloco.corBorder.replace("border-l-4 ", "")}`}>
              <div className="flex items-start gap-3">
                <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${bloco.cor} text-white text-sm font-bold flex-shrink-0`}>
                  {item.numero}
                </span>
                <div className="flex-1">
                  <h4 className={`font-bold ${bloco.corText} text-sm mb-2`}>{item.titulo}</h4>
                  <p className="text-sm text-slate-700 leading-relaxed">{item.texto}</p>
                  {item.subitens && item.subitens.length > 0 && (
                    <ul className="mt-3 space-y-2">
                      {item.subitens.map((sub, sidx) => (
                        <li key={sidx} className="text-sm text-slate-600 pl-4 border-l-2 border-slate-300">
                          {sub}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const blocos: Bloco[] = [
  {
    id: 1,
    titulo: "Bloco 1: Blindagem Patrimonial Individual",
    descricao: "Define a estrutura de participação de cada sócio e estabelece barreiras para proteger o patrimônio pessoal contra riscos originados por um deles.",
    cor: "bg-blue-600",
    corBg: "bg-blue-50",
    corBorder: "border-blue-500",
    corText: "text-blue-700",
    icon: <Shield className="w-5 h-5" />,
    itens: [
      {
        numero: "1",
        titulo: "Estrutura de Participação",
        texto: "Os sócios integralizarão suas participações como Pessoas Físicas ou por meio de Pessoas Jurídicas (Holdings Patrimoniais)? Qual estrutura será exigida ou recomendada para garantir a segregação patrimonial?"
      },
      {
        numero: "2",
        titulo: "Responsabilidade por Dívidas Pessoais",
        texto: "Como o Acordo de Sócios impedirá que dívidas pessoais, processos de divórcio, partilha de bens ou sucessão de um dos sócios afetem a sociedade ou a participação dos demais? Haverá cláusula de bloqueio à penhora de quotas/ações por dívidas particulares?"
      },
      {
        numero: "3",
        titulo: "Vedações a Garantias Pessoais",
        texto: "O Acordo de Sócios vedará expressamente que qualquer sócio preste aval, fiança ou qualquer outra forma de garantia pessoal em nome da sociedade (Seguradora ou Administradora Mutualista) sem a aprovação unânime dos demais?"
      },
      {
        numero: "4",
        titulo: "Proibição de Solidariedade",
        texto: "Haverá cláusula explícita que proíba a responsabilidade solidária ou subsidiária dos demais sócios por obrigações ou atos particulares de um dos membros da sociedade, especialmente em relação a passivos fiscais, trabalhistas ou cíveis?"
      },
      {
        numero: "5",
        titulo: "Holding Operacional vs. Patrimonial",
        texto: "A estrutura societária contemplará a criação de uma holding operacional que controlará a Seguradora e a Administradora, separando o risco operacional do patrimônio dos sócios? Como será a arquitetura dessa estrutura?"
      }
    ]
  },
  {
    id: 2,
    titulo: "Bloco 2: Capital, Aportes e Inadimplência",
    descricao: "Regras claras de capitalização e consequências automáticas para inadimplência — risco crítico em negócios regulados que demandam capital intensivo.",
    cor: "bg-emerald-600",
    corBg: "bg-emerald-50",
    corBorder: "border-emerald-500",
    corText: "text-emerald-700",
    icon: <DollarSign className="w-5 h-5" />,
    itens: [
      {
        numero: "6",
        titulo: "Chamadas de Capital (Capital Calls)",
        texto: "Como serão definidas as necessidades de aportes futuros (para aumento de capital, cobertura de prejuízos, investimentos estratégicos, etc.)? Qual será o quórum de aprovação para uma chamada de capital?"
      },
      {
        numero: "7",
        titulo: "Procedimento e Prazos",
        texto: "Uma vez aprovada a chamada de capital, qual será o prazo para a integralização por parte de cada sócio? O procedimento será formalizado via notificação extrajudicial com aviso de recebimento para garantir a ciência inequívoca de todos?"
      },
      {
        numero: "8",
        titulo: "Consequências da Inadimplência",
        texto: "Consequências automáticas e progressivas para o sócio inadimplente, incluindo multa, juros de mora, suspensão de direitos políticos e econômicos.",
        subitens: [
          "Multa e Juros: Qual será a multa (e.g., 10%, 20%) e os juros de mora aplicados sobre o valor não integralizado a partir do primeiro dia de atraso?",
          "Suspensão de Direitos Políticos: A partir de quantos dias de inadimplência o sócio devedor terá seus direitos de voto suspensos em todas as instâncias de governança (Conselho, Assembleia)?",
          "Suspensão de Direitos Econômicos: A inadimplência suspenderá o direito a recebimento de pró-labore, dividendos ou qualquer outra forma de remuneração até a quitação do débito?"
        ]
      },
      {
        numero: "9",
        titulo: "Mecanismo de Suprimento (Cure Period)",
        texto: "Os sócios adimplentes terão o direito (mas não a obrigação) de aportar o valor devido pelo sócio inadimplente, para não comprometer a operação? Como esse aporte será tratado (mútuo conversível, opção de compra)?"
      },
      {
        numero: "10",
        titulo: "Diluição Compulsória (Punitive Dilution)",
        texto: "Caso o sócio não pague sua chamada de capital no prazo estipulado, os demais sócios (que aportaram a sua parte e/ou a do inadimplente) terão o direito de subscrever a participação do devedor com um deságio punitivo? Qual será o percentual desse deságio (e.g., 30%, 50%) sobre o valor patrimonial da participação?"
      },
      {
        numero: "11",
        titulo: "Opção de Compra Forçada (Buy-out)",
        texto: "A inadimplência recorrente ou por um prazo superior a um determinado período (e.g., 90 dias) dará aos sócios adimplentes o direito de comprar compulsoriamente a participação do sócio devedor? Como será calculado o valor de compra nesse cenário (e.g., valor patrimonial contábil com deságio punitivo)?"
      }
    ]
  },
  {
    id: 3,
    titulo: "Bloco 3: Responsabilidade Regulatória e Técnica",
    descricao: "Alocação de responsabilidades perante os órgãos reguladores e mecanismos para isolar a operação de riscos gerados pela conduta de um sócio ou administrador.",
    cor: "bg-red-600",
    corBg: "bg-red-50",
    corBorder: "border-red-500",
    corText: "text-red-700",
    icon: <AlertTriangle className="w-5 h-5" />,
    itens: [
      {
        numero: "12",
        titulo: "Responsável Técnico perante a SUSEP",
        texto: "Quem será o Diretor/Administrador estatutariamente designado como responsável técnico perante a SUSEP para a Seguradora e para a Administradora Mutualista? Quais critérios de qualificação e experiência serão exigidos para essa função?"
      },
      {
        numero: "13",
        titulo: "Segregação de Responsabilidades",
        texto: "O Acordo de Sócios detalhará a completa segregação de responsabilidades entre a operação da Seguradora e da Administradora Mutualista, em linha com a LC 213/2025? Como será garantido que as atividades e os riscos de uma não contaminem a outra?"
      },
      {
        numero: "14",
        titulo: "Afastamento por Risco Regulatório",
        texto: "Se um sócio ou administrador por ele indicado cometer um ato que coloque em risco a autorização de funcionamento (e.g., perda do requisito de idoneidade, sanção da SUSEP), qual será o procedimento para seu afastamento imediato e automático do cargo e de qualquer função de gestão?"
      },
      {
        numero: "15",
        titulo: "Mecanismo de Voto de Afastamento",
        texto: "O Acordo preverá uma cláusula que permita aos demais sócios, por maioria qualificada (e.g., 2/3), votar pelo afastamento de um sócio de suas funções administrativas caso sua conduta seja considerada um risco reputacional ou regulatório grave, mesmo antes de uma sanção formal da SUSEP?"
      },
      {
        numero: "16",
        titulo: "Responsabilidade por Multas e Sanções",
        texto: "Se a empresa for multada pela SUSEP devido à conduta dolosa ou culposa comprovada de um sócio específico, esse sócio será obrigado a ressarcir a sociedade integralmente? Haverá direito de regresso automático previsto em contrato?"
      },
      {
        numero: "17",
        titulo: "Comunicação com o Regulador",
        texto: "Quem terá a prerrogativa de se comunicar oficialmente com a SUSEP e o CNSP? Como será o fluxo de aprovação interna para o envio de documentos e respostas a ofícios, a fim de evitar comunicações desalinhadas ou não autorizadas?"
      }
    ]
  },
  {
    id: 4,
    titulo: "Bloco 4: Poder, Veto e Travamento Decisório",
    descricao: "Com participações igualitárias (25% cada), o risco de impasses decisórios é elevado. Mecanismos para evitar a paralisia da gestão.",
    cor: "bg-amber-600",
    corBg: "bg-amber-50",
    corBorder: "border-amber-500",
    corText: "text-amber-700",
    icon: <Scale className="w-5 h-5" />,
    itens: [
      {
        numero: "18",
        titulo: "Matérias de Veto (Quórum Qualificado)",
        texto: "Quais decisões exigirão aprovação por quórum qualificado (e.g., 75% ou unanimidade)? A lista deve ser exaustiva e limitada a atos de extrema relevância (e.g., mudança de objeto social, fusão, venda de controle, endividamento acima de X% do PL), para evitar o uso abusivo do poder de veto no dia a dia."
      },
      {
        numero: "19",
        titulo: "Decisões de Gestão Ordinária",
        texto: "As decisões de gestão do dia a dia serão de competência da Diretoria Executiva, sem necessidade de aprovação constante do Conselho de Administração ou dos sócios, para garantir agilidade operacional?"
      },
      {
        numero: "20",
        titulo: "Mecanismos de Desempate (Deadlock)",
        texto: "Em caso de empate em deliberações do Conselho de Administração ou da Assembleia de Sócios, qual será o mecanismo de desempate?",
        subitens: [
          "Voto de Minerva: O Presidente do Conselho terá voto de qualidade?",
          "Mediação Obrigatória: As partes deverão submeter o impasse a um mediador independente antes de qualquer outra medida?",
          "Arbitragem Acelerada: O Acordo preverá uma cláusula compromissória para submeter o impasse a um tribunal arbitral, com procedimento expedito?"
        ]
      },
      {
        numero: "21",
        titulo: "Exclusão por Justa Causa Societária",
        texto: "O bloqueio reiterado e injustificado de decisões vitais para a companhia, com o claro intuito de prejudicar a operação ou obter vantagens indevidas, será tipificado como justa causa para a exclusão do sócio obstrutivo?"
      },
      {
        numero: "22",
        titulo: "Shotgun Clause (Buy-Sell Agreement)",
        texto: "O Acordo contemplará uma cláusula de \"shotgun\"? Como ela será estruturada? (e.g., o sócio A oferece comprar a participação do sócio B por um preço X; o sócio B é obrigado a vender ou a comprar a participação de A pelo mesmo preço X). Este é um mecanismo drástico, mas eficaz para resolver impasses graves."
      }
    ]
  },
  {
    id: 5,
    titulo: "Bloco 5: Remuneração, Retiradas e Distribuição",
    descricao: "Garantir que a política de remuneração e distribuição de lucros não comprometa a solvência, o capital regulatório e a capacidade de investimento da companhia.",
    cor: "bg-indigo-600",
    corBg: "bg-indigo-50",
    corBorder: "border-indigo-500",
    corText: "text-indigo-700",
    icon: <TrendingUp className="w-5 h-5" />,
    itens: [
      {
        numero: "23",
        titulo: "Política de Pró-labore",
        texto: "Como será definido o pró-labore dos sócios que atuarem na gestão? Será atrelado a benchmarks de mercado para funções similares? A aprovação dependerá de qual quórum?"
      },
      {
        numero: "24",
        titulo: "Remuneração Variável",
        texto: "Haverá política de remuneração variável (bônus)? Quais serão os gatilhos (metas de performance, lucro líquido, etc.)? A distribuição de bônus será suspensa caso a companhia não atenda aos requisitos de capital da SUSEP?"
      },
      {
        numero: "25",
        titulo: "Política de Distribuição de Dividendos",
        texto: "Qual percentual mínimo do lucro líquido será retido para reinvestimento, constituição de reservas de capital e fortalecimento da solvência? A distribuição de dividendos será condicionada à aprovação prévia do Conselho de Administração e ao cumprimento de todos os indicadores regulatórios da SUSEP?"
      },
      {
        numero: "26",
        titulo: "Vedação a Antecipações",
        texto: "O Acordo de Sócios vedará expressamente qualquer forma de antecipação de lucros, distribuição de resultados intermediários ou retiradas que não sejam baseadas em balanços anuais auditados e aprovados?"
      },
      {
        numero: "27",
        titulo: "Limites de Endividamento e Despesas",
        texto: "Serão estabelecidos limites claros para despesas administrativas e endividamento da companhia (e.g., atrelados a um percentual da receita ou do PL), cuja extrapolação exija aprovação por quórum qualificado?"
      }
    ]
  },
  {
    id: 6,
    titulo: "Bloco 6: Conflitos, Conduta e Quebra de Confiança",
    descricao: "Código de conduta claro e consequências para a violação de deveres fiduciários, protegendo a empresa de comportamentos desalinhados ou maliciosos.",
    cor: "bg-pink-600",
    corBg: "bg-pink-50",
    corBorder: "border-pink-500",
    corText: "text-pink-700",
    icon: <Lock className="w-5 h-5" />,
    itens: [
      {
        numero: "28",
        titulo: "Dever de Dedicação e Não Concorrência (Non-Compete)",
        texto: "O Acordo preverá uma cláusula de não concorrência, impedindo que os sócios participem, direta ou indiretamente, de negócios concorrentes enquanto forem sócios e por um período após a sua saída (e.g., 2 a 5 anos)? A cláusula abrangerá os mercados de seguros, proteção mutualista, MGA, corretoras e consórcios?"
      },
      {
        numero: "29",
        titulo: "Confidencialidade e Não Aliciamento (Non-Solicitation)",
        texto: "Haverá cláusula de confidencialidade (NDA) e de não aliciamento, proibindo os sócios de usar informações estratégicas da companhia para fins privados e de contratar/assediar colaboradores-chave por um período determinado após a saída?"
      },
      {
        numero: "30",
        titulo: "Condutas Vedadas",
        texto: "O Acordo listará condutas específicas que são consideradas quebra grave do dever fiduciário, como uso indevido da marca, desvio de oportunidade de negócio, negociação com partes relacionadas sem aprovação, e exposição negativa da empresa na mídia ou em redes sociais?"
      },
      {
        numero: "31",
        titulo: "Consequências da Quebra de Dever Fiduciário",
        texto: "A comprovação de uma conduta vedada resultará em consequências automáticas, como a perda do cargo de administrador, a aplicação de multa contratual (liquidated damages) e a possibilidade de exclusão por justa causa?"
      },
      {
        numero: "32",
        titulo: "Canal de Denúncias e Apuração",
        texto: "Será implementado um mecanismo formal para apuração de denúncias de má conduta de um sócio, garantindo o direito de defesa, mas com um procedimento rápido e objetivo, possivelmente conduzido por um comitê independente ou por auditoria externa?"
      }
    ]
  },
  {
    id: 7,
    titulo: "Bloco 7: Saída, Exclusão e Liquidação",
    descricao: "Garantir a continuidade da empresa e evitar a judicialização em eventos de saída de sócios, sejam eles voluntários ou forçados.",
    cor: "bg-teal-600",
    corBg: "bg-teal-50",
    corBorder: "border-teal-500",
    corText: "text-teal-700",
    icon: <Gavel className="w-5 h-5" />,
    itens: [
      {
        numero: "33",
        titulo: "Direito de Saída Voluntária (Retirada)",
        texto: "A partir de quando um sócio poderá exercer seu direito de retirada? Haverá um período de lock-up inicial (e.g., 5 anos) durante o qual a saída não é permitida para garantir a estabilidade do projeto?"
      },
      {
        numero: "34",
        titulo: "Procedimento de Saída",
        texto: "Qual será o procedimento para a saída voluntária? Notificação prévia com antecedência mínima (e.g., 180 dias)? Como será o apuramento de haveres? O pagamento será parcelado (e.g., em 24 ou 36 meses) para não descapitalizar a empresa?"
      },
      {
        numero: "35",
        titulo: "Valuation para Saída",
        texto: "Como será calculado o valor da participação em caso de saída (voluntária, morte, divórcio)?",
        subitens: [
          "Fórmula Pré-definida: Será usada uma fórmula baseada em múltiplos de lucro ou valor patrimonial contábil?",
          "Avaliação por Terceiro: Será contratada uma empresa de avaliação independente (e.g., uma das \"Big Four\")? Como será o procedimento para escolhê-la e quem arcará com os custos?"
        ]
      },
      {
        numero: "36",
        titulo: "Exclusão por Justa Causa",
        texto: "O Acordo listará de forma exaustiva os atos considerados \"justa causa\" para exclusão do sócio (além dos previstos em lei), como inadimplência de aportes, quebra de não concorrência, condenação criminal transitada em julgado, sanção da SUSEP por ato doloso, etc.?"
      },
      {
        numero: "37",
        titulo: "Valuation na Exclusão por Justa Causa",
        texto: "Em caso de exclusão por justa causa, o valor a ser pago pela participação sofrerá um deságio punitivo (e.g., 50%) sobre o valor de mercado apurado? O pagamento também será feito de forma parcelada?"
      },
      {
        numero: "38",
        titulo: "Direito de Preferência e Tag Along",
        texto: "Em caso de venda da participação a terceiros, os sócios remanescentes terão direito de preferência na aquisição, nas mesmas condições? E em caso de venda do controle, os minoritários terão direito de venda conjunta (tag along) de 100%?"
      },
      {
        numero: "39",
        titulo: "Falecimento, Incapacidade e Divórcio",
        texto: "Como serão tratados esses eventos? A sociedade será obrigada a aceitar herdeiros ou ex-cônjuges como sócios? Ou o Acordo preverá a liquidação obrigatória da participação, transformando-a em uma obrigação de pagamento aos sucessores para proteger a governança e a estabilidade do quadro societário?"
      }
    ]
  },
  {
    id: 8,
    titulo: "Bloco 8: Captação de Recursos via Investidores Externos",
    descricao: "Regras, instrumentos e governança para captação de recursos de investidores que não ingressarão no quadro societário.",
    cor: "bg-cyan-600",
    corBg: "bg-cyan-50",
    corBorder: "border-cyan-500",
    corText: "text-cyan-700",
    icon: <Globe className="w-5 h-5" />,
    itens: [
      {
        numero: "45",
        titulo: "Momento e Gatilhos para a Captação",
        texto: "Em que estágio de maturidade da companhia (e.g., após atingir o breakeven, após X anos de operação, para financiar um plano de expansão específico) será permitido o chamamento de investidores externos? A decisão de buscar esse tipo de investimento exigirá aprovação unânime dos sócios?"
      },
      {
        numero: "46",
        titulo: "Instrumentos de Investimento",
        texto: "Qual será o instrumento jurídico utilizado para formalizar o investimento? A sociedade se limitará a um tipo específico ou poderá utilizar diferentes modelos conforme a necessidade?",
        subitens: [
          "Contrato de Participação (Investidor-Anjo): Aportes de capital com remuneração atrelada aos resultados, sem que o investidor se torne sócio, nos termos da LC 155/2016.",
          "Sociedade em Conta de Participação (SCP): A empresa atua como sócia ostensiva e o investidor como sócio participante (oculto), com participação nos lucros definida em contrato.",
          "Debêntures Simples ou Notas Comerciais: Emissão de títulos de dívida pela S.A. (Seguradora), com remuneração atrelada a metas de performance ou resultados (profit sharing), sem direito à conversão em ações.",
          "Mútuo Conversível em Participação nos Resultados: Contrato de empréstimo que pode ser convertido em um direito de participação nos lucros futuros da companhia."
        ]
      },
      {
        numero: "47",
        titulo: "Critérios e Análise do Investidor (Due Diligence)",
        texto: "Qual será o processo de análise e aceitação de um investidor externo?",
        subitens: [
          "Origem dos Recursos: Verificação rigorosa da origem lícita dos fundos, em conformidade com as políticas de PLD-FT.",
          "Idoneidade Reputacional: Análise de antecedentes criminais, processos judiciais e administrativos, e reputação no mercado.",
          "Conflito de Interesses: Verificação de participação ou interesse em negócios concorrentes.",
          "Capacidade Financeira: Comprovação de patrimônio e capacidade financeira para realizar o investimento."
        ]
      },
      {
        numero: "48",
        titulo: "Direitos e Vedações do Investidor",
        texto: "O contrato de investimento deixará explícito os direitos e limitações do investidor externo.",
        subitens: [
          "Não terá direito a voto nem qualquer poder de ingerência na administração da companhia.",
          "Não será considerado sócio para nenhum fim de direito e não responderá por quaisquer dívidas ou obrigações da sociedade.",
          "Terá direito a receber informações financeiras periódicas (reportes trimestrais/anuais) para acompanhar a performance do seu investimento.",
          "Estará sujeito a um rigoroso dever de confidencialidade sobre todas as informações da companhia a que tiver acesso."
        ]
      },
      {
        numero: "49",
        titulo: "Estrutura de Rentabilidade",
        texto: "Como será calculada a rentabilidade do investidor? Será um percentual fixo sobre o lucro líquido? Uma participação na receita bruta? Haverá um teto (cap) e um piso para a remuneração anual?"
      },
      {
        numero: "50",
        titulo: "Opções e Regras de Saída (Exit)",
        texto: "O contrato preverá com clareza as opções de saída do investidor.",
        subitens: [
          "Prazo de Resgate: Um prazo mínimo de investimento (e.g., 3 a 5 anos) e um prazo máximo para o desinvestimento (e.g., 7 a 10 anos).",
          "Janelas de Liquidez: Serão definidas janelas de oportunidade específicas (e.g., anualmente, após a divulgação do balanço) para o investidor solicitar o resgate?",
          "Forma de Pagamento: O valor do resgate será pago à vista ou de forma parcelada (e.g., em 12 a 24 meses) para proteger o caixa da companhia?",
          "Cessão do Investimento: O investidor poderá ceder seu contrato a terceiros? A companhia e os sócios fundadores terão direito de preferência na aquisição?"
        ]
      },
      {
        numero: "51",
        titulo: "Conformidade Regulatória (SUSEP/CVM)",
        texto: "Como será garantido que a estrutura de captação esteja em conformidade com as normas da SUSEP e da CVM? A companhia submeterá previamente os modelos de contrato à análise de sua assessoria jurídica e regulatória para garantir que o investimento não seja caracterizado como um valor mobiliário irregular ou que não infrinja as regras de capital e solvência da seguradora?"
      }
    ]
  }
];

export default function AccordionBlindagem() {
  const [expandAll, setExpandAll] = useState(false);

  return (
    <div>
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setExpandAll(!expandAll)}
          className="text-sm px-4 py-2 bg-aura-primary text-white rounded-lg hover:bg-aura-secondary transition-colors flex items-center gap-2"
        >
          <ChevronDown className={`w-4 h-4 transition-transform ${expandAll ? "rotate-180" : ""}`} />
          {expandAll ? "Recolher Todos" : "Expandir Todos"}
        </button>
      </div>

      {blocos.map((bloco) => (
        <AccordionItemControlled key={bloco.id} bloco={bloco} forceOpen={expandAll} />
      ))}
    </div>
  );
}

function AccordionItemControlled({ bloco, forceOpen }: { bloco: Bloco; forceOpen: boolean }) {
  const [isOpen, setIsOpen] = useState(false);
  const open = forceOpen || isOpen;

  return (
    <div className={`bg-white rounded-xl mb-4 shadow-sm border-l-4 ${bloco.corBorder} overflow-hidden transition-all duration-300`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left p-6 flex items-center justify-between hover:bg-slate-50 transition-colors"
      >
        <div className="flex-1">
          <h3 className={`text-lg font-bold ${bloco.corText} mb-1 flex items-center gap-2`}>
            {bloco.icon} {bloco.titulo}
          </h3>
          <p className="text-sm text-slate-600">{bloco.descricao}</p>
          <p className="text-xs text-slate-400 mt-1">{bloco.itens.length} questões — Clique para {open ? "recolher" : "expandir"}</p>
        </div>
        <ChevronDown className={`w-6 h-6 ${bloco.corText} transition-transform duration-300 flex-shrink-0 ml-4 ${open ? "rotate-180" : ""}`} />
      </button>
      
      <div className={`transition-all duration-500 ease-in-out ${open ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}>
        <div className="px-6 pb-6 space-y-4">
          <div className="border-t border-slate-200 pt-4"></div>
          {bloco.itens.map((item, idx) => (
            <div key={idx} className={`${bloco.corBg} rounded-lg p-4`}>
              <div className="flex items-start gap-3">
                <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${bloco.cor} text-white text-sm font-bold flex-shrink-0`}>
                  {item.numero}
                </span>
                <div className="flex-1">
                  <h4 className={`font-bold ${bloco.corText} text-sm mb-2`}>{item.titulo}</h4>
                  <p className="text-sm text-slate-700 leading-relaxed">{item.texto}</p>
                  {item.subitens && item.subitens.length > 0 && (
                    <ul className="mt-3 space-y-2">
                      {item.subitens.map((sub, sidx) => (
                        <li key={sidx} className="text-sm text-slate-600 pl-4 border-l-2 border-slate-300">
                          {sub}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
