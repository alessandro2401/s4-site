"use client";

import { Card } from "@/components/ui/card";
import { Check, Shield, Clock, Car, Wrench, Phone, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
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
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6 border border-white/10">
            <Car className="w-4 h-4 text-emerald-400" />
            <span>Produto</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Seguro Auto Mensal
          </h1>
          <p className="text-xl text-white/70 max-w-2xl leading-relaxed">
            Proteção completa para seu veículo com <strong className="text-white">indenização direta ao segurado</strong>, 
            oficina livre e SLA de liquidação em até <strong className="text-white">D+15 úteis</strong>.
          </p>
        </div>
      </section>

      <div className="container py-16 space-y-16">
        {/* Planos */}
        <div>
          <div className="text-center mb-10 animate-on-scroll">
            <p className="text-sm font-semibold text-aura-accent uppercase tracking-wider mb-2">Planos</p>
            <h2 className="text-3xl font-bold text-aura-primary">Escolha o plano ideal</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-8 rounded-2xl border-0 shadow-card hover:shadow-card-hover transition-all animate-on-scroll">
              <h3 className="text-xl font-bold text-aura-primary mb-2">AURA Digital</h3>
              <p className="text-sm text-slate-500 mb-6">Plano básico com funcionalidades digitais</p>
              <div className="space-y-3 mb-6">
                {["Indenização direta ao segurado", "Oficina livre", "Franquia opcional 2% terceiros"].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-aura-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/calculadora" className="block text-center py-3 border-2 border-aura-primary text-aura-primary rounded-xl font-semibold hover:bg-aura-primary hover:text-white transition-all">
                Fazer Cotação
              </Link>
            </Card>

            <Card className="p-8 rounded-2xl border-2 border-aura-primary shadow-card-hover relative animate-on-scroll">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="inline-flex items-center gap-1 bg-aura-primary text-white text-xs font-bold px-4 py-1.5 rounded-full">
                  <Sparkles className="w-3 h-3" /> MAIS POPULAR
                </span>
              </div>
              <h3 className="text-xl font-bold text-aura-primary mb-2">AURA Básico</h3>
              <p className="text-sm text-slate-500 mb-6">Cobertura completa e assistência 24h</p>
              <div className="space-y-3 mb-6">
                {["Todas as coberturas do Digital", "Assistência 24h até 500km", "Franquia opcional 3% terceiros"].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-aura-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/calculadora" className="block text-center py-3 bg-aura-primary text-white rounded-xl font-semibold hover:bg-aura-secondary transition-all">
                Fazer Cotação
              </Link>
            </Card>

            <Card className="p-8 rounded-2xl border-0 shadow-card hover:shadow-card-hover transition-all animate-on-scroll">
              <h3 className="text-xl font-bold text-aura-primary mb-2">AURA Essencial</h3>
              <p className="text-sm text-slate-500 mb-6">Plano completo com carro reserva</p>
              <div className="space-y-3 mb-6">
                {["Todas as coberturas do Básico", "Carro reserva 15 dias", "Franquia opcional 3% terceiros"].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-aura-accent mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <Link href="/calculadora" className="block text-center py-3 border-2 border-aura-primary text-aura-primary rounded-xl font-semibold hover:bg-aura-primary hover:text-white transition-all">
                Fazer Cotação
              </Link>
            </Card>
          </div>
        </div>

        {/* Público-Alvo */}
        <div className="animate-on-scroll">
          <div className="bg-aura-primary/5 rounded-3xl p-10 border border-aura-primary/10">
            <h2 className="text-2xl font-bold text-aura-primary mb-6">Público-Alvo</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { label: "Classes Sociais", value: "C, D e E" },
                { label: "Tabela FIPE", value: "Até R$ 250.000,00" },
                { label: "Idade do Veículo", value: "Até 25 anos de uso" },
              ].map((item) => (
                <div key={item.label} className="bg-white rounded-xl p-5 shadow-card">
                  <p className="text-sm font-medium text-slate-500 mb-1">{item.label}</p>
                  <p className="text-lg font-bold text-aura-primary">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Coberturas */}
        <div>
          <div className="text-center mb-10 animate-on-scroll">
            <p className="text-sm font-semibold text-aura-accent uppercase tracking-wider mb-2">Detalhes</p>
            <h2 className="text-3xl font-bold text-aura-primary">Coberturas Detalhadas</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: Shield, title: "Danos ao Veículo",
                items: [
                  { bold: "Franquia:", text: "6% do valor FIPE" },
                  { bold: "Perda Total:", text: "≥ 75% FIPE ou dano estrutural irreparável" },
                  { bold: "Pagamento:", text: "Franquia dedutível diretamente do valor pago ao segurado" },
                  { bold: "Oficina:", text: "Livre escolha do reparador (sem rede credenciada)" },
                ]
              },
              {
                icon: Wrench, title: "Vidros e Faróis",
                items: [
                  { bold: "Cobertura:", text: "Troca de vidros e faróis" },
                  { bold: "Franquia:", text: "35% do valor da peça" },
                  { bold: "Execução:", text: "Substituição em oficina de livre escolha" },
                ]
              },
              {
                icon: Car, title: "Responsabilidade Civil",
                items: [
                  { bold: "Danos Materiais a Terceiros:", text: "Até R$ 50.000,00" },
                  { bold: "Franquia Opcional (Digital):", text: "2% (reduz prêmio)" },
                  { bold: "Franquia Opcional (Básico/Essencial):", text: "3% (reduz prêmio)" },
                ]
              },
              {
                icon: Phone, title: "Assistências",
                items: [
                  { bold: "Assistência 24 horas:", text: "Até 500km de distância" },
                  { bold: "Carro reserva:", text: "Até 15 dias" },
                  { bold: "Seguro APP:", text: "Cobertura de R$ 10.000,00" },
                ]
              },
            ].map((section) => (
              <Card key={section.title} className="p-8 rounded-2xl border-0 shadow-card hover:shadow-card-hover transition-all animate-on-scroll">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 bg-aura-primary/10 rounded-xl flex items-center justify-center">
                    <section.icon className="w-6 h-6 text-aura-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-aura-primary">{section.title}</h3>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item.bold} className="flex items-start gap-3 text-sm">
                      <ArrowRight className="w-4 h-4 text-aura-accent flex-shrink-0 mt-0.5" />
                      <span className="text-slate-600"><strong className="text-slate-800">{item.bold}</strong> {item.text}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>

        {/* SLAs */}
        <div className="animate-on-scroll">
          <div className="bg-white rounded-3xl p-10 shadow-card">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-aura-primary/10 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-aura-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-aura-primary">SLAs de Liquidação</h2>
                <p className="text-sm text-slate-500">Prazos máximos após aprovação do sinistro</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { days: "D+5", desc: "Sinistros até R$ 5.000,00", color: "emerald" },
                { days: "D+10", desc: "De R$ 5.000 a R$ 20.000", color: "amber" },
                { days: "D+15", desc: "Acima de R$ 20.000,00", color: "orange" },
              ].map((sla) => (
                <div key={sla.days} className={`bg-${sla.color}-50 rounded-2xl p-6 border border-${sla.color}-100`}>
                  <p className={`text-3xl font-extrabold text-${sla.color}-600 mb-2`}>{sla.days}</p>
                  <p className="text-sm text-slate-600">{sla.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Diferenciais */}
        <div>
          <div className="text-center mb-10 animate-on-scroll">
            <p className="text-sm font-semibold text-aura-accent uppercase tracking-wider mb-2">Vantagens</p>
            <h2 className="text-3xl font-bold text-aura-primary">Diferenciais AURA Auto</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Indenização Direta", desc: "Pagamento direto ao segurado, sem intermediários" },
              { title: "Oficina Livre", desc: "Você escolhe onde reparar seu veículo" },
              { title: "Vigência Mensal", desc: "Renovação automática a cada 30 dias" },
              { title: "SLA Garantido", desc: "Prazos definidos para cada faixa de valor" },
              { title: "Controle Antifraude", desc: "Tecnologia de segurança na regulação" },
              { title: "Planos Flexíveis", desc: "Escolha o plano ideal para seu perfil" },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-5 rounded-2xl bg-aura-surface hover:shadow-card transition-all animate-on-scroll">
                <div className="w-10 h-10 bg-aura-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Check className="w-5 h-5 text-aura-accent" />
                </div>
                <div>
                  <p className="font-bold text-aura-primary text-sm">{item.title}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="animate-on-scroll">
          <div className="bg-aura-primary rounded-3xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Proteja seu veículo agora</h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Faça uma cotação online e descubra como é fácil ter um seguro auto completo e acessível.
            </p>
            <Link 
              href="/calculadora" 
              className="inline-flex items-center gap-2 bg-white text-aura-primary px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all group"
            >
              Fazer Cotação
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Info */}
        <div className="animate-on-scroll">
          <Card className="p-8 rounded-2xl border-0 shadow-card bg-aura-surface">
            <h2 className="text-xl font-bold text-aura-primary mb-4">Informações Importantes</h2>
            <ul className="space-y-3">
              {[
                "Vigência de 30 dias com renovação automática",
                "Comissão padrão de 10% já incluída no prêmio",
                "Possibilidade de franquia opcional para terceiros (reduz prêmio)",
                "Análise antifraude em todos os sinistros",
                "Conformidade total com regulamentação SUSEP",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                  <ArrowRight className="w-4 h-4 text-aura-accent flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
