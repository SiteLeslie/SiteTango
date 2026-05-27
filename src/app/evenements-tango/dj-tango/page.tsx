import type { Metadata } from "next";
import DjClient from "./DjClient";

export const metadata: Metadata = {
  title: "DJ Tango — Musicalisation milongas et festivals",
  description:
    "La sensibilité d'une danseuse au service des milongas, festivals et marathons. DJ tango en France, Italie, Espagne, Grèce, Hongrie, Tchéquie, Chypre.",
  alternates: { canonical: "/evenements-tango/dj-tango" },
  openGraph: {
    title: "DJ Tango — Leslie Folcarelli",
    description:
      "Musicalisation de milongas, festivals et marathons en Europe.",
    url: "/evenements-tango/dj-tango",
  },
};

export default function Dj() {
  return <DjClient hero={null} djSet={null} />;
}
