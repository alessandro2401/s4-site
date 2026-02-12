"use client";

import Link from "next/link";
import { MapPin, Shield, Lightbulb, ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

export function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section className="gradient-hero text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-[-5%] w-72 h-72 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-[-5%] w-96 h-96 bg-white/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-3xl" />
      </div>

      <div className="container py-24 md:py-32 relative z-10">
        <div className={`max-w-4xl transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-8 border border-white/10">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Segmento S4 SUSEP</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight">
            AURA Seguradora S/A
          </h1>
          <p className="text-xl md:text-2xl font-light mb-8 text-white/80 leading-relaxed max-w-2xl">
            A energia que protege, ampara e inspira. Seguros acessíveis, transparentes e 100% digitais.
          </p>

          {/* Stats Cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            <div className="bg-white/[0.08] backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:bg-white/[0.12] transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-emerald-400" />
                <p className="font-semibold text-sm">Segmento S4</p>
              </div>
              <p className="text-sm text-white/60">Regulada pela SUSEP</p>
            </div>
            
            <div className="bg-white/[0.08] backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:bg-white/[0.12] transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5 text-emerald-400" />
                <p className="font-semibold text-sm">Regiões 3 e 5</p>
              </div>
              <p className="text-sm text-white/60">Nordeste e Centro-Oeste</p>
            </div>
            
            <div className="bg-white/[0.08] backdrop-blur-sm rounded-2xl p-5 border border-white/10 hover:bg-white/[0.12] transition-colors">
              <div className="flex items-center gap-2 mb-2">
                <Lightbulb className="w-5 h-5 text-emerald-400" />
                <p className="font-semibold text-sm">R$ 3,5 milhões</p>
              </div>
              <p className="text-sm text-white/60">Capital Social</p>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link 
              href="/sobre"
              className="inline-flex items-center gap-2 bg-white text-aura-primary font-semibold px-8 py-4 rounded-xl hover:bg-slate-100 transition-all duration-300 group shadow-lg"
            >
              Sobre a AURA
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              href="/produtos/auto"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              Seguro Auto
            </Link>
            <Link 
              href="/produtos/vida"
              className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              Seguro Vida
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
