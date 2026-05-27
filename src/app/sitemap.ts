import type { MetadataRoute } from "next";
import { reader } from "@/lib/keystaticReader";

const SITE_URL = "https://lesliefolcarelli.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  // Pages statiques
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: "monthly", priority: 1.0 },
    { url: `${SITE_URL}/leslie-folcarelli`, lastModified: now, changeFrequency: "yearly", priority: 0.9 },
    { url: `${SITE_URL}/pourquoi-le-tango`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${SITE_URL}/cours-tango-nice`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/cours-tango-nice/collectifs`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/cours-tango-nice/prives`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/cours-tango-nice/stages`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/evenements-tango`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/evenements-tango/milonga-nice`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/evenements-tango/show-tango`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/evenements-tango/dj-tango`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/evenements-tango/tango-mariage-nice`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/galerie`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
  ];

  // Événements à venir depuis Keystatic — frais aux yeux de Google
  try {
    const events = await reader.collections.events.all();
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const eventRoutes: MetadataRoute.Sitemap = events
      .filter((e) => new Date(e.entry.date + "T23:59:59") >= today)
      .map((e) => ({
        url: `${SITE_URL}/evenements-tango`,
        lastModified: new Date(e.entry.date + "T12:00:00"),
        changeFrequency: "daily" as const,
        priority: 0.7,
      }));

    // Pas de doublon sur /evenements-tango (déjà dans staticRoutes)
    // On garde seulement la date la plus récente comme lastModified si applicable
    if (eventRoutes.length > 0) {
      const latestEvent = eventRoutes.reduce((a, b) =>
        (a.lastModified ?? 0) > (b.lastModified ?? 0) ? a : b
      );
      const agendaIdx = staticRoutes.findIndex((r) => r.url === `${SITE_URL}/evenements-tango`);
      if (agendaIdx >= 0) {
        staticRoutes[agendaIdx].lastModified = latestEvent.lastModified;
      }
    }
  } catch {
    // Si Keystatic indispo (ex: pas encore de content/events/), on continue sans
  }

  return staticRoutes;
}
