"use client";

import Link from "next/link";

import { MapPin, Mail, Shield, Phone, ExternalLink } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="mt-16 bg-aura-primary text-white">
      <div className="container py-14">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Sobre */}
          <div className="md:col-span-1">
            <Image 
              src="/logos/aura/aura_horizontal_branca.svg" 
              alt="AURA Seguradora" 
              width={150} 
              height={42}
              className="mb-4 brightness-0 invert"

            />
            <p className="text-sm text-white/60 mb-5 leading-relaxed italic">
              "A energia que protege, ampara e inspira."
            </p>
            <div className="space-y-3 text-sm text-white/70">
              <div className="flex items-start gap-2">
                <Shield className="w-4 h-4 mt-0.5 flex-shrink-0 text-emerald-400" />
                <span>Segmento S4 - Regulada SUSEP</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-emerald-400" />
                <span>Sede: Goiânia/GO</span>
              </div>
            </div>
          </div>

          {/* Produtos */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-white/40 mb-5">Produtos</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/produtos/auto" className="text-white/70 hover:text-white transition-colors">
                  Seguro Auto Mensal
                </Link>
              </li>
              <li>
                <Link href="/produtos/vida" className="text-white/70 hover:text-white transition-colors">
                  Seguro Vida Mensal
                </Link>
              </li>
              <li>
                <Link href="/calculadora" className="text-white/70 hover:text-white transition-colors">
                  Calculadora de Prêmio
                </Link>
              </li>
            </ul>
          </div>

          {/* Institucional */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-white/40 mb-5">Institucional</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/sobre" className="text-white/70 hover:text-white transition-colors">
                  Sobre a AURA
                </Link>
              </li>
              <li>
                <Link href="/ecossistema" className="text-white/70 hover:text-white transition-colors">
                  Ecossistema
                </Link>
              </li>
              <li>
                <Link href="/tecnico" className="text-white/70 hover:text-white transition-colors">
                  Informações Técnicas
                </Link>
              </li>
              <li>
                <Link href="/regulatorio" className="text-white/70 hover:text-white transition-colors">
                  Regulatório
                </Link>
              </li>
              <li>
                <Link href="/consultorias" className="text-white/70 hover:text-white transition-colors">
                  Consultorias
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-white/40 mb-5">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/contato" className="text-white/70 hover:text-white transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4 text-emerald-400" />
                  Fale Conosco
                </Link>
              </li>
              <li>
                <a 
                  href="https://sistemas.administradoramutual.com.br" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition-colors flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4 text-emerald-400" />
                  Acessar Sistemas
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Informações Regulatórias */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="grid md:grid-cols-2 gap-6 text-xs text-white/40">
            <div>
              <p className="mb-1">
                <strong className="text-white/60">AURA Seguradora S/A</strong> - Sociedade Anônima de Capital Fechado
              </p>
              <p>
                Capital Social: R$ 3.500.000,00 (três milhões e quinhentos mil reais)
              </p>
            </div>
            <div>
              <p className="mb-1">
                Regulada e fiscalizada pela <strong className="text-white/60">SUSEP</strong> - Superintendência de Seguros Privados
              </p>
              <p>
                Segmento S4 conforme Resolução CNSP nº 388/2020
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs text-white/30">
          <p>© 2026 AURA Seguradora S/A. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
