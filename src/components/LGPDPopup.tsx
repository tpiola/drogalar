"use client";

import { useEffect } from "react";

export default function LGPDPopup() {
  useEffect(() => {
    if (!localStorage.getItem("lgpd-consent")) {
      const banner = document.getElementById("lgpd-banner");
      if (banner) {
        banner.classList.remove("translate-y-full");
        banner.classList.remove("hidden");
      }
    }
  }, []);

  const accept = () => {
    const banner = document.getElementById("lgpd-banner");
    if (banner) banner.classList.add("hidden");
    localStorage.setItem("lgpd-consent", "true");
  };

  return (
    <div
      id="lgpd-banner"
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#0a1628]/95 backdrop-blur-xl border-t border-[#c9a84c]/10 p-4 translate-y-full transition-transform duration-500 hidden"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/60 text-xs sm:text-sm leading-relaxed">
          Utilizamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa{" "}
          <a href="/privacidade" className="text-[#c9a84c] hover:underline">
            Política de Privacidade
          </a>.
        </p>
        <button
          onClick={accept}
          className="shrink-0 px-5 py-2 rounded-full text-xs font-semibold"
          style={{
            background: "linear-gradient(135deg, #c9a84c, #a88a2e)",
            color: "#0a1628",
          }}
        >
          Aceitar
        </button>
      </div>
    </div>
  );
}