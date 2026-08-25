import type { MetadataRoute } from "next";

const SITE_URL = "https://drogalar.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: SITE_URL },
    { url: `${SITE_URL}/privacidade` },
  ];
}
