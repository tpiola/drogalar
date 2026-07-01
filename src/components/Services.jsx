import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SERVICES } from "../constants";
import { BRAND } from "../constants";

const whatsappUrl = `https://wa.me/${BRAND.whatsapp}?text=${encodeURIComponent(BRAND.whatsappMessage)}`;

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="servicos" ref={ref} className="py-28 bg-[#0a0f1a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-5 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3"
          >
            <div className="section-divider" />
            <span className="text-[#c8a96e] text-xs font-semibold tracking-[0.2em] uppercase">
              Nossos serviços
            </span>
            <div className="section-divider" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-white max-w-2xl"
            style={{ fontFamily: "Playfair Display, Georgia, serif" }}
          >
            Soluções farmacêuticas para cada{" "}
            <span className="shimmer-text">necessidade.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/55 text-lg max-w-xl"
          >
            Do medicamento manipulado ao cuidado cotidiano, oferecemos soluções
            farmacêuticas com rigor técnico e atenção humanizada.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {SERVICES.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group glass-card rounded-3xl p-7 flex flex-col gap-5 hover:border-[#c8a96e]/30 hover:bg-white/[0.07] hover:-translate-y-2 transition-all duration-400 cursor-default"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#c8a96e]/15 to-[#c8a96e]/5 flex items-center justify-center text-2xl border border-[#c8a96e]/15 group-hover:border-[#c8a96e]/35 transition-all duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3
                className="text-white font-semibold text-xl leading-snug"
                style={{ fontFamily: "Playfair Display, Georgia, serif" }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-white/55 text-sm leading-relaxed flex-1">
                {service.description}
              </p>

              {/* Benefits */}
              <ul className="flex flex-col gap-2">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2 text-sm text-white/60">
                    <span className="text-[#c8a96e] mt-0.5 flex-shrink-0">✓</span>
                    {b}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 text-[#c8a96e] text-sm font-medium flex items-center gap-1.5 group/link hover:gap-3 transition-all duration-300"
              >
                Quero saber mais
                <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
