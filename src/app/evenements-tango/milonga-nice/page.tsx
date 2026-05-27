import type { Metadata } from "next";
import { reader } from "@/lib/keystaticReader";
import MilongaClient from "./MilongaClient";

export const metadata: Metadata = {
  title: "Milonga En Tus Brazos — Soirée tango à Nice",
  description:
    "Ma milonga mensuelle à Nice. Tango, vals et milonga dans une ambiance conviviale et chaleureuse. Un samedi par mois.",
  alternates: { canonical: "/evenements-tango/milonga-nice" },
  openGraph: {
    title: "Milonga En Tus Brazos — Soirée tango à Nice",
    description:
      "Une soirée tango conviviale, un samedi par mois à Nice. Danse, partage, abrazos.",
    url: "/evenements-tango/milonga-nice",
  },
};

export const dynamic = "force-dynamic";

export default async function Milonga() {
  const page = await reader.singletons.pageMilonga.read();
  return (
    <MilongaClient
      presentation={page?.presentation ?? null}
      evenement={page?.evenement ?? null}
    />
  );
}
