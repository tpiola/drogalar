import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { DIFFERENTIALS } from "../constants";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Differentials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="diferenciais" ref={ref} className="py-28 bg-gradient-to-b from-[#0d1420] to-[#0a0f1a] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-5 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center gap-3"
          >
            <div className="section-divider" />
            <span className="text-[#c8a96e] text-xs font-semibold tracking-[0.2em] uppercase">
              Nossos diferenciais
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
            Por que escolher a{" "}
            <span className="shimmer-text">Drogalar?</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/55 text-lg max-w-xl"
          >
            Nossa entrega vai além do medicamento — oferecemos cuidado integral,
            precisão técnica e uma experiência farmacêutica de alto padrão.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {DIFFERENTIALS.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              className="group glass-card rounded-3xl p-8 hover:border-[#c8a96e]/25 hover:bg-white/[0.06] transition-all duration-400 hover:-translate-y-1"
            >
              {/* Icon circle */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c8a96e]/20 to-[#c8a96e]/5 flex items-center justify-center text-2xl mb-5 border border-[#c8a96e]/10 group-hover:border-[#c8a96e]/30 transition-all duration-300">
                {item.icon}
              </div>

              <h3
                className="text-white font-semibold text-xl mb-3 leading-snug"
                style={{ fontFamily: "Playfair Display, Georgia, serif" }}
              >
                {item.title}
              </h3>

              <p className="text-white/55 text-sm leading-relaxed">
                {item.text}
              </p>

              {/* Bottom gold accent line */}
              <div className="mt-6 h-0.5 w-0 group-hover:w-12 bg-gradient-to-r from-[#c8a96e] to-transparent transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
