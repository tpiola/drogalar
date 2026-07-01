import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PROCESS_STEPS } from "../constants";

export default function Process() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="processo" ref={ref} className="py-28 bg-[#0a0f1a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-5 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center gap-3"
          >
            <div className="section-divider" />
            <span className="text-[#c8a96e] text-xs font-semibold tracking-[0.2em] uppercase">
              Como funciona
            </span>
            <div className="section-divider" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-white max-w-2xl"
            style={{ fontFamily: "Playfair Display, Georgia, serif" }}
          >
            Sua jornada de{" "}
            <span className="shimmer-text">cuidado</span>{" "}
            com a Drogalar.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/55 text-lg max-w-xl"
          >
            Um processo simples, claro e humanizado — do primeiro contato até o
            acompanhamento contínuo do seu tratamento.
          </motion.p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#c8a96e]/25 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
                className="relative flex flex-col items-center text-center gap-5 group"
              >
                {/* Number circle */}
                <div className="relative">
                  <div className="w-24 h-24 rounded-full glass-card border border-[#c8a96e]/25 group-hover:border-[#c8a96e]/50 flex items-center justify-center transition-all duration-400 shadow-lg shadow-black/20">
                    <span
                      className="text-3xl font-bold shimmer-text"
                      style={{ fontFamily: "Playfair Display, serif" }}
                    >
                      {step.number}
                    </span>
                  </div>
                  {/* Glow on hover */}
                  <div className="absolute inset-0 rounded-full bg-[#c8a96e]/0 group-hover:bg-[#c8a96e]/8 transition-all duration-400 blur-xl" />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-3">
                  <h3
                    className="text-white font-semibold text-xl leading-snug"
                    style={{ fontFamily: "Playfair Display, Georgia, serif" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-white/55 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
