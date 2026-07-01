import { BRAND } from "../constants";

export default function Footer() {
  const year = new Date().getFullYear();
  const whatsappUrl = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(BRAND.whatsappMessage)}`;

  return (
    <footer className="bg-[#060b14] border-t border-white/5 py-14">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white/5">
          {/* Brand */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#c8a96e] to-[#e8c87a] flex items-center justify-center">
                <span className="text-[#0a0f1a] font-bold text-lg" style={{ fontFamily: "Georgia, serif" }}>
                  D
                </span>
              </div>
              <div>
                <p className="text-white font-semibold text-lg" style={{ fontFamily: "Playfair Display, serif" }}>
                  {BRAND.name}
                </p>
                <p className="text-[#c8a96e] text-xs tracking-[0.15em] uppercase">{BRAND.tagline}</p>
              </div>
            </div>
            <p className="text-white/45 text-sm leading-relaxed max-w-xs">
              {BRAND.description}
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#c8a96e] hover:text-[#e8c87a] text-sm font-medium transition-colors w-fit"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Falar no WhatsApp
            </a>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4">
            <p className="text-white/80 font-semibold text-sm tracking-wider uppercase">
              Navegação
            </p>
            <nav className="flex flex-col gap-3">
              {["Início", "Sobre", "Serviços", "Diferenciais", "Depoimentos", "Localização"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace("í", "i")}`}
                  className="text-white/45 hover:text-[#c8a96e] text-sm transition-colors duration-200"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-4">
            <p className="text-white/80 font-semibold text-sm tracking-wider uppercase">
              Contato
            </p>
            <div className="flex flex-col gap-3 text-sm text-white/45">
              <p>📍 {BRAND.address}</p>
              <p>📱 {BRAND.whatsapp}</p>
              <p>📸 {BRAND.instagram}</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">
            © {year} {BRAND.name}. Todos os direitos reservados.
          </p>
          <p className="text-white/15 text-xs">
            Farmácia regulamentada conforme legislação vigente da ANVISA.
          </p>
        </div>
      </div>
    </footer>
  );
}
