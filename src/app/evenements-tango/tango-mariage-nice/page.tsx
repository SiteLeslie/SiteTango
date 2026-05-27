import type { Metadata } from "next";
import { reader } from "@/lib/keystaticReader";
import MariageClient from "./MariageClient";

export const metadata: Metadata = {
  title: "Mariage, anniversaire et événement d'entreprise",
  description:
    "Spectacles de tango argentin et chorégraphies de mariage sur mesure. Prestations pour anniversaires, événements d'entreprise et soirées privées à Nice et alentours.",
  alternates: { canonical: "/evenements-tango/tango-mariage-nice" },
  openGraph: {
    title: "Tango pour mariage et événement privé — Nice",
    description:
      "Shows de tango et chorégraphies sur mesure pour vos moments uniques.",
    url: "/evenements-tango/tango-mariage-nice",
  },
};

export const dynamic = "force-dynamic";

export default async function Mariage() {
  const page = await reader.singletons.pageMariage.read();
  return <MariageClient ouverture={page?.ouverture ?? null} />;
}
