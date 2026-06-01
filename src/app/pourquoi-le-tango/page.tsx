import type { Metadata } from "next";
import { reader } from "@/lib/keystaticReader";
import PourquoiClient from "./PourquoiClient";

export const metadata: Metadata = {
  title: "Pourquoi le tango — Une danse qui transforme",
  description:
    "Le tango argentin comme chemin de transformation. Quatre dimensions : physique, intellectuelle, émotionnelle et spirituelle. Découvrez ce qu'apporte cette danse à Nice.",
  alternates: { canonical: "/pourquoi-le-tango" },
  openGraph: {
    title: "Pourquoi le tango — Une danse qui transforme",
    description:
      "Le tango argentin comme chemin de transformation intérieure. Bien plus qu'une danse, un art de vivre.",
    url: "/pourquoi-le-tango",
  },
};

export const dynamic = "force-dynamic";

export default async function PourquoiLeTango() {
  const page = await reader.singletons.pagePourquoi.read();
  return <PourquoiClient photo={page?.photo ?? null} />;
}
