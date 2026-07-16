import type { Metadata, Viewport } from "next";
import "./globals.css";
import LGPDPopup from "@/components/LGPDPopup";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

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
    "suplementos manipulados",
    "creatina Franca",
    "whey protein Franca",
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
    url: "https://setelirios.vercel.app",
    images: [
      {
        url: "https://setelirios.vercel.app/logo-sete-lirios.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sete Lírios | Farmácia de Manipulação em Franca/SP",
    description:
      "Fórmulas personalizadas com excelência farmacêutica. ★5.0 — 8.630 seguidores.",
    images: ["https://setelirios.vercel.app/logo-sete-lirios.jpg"],
  },
  other: {
    "application/ld+json": JSON.stringify([
      {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        name: "Farmácia Sete Lírios",
        image: "https://setelirios.vercel.app/logo-sete-lirios.jpg",
        telephone: "(16) 3722-3777",
        email: "contato@setelirios.com.br",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Av. Brasil, 815",
          addressLocality: "Franca",
          addressRegion: "SP",
          postalCode: "14401-240",
          addressCountry: "BR",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: -20.539,
          longitude: -47.401,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "20:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: "Saturday",
            opens: "08:00",
            closes: "18:00",
          },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          bestRating: "5.0",
          ratingCount: "8",
        },
        url: "https://setelirios.vercel.app",
        sameAs: [
          "https://instagram.com/farmaciasetelirios",
          `https://wa.me/5516992440470`,
        ],
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "O que é farmácia de manipulação?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Farmácia de manipulação é onde medicamentos e fórmulas são preparados sob prescrição médica, de forma personalizada para cada paciente, com dosagem exata e princípios ativos específicos.",
            },
          },
          {
            "@type": "Question",
            name: "Quanto tempo leva para manipular uma fórmula?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Em média de 24 a 48 horas úteis, dependendo da complexidade da fórmula e disponibilidade dos insumos.",
            },
          },
          {
            "@type": "Question",
            name: "Vocês entregam em Franca?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sim, entregamos em Franca/SP e região. Consulte nosso WhatsApp para mais informações sobre prazos e taxas de entrega.",
            },
          },
          {
            "@type": "Question",
            name: "Preciso de receita médica?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sim, a manipulação de medicamentos é feita exclusivamente sob prescrição médica, garantindo segurança e eficácia do tratamento.",
            },
          },
        ],
      },
    ]),
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
      <head>
        {/* Vercel Analytics */}
        <script
          defer
          src="/_vercel/insights/script.js"
        />
        {/* Speed Insights */}
        <link
          rel="preload"
          href="/_vercel/speed-insights/script.js"
          as="script"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
        <LGPDPopup />
      </body>
    </html>
  );
}