"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";

export function NavbarNew() {
  const [showProdutos, setShowProdutos] = useState(false);
  const [showInstitucional, setShowInstitucional] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const produtosTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const institucionalTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleProdutosEnter = () => {
    if (produtosTimeoutRef.current) clearTimeout(produtosTimeoutRef.current);
    setShowProdutos(true);
  };
  const handleProdutosLeave = () => {
    produtosTimeoutRef.current = setTimeout(() => setShowProdutos(false), 200);
  };
  const handleInstitucionalEnter = () => {
    if (institucionalTimeoutRef.current) clearTimeout(institucionalTimeoutRef.current);
    setShowInstitucional(true);
  };
  const handleInstitucionalLeave = () => {
    institucionalTimeoutRef.current = setTimeout(() => setShowInstitucional(false), 200);
  };

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-nav">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center">
          <Image 
            src="/logos/aura/aura_horizontal_colorida.svg" 
            alt="AURA Seguradora" 
            width={160} 
            height={44}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-1 text-sm items-center font-medium">
          <Link href="/sobre" className="px-4 py-2 rounded-lg text-slate-700 hover:text-aura-primary hover:bg-aura-primary/5 transition-all">
            Sobre
          </Link>
          
          {/* Dropdown Produtos */}
          <div 
            className="relative"
            onMouseEnter={handleProdutosEnter}
            onMouseLeave={handleProdutosLeave}
          >
            <button className="flex items-center gap-1 px-4 py-2 rounded-lg text-slate-700 hover:text-aura-primary hover:bg-aura-primary/5 transition-all">
              Produtos
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showProdutos ? 'rotate-180' : ''}`} />
            </button>
            <div 
              className={`absolute top-full left-0 pt-1 transition-all duration-200 ${
                showProdutos ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'
              }`}
              onMouseEnter={handleProdutosEnter}
              onMouseLeave={handleProdutosLeave}
            >
              <div className="bg-white rounded-xl shadow-card-hover py-2 min-w-[200px] border border-slate-100">
                <Link href="/produtos/auto" className="block px-4 py-2.5 text-slate-700 hover:bg-aura-primary/5 hover:text-aura-primary transition-all">
                  Seguro Auto
                </Link>
                <Link href="/produtos/vida" className="block px-4 py-2.5 text-slate-700 hover:bg-aura-primary/5 hover:text-aura-primary transition-all">
                  Seguro Vida
                </Link>
                <Link href="/calculadora" className="block px-4 py-2.5 text-slate-700 hover:bg-aura-primary/5 hover:text-aura-primary transition-all">
                  Calculadora
                </Link>
              </div>
            </div>
          </div>

          {/* Dropdown Institucional */}
          <div 
            className="relative"
            onMouseEnter={handleInstitucionalEnter}
            onMouseLeave={handleInstitucionalLeave}
          >
            <button className="flex items-center gap-1 px-4 py-2 rounded-lg text-slate-700 hover:text-aura-primary hover:bg-aura-primary/5 transition-all">
              Institucional
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showInstitucional ? 'rotate-180' : ''}`} />
            </button>
            <div 
              className={`absolute top-full left-0 pt-1 transition-all duration-200 ${
                showInstitucional ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'
              }`}
              onMouseEnter={handleInstitucionalEnter}
              onMouseLeave={handleInstitucionalLeave}
            >
              <div className="bg-white rounded-xl shadow-card-hover py-2 min-w-[220px] border border-slate-100">
                <Link href="/ecossistema" className="block px-4 py-2.5 text-slate-700 hover:bg-aura-primary/5 hover:text-aura-primary transition-all">
                  Ecossistema
                </Link>
                <Link href="/tecnico" className="block px-4 py-2.5 text-slate-700 hover:bg-aura-primary/5 hover:text-aura-primary transition-all">
                  Informações Técnicas
                </Link>
                <Link href="/regulatorio" className="block px-4 py-2.5 text-slate-700 hover:bg-aura-primary/5 hover:text-aura-primary transition-all">
                  Regulatório
                </Link>
                <Link href="/consultorias" className="block px-4 py-2.5 text-slate-700 hover:bg-aura-primary/5 hover:text-aura-primary transition-all">
                  Consultorias
                </Link>
              </div>
            </div>
          </div>

          <Link 
            href="/contato" 
            className="ml-2 px-5 py-2.5 bg-aura-primary text-white rounded-xl font-semibold hover:bg-aura-secondary transition-colors"
          >
            Contato
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-white animate-fade-in">
          <nav className="container py-4 flex flex-col gap-1">
            <Link href="/sobre" onClick={() => setMobileOpen(false)} className="px-4 py-3 rounded-lg hover:bg-aura-primary/5 text-slate-700 font-medium">
              Sobre
            </Link>
            <div className="px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Produtos</div>
            <Link href="/produtos/auto" onClick={() => setMobileOpen(false)} className="px-6 py-3 rounded-lg hover:bg-aura-primary/5 text-slate-700">
              Seguro Auto
            </Link>
            <Link href="/produtos/vida" onClick={() => setMobileOpen(false)} className="px-6 py-3 rounded-lg hover:bg-aura-primary/5 text-slate-700">
              Seguro Vida
            </Link>
            <Link href="/calculadora" onClick={() => setMobileOpen(false)} className="px-6 py-3 rounded-lg hover:bg-aura-primary/5 text-slate-700">
              Calculadora
            </Link>
            <div className="px-4 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Institucional</div>
            <Link href="/ecossistema" onClick={() => setMobileOpen(false)} className="px-6 py-3 rounded-lg hover:bg-aura-primary/5 text-slate-700">
              Ecossistema
            </Link>
            <Link href="/tecnico" onClick={() => setMobileOpen(false)} className="px-6 py-3 rounded-lg hover:bg-aura-primary/5 text-slate-700">
              Informações Técnicas
            </Link>
            <Link href="/regulatorio" onClick={() => setMobileOpen(false)} className="px-6 py-3 rounded-lg hover:bg-aura-primary/5 text-slate-700">
              Regulatório
            </Link>
            <Link href="/consultorias" onClick={() => setMobileOpen(false)} className="px-6 py-3 rounded-lg hover:bg-aura-primary/5 text-slate-700">
              Consultorias
            </Link>
            <Link href="/contato" onClick={() => setMobileOpen(false)} className="mx-4 mt-2 py-3 bg-aura-primary text-white text-center rounded-xl font-semibold">
              Contato
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
