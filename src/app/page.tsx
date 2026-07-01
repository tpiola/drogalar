"use client";

import { useState, useEffect } from "react";
import {
  Menu, X, ChevronDown, ChevronRight, MapPin, Clock, Star,
  Phone, MessageCircle, Instagram, ArrowRight, FlaskRound,
  Shield, Award, Sparkles, Heart, Activity, Zap, Leaf,
  Pill, CheckCircle, Quote,
} from "lucide-react";
import Link from "next/link";
import { CONTACT, categories, featuredProducts } from "./data";

/* ============================================================
   SETE LÍRIOS — DARK NAVY LUXURY + GOLD
   ============================================================ */

const navLinks = [
  { label: "Início", href: "#" },
  { label: "Manipulação", href: "#servicos" },
  { label: "Categorias", href: "#categorias" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const testimonials = [
  { text: "Excelente atendimento! Fiz minha fórmula de reposição hormonal e o resultado foi incrível.", name: "Maria Cláudia", role: "Cliente" },
  { text: "A melhor farmácia de manipulação de Franca. Profissionalismo e qualidade impecáveis.", name: "Dr. Ricardo Alves", role: "Médico" },
  { text: "Produtos de altíssima qualidade. A creatina manipulada deles é a melhor que já usei.", name: "Lucas Oliveira", role: "Atleta" },
];

const stats = [
  { number: "8.630+", label: "Seguidores" },
  { number: "★ 5.0", label: "Avaliação" },
  { number: "12+", label: "Anos de Experiência" },
  { number: "100%", label: "Manipulado" },
];

const services = [
  { icon: FlaskRound, title: "Fórmulas Magistrais", desc: "Prescrições personalizadas com rigoroso controle de qualidade ANVISA." },
  { icon: Activity, title: "Reposição Hormonal", desc: "Hormônios bioidênticos manipulados sob medida para sua necessidade." },
  { icon: Zap, title: "Alta Performance", desc: "Creatina, whey, pré-treino e suplementos esportivos personalizados." },
  { icon: Leaf, title: "Fitoterápicos", desc: "Medicamentos naturais manipulados com princípios ativos vegetais." },
  { icon: Heart, title: "Bem-Estar", desc: "Vitaminas, minerais e nutracêuticos para sua saúde diária." },
  { icon: Sparkles, title: "Dermatologia", desc: "Cremes, géis e loções manipulados para tratamento dermatológico." },
];

/* ─── NAVBAR ─── */
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-navy/95 backdrop-blur-xl shadow-lg shadow-black/20" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <img src="/logo-sete-lirios.jpg" alt="Sete Lírios" className="h-10 w-10 rounded-full ring-2 ring-gold/30 group-hover:ring-gold/60 transition-all" />
            <div>
              <p className="font-bold text-base text-white leading-tight">Sete <span className="text-gold">Lírios</span></p>
              <p className="text-[10px] text-white/50 uppercase tracking-[0.2em] leading-tight">Farmácia de Manipulação</p>
            </div>
          </Link>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href}
                className="px-4 py-2 text-sm text-white/70 hover:text-gold transition-colors relative group">
                {l.label}
                <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform" />
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <a href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 text-gold text-xs font-medium hover:bg-gold/20 transition-all">
              <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2 text-white/70 hover:text-gold transition-colors">
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-navy/98 backdrop-blur-xl border-t border-gold/10">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-sm text-white/70 hover:text-gold hover:bg-gold/5 rounded-lg transition-all">
                {l.label}
              </a>
            ))}
            <a href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 text-sm text-green-400 hover:text-green-300 transition-colors">
              <MessageCircle className="w-4 h-4" /> WhatsApp: {CONTACT.whatsapp}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/* ─── HERO ─── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gold/3 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="animate-fade-up stagger-1">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/20 text-gold text-xs tracking-wider uppercase">
                <Sparkles className="w-3 h-3" /> Farmácia de Manipulação
              </span>
            </div>

            <h1 className="animate-fade-up stagger-2 text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[0.95] tracking-tight">
              Sua saúde é
              <br />
              <span className="text-gradient">única</span>
              <br />
              seu tratamento é{" "}
              <span className="text-gradient">personalizado</span>
            </h1>

            <p className="animate-fade-up stagger-3 text-white/50 text-base sm:text-lg max-w-md leading-relaxed">
              Farmácia de manipulação em Franca/SP. Fórmulas magistrais com 
              excelência farmacêutica, insumos certificados e atendimento humanizado.
            </p>

            <div className="animate-fade-up stagger-4 flex flex-wrap gap-3 pt-2">
              <a href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm">
                <MessageCircle className="w-4 h-4" /> Fale pelo WhatsApp
              </a>
              <a href="#servicos"
                className="btn-navy inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm">
                Nossos Serviços <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Trusted bar */}
            <div className="animate-fade-up stagger-5 flex flex-wrap gap-6 pt-4">
              {stats.slice(0, 3).map((s) => (
                <div key={s.label}>
                  <p className="text-gold font-bold text-lg">{s.number}</p>
                  <p className="text-white/40 text-xs">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Logo Hero */}
          <div className="hidden lg:flex justify-center animate-fade-up stagger-3">
            <div className="relative">
              <div className="w-72 h-72 rounded-full bg-gradient-to-br from-gold/10 via-navy-light to-gold/5 flex items-center justify-center animate-float">
                <img src="/logo-sete-lirios.jpg" alt="Sete Lírios" className="w-48 h-48 rounded-full object-cover shadow-2xl ring-4 ring-gold/20" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-navy-light/90 backdrop-blur-xl rounded-xl p-4 border border-gold/20 shadow-gold">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-gold fill-gold" />
                  <div>
                    <p className="font-bold text-white text-sm">Excelência {CONTACT.rating}</p>
                    <p className="text-white/40 text-xs">{CONTACT.followers.toLocaleString()} seguidores</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── STATS BAR ─── */
function StatsBar() {
  return (
    <section className="section-dark py-10 border-y border-gold/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-gold text-2xl sm:text-3xl font-bold">{s.number}</p>
              <p className="text-white/40 text-xs sm:text-sm mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── SERVICES ─── */
function Services() {
  return (
    <section id="servicos" className="section-light py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-gold-dark text-xs tracking-[0.3em] uppercase font-medium">O que fazemos</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mt-3 leading-tight">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-muted mt-4 text-sm sm:text-base leading-relaxed">
            Soluções personalizadas em manipulação farmacêutica para cada necessidade.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc, i) => (
            <div key={svc.title}
              className="group p-6 sm:p-8 rounded-2xl bg-white border border-gold/10 hover:border-gold/30 hover:shadow-gold-lg transition-all duration-500 card-hover">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/10 to-gold/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <svc.icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">{svc.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{svc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── CATEGORIES ─── */
function Categories() {
  return (
    <section id="categorias" className="section-dark py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">Categorias</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 leading-tight">
            Especialidades
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <a key={cat.name} href="#"
              className="group flex flex-col items-center gap-3 p-5 rounded-xl bg-white/5 border border-gold/5 hover:border-gold/20 hover:bg-white/[0.07] transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 group-hover:scale-110 transition-all">
                <FlaskRound className="w-6 h-6 text-gold" />
              </div>
              <span className="text-white text-xs font-semibold text-center leading-tight">{cat.name}</span>
              <span className="text-white/30 text-[10px]">{cat.sub.length} fórmulas</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PRODUCTS ─── */
function Products() {
  return (
    <section className="section-light py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-gold-dark text-xs tracking-[0.3em] uppercase font-medium">Produtos</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mt-2">Mais Procurados</h2>
          </div>
          <a href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 text-sm text-gold-dark hover:text-gold transition-colors">
            Solicitar Orçamento <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {featuredProducts.map((p) => (
            <div key={p.name} className="group bg-white rounded-xl border border-gold/5 p-3 hover:border-gold/20 hover:shadow-gold transition-all duration-300">
              <div className="aspect-square bg-gradient-to-br from-gold/5 to-navy/5 rounded-lg mb-3 flex items-center justify-center">
                <FlaskRound className="w-10 h-10 text-gold/30" />
              </div>
              {p.badge && (
                <span className="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold bg-gold/10 text-gold-dark mb-2">
                  {p.badge}
                </span>
              )}
              <p className="text-[11px] text-muted mb-1">{p.category}</p>
              <h3 className="text-sm font-semibold text-navy mb-1 line-clamp-2 leading-snug">{p.name}</h3>
              <p className="text-base font-bold text-gold-dark">{p.price}</p>
              <p className="text-[10px] text-muted">{p.parcel}</p>
              <a href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer"
                className="block w-full mt-3 py-2 rounded-full bg-navy text-white text-[11px] font-semibold text-center hover:bg-navy-light transition-colors">
                Solicitar
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── TESTIMONIALS ─── */
function Testimonials() {
  return (
    <section className="section-dark py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">Depoimentos</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 leading-tight">
            O que dizem sobre nós
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i}
              className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-gold/10 hover:border-gold/20 transition-all duration-300">
              <Quote className="w-8 h-8 text-gold/30 mb-4" />
              <p className="text-white/70 text-sm leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
              <div>
                <p className="text-white font-semibold text-sm">{t.name}</p>
                <p className="text-white/40 text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── ABOUT + CONTACT ─── */
function AboutContact() {
  return (
    <section id="contato" className="section-light py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About */}
          <div>
            <span className="text-gold-dark text-xs tracking-[0.3em] uppercase font-medium">Sobre</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mt-3 mb-6 leading-tight">
              Excelência em <span className="text-gradient">Manipulação</span>
            </h2>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Farmácia Sete Lírios — referência em Franca/SP. Mais de 12 anos de experiência 
              em fórmulas magistrais, com rigoroso controle de qualidade, insumos certificados 
              ANVISA e atendimento farmacêutico humanizado.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield, text: "Insumos certificados ANVISA" },
                { icon: Award, text: "Farmácia autorizada AFE" },
                {icon: Star, text: `★ ${CONTACT.rating} — ${CONTACT.followers.toLocaleString()} seguidores`},
                { icon: CheckCircle, text: "Manipulação sob prescrição" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm text-navy">
                  <item.icon className="w-4 h-4 text-gold shrink-0" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <span className="text-gold-dark text-xs tracking-[0.3em] uppercase font-medium">Contato</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mt-3 mb-6 leading-tight">
              Fale conosco
            </h2>
            <div className="space-y-4">
              {[
                { icon: MapPin, label: CONTACT.address, href: CONTACT.mapsHref },
                { icon: Phone, label: `${CONTACT.phone1} | ${CONTACT.phone2}`, href: CONTACT.phoneHref },
                { icon: MessageCircle, label: `WhatsApp: ${CONTACT.whatsapp}`, href: CONTACT.whatsappLink },
                { icon: Clock, label: CONTACT.hours },
                { icon: Instagram, label: "@farmaciasetelirios", href: CONTACT.instagramHref },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-gold/10 hover:border-gold/20 transition-all">
                  <item.icon className="w-5 h-5 text-gold shrink-0" />
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer"
                      className="text-sm text-muted hover:text-navy transition-colors">
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-sm text-muted">{item.label}</span>
                  )}
                </div>
              ))}
            </div>

            <a href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm mt-6">
              <MessageCircle className="w-4 h-4" /> Fale pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── FOOTER ─── */
function Footer() {
  return (
    <footer className="section-dark py-12 border-t border-gold/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo-sete-lirios.jpg" alt="" className="w-10 h-10 rounded-full ring-2 ring-gold/20" />
              <div>
                <p className="font-bold text-white">Sete <span className="text-gold">Lírios</span></p>
                <p className="text-[10px] text-white/40 uppercase tracking-wider">Farmácia de Manipulação</p>
              </div>
            </div>
            <p className="text-white/40 text-xs leading-relaxed">
              Referência em manipulação farmacêutica em Franca/SP. Fórmulas personalizadas com excelência.
            </p>
          </div>
          {[
            { title: "Serviços", items: ["Manipulação Magistral", "Alta Performance", "Fitoterápicos", "Dermatologia"] },
            { title: "Categorias", items: categories.slice(0, 4).map((c) => c.name) },
            { title: "Contato", items: [CONTACT.address, CONTACT.phone1, CONTACT.hours] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-semibold text-white text-sm mb-4">{col.title}</h4>
              <div className="space-y-2">
                {col.items.map((item) => (
                  <p key={item} className="text-white/40 text-xs hover:text-white/60 transition-colors">{item}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-gold/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">© {new Date().getFullYear()} Sete Lírios. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <a href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold transition-colors">
              <MessageCircle className="w-4 h-4" />
            </a>
            <a href={CONTACT.instagramHref} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
            <a href={CONTACT.mapsHref} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold transition-colors">
              <MapPin className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ─── WHATSAPP FAB ─── */
function WhatsAppFab() {
  return (
    <a href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-xl animate-pulse-gold"
      style={{ background: "linear-gradient(135deg, #c9a84c, #a88a2e)" }}
      aria-label="WhatsApp">
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}

/* ─── PAGE ─── */
export default function Home() {
  return (
    <div className="bg-navy">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <Categories />
        <Products />
        <Testimonials />
        <AboutContact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}