"use client";

import { useState, useEffect } from "react";
import {
  Menu, X, MapPin, Clock, Star, Phone, MessageCircle, Instagram,
  ArrowRight, FlaskRound, Shield, Award, Sparkles, Heart, 
  Activity, Zap, Leaf, Pill, CheckCircle, Quote, ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { CONTACT, categories, featuredProducts } from "./data";

const navLinks = [
  { label: "Início", href: "#" },
  { label: "Serviços", href: "#servicos" },
  { label: "Categorias", href: "#categorias" },
  { label: "Produtos", href: "#produtos" },
  { label: "Contato", href: "#contato" },
];

const services = [
  { icon: FlaskRound, title: "Manipulação Magistral", desc: "Fórmulas personalizadas com rigoroso controle de qualidade ANVISA." },
  { icon: Activity, title: "Reposição Hormonal", desc: "Hormônios bioidênticos manipulados sob medida para sua necessidade." },
  { icon: Zap, title: "Alta Performance", desc: "Creatina, whey, pré-treino e suplementos personalizados." },
  { icon: Leaf, title: "Fitoterápicos", desc: "Medicamentos naturais com princípios ativos vegetais de alta qualidade." },
  { icon: Heart, title: "Bem-Estar", desc: "Vitaminas, minerais e nutracêuticos para sua saúde diária." },
  { icon: Sparkles, title: "Dermatologia", desc: "Cremes, géis e loções manipulados para tratamento dermatológico." },
];

const testimonials = [
  { text: "Excelente atendimento! Fiz minha fórmula de reposição hormonal e o resultado foi incrível.", name: "Maria Cláudia", role: "Cliente" },
  { text: "A melhor farmácia de manipulação de Franca. Profissionalismo e qualidade impecáveis.", name: "Dr. Ricardo Alves", role: "Médico" },
  { text: "Produtos de altíssima qualidade. A creatina manipulada deles é a melhor que já usei.", name: "Lucas Oliveira", role: "Atleta" },
];

const stats = [
  { value: "8.630+", label: "Seguidores" },
  { value: "★ 5.0", label: "Avaliação" },
  { value: "12+", label: "Anos de Experiência" },
  { value: "100%", label: "Manipulado" },
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 group">
            <img src="/logo-sete-lirios.jpg" alt="Sete Lírios" className="h-10 w-10 rounded-full ring-2 ring-green/20 group-hover:ring-green/40 transition-all" />
            <div>
              <p className="font-bold text-base leading-tight" style={{ color: scrolled ? "#1a1a2e" : "white" }}>Sete <span className="text-green">Lírios</span></p>
              <p className="text-[10px] uppercase tracking-[0.15em] leading-tight" style={{ color: scrolled ? "#6b7280" : "rgba(255,255,255,0.6)" }}>Farmácia de Manipulação</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href}
                className="px-4 py-2 text-sm font-medium transition-colors relative group"
                style={{ color: scrolled ? "#4b5563" : "rgba(255,255,255,0.8)" }}>
                {l.label}
                <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-green scale-x-0 group-hover:scale-x-100 transition-transform" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-green text-white text-xs font-medium hover:bg-green-dark transition-all">
              <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
            </a>
            <button onClick={() => setMenuOpen(!menuOpen)} className="lg:hidden p-2" style={{ color: scrolled ? "#1a1a2e" : "white" }}>
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-md border-t border-gray-100 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {navLinks.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-sm text-gray-600 hover:text-green hover:bg-green/5 rounded-lg transition-all">
                {l.label}
              </a>
            ))}
            <a href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-3 text-sm text-green-600 hover:text-green-700 transition-colors">
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
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-[#f0f5f0] via-white to-[#f5f0eb]">
      <div className="absolute inset-0 bg-grid opacity-[0.03]" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gold/5 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="animate-fade-up stagger-1">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green/5 border border-green/10 text-green text-xs font-medium">
                <Sparkles className="w-3 h-3" /> Farmácia de Manipulação em Franca/SP
              </span>
            </div>

            <h1 className="animate-fade-up stagger-2 text-4xl sm:text-5xl lg:text-6xl font-bold text-[#1a1a2e] leading-[1.05] tracking-tight">
              Sua saúde merece uma{" "}
              <span className="text-gradient">fórmula exclusiva</span>
            </h1>

            <p className="animate-fade-up stagger-3 text-gray-500 text-base sm:text-lg max-w-md leading-relaxed">
              Farmácia de manipulação em Franca/SP. Fórmulas personalizadas com insumos certificados, 
              controle de qualidade ANVISA e atendimento farmacêutico humanizado.
            </p>

            <div className="animate-fade-up stagger-4 flex flex-wrap gap-3 pt-2">
              <a href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm">
                <MessageCircle className="w-4 h-4" /> Fale pelo WhatsApp
              </a>
              <a href="#servicos"
                className="btn-outline inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm">
                Nossos Serviços <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="animate-fade-up stagger-5 flex flex-wrap gap-6 pt-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-green font-bold text-lg">{s.value}</p>
                  <p className="text-gray-400 text-xs">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex justify-center animate-fade-up stagger-3">
            <div className="relative">
              <div className="w-72 h-72 rounded-2xl bg-gradient-to-br from-green/5 via-white to-green/5 flex items-center justify-center border border-green/10 shadow-xl">
                <img src="/logo-sete-lirios.jpg" alt="Sete Lírios" className="w-48 h-48 rounded-full object-cover shadow-lg ring-4 ring-white" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-white shadow-lg rounded-xl p-4 border border-green/10">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-gold fill-gold" />
                  <div>
                    <p className="font-bold text-[#1a1a2e] text-sm">Excelência {CONTACT.rating}</p>
                    <p className="text-gray-400 text-xs">{CONTACT.followers.toLocaleString()} seguidores</p>
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

/* ─── STATS ─── */
function Stats() {
  return (
    <section className="bg-green text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-gold-light">{s.value}</p>
              <p className="text-white/70 text-xs sm:text-sm mt-1">{s.label}</p>
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
    <section id="servicos" className="py-20 sm:py-28 bg-[#f7f8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-green text-xs tracking-[0.2em] uppercase font-semibold">O que fazemos</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mt-3 leading-tight">
            Nossos <span className="text-gradient">Serviços</span>
          </h2>
          <p className="text-gray-500 mt-4 text-sm sm:text-base leading-relaxed">
            Soluções personalizadas em manipulação farmacêutica para cada necessidade.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((svc) => (
            <div key={svc.title}
              className="group p-6 sm:p-8 rounded-2xl bg-white border border-green/5 hover:border-green/20 hover:shadow-lg transition-all duration-300 card-hover">
              <div className="w-12 h-12 rounded-xl bg-green/5 flex items-center justify-center mb-4 group-hover:bg-green/10 group-hover:scale-110 transition-all">
                <svc.icon className="w-6 h-6 text-green" />
              </div>
              <h3 className="text-lg font-bold text-[#1a1a2e] mb-2">{svc.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{svc.desc}</p>
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
    <section id="categorias" className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-green text-xs tracking-[0.2em] uppercase font-semibold">Categorias</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mt-3 leading-tight">
            Nossas <span className="text-gradient">Especialidades</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <a key={cat.name} href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 p-5 rounded-xl bg-[#f7f8f5] border border-green/5 hover:border-green/20 hover:bg-white transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-green/5 flex items-center justify-center group-hover:bg-green/10 group-hover:scale-110 transition-all">
                <FlaskRound className="w-6 h-6 text-green" />
              </div>
              <span className="text-[#1a1a2e] text-xs font-semibold text-center leading-tight">{cat.name}</span>
              <span className="text-gray-400 text-[10px]">{cat.sub.length} fórmulas</span>
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
    <section id="produtos" className="py-20 sm:py-28 bg-[#f7f8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <span className="text-green text-xs tracking-[0.2em] uppercase font-semibold">Produtos</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] mt-2">Mais Procurados</h2>
          </div>
          <a href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 text-sm text-green hover:text-green-dark transition-colors">
            Solicitar Orçamento <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {featuredProducts.map((p) => (
            <div key={p.name} className="group bg-white rounded-xl border border-green/5 p-3 hover:border-green/20 hover:shadow-md transition-all duration-300">
              <div className="aspect-square bg-[#f7f8f5] rounded-lg mb-3 flex items-center justify-center">
                <Pill className="w-10 h-10 text-green/30 group-hover:scale-110 transition-transform" />
              </div>
              {p.badge && (
                <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold mb-2 ${p.badgeColor || "bg-green/5 text-green"}`}>
                  {p.badge}
                </span>
              )}
              <p className="text-[11px] text-gray-400 mb-1">{p.category}</p>
              <h3 className="text-sm font-semibold text-[#1a1a2e] mb-1 line-clamp-2 leading-snug min-h-[2.5em]">{p.name}</h3>
              <p className="text-base font-bold text-green-dark">{p.price}</p>
              <p className="text-[10px] text-gray-400 mb-2">{p.parcel}</p>
              <a href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer"
                className="block w-full py-2 rounded-full bg-green text-white text-[11px] font-semibold text-center hover:bg-green-dark transition-colors">
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
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-green text-xs tracking-[0.2em] uppercase font-semibold">Depoimentos</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1a1a2e] mt-3 leading-tight">
            O que nossos <span className="text-gradient">clientes dizem</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="p-6 sm:p-8 rounded-2xl bg-[#f7f8f5] border border-green/5 hover:border-green/15 transition-all duration-300">
              <Quote className="w-8 h-8 text-green/20 mb-4" />
              <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
              <div>
                <p className="font-semibold text-[#1a1a2e] text-sm">{t.name}</p>
                <p className="text-gray-400 text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── ABOUT/CONTACT ─── */
function AboutContact() {
  return (
    <section id="contato" className="py-20 sm:py-28 bg-[#f7f8f5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-green text-xs tracking-[0.2em] uppercase font-semibold">Sobre</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] mt-3 mb-6 leading-tight">
              Excelência em <span className="text-gradient">Manipulação</span>
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
                { icon: Star, text: `★ ${CONTACT.rating} — ${CONTACT.followers.toLocaleString()} seguidores` },
                { icon: CheckCircle, text: "Manipulação sob prescrição" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm">
                  <item.icon className="w-4 h-4 text-green shrink-0" />
                  <span className="text-gray-600">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="text-green text-xs tracking-[0.2em] uppercase font-semibold">Contato</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1a1a2e] mt-3 mb-6 leading-tight">
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
                <div key={item.label}
                  className="flex items-center gap-3 p-4 rounded-xl bg-white border border-green/5 hover:border-green/15 transition-all">
                  <item.icon className="w-5 h-5 text-green shrink-0" />
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer"
                      className="text-sm text-gray-500 hover:text-green transition-colors">
                      {item.label}
                    </a>
                  ) : (
                    <span className="text-sm text-gray-500">{item.label}</span>
                  )}
                </div>
              ))}
            </div>

            <a href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm mt-6">
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
    <footer className="bg-[#1a1a2e] text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo-sete-lirios.jpg" alt="" className="w-10 h-10 rounded-full ring-2 ring-green/30" />
              <div>
                <p className="font-bold text-white">Sete <span className="text-green">Lírios</span></p>
                <p className="text-[10px] text-gray-500 uppercase tracking-wider">Farmácia de Manipulação</p>
              </div>
            </div>
            <p className="text-gray-500 text-xs leading-relaxed">
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
                  <p key={item} className="text-gray-500 text-xs hover:text-gray-300 transition-colors">{item}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">© {new Date().getFullYear()} Sete Lírios. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <a href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green transition-colors"><MessageCircle className="w-4 h-4" /></a>
            <a href={CONTACT.instagramHref} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href={CONTACT.mapsHref} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-green transition-colors"><MapPin className="w-4 h-4" /></a>
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
      className="fixed bottom-5 right-5 z-40 w-14 h-14 rounded-full bg-green flex items-center justify-center text-white shadow-lg shadow-green/30 hover:scale-110 transition-transform"
      aria-label="WhatsApp">
      <MessageCircle className="w-6 h-6" />
    </a>
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
        <Categories />
        <Products />
        <Testimonials />
        <AboutContact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}