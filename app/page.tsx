import { Hero } from "@/components/Hero";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Shield, Users, TrendingUp, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Produtos */}
      <section className="container grid md:grid-cols-3 gap-6 py-10">
        <Card className="p-6 space-y-2 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">Seguro Auto Mensal</h2>
          <p>Indenização direta ao segurado, oficina livre e PT ≥ 75% FIPE.</p>
          <Link href="/produtos/auto" className="text-aura-accent font-semibold">
            Saiba mais
          </Link>
        </Card>
        
        <Card className="p-6 space-y-2 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">Seguro Vida Mensal</h2>
          <p>Cobertura inclusiva com adesão simples e renovação mensal automática.</p>
          <Link href="/produtos/vida" className="text-aura-accent font-semibold">
            Saiba mais
          </Link>
        </Card>
        
        <Card className="p-6 space-y-2 hover:shadow-lg transition">
          <h2 className="text-xl font-semibold">Governança e SUSEP</h2>
          <p>Transparência e conformidade (CNSP 388/2020, 432/2021 e Circular SUSEP 700/2024).</p>
          <Link href="/regulatorio" className="text-aura-accent font-semibold">
            Ver documentos
          </Link>
        </Card>
      </section>

      {/* Por que escolher a AURA */}
      <section className="bg-slate-50 py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-4">Por que escolher a AURA?</h2>
          <p className="text-center text-slate-600 mb-12 max-w-2xl mx-auto">
            Combinamos tecnologia, humanização e os valores do mutualismo para oferecer seguros 
            acessíveis e transparentes.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-aura-accent/10 rounded-full mb-4">
                <Shield className="w-8 h-8 text-aura-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2">Regulada pela SUSEP</h3>
              <p className="text-sm text-slate-600">
                Seguradora autorizada e fiscalizada pela Superintendência de Seguros Privados, 
                garantindo segurança jurídica e proteção ao segurado.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-aura-accent/10 rounded-full mb-4">
                <Users className="w-8 h-8 text-aura-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2">Modelo Sustentável</h3>
              <p className="text-sm text-slate-600">
                Unimos os valores do mutualismo à segurança do seguro privado, criando um modelo 
                sustentável, tecnológico e humanizado.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-aura-accent/10 rounded-full mb-4">
                <TrendingUp className="w-8 h-8 text-aura-accent" />
              </div>
              <h3 className="font-bold text-lg mb-2">Inovação e Tecnologia</h3>
              <p className="text-sm text-slate-600">
                Plataforma digital completa com cotação online, adesão simples e renovação automática. 
                Tudo pensado para sua comodidade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="container py-16">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-aura-primary mb-2">R$ 3,5M</p>
            <p className="text-sm text-slate-600">Capital Social</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-aura-primary mb-2">2</p>
            <p className="text-sm text-slate-600">Regiões de Atuação</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-aura-primary mb-2">S4</p>
            <p className="text-sm text-slate-600">Segmento SUSEP</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-aura-primary mb-2">100%</p>
            <p className="text-sm text-slate-600">Digital</p>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="bg-gradient-to-br from-aura-primary to-aura-secondary text-white py-16">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Diferenciais</h2>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Indenização Direta</h3>
                <p className="text-sm text-white/90">
                  Pagamento direto ao segurado, sem intermediários. Você escolhe a oficina.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Renovação Automática</h3>
                <p className="text-sm text-white/90">
                  Cobertura mensal com renovação automática. Cancele quando quiser, sem multa.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Adesão Simples</h3>
                <p className="text-sm text-white/90">
                  Contratação 100% digital em poucos minutos. Sem burocracia.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-1">Transparência Total</h3>
                <p className="text-sm text-white/90">
                  Condições claras, sem letras miúdas. Você sabe exatamente o que está contratando.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="container py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Pronto para se proteger?</h2>
        <p className="text-slate-600 mb-8 max-w-2xl mx-auto">
          Faça uma cotação online e descubra como é fácil ter um seguro que realmente protege.
        </p>
        <div className="flex gap-4 justify-center">
          <Link 
            href="/calculadora" 
            className="inline-block bg-aura-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-aura-secondary transition-colors"
          >
            Fazer Cotação
          </Link>
          <Link 
            href="/sobre" 
            className="inline-block border-2 border-aura-primary text-aura-primary px-8 py-3 rounded-lg font-semibold hover:bg-aura-primary hover:text-white transition-colors"
          >
            Conhecer a AURA
          </Link>
        </div>
      </section>
    </>
  );
}
