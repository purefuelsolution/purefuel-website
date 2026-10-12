import type { MetadataRoute } from "next";
import { site } from "@/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [...site.nav.map((n) => n.href), "/privacy-policy"];
  const lastModified = new Date();
  return routes.map((path) => ({
    url: `${site.url}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: path === "/" ? 1 : path === "/privacy-policy" ? 0.3 : 0.8,
  }));
}
