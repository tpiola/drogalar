import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TESTIMONIALS } from "../constants";

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="depoimentos" ref={ref} className="py-28 bg-gradient-to-b from-[#0d1420] to-[#0a0f1a]">
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
              Depoimentos
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
            O que dizem nossos{" "}
            <span className="shimmer-text">pacientes.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/55 text-lg max-w-lg"
          >
            A confiança dos nossos pacientes é o nosso maior diferencial.
          </motion.p>
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="group glass-card rounded-3xl p-8 flex flex-col gap-5 hover:border-[#c8a96e]/25 hover:bg-white/[0.06] transition-all duration-400 hover:-translate-y-1"
            >
              {/* Large quote mark */}
              <div
                className="text-6xl text-[#c8a96e]/30 leading-none select-none font-serif -mb-3"
                aria-hidden="true"
              >
                &ldquo;
              </div>

              {/* Quote */}
              <p className="text-white/65 text-base leading-relaxed flex-1 italic">
                {testimonial.quote}
              </p>

              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, si) => (
                  <span key={si} className="text-[#c8a96e] text-sm">★</span>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-1 border-t border-white/8">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#c8a96e]/30 to-[#c8a96e]/10 flex items-center justify-center text-[#c8a96e] font-bold text-sm border border-[#c8a96e]/20">
                  {testimonial.name.charAt(1).toUpperCase()}
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{testimonial.name}</p>
                  <p className="text-white/40 text-xs">{testimonial.context}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center text-white/25 text-xs mt-8"
        >
          * Substitua os placeholders acima pelos depoimentos reais dos seus pacientes.
        </motion.p>
      </div>
    </section>
  );
}
