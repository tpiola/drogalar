"use client";

import { useEffect } from "react";
import { track } from "@vercel/analytics";

function context() {
  const query = new URLSearchParams(window.location.search);
  return { source: query.get("utm_source") || document.referrer || "direct", campaign: query.get("utm_campaign") || "none", page: window.location.pathname };
}

export default function ConversionTracking() {
  useEffect(() => {
    track("page_view", context());
    const handleClick = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest("a");
      if (!anchor) return;
      const detail = context();
      if (anchor.classList.contains("goal")) track("category_select", { ...detail, category: anchor.dataset.category || "unknown" });
      if (anchor.dataset.product) track("product_view", { ...detail, product: anchor.dataset.product });
      if (anchor.dataset.heroCta) track("hero_cta", detail);
      if (anchor.href.startsWith("https://wa.me/")) {
        track("whatsapp_open", { ...detail, intent: anchor.dataset.intent || "general", product: anchor.dataset.product || "none" });
        const url = new URL(anchor.href);
        const message = url.searchParams.get("text") || "Olá!";
        if (!message.includes("Origem:")) {
          url.searchParams.set("text", `${message}\n\nOrigem: ${window.location.href}`);
          anchor.href = url.toString();
        }
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
  return null;
}
