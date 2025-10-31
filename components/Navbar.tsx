import Link from "next/link";

export function Navbar() {
  return (
    <header className="border-b bg-white/70 backdrop-blur sticky top-0 z-50">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="font-bold text-aura-primary text-lg">
          AURA Seguradora S/A
        </Link>
        <nav className="flex gap-6 text-sm">
          <Link href="/sobre" className="hover:text-aura-primary transition-colors">
            Sobre
          </Link>
          <Link href="/produtos/auto" className="hover:text-aura-primary transition-colors">
            Auto
          </Link>
          <Link href="/produtos/vida" className="hover:text-aura-primary transition-colors">
            Vida
          </Link>
          <Link href="/ecossistema" className="hover:text-aura-primary transition-colors">
            Ecossistema
          </Link>
          <Link href="/regulatorio" className="hover:text-aura-primary transition-colors">
            Regulatório
          </Link>
          <Link href="/consultorias" className="hover:text-aura-primary transition-colors">
            Consultorias
          </Link>
          <Link href="/contato" className="hover:text-aura-primary transition-colors">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}
