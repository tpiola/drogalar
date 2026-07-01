import { motion } from "framer-motion";
import { BRAND } from "../constants";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, delay: i * 0.15, ease: "easeOut" } }),
};

const whatsappUrl = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(BRAND.whatsappMessage)}`;

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video Background */}
      {BRAND.heroVideo ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src={BRAND.heroVideo}
        />
      ) : (
        /* Fallback decorative background */
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1a] via-[#0e1628] to-[#0a0f1a]">
          {/* Decorative orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#c8a96e]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#1a3a6e]/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c8a96e]/3 rounded-full blur-[120px]" />
          {/* Subtle grid pattern */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(200,169,110,1) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,110,1) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>
      )}

      {/* Overlay */}
      <div className="hero-gradient absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Text Column */}
        <div className="flex flex-col gap-8">
          {/* Badge */}
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate="show"
            className="flex items-center gap-2 w-fit"
          >
            <div className="h-px w-8 bg-[#c8a96e]" />
            <span className="text-[#c8a96e] text-xs font-semibold tracking-[0.2em] uppercase">
              Farmácia &amp; Manipulação
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate="show"
            className="text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.08]"
            style={{ fontFamily: "Playfair Display, Georgia, serif" }}
          >
            Cuidado
            <br />
            <span className="shimmer-text">farmacêutico</span>
            <br />
            que transforma.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="show"
            className="text-white/65 text-lg lg:text-xl leading-relaxed max-w-lg"
          >
            Medicamentos manipulados com precisão técnica, atendimento humanizado
            e acompanhamento farmacêutico personalizado — porque cada paciente
            é único.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate="show"
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 bg-[#c8a96e] hover:bg-[#e8c87a] text-[#0a0f1a] font-semibold px-8 py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-[#c8a96e]/25 hover:shadow-[#c8a96e]/50 hover:-translate-y-1 text-base"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current flex-shrink-0" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Agendar pelo WhatsApp
            </a>
            <a
              href="#servicos"
              className="flex items-center justify-center gap-2 border border-white/20 hover:border-[#c8a96e]/50 text-white/80 hover:text-[#c8a96e] font-medium px-8 py-4 rounded-2xl transition-all duration-300 text-base"
            >
              Conhecer os serviços
            </a>
          </motion.div>

          {/* Social proof chips */}
          <motion.div
            variants={fadeUp}
            custom={4}
            initial="hidden"
            animate="show"
            className="flex flex-wrap gap-3"
          >
            {[
              { icon: "⭐", label: "Atendimento 5 estrelas" },
              { icon: "🔬", label: "Manipulação de precisão" },
              { icon: "🤝", label: "Farmacêutico dedicado" },
              { icon: "📋", label: "[INSERIR ANOS]+ anos de experiência" },
            ].map((chip) => (
              <div
                key={chip.label}
                className="flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm text-white/70"
              >
                <span>{chip.icon}</span>
                <span>{chip.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Expert Photo Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
          className="hidden lg:flex justify-center"
        >
          <div className="relative">
            {/* Decorative border frame */}
            <div className="absolute -inset-3 rounded-3xl border border-[#c8a96e]/20" />
            <div className="absolute -inset-6 rounded-3xl border border-[#c8a96e]/8" />
            {/* Photo or placeholder */}
            {BRAND.expertPhoto ? (
              <img
                src={BRAND.expertPhoto}
                alt={BRAND.expertPhotoAlt}
                className="relative z-10 w-80 xl:w-96 h-[520px] object-cover object-top rounded-2xl shadow-2xl shadow-black/50"
              />
            ) : (
              <div className="relative z-10 w-80 xl:w-96 h-[520px] rounded-2xl glass-card flex flex-col items-center justify-center gap-4 shadow-2xl shadow-black/50">
                <div className="text-6xl">👨‍⚕️</div>
                <p className="text-[#c8a96e] font-medium text-center px-8">
                  [INSERIR FOTO DO FARMACÊUTICO]
                </p>
                <p className="text-white/40 text-sm text-center px-8">
                  Substitua com a foto real do profissional responsável
                </p>
              </div>
            )}
            {/* Gold accent badge */}
            <div className="absolute -bottom-4 -right-4 z-20 glass-card rounded-2xl px-5 py-3 shadow-xl border border-[#c8a96e]/20">
              <p className="text-[#c8a96e] font-bold text-lg" style={{ fontFamily: "Playfair Display, serif" }}>
                [INSERIR ANOS]+
              </p>
              <p className="text-white/60 text-xs">anos de excelência</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs tracking-widest uppercase">Rolar</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-[#c8a96e]/60 to-transparent"
        />
      </motion.div>
    </section>
  );
}
