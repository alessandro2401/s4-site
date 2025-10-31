import Link from "next/link";
import { MapPin, Mail, Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-10 border-t bg-slate-50">
      <div className="container py-10">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Sobre */}
          <div>
            <h3 className="font-bold text-aura-primary mb-3">AURA Seguradora S/A</h3>
            <p className="text-sm text-slate-600 mb-3 italic">
              "A energia que protege, ampara e inspira."
            </p>
            <div className="space-y-2 text-sm text-slate-600">
              <div className="flex items-start gap-2">
                <Shield className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Segmento S4 - Regulada SUSEP</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Sede: Goiânia/GO</span>
              </div>
            </div>
          </div>

          {/* Produtos */}
          <div>
            <h3 className="font-bold text-slate-800 mb-3">Produtos</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/produtos/auto" className="hover:text-aura-primary transition-colors">
                  Seguro Auto Mensal
                </Link>
              </li>
              <li>
                <Link href="/produtos/vida" className="hover:text-aura-primary transition-colors">
                  Seguro Vida Mensal
                </Link>
              </li>
            </ul>
          </div>

          {/* Institucional */}
          <div>
            <h3 className="font-bold text-slate-800 mb-3">Institucional</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/sobre" className="hover:text-aura-primary transition-colors">
                  Sobre a AURA
                </Link>
              </li>
              <li>
                <Link href="/ecossistema" className="hover:text-aura-primary transition-colors">
                  Ecossistema
                </Link>
              </li>
              <li>
                <Link href="/tecnico" className="hover:text-aura-primary transition-colors">
                  Informações Técnicas
                </Link>
              </li>
              <li>
                <Link href="/regulatorio" className="hover:text-aura-primary transition-colors">
                  Regulatório
                </Link>
              </li>
              <li>
                <Link href="/consultorias" className="hover:text-aura-primary transition-colors">
                  Consultorias
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-bold text-slate-800 mb-3">Contato</h3>
            <ul className="space-y-2 text-sm text-slate-600">
              <li>
                <Link href="/contato" className="hover:text-aura-primary transition-colors flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Fale Conosco
                </Link>
              </li>
              <li>
                <a 
                  href="https://sistemas.administradoramutual.com.br" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-aura-primary transition-colors"
                >
                  Acessar Sistemas
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Informações Regulatórias */}
        <div className="mt-8 pt-6 border-t border-slate-200">
          <div className="grid md:grid-cols-2 gap-4 text-xs text-slate-500">
            <div>
              <p className="mb-2">
                <strong>AURA Seguradora S/A</strong> - Sociedade Anônima de Capital Fechado
              </p>
              <p>
                Capital Social: R$ 3.500.000,00 (três milhões e quinhentos mil reais)
              </p>
            </div>
            <div>
              <p className="mb-2">
                Regulada e fiscalizada pela <strong>SUSEP</strong> - Superintendência de Seguros Privados
              </p>
              <p>
                Segmento S4 conforme Resolução CNSP nº 416/2021
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-6 border-t border-slate-200 text-center text-xs text-slate-500">
          <p>© 2025 AURA Seguradora S/A. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
