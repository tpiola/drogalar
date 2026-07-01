"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import {
  Menu, X, MapPin, Clock, Star, Phone, MessageCircle, Instagram,
  ArrowRight, FlaskRound, Shield, Award, Sparkles, Heart, Activity, Zap,
  Leaf, Pill, CheckCircle, Quote, ChevronRight, Play,
} from "lucide-react";
import Link from "next/link";
import { CONTACT, categories, featuredProducts } from "./data";

const navLinks = [
  { label: "Início", href: "#" },
  { label: "Serviços", href: "#servicos" },
  { label: "Produtos", href: "#produtos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

const services = [
  { icon: FlaskRound, title: "Manipulação Magistral", desc: "Fórmulas personalizadas com rigoroso controle de qualidade ANVISA.", color: "from-green-400 to-green-600" },
  { icon: Activity, title: "Reposição Hormonal", desc: "Hormônios bioidênticos manipulados sob medida para sua vitalidade.", color: "from-blue-400 to-blue-600" },
  { icon: Zap, title: "Alta Performance", desc: "Creatina, whey, pré-treino — suplementos para seu melhor desempenho.", color: "from-amber-400 to-amber-600" },
  { icon: Heart, title: "Bem-Estar e Vitaminas", desc: "Vitaminas, minerais e nutracêuticos para sua saúde diária.", color: "from-rose-400 to-rose-600" },
  { icon: Leaf, title: "Fitoterápicos", desc: "Medicamentos naturais com princípios ativos vegetais de alta qualidade.", color: "from-emerald-400 to-emerald-600" },
  { icon: Sparkles, title: "Dermocosméticos", desc: "Cremes, géis e loções manipulados para sua pele e tratamento.", color: "from-purple-400 to-purple-600" },
];

const testimonials = [
  { text: "A melhor farmácia de manipulação de Franca. Atendimento excelente e produtos de alta qualidade.", name: "Maria Cláudia", role: "Cliente" },
  { text: "Fórmulas precisas e entrega rápida. Recomendo para todos meus pacientes.", name: "Dr. Ricardo Alves", role: "Médico | CRM/SP" },
  { text: "Uso creatina e whey manipulados há meses. Resultado incrível e preço justo.", name: "Lucas Oliveira", role: "Atleta" },
];

const stats = [
  { value: "8.630+", label: "Seguidores", icon: Star },
  { value: "★ 5.0", label: "Avaliação", icon: Star },
  { value: "12+", label: "Anos", icon: Clock },
  { value: "100%", label: "Manipulado", icon: FlaskRound },
];

const SectionTitle = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
    className={className}
  >
    {children}
  </motion.div>
);

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
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-white/95 backdrop-blur-xl shadow-lg shadow-black/5" : "bg-gradient-to-b from-black/30 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src="/logo-sete-lirios.jpg"
              alt="Sete Lírios"
              className="h-10 w-10 rounded-full ring-2 ring-green/30 group-hover:ring-green/60 transition-all"
            />
            <div>
              <motion.p className="font-bold text-base leading-tight" style={{ color: scrolled ? "#1a1a2e" : "white" }}>
                Sete <span className="text-green-500">Lírios</span>
              </motion.p>
              <p className="text-[10px] uppercase tracking-[0.15em] leading-tight" style={{ color: scrolled ? "#9ca3af" : "rgba(255,255,255,0.7)" }}>
                Farmácia de Manipulação
              </p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href}
                className="px-4 py-2 text-sm font-medium transition-colors relative group"
                style={{ color: scrolled ? "#4b5563" : "rgba(255,255,255,0.9)" }}>
                {l.label}
                <motion.span
                  className="absolute bottom-0 left-4 right-4 h-[2px] bg-green-500 origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={CONTACT.whatsappLink}
              target="_blank" rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-green-500 text-white text-xs font-medium hover:bg-green-600 transition-all shadow-lg shadow-green-500/25"
            >
              <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
            </motion.a>
            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2" style={{ color: scrolled ? "#1a1a2e" : "white" }}>
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/98 backdrop-blur-md border-t border-gray-100 shadow-lg overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
              {navLinks.map((l) => (
                <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
                  className="block px-4 py-3 text-sm text-gray-600 hover:text-green-500 hover:bg-green-50 rounded-lg transition-all">
                  {l.label}
                </a>
              ))}
              <a href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-3 text-sm text-green-600 font-medium">
                <MessageCircle className="w-4 h-4" /> WhatsApp: {CONTACT.whatsapp}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

/* ─── HERO WITH VIDEO ─── */
function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.6]);

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Video Background */}
      <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60 z-10" />
        {/* Placeholder gradient - replace video src with real MP4 */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1920&q=80"
        >
          <source src="https://joy1.videvo.net/videvo_files/video/free/2019-07/large_watermarked/190618_A_10_06_01_preview.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-medium">
                <Sparkles className="w-3 h-3 text-green-400" /> Farmácia de Manipulação em Franca/SP
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[0.95] tracking-tight"
            >
              Sua saúde em{" "}
              <span className="text-green-400">movimento</span>
              <br />
              sua fórmula{" "}
              <span className="text-green-400">personalizada</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-white/60 text-base sm:text-lg max-w-md leading-relaxed"
            >
              Farmácia de manipulação em Franca/SP. Fórmulas personalizadas para sua saúde, 
              performance e bem-estar — com qualidade ANVISA e atendimento humanizado.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="flex flex-wrap gap-3 pt-2"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={CONTACT.whatsappLink}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-500 text-white text-sm font-semibold hover:bg-green-600 transition-all shadow-lg shadow-green-500/30"
              >
                <MessageCircle className="w-4 h-4" /> Fale pelo WhatsApp
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#servicos"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-all"
              >
                Ver Serviços <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex flex-wrap gap-6 pt-4"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-green-400 font-bold text-lg">{s.value}</p>
                  <p className="text-white/50 text-xs">{s.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="hidden lg:flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="w-72 h-72 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center shadow-2xl"
              >
                <img src="/logo-sete-lirios.jpg" alt="Sete Lírios" className="w-48 h-48 rounded-full object-cover shadow-lg ring-4 ring-white/20" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4, duration: 0.6 }}
                className="absolute -bottom-2 -right-2 bg-white/90 backdrop-blur-sm rounded-xl p-4 shadow-xl border border-white/20"
              >
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  <div>
                    <p className="font-bold text-gray-900 text-sm">Excelência {CONTACT.rating}</p>
                    <p className="text-gray-500 text-xs">{CONTACT.followers.toLocaleString()} seguidores</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ─── STATS ─── */
function Stats() {
  return (
    <section className="bg-gradient-to-r from-green-600 to-green-500 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <p className="text-2xl sm:text-3xl font-bold text-yellow-300">{s.value}</p>
              <p className="text-white/80 text-xs sm:text-sm mt-1">{s.label}</p>
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
    <section id="servicos" className="py-20 sm:py-28 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-green-500 text-xs tracking-[0.2em] uppercase font-semibold">Serviços</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 leading-tight">
            Tudo para sua <span className="text-green-500">saúde</span>
          </h2>
          <p className="text-gray-500 mt-4 text-sm sm:text-base">
            Soluções personalizadas em manipulação farmacêutica para sua vitalidade.
          </p>
        </SectionTitle>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group p-6 sm:p-8 rounded-2xl bg-white border border-gray-100 hover:border-green-100 hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${svc.color} bg-opacity-10 flex items-center justify-center mb-4`}
              >
                <svc.icon className="w-6 h-6 text-white" />
              </motion.div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{svc.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{svc.desc}</p>
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
    <section id="produtos" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle className="flex items-end justify-between mb-10">
          <div>
            <span className="text-green-500 text-xs tracking-[0.2em] uppercase font-semibold">Produtos</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">Mais Procurados</h2>
          </div>
        </SectionTitle>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {featuredProducts.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              whileHover={{ y: -4 }}
              className="group bg-white rounded-xl border border-gray-100 p-3 hover:border-green-100 hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-square bg-gradient-to-br from-green-50 to-gray-50 rounded-lg mb-3 flex items-center justify-center">
                <motion.div whileHover={{ scale: 1.15, rotate: 10 }}>
                  <Pill className="w-10 h-10 text-green-300" />
                </motion.div>
              </div>
              {p.badge && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold mb-2 ${p.badgeColor || "bg-green-50 text-green-600"}`}
                >
                  {p.badge}
                </motion.span>
              )}
              <p className="text-[11px] text-gray-400 mb-1">{p.category}</p>
              <h3 className="text-sm font-semibold text-gray-900 mb-1 line-clamp-2 leading-snug min-h-[2.5em]">{p.name}</h3>
              <p className="text-base font-bold text-green-600">{p.price}</p>
              <p className="text-[10px] text-gray-400 mb-2">{p.parcel}</p>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={CONTACT.whatsappLink}
                target="_blank" rel="noopener noreferrer"
                className="block w-full py-2 rounded-full bg-gray-900 text-white text-[11px] font-semibold text-center hover:bg-gray-800 transition-colors"
              >
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
    <section className="py-20 sm:py-28 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-green-500 text-xs tracking-[0.2em] uppercase font-semibold">Categorias</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 leading-tight">
            Nossas <span className="text-green-500">Especialidades</span>
          </h2>
        </SectionTitle>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              whileHover={{ y: -4 }}
              href={CONTACT.whatsappLink}
              target="_blank" rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 p-5 rounded-xl bg-white border border-gray-100 hover:border-green-100 hover:shadow-md transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.15 }}
                className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center group-hover:bg-green-100 transition-colors"
              >
                <FlaskRound className="w-6 h-6 text-green-500" />
              </motion.div>
              <span className="text-gray-900 text-xs font-semibold text-center leading-tight">{cat.name}</span>
              <span className="text-gray-400 text-[10px]">{cat.sub.length} opções</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ─── */
function Testimonials() {
  return (
    <section id="depoimentos" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-green-500 text-xs tracking-[0.2em] uppercase font-semibold">Depoimentos</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 leading-tight">
            O que nossos <span className="text-green-500">clientes dizem</span>
          </h2>
        </SectionTitle>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="p-6 sm:p-8 rounded-2xl bg-[#f8fafc] border border-gray-100 hover:border-green-100 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-green-200 mb-4" />
              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
                <p className="text-gray-400 text-xs">{t.role}</p>
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
    <section id="contato" className="py-20 sm:py-28 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-green-500 text-xs tracking-[0.2em] uppercase font-semibold">Sobre</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6 leading-tight">
              Excelência em <span className="text-green-500">Manipulação</span>
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Farmácia Sete Lírios — referência em Franca/SP. Mais de 12 anos de experiência 
              em fórmulas magistrais, com rigoroso controle de qualidade, insumos certificados 
              ANVISA e atendimento farmacêutico humanizado.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Shield, text: "Insumos certificados ANVISA" },
                { icon: Award, text: "Farmácia autorizada AFE" },
                { icon: Star, text: `★ ${CONTACT.rating}` },
                { icon: CheckCircle, text: "Manipulação sob prescrição" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm">
                  <item.icon className="w-4 h-4 text-green-500 shrink-0" />
                  <span className="text-gray-600">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-green-500 text-xs tracking-[0.2em] uppercase font-semibold">Contato</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3 mb-6 leading-tight">
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
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gray-100 hover:border-green-100 transition-all"
                >
                  <item.icon className="w-5 h-5 text-green-500 shrink-0" />
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer"
                      className="text-sm text-gray-500 hover:text-green-600 transition-colors">
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-sm text-gray-500">{item.label}</span>
                  )}
                </motion.div>
              ))}
            </div>

            <motion.a
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              href={CONTACT.whatsappLink}
              target="_blank" rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm mt-6"
            >
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
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo-sete-lirios.jpg" alt="" className="w-10 h-10 rounded-full ring-2 ring-green-500/30" />
              <div>
                <p className="font-bold text-white">Sete <span className="text-green-400">Lírios</span></p>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider">Farmácia de Manipulação</p>
              </div>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed">
              Referência em manipulação farmacêutica em Franca/SP. Fórmulas personalizadas com excelência.
            </p>
          </motion.div>
          {[
            { title: "Serviços", items: ["Manipulação Magistral", "Alta Performance", "Fitoterápicos", "Dermocosméticos"] },
            { title: "Categorias", items: categories.slice(0, 4).map((c) => c.name) },
            { title: "Contato", items: [CONTACT.address, CONTACT.phone1, CONTACT.hours] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-white text-sm mb-4">{col.title}</h4>
              <div className="space-y-2">
                {col.items.map((item) => (
                  <p key={item} className="text-gray-500 text-xs hover:text-gray-300 transition-colors cursor-default">{item}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">© {new Date().getFullYear()} Sete Lírios. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            {[MessageCircle, Instagram, MapPin].map((Icon, i) => (
              <a key={i} href={[CONTACT.whatsappLink, CONTACT.instagramHref, CONTACT.mapsHref][i]}
                target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green-400 transition-colors">
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
    <motion.a
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1.5, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      href={CONTACT.whatsappLink}
      target="_blank" rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-green-500 flex items-center justify-center text-white shadow-lg shadow-green-500/40 hover:shadow-green-500/60 transition-shadow"
      aria-label="WhatsApp"
    >
      <MessageCircle className="w-6 h-6" />
    </motion.a>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Products />
        <Categories />
        <Testimonials />
        <AboutContact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}