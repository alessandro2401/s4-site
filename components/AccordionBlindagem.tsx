"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Shield, DollarSign, AlertTriangle, Scale, TrendingUp, Lock, Gavel, Globe,
  ChevronDown, MessageSquare, Plus, Trash2, Edit3, Check, X, Download,
  Landmark, UserCog, Send, Clock, User
} from "lucide-react";
import {
  Anotacao,
  escutarAnotacoes,
  adicionarAnotacao,
  removerAnotacao,
  editarAnotacao,
  escutarTodasAnotacoes,
} from "@/lib/firebase";

// ============================================================================
// TIPOS
// ============================================================================
interface BlocoItem {
  numero: string;
  titulo: string;
  texto: string;
  subitens?: string[];
  refLegal?: string;
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

// ============================================================================
// DADOS — 10 BLOCOS / 54 QUESTÕES (Versão Aprimorada)
// ============================================================================
const blocos: Bloco[] = [
  {
    id: 1,
    titulo: "Bloco 1: Estrutura Societária e Blindagem Patrimonial",
    descricao: "Define a estrutura de participação de cada acionista e estabelece barreiras claras para proteger o patrimônio pessoal contra riscos originados por um deles.",
    cor: "bg-blue-600",
    corBg: "bg-blue-50",
    corBorder: "border-blue-500",
    corText: "text-blue-700",
    icon: <Shield className="w-5 h-5" />,
    itens: [
      {
        numero: "1",
        titulo: "Estrutura de Participação (Holding Patrimonial)",
        texto: "Os acionistas integralizarão suas participações como Pessoas Físicas ou será exigida a constituição de Pessoas Jurídicas (Holdings Patrimoniais) para cada um? A exigência de uma holding visa criar uma camada adicional de proteção, em linha com o Art. 1º da Lei 6.404/76, que limita a responsabilidade do acionista ao preço de emissão das ações subscritas ou adquiridas.",
        refLegal: "Art. 1º, Lei 6.404/76"
      },
      {
        numero: "2",
        titulo: "Responsabilidade por Dívidas Pessoais e Penhora de Ações",
        texto: "Como o Acordo de Acionistas tratará a hipótese de dívidas pessoais, processos de divórcio, partilha de bens ou sucessão de um dos acionistas? Para evitar que um terceiro estranho ingresse na sociedade, o Acordo preverá um direito de preferência ou uma opção de compra para os demais acionistas adquirirem as ações do sócio executado ou do herdeiro?",
        refLegal: "Art. 118, Lei 6.404/76"
      },
      {
        numero: "3",
        titulo: "Vedações a Garantias Pessoais",
        texto: "O Acordo de Acionistas vedará expressamente que qualquer acionista preste aval, fiança ou qualquer outra forma de garantia em nome da sociedade (Seguradora ou Administradora) sem a aprovação por quórum qualificado (e.g., 75%) do Conselho de Administração ou da Assembleia Geral? Esta medida visa proteger a companhia de obrigações que não sejam de seu interesse direto.",
        refLegal: "Art. 155, Lei 6.404/76 (Dever de Lealdade)"
      },
      {
        numero: "4",
        titulo: "Proibição de Solidariedade e Responsabilidade do Administrador",
        texto: "O Acordo reforçará que a responsabilidade dos acionistas é limitada e que os administradores só respondem por atos de gestão com culpa ou dolo, ou com violação da lei ou do estatuto? Haverá cláusula explícita que proíba a responsabilidade solidária dos demais acionistas por atos ilícitos de um deles?",
        refLegal: "Art. 158, Lei 6.404/76"
      },
      {
        numero: "5",
        titulo: "Arquitetura Operacional (Holding Controladora)",
        texto: "A estrutura societária contemplará a criação de uma holding operacional que controlará a Seguradora e a Administradora? Esta arquitetura, além de otimizar a gestão, permite uma melhor segregação dos riscos operacionais de cada entidade, em conformidade com as boas práticas de governança incentivadas pela Resolução CNSP 416/2021.",
        refLegal: "Resolução CNSP 416/2021"
      }
    ]
  },
  {
    id: 2,
    titulo: "Bloco 2: Capital Social, Aportes e Inadimplência",
    descricao: "Regras claras de capitalização e consequências automáticas para inadimplência — risco crítico em negócios regulados que demandam capital intensivo (SUSEP/Resolução CNSP 432/2021).",
    cor: "bg-emerald-600",
    corBg: "bg-emerald-50",
    corBorder: "border-emerald-500",
    corText: "text-emerald-700",
    icon: <DollarSign className="w-5 h-5" />,
    itens: [
      {
        numero: "6",
        titulo: "Chamadas de Capital (Capital Calls)",
        texto: "Como serão definidas as necessidades de aportes futuros (para aumento de capital, cobertura de prejuízos, etc.)? A competência para aprovar uma chamada de capital será da Assembleia Geral, exigindo qual quórum?",
        refLegal: "Art. 170, Lei 6.404/76"
      },
      {
        numero: "7",
        titulo: "Direito de Preferência e Procedimento",
        texto: "O Acordo de Acionistas reafirmará o direito de preferência de cada acionista na subscrição de novas ações? Qual será o prazo e o procedimento formal para o exercício desse direito?",
        refLegal: "Art. 171, Lei 6.404/76"
      },
      {
        numero: "8",
        titulo: "Consequências da Inadimplência (Mora do Subscritor)",
        texto: "O Acordo detalhará as consequências para o acionista que não integralizar as ações subscritas?",
        subitens: [
          "Constituição em Mora: A inadimplência será constituída mediante notificação formal?",
          "Multa e Juros: Qual será a multa (e.g., 10%, 20%) e os juros de mora aplicados sobre o valor não integralizado?",
          "Suspensão de Direitos: O Acordo preverá a suspensão dos direitos do acionista inadimplente?"
        ],
        refLegal: "Art. 106 e 107, Lei 6.404/76"
      },
      {
        numero: "9",
        titulo: "Mecanismo de Suprimento e Diluição",
        texto: "Os acionistas adimplentes terão o direito de subscrever as ações não integralizadas pelo sócio em mora? O Acordo pode prever um mecanismo de diluição punitiva, onde os adimplentes subscrevem as ações com deságio, como forma de penalizar a inadimplência e capitalizar a companhia?"
      },
      {
        numero: "10",
        titulo: "Exclusão por Justa Causa",
        texto: "A inadimplência recorrente ou que coloque em risco o cumprimento dos requisitos de capital da SUSEP será tipificada no Acordo de Acionistas como justa causa para a exclusão do acionista, permitindo a compra forçada de sua participação pelos demais?"
      }
    ]
  },
  {
    id: 3,
    titulo: "Bloco 3: Responsabilidade Regulatória, Técnica e Governança",
    descricao: "Alocação de responsabilidades perante os órgãos reguladores e mecanismos para isolar a operação de riscos gerados pela conduta de um acionista ou administrador.",
    cor: "bg-red-600",
    corBg: "bg-red-50",
    corBorder: "border-red-500",
    corText: "text-red-700",
    icon: <AlertTriangle className="w-5 h-5" />,
    itens: [
      {
        numero: "11",
        titulo: "Responsáveis Técnicos e Estatutários",
        texto: "Quem serão os Diretores/Administradores estatutariamente designados como responsáveis perante a SUSEP (e.g., Diretor de Controles Internos, Diretor de Riscos, Diretor de Relações com a SUSEP)? O Acordo definirá os critérios de qualificação e experiência para essas funções, em linha com os requisitos de idoneidade e capacidade técnica do regulador?"
      },
      {
        numero: "12",
        titulo: "Segregação de Responsabilidades (LC 213/2025)",
        texto: "O Acordo de Acionistas detalhará a completa segregação operacional, contábil e de responsabilidades entre a Seguradora e a Administradora Mutualista, conforme exigido pela LC 213/2025, para garantir que as atividades e os riscos de uma não contaminem a outra?",
        refLegal: "LC 213/2025"
      },
      {
        numero: "13",
        titulo: "Afastamento por Risco Regulatório",
        texto: "Se um acionista ou administrador por ele indicado cometer um ato que coloque em risco a autorização de funcionamento (e.g., perda do requisito de idoneidade, sanção da SUSEP), o Acordo preverá um procedimento para seu afastamento imediato e automático do cargo?",
        refLegal: "Art. 153 e 158, Lei 6.404/76"
      },
      {
        numero: "14",
        titulo: "Responsabilidade por Multas e Sanções (Ação de Regresso)",
        texto: "Se a empresa for multada pela SUSEP devido à conduta dolosa ou culposa comprovada de um acionista ou administrador, o Acordo preverá o direito de regresso automático da companhia contra o responsável?",
        refLegal: "Art. 159, Lei 6.404/76 (Ação de Responsabilidade)"
      },
      {
        numero: "15",
        titulo: "Governança da Comunicação com o Regulador",
        texto: "O Acordo definirá uma política clara sobre quem terá a prerrogativa de se comunicar oficialmente com a SUSEP e o CNSP? Será estabelecido um fluxo de aprovação interna para o envio de documentos, a fim de garantir a consistência e a conformidade das informações?",
        refLegal: "Resolução CNSP 416/2021 (Controles Internos)"
      }
    ]
  },
  {
    id: 4,
    titulo: "Bloco 4: Poder, Veto e Mecanismos de Desempate (Deadlock)",
    descricao: "Com participações igualitárias (25% cada), o risco de impasses decisórios é elevado. Mecanismos para evitar a paralisia da gestão.",
    cor: "bg-amber-600",
    corBg: "bg-amber-50",
    corBorder: "border-amber-500",
    corText: "text-amber-700",
    icon: <Scale className="w-5 h-5" />,
    itens: [
      {
        numero: "16",
        titulo: "Matérias de Veto (Quórum Qualificado)",
        texto: "Quais decisões exigirão aprovação por quórum qualificado (e.g., 75% ou unanimidade)? A lista deve ser exaustiva e limitada a atos de extrema relevância (e.g., mudança de objeto social, fusão, venda de controle, redução do dividendo obrigatório), para evitar o uso abusivo do poder de veto no dia a dia.",
        refLegal: "Art. 136, Lei 6.404/76"
      },
      {
        numero: "17",
        titulo: "Decisões de Gestão Ordinária",
        texto: "O Acordo de Acionistas delegará as decisões de gestão do dia a dia à Diretoria Executiva, dentro dos limites orçamentários aprovados pelo Conselho de Administração, para garantir agilidade operacional?",
        refLegal: "Art. 138 a 143, Lei 6.404/76"
      },
      {
        numero: "18",
        titulo: "Mecanismos de Desempate (Deadlock)",
        texto: "Em caso de empate em deliberações do Conselho de Administração ou da Assembleia de Acionistas, qual será o mecanismo de desempate a ser previsto no Acordo de Acionistas?",
        subitens: [
          "Voto de Minerva: O Presidente do Conselho terá voto de qualidade?",
          "Mediação e Arbitragem: As partes deverão submeter o impasse a um procedimento de mediação e/ou arbitragem?"
        ],
        refLegal: "Art. 118 e 136-A, Lei 6.404/76"
      },
      {
        numero: "19",
        titulo: "Cláusula de Exclusão por Justa Causa Societária",
        texto: "O bloqueio reiterado e injustificado de decisões vitais para a companhia, com o claro intuito de prejudicar a operação, será tipificado no Acordo como justa causa para a exclusão do acionista obstrutivo?",
        refLegal: "Art. 155 (Dever de Lealdade) e Art. 117 (Abuso de Poder)"
      },
      {
        numero: "20",
        titulo: "Cláusula de Compra e Venda Forçada (Shotgun Clause)",
        texto: "O Acordo contemplará uma cláusula de \"shotgun\" como mecanismo drástico para resolver impasses graves? A sua execução deverá ser detalhada no Acordo de Acionistas para garantir sua exequibilidade.",
        refLegal: "Art. 118, §3º, Lei 6.404/76"
      }
    ]
  },
  {
    id: 5,
    titulo: "Bloco 5: Política de Remuneração e Distribuição de Resultados",
    descricao: "Garantir que a política de remuneração e distribuição de lucros não comprometa a solvência, o capital regulatório e a capacidade de investimento da companhia.",
    cor: "bg-indigo-600",
    corBg: "bg-indigo-50",
    corBorder: "border-indigo-500",
    corText: "text-indigo-700",
    icon: <TrendingUp className="w-5 h-5" />,
    itens: [
      {
        numero: "21",
        titulo: "Política de Pró-labore e Remuneração dos Administradores",
        texto: "Como será definido o pró-labore e a remuneração dos acionistas que atuarem na gestão? A remuneração global dos administradores será fixada pela Assembleia Geral? A política será atrelada a benchmarks de mercado?",
        refLegal: "Art. 152, Lei 6.404/76"
      },
      {
        numero: "22",
        titulo: "Remuneração Variável e Conformidade Regulatória",
        texto: "Haverá política de remuneração variável (bônus)? A distribuição de bônus será suspensa caso a companhia não atenda aos requisitos de capital e solvência da SUSEP, para garantir que a remuneração não se sobreponha à saúde financeira da entidade?",
        refLegal: "Resolução CNSP 432/2021"
      },
      {
        numero: "23",
        titulo: "Política de Distribuição de Dividendos",
        texto: "Qual será o dividendo obrigatório a ser fixado no estatuto? Será definido um percentual do lucro líquido a ser retido para reinvestimento e constituição de reservas, garantindo o fortalecimento da solvência?",
        refLegal: "Art. 202, Lei 6.404/76"
      },
      {
        numero: "24",
        titulo: "Vedação a Antecipações e Demonstrações Financeiras",
        texto: "O Acordo de Sócios vedará expressamente qualquer forma de antecipação de lucros? A distribuição de dividendos será condicionada à apuração de lucro em balanços anuais auditados e aprovados pela Assembleia Geral?",
        refLegal: "Art. 176, Lei 6.404/76"
      },
      {
        numero: "25",
        titulo: "Limites de Endividamento e Despesas",
        texto: "Serão estabelecidos limites claros para despesas administrativas e endividamento, cuja extrapolação exija aprovação por quórum qualificado do Conselho ou da Assembleia? Esta é uma prática de boa governança, alinhada ao dever de diligência dos administradores.",
        refLegal: "Art. 153, Lei 6.404/76 (Dever de Diligência)"
      }
    ]
  },
  {
    id: 6,
    titulo: "Bloco 6: Deveres Fiduciários, Conflito de Interesses e Quebra de Confiança",
    descricao: "Código de conduta claro e consequências para a violação de deveres fiduciários, protegendo a empresa de comportamentos desalinhados (Art. 155 e 156, Lei 6.404/76).",
    cor: "bg-pink-600",
    corBg: "bg-pink-50",
    corBorder: "border-pink-500",
    corText: "text-pink-700",
    icon: <Lock className="w-5 h-5" />,
    itens: [
      {
        numero: "26",
        titulo: "Dever de Não Concorrência (Non-Compete)",
        texto: "O Acordo de Acionistas preverá uma cláusula de não concorrência, impedindo que os acionistas participem, direta ou indiretamente, de negócios concorrentes enquanto forem acionistas e por um período após a sua saída (e.g., 2 a 5 anos)? A cláusula deve ser clara e razoável para ser considerada válida.",
        refLegal: "Art. 155, Lei 6.404/76"
      },
      {
        numero: "27",
        titulo: "Confidencialidade e Não Aliciamento (Non-Solicitation)",
        texto: "Haverá cláusula de confidencialidade (NDA) e de não aliciamento, proibindo os acionistas de usar informações estratégicas para fins privados (dever de lealdade) e de contratar/assediar colaboradores-chave por um período determinado após a saída?",
        refLegal: "Art. 155, Lei 6.404/76 (Dever de Lealdade)"
      },
      {
        numero: "28",
        titulo: "Conflito de Interesses",
        texto: "O Acordo reforçará a proibição de que um administrador intervenha em operação na qual tenha interesse conflitante? Serão definidos procedimentos para a comunicação e deliberação sobre transações com partes relacionadas?",
        refLegal: "Art. 156, Lei 6.404/76"
      },
      {
        numero: "29",
        titulo: "Consequências da Quebra de Dever Fiduciário",
        texto: "A comprovação de uma conduta vedada (e.g., desvio de oportunidade de negócio, uso indevido da marca) resultará em consequências automáticas, como a perda do cargo de administrador, a aplicação de multa contratual e a possibilidade de exclusão por justa causa?"
      },
      {
        numero: "30",
        titulo: "Canal de Denúncias e Apuração",
        texto: "Será implementado um mecanismo formal para apuração de denúncias de má conduta, em linha com as melhores práticas de governança e compliance?",
        refLegal: "Resolução CNSP 416/2021"
      }
    ]
  },
  {
    id: 7,
    titulo: "Bloco 7: Saída, Exclusão e Apuração de Haveres",
    descricao: "Garantir a continuidade da empresa e evitar a judicialização em eventos de saída de acionistas, sejam eles voluntários ou forçados.",
    cor: "bg-teal-600",
    corBg: "bg-teal-50",
    corBorder: "border-teal-500",
    corText: "text-teal-700",
    icon: <Gavel className="w-5 h-5" />,
    itens: [
      {
        numero: "31",
        titulo: "Direito de Saída Voluntária (Retirada)",
        texto: "A partir de quando um acionista poderá exercer seu direito de retirada? O Acordo de Acionistas pode prever um período de lock-up inicial (e.g., 5 anos) para garantir a estabilidade do projeto, desde que não elimine o direito de retirada nos casos previstos em lei.",
        refLegal: "Art. 137, Lei 6.404/76"
      },
      {
        numero: "32",
        titulo: "Procedimento de Saída e Apuração de Haveres",
        texto: "Qual será o procedimento para a saída voluntária? Notificação prévia? Como será o apuramento de haveres? A lei estabelece que o reembolso seja calculado pelo valor de patrimônio líquido contábil, mas o Acordo pode prever um critério diferente (e.g., balanço de determinação, fluxo de caixa descontado), desde que aprovado por todos.",
        refLegal: "Art. 45, Lei 6.404/76"
      },
      {
        numero: "33",
        titulo: "Forma de Pagamento",
        texto: "O pagamento dos haveres será parcelado (e.g., em 24 ou 36 meses) para não descapitalizar a empresa? Esta condição deve estar claramente prevista no Acordo de Acionistas."
      },
      {
        numero: "34",
        titulo: "Exclusão por Justa Causa",
        texto: "O Acordo listará de forma exaustiva os atos considerados \"justa causa\" para exclusão do acionista (além dos previstos em lei), como inadimplência, quebra de não concorrência, condenação criminal, etc.? A exclusão de sócio em S.A. é matéria complexa e deve ser muito bem fundamentada no Acordo."
      },
      {
        numero: "35",
        titulo: "Valuation na Exclusão por Justa Causa",
        texto: "Em caso de exclusão por justa causa, o valor a ser pago pela participação pode sofrer um deságio punitivo, desde que previsto de forma clara e razoável no Acordo de Acionistas?"
      },
      {
        numero: "36",
        titulo: "Falecimento, Incapacidade e Divórcio",
        texto: "O Acordo preverá a liquidação obrigatória da participação em caso de falecimento, incapacidade ou divórcio, transformando-a em uma obrigação de pagamento aos sucessores ou ex-cônjuge? Isso evita a entrada de terceiros indesejados na sociedade e está alinhado com a proteção da affectio societatis."
      }
    ]
  },
  {
    id: 8,
    titulo: "Bloco 8: Captação de Recursos via Investidores Externos (Não Sócios)",
    descricao: "Regras, instrumentos e governança para captação de recursos de investidores que não ingressarão no quadro societário.",
    cor: "bg-cyan-600",
    corBg: "bg-cyan-50",
    corBorder: "border-cyan-500",
    corText: "text-cyan-700",
    icon: <Globe className="w-5 h-5" />,
    itens: [
      {
        numero: "37",
        titulo: "Momento e Gatilhos para a Captação",
        texto: "Em que estágio de maturidade da companhia será permitido o chamamento de investidores externos? A decisão exigirá aprovação unânime dos acionistas?"
      },
      {
        numero: "38",
        titulo: "Instrumentos de Investimento",
        texto: "Qual será o instrumento jurídico utilizado? A escolha do instrumento definirá a natureza da relação e os direitos do investidor.",
        subitens: [
          "Contrato de Participação (Investidor-Anjo): Aportes de capital com remuneração atrelada aos resultados, sem que o investidor se torne sócio (LC 155/2016).",
          "Sociedade em Conta de Participação (SCP): A empresa atua como sócia ostensiva e o investidor como sócio participante (oculto).",
          "Debêntures Simples ou Notas Comerciais: Emissão de títulos de dívida pela S.A., com remuneração atrelada a metas de performance.",
          "Mútuo Conversível em Participação nos Resultados: Contrato de empréstimo que pode ser convertido em um direito de participação nos lucros futuros."
        ]
      },
      {
        numero: "39",
        titulo: "Critérios e Análise do Investidor (Due Diligence)",
        texto: "Qual será o processo de análise e aceitação de um investidor externo, em linha com as políticas de PLD-FT e de governança?",
        refLegal: "Circular SUSEP 612/2020 (PLD-FT)"
      },
      {
        numero: "40",
        titulo: "Direitos e Vedações do Investidor",
        texto: "O contrato de investimento deixará explícito que o investidor não terá direito a voto nem será considerado sócio, protegendo a estrutura de controle da companhia?",
        refLegal: "Art. 116, Lei 6.404/76"
      },
      {
        numero: "41",
        titulo: "Estrutura de Rentabilidade e Regras de Saída (Exit)",
        texto: "Como será calculada a rentabilidade e quais serão as opções de saída do investidor? As regras devem ser claras para atrair capital e oferecer segurança jurídica."
      },
      {
        numero: "42",
        titulo: "Conformidade Regulatória (SUSEP/CVM)",
        texto: "Como será garantido que a estrutura de captação não seja caracterizada como um valor mobiliário irregular ou que não infrinja as regras de capital da SUSEP?"
      }
    ]
  },
  {
    id: 9,
    titulo: "Bloco 9: Alertas Críticos — Baseado nas Propostas JH",
    descricao: "Pontos de maior risco e assimetria identificados na estrutura societária e comercial proposta pela consultoria JH. Atenção redobrada dos advogados.",
    cor: "bg-orange-600",
    corBg: "bg-orange-50",
    corBorder: "border-orange-500",
    corText: "text-orange-700",
    icon: <AlertTriangle className="w-5 h-5" />,
    itens: [
      {
        numero: "43",
        titulo: "Assimetria Societária (Sócio Gestor vs. Sócios Investidores)",
        texto: "A estrutura prevê que 3 sócios aportarão 100% do capital de investimento (R$ 252.000 cada para a consultoria, mais capital social futuro) e ainda pagarão um salário mensal de R$ 50.000 para o 4º sócio (Renner), que não aporta capital mas detém 25% da sociedade. Esta é a maior vulnerabilidade do negócio.",
        subitens: [
          "Qual a contrapartida pela participação de 25% do sócio não-investidor? A gestão é a única contrapartida? Isso deve ser formalizado em um contrato de prestação de serviços com metas claras.",
          "Cláusula de Vesting: A participação de 25% do sócio gestor deve ser adquirida progressivamente, condicionada à sua permanência e ao atingimento de metas (KPIs) pré-definidas. Ex: 5% ao ano por 5 anos.",
          "Good Leaver / Bad Leaver: O que acontece com a participação do sócio gestor se ele sair? Se sair por vontade própria ou for demitido por justa causa (bad leaver), ele perde o direito às ações não \"vestidas\" e pode ser obrigado a vender sua parte adquirida com grande deságio."
        ]
      },
      {
        numero: "44",
        titulo: "Remuneração do Sócio Gestor",
        texto: "O salário de R$ 50.000/mês (R$ 600.000/ano) deve ser tratado como uma despesa da companhia, não um rateio direto entre os sócios.",
        subitens: [
          "Condicionamento da Remuneração: O pagamento deve estar condicionado à saúde financeira da empresa e ao cumprimento de metas.",
          "Revisão Periódica: O valor deve ser revisado anualmente com base no desempenho da empresa e em benchmarks de mercado."
        ]
      },
      {
        numero: "45",
        titulo: "Conflito de Interesses na Contratação da Consultoria",
        texto: "A consultoria JH é do Sr. Armando Virgílio, que é sócio do Sr. Renner Fidélis em outra empresa (A12 Assessoria). O Sr. Renner, por sua vez, é um dos 4 sócios da nova empreitada. Isso configura um claro conflito de interesses.",
        subitens: [
          "Transparência e Aprovação: Essa relação foi plenamente declarada a todos os sócios? A contratação da JH deve ser aprovada formalmente pelos 3 sócios investidores, com a abstenção do Sr. Renner.",
          "Análise de Mercado: Foram cotadas outras consultorias para garantir que os termos da JH (preço, escopo, prazo) são competitivos e de mercado? O § 1º do Art. 156 exige que a contratação seja em condições equitativas."
        ],
        refLegal: "Art. 156, Lei 6.404/76"
      },
      {
        numero: "46",
        titulo: "Custos Ocultos e Incompletos",
        texto: "A planilha de investimento é perigosamente incompleta. O Acordo de Acionistas deve prever como serão feitos os aportes para:",
        subitens: [
          "Capital Social Mínimo: A SUSEP exige capital mínimo para a Seguradora (~R$ 3,5 milhões para S4) e exigirá para a Administradora. Quem integralizará esse valor? A participação deve ser proporcional ao capital total investido.",
          "Custos Operacionais (Burn Rate): A empresa terá despesas mensais (aluguel, sistemas, folha de pagamento) antes de gerar receita. De onde virá esse capital de giro?",
          "Fase 2 da Administradora: O custo está em aberto e pode ser significativo. É preciso provisionar esse risco."
        ]
      },
      {
        numero: "47",
        titulo: "Formalização do Contratante",
        texto: "Quem assinará o contrato com a consultoria JH? A recomendação é que seja criada uma sociedade simples ou um veículo pré-operacional em nome dos 4 sócios para formalizar essa contratação, e não em nome de apenas um deles."
      }
    ]
  },
  {
    id: 10,
    titulo: "Bloco 10: Estrutura da Posição do Sócio-Gestor (CEO Não Investidor)",
    descricao: "Separação clara entre a condição de Acionista (25% de Sweat Equity) e o cargo de Diretor-Presidente (CEO), com mecanismos de vesting, good/bad leaver e limites de autoridade.",
    cor: "bg-violet-600",
    corBg: "bg-violet-50",
    corBorder: "border-violet-500",
    corText: "text-violet-700",
    icon: <UserCog className="w-5 h-5" />,
    itens: [
      {
        numero: "48",
        titulo: "Vesting da Participação Societária",
        texto: "A totalidade das ações (25%) não será entregue no início. A aquisição do direito a elas será progressiva, através de um cronograma de Vesting.",
        subitens: [
          "Sugestão de Estrutura: Prazo total de 5 anos. Nos primeiros 12 meses (período de Cliff), ele não adquire direito a nenhuma ação. A partir do 13º mês, ele passa a adquirir o direito a 1/48 de sua participação total a cada mês.",
          "Objetivo: Incentivar o comprometimento de longo prazo e proteger os sócios investidores de uma saída prematura."
        ]
      },
      {
        numero: "49",
        titulo: "Cláusulas de Saída (Good Leaver vs. Bad Leaver) — Acionista",
        texto: "Estas cláusulas definem o destino das ações que ele JÁ ADQUIRIU pelo vesting.",
        subitens: [
          "Bad Leaver (Saída Prejudicial): Se demitido por justa causa (fraude, violação grave do estatuto), pedir demissão antes do fim do vesting ou violar cláusulas de não concorrência — obrigado a vender as ações por valor simbólico (e.g., R$ 1,00).",
          "Good Leaver (Saída Não Prejudicial): Se demitido sem justa causa, aposentadoria após o ciclo de vesting, ou invalidez/morte — demais sócios terão direito de compra pelo valor de mercado (avaliação independente), com pagamento parcelado."
        ]
      },
      {
        numero: "50",
        titulo: "Direitos Políticos de Acionista",
        texto: "Como acionista, o Sr. Renner terá o direito de participar e votar nas Assembleias Gerais, fiscalizar a gestão e receber dividendos, proporcionalmente à sua participação já adquirida (vested). Seus direitos de voto (25%) são um contrapeso natural e devem ser respeitados, exceto em decisões onde haja conflito de interesses."
      },
      {
        numero: "51",
        titulo: "Contrato de Gestão e Subordinação ao Conselho",
        texto: "Será firmado um Contrato de Diretor Estatutário, com prazo determinado (e.g., 2 ou 3 anos, renovável), que estabelecerá suas responsabilidades, metas e KPIs, sua remuneração fixa e variável, e sua subordinação direta ao Conselho de Administração."
      },
      {
        numero: "52",
        titulo: "Limites de Autoridade (Alçada)",
        texto: "O Estatuto Social e/ou o Regimento Interno do Conselho definirão claramente os limites de sua autoridade para tomar decisões sem a aprovação prévia do Conselho. Atos como a venda de ativos relevantes, a contratação de empréstimos acima de certo valor ou a aprovação de despesas fora do orçamento exigirão aprovação colegiada."
      },
      {
        numero: "53",
        titulo: "Destituição do Cargo de CEO",
        texto: "A destituição do cargo de CEO é uma prerrogativa do Conselho de Administração. O Acordo deve prever que a decisão de destituição possa ser tomada a qualquer momento, por deliberação da maioria dos membros do Conselho. Importante: A destituição do cargo de CEO NÃO significa a exclusão do quadro de acionistas.",
        refLegal: "Art. 142, IV, Lei 6.404/76"
      },
      {
        numero: "54",
        titulo: "Remuneração Justa e de Mercado",
        texto: "A remuneração (fixa + variável) deve ser compatível com a de um CEO de uma empresa de porte e complexidade semelhantes no setor de seguros/fintechs. Ela é a contrapartida pelo seu trabalho executivo, enquanto os dividendos são a remuneração do seu capital (no caso, seu sweat equity)."
      }
    ]
  }
];

// ============================================================================
// COMPONENTE DE ANOTAÇÕES POR TÓPICO
// ============================================================================
function PainelAnotacoes({ questaoId, corBg, cor }: { questaoId: string; corBg: string; cor: string }) {
  const [anotacoes, setAnotacoes] = useState<Anotacao[]>([]);
  const [aberto, setAberto] = useState(false);
  const [novaAnotacao, setNovaAnotacao] = useState("");
  const [nomeAutor, setNomeAutor] = useState("");
  const [editandoId, setEditandoId] = useState<string | null>(null);
  const [textoEdicao, setTextoEdicao] = useState("");
  const [enviando, setEnviando] = useState(false);

  useEffect(() => {
    // Recuperar nome do autor do localStorage
    const nome = localStorage.getItem("blindagem_autor") || "";
    setNomeAutor(nome);
  }, []);

  useEffect(() => {
    const unsub = escutarAnotacoes(questaoId, setAnotacoes);
    return unsub;
  }, [questaoId]);

  const handleAdicionar = useCallback(async () => {
    if (!novaAnotacao.trim() || !nomeAutor.trim()) return;
    setEnviando(true);
    try {
      localStorage.setItem("blindagem_autor", nomeAutor.trim());
      await adicionarAnotacao(questaoId, {
        autor: nomeAutor.trim(),
        texto: novaAnotacao.trim(),
        criadoEm: Date.now(),
      });
      setNovaAnotacao("");
    } catch (err) {
      console.error("Erro ao adicionar anotação:", err);
    }
    setEnviando(false);
  }, [novaAnotacao, nomeAutor, questaoId]);

  const handleRemover = useCallback(async (id: string) => {
    try {
      await removerAnotacao(questaoId, id);
    } catch (err) {
      console.error("Erro ao remover anotação:", err);
    }
  }, [questaoId]);

  const handleEditar = useCallback(async (id: string) => {
    if (!textoEdicao.trim()) return;
    try {
      await editarAnotacao(questaoId, id, textoEdicao.trim());
      setEditandoId(null);
      setTextoEdicao("");
    } catch (err) {
      console.error("Erro ao editar anotação:", err);
    }
  }, [textoEdicao, questaoId]);

  const formatarData = (ts: number) => {
    return new Date(ts).toLocaleString("pt-BR", {
      day: "2-digit", month: "2-digit", year: "numeric",
      hour: "2-digit", minute: "2-digit"
    });
  };

  return (
    <div className="mt-3">
      <button
        onClick={() => setAberto(!aberto)}
        className={`flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full transition-all ${
          anotacoes.length > 0
            ? `${cor} text-white shadow-sm`
            : "bg-slate-200 text-slate-600 hover:bg-slate-300"
        }`}
      >
        <MessageSquare className="w-3.5 h-3.5" />
        {anotacoes.length > 0 ? `${anotacoes.length} anotação(ões)` : "Anotar"}
        <ChevronDown className={`w-3 h-3 transition-transform ${aberto ? "rotate-180" : ""}`} />
      </button>

      {aberto && (
        <div className="mt-3 bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
          {/* Lista de anotações existentes */}
          {anotacoes.length > 0 && (
            <div className="max-h-64 overflow-y-auto divide-y divide-slate-100">
              {anotacoes.map((a) => (
                <div key={a.id} className="p-3 hover:bg-slate-50 transition-colors">
                  {editandoId === a.id ? (
                    <div className="space-y-2">
                      <textarea
                        value={textoEdicao}
                        onChange={(e) => setTextoEdicao(e.target.value)}
                        className="w-full text-sm border border-slate-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                        rows={3}
                      />
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEditar(a.id!)}
                          className="flex items-center gap-1 text-xs px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700"
                        >
                          <Check className="w-3 h-3" /> Salvar
                        </button>
                        <button
                          onClick={() => { setEditandoId(null); setTextoEdicao(""); }}
                          className="flex items-center gap-1 text-xs px-3 py-1 bg-slate-400 text-white rounded-md hover:bg-slate-500"
                        >
                          <X className="w-3 h-3" /> Cancelar
                        </button>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <User className="w-3.5 h-3.5 text-slate-400" />
                          <span className="text-xs font-semibold text-slate-700">{a.autor}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => { setEditandoId(a.id!); setTextoEdicao(a.texto); }}
                            className="p-1 text-slate-400 hover:text-blue-600 transition-colors"
                            title="Editar"
                          >
                            <Edit3 className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleRemover(a.id!)}
                            className="p-1 text-slate-400 hover:text-red-600 transition-colors"
                            title="Remover"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed">{a.texto}</p>
                      <div className="flex items-center gap-1 mt-1">
                        <Clock className="w-3 h-3 text-slate-300" />
                        <span className="text-[10px] text-slate-400">
                          {formatarData(a.criadoEm)}
                          {a.editadoEm ? ` (editado ${formatarData(a.editadoEm)})` : ""}
                        </span>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Formulário de nova anotação */}
          <div className="p-3 bg-slate-50 border-t border-slate-200">
            {!nomeAutor && (
              <input
                type="text"
                placeholder="Seu nome (será salvo para próximas anotações)"
                value={nomeAutor}
                onChange={(e) => setNomeAutor(e.target.value)}
                onBlur={() => {
                  if (nomeAutor.trim()) localStorage.setItem("blindagem_autor", nomeAutor.trim());
                }}
                className="w-full text-sm border border-slate-300 rounded-lg p-2 mb-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            )}
            {nomeAutor && (
              <div className="flex items-center gap-2 mb-2">
                <User className="w-3.5 h-3.5 text-slate-400" />
                <span className="text-xs text-slate-500">Anotando como <strong>{nomeAutor}</strong></span>
                <button
                  onClick={() => { setNomeAutor(""); localStorage.removeItem("blindagem_autor"); }}
                  className="text-[10px] text-blue-600 hover:underline"
                >
                  trocar
                </button>
              </div>
            )}
            <div className="flex gap-2">
              <textarea
                placeholder="Escreva sua anotação para discussão em reunião..."
                value={novaAnotacao}
                onChange={(e) => setNovaAnotacao(e.target.value)}
                className="flex-1 text-sm border border-slate-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                rows={2}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && (e.metaKey || e.ctrlKey)) handleAdicionar();
                }}
              />
              <button
                onClick={handleAdicionar}
                disabled={!novaAnotacao.trim() || !nomeAutor.trim() || enviando}
                className="self-end px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                title="Ctrl+Enter para enviar"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            <p className="text-[10px] text-slate-400 mt-1">Ctrl+Enter para enviar rapidamente</p>
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================================
// COMPONENTE DE ITEM DO ACCORDION (COM ANOTAÇÕES)
// ============================================================================
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

      <div className={`transition-all duration-500 ease-in-out ${open ? "max-h-[10000px] opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}>
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
                  {item.refLegal && (
                    <span className="inline-block mt-2 text-[10px] font-medium px-2 py-0.5 bg-slate-200 text-slate-600 rounded-full">
                      {item.refLegal}
                    </span>
                  )}
                  {item.subitens && item.subitens.length > 0 && (
                    <ul className="mt-3 space-y-2">
                      {item.subitens.map((sub, sidx) => (
                        <li key={sidx} className="text-sm text-slate-600 pl-4 border-l-2 border-slate-300">
                          {sub}
                        </li>
                      ))}
                    </ul>
                  )}
                  {/* Painel de Anotações */}
                  <PainelAnotacoes
                    questaoId={`q${item.numero}`}
                    corBg={bloco.corBg}
                    cor={bloco.cor}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// COMPONENTE DE EXPORTAÇÃO DE ANOTAÇÕES
// ============================================================================
function ExportarAnotacoes() {
  const [exportando, setExportando] = useState(false);

  const handleExportar = useCallback(() => {
    setExportando(true);

    const unsub = escutarTodasAnotacoes((dados) => {
      unsub();

      // Mapear questões para títulos
      const mapaQuestoes: Record<string, { titulo: string; bloco: string }> = {};
      blocos.forEach((b) => {
        b.itens.forEach((item) => {
          mapaQuestoes[`q${item.numero}`] = { titulo: item.titulo, bloco: b.titulo };
        });
      });

      let texto = "═══════════════════════════════════════════════════\n";
      texto += "  RELATÓRIO DE ANOTAÇÕES — BLINDAGEM SOCIETÁRIA\n";
      texto += "  AURA Seguradora S/A & Administradora PPM\n";
      texto += `  Gerado em: ${new Date().toLocaleString("pt-BR")}\n`;
      texto += "═══════════════════════════════════════════════════\n\n";

      let totalAnotacoes = 0;
      let blocoAtual = "";

      Object.entries(dados).forEach(([qId, anotacoes]) => {
        if (anotacoes.length === 0) return;
        totalAnotacoes += anotacoes.length;

        const info = mapaQuestoes[qId];
        if (info && info.bloco !== blocoAtual) {
          blocoAtual = info.bloco;
          texto += `\n▬▬▬ ${blocoAtual} ▬▬▬\n\n`;
        }

        texto += `── Questão ${qId.replace("q", "")}: ${info?.titulo || qId} ──\n`;
        anotacoes.forEach((a) => {
          const data = new Date(a.criadoEm).toLocaleString("pt-BR");
          texto += `  [${data}] ${a.autor}:\n`;
          texto += `  ${a.texto}\n\n`;
        });
      });

      if (totalAnotacoes === 0) {
        texto += "Nenhuma anotação registrada até o momento.\n";
      } else {
        texto += `\n═══════════════════════════════════════════════════\n`;
        texto += `  Total de anotações: ${totalAnotacoes}\n`;
        texto += `═══════════════════════════════════════════════════\n`;
      }

      // Download
      const blob = new Blob([texto], { type: "text/plain;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `Anotacoes-Blindagem-${new Date().toISOString().split("T")[0]}.txt`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      setExportando(false);
    });
  }, []);

  return (
    <button
      onClick={handleExportar}
      disabled={exportando}
      className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors text-sm font-medium disabled:opacity-50"
    >
      <Download className="w-4 h-4" />
      {exportando ? "Exportando..." : "Exportar Anotações para Reunião"}
    </button>
  );
}

// ============================================================================
// COMPONENTE PRINCIPAL
// ============================================================================
export default function AccordionBlindagem() {
  const [expandAll, setExpandAll] = useState(false);

  return (
    <div>
      <div className="flex flex-wrap justify-between items-center gap-3 mb-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setExpandAll(!expandAll)}
            className="text-sm px-4 py-2 bg-aura-primary text-white rounded-lg hover:bg-aura-secondary transition-colors flex items-center gap-2"
          >
            <ChevronDown className={`w-4 h-4 transition-transform ${expandAll ? "rotate-180" : ""}`} />
            {expandAll ? "Recolher Todos" : "Expandir Todos"}
          </button>
        </div>
        <ExportarAnotacoes />
      </div>

      {blocos.map((bloco) => (
        <AccordionItemControlled key={bloco.id} bloco={bloco} forceOpen={expandAll} />
      ))}

      <div className="mt-6 p-4 bg-slate-100 rounded-xl border border-slate-200">
        <p className="text-xs text-slate-500 leading-relaxed">
          <strong>Referências Legais:</strong> Lei nº 6.404/76 (Lei das S/A) · LC nº 213/2025 (PPM) · Decreto-Lei nº 73/66 (SNSP) · Resolução CNSP 432/2021 (Capital e Solvência) · Resolução CNSP 416/2021 (Controles Internos e Governança) · Circular SUSEP 612/2020 (PLD-FT) · Código Civil (SCP e Obrigações).
        </p>
      </div>
    </div>
  );
}
