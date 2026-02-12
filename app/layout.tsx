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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
