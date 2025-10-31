import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MapPin, Shield, Lightbulb } from "lucide-react";

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-aura-primary to-aura-secondary text-white">
      <div className="container py-20">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            AURA Seguradora S/A
          </h1>
          <p className="text-2xl md:text-3xl font-light mb-6 text-white/95 italic">
            A energia que protege, ampara e inspira
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-6">
            <div className="flex items-start gap-3 mb-4">
              <Lightbulb className="w-6 h-6 flex-shrink-0 mt-1" />
              <p className="text-lg text-white/90 leading-relaxed">
                Proteger pessoas e patrimônios por meio de modelos sustentáveis, tecnológicos e humanizados, 
                unindo os valores do mutualismo à segurança jurídica do seguro privado.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5" />
                <p className="font-semibold">Segmento S4</p>
              </div>
              <p className="text-sm text-white/80">Regulada pela SUSEP</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-5 h-5" />
                <p className="font-semibold">Regiões 3 e 5</p>
              </div>
              <p className="text-sm text-white/80">Nordeste e Centro-Oeste</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <p className="font-semibold mb-1">R$ 3,5 milhões</p>
              <p className="text-sm text-white/80">Capital Social</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/sobre">
              <Button variant="default" className="bg-white text-aura-primary hover:bg-slate-100">
                Sobre a AURA
              </Button>
            </Link>
            <Link href="/produtos/auto">
              <Button variant="ghost" className="border border-white/30 text-white hover:bg-white/10">
                Seguro Auto
              </Button>
            </Link>
            <Link href="/produtos/vida">
              <Button variant="ghost" className="border border-white/30 text-white hover:bg-white/10">
                Seguro Vida
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
