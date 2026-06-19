import type { MetadataRoute } from "next";
import { getServiceSlugs } from "@/lib/services";
import { SITE_URL } from "@/lib/site";

export const dynamic = "force-static";

const STATIC_ROUTES = [
  { path: "", priority: 1, changeFrequency: "weekly" as const },
  { path: "/contact", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/case-studies", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/industries", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/partners", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/why-scaleview", priority: 0.7, changeFrequency: "monthly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries = STATIC_ROUTES.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));

  const serviceEntries = getServiceSlugs().map((slug) => ({
    url: `${SITE_URL}/services/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  return [...staticEntries, ...serviceEntries];
}
