import type { Metadata } from "next";
import { reader } from "@/lib/keystaticReader";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Leslie Folcarelli pour des cours de tango argentin, milongas, stages ou prestations à Nice. WhatsApp, email ou réseaux sociaux.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Leslie Folcarelli",
    description:
      "Une question, un projet, une envie ? Contactez Leslie pour vos cours, événements ou prestations tango à Nice.",
    url: "/contact",
  },
};

export const dynamic = "force-dynamic";

export default async function Contact() {
  const page = await reader.singletons.pageContact.read();
  return (
    <ContactClient
      heroPhoto={page?.hero ?? null}
      heroAlt="Leslie Folcarelli"
    />
  );
}
