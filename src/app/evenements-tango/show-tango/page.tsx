import type { Metadata } from "next";
import { reader } from "@/lib/keystaticReader";
import ShowClient from "./ShowClient";

export const metadata: Metadata = {
  title: "Show, Stage & DJ Tango",
  description:
    "Spectacle, performance, animation ou initiation artistique : des moments de tango sur-mesure, entre tradition et modernité. Sensuel, théâtral, festif ou participatif.",
  alternates: { canonical: "/evenements-tango/show-tango" },
  openGraph: {
    title: "Show, Stage & DJ Tango — Leslie Folcarelli",
    description:
      "Spectacle, performance, animation ou initiation artistique — un moment de tango sur-mesure qui marque les esprits.",
    url: "/evenements-tango/show-tango",
  },
};

export const dynamic = "force-dynamic";

export default async function Show() {
  const page = await reader.singletons.pageShow.read();
  return <ShowClient hero={page?.hero ?? null} />;
}
