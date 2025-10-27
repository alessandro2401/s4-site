import "@/app/globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";
export const metadata: Metadata = { title: "AURA Seguradora S/A", description: "A energia que protege, ampara e inspira." };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="pt-BR"><body className="min-h-screen flex flex-col"><Navbar /><main className="flex-1">{children}</main><Footer /></body></html>);
}