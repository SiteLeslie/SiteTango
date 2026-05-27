import type { Metadata } from "next";
import { reader } from "@/lib/keystaticReader";
import ShowClient from "./ShowClient";

export const metadata: Metadata = {
  title: "Show, Stage & DJ Tango",
  description:
    "Spectacles scéniques, stages exceptionnels et musicalisation de soirées tango. Collaborations avec organisateurs de milongas, festivals et marathons en Europe.",
  alternates: { canonical: "/evenements-tango/show-tango" },
  openGraph: {
    title: "Show, Stage & DJ Tango — Leslie Folcarelli",
    description:
      "Spectacles, stages et collaborations pour milongas, festivals et marathons.",
    url: "/evenements-tango/show-tango",
  },
};

export const dynamic = "force-dynamic";

export default async function Show() {
  const page = await reader.singletons.pageShow.read();
  return <ShowClient hero={page?.hero ?? null} />;
}
