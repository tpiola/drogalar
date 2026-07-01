"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  FlaskRound, Shield, Star, Heart, Phone, MapPin, Clock,
  ChevronRight, Menu, X, Sparkles, Award, Pill, TestTube,
  ChevronDown, ChevronUp, Quote, CheckCircle, ArrowRight,
  Instagram, MessageCircle, Mail, Search,
} from "lucide-react";
import Link from "next/link";
import { CONTACT } from "./data";

/* ─── NAVBAR ─── */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((v) => setScrolled(v > 30));
  }, [scrollY]);

  const links = [
    { label: "Início", href: "#hero" },
    { label: "Serviços", href: "#servicos" },
    { label: "Como Funciona", href: "#como-funciona" },
    { label: "Diferenciais", href: "#diferenciais" },
    { label: "FAQ", href: "#faq" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="container-drop flex items-center justify-between h-16 md:h-20">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <img
            src="/logo-sete-lirios.jpg"
            alt="Sete Lírios"
            className="h-9 w-9 md:h-10 md:w-10 rounded-full object-cover ring-2 ring-brand/10"
          />
          <div className="flex flex-col">
            <span className="font-display font-bold tracking-tight leading-none text-sm md:text-base">
              Sete <span className="text-brand">Lírios</span>
            </span>
            <span className="text-[9px] md:text-[10px] text-muted uppercase tracking-wider leading-none">
              Farmácia de Manipulação
            </span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm text-muted hover:text-foreground transition-colors rounded-lg hover:bg-brand/5"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={CONTACT.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 btn-green text-sm"
          >
            <MessageCircle className="w-4 h-4" /> WhatsApp
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2.5 rounded-lg hover:bg-brand/5 transition-colors"
          aria-label="Menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden border-t border-border bg-white shadow-xl"
          >
            <div className="container-drop py-4 flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-muted hover:text-foreground rounded-lg hover:bg-brand/5 transition-colors"
                >
                  {l.label}
                </Link>
              ))}
              <a
                href={CONTACT.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-green justify-center mt-2"
                onClick={() => setOpen(false)}
              >
                <MessageCircle className="w-4 h-4" /> Fale pelo WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ─── HERO ─── */
function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);

  return (
    <section ref={ref} id="hero" className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-white via-[#f0f5f0] to-white">
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(39,174,96,0.06),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(192,57,43,0.04),transparent_50%)]" />
      </motion.div>
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
        backgroundSize: "40px 40px"
      }} />

      <div className="container-drop relative z-10 py-28 md:py-36">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/5 border border-brand/10 text-sm text-brand font-medium mb-6"
            >
              <Sparkles className="w-4 h-4" />
              ★ {CONTACT.rating} — {CONTACT.followers.toLocaleString()} seguidores
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[0.95] mb-5"
            >
              Sua saúde é{" "}
              <span className="text-gradient">única</span>
              <br />
              seu tratamento{" "}
              <span className="text-gradient-green">personalizado</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-base md:text-lg text-muted max-w-xl mb-8 leading-relaxed"
            >
              Fórmulas manipuladas com excelência farmacêutica. 
              Cada prescrição é única — e seu tratamento também deve ser.
              <span className="block mt-2 text-sm text-muted/70">CRF/SP • Farmácia de Manipulação • Franca/SP</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              <a href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-green">
                <MessageCircle className="w-4 h-4" /> Fale pelo WhatsApp
              </a>
              <a href="#como-funciona" className="btn-outline">
                Como funciona <ChevronRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-72 rounded-full bg-gradient-to-br from-brand/5 via-green/5 to-brand/10 flex items-center justify-center">
                <img
                  src="/logo-sete-lirios.jpg"
                  alt="Sete Lírios"
                  className="w-48 h-48 rounded-full object-cover shadow-2xl ring-4 ring-white"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-lg p-4 border border-brand/10">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <span className="font-bold text-lg">{CONTACT.rating}</span>
                  <span className="text-muted text-sm">({CONTACT.reviews})</span>
                </div>
                <p className="text-xs text-muted mt-1">Avaliação no Google</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── TRUST BAR ─── */
function TrustBar() {
  const stats = [
    { value: "8.630+", label: "Seguidores no Instagram" },
    { value: "★ 5.0", label: "Avaliação Google" },
    { value: "39+", label: "Posts no Instagram" },
    { value: "12+", label: "Anos de experiência" },
  ];
  return (
    <section className="py-8 md:py-10 border-y border-border bg-white/50">
      <div className="container-drop">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-display text-2xl md:text-3xl font-bold text-foreground">{s.value}</p>
              <p className="text-xs md:text-sm text-muted mt-1">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SERVICES ─── */
const services = [
  {
    icon: FlaskRound,
    title: "Manipulação Magistral",
    desc: "Fórmulas personalizadas com rigoroso controle de qualidade e insumos certificados pela ANVISA.",
    gradient: "from-brand/5 to-brand/10",
  },
  {
    icon: Pill,
    title: "Alta Performance",
    desc: "Suplementos e fórmulas esportivas manipuladas sob medida para seus objetivos e necessidades.",
    gradient: "from-green/5 to-green/10",
  },
  {
    icon: TestTube,
    title: "Fórmulas Alopáticas",
    desc: "Medicamentos manipulados conforme prescrição médica, com concentração e forma farmacêutica ideais.",
    gradient: "from-brand/5 to-brand/10",
  },
  {
    icon: Heart,
    title: "Fitoterápicos",
    desc: "Medicamentos à base de plantas com qualidade farmacêutica, manipulados com rigor técnico.",
    gradient: "from-green/5 to-green/10",
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
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/5 border border-brand/10 text-sm text-brand font-medium mb-4">
            <Award className="w-4 h-4" /> Nossos Serviços
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Excelência em{" "}
            <span className="text-gradient">cada fórmula</span>
          </h2>
          <p className="text-muted text-base md:text-lg max-w-2xl mx-auto">
            Da manipulação magistral aos fitoterápicos, cada serviço é pensado 
            para oferecer o melhor cuidado farmacêutico personalizado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-hover group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <s.icon className="w-6 h-6 text-brand" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── HOW IT WORKS ─── */
const steps = [
  { num: "01", title: "Consulta Médica", desc: "Seu médico prescreve a fórmula personalizada para sua necessidade específica." },
  { num: "02", title: "Apresente a Prescrição", desc: "Traga ou envie a receita para nossa equipe farmacêutica avaliar." },
  { num: "03", title: "Manipulação", desc: "Preparamos sua fórmula com rigor técnico, insumos certificados e controle de qualidade." },
  { num: "04", title: "Pronto para Retirar", desc: "Avise quando estiver pronto e venha buscar ou solicite entrega." },
];

function HowItWorks() {
  return (
    <section id="como-funciona" className="section-pad bg-white">
      <div className="container-drop">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green/5 border border-green/10 text-sm text-green font-medium mb-4">
            <CheckCircle className="w-4 h-4" /> Como Funciona
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Da prescrição à{" "}
            <span className="text-gradient-green">fórmula pronta</span>
          </h2>
          <p className="text-muted text-base md:text-lg max-w-2xl mx-auto">
            Processo simples e transparente para você cuidar da sua saúde 
            com o tratamento ideal.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-0.5 bg-border" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative text-center lg:text-left"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand/10 to-brand/5 flex items-center justify-center mx-auto lg:mx-0 mb-4">
                  <span className="font-display text-2xl font-bold text-brand">{s.num}</span>
                </div>
                <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
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
    desc: "Manipulação com padrão de qualidade industrial, seguindo rigorosamente as Boas Práticas de Manipulação da ANVISA.",
  },
  {
    icon: Shield,
    title: "Insumos Certificados",
    desc: "Matérias-primas de fornecedores certificados, com rastreabilidade total e laudos de qualidade.",
  },
  {
    icon: Sparkles,
    title: "Fórmulas Exclusivas",
    desc: "Cada prescrição é única. Adaptamos veículo, concentração e forma farmacêutica para você.",
  },
  {
    icon: Star,
    title: "Atendimento Humanizado",
    desc: "Equipe farmacêutica dedicada a orientar seu tratamento com clareza, respeito e atenção personalizada.",
  },
  {
    icon: Instagram,
    title: "Presença Digital",
    desc: `${CONTACT.followers.toLocaleString()} seguidores no Instagram. Conteúdo educativo sobre saúde e manipulação.`,
    href: CONTACT.instagramHref,
  },
  {
    icon: MapPin,
    title: "Localização Estratégica",
    desc: "Av. Brasil, 815 — Vila Aparecida, Franca/SP. Fácil acesso e estacionamento.",
    href: CONTACT.mapsHref,
  },
];

function Differentials() {
  return (
    <section id="diferenciais" className="section-pad">
      <div className="container-drop">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/5 border border-brand/10 text-sm text-brand font-medium mb-4">
            <Shield className="w-4 h-4" /> Por que escolher a Sete Lírios
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Seu tratamento em{" "}
            <span className="text-gradient">boas mãos</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {diffs.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card-hover flex gap-4 items-start"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/10 to-gold/5 flex items-center justify-center shrink-0">
                <d.icon className="w-6 h-6 text-gold" />
              </div>
              <div>
                {d.href ? (
                  <a href={d.href} target="_blank" rel="noopener noreferrer" className="font-display font-semibold mb-1 hover:text-brand transition-colors inline-flex items-center gap-1">
                    {d.title} <ArrowRight className="w-3 h-3" />
                  </a>
                ) : (
                  <h3 className="font-display font-semibold mb-1">{d.title}</h3>
                )}
                <p className="text-muted text-sm leading-relaxed">{d.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ ─── */
const faqs = [
  { q: "O que é farmácia de manipulação?", a: "Farmácia de manipulação é um estabelecimento que prepara medicamentos personalizados conforme prescrição médica. Diferente dos medicamentos industrializados, cada fórmula é feita sob medida para atender às necessidades específicas de cada paciente." },
  { q: "Preciso de receita médica?", a: "Sim, a maioria dos medicamentos manipulados exige prescrição médica. Basta trazer ou enviar a receita do seu médico que nossa equipe farmacêutica prepara a fórmula com rigor técnico." },
  { q: "A manipulação é segura?", a: "Sim! Seguimos rigorosamente as Boas Práticas de Manipulação estabelecidas pela ANVISA. Todos os insumos são certificados e cada lote passa por controle de qualidade." },
  { q: "Quanto tempo leva para ficar pronto?", a: "O prazo varia conforme a complexidade da fórmula, mas geralmente fica pronto em 24 a 48 horas úteis. Consulte nossa equipe para prazos específicos." },
  { q: "Vocês entregam em domicílio?", a: "Sim, oferecemos entrega para Franca e região. Consulte nossa equipe sobre taxas e prazos de entrega." },
  { q: "Aceitam convênios ou planos de saúde?", a: "Consulte nossa equipe para verificar a cobertura do seu plano de saúde para medicamentos manipulados." },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-pad bg-white">
      <div className="container-drop max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/5 border border-brand/10 text-sm text-brand font-medium mb-4">
            <MessageCircle className="w-4 h-4" /> Perguntas Frequentes
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
            Tire suas{" "}
            <span className="text-gradient">dúvidas</span>
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="border border-border rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-4 md:p-5 text-left hover:bg-brand/[0.02] transition-colors"
              >
                <span className="font-medium text-sm md:text-base pr-4">{faq.q}</span>
                {openIndex === i ? (
                  <ChevronUp className="w-4 h-4 text-brand shrink-0" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-muted shrink-0" />
                )}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-4 md:px-5 pb-4 md:pb-5 text-sm text-muted leading-relaxed border-t border-border pt-4">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
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
          className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a2520] via-[#2c3e50] to-[#1a2520] p-10 md:p-16 text-center"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(39,174,96,0.08),transparent_60%)]" />
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
              Comece seu tratamento{" "}
              <span className="text-gradient-green">personalizado</span>
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto mb-8">
              Agende uma consulta farmacêutica e descubra como a manipulação 
              pode transformar sua saúde.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-green text-lg px-8 py-4">
                <MessageCircle className="w-5 h-5" /> Fale pelo WhatsApp
              </a>
              <a href={CONTACT.mapsHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-4 border border-white/20 text-white rounded-xl hover:bg-white/5 transition-colors font-medium">
                <MapPin className="w-5 h-5" /> Visite a Farmácia
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── CONTACT ─── */
const contactItems = [
  { icon: Phone, label: "Telefone", value: CONTACT.phone1, href: CONTACT.phoneHref },
  { icon: MessageCircle, label: "WhatsApp", value: CONTACT.whatsapp, href: CONTACT.whatsappLink, highlight: true },
  { icon: Instagram, label: "Instagram", value: CONTACT.instagram, href: CONTACT.instagramHref },
  { icon: MapPin, label: "Endereço", value: CONTACT.address, href: CONTACT.mapsHref },
  { icon: Clock, label: "Horário", value: CONTACT.hours },
  { icon: Mail, label: "E-mail", value: "contato@setelirios.com.br", href: "mailto:contato@setelirios.com.br" },
];

function Contact() {
  return (
    <section id="contato" className="section-pad">
      <div className="container-drop">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/5 border border-brand/10 text-sm text-brand font-medium mb-4">
            <Phone className="w-4 h-4" /> Contato
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
            Fale com a{" "}
            <span className="text-gradient">Sete Lírios</span>
          </h2>
          <p className="text-muted text-base md:text-lg max-w-xl mx-auto">
            Estamos prontos para atender você pessoalmente ou online.
          </p>
        </motion.div>

        {/* Google Maps */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 rounded-xl overflow-hidden border border-border shadow-sm h-48 md:h-64"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.5!2d-47.4008!3d-20.5386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDMyJzE4LjkiUyA0N8KwMjQnMDIuOSJX!5e0!3m2!1spt-BR!2sbr!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização Sete Lírios"
          />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto">
          {contactItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className={`card-hover flex items-center gap-3 p-4 ${
                item.highlight ? "ring-1 ring-green/20 bg-green/[0.02]" : ""
              }`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                item.highlight ? "bg-green/10 text-green" : "bg-brand/10 text-brand"
              }`}>
                <item.icon className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] text-muted uppercase tracking-wider">{item.label}</p>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer"
                    className="text-sm font-medium hover:text-brand transition-colors block truncate"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-sm font-medium">{item.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer className="border-t border-border bg-white py-10">
      <div className="container-drop">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <img src="/logo-sete-lirios.jpg" alt="Sete Lírios" className="h-10 w-10 rounded-full object-cover" />
              <div>
                <p className="font-display font-bold">Sete <span className="text-brand">Lírios</span></p>
                <p className="text-[10px] text-muted uppercase tracking-wider">Farmácia de Manipulação</p>
              </div>
            </div>
            <p className="text-sm text-muted leading-relaxed">
              Farmácia de manipulação em Franca/SP com mais de 12 anos de experiência. 
              Fórmulas personalizadas com excelência farmacêutica.
            </p>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-3">Links Rápidos</h4>
            <div className="flex flex-col gap-2 text-sm text-muted">
              <a href="#servicos" className="hover:text-brand transition-colors">Serviços</a>
              <a href="#como-funciona" className="hover:text-brand transition-colors">Como Funciona</a>
              <a href="#diferenciais" className="hover:text-brand transition-colors">Diferenciais</a>
              <a href="#faq" className="hover:text-brand transition-colors">FAQ</a>
              <a href="#contato" className="hover:text-brand transition-colors">Contato</a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-3">Contato</h4>
            <div className="flex flex-col gap-2 text-sm text-muted">
              <a href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-green transition-colors inline-flex items-center gap-1">
                <MessageCircle className="w-3.5 h-3.5" /> WhatsApp: {CONTACT.whatsapp}
              </a>
              <a href={CONTACT.instagramHref} target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors inline-flex items-center gap-1">
                <Instagram className="w-3.5 h-3.5" /> @farmaciasetelirios
              </a>
              <span className="inline-flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 shrink-0" /> {CONTACT.address}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 shrink-0" /> {CONTACT.hours}
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            Farmácia de Manipulação — Franca/SP © {new Date().getFullYear()} Sete Lírios. Todos os direitos reservados.
          </p>
          <div className="flex gap-4 text-xs text-muted">
            <a href="https://wa.me/5516992440470" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">Precisa de ajuda? Fale conosco</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── PAGE ─── */
export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <HowItWorks />
        <Differentials />
        <FAQ />
        <Cta />
        <Contact />
      </main>
      <Footer />

      {/* WhatsApp FAB */}
      <a
        href={CONTACT.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-40 w-14 h-14 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform animate-pulse-subtle"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Instagram FAB */}
      <a
        href={CONTACT.instagramHref}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-5 z-40 w-11 h-11 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
        aria-label="Instagram"
      >
        <Instagram className="w-5 h-5" />
      </a>
    </>
  );
}