import type { Metadata } from "next";
import { reader } from "@/lib/keystaticReader";
import { buildEventSchema } from "@/lib/seo";
import JsonLd from "@/components/seo/JsonLd";
import AgendaClient, { type AgendaEvent } from "./AgendaClient";

export const metadata: Metadata = {
  title: "Agenda — Prochains événements tango",
  description:
    "Toutes les prochaines milongas, stages, shows et événements tango de Leslie Folcarelli à Nice et en Europe. Suivez l'agenda à jour.",
  alternates: { canonical: "/evenements-tango" },
  openGraph: {
    title: "Agenda tango — Prochains événements",
    description:
      "Milongas, stages, shows — tous les rendez-vous tango à Nice et ailleurs.",
    url: "/evenements-tango",
  },
};

export const dynamic = "force-dynamic";

export default async function EvenementsTango() {
  const raw = await reader.collections.events.all();

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const events: AgendaEvent[] = raw
    .map((entry) => ({
      slug: entry.slug,
      title: entry.entry.title,
      date: entry.entry.date,
      photo: entry.entry.photo,
      description: entry.entry.description,
      location: entry.entry.location || null,
      link: entry.entry.link,
    }))
    .filter((e) => new Date(e.date + "T23:59:59") >= today)
    .sort((a, b) => a.date.localeCompare(b.date));

  return (
    <>
      {events.length > 0 && (
        <JsonLd data={events.map((e) => buildEventSchema(e))} />
      )}
      <AgendaClient events={events} />
    </>
  );
}
