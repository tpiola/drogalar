import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap { const base = process.env.NEXT_PUBLIC_SITE_URL || "https://sete-lirios.vercel.app"; return [{ url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 }, { url: `${base}/privacidade`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 }]; }
