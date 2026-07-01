import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BRAND } from "../constants";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.1, ease: "easeOut" },
  }),
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="sobre" ref={ref} className="py-28 bg-[#0d1420] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-20 items-center">
        {/* Photo / Visual Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.85, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-start"
        >
          {/* Decorative floating accent */}
          <div className="absolute -top-8 -left-8 w-48 h-48 bg-[#c8a96e]/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-[#1a3a6e]/10 rounded-full blur-3xl" />

          {/* Main image card */}
          <div className="relative">
            <div className="absolute inset-0 rounded-3xl border border-[#c8a96e]/15 scale-105" />
            {BRAND.expertPhoto ? (
              <img
                src={BRAND.expertPhoto}
                alt={BRAND.expertPhotoAlt}
                className="relative z-10 w-full max-w-md h-[520px] object-cover object-top rounded-2xl shadow-2xl shadow-black/60"
              />
            ) : (
              <div className="relative z-10 w-full max-w-md h-[520px] glass-card rounded-2xl flex flex-col items-center justify-center gap-4 shadow-2xl shadow-black/60">
                <div className="text-7xl">🧑‍⚕️</div>
                <p className="text-[#c8a96e] font-medium text-center px-10">
                  [INSERIR FOTO EDITORIAL DO PROFISSIONAL]
                </p>
                <p className="text-white/40 text-sm text-center px-10">
                  Layout editorial — substitua com foto real
                </p>
              </div>
            )}

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -right-6 z-20 glass-card rounded-2xl p-5 shadow-xl border border-[#c8a96e]/20 min-w-[150px]"
            >
              <p className="text-[#c8a96e] font-bold text-3xl" style={{ fontFamily: "Playfair Display, serif" }}>
                [+N]
              </p>
              <p className="text-white/60 text-xs mt-1">Pacientes atendidos</p>
            </motion.div>
          </div>
        </motion.div>

        {/* Text Column */}
        <div className="flex flex-col gap-7">
          {/* Section label */}
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="flex items-center gap-3"
          >
            <div className="section-divider" />
            <span className="text-[#c8a96e] text-xs font-semibold tracking-[0.2em] uppercase">
              Sobre nós
            </span>
          </motion.div>

          {/* Title */}
          <motion.h2
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="text-4xl lg:text-5xl font-bold text-white leading-tight"
            style={{ fontFamily: "Playfair Display, Georgia, serif" }}
          >
            Uma farmácia pensada em cada{" "}
            <span className="shimmer-text">detalhe.</span>
          </motion.h2>

          {/* Story paragraphs */}
          <motion.p
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="text-white/65 text-base leading-relaxed"
          >
            A <strong className="text-white/90">Drogalar</strong> nasceu da convicção de que cada paciente
            merece um atendimento à altura da sua necessidade — com escuta atenta, técnica apurada e
            produtos desenvolvidos com responsabilidade farmacêutica de ponta.
          </motion.p>

          <motion.p
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="text-white/65 text-base leading-relaxed"
          >
            [INSERIR HISTÓRIA DO FUNDADOR/FARMACÊUTICO RESPONSÁVEL: trajetória, formação, motivação
            para criar a farmácia e visão de cuidado com o paciente.]
          </motion.p>

          {/* Values row */}
          <motion.div
            variants={fadeUp}
            custom={4}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="grid grid-cols-2 gap-4 pt-2"
          >
            {[
              { icon: "🎯", label: "Missão", text: "Cuidar com precisão e humanidade." },
              { icon: "👁️", label: "Visão", text: "Ser referência em farmácia personalizada." },
              { icon: "💡", label: "Valores", text: "Ética, excelência e confiança." },
              { icon: "❤️", label: "Cuidado", text: "O paciente no centro de tudo." },
            ].map((item) => (
              <div
                key={item.label}
                className="glass-card rounded-2xl p-4 border border-white/5 hover:border-[#c8a96e]/20 transition-all duration-300"
              >
                <p className="text-xl mb-1">{item.icon}</p>
                <p className="text-[#c8a96e] text-xs font-semibold tracking-wider uppercase mb-1">
                  {item.label}
                </p>
                <p className="text-white/60 text-sm">{item.text}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
