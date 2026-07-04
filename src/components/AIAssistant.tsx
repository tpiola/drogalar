"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Sparkles, Send, X } from "lucide-react";

const suggestions = [
  "Quero ganhar massa muscular",
  "Preciso de mais energia nos treinos",
  "Quero emagrecer com saúde",
  "Melhorar minha imunidade",
  "Reposição hormonal",
];

const responses: Record<string, string> = {
  "quero ganhar massa muscular": "💪 Para hipertrofia, recomendo: Creatina Monohidratada 5g/dia + Whey Protein Isolado 30g pós-treino + BCAA 2:1:1. Podemos manipular tudo sob medida para seu peso e biotipo. Quer saber o preço?",
  "preciso de mais energia nos treinos": "⚡ Energia limpa! Sugiro: Pré-Treino personalizado com Cafeína 200mg + Beta-Alanina + Citrulina Malato. Sem tremedeira, sem crash. Também temos Ômega 3 para recuperação. Vamos montar seu kit?",
  "quero emagrecer com saúde": "🌿 Emagrecimento inteligente: L-Carnitina + Termogênico Natural + Cromo Quelado + Vitaminas do Complexo B. Tudo manipulado na dosagem ideal para você. Combinado com atividade física, os resultados aparecem!",
  "melhorar minha imunidade": "🛡️ Blindagem imunológica: Vitamina C Lipossomal + Vitamina D3 5.000 UI + Zinco Quelado + Própolis. Absorção máxima, resultado real. Quer saber mais?",
  "reposição hormonal": "⚖️ Reposição hormonal bioidêntica — manipulada sob medida com base na sua prescrição médica. Testosterona, progesterona, estradiol, DHEA, melatonina. Consulte seu médico e traga a receita!",
};

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: "bot" | "user"; text: string }[]>([
    { role: "bot", text: "👋 Olá! Sou o assistente da Sete Lírios. Me diga seu objetivo que recomendo a fórmula ideal para você!" },
  ]);
  const [input, setInput] = useState("");

  const send = (text: string) => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { role: "user", text }]);

    const lower = text.toLowerCase().trim();
    let reply = "Ótima escolha! Mande uma mensagem no nosso WhatsApp que preparamos uma proposta personalizada para você.";
    for (const [key, val] of Object.entries(responses)) {
      if (lower.includes(key)) {
        reply = val;
        break;
      }
    }
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "bot", text: reply }]);
    }, 600);
    setInput("");
  };

  return (
    <>
      {/* Trigger */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(!open)}
        className="fixed bottom-20 right-5 sm:bottom-24 sm:right-5 z-40 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white shadow-xl shadow-blue-500/30"
        aria-label="Assistente IA"
      >
        <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
      </motion.button>

      {/* Chat */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-36 right-4 sm:right-5 z-40 w-[90vw] sm:w-80 lg:w-96 bg-navy border border-gold/15 rounded-2xl shadow-2xl shadow-black/40 overflow-hidden"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gold/10 bg-gradient-to-r from-gold-dark to-gold">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-navy" />
                <span className="text-xs font-bold text-navy">Assistente IA</span>
              </div>
              <button onClick={() => setOpen(false)} className="text-navy/60 hover:text-navy">
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Messages */}
            <div className="h-72 sm:h-80 overflow-y-auto p-3 space-y-3 scrollbar-hide">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] p-2.5 rounded-xl text-xs sm:text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-gold/20 text-gold rounded-br-sm"
                        : "bg-white/[0.05] text-white/80 rounded-bl-sm border border-white/[0.06]"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Suggestions */}
            <div className="px-3 pb-1.5 flex gap-1.5 overflow-x-auto scrollbar-hide">
              {suggestions.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="shrink-0 px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/50 text-[10px] hover:text-gold hover:border-gold/20 transition-all whitespace-nowrap"
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="flex items-center gap-2 p-3 border-t border-gold/5">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && send(input)}
                placeholder="Digite seu objetivo..."
                className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-full px-3 py-2 text-xs text-white/80 placeholder:text-white/20 outline-none focus:border-gold/30 transition-colors"
              />
              <button
                onClick={() => send(input)}
                className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold hover:bg-gold/30 transition-colors"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}