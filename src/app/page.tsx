"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  Menu, X, MapPin, Clock, Star, Phone, MessageCircle, Instagram,
  ArrowRight, ArrowUp, FlaskRound, Shield, Award, Sparkles, Heart,
  Activity, Zap, Leaf, Pill, CheckCircle, Quote, ChevronRight,
  Dumbbell, Droplets, TrendingUp, Thermometer,
} from "lucide-react";
import Link from "next/link";
import { CONTACT, categories, featuredProducts } from "./data";

const navLinks = [
  { label: "Início", href: "#" },
  { label: "Serviços", href: "#servicos" },
  { label: "Produtos", href: "#produtos" },
  { label: "Planos", href: "#planos" },
  { label: "Contato", href: "#contato" },
];

const services = [
  { icon: FlaskRound, title: "Manipulação Magistral", desc: "Fórmulas personalizadas com insumos certificados ANVISA.", gradient: "from-amber-400 to-yellow-600" },
  { icon: Activity, title: "Reposição Hormonal", desc: "Hormônios bioidênticos sob medida para sua vitalidade.", gradient: "from-blue-400 to-blue-600" },
  { icon: Zap, title: "Alta Performance", desc: "Creatina, whey, pré-treino personalizados.", gradient: "from-green-400 to-green-600" },
  { icon: Heart, title: "Vitaminas e Minerais", desc: "Complexos vitamínicos para cada necessidade.", gradient: "from-rose-400 to-rose-600" },
  { icon: Leaf, title: "Fitoterápicos", desc: "Medicamentos naturais com princípios ativos vegetais.", gradient: "from-emerald-400 to-emerald-600" },
  { icon: Sparkles, title: "Dermocosméticos", desc: "Cremes e loções manipulados para sua pele.", gradient: "from-purple-400 to-purple-600" },
];

const testimonials = [
  { text: "Excelente atendimento! Fiz minha fórmula de reposição hormonal e o resultado superou minhas expectativas.", name: "Maria Cláudia", role: "Cliente" },
  { text: "A melhor farmácia de manipulação de Franca. Recomendo para todos meus pacientes.", name: "Dr. Ricardo Alves", role: "Médico" },
  { text: "Uso creatina e whey manipulados há 6 meses. Resultado incrível e preço justo.", name: "Lucas Oliveira", role: "Atleta" },
];

const stats = [
  { value: "8.630+", label: "Seguidores" },
  { value: "★ 5.0", label: "Avaliação" },
  { value: "12+", label: "Anos" },
  { value: "100%", label: "Manipulado" },
];

const plans = [
  { name: "START", price: "R$ 89", period: "/mês", desc: "Para começar", items: ["1 fórmula/mês", "Creatina 300g", "Frete grátis"], highlight: false },
  { name: "PRO", price: "R$ 169", period: "/mês", desc: "Para atletas", items: ["2 fórmulas/mês", "Whey + Creatina", "Frete grátis", "Desconto 15%"], highlight: true },
  { name: "ELITE", price: "R$ 299", period: "/mês", desc: "Performance total", items: ["3 fórmulas/mês", "Kit completo", "Frete grátis", "Desconto 20%"], highlight: false },
];

/* ─── NAVBAR ─── */
function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header initial={{ y: -80 }} animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-navy/90 backdrop-blur-2xl border-b border-white/5" : "bg-transparent"
      }`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative">
              <motion.img whileHover={{ scale: 1.08 }}
                src="/logo-sete-lirios.jpg" alt="Sete Lírios"
                className="h-9 w-9 sm:h-11 sm:w-11 rounded-full ring-2 ring-gold/40" />
              <div className="absolute -inset-1 rounded-full bg-gold/20 blur-sm -z-10" />
            </div>
            <div className="hidden xs:block">
              <p className="font-bold text-sm sm:text-base leading-tight text-white">Sete <span className="text-gold">Lírios</span></p>
              <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-white/40 leading-tight">Farmácia de Manipulação</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href}
                className="text-sm text-white/60 hover:text-gold transition-colors duration-300 relative group">
                {l.label}
                <span className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer"
              className="btn-gold flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-full text-[11px] sm:text-xs shadow-lg shadow-gold/20">
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">WhatsApp</span>
            </motion.a>
            <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-white/60 hover:text-gold">
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy/95 backdrop-blur-2xl border-t border-white/5 overflow-hidden">
            <div className="px-5 py-5 space-y-1">
              {navLinks.map((l) => (
                <a key={l.label} href={l.href} onClick={() => setOpen(false)}
                  className="block px-4 py-3.5 text-sm text-white/70 hover:text-gold hover:bg-white/5 rounded-xl transition-all">
                  {l.label}
                </a>
              ))}
              <a href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3.5 text-sm text-gold font-medium">
                <MessageCircle className="w-4 h-4" /> WhatsApp: {CONTACT.whatsapp}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

/* ─── HERO ─── */
function Hero() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);

  return (
    <section className="relative h-dvh min-h-[600px] sm:min-h-[700px] flex items-center overflow-hidden bg-navy">
      <motion.div className="absolute inset-0" style={{ scale }}>
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/30 to-navy/90 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/60 to-transparent z-10" />
        <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-50"
          poster="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=80">
          <source src="https://joy1.videvo.net/videvo_files/video/free/2019-07/large_watermarked/190618_A_10_06_01_preview.mp4" type="video/mp4" />
        </video>
      </motion.div>
      <div className="absolute inset-0 bg-grid-dark opacity-30 z-10" />
      <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-gold/4 rounded-full blur-[120px] z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-16">
          <div className="flex-1 space-y-4 sm:space-y-5 pt-16 sm:pt-0">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 backdrop-blur border border-white/10 text-gold text-[10px] sm:text-xs tracking-wider uppercase font-medium">
                <Sparkles className="w-3 h-3" /> Farmácia de Manipulação
              </span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
              className="text-[clamp(2rem,7vw,4.5rem)] font-bold text-white leading-[1.0] tracking-tight">
              Sua saúde em
              <br />
              <span className="text-gradient">movimento</span>
              <br />
              sua fórmula{" "}
              <span className="text-gradient">personalizada</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              className="text-white/50 text-sm sm:text-base max-w-md leading-relaxed">
              Farmácia de manipulação em Franca/SP. Fórmulas personalizadas com qualidade ANVISA.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.65 }}
              className="flex flex-col xs:flex-row gap-3 pt-1">
              <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer"
                className="btn-gold inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm shadow-lg shadow-gold/25">
                <MessageCircle className="w-4 h-4" /> Fale pelo WhatsApp
              </motion.a>
              <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm border border-white/15 text-white/80 hover:bg-white/5 hover:border-white/30 transition-all">
                Ver Serviços <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-5 sm:gap-8 pt-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-gold font-bold text-base sm:text-lg">{s.value}</p>
                  <p className="text-white/35 text-[11px] sm:text-xs">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.8 }}
            className="hidden lg:flex items-center justify-center flex-1">
            <div className="relative">
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-[260px] h-[260px] xl:w-[300px] xl:h-[300px] rounded-full bg-white/[0.02] border border-white/[0.06] flex items-center justify-center backdrop-blur-sm">
                <div className="w-[180px] h-[180px] xl:w-[220px] xl:h-[220px] rounded-full bg-gradient-to-br from-gold/5 to-transparent flex items-center justify-center">
                  <img src="/logo-sete-lirios.jpg" alt="Sete Lírios" className="w-[150px] h-[150px] xl:w-[180px] xl:h-[180px] rounded-full object-cover shadow-2xl ring-4 ring-gold/15" />
                </div>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1, duration: 0.6 }}
                className="absolute -bottom-2 -right-2 bg-white/5 backdrop-blur-2xl rounded-2xl p-4 border border-white/10 shadow-xl min-w-[160px]">
                <div className="flex items-center gap-3">
                  <Star className="w-6 h-6 text-gold fill-gold" />
                  <div>
                    <p className="font-bold text-white text-sm">Excelência ★ {CONTACT.rating}</p>
                    <p className="text-white/35 text-[11px]">{CONTACT.followers.toLocaleString()} seguidores</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── STATS ─── */
function Stats() {
  return (
    <section className="bg-gradient-to-r from-gold-dark via-gold to-gold-dark py-8 sm:py-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="text-center py-2">
              <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-navy">{s.value}</p>
              <p className="text-navy/60 text-[11px] sm:text-xs mt-0.5">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SERVICES ─── */
function Services() {
  return (
    <section id="servicos" className="py-16 sm:py-20 lg:py-28 bg-navy">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center max-w-lg mx-auto mb-10 sm:mb-14">
          <span className="text-gold text-[10px] sm:text-xs tracking-[0.25em] uppercase font-semibold">Serviços</span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mt-3 leading-tight">
            Tudo para sua <span className="text-gradient">saúde</span>
          </h2>
          <p className="text-white/35 text-xs sm:text-sm mt-3 max-w-sm mx-auto">Soluções personalizadas em manipulação farmacêutica.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {services.map((svc, i) => (
            <motion.div key={svc.title}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="group p-5 sm:p-6 lg:p-7 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-gold/20 hover:bg-white/[0.05] transition-all duration-300">
              <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br ${svc.gradient} flex items-center justify-center mb-3 sm:mb-4 shadow-lg`}>
                <svc.icon className="w-5 h-5 sm:w-5.5 sm:h-5.5 text-white" />
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white mb-1.5">{svc.title}</h3>
              <p className="text-white/40 text-xs sm:text-sm leading-relaxed">{svc.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PRODUCTS ─── */
function Products() {
  return (
    <section id="produtos" className="py-16 sm:py-20 lg:py-28 bg-navy-surface">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="mb-8 sm:mb-10">
          <span className="text-gold text-[10px] sm:text-xs tracking-[0.25em] uppercase font-semibold">Produtos</span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-2">Mais Procurados</h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {featuredProducts.map((p, i) => (
            <motion.div key={p.name}
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.05 }} whileHover={{ y: -3 }}
              className="p-3 sm:p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-gold/15 transition-all duration-300">
              <div className="aspect-square bg-white/[0.02] rounded-lg mb-2.5 flex items-center justify-center">
                <Pill className="w-8 h-8 sm:w-10 sm:h-10 text-gold/25" />
              </div>
              {p.badge && (
                <span className={`inline-block px-1.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-semibold mb-1.5 ${p.badgeColor || "bg-gold/10 text-gold"}`}>
                  {p.badge}
                </span>
              )}
              <p className="text-[10px] sm:text-[11px] text-white/25 mb-0.5">{p.category}</p>
              <h3 className="text-xs sm:text-sm font-semibold text-white mb-1 leading-snug line-clamp-2">{p.name}</h3>
              <p className="text-sm sm:text-base font-bold text-gold">{p.price}</p>
              <p className="text-[9px] sm:text-[10px] text-white/25 mb-2">{p.parcel}</p>
              <a href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer"
                className="block w-full py-1.5 sm:py-2 rounded-full bg-gold/10 border border-gold/12 text-gold text-[10px] sm:text-[11px] font-semibold text-center hover:bg-gold/20 transition-colors">
                Solicitar
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CATEGORIES ─── */
function Categories() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-navy">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center max-w-lg mx-auto mb-10 sm:mb-14">
          <span className="text-gold text-[10px] sm:text-xs tracking-[0.25em] uppercase font-semibold">Categorias</span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mt-3 leading-tight">
            Nossas <span className="text-gradient">Especialidades</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {categories.map((cat, i) => (
            <motion.a key={cat.name}
              initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.05 }} whileHover={{ y: -3 }}
              href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer"
              className="flex flex-col items-center gap-2.5 sm:gap-3 p-4 sm:p-5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-gold/15 hover:bg-white/[0.05] transition-all duration-300">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gold/8 flex items-center justify-center">
                <FlaskRound className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
              </div>
              <span className="text-white text-[11px] sm:text-xs font-semibold text-center leading-tight">{cat.name}</span>
              <span className="text-white/20 text-[9px] sm:text-[10px]">{cat.sub.length} fórmulas</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PLANS ─── */
function Plans() {
  return (
    <section id="planos" className="py-16 sm:py-20 lg:py-28 bg-navy-surface">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center max-w-lg mx-auto mb-10 sm:mb-14">
          <span className="text-gold text-[10px] sm:text-xs tracking-[0.25em] uppercase font-semibold">Planos</span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mt-3 leading-tight">
            Assinatura de <span className="text-gradient">Suplementos</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
          {plans.map((plano, i) => (
            <motion.div key={plano.name}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`relative rounded-2xl p-6 sm:p-7 transition-all duration-300 ${
                plano.highlight
                  ? "bg-gradient-to-b from-gold/8 to-navy border border-gold/20 shadow-lg shadow-gold/5 sm:scale-105"
                  : "bg-white/[0.03] border border-white/[0.06] hover:border-gold/15"
              }`}>
              {plano.highlight && (
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-gold text-navy text-[9px] font-bold tracking-wider uppercase">
                  Popular
                </div>
              )}
              <h3 className={`text-base sm:text-lg font-bold mb-0.5 ${plano.highlight ? "text-gold" : "text-white"}`}>{plano.name}</h3>
              <p className={`text-2xl sm:text-3xl font-bold mb-0.5 ${plano.highlight ? "text-white" : "text-white"}`}>
                {plano.price}<span className="text-xs text-white/30">{plano.period}</span>
              </p>
              <p className="text-[11px] text-white/30 mb-4 sm:mb-5">{plano.desc}</p>
              <div className="space-y-2 sm:space-y-2.5 mb-5 sm:mb-6">
                {plano.items.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs sm:text-sm">
                    <CheckCircle className={`w-3.5 h-3.5 ${plano.highlight ? "text-gold" : "text-green-500"} shrink-0`} />
                    <span className={plano.highlight ? "text-white/70" : "text-white/40"}>{item}</span>
                  </div>
                ))}
              </div>
              <a href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer"
                className={plano.highlight
                  ? "btn-gold w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold"
                  : "w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm border border-white/15 text-white/60 hover:bg-white/5 hover:border-white/30 transition-all"}>
                Assinar <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ─── */
function Testimonials() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-navy">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center max-w-lg mx-auto mb-10 sm:mb-14">
          <span className="text-gold text-[10px] sm:text-xs tracking-[0.25em] uppercase font-semibold">Depoimentos</span>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-white mt-3 leading-tight">
            O que nossos <span className="text-gradient">clientes dizem</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-3 sm:gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.08 }} whileHover={{ y: -3 }}
              className="p-5 sm:p-7 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-gold/12 transition-all duration-300">
              <Quote className="w-6 h-6 text-gold/20 mb-3 sm:mb-4" />
              <p className="text-white/55 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6 italic">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center text-gold text-[10px] sm:text-xs font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-semibold text-xs sm:text-sm">{t.name}</p>
                  <p className="text-white/30 text-[10px] sm:text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── ABOUT ─── */
function AboutContact() {
  return (
    <section id="contato" className="py-16 sm:py-20 lg:py-28 bg-navy-surface">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          <motion.div initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-gold text-[10px] sm:text-xs tracking-[0.25em] uppercase font-semibold">Sobre</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-3 mb-4 sm:mb-6 leading-tight">
              Excelência em <span className="text-gradient">Manipulação</span>
            </h2>
            <p className="text-white/45 text-xs sm:text-sm leading-relaxed mb-5 sm:mb-6">
              Farmácia Sete Lírios — referência em Franca/SP. Mais de 12 anos de experiência 
              em fórmulas magistrais, com controle de qualidade ANVISA e atendimento farmacêutico humanizado.
            </p>
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {[
                { icon: Shield, text: "Insumos ANVISA" },
                { icon: Award, text: "Farmácia autorizada" },
                { icon: Star, text: "★ 5.0 — 8.630 seguidores" },
                { icon: CheckCircle, text: "Sob prescrição" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-xs sm:text-sm">
                  <item.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gold shrink-0" />
                  <span className="text-white/50">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-gold text-[10px] sm:text-xs tracking-[0.25em] uppercase font-semibold">Contato</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mt-3 mb-4 sm:mb-6 leading-tight">
              Fale conosco
            </h2>
            <div className="space-y-2.5 sm:space-y-3">
              {[
                { icon: MapPin, label: CONTACT.address, href: CONTACT.mapsHref },
                { icon: Phone, label: `${CONTACT.phone1} | ${CONTACT.phone2}`, href: CONTACT.phoneHref },
                { icon: MessageCircle, label: `WhatsApp: ${CONTACT.whatsapp}`, href: CONTACT.whatsappLink },
                { icon: Clock, label: CONTACT.hours },
                { icon: Instagram, label: "@farmaciasetelirios", href: CONTACT.instagramHref },
              ].map((item, i) => (
                <motion.div key={item.label}
                  initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                  className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-gold/15 transition-all">
                  <item.icon className="w-4 h-4 sm:w-5 sm:h-5 text-gold shrink-0" />
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm text-white/45 hover:text-gold transition-colors">
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-xs sm:text-sm text-white/45">{item.label}</span>
                  )}
                </motion.div>
              ))}
            </div>
            <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm mt-5 sm:mt-6 shadow-lg shadow-gold/20">
              <MessageCircle className="w-4 h-4" /> Fale pelo WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer className="bg-navy border-t border-white/[0.04] py-10 sm:py-14">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-10">
          <div className="col-span-2 sm:col-span-1">
            <div className="flex items-center gap-2.5 mb-3">
              <img src="/logo-sete-lirios.jpg" alt="" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full ring-2 ring-gold/20" />
              <div>
                <p className="font-bold text-sm sm:text-base text-white">Sete <span className="text-gold">Lírios</span></p>
                <p className="text-[9px] sm:text-[10px] text-white/30 uppercase tracking-wider">Farmácia de Manipulação</p>
              </div>
            </div>
            <p className="text-white/30 text-[11px] sm:text-xs leading-relaxed">Manipulação farmacêutica em Franca/SP desde 2012.</p>
          </div>
          {[
            { title: "Serviços", items: ["Manipulação", "Alta Performance", "Fitoterápicos"] },
            { title: "Categorias", items: ["Vitaminas", "Hormônios", "Emagrecimento"] },
            { title: "Contato", items: [CONTACT.address.split("—")[0].trim(), CONTACT.phone1] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-white text-xs sm:text-sm mb-3 sm:mb-4">{col.title}</h4>
              <div className="space-y-1.5">
                {col.items.map((item) => (
                  <p key={item} className="text-white/30 text-[11px] sm:text-xs hover:text-white/50 transition-colors cursor-default">{item}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-white/[0.04] pt-5 sm:pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-white/20 text-[10px] sm:text-xs text-center sm:text-left">© {new Date().getFullYear()} Sete Lírios Farmácia de Manipulação</p>
          <div className="flex items-center gap-4">
            {[MessageCircle, Instagram, MapPin].map((Icon, i) => (
              <a key={i} href={[CONTACT.whatsappLink, CONTACT.instagramHref, CONTACT.mapsHref][i]}
                target="_blank" rel="noopener noreferrer" className="text-white/25 hover:text-gold transition-colors">
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── WHATSAPP FAB ─── */
function WhatsAppFab() {
  return (
    <motion.a initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.5, type: "spring" }}
      whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
      href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer"
      className="fixed bottom-4 sm:bottom-5 right-4 sm:right-5 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gold flex items-center justify-center text-navy shadow-xl shadow-gold/30"
      aria-label="WhatsApp">
      <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
    </motion.a>
  );
}

export default function Home() {
  return (
    <div className="bg-navy antialiased">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Products />
        <Categories />
        <Plans />
        <Testimonials />
        <AboutContact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}