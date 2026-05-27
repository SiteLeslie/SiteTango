import type { Metadata } from "next";
import StagesClient from "./StagesClient";

export const metadata: Metadata = {
  title: "Stages de tango à Nice",
  description:
    "Stages thématiques mensuels de tango argentin à Nice. Week-ends d'immersion en technique, musicalité, connexion et embellissements. Tous niveaux.",
  alternates: { canonical: "/cours-tango-nice/stages" },
  openGraph: {
    title: "Stages de tango argentin à Nice",
    description:
      "Un week-end par mois — un thème, une immersion pour progresser en profondeur.",
    url: "/cours-tango-nice/stages",
  },
};

export default function Stages() {
  return <StagesClient photo={null} />;
}
