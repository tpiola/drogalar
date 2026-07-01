import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BRAND } from "../constants";

export default function Location() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BRAND.mapsQuery)}`;

  return (
    <section id="localizacao" ref={ref} className="py-28 bg-[#0d1420]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-5 mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="flex items-center gap-3"
          >
            <div className="section-divider" />
            <span className="text-[#c8a96e] text-xs font-semibold tracking-[0.2em] uppercase">
              Localização
            </span>
            <div className="section-divider" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-white max-w-xl"
            style={{ fontFamily: "Playfair Display, Georgia, serif" }}
          >
            Venha nos{" "}
            <span className="shimmer-text">visitar.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-white/55 text-lg max-w-lg"
          >
            Estamos em{" "}
            <strong className="text-white/80">{BRAND.city}</strong> e prontos
            para receber você com a atenção que você merece.
          </motion.p>
        </div>

        {/* Map + Info grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="grid lg:grid-cols-5 gap-6 items-start"
        >
          {/* Map embed */}
          <div className="lg:col-span-3 rounded-3xl overflow-hidden border border-[#c8a96e]/15 shadow-2xl shadow-black/40 relative group">
            {/* Clickable map overlay */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir no Google Maps"
              className="absolute inset-0 z-10 bg-transparent hover:bg-[#c8a96e]/5 transition-colors duration-300 flex items-end justify-end p-4 opacity-0 group-hover:opacity-100"
            >
              <span className="bg-[#c8a96e] text-[#0a0f1a] text-xs font-bold px-3 py-1.5 rounded-xl shadow-lg">
                Abrir no Maps →
              </span>
            </a>
            <iframe
              title="Localização Drogalar"
              width="100%"
              height="400"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps?q=${encodeURIComponent(BRAND.mapsQuery)}&output=embed`}
              className="w-full h-[400px] grayscale hover:grayscale-0 transition-all duration-500 opacity-80 hover:opacity-100"
            />
          </div>

          {/* Info panel */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Address card */}
            <div className="glass-card rounded-3xl p-7 border border-[#c8a96e]/15">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#c8a96e]/15 flex items-center justify-center text-lg">
                  📍
                </div>
                <p className="text-white font-semibold">Endereço</p>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">{BRAND.address}</p>
            </div>

            {/* WhatsApp card */}
            <div className="glass-card rounded-3xl p-7 border border-[#c8a96e]/15">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#c8a96e]/15 flex items-center justify-center text-lg">
                  📱
                </div>
                <p className="text-white font-semibold">WhatsApp</p>
              </div>
              <p className="text-white/60 text-sm">{BRAND.whatsapp}</p>
            </div>

            {/* Instagram card */}
            <div className="glass-card rounded-3xl p-7 border border-[#c8a96e]/15">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#c8a96e]/15 flex items-center justify-center text-lg">
                  📸
                </div>
                <p className="text-white font-semibold">Instagram</p>
              </div>
              <p className="text-white/60 text-sm">{BRAND.instagram}</p>
            </div>

            {/* Maps CTA button */}
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#c8a96e] hover:bg-[#e8c87a] text-[#0a0f1a] font-semibold px-6 py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-[#c8a96e]/20 hover:-translate-y-0.5 text-sm"
            >
              📍 Abrir rota no Google Maps
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
