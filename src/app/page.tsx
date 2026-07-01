"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  Menu, X, MapPin, Clock, Star, Phone, MessageCircle, Instagram,
  ArrowRight, ArrowUp, FlaskRound, Shield, Award, Sparkles, Heart,
  Activity, Zap, Leaf, Pill, CheckCircle, Quote, ChevronRight,
  Dumbbell, Sun, Moon, Droplets, TrendingUp, Thermometer,
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
  { icon: FlaskRound, title: "Manipulação Magistral", desc: "Fórmulas personalizadas com insumos certificados ANVISA e rigoroso controle de qualidade.", gradient: "from-amber-400 to-yellow-600" },
  { icon: Activity, title: "Reposição Hormonal", desc: "Hormônios bioidênticos manipulados sob medida para sua vitalidade e bem-estar.", gradient: "from-blue-400 to-blue-600" },
  { icon: Zap, title: "Alta Performance", desc: "Creatina, whey protein, pré-treino e suplementos esportivos personalizados.", gradient: "from-green-400 to-green-600" },
  { icon: Heart, title: "Vitaminas e Minerais", desc: "Complexos vitamínicos personalizados para cada fase da vida e necessidade.", gradient: "from-rose-400 to-rose-600" },
  { icon: Leaf, title: "Fitoterápicos", desc: "Medicamentos naturais manipulados com princípios ativos vegetais de alta qualidade.", gradient: "from-emerald-400 to-emerald-600" },
  { icon: Sparkles, title: "Dermocosméticos", desc: "Cremes, géis e loções manipulados sob medida para sua pele e tratamento.", gradient: "from-purple-400 to-purple-600" },
];

const testimonials = [
  { text: "Excelente atendimento! Fiz minha fórmula de reposição hormonal e o resultado superou minhas expectativas.", name: "Maria Cláudia", role: "Cliente" },
  { text: "A melhor farmácia de manipulação de Franca. Recomendo para todos meus pacientes.", name: "Dr. Ricardo Alves", role: "Médico" },
  { text: "Uso creatina e whey manipulados há 6 meses. Resultado incrível e preço muito mais justo.", name: "Lucas Oliveira", role: "Atleta" },
];

const stats = [
  { value: "8.630+", label: "Seguidores no Instagram" },
  { value: "★ 5.0", label: "Avaliação Google" },
  { value: "12+", label: "Anos de Experiência" },
  { value: "100%", label: "Manipulado" },
];

const advantages = [
  { icon: TrendingUp, title: "Pureza Máxima", desc: "Sem excipientes desnecessários. Apenas o princípio ativo que você precisa." },
  { icon: Dumbbell, title: "Performance Garantida", desc: "Dosagem exata para seu objetivo. Potência que você sente nos resultados." },
  { icon: Droplets, title: "Economia Real", desc: "Até 40% mais barato que marcas industrializadas. Qualidade sem intermediários." },
  { icon: Thermometer, title: "Sob Prescrição", desc: "Fórmulas manipuladas com responsabilidade farmacêutica e segurança." },
];

const plans = [
  { name: "START", price: "R$ 89", period: "/mês", desc: "Para quem está começando", items: ["1 fórmula por mês", "Creatina 300g", "Frete grátis Franca", "Desconto 10%"], highlight: false },
  { name: "PRO", price: "R$ 169", period: "/mês", desc: "Para atletas dedicados", items: ["2 fórmulas por mês", "Whey + Creatina", "Frete grátis Franca", "Desconto 15%", "Avaliação nutricional"], highlight: true },
  { name: "ELITE", price: "R$ 299", period: "/mês", desc: "Performance máxima", items: ["3 fórmulas por mês", "Kit completo pré/pós", "Frete grátis Franca", "Desconto 20%", "Acompanhamento mensal"], highlight: false },
];

/* ─── NAVBAR ─── */
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }} animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-navy/95 backdrop-blur-xl shadow-lg shadow-black/30 border-b border-gold/5" : "bg-gradient-to-b from-black/50 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <motion.img whileHover={{ scale: 1.05 }}
              src="/logo-sete-lirios.jpg" alt="Sete Lírios"
              className="h-10 w-10 rounded-full ring-2 ring-gold/30 group-hover:ring-gold/60 transition-all" />
            <div>
              <p className="font-bold text-base leading-tight text-white">Sete <span className="text-gold">Lírios</span></p>
              <p className="text-[10px] uppercase tracking-[0.15em] leading-tight text-white/50">Farmácia de Manipulação</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href}
                className="px-4 py-2 text-sm font-medium text-white/70 hover:text-gold transition-colors relative group">
                {l.label}
                <motion.span className="absolute bottom-0 left-4 right-4 h-[2px] bg-gold origin-left"
                  initial={{ scaleX: 0 }} whileHover={{ scaleX: 1 }} transition={{ duration: 0.2 }} />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer"
              className="btn-gold hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-xs shadow-lg shadow-gold/20">
              <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
            </motion.a>
            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 text-white/70 hover:text-gold">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy/98 backdrop-blur-xl border-t border-gold/10 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navLinks.map((l) => (
                <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 text-sm text-white/70 hover:text-gold hover:bg-gold/5 rounded-lg transition-all">
                  {l.label}
                </a>
              ))}
              <a href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 text-sm text-gold font-medium">
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
  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 1.15]);

  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-navy">
      <motion.div className="absolute inset-0" style={{ scale }}>
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/40 to-navy/80 z-10" />
        <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-60"
          poster="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=80">
          <source src="https://joy1.videvo.net/videvo_files/video/free/2019-07/large_watermarked/190618_A_10_06_01_preview.mp4" type="video/mp4" />
        </video>
      </motion.div>
      <div className="absolute inset-0 bg-grid-dark z-10" />
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px] z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-gold text-xs tracking-wider uppercase">
                <Sparkles className="w-3 h-3" /> Farmácia de Manipulação em Franca/SP
              </span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[0.95] tracking-tight">
              Sua saúde em <span className="text-gradient">movimento</span><br />
              sua fórmula <span className="text-gradient">personalizada</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.6 }}
              className="text-white/50 text-base sm:text-lg max-w-md leading-relaxed">
              Farmácia de manipulação em Franca/SP. Fórmulas personalizadas com qualidade ANVISA, 
              insumos certificados e atendimento farmacêutico humanizado.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9, duration: 0.6 }}
              className="flex flex-wrap gap-3 pt-2">
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm shadow-lg shadow-gold/25">
                <MessageCircle className="w-4 h-4" /> Fale pelo WhatsApp
              </motion.a>
              <motion.a whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                href="#servicos"
                className="btn-outline-gold inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm">
                Nossos Serviços <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1, duration: 0.6 }}
              className="flex flex-wrap gap-8 pt-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-gold font-bold text-lg">{s.value}</p>
                  <p className="text-white/40 text-xs">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.7, duration: 0.8 }}
            className="hidden lg:flex justify-center">
            <div className="relative">
              <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-80 h-80 rounded-3xl glass flex items-center justify-center shadow-2xl">
                <img src="/logo-sete-lirios.jpg" alt="Sete Lírios" className="w-52 h-52 rounded-full object-cover shadow-lg ring-4 ring-gold/20" />
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.3, duration: 0.6 }}
                className="absolute -bottom-3 -right-3 glass rounded-xl p-4 shadow-xl">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-gold fill-gold" />
                  <div>
                    <p className="font-bold text-white text-sm">Excelência ★ {CONTACT.rating}</p>
                    <p className="text-white/40 text-xs">{CONTACT.followers.toLocaleString()} seguidores</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-gold/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-gold/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ─── ADVANTAGES ─── */
function Advantages() {
  return (
    <section className="bg-navy-surface border-y border-gold/5 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {advantages.map((a, i) => (
            <motion.div key={a.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center p-5 rounded-xl card-dark">
              <a.icon className="w-8 h-8 text-gold mx-auto mb-3" />
              <p className="text-white font-bold text-sm mb-1">{a.title}</p>
              <p className="text-white/40 text-xs leading-relaxed">{a.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── STATS ─── */
function Stats() {
  return (
    <section className="bg-gradient-to-r from-gold-dark via-gold to-gold-dark py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-navy">{s.value}</p>
              <p className="text-navy/70 text-xs sm:text-sm mt-1">{s.label}</p>
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
    <section id="servicos" className="py-20 sm:py-28 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-gold text-xs tracking-[0.2em] uppercase font-semibold">Serviços</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 leading-tight">
            Tudo para sua <span className="text-gradient">saúde</span>
          </h2>
          <p className="text-white/40 mt-4 text-sm sm:text-base">
            Soluções personalizadas em manipulação farmacêutica.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => (
            <motion.div key={svc.title}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="card-dark p-6 sm:p-8 rounded-2xl">
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${svc.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                <svc.icon className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-lg font-bold text-white mb-2">{svc.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{svc.desc}</p>
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
    <section id="produtos" className="py-20 sm:py-28 bg-navy-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="flex items-end justify-between mb-10">
          <div>
            <span className="text-gold text-xs tracking-[0.2em] uppercase font-semibold">Produtos</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">Mais Procurados</h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {featuredProducts.map((p, i) => (
            <motion.div key={p.name}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06, duration: 0.4 }} whileHover={{ y: -4 }}
              className="card-dark rounded-xl p-3">
              <div className="aspect-square bg-navy/50 rounded-lg mb-3 flex items-center justify-center">
                <Pill className="w-10 h-10 text-gold/30" />
              </div>
              {p.badge && (
                <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold mb-2 ${p.badgeColor || "bg-gold/10 text-gold"}`}>
                  {p.badge}
                </span>
              )}
              <p className="text-[11px] text-white/30 mb-1">{p.category}</p>
              <h3 className="text-sm font-semibold text-white mb-1 line-clamp-2 leading-snug min-h-[2.5em]">{p.name}</h3>
              <p className="text-base font-bold text-gold">{p.price}</p>
              <p className="text-[10px] text-white/30 mb-2">{p.parcel}</p>
              <motion.a whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer"
                className="block w-full py-2 rounded-full bg-gold/10 border border-gold/15 text-gold text-[11px] font-semibold text-center hover:bg-gold/20 transition-colors">
                Solicitar
              </motion.a>
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
    <section id="categorias" className="py-20 sm:py-28 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-gold text-xs tracking-[0.2em] uppercase font-semibold">Categorias</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 leading-tight">
            Nossas <span className="text-gradient">Especialidades</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <motion.a key={cat.name}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06, duration: 0.4 }} whileHover={{ y: -4 }}
              href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer"
              className="card-dark flex flex-col items-center gap-3 p-5 rounded-xl">
              <motion.div whileHover={{ scale: 1.15 }}
                className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center">
                <FlaskRound className="w-6 h-6 text-gold" />
              </motion.div>
              <span className="text-white text-xs font-semibold text-center leading-tight">{cat.name}</span>
              <span className="text-white/30 text-[10px]">{cat.sub.length} opções</span>
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
    <section id="planos" className="py-20 sm:py-28 bg-navy-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-gold text-xs tracking-[0.2em] uppercase font-semibold">Planos</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 leading-tight">
            Assinatura de <span className="text-gradient">Suplementos</span>
          </h2>
          <p className="text-white/40 mt-4 text-sm sm:text-base">Receba seus suplementos todo mês com frete grátis em Franca.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {plans.map((plano, i) => (
            <motion.div key={plano.name}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className={`relative rounded-2xl p-6 sm:p-8 transition-all duration-300 ${
                plano.highlight
                  ? "bg-gradient-to-b from-gold/10 to-navy border border-gold/30 shadow-gold scale-105"
                  : "card-dark"
              }`}>
              {plano.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gold text-navy text-[10px] font-bold tracking-wider uppercase shadow-lg">
                  Mais Popular
                </div>
              )}
              <h3 className={`text-lg font-bold mb-1 ${plano.highlight ? "text-gold" : "text-white"}`}>{plano.name}</h3>
              <p className={`text-3xl font-bold mb-1 ${plano.highlight ? "text-white" : "text-white"}`}>
                {plano.price}<span className="text-sm text-white/40">{plano.period}</span>
              </p>
              <p className="text-xs text-white/40 mb-6">{plano.desc}</p>
              <div className="space-y-3 mb-6">
                {plano.items.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle className={`w-4 h-4 ${plano.highlight ? "text-gold" : "text-green-500"} shrink-0`} />
                    <span className={plano.highlight ? "text-white/80" : "text-white/50"}>{item}</span>
                  </div>
                ))}
              </div>
              <a href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer"
                className={plano.highlight
                  ? "btn-gold w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-semibold"
                  : "btn-outline-gold w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm"}>
                Assinar Agora <ArrowRight className="w-4 h-4" />
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
    <section id="depoimentos" className="py-20 sm:py-28 bg-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-gold text-xs tracking-[0.2em] uppercase font-semibold">Depoimentos</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 leading-tight">
            O que nossos <span className="text-gradient">clientes dizem</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }} whileHover={{ y: -4 }}
              className="card-dark p-6 sm:p-8 rounded-2xl">
              <Quote className="w-8 h-8 text-gold/30 mb-4" />
              <p className="text-white/60 text-sm leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center text-gold text-xs font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── ABOUT/CONTACT ─── */
function AboutContact() {
  return (
    <section id="contato" className="py-20 sm:py-28 bg-navy-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-gold text-xs tracking-[0.2em] uppercase font-semibold">Sobre</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-6 leading-tight">
              Excelência em <span className="text-gradient">Manipulação</span>
            </h2>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Farmácia Sete Lírios — referência em Franca/SP. Mais de 12 anos de experiência 
              em fórmulas magistrais, com rigoroso controle de qualidade, insumos certificados 
              ANVISA e atendimento farmacêutico humanizado.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Shield, text: "Insumos certificados ANVISA" },
                { icon: Award, text: "Farmácia autorizada AFE" },
                { icon: Star, text: "★ 5.0 — 8.630 seguidores" },
                { icon: CheckCircle, text: "Manipulação sob prescrição" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm">
                  <item.icon className="w-4 h-4 text-gold shrink-0" />
                  <span className="text-white/60">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="text-gold text-xs tracking-[0.2em] uppercase font-semibold">Contato</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3 mb-6 leading-tight">
              Fale conosco
            </h2>
            <div className="space-y-4">
              {[
                { icon: MapPin, label: CONTACT.address, href: CONTACT.mapsHref },
                { icon: Phone, label: `${CONTACT.phone1} | ${CONTACT.phone2}`, href: CONTACT.phoneHref },
                { icon: MessageCircle, label: `WhatsApp: ${CONTACT.whatsapp}`, href: CONTACT.whatsappLink },
                { icon: Clock, label: CONTACT.hours },
                { icon: Instagram, label: "@farmaciasetelirios", href: CONTACT.instagramHref },
              ].map((item, i) => (
                <motion.div key={item.label}
                  initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="glass rounded-xl p-4 flex items-center gap-3 hover:border-gold/20 transition-all">
                  <item.icon className="w-5 h-5 text-gold shrink-0" />
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm text-white/50 hover:text-gold transition-colors">
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-sm text-white/50">{item.label}</span>
                  )}
                </motion.div>
              ))}
            </div>
            <motion.a whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm mt-6">
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
    <footer className="bg-navy border-t border-gold/5 py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo-sete-lirios.jpg" alt="" className="w-10 h-10 rounded-full ring-2 ring-gold/30" />
              <div>
                <p className="font-bold text-white">Sete <span className="text-gold">Lírios</span></p>
                <p className="text-[10px] text-white/40 uppercase tracking-wider">Farmácia de Manipulação</p>
              </div>
            </div>
            <p className="text-white/40 text-xs leading-relaxed">Referência em manipulação farmacêutica em Franca/SP desde 2012.</p>
          </motion.div>
          {[
            { title: "Serviços", items: ["Manipulação Magistral", "Alta Performance", "Fitoterápicos", "Dermocosméticos"] },
            { title: "Categorias", items: ["Alta Performance", "Vitaminas", "Emagrecimento", "Hormônios"] },
            { title: "Contato", items: [CONTACT.address, CONTACT.phone1, CONTACT.hours, `WhatsApp: ${CONTACT.whatsapp}`] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-white text-sm mb-4">{col.title}</h4>
              <div className="space-y-2">
                {col.items.map((item) => (
                  <p key={item} className="text-white/40 text-xs hover:text-white/60 transition-colors cursor-default">{item}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="border-t border-gold/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">© {new Date().getFullYear()} Sete Lírios Farmácia de Manipulação. CNPJ: — Franca/SP</p>
          <div className="flex items-center gap-4">
            {[MessageCircle, Instagram, MapPin].map((Icon, i) => (
              <a key={i} href={[CONTACT.whatsappLink, CONTACT.instagramHref, CONTACT.mapsHref][i]}
                target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold transition-colors">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </motion.div>
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
      className="fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-gold flex items-center justify-center text-navy shadow-xl shadow-gold/30 hover:shadow-gold/50 transition-shadow"
      aria-label="WhatsApp">
      <MessageCircle className="w-6 h-6" />
    </motion.a>
  );
}

export default function Home() {
  return (
    <div className="bg-navy">
      <Navbar />
      <main>
        <Hero />
        <Advantages />
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