"use client";

import { useState, useEffect } from "react";
import {
  Menu, X, ChevronDown, ChevronRight, MapPin, Clock, Star,
  Phone, MessageCircle, Instagram, ArrowRight, FlaskRound,
  Shield, Award, Sparkles, Heart, Activity, Zap, Leaf,
  Pill, CheckCircle, Quote, Dumbbell, TrendingUp,
  Flame, Droplets, Battery,
} from "lucide-react";
import Link from "next/link";
import { CONTACT, categories, featuredProducts, planos } from "./data";

/* ============================================================
   SETE LÍRIOS SUPLEMENTOS — FITNESS PREMIUM
   ============================================================ */

const testimonials = [
  { text: "A creatina manipulada deles é pura e muito mais barata que as marcas famosas. Resultado incrível nos treinos!", name: "Rafael Martins", role: "Atleta natural" },
  { text: "O pré-treino personalizado mudou meus treinos. Energia limpa sem aquela tremedeira dos industrializados.", name: "Amanda Costa", role: "CrossFit" },
  { text: "Melhor custo-benefício. Tomo whey isolado manipulado há 6 meses — mais proteína por menos dinheiro.", name: "Thiago Oliveira", role: "Fisiculturista" },
];

const stats = [
  { number: "8.630+", label: "Seguidores" },
  { number: "★ 5.0", label: "Avaliação" },
  { number: "12+", label: "Anos de Experiência" },
  { number: "100%", label: "Manipulado" },
];

const benefits = [
  { icon: TrendingUp, title: "Mais puro", desc: "Sem excipientes desnecessários. Só o ativo que você precisa." },
  { icon: Battery, title: "Mais potente", desc: "Dosagem exata para seu objetivo. Nada de subdosagem." },
  { icon: Flame, title: "Melhor custo", desc: "Até 40% mais barato que marcas industrializadas." },
  { icon: Droplets, title: "Sob medida", desc: "Fórmula personalizada para seu biotipo e meta." },
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
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center font-bold text-navy text-sm group-hover:scale-105 transition-transform">
              SL
            </div>
            <div>
              <p className="font-bold text-base text-white leading-tight">Sete <span className="text-gold">Lírios</span></p>
              <p className="text-[10px] text-white/50 uppercase tracking-[0.2em] leading-tight">{CONTACT.subtitleShort}</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {["Início", "Suplementos", "Planos", "Resultados", "Contato"].map((l, i) => (
              <a key={l} href={["#", "#produtos", "#planos", "#depoimentos", "#contato"][i]}
                className="px-4 py-2 text-sm text-white/70 hover:text-gold transition-colors relative group">
                {l}
                <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-gold scale-x-0 group-hover:scale-x-100 transition-transform" />
              </a>
            ))}
          </nav>

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

      {menuOpen && (
        <div className="lg:hidden bg-navy/98 backdrop-blur-xl border-t border-gold/10">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            {["Início", "Suplementos", "Planos", "Resultados", "Contato"].map((l, i) => (
              <a key={l} href={["#", "#produtos", "#planos", "#depoimentos", "#contato"][i]} onClick={() => setMenuOpen(false)}
                className="block px-4 py-3 text-sm text-white/70 hover:text-gold hover:bg-gold/5 rounded-lg transition-all">
                {l}
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

/* ─── HERO FITNESS ─── */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-navy">
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-navy" />
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/3 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="animate-fade-up stagger-1">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/20 text-gold text-xs tracking-wider uppercase">
                <Dumbbell className="w-3 h-3" /> Suplementos Manipulados
              </span>
            </div>

            <h1 className="animate-fade-up stagger-2 text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[0.9] tracking-tight">
              Performance que<br />
              <span className="text-gradient">transforma</span>
              <br />
              resultados que{" "}
              <span className="text-gradient">impressionam</span>
            </h1>

            <p className="animate-fade-up stagger-3 text-white/50 text-base sm:text-lg max-w-lg leading-relaxed">
              Suplementos manipulados em Franca/SP. Creatina, Whey, Pré-Treino e vitaminas 
              personalizadas — mais puro, mais potente, até 40% mais barato.
            </p>

            <div className="animate-fade-up stagger-4 flex flex-wrap gap-3 pt-2">
              <a href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer"
                className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm">
                <MessageCircle className="w-4 h-4" /> Comprar pelo WhatsApp
              </a>
              <a href="#produtos"
                className="btn-navy inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm">
                Ver Suplementos <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="animate-fade-up stagger-5 flex flex-wrap gap-6 pt-4">
              {stats.slice(0, 3).map((s) => (
                <div key={s.label}>
                  <p className="text-gold font-bold text-lg">{s.number}</p>
                  <p className="text-white/40 text-xs">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual */}
          <div className="hidden lg:flex justify-center animate-fade-up stagger-3">
            <div className="relative">
              <div className="w-72 h-72 rounded-2xl bg-gradient-to-br from-gold/10 via-navy-light to-gold/5 flex items-center justify-center animate-float border border-gold/10">
                <div className="text-center">
                  <Dumbbell className="w-20 h-20 text-gold/40 mx-auto mb-4" />
                  <p className="text-gold font-bold text-2xl">SUPLEMENTOS</p>
                  <p className="text-white/30 text-sm">Manipulados • Puros • Potentes</p>
                </div>
              </div>
              <div className="absolute -bottom-2 -right-2 bg-navy-light/90 backdrop-blur-xl rounded-xl p-4 border border-gold/20 shadow-gold">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-gold fill-gold" />
                  <div>
                    <p className="font-bold text-white text-sm">Economia até 40%</p>
                    <p className="text-white/40 text-xs">vs. marcas industrializadas</p>
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

/* ─── BENEFITS ─── */
function Benefits() {
  return (
    <section className="section-dark py-16 border-y border-gold/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {benefits.map((b) => (
            <div key={b.title} className="text-center p-4">
              <b.icon className="w-8 h-8 text-gold mx-auto mb-3" />
              <p className="text-white font-bold text-sm mb-1">{b.title}</p>
              <p className="text-white/40 text-xs leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PRODUCTS ─── */
function Products() {
  return (
    <section id="produtos" className="section-light py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-gold-dark text-xs tracking-[0.3em] uppercase font-medium">Suplementos</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mt-3 leading-tight">
            Performance <span className="text-gradient">Pura</span>
          </h2>
          <p className="text-muted mt-4 text-sm sm:text-base leading-relaxed">
            Suplementos manipulados com matéria-prima certificada. Máxima pureza, melhor absorção.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {featuredProducts.map((p) => (
            <div key={p.name} className="group bg-white rounded-xl border border-gold/5 p-3 hover:border-gold/20 hover:shadow-gold transition-all duration-300">
              <div className="aspect-square bg-gradient-to-br from-gold/5 via-navy/5 to-gold/5 rounded-lg mb-3 flex items-center justify-center">
                <Pill className="w-10 h-10 text-gold/40 group-hover:scale-110 transition-transform" />
              </div>
              {p.badge && (
                <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold mb-2 ${p.badgeColor}`}>
                  {p.badge}
                </span>
              )}
              <p className="text-[11px] text-muted mb-1">{p.category}</p>
              <h3 className="text-sm font-semibold text-navy mb-1 line-clamp-2 leading-snug min-h-[2.5em]">{p.name}</h3>
              <p className="text-base font-bold text-gold-dark">{p.price}</p>
              <p className="text-[10px] text-muted mb-2">{p.parcel}</p>
              <a href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer"
                className="block w-full py-2 rounded-full bg-navy text-white text-[11px] font-semibold text-center hover:bg-navy-light transition-colors">
                Comprar
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer"
            className="btn-gold inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm">
            Catálogo Completo <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ─── CATEGORIES ─── */
function Categories() {
  return (
    <section className="section-dark py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">Categorias</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 leading-tight">
            Tudo para seu <span className="text-gradient">objetivo</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((cat) => (
            <a key={cat.name} href={CONTACT.whatsappLink}
              target="_blank" rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 p-5 rounded-xl bg-white/5 border border-gold/5 hover:border-gold/20 hover:bg-white/[0.07] transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 group-hover:scale-110 transition-all">
                <FlaskRound className="w-6 h-6 text-gold" />
              </div>
              <span className="text-white text-xs font-semibold text-center leading-tight">{cat.name}</span>
              <span className="text-white/30 text-[10px]">{cat.sub.length} opções</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── PLANS ─── */
function Plans() {
  return (
    <section id="planos" className="section-light py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-gold-dark text-xs tracking-[0.3em] uppercase font-medium">Assinatura</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-navy mt-3 leading-tight">
            Planos de <span className="text-gradient">Suplementação</span>
          </h2>
          <p className="text-muted mt-4 text-sm sm:text-base leading-relaxed">
            Receba seus suplementos todo mês com frete grátis em Franca.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {planos.map((plano) => (
            <div key={plano.name} className={`relative rounded-2xl p-6 sm:p-8 transition-all duration-300 ${plano.highlight ? "bg-navy text-white shadow-gold-lg border border-gold/30 scale-105" : "bg-white border border-gold/10 hover:border-gold/20"}`}>
              {plano.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gold text-navy text-[10px] font-bold tracking-wider uppercase">
                  Mais Popular
                </div>
              )}
              <h3 className={`text-lg font-bold mb-1 ${plano.highlight ? "text-gold" : "text-navy"}`}>{plano.name}</h3>
              <p className={`text-3xl font-bold mb-1 ${plano.highlight ? "text-white" : "text-navy"}`}>{plano.price}</p>
              <p className="text-xs text-muted mb-6">{plano.desc}</p>
              <div className="space-y-3 mb-6">
                {plano.items.map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm">
                    <CheckCircle className={`w-4 h-4 ${plano.highlight ? "text-gold" : "text-green-500"} shrink-0`} />
                    <span className={plano.highlight ? "text-white/80" : "text-muted"}>{item}</span>
                  </div>
                ))}
              </div>
              <a href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer"
                className={plano.highlight
                  ? "btn-gold w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-semibold"
                  : "btn-navy w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm"}>
                Assinar Agora
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
    <section id="depoimentos" className="section-dark py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">Resultados Reais</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-3 leading-tight">
            O que nossos atletas dizem
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i}
              className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-gold/10 hover:border-gold/20 transition-all duration-300">
              <Quote className="w-8 h-8 text-gold/30 mb-4" />
              <p className="text-white/70 text-sm leading-relaxed mb-6 italic">&ldquo;{t.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold/30 to-gold/10 flex items-center justify-center text-gold text-xs font-bold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-white/40 text-xs">{t.role}</p>
                </div>
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
          <div>
            <span className="text-gold-dark text-xs tracking-[0.3em] uppercase font-medium">Quem somos</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mt-3 mb-6 leading-tight">
              Suplementos <span className="text-gradient">Inteligentes</span>
            </h2>
            <p className="text-muted text-sm leading-relaxed mb-6">
              Farmácia Sete Lírios — mais de 12 anos manipulando suplementos em Franca/SP. 
              Matéria-prima certificada, fórmulas personalizadas e preço justo. 
              Creatina, whey, pré-treino e vitaminas manipulados sob medida para você.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { icon: Shield, text: "Matéria-prima certificada ANVISA" },
                { icon: TrendingUp, text: "Até 40% mais barato" },
                { icon: CheckCircle, text: "Manipulação sob prescrição" },
                { icon: Star, text: `★ ${CONTACT.rating} — ${CONTACT.followers.toLocaleString()} seguidores` },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm text-navy">
                  <item.icon className="w-4 h-4 text-gold shrink-0" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <span className="text-gold-dark text-xs tracking-[0.3em] uppercase font-medium">Contato</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mt-3 mb-6 leading-tight">
              Faça seu pedido
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
              <MessageCircle className="w-4 h-4" /> Pedir pelo WhatsApp
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
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center font-bold text-navy text-sm">
                SL
              </div>
              <div>
                <p className="font-bold text-white">Sete <span className="text-gold">Lírios</span></p>
                <p className="text-[10px] text-white/40 uppercase tracking-wider">{CONTACT.subtitleShort}</p>
              </div>
            </div>
            <p className="text-white/40 text-xs leading-relaxed">
              Suplementos manipulados em Franca/SP. Performance pura, preço justo.
            </p>
          </div>
          {[
            { title: "Suplementos", items: ["Creatina", "Whey Protein", "Pré-Treino", "BCAA", "Vitaminas"] },
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
          <p className="text-white/30 text-xs">© {new Date().getFullYear()} Sete Lírios Suplementos. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <a href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold transition-colors"><MessageCircle className="w-4 h-4" /></a>
            <a href={CONTACT.instagramHref} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold transition-colors"><Instagram className="w-4 h-4" /></a>
            <a href={CONTACT.mapsHref} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-gold transition-colors"><MapPin className="w-4 h-4" /></a>
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
        <Benefits />
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