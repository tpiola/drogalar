import { ArrowRight, Check, Clock3, Instagram, MapPin, Menu, MessageCircle, Phone, Search, ShieldCheck, ShoppingBag, Zap } from "lucide-react";
import { BUSINESS, faq, goals, products, services, steps, whatsappUrl } from "./data";
import ConversionTracking from "@/components/ConversionTracking";

const quoteUrl = whatsappUrl("Olá! Quero solicitar um orçamento. Vou enviar a foto da minha receita.");

export default function Home() {
  const schema = { "@context": "https://schema.org", "@type": "Pharmacy", name: BUSINESS.name, telephone: BUSINESS.phone, address: { "@type": "PostalAddress", streetAddress: "Av. Brasil, 815", addressLocality: "Franca", addressRegion: "SP", addressCountry: "BR" } };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <header className="topbar">
      <a className="brand" href="#inicio" aria-label="Sete Lírios — início"><img className="brandLogo" src="/brand/sete-lirios-logo.svg" alt="Sete Lírios Farmácia de Manipulação" /></a>
      <nav aria-label="Navegação principal"><a href="#objetivos">Por objetivo</a><a href="#produtos">Produtos</a><a href="#como-funciona">Como comprar</a><a href="#contato">Contato</a></nav>
      <a className="button compact" href={quoteUrl} target="_blank" rel="noreferrer"><MessageCircle aria-hidden="true" />Solicitar orçamento</a>
      <details className="mobileMenu"><summary aria-label="Abrir menu"><Menu /></summary><div><a href="#como-funciona">Como funciona</a><a href="#especialidades">Especialidades</a><a href="#duvidas">Dúvidas</a><a href="#contato">Contato</a></div></details>
    </header>

    <main id="inicio">
      <section className="hero section">
        <div className="heroCopy">
          <p className="eyebrow"><Zap /> Prevenção é performance diária</p>
          <h1>Prepare o corpo para <em>ir além.</em></h1>
          <p className="lead">Vitaminas, minerais, antioxidantes e fórmulas personalizadas para complementar sua rotina com orientação farmacêutica.</p>
          <div className="actions"><a className="button" href="#produtos" data-hero-cta="true"><ShoppingBag />Explorar produtos</a><a className="textLink" href={quoteUrl} data-intent="prescription" target="_blank" rel="noreferrer">Enviar receita <ArrowRight /></a></div>
          <p className="microcopy"><ShieldCheck />A dispensação e a manipulação seguem as exigências aplicáveis a cada fórmula.</p>
        </div>
        <div className="heroVisual heroPhoto" role="img" aria-label="Linha premium Sete Lírios em embalagens âmbar sobre pedra natural"><div className="seal"><Check />Conferência<br/>farmacêutica</div></div>
      </section>

      <section className="trustStrip" aria-label="Diferenciais"><span><Check />Orçamento pelo WhatsApp</span><span><Check />Atendimento em Franca</span><span><Check />Orientação farmacêutica</span></section>

      <section className="brandStory" aria-label="Universo Sete Lírios">
        <figure className="brandStoryMain"><img src="/images/brand/rotina-preventiva-hd.png" alt="Mulher em uma rotina preventiva segurando uma embalagem Sete Lírios" /><figcaption><span>Rotina preventiva</span><strong>Cuidado que acompanha o seu ritmo.</strong></figcaption></figure>
        <div><figure><img src="/images/brand/catalogo-hd.png" alt="Embalagens Sete Lírios em composição mineral com lírios" /><figcaption><span>Fórmulas personalizadas</span><strong>Precisão com identidade.</strong></figcaption></figure><figure><img src="/images/brand/laboratorio-hd.png" alt="Farmacêutica conferindo formulações no laboratório Sete Lírios" /><figcaption><span>Confiança farmacêutica</span><strong>Do laboratório à sua rotina.</strong></figcaption></figure></div>
      </section>

      <section id="objetivos" className="section shopSection">
        <div className="shopTitle"><div><p className="eyebrow">Encontre do seu jeito</p><h2>Compre por objetivo.</h2></div><a className="textLink" href="#produtos">Ver vitrine <ArrowRight /></a></div>
        <div className="goalGrid">{goals.map(goal => <a href={whatsappUrl(`Olá! Quero conhecer os produtos para ${goal.label.toLowerCase()}.`)} data-category={goal.label} data-intent="category" target="_blank" rel="noreferrer" className={`goal ${goal.tone}`} key={goal.label}><span>{goal.code}</span><b>{goal.label}</b><ArrowRight /></a>)}</div>
      </section>

      <section id="produtos" className="section productSection">
        <div className="shopTitle"><div><p className="eyebrow">Seleção Sete Lírios</p><h2>Essenciais da rotina.</h2></div><div className="catalogHint"><Search /> Escolha e consulte disponibilidade</div></div>
        <div className="productGrid">{products.map(product => <article className="productCard" key={product.name}>
          <div className={`productVisual ${product.tone}`}>{product.tag && <span className="tag">{product.tag}</span>}<div className="productBottle"><small>SETE LÍRIOS</small><strong>{product.name}</strong><span>{product.detail}</span></div></div>
          <p>{product.goal}</p><h3>{product.name}</h3><span className="productDetail">{product.detail}</span>
          <a href={whatsappUrl(`Olá! Quero consultar disponibilidade e valor de ${product.name} — ${product.detail}.`)} data-product={product.name} data-intent="product" target="_blank" rel="noreferrer">Consultar produto <ArrowRight /></a>
        </article>)}</div>
        <p className="disclaimer">Imagens ilustrativas. Composição, concentração, apresentação, disponibilidade e necessidade de prescrição devem ser confirmadas com a equipe farmacêutica.</p>
      </section>

      <section id="como-funciona" className="section process">
        <div className="sectionHead"><p className="eyebrow">Simples do início ao fim</p><h2>Da receita ao pedido em três etapas.</h2><p>Sem catálogo confuso ou recomendação automática: primeiro entendemos sua prescrição.</p></div>
        <div className="steps">{steps.map(step => <article key={step.n}><span>{step.n}</span><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
        <a className="button secondary" href={quoteUrl} target="_blank" rel="noreferrer">Começar meu orçamento <ArrowRight /></a>
      </section>

      <section id="especialidades" className="section specialties">
        <div className="sectionHead"><p className="eyebrow">Possibilidades de cuidado</p><h2>Formulações pensadas para necessidades individuais.</h2></div>
        <div className="serviceGrid">{services.map((service, index) => <article key={service.title}><span>0{index + 1}</span><h3>{service.title}</h3><p>{service.text}</p><a href={whatsappUrl(`Olá! Gostaria de informações sobre ${service.title.toLowerCase()}.`)} target="_blank" rel="noreferrer">Consultar equipe <ArrowRight /></a></article>)}</div>
        <p className="disclaimer">As informações desta página não substituem consulta, diagnóstico ou prescrição de profissional habilitado.</p>
      </section>

      <section className="section prescription">
        <div><p className="eyebrow">Já está com a receita?</p><h2>Uma foto legível é o primeiro passo.</h2><p>Inclua todas as páginas, mantenha os dados visíveis e evite reflexos. Nossa equipe fará a conferência antes do orçamento.</p></div>
        <a className="button light" href={quoteUrl} target="_blank" rel="noreferrer"><MessageCircle />Enviar agora</a>
      </section>

      <section id="duvidas" className="section faq">
        <div className="sectionHead"><p className="eyebrow">Antes de solicitar</p><h2>Dúvidas frequentes.</h2></div>
        <div>{faq.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
      </section>

      <section id="contato" className="section contact">
        <div><p className="eyebrow">Atendimento local</p><h2>Fale com a Sete Lírios.</h2><p>Para orçamento, envie sua receita pelo WhatsApp. Para outras informações, use os canais abaixo.</p><a className="button" href={quoteUrl} target="_blank" rel="noreferrer"><MessageCircle />Solicitar orçamento</a></div>
        <address><a href={BUSINESS.maps} target="_blank" rel="noreferrer"><MapPin /><span>{BUSINESS.address}<small>Ver no mapa</small></span></a><a href={BUSINESS.phoneHref}><Phone /><span>{BUSINESS.phone}<small>Ligar agora</small></span></a><div><Clock3 /><span>{BUSINESS.hours}<small>Horário informado pela empresa</small></span></div><a href={BUSINESS.instagram} target="_blank" rel="noreferrer"><Instagram /><span>@farmaciasetelirios<small>Abrir Instagram</small></span></a></address>
      </section>
    </main>

    <footer><a className="brand" href="#inicio"><img className="brandLogo" src="/brand/sete-lirios-logo.svg" alt="Sete Lírios Farmácia de Manipulação" /></a><p>© {new Date().getFullYear()} Sete Lírios. Conteúdo informativo. · <a href="/privacidade">Privacidade</a></p><a href={quoteUrl} data-intent="footer" target="_blank" rel="noreferrer">WhatsApp: {BUSINESS.whatsappLabel}</a></footer>
    <a className="whatsappFab" href={quoteUrl} target="_blank" rel="noreferrer" aria-label="Solicitar orçamento pelo WhatsApp"><MessageCircle /></a>
    <ConversionTracking />
  </>;
}
