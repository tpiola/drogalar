"use client";

import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FlaskRound as Flask,
  Shield,
  Star,
  Heart,
  Phone,
  Mail,
  MapPin,
  Clock,
  ChevronRight,
  Menu,
  X,
  Sparkles,
  Award,
  Pill,
  TestTube as Beaker,
} from "lucide-react";
import Link from "next/link";
import { CONTACT } from "./data";

/* ─── NAVBAR ─── */
function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const bg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(15,23,42,0)", "rgba(15,23,42,0.95)"]
  );
  const links = [
    { label: "Início", href: "#hero" },
    { label: "Serviços", href: "#servicos" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "Contato", href: "#contato" },
  ];
  return (
    <motion.header
      style={{ background: bg }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/5"
    >
      <nav className="container-drop flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-2">
          <Flask className="w-6 h-6 text-brand" />
          <span className="font-display text-lg font-bold tracking-tight">
            Sete <span className="text-brand">Lírios</span>
          </span>
          <span className="hidden sm:block text-[10px] text-muted uppercase tracking-wider ml-1">
            Farmácia de Manipulação
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-4 py-2 text-sm text-muted hover:text-foreground transition-colors rounded-lg hover:bg-white/5"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#contato"
            className="ml-3 btn-primary text-sm"
          >
            Fale Conosco <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground"
          aria-label="Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden border-t border-white/5 bg-surface/95 backdrop-blur-lg"
        >
          <div className="container-drop py-4 flex flex-col gap-2">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-muted hover:text-foreground rounded-lg hover:bg-white/5"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="#contato"
              onClick={() => setOpen(false)}
              className="btn-primary justify-center mt-2"
            >
              Fale Conosco <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}

/* ─── HERO ─── */
function Hero() {
  const ref = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.4, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f5f7f3] via-[#e8f0e8] to-[#f5f7f3]" />
      <motion.div
        style={{ y, opacity, backgroundImage: "radial-gradient(circle at 25% 50%, var(--brand) 0%, transparent 50%)" }}
        className="absolute inset-0 opacity-[0.03]"
      />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-drop relative z-10 py-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-brand-light mb-6"
          >
            <Sparkles className="w-4 h-4" />
            Farmacêutico CRF/SP • Farmácia de Manipulação
            <span className="text-gold ml-2">★ {CONTACT.rating}</span>
            <span className="text-muted ml-1">({CONTACT.followers.toLocaleString()} seguidores)</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.92] mb-6"
          >
            Sua saúde é{" "}
            <span className="text-gradient">única</span>
            <br />
            seu tratamento{" "}
            <span className="text-gradient">também</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-muted max-w-xl mb-10 leading-relaxed"
          >
            Fórmulas personalizadas com excelência farmacêutica. 
            Manipulamos o tratamento ideal para você, com rigor técnico 
            e cuidado em cada detalhe.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href={CONTACT.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Phone className="w-4 h-4" /> Fale pelo WhatsApp
            </a>
            <a href="#servicos" className="btn-outline">
              Nossos Serviços <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Floating elements */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[10%] top-[25%] w-32 h-32 rounded-full bg-brand/5 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[20%] bottom-[20%] w-48 h-48 rounded-full bg-gold/5 blur-3xl"
      />
    </section>
  );
}

/* ─── SERVICES ─── */
const services = [
  {
    icon: Flask,
    title: "Manipulação Magistral",
    desc: "Fórmulas personalizadas prescritas por seu médico, com rigoroso controle de qualidade e insumos certificados.",
  },
  {
    icon: Pill,
    title: "Farmacotécnica",
    desc: "Desenvolvimento de formulações específicas para suas necessidades — cápsulas, cremes, géis e soluções.",
  },
  {
    icon: Beaker,
    title: "Consultoria Farmacêutica",
    desc: "Acompanhamento profissional para orientar seu tratamento com segurança, eficácia e personalização.",
  },
  {
    icon: Heart,
    title: "Produtos Fitoterápicos",
    desc: "Medicamentos à base de plantas com qualidade farmacêutica, manipulados sob medida para você.",
  },
];

function Services() {
  return (
    <section id="servicos" className="section-pad">
      <div className="container-drop">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-brand-light mb-4">
            <Star className="w-4 h-4" /> Nossos Serviços
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Excelência em <span className="text-gradient">cada fórmula</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Da manipulação à consultoria, cada serviço é pensado para oferecer 
            o melhor cuidado farmacêutico personalizado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-premium group"
            >
              <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-4 group-hover:bg-brand/20 transition-colors">
                <s.icon className="w-6 h-6 text-brand" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">
                {s.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── DIFFERENTIALS ─── */
const diffs = [
  {
    icon: Award,
    title: "Farmácia Magistral",
    desc: "Manipulação com padrão de qualidade industrial, seguindo rigorosamente as Boas Práticas de Manipulação.",
  },
  {
    icon: Shield,
    title: "Insumos Certificados",
    desc: "Matérias-primas de fornecedores certificados pela ANVISA, com rastreabilidade total.",
  },
  {
    icon: Sparkles,
    title: "Fórmulas Exclusivas",
    desc: "Cada prescrição é única. Adaptamos veículo, concentração e forma farmacêutica para você.",
  },
  {
    icon: Star,
    title: "Atendimento Humanizado",
    desc: "Equipe farmacêutica dedicada a orientar seu tratamento com clareza, respeito e atenção.",
  },
];

function Differentials() {
  return (
    <section id="diferenciais" className="section-pad bg-surface-elevated/50">
      <div className="container-drop">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-brand-light mb-4">
            <Shield className="w-4 h-4" /> Por que escolher a Drogalar
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Seu tratamento em{" "}
            <span className="text-gradient">boas mãos</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {diffs.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-5 p-6 rounded-xl glass-gold"
            >
              <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center shrink-0">
                <d.icon className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold mb-1">
                  {d.title}
                </h3>
                <p className="text-muted text-sm leading-relaxed">{d.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CTA ─── */
function Cta() {
  return (
    <section className="section-pad">
      <div className="container-drop">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-2xl p-10 md:p-16 text-center"
          style={{
            background:
              "linear-gradient(135deg, #e8f0e8 0%, #d4e0d4 50%, #e8f0e8 100%)",
          }}
        >
          <div className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 50% 50%, var(--brand) 0%, transparent 50%)",
            }}
          />
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">
              Comece seu tratamento{" "}
              <span className="text-gradient">personalizado</span>
            </h2>
            <p className="text-muted text-lg max-w-xl mx-auto mb-8">
              Agende uma consulta farmacêutica e descubra como a manipulação 
              pode transformar sua saúde.
            </p>
            <a
              href={CONTACT.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg px-8 py-4"
            >
              <Phone className="w-5 h-5" /> Fale pelo WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── CONTACT ─── */
function Contact() {
  return (
    <section id="contato" className="section-pad bg-surface-elevated/50">
      <div className="container-drop">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Fale com a{" "}
            <span className="text-gradient">Drogalar</span>
          </h2>
          <p className="text-muted text-lg">
            Estamos prontos para atender você.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-4">
          {[
            {
              icon: Phone,
              label: "Telefone",
              value: CONTACT.phone1,
              href: CONTACT.phoneHref,
            },
            {
              icon: Phone,
              label: "WhatsApp",
              value: CONTACT.whatsapp,
              href: CONTACT.whatsappLink,
            },
            {
              icon: MapPin,
              label: "Endereço",
              value: CONTACT.address,
            },
            {
              icon: Clock,
              label: "Horário",
              value: CONTACT.hours,
            },
          ].map((item) => (
            <div key={item.label} className="card-premium flex items-center gap-4">
              <div className="w-10 h-10 rounded-lg bg-brand/10 flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5 text-brand" />
              </div>
              <div>
                <p className="text-xs text-muted uppercase tracking-wider">
                  {item.label}
                </p>
                {item.href ? (
                  <a
                    href={item.href}
                    className="text-sm font-medium hover:text-brand transition-colors"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm font-medium">{item.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="container-drop flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Flask className="w-5 h-5 text-brand" />
          <span className="font-display font-bold">
            Sete <span className="text-brand">Lírios</span>
          </span>
        </div>
        <p className="text-sm text-muted">
          Farmácia de Manipulação — Franca/SP © {new Date().getFullYear()}
        </p>
        <div className="flex gap-4 text-sm text-muted">
          <a href="#" className="hover:text-foreground transition-colors">
            Termos
          </a>
          <a href="#" className="hover:text-foreground transition-colors">
            Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}

// Need React for useRef in Hero
import React from "react";

/* ─── PAGE ─── */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Differentials />
        <Cta />
        <Contact />
      </main>
      <Footer />

      {/* WhatsApp FAB */}
      <a
        href={CONTACT.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <Phone className="w-6 h-6" />
      </a>
    </>
  );
}