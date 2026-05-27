import type { Metadata } from "next";
import { reader } from "@/lib/keystaticReader";
import CoursPrivesClient from "./CoursPrivesClient";

export const metadata: Metadata = {
  title: "Cours privés de tango à Nice",
  description:
    "Cours privés sur mesure de tango argentin à Nice avec Leslie Folcarelli. Seul(e) ou en couple, du lundi au dimanche de 9h à 21h. Déplacement Nice et région.",
  alternates: { canonical: "/cours-tango-nice/prives" },
  openGraph: {
    title: "Cours privés de tango argentin à Nice",
    description:
      "Accompagnement sur mesure. Seul(e) ou en duo, à votre rythme.",
    url: "/cours-tango-nice/prives",
  },
};

export const dynamic = "force-dynamic";

export default async function CoursPrives() {
  const page = await reader.singletons.pageCoursPrives.read();
  return <CoursPrivesClient photo={page?.photo ?? null} />;
}
