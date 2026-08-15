import type { MetadataRoute } from "next";
import { SERVICES, SITE_URL } from "@/src/data/site";

const STATIC_ROUTES: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }> = [
   { path: "/", priority: 1, changeFrequency: "weekly" },
   { path: "/services", priority: 0.9, changeFrequency: "weekly" },
   { path: "/maintenance", priority: 0.9, changeFrequency: "monthly" },
   { path: "/emergency", priority: 0.9, changeFrequency: "monthly" },
   { path: "/why-us", priority: 0.7, changeFrequency: "monthly" },
   { path: "/procurement", priority: 0.7, changeFrequency: "monthly" },
   { path: "/case-studies", priority: 0.6, changeFrequency: "monthly" },
   { path: "/social-value", priority: 0.6, changeFrequency: "monthly" },
   { path: "/compliance", priority: 0.6, changeFrequency: "monthly" },
   { path: "/accreditations", priority: 0.6, changeFrequency: "monthly" },
   { path: "/health-and-safety", priority: 0.6, changeFrequency: "monthly" },
   { path: "/tenants", priority: 0.5, changeFrequency: "monthly" },
   { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
   const now = new Date();

   const staticEntries = STATIC_ROUTES.map((route) => ({
      url: `${SITE_URL}${route.path}`,
      lastModified: now,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
   }));

   const serviceEntries = SERVICES.map((service) => ({
      url: `${SITE_URL}/services/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
   }));

   return [...staticEntries, ...serviceEntries];
}
