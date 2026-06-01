import type { Metadata } from "next";
import { reader } from "@/lib/keystaticReader";
import CoursCollectifsClient from "./CoursCollectifsClient";

export const metadata: Metadata = {
  title: "Cours collectifs de tango à Nice",
  description:
    "Trois cours collectifs de tango argentin par semaine au centre de Nice Masséna : cours mixte, technique follower, chorégraphique TangoFemme. Tous niveaux.",
  alternates: { canonical: "/cours-tango-nice/collectifs" },
  openGraph: {
    title: "Cours collectifs de tango argentin à Nice",
    description:
      "Trois cours par semaine à Nice Masséna. Tous niveaux, sans partenaire nécessaire.",
    url: "/cours-tango-nice/collectifs",
  },
};

export const dynamic = "force-dynamic";

export default async function CoursCollectifs() {
  const page = await reader.singletons.pageCoursCollectifs.read();
  const t = page?.tarifs;

  const tarifsUnite = [
    { label: "Cours à l'unité (-25 ans)", price: t?.uniteMoins25 ?? "12€" },
    { label: "Cours à l'unité (+25 ans)", price: t?.unitePlus25 ?? "15€" },
  ];

  const forfaits = [
    {
      name: "1 cours / semaine",
      prices: [
        { label: "-25 ans", price: t?.forfait1Moins25 ?? "43€" },
        { label: "+25 ans", price: t?.forfait1Plus25 ?? "55€" },
      ],
    },
    {
      name: "2 cours / semaine",
      prices: [
        { label: "-25 ans", price: t?.forfait2Moins25 ?? "90€" },
        { label: "+25 ans", price: t?.forfait2Plus25 ?? "115€" },
      ],
    },
    {
      name: "3 cours / semaine",
      prices: [
        { label: "-25 ans", price: t?.forfait3Moins25 ?? "134€" },
        { label: "+25 ans", price: t?.forfait3Plus25 ?? "170€" },
      ],
    },
  ];

  return (
    <CoursCollectifsClient
      photos={[
        page?.photoMixte ?? null,
        page?.photoFollower ?? null,
        page?.photoChoregraphique ?? null,
      ]}
      tarifsUnite={tarifsUnite}
      forfaits={forfaits}
    />
  );
}
