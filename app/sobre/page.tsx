"use client";

import { Card } from "@/components/ui/card";
import { Building2, Users, Shield, Target, Heart, Lightbulb, ArrowRight, Cpu, Headphones } from "lucide-react";
import { useEffect, useRef } from "react";

function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const elements = ref.current?.querySelectorAll(".animate-on-scroll");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Page() {
  const scrollRef = useScrollAnimation();

  return (
    <div ref={scrollRef}>
      {/* Hero */}
      <section className="gradient-hero text-white py-20">
        <div className="container">
          <p className="text-sm font-semibold uppercase tracking-wider text-white/60 mb-3">Institucional</p>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Sobre a AURA Seguradora
          </h1>
          <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
            Conheça nossa história, propósito e estrutura institucional
          </p>
        </div>
      </section>

      <div className="container py-16 space-y-16">
        {/* Propósito */}
        <div className="animate-on-scroll">
          <div className="bg-aura-primary/5 rounded-3xl p-10 border border-aura-primary/10">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-aura-primary/10 rounded-xl flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-aura-primary" />
              </div>
              <h2 className="text-2xl font-bold text-aura-primary">Propósito Institucional</h2>
            </div>
            <p className="text-lg text-slate-700 leading-relaxed max-w-3xl">
              Proteger pessoas e patrimônios por meio de modelos sustentáveis, tecnológicos e humanizados, 
              unindo os valores do mutualismo à segurança jurídica do seguro privado.
            </p>
          </div>
        </div>

        {/* Missão, Visão e Valores */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-8 rounded-2xl border-0 shadow-card hover:shadow-card-hover transition-all animate-on-scroll">
            <div className="w-12 h-12 bg-aura-primary/10 rounded-xl flex items-center justify-center mb-5">
              <Target className="w-6 h-6 text-aura-primary" />
            </div>
            <h3 className="text-xl font-bold text-aura-primary mb-3">Missão</h3>
            <p className="text-slate-600 leading-relaxed">
              Promover proteção financeira acessível e confiável, integrando inovação, empatia e regulação, 
              para transformar o modo como o brasileiro se relaciona com a segurança patrimonial.
            </p>
          </Card>

          <Card className="p-8 rounded-2xl border-0 shadow-card hover:shadow-card-hover transition-all animate-on-scroll">
            <div className="w-12 h-12 bg-aura-accent/10 rounded-xl flex items-center justify-center mb-5">
              <Heart className="w-6 h-6 text-aura-accent" />
            </div>
            <h3 className="text-xl font-bold text-aura-primary mb-3">Visão</h3>
            <p className="text-slate-600 leading-relaxed">
              Ser referência nacional no modelo de seguradora comunitária regulada (S4), integrando redes 
              mutualistas e canais digitais sob o conceito de "proteção inteligente e colaborativa".
            </p>
          </Card>

          <Card className="p-8 rounded-2xl border-0 shadow-card hover:shadow-card-hover transition-all animate-on-scroll">
            <div className="w-12 h-12 bg-aura-secondary/10 rounded-xl flex items-center justify-center mb-5">
              <Shield className="w-6 h-6 text-aura-secondary" />
            </div>
            <h3 className="text-xl font-bold text-aura-primary mb-3">Valores</h3>
            <div className="flex flex-wrap gap-2">
              {["Ética", "Transparência", "Inclusão", "Tecnologia", "Confiança", "Empatia", "Prosperidade Compartilhada"].map((v) => (
                <span key={v} className="px-3 py-1.5 bg-aura-primary/5 text-aura-primary text-sm font-medium rounded-full">{v}</span>
              ))}
            </div>
          </Card>
        </div>

        {/* Estrutura Societária */}
        <div>
          <div className="text-center mb-10 animate-on-scroll">
            <p className="text-sm font-semibold text-aura-accent uppercase tracking-wider mb-2">Governança</p>
            <h2 className="text-3xl font-bold text-aura-primary">Estrutura Societária</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 rounded-2xl border-0 shadow-card animate-on-scroll">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-aura-primary/10 rounded-xl flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-aura-primary" />
                </div>
                <h3 className="text-xl font-bold text-aura-primary">Informações Gerais</h3>
              </div>
              <div className="space-y-4">
                {[
                  { label: "Tipo Jurídico", value: "Sociedade Anônima de Capital Fechado" },
                  { label: "Sede", value: "Goiânia/GO" },
                  { label: "Regulação", value: "SUSEP - Superintendência de Seguros Privados" },
                  { label: "Segmento", value: "S4 - Seguradora Especializada" },
                  { label: "Capital Social", value: "R$ 3.500.000,00", bold: true },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between items-start py-2 border-b border-slate-100 last:border-0">
                    <p className="text-sm font-medium text-slate-500">{item.label}</p>
                    <p className={`text-sm text-right ${item.bold ? 'font-bold text-aura-primary' : 'text-slate-800'}`}>{item.value}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 rounded-2xl border-0 shadow-card animate-on-scroll">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-aura-primary/10 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-aura-primary" />
                </div>
                <h3 className="text-xl font-bold text-aura-primary">Acionistas</h3>
              </div>
              <div className="space-y-5">
                {[
                  { name: "Grupo MMB Holding S/A", role: "Acionista controlador e estratégico" },
                  { name: "Potere Representações e Corretagem Ltda", role: "Canal de distribuição (MGA/representante)" },
                  { name: "Alpha Proteções e Benefícios Ltda", role: "Apoio técnico e administrativo" },
                  { name: "Outros Investidores", role: "Minoritários homologados pela SUSEP" },
                ].map((item) => (
                  <div key={item.name} className="pb-4 border-b border-slate-100 last:border-0 last:pb-0">
                    <p className="font-semibold text-slate-800 text-sm">{item.name}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{item.role}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Governança */}
        <div>
          <div className="text-center mb-10 animate-on-scroll">
            <p className="text-sm font-semibold text-aura-accent uppercase tracking-wider mb-2">Organização</p>
            <h2 className="text-3xl font-bold text-aura-primary">Estrutura de Governança</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Conselho de Administração",
                items: ["Presidente do Conselho", "Conselheiro Técnico (experiência em seguros)", "Conselheiro Independente (governança e compliance)"]
              },
              {
                title: "Diretoria Executiva",
                items: ["Diretor Presidente (CEO)", "Diretor Técnico (atuarial e subscrição)", "Diretor Financeiro e de Riscos", "Diretor de Compliance e Jurídico", "Diretor Comercial e Canais Digitais"]
              },
              {
                title: "Auditoria e Compliance",
                items: ["Auditoria Externa (credenciada SUSEP)", "Comitê de Ética e Conformidade", "Controles Internos (PLD/FT)", "Compliance Regulatório"]
              }
            ].map((section) => (
              <Card key={section.title} className="p-8 rounded-2xl border-0 shadow-card hover:shadow-card-hover transition-all animate-on-scroll">
                <h3 className="text-lg font-bold text-aura-primary mb-5">{section.title}</h3>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                      <ArrowRight className="w-4 h-4 text-aura-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* Tecnologia */}
        <div className="animate-on-scroll">
          <div className="bg-white rounded-3xl p-10 shadow-card">
            <div className="text-center mb-10">
              <p className="text-sm font-semibold text-aura-accent uppercase tracking-wider mb-2">Infraestrutura</p>
              <h2 className="text-3xl font-bold text-aura-primary">Tecnologia e Sistemas</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-aura-primary/10 rounded-lg flex items-center justify-center">
                    <Cpu className="w-5 h-5 text-aura-primary" />
                  </div>
                  <h3 className="font-bold text-aura-primary">Infraestrutura Tecnológica</h3>
                </div>
                <ul className="space-y-3">
                  {["Sistema de Gestão AURA integrado com SUSEP DataHub", "Plataforma de subscrição automática com IA", "Análise preditiva de risco"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                      <ArrowRight className="w-4 h-4 text-aura-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-aura-primary/10 rounded-lg flex items-center justify-center">
                    <Headphones className="w-5 h-5 text-aura-primary" />
                  </div>
                  <h3 className="font-bold text-aura-primary">Canais de Atendimento</h3>
                </div>
                <ul className="space-y-3">
                  {["Canal omnichannel (site, app, chatbot, WhatsApp)", "BI regulatório e dashboard SUSEP", "Envio automático de dados mensais à SUSEP"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                      <ArrowRight className="w-4 h-4 text-aura-accent flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Mensagem Institucional */}
        <div className="animate-on-scroll">
          <div className="bg-aura-primary rounded-3xl p-12 text-center text-white">
            <h2 className="text-2xl font-bold mb-6">Nossa Essência</h2>
            <p className="text-lg leading-relaxed text-white/80 italic max-w-3xl mx-auto">
              "A AURA Seguradora nasce para iluminar um novo ciclo de confiança, transparência e solidez 
              no setor de proteção patrimonial. É o encontro entre o propósito do mutualismo e a força da 
              regulação, onde cada pessoa protegida representa o verdadeiro sentido de nossa existência: 
              <strong className="text-white"> ser a energia que protege, ampara e inspira.</strong>"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
