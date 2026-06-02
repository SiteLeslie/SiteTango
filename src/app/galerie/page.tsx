import type { Metadata } from "next";
import { reader } from "@/lib/keystaticReader";
import GalerieClient, { type GalerieItem, type GalerieVideo } from "./GalerieClient";

export const metadata: Metadata = {
  title: "Galerie photos et vidéos",
  description:
    "Photos et vidéos de Leslie Folcarelli en scène, en cours et en milongas — tango argentin à Nice et à travers l'Europe.",
  alternates: { canonical: "/galerie" },
  openGraph: {
    title: "Galerie — Leslie Folcarelli, tango argentin",
    description: "Photos et vidéos de Leslie en scène, milongas et festivals.",
    url: "/galerie",
  },
};

export const dynamic = "force-dynamic";

export default async function Galerie() {
  const [rawPhotos, rawVideos] = await Promise.all([
    reader.collections.galerie.all(),
    reader.collections.galerieVideos.all(),
  ]);

  const photos: GalerieItem[] = rawPhotos
    .map((entry) => ({
      slug: entry.slug,
      title: entry.entry.title,
      image: entry.entry.image ?? "",
      caption: entry.entry.caption,
      order: entry.entry.order ?? 100,
    }))
    .filter((p) => p.image)
    .sort((a, b) => a.order - b.order)
    .map(({ order: _order, ...rest }) => rest);

  const videos: GalerieVideo[] = rawVideos
    .map((entry) => ({
      slug: entry.slug,
      title: entry.entry.title,
      video: entry.entry.video ?? "",
      caption: entry.entry.caption,
      order: entry.entry.order ?? 100,
    }))
    .filter((v) => v.video)
    .sort((a, b) => a.order - b.order)
    .map(({ order: _order, ...rest }) => rest);

  return <GalerieClient photos={photos} videos={videos} />;
}
