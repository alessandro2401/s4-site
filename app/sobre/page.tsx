import { Card } from "@/components/ui/card";
import { Building2, Users, Shield, Target, Heart, Lightbulb } from "lucide-react";

export default function Page() {
  return (
    <section className="container py-10 space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-aura-primary mb-3">
          Sobre a AURA Seguradora
        </h1>
        <p className="text-lg text-slate-600">
          Conheça nossa história, propósito e estrutura institucional
        </p>
      </div>

      {/* Propósito */}
      <Card className="p-8 bg-gradient-to-r from-aura-primary/10 to-transparent">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 bg-aura-primary/10 rounded-lg">
            <Lightbulb className="w-6 h-6 text-aura-primary" />
          </div>
          <h2 className="text-2xl font-bold text-aura-primary">
            Propósito Institucional
          </h2>
        </div>
        <p className="text-lg text-slate-700 leading-relaxed">
          Proteger pessoas e patrimônios por meio de modelos sustentáveis, tecnológicos e humanizados, 
          unindo os valores do mutualismo à segurança jurídica do seguro privado.
        </p>
      </Card>

      {/* Missão, Visão e Valores */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-blue-100 rounded-lg">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Missão</h3>
          </div>
          <p className="text-slate-700">
            Promover proteção financeira acessível e confiável, integrando inovação, empatia e regulação, 
            para transformar o modo como o brasileiro se relaciona com a segurança patrimonial.
          </p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-green-100 rounded-lg">
              <Heart className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Visão</h3>
          </div>
          <p className="text-slate-700">
            Ser referência nacional no modelo de seguradora comunitária regulada (S4), integrando redes 
            mutualistas e canais digitais sob o conceito de "proteção inteligente e colaborativa".
          </p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Shield className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-800">Valores</h3>
          </div>
          <ul className="space-y-2 text-slate-700">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
              Ética
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
              Transparência
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
              Inclusão
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
              Tecnologia
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
              Confiança
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
              Empatia
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
              Prosperidade Compartilhada
            </li>
          </ul>
        </Card>
      </div>

      {/* Estrutura Societária */}
      <div>
        <h2 className="text-2xl font-bold text-aura-primary mb-4">
          Estrutura Societária
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-aura-primary/10 rounded-lg">
                <Building2 className="w-6 h-6 text-aura-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Informações Gerais</h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-slate-600">Tipo Jurídico</p>
                <p className="text-slate-800">Sociedade Anônima de Capital Fechado</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-600">Sede</p>
                <p className="text-slate-800">Goiânia/GO</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-600">Regulação</p>
                <p className="text-slate-800">SUSEP - Superintendência de Seguros Privados</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-600">Segmento</p>
                <p className="text-slate-800">S4 - Seguradora Especializada</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-600">Capital Social</p>
                <p className="text-slate-800 font-bold">R$ 3.500.000,00</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-aura-primary/10 rounded-lg">
                <Users className="w-6 h-6 text-aura-primary" />
              </div>
              <h3 className="text-xl font-bold text-slate-800">Acionistas</h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-slate-800">Grupo MMB Holding S/A</p>
                <p className="text-sm text-slate-600">Acionista controlador e estratégico</p>
              </div>
              <div>
                <p className="font-semibold text-slate-800">Potere Representações e Corretagem Ltda</p>
                <p className="text-sm text-slate-600">Canal de distribuição (MGA/representante)</p>
              </div>
              <div>
                <p className="font-semibold text-slate-800">Alpha Proteções e Benefícios Ltda</p>
                <p className="text-sm text-slate-600">Apoio técnico e administrativo</p>
              </div>
              <div>
                <p className="font-semibold text-slate-800">Outros Investidores</p>
                <p className="text-sm text-slate-600">Minoritários homologados pela SUSEP</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Governança */}
      <div>
        <h2 className="text-2xl font-bold text-aura-primary mb-4">
          Estrutura de Governança
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <h3 className="text-lg font-bold text-slate-800 mb-3">Conselho de Administração</h3>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-aura-primary mt-1">•</span>
                <span>Presidente do Conselho</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-aura-primary mt-1">•</span>
                <span>Conselheiro Técnico (experiência em seguros)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-aura-primary mt-1">•</span>
                <span>Conselheiro Independente (governança e compliance)</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-bold text-slate-800 mb-3">Diretoria Executiva</h3>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-aura-primary mt-1">•</span>
                <span>Diretor Presidente (CEO)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-aura-primary mt-1">•</span>
                <span>Diretor Técnico (atuarial e subscrição)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-aura-primary mt-1">•</span>
                <span>Diretor Financeiro e de Riscos</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-aura-primary mt-1">•</span>
                <span>Diretor de Compliance e Jurídico</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-aura-primary mt-1">•</span>
                <span>Diretor Comercial e Canais Digitais</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-lg font-bold text-slate-800 mb-3">Auditoria e Compliance</h3>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-aura-primary mt-1">•</span>
                <span>Auditoria Externa (credenciada SUSEP)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-aura-primary mt-1">•</span>
                <span>Comitê de Ética e Conformidade</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-aura-primary mt-1">•</span>
                <span>Controles Internos (PLD/FT)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-aura-primary mt-1">•</span>
                <span>Compliance Regulatório</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>

      {/* Tecnologia */}
      <Card className="p-6 bg-slate-50">
        <h2 className="text-2xl font-bold text-aura-primary mb-4">
          Tecnologia e Sistemas
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-bold text-slate-800 mb-2">Infraestrutura Tecnológica</h3>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-aura-primary mt-1">•</span>
                <span>Sistema de Gestão AURA integrado com SUSEP DataHub</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-aura-primary mt-1">•</span>
                <span>Plataforma de subscrição automática com IA</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-aura-primary mt-1">•</span>
                <span>Análise preditiva de risco</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-slate-800 mb-2">Canais de Atendimento</h3>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <span className="text-aura-primary mt-1">•</span>
                <span>Canal omnichannel (site, app, chatbot, WhatsApp)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-aura-primary mt-1">•</span>
                <span>BI regulatório e dashboard SUSEP</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-aura-primary mt-1">•</span>
                <span>Envio automático de dados mensais à SUSEP</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Mensagem Institucional */}
      <Card className="p-8 bg-gradient-to-r from-aura-primary to-aura-secondary text-white text-center">
        <h2 className="text-2xl font-bold mb-4">
          Nossa Essência
        </h2>
        <p className="text-lg leading-relaxed italic opacity-95">
          "A AURA Seguradora nasce para iluminar um novo ciclo de confiança, transparência e solidez 
          no setor de proteção patrimonial. É o encontro entre o propósito do mutualismo e a força da 
          regulação, onde cada pessoa protegida representa o verdadeiro sentido de nossa existência: 
          <strong> ser a energia que protege, ampara e inspira.</strong>"
        </p>
      </Card>
    </section>
  );
}
