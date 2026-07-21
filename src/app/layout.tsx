import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://setelirios.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Sete Lírios | Farmácia de Manipulação em Franca",
  description: "Solicite seu orçamento de fórmula manipulada pelo WhatsApp. Atendimento farmacêutico em Franca/SP.",
  alternates: { canonical: "/" },
  openGraph: { title: "Sete Lírios | Farmácia de Manipulação", description: "Sua prescrição tratada com precisão, clareza e cuidado.", url: "/", locale: "pt_BR", type: "website" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f3efe7" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}<Analytics /><SpeedInsights /></body></html>;
}
