"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export function NavbarNew() {
  const [showProdutos, setShowProdutos] = useState(false);
  const [showInstitucional, setShowInstitucional] = useState(false);

  return (
    <header className="border-b bg-white/70 backdrop-blur sticky top-0 z-50">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="flex items-center">
          <Image 
            src="/logos/aura/aura_horizontal_colorida.svg" 
            alt="AURA Seguradora" 
            width={180} 
            height={50}
            priority
          />
        </Link>
        <nav className="flex gap-6 text-sm">
          <Link href="/sobre" className="hover:text-aura-primary transition-colors">
            Sobre
          </Link>
          
          {/* Dropdown Produtos */}
          <div 
            className="relative"
            onMouseEnter={() => setShowProdutos(true)}
            onMouseLeave={() => setShowProdutos(false)}
          >
            <button className="flex items-center gap-1 hover:text-aura-primary transition-colors">
              Produtos
              <ChevronDown className="w-4 h-4" />
            </button>
            {showProdutos && (
              <div className="absolute top-full left-0 mt-2 bg-white border rounded-lg shadow-lg py-2 min-w-[180px]">
                <Link 
                  href="/produtos/auto" 
                  className="block px-4 py-2 hover:bg-slate-50 hover:text-aura-primary transition-colors"
                >
                  Seguro Auto
                </Link>
                <Link 
                  href="/produtos/vida" 
                  className="block px-4 py-2 hover:bg-slate-50 hover:text-aura-primary transition-colors"
                >
                  Seguro Vida
                </Link>
                <Link 
                  href="/calculadora" 
                  className="block px-4 py-2 hover:bg-slate-50 hover:text-aura-primary transition-colors"
                >
                  Calculadora
                </Link>
              </div>
            )}
          </div>

          {/* Dropdown Institucional */}
          <div 
            className="relative"
            onMouseEnter={() => setShowInstitucional(true)}
            onMouseLeave={() => setShowInstitucional(false)}
          >
            <button className="flex items-center gap-1 hover:text-aura-primary transition-colors">
              Institucional
              <ChevronDown className="w-4 h-4" />
            </button>
            {showInstitucional && (
              <div className="absolute top-full left-0 mt-2 bg-white border rounded-lg shadow-lg py-2 min-w-[200px]">
                <Link 
                  href="/ecossistema" 
                  className="block px-4 py-2 hover:bg-slate-50 hover:text-aura-primary transition-colors"
                >
                  Ecossistema
                </Link>
                <Link 
                  href="/tecnico" 
                  className="block px-4 py-2 hover:bg-slate-50 hover:text-aura-primary transition-colors"
                >
                  Informações Técnicas
                </Link>
                <Link 
                  href="/regulatorio" 
                  className="block px-4 py-2 hover:bg-slate-50 hover:text-aura-primary transition-colors"
                >
                  Regulatório
                </Link>
                <Link 
                  href="/consultorias" 
                  className="block px-4 py-2 hover:bg-slate-50 hover:text-aura-primary transition-colors"
                >
                  Consultorias
                </Link>
              </div>
            )}
          </div>

          <Link href="/contato" className="hover:text-aura-primary transition-colors">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}
