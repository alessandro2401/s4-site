"use client";

import { Hero } from "@/components/Hero";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Shield, Users, TrendingUp, CheckCircle, ArrowRight, Car, Heart, FileText } from "lucide-react";
import { useEffect, useRef } from "react";

function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
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

export default function Home() {
  const scrollRef = useScrollAnimation();

  return (
    <div ref={scrollRef}>
      <Hero />
      
      {/* Produtos */}
      <section className="container py-20">
        <div className="text-center mb-12 animate-on-scroll">
          <p className="text-sm font-semibold text-aura-accent uppercase tracking-wider mb-2">Nossos Produtos</p>
          <h2 className="text-3xl md:text-4xl font-bold text-aura-primary">Proteção sob medida para você</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-8 space-y-4 hover:shadow-card-hover transition-all duration-300 rounded-2xl border-0 shadow-card group animate-on-scroll">
            <div className="w-14 h-14 bg-aura-primary/10 rounded-xl flex items-center justify-center group-hover:bg-aura-primary group-hover:text-white transition-all duration-300">
              <Car className="w-7 h-7 text-aura-primary group-hover:text-white transition-colors" />
            </div>
            <h2 className="text-xl font-bold text-aura-primary">Seguro Auto Mensal</h2>
            <p className="text-slate-600 leading-relaxed">Indenização direta ao segurado, oficina livre e PT ≥ 75% FIPE. Sem fidelidade.</p>
            <Link href="/produtos/auto" className="inline-flex items-center gap-2 text-aura-primary font-semibold group-hover:gap-3 transition-all">
              Saiba mais <ArrowRight className="w-4 h-4" />
            </Link>
          </Card>
          
          <Card className="p-8 space-y-4 hover:shadow-card-hover transition-all duration-300 rounded-2xl border-0 shadow-card group animate-on-scroll">
            <div className="w-14 h-14 bg-aura-primary/10 rounded-xl flex items-center justify-center group-hover:bg-aura-primary group-hover:text-white transition-all duration-300">
              <Heart className="w-7 h-7 text-aura-primary group-hover:text-white transition-colors" />
            </div>
            <h2 className="text-xl font-bold text-aura-primary">Seguro Vida Mensal</h2>
            <p className="text-slate-600 leading-relaxed">Cobertura inclusiva com adesão simples e renovação mensal automática.</p>
            <Link href="/produtos/vida" className="inline-flex items-center gap-2 text-aura-primary font-semibold group-hover:gap-3 transition-all">
              Saiba mais <ArrowRight className="w-4 h-4" />
            </Link>
          </Card>
          
          <Card className="p-8 space-y-4 hover:shadow-card-hover transition-all duration-300 rounded-2xl border-0 shadow-card group animate-on-scroll">
            <div className="w-14 h-14 bg-aura-primary/10 rounded-xl flex items-center justify-center group-hover:bg-aura-primary group-hover:text-white transition-all duration-300">
              <FileText className="w-7 h-7 text-aura-primary group-hover:text-white transition-colors" />
            </div>
            <h2 className="text-xl font-bold text-aura-primary">Governança e SUSEP</h2>
            <p className="text-slate-600 leading-relaxed">Transparência e conformidade (CNSP 388/2020, 432/2021 e Circular SUSEP 700/2024).</p>
            <Link href="/regulatorio" className="inline-flex items-center gap-2 text-aura-primary font-semibold group-hover:gap-3 transition-all">
              Ver documentos <ArrowRight className="w-4 h-4" />
            </Link>
          </Card>
        </div>
      </section>

      {/* Por que escolher a AURA */}
      <section className="bg-white py-20">
        <div className="container">
          <div className="text-center mb-14 animate-on-scroll">
            <p className="text-sm font-semibold text-aura-accent uppercase tracking-wider mb-2">Diferenciais</p>
            <h2 className="text-3xl md:text-4xl font-bold text-aura-primary mb-4">Por que escolher a AURA?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Combinamos tecnologia, humanização e os valores do mutualismo para oferecer seguros 
              acessíveis e transparentes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="text-center animate-on-scroll">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-aura-primary/5 rounded-2xl mb-6">
                <Shield className="w-10 h-10 text-aura-primary" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-aura-primary">Regulada pela SUSEP</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Seguradora autorizada e fiscalizada pela Superintendência de Seguros Privados, 
                garantindo segurança jurídica e proteção ao segurado.
              </p>
            </div>
            
            <div className="text-center animate-on-scroll">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-aura-primary/5 rounded-2xl mb-6">
                <Users className="w-10 h-10 text-aura-primary" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-aura-primary">Modelo Sustentável</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Unimos os valores do mutualismo à segurança do seguro privado, criando um modelo 
                sustentável, tecnológico e humanizado.
              </p>
            </div>
            
            <div className="text-center animate-on-scroll">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-aura-primary/5 rounded-2xl mb-6">
                <TrendingUp className="w-10 h-10 text-aura-primary" />
              </div>
              <h3 className="font-bold text-lg mb-3 text-aura-primary">Inovação e Tecnologia</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Plataforma digital completa com cotação online, adesão simples e renovação automática. 
                Tudo pensado para sua comodidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="py-20 animate-on-scroll">
        <div className="container">
          <div className="bg-aura-primary rounded-3xl p-12 md:p-16">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl md:text-5xl font-extrabold text-white mb-2">R$ 3,5M</p>
                <p className="text-sm text-white/60 font-medium">Capital Social</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-extrabold text-white mb-2">2</p>
                <p className="text-sm text-white/60 font-medium">Regiões de Atuação</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-extrabold text-white mb-2">S4</p>
                <p className="text-sm text-white/60 font-medium">Segmento SUSEP</p>
              </div>
              <div>
                <p className="text-4xl md:text-5xl font-extrabold text-white mb-2">100%</p>
                <p className="text-sm text-white/60 font-medium">Digital</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="bg-white py-20">
        <div className="container">
          <div className="text-center mb-14 animate-on-scroll">
            <p className="text-sm font-semibold text-aura-accent uppercase tracking-wider mb-2">Benefícios</p>
            <h2 className="text-3xl md:text-4xl font-bold text-aura-primary">Nossos Diferenciais</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex gap-5 p-6 rounded-2xl bg-aura-surface hover:shadow-card transition-all animate-on-scroll">
              <div className="w-12 h-12 bg-aura-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-aura-accent" />
              </div>
              <div>
                <h3 className="font-bold mb-1 text-aura-primary">Indenização Direta</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Pagamento direto ao segurado, sem intermediários. Você escolhe a oficina.
                </p>
              </div>
            </div>
            
            <div className="flex gap-5 p-6 rounded-2xl bg-aura-surface hover:shadow-card transition-all animate-on-scroll">
              <div className="w-12 h-12 bg-aura-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-aura-accent" />
              </div>
              <div>
                <h3 className="font-bold mb-1 text-aura-primary">Renovação Automática</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Cobertura mensal com renovação automática. Cancele quando quiser, sem multa.
                </p>
              </div>
            </div>
            
            <div className="flex gap-5 p-6 rounded-2xl bg-aura-surface hover:shadow-card transition-all animate-on-scroll">
              <div className="w-12 h-12 bg-aura-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-aura-accent" />
              </div>
              <div>
                <h3 className="font-bold mb-1 text-aura-primary">Adesão Simples</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Contratação 100% digital em poucos minutos. Sem burocracia.
                </p>
              </div>
            </div>
            
            <div className="flex gap-5 p-6 rounded-2xl bg-aura-surface hover:shadow-card transition-all animate-on-scroll">
              <div className="w-12 h-12 bg-aura-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-aura-accent" />
              </div>
              <div>
                <h3 className="font-bold mb-1 text-aura-primary">Transparência Total</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Condições claras, sem letras miúdas. Você sabe exatamente o que está contratando.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 animate-on-scroll">
        <div className="container">
          <div className="bg-gradient-to-br from-aura-primary to-aura-secondary rounded-3xl p-12 md:p-16 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pronto para se proteger?</h2>
            <p className="text-white/80 mb-10 max-w-2xl mx-auto leading-relaxed">
              Faça uma cotação online e descubra como é fácil ter um seguro que realmente protege.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                href="/calculadora" 
                className="inline-flex items-center gap-2 bg-white text-aura-primary px-8 py-4 rounded-xl font-bold hover:bg-slate-100 transition-all shadow-lg group"
              >
                Fazer Cotação
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/sobre" 
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/10 transition-all"
              >
                Conhecer a AURA
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
