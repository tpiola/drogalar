import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sete Lírios | Farmácia de Manipulação em Franca/SP",
    template: "%s | Sete Lírios Farmácia",
  },
  description:
    "Farmácia de manipulação em Franca/SP — fórmulas personalizadas, manipulação magistral, Alta Performance e fitoterápicos. 8.630 seguidores no Instagram. Atendimento humanizado com 5 estrelas.",
  keywords: [
    "farmácia de manipulação",
    "Franca SP",
    "Sete Lírios",
    "fórmulas personalizadas",
    "manipulação magistral",
    "farmaciasetelirios",
    "Alta Performance",
    "farmácia Franca",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://setelirios.vercel.app" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Sete Lírios Farmácia de Manipulação",
    title: "Sete Lírios | Farmácia de Manipulação em Franca/SP",
    description:
      "Fórmulas personalizadas com excelência farmacêutica. Alta Performance, alopáticos e fitoterápicos. ★5.0 — 8.630 seguidores.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.variable} ${plusJakarta.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}