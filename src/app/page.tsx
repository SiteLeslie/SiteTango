import { reader } from "@/lib/keystaticReader";
import HomeClient, { type HomeEvent } from "./HomeClient";

export const dynamic = "force-dynamic";

export default async function Home() {
  const [page, rawEvents] = await Promise.all([
    reader.singletons.pageAccueil.read(),
    reader.collections.events.all(),
  ]);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const events: HomeEvent[] = rawEvents
    .map((e) => ({
      slug: e.slug,
      title: e.entry.title,
      date: e.entry.date,
      location: e.entry.location || null,
    }))
    .filter((e) => new Date(e.date + "T23:59:59") >= today)
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(0, 3);

  return (
    <HomeClient
      aboutPhoto={page?.apercu ?? null}
      aboutAlt="Leslie Folcarelli, professeure de tango argentin"
      events={events}
    />
  );
}
