import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://sete-lirios.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Sete Lírios | Farmácia de Manipulação em Franca",
  description: "Vitaminas, minerais, antioxidantes e fórmulas manipuladas em Franca/SP. Consulte produtos ou envie sua receita pelo WhatsApp.",
  alternates: { canonical: "/" },
  openGraph: { title: "Sete Lírios | Prevenção e Performance", description: "Vitaminas, suplementos e manipulados com orientação farmacêutica em Franca/SP.", url: "/", locale: "pt_BR", type: "website" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#f3efe7" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR"><body>{children}<Analytics /><SpeedInsights /></body></html>;
}
