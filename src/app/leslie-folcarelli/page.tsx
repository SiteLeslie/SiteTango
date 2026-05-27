import type { Metadata } from "next";
import { reader } from "@/lib/keystaticReader";
import BiographieClient from "./BiographieClient";

export const metadata: Metadata = {
  title: "Qui suis-je — Danseuse et professeure de tango",
  description:
    "Leslie Folcarelli, danseuse professionnelle, professeure et DJ de tango argentin. Championne d'Europe 2019, semi-finaliste du championnat du monde 2017. Mon parcours et mon approche.",
  alternates: { canonical: "/leslie-folcarelli" },
  openGraph: {
    title: "Qui suis-je — Leslie Folcarelli, danseuse de tango argentin",
    description:
      "Championne d'Europe 2019, semi-finaliste du championnat du monde. Mon parcours de danseuse, professeure et DJ.",
    url: "/leslie-folcarelli",
  },
};

export const dynamic = "force-dynamic";

export default async function Biographie() {
  const page = await reader.singletons.pageBio.read();
  return (
    <BiographieClient
      heroPhoto={page?.hero ?? null}
      heroAlt="Leslie Folcarelli, danseuse et professeure de tango argentin"
    />
  );
}
