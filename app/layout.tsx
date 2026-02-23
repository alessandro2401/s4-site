import "@/app/globals.css";
import { NavbarNew as Navbar } from "@/components/NavbarNew";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "AURA Seguradora S/A | Seguro Auto e Vida Mensal | S4 SUSEP",
  description: "AURA Seguradora S/A - Seguro Auto e Vida Mensal com indenização direta, renovação automática e adesão simples. Regulada pela SUSEP (S4). A energia que protege, ampara e inspira.",
  keywords: ["AURA Seguradora", "Seguro Auto Mensal", "Seguro Vida Mensal", "S4", "SUSEP", "Seguro Privado", "Goiânia"],
  openGraph: {
    title: "AURA Seguradora S/A | Seguro Auto e Vida Mensal",
    description: "Seguro Auto e Vida Mensal com indenização direta e renovação automática. Regulada pela SUSEP (S4).",
    type: "website",
    locale: "pt_BR",
    url: "https://s4.administradoramutual.com.br",
  },
};

const noManusBadgeScript = `(function(){var MANUS_SELECTORS=['[data-manus]','[id*="manus-badge"]','[id*="manus-widget"]','[class*="manus-badge"]','[class*="manus-widget"]','[class*="manus-branding"]','a[href*="manus.im"]'];function removeManusBadge(){MANUS_SELECTORS.forEach(function(selector){try{document.querySelectorAll(selector).forEach(function(el){var tag=el.tagName?el.tagName.toLowerCase():'';if(['style','script','link','head','body','html','meta'].indexOf(tag)===-1){el.remove();}});}catch(e){}});}if(window.MutationObserver){new MutationObserver(function(m){m.forEach(function(x){if(x.addedNodes.length)removeManusBadge();});}).observe(document.documentElement,{childList:true,subtree:true});}if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',removeManusBadge);}else{removeManusBadge();}window.addEventListener('load',function(){setTimeout(removeManusBadge,500);setTimeout(removeManusBadge,2000);});})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <head>
        {/* Bloqueia o badge "Made with Manus" */}
        <style>{`[data-manus],[id*="manus-badge"],[id*="manus-widget"],[class*="manus-badge"],[class*="manus-widget"],[class*="manus-branding"],a[href*="manus.im"]{display:none!important;visibility:hidden!important;opacity:0!important;pointer-events:none!important;}`}</style>
        <script dangerouslySetInnerHTML={{ __html: noManusBadgeScript }} />
      </head>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
