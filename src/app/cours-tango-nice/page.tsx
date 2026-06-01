import type { Metadata } from "next";
import { reader } from "@/lib/keystaticReader";
import MesOffresClient from "./MesOffresClient";

export const metadata: Metadata = {
  title: "Mes offres — Cours, milongas, shows et événements",
  description:
    "Toutes les façons de vivre le tango argentin avec Leslie Folcarelli à Nice : cours collectifs et privés, milonga, shows, DJ, mariages et événements privés.",
  alternates: { canonical: "/cours-tango-nice" },
  openGraph: {
    title: "Mes offres — Cours de tango argentin à Nice",
    description:
      "Cours, milongas, shows, DJ, mariages — toutes les prestations tango de Leslie Folcarelli, championne d'Europe.",
    url: "/cours-tango-nice",
  },
};

export const dynamic = "force-dynamic";

export default async function CoursTangoNice() {
  const page = await reader.singletons.pageMesOffres.read();
  return (
    <MesOffresClient
      thumbnails={[
        page?.thumbCollectifs ?? null,
        page?.thumbPrives ?? null,
        page?.thumbMilonga ?? null,
        page?.thumbShow ?? null,
        page?.thumbMariage ?? null,
      ]}
    />
  );
}
