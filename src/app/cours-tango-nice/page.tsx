import type { Metadata } from "next";
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

export default function CoursTangoNice() {
  return <MesOffresClient />;
}
