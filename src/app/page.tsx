"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, Search, Phone, MapPin, Clock, ChevronRight, ChevronDown,
  MessageCircle, Star, FlaskRound, Pill, Heart, Sparkles, Zap, Leaf,
  Activity, Award, Shield, CheckCircle, ArrowRight, Instagram,
} from "lucide-react";
import Link from "next/link";
import { CONTACT, categories, featuredProducts } from "./data";

/* ============================================================
   DROGA RAIA MODEL — SETE LÍRIOS PHARMACY
   ============================================================ */

const menuLinks = [
  { label: "Manipulação", href: "#", children: categories.slice(0, 2) },
  { label: "Saúde", href: "#", children: categories.slice(2, 4) },
  { label: "Bem-Estar", href: "#", children: categories.slice(4, 6) },
  { label: "A Farmácia", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

const servicePills = [
  { icon: MessageCircle, label: "Fale pelo WhatsApp", href: CONTACT.whatsappLink, color: "bg-green-500" },
  { icon: MapPin, label: "Av. Brasil, 815", href: CONTACT.mapsHref, color: "bg-brand" },
  { icon: Clock, label: "Seg-Sex 08h-20h", href: "#", color: "bg-amber-600" },
  { icon: Star, label: `★ ${CONTACT.rating} — ${CONTACT.followers.toLocaleString()} seguidores`, href: CONTACT.instagramHref, color: "bg-purple-600" },
];

/* ─── HEADER (Droga Raia style) ─── */
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [openCat, setOpenCat] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      {/* Top bar */}
      <div className="bg-[#006F83] text-white text-xs text-center py-1.5 px-4">
        Farmácia de Manipulação em Franca/SP • ★ {CONTACT.rating} — {CONTACT.followers.toLocaleString()} seguidores
      </div>

      {/* Main header */}
      <div className="max-w-[1366px] mx-auto px-4">
        <div className="flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <img src="/logo-sete-lirios.jpg" alt="Sete Lírios" className="h-9 w-9 md:h-10 md:w-10 rounded-full" />
            <div className="hidden sm:block">
              <p className="font-bold text-sm leading-tight">Sete <span className="text-brand">Lírios</span></p>
              <p className="text-[9px] text-gray-500 uppercase tracking-wider leading-tight">Farmácia de Manipulação</p>
            </div>
          </Link>

          {/* Search - Desktop */}
          <div className="hidden md:flex flex-1 max-w-xl mx-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar fórmulas, tratamentos..."
                className="w-full h-10 pl-10 pr-4 rounded-full bg-gray-100 border border-gray-200 text-sm focus:outline-none focus:border-brand focus:bg-white transition-colors"
              />
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <button onClick={() => setSearchOpen(!searchOpen)} className="md:hidden p-2 hover:bg-gray-100 rounded-lg">
              <Search className="w-5 h-5" />
            </button>
            <a href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-xs font-medium hover:bg-green-100 transition-colors">
              <MessageCircle className="w-4 h-4" /> WhatsApp
            </a>
            <a href={CONTACT.instagramHref} target="_blank" rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 bg-purple-50 text-purple-700 rounded-full text-xs font-medium hover:bg-purple-100 transition-colors">
              <Instagram className="w-4 h-4" /> Instagram
            </a>
          </div>
        </div>

        {/* Search - Mobile */}
        <AnimatePresence>
          {searchOpen && (
            <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="md:hidden overflow-hidden pb-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input type="text" placeholder="Buscar..." className="w-full h-10 pl-10 pr-4 rounded-full bg-gray-100 text-sm focus:outline-none focus:border-brand" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation menu */}
        <nav className="hidden lg:flex items-center gap-0 -mb-px">
          <button onClick={() => setMenuOpen(!menuOpen)}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${menuOpen ? "border-brand text-brand" : "border-transparent text-gray-600 hover:text-gray-900"}`}>
            <Menu className="w-4 h-4" /> Todas as Categorias
          </button>
          {menuLinks.slice(3).map((link) => (
            <Link key={link.label} href={link.href} className="px-4 py-3 text-sm text-gray-600 hover:text-gray-900 border-b-2 border-transparent hover:border-brand transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mega Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 right-0 bg-white shadow-xl border-t border-gray-100 z-40">
            <div className="max-w-[1366px] mx-auto px-4 py-6">
              <div className="flex gap-8">
                {/* Categories sidebar */}
                <div className="w-48 shrink-0">
                  {menuLinks.slice(0, 3).map((link) => (
                    <button key={link.label}
                      onMouseEnter={() => setOpenCat(link.label)}
                      className={`w-full text-left px-3 py-2.5 text-sm rounded-lg transition-colors ${openCat === link.label ? "bg-brand/5 text-brand font-medium" : "text-gray-600 hover:bg-gray-50"}`}>
                      {link.label}
                    </button>
                  ))}
                </div>
                {/* Subcategories grid */}
                <div className="flex-1 grid grid-cols-3 gap-6">
                  {menuLinks.slice(0, 3).filter((l) => l.label === openCat).map((link) =>
                    link.children?.map((cat) => (
                      <div key={cat.name}>
                        <h4 className="font-semibold text-sm mb-2 text-gray-900">{cat.name}</h4>
                        <ul className="space-y-1.5">
                          {cat.sub.map((s) => (
                            <li key={s}>
                              <a href="#" className="text-xs text-gray-500 hover:text-brand transition-colors">{s}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 bg-black/50 z-50">
            <motion.div initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }}
              className="absolute left-0 top-0 bottom-0 w-80 bg-white shadow-xl">
              <div className="p-4 border-b flex items-center justify-between">
                <span className="font-bold">Categorias</span>
                <button onClick={() => setMenuOpen(false)}><X className="w-5 h-5" /></button>
              </div>
              <div className="overflow-y-auto h-full pb-20">
                {categories.map((cat) => (
                  <div key={cat.name} className="border-b border-gray-100">
                    <button onClick={() => setOpenCat(openCat === cat.name ? null : cat.name)}
                      className="w-full flex items-center justify-between px-4 py-3 text-sm hover:bg-gray-50">
                      <span>{cat.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform ${openCat === cat.name ? "rotate-180" : ""}`} />
                    </button>
                    <AnimatePresence>
                      {openCat === cat.name && (
                        <motion.div initial={{ height: 0 }} animate={{ height: "auto" }} exit={{ height: 0 }} className="overflow-hidden">
                          <div className="px-4 pb-3 space-y-1.5">
                            {cat.sub.map((s) => (
                              <a key={s} href="#" className="block text-xs text-gray-500 py-1 hover:text-brand">{s}</a>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

/* ─── Category Pills (Droga Raia style) ─── */
function CategoryPills() {
  return (
    <section className="py-4 bg-gray-50">
      <div className="max-w-[1366px] mx-auto px-4">
        <div className="hidden lg:flex gap-4 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <a key={cat.name} href="#"
              className="flex flex-col items-center gap-2 min-w-[100px] p-3 rounded-xl bg-white border border-gray-100 hover:border-brand/20 hover:shadow-sm transition-all group">
              <div className="w-10 h-10 rounded-full bg-brand/5 flex items-center justify-center group-hover:bg-brand/10 transition-colors">
                <FlaskRound className="w-5 h-5 text-brand" />
              </div>
              <span className="text-[11px] text-gray-600 text-center font-medium leading-tight">{cat.name}</span>
            </a>
          ))}
        </div>
        <div className="flex lg:hidden gap-3 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <a key={cat.name} href="#"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-xs font-medium text-gray-600 hover:border-brand/30 hover:text-brand whitespace-nowrap transition-colors">
              <FlaskRound className="w-3.5 h-3.5" />
              {cat.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Hero Banner ─── */
function HeroBanner() {
  return (
    <section className="relative bg-gradient-to-br from-[#f0f5f0] via-white to-[#fff5f0] overflow-hidden">
      <div className="max-w-[1366px] mx-auto px-4 py-10 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/5 border border-brand/10 text-xs text-brand font-medium mb-4">
              <Sparkles className="w-3 h-3" /> Farmácia de Manipulação
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[0.95] mb-4">
              Sua saúde é <span className="text-brand">única</span>
              <br />seu tratamento <span className="text-green-600">personalizado</span>
            </h1>
            <p className="text-gray-500 text-sm md:text-base max-w-md mb-6 leading-relaxed">
              Fórmulas manipuladas com excelência farmacêutica. Cada prescrição é única — seu tratamento também deve ser.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full text-sm font-semibold hover:bg-green-700 transition-colors shadow-lg shadow-green-600/20">
                <MessageCircle className="w-4 h-4" /> Fale pelo WhatsApp
              </a>
              <a href={CONTACT.mapsHref} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 rounded-full text-sm font-medium hover:border-brand/30 transition-colors">
                <MapPin className="w-4 h-4" /> Av. Brasil, 815
              </a>
            </div>
          </div>
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-brand/5 via-green-50 to-brand/10 flex items-center justify-center">
                <img src="/logo-sete-lirios.jpg" alt="Sete Lírios" className="w-40 h-40 rounded-full object-cover shadow-2xl ring-4 ring-white" />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-white rounded-xl shadow-lg p-3 border border-brand/10">
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                  <span className="font-bold text-sm">{CONTACT.rating}</span>
                  <span className="text-gray-400 text-xs">({CONTACT.followers.toLocaleString()})</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Service Cards (Droga Raia style) ─── */
function ServiceCards() {
  const cards = [
    { icon: MessageCircle, label: "Fale conosco", sub: "WhatsApp • Resposta rápida", href: CONTACT.whatsappLink, color: "text-green-600" },
    { icon: MapPin, label: "Av. Brasil, 815", sub: "Vila Aparecida, Franca/SP", href: CONTACT.mapsHref, color: "text-brand" },
    { icon: Star, label: `★ ${CONTACT.rating} — ${CONTACT.followers.toLocaleString()}`, sub: "Avaliação e seguidores", href: CONTACT.instagramHref, color: "text-purple-600" },
    { icon: Clock, label: "Seg-Sex 08h-20h", sub: "Sáb 08h-18h", href: "#", color: "text-amber-600" },
  ];

  return (
    <section className="py-4">
      <div className="max-w-[1366px] mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {cards.map((card) => (
            <a key={card.label} href={card.href} target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-brand/20 hover:shadow-sm transition-all group">
              <div className={`w-10 h-10 rounded-lg bg-white flex items-center justify-center ${card.color} group-hover:scale-110 transition-transform`}>
                <card.icon className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-gray-800 truncate">{card.label}</p>
                <p className="text-[11px] text-gray-400 truncate">{card.sub}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Products Carousel ─── */
function ProductCarousel({ title }: { title: string }) {
  return (
    <section className="py-6">
      <div className="max-w-[1366px] mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg md:text-xl font-bold text-gray-900">{title}</h2>
          <a href="#" className="text-xs text-brand font-medium hover:underline">Ver todos <ArrowRight className="w-3 h-3 inline" /></a>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {featuredProducts.map((product, i) => (
            <div key={i} className="min-w-[180px] md:min-w-[200px] bg-white border border-gray-100 rounded-xl p-3 hover:shadow-md hover:border-gray-200 transition-all">
              <div className="aspect-square bg-gray-50 rounded-lg mb-3 flex items-center justify-center">
                <FlaskRound className="w-12 h-12 text-gray-200" />
              </div>
              {product.badge && (
                <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold mb-2 ${product.badgeColor || "bg-gray-100 text-gray-600"}`}>
                  {product.badge}
                </span>
              )}
              <p className="text-xs text-gray-400 mb-1">{product.category}</p>
              <h3 className="text-sm font-semibold text-gray-800 mb-2 line-clamp-2 leading-snug">{product.name}</h3>
              <p className="text-lg font-bold text-gray-900">{product.price}</p>
              <p className="text-[11px] text-gray-400">{product.parcel}</p>
              <button className="w-full mt-3 py-2 rounded-full bg-brand text-white text-xs font-semibold hover:bg-brand-dark transition-colors">
                Solicitar Orçamento
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Category Showcase ─── */
function CategoryShowcase() {
  return (
    <section className="py-6 bg-gray-50">
      <div className="max-w-[1366px] mx-auto px-4">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 mb-4">Nossas Categorias</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
          {categories.map((cat) => (
            <a key={cat.name} href="#"
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white border border-gray-100 hover:border-brand/20 hover:shadow-md transition-all group">
              <div className="w-12 h-12 rounded-full bg-brand/5 flex items-center justify-center group-hover:bg-brand/10 group-hover:scale-110 transition-all">
                <FlaskRound className="w-6 h-6 text-brand" />
              </div>
              <span className="text-xs font-semibold text-gray-700 text-center leading-tight">{cat.name}</span>
              <span className="text-[10px] text-gray-400">{cat.sub.length} tratamentos</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── About + Contact ─── */
function AboutContact() {
  return (
    <section id="contato" className="py-10">
      <div className="max-w-[1366px] mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Sobre a Sete Lírios</h2>
            <p className="text-sm text-gray-500 leading-relaxed mb-4">
              Farmácia de manipulação em Franca/SP com mais de 12 anos de experiência. 
              Fórmulas personalizadas com rigoroso controle de qualidade, insumos certificados ANVISA 
              e atendimento farmacêutico humanizado.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-full text-xs font-semibold hover:bg-green-700 transition-colors">
                <MessageCircle className="w-3.5 h-3.5" /> Fale Conosco
              </a>
              <a href={CONTACT.instagramHref} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-600 rounded-full text-xs font-medium hover:border-brand/30 transition-colors">
                <Instagram className="w-3.5 h-3.5" /> @farmaciasetelirios
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">Informações</h2>
            <div className="space-y-3">
              {[
                { icon: MapPin, label: CONTACT.address, href: CONTACT.mapsHref },
                { icon: Phone, label: `${CONTACT.phone1} / ${CONTACT.phone2}`, href: CONTACT.phoneHref },
                { icon: MessageCircle, label: `WhatsApp: ${CONTACT.whatsapp}`, href: CONTACT.whatsappLink },
                { icon: Clock, label: CONTACT.hours },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <item.icon className="w-4 h-4 text-brand shrink-0" />
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-brand transition-colors">{item.label}</a>
                  ) : (
                    <span className="text-sm text-gray-600">{item.label}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─── */
function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-10">
      <div className="max-w-[1366px] mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src="/logo-sete-lirios.jpg" alt="" className="w-8 h-8 rounded-full" />
              <p className="font-bold text-white">Sete <span className="text-brand">Lírios</span></p>
            </div>
            <p className="text-xs leading-relaxed">Farmácia de Manipulação em Franca/SP. Fórmulas personalizadas com excelência farmacêutica.</p>
          </div>
          <div>
            <h4 className="font-semibold text-white text-sm mb-3">Categorias</h4>
            <div className="space-y-1.5">
              {categories.slice(0, 4).map((c) => (
                <a key={c.name} href="#" className="block text-xs hover:text-white transition-colors">{c.name}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white text-sm mb-3">Atalhos</h4>
            <div className="space-y-1.5">
              {["Início", "Manipulação", "Alta Performance", "Fitoterápicos", "Contato"].map((l) => (
                <a key={l} href="#" className="block text-xs hover:text-white transition-colors">{l}</a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-white text-sm mb-3">Contato</h4>
            <div className="space-y-2 text-xs">
              <p>{CONTACT.address}</p>
              <p>{CONTACT.phone1}</p>
              <p>{CONTACT.hours}</p>
              <a href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-green-400 hover:text-green-300 transition-colors">
                <MessageCircle className="w-3 h-3" /> WhatsApp: {CONTACT.whatsapp}
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Sete Lírios — Todos os direitos reservados.</p>
          <a href={CONTACT.instagramHref} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Siga @farmaciasetelirios</a>
        </div>
      </div>
    </footer>
  );
}

/* ─── WhatsApp FAB ─── */
function WhatsAppFab() {
  return (
    <a href={CONTACT.whatsappLink} target="_blank" rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-40 w-14 h-14 bg-gradient-to-br from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center text-white shadow-lg shadow-[#25D366]/30 hover:scale-110 transition-transform animate-pulse-subtle"
      aria-label="WhatsApp">
      <MessageCircle className="w-6 h-6" />
    </a>
  );
}

/* ─── PAGE ─── */
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroBanner />
        <CategoryPills />
        <ServiceCards />
        <ProductCarousel title="Mais Procurados" />
        <CategoryShowcase />
        <ProductCarousel title="Alta Performance" />
        <AboutContact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}