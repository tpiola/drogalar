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
    default: "Drogalar | Farmácia de Manipulação em Franca/SP",
    template: "%s | Drogalar Farmácia",
  },
  description:
    "Farmácia de manipulação em Franca/SP — fórmulas personalizadas, manipulação magistral, consultoria farmacêutica e produtos de alta qualidade. Sua saúde é única, seu tratamento também.",
  keywords: [
    "farmácia de manipulação",
    "Franca SP",
    "fórmulas personalizadas",
    "manipulação magistral",
    "consultoria farmacêutica",
    "Drogalar",
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: "https://drogalar.vercel.app" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Drogalar Farmácia de Manipulação",
    title: "Drogalar | Farmácia de Manipulação em Franca/SP",
    description:
      "Fórmulas personalizadas com excelência farmacêutica. Sua saúde merece o melhor.",
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