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
  return (
    <CoursCollectifsClient
      photos={[
        page?.photoMixte ?? null,
        page?.photoFollower ?? null,
        page?.photoChoregraphique ?? null,
      ]}
    />
  );
}
