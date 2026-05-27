/**
 * Source unique pour les schémas JSON-LD du site.
 * Si tu changes une info (téléphone, email, palmarès…), c'est ici.
 */

export const SITE_URL = "https://lesliefolcarelli.com";
const PHONE = "+33677509897";
const EMAIL = "lesliefolcarelli.tango@gmail.com";

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Leslie Folcarelli",
  givenName: "Leslie",
  familyName: "Folcarelli",
  jobTitle: "Danseuse, professeure et DJ de tango argentin",
  description:
    "Danseuse professionnelle de tango argentin, championne d'Europe Tango Vals 2019, semi-finaliste du championnat du monde 2017. Professeure et DJ basée à Nice.",
  url: `${SITE_URL}/leslie-folcarelli`,
  image: `${SITE_URL}/images/leslie-folcarelli/hero.jpg`,
  email: EMAIL,
  telephone: PHONE,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nice",
    addressRegion: "Provence-Alpes-Côte d'Azur",
    addressCountry: "FR",
  },
  award: [
    "Championne d'Europe Tango Vals 2019 (Munster, Allemagne)",
    "Vice-Championne d'Europe Pista 2019",
    "Semi-finaliste Championnat du Monde de Tango 2017 (Buenos Aires)",
    "Finaliste Championnat Européen 2024 (Chypre)",
  ],
  sameAs: [
    "https://www.instagram.com/lesliefolcarelli/",
    "https://www.facebook.com/lesliefolcarelli",
    "https://www.youtube.com/@lesliefolcarelli",
  ],
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}/#business`,
  name: "Leslie Folcarelli — Tango Argentin Nice",
  description:
    "Cours de tango argentin à Nice avec Leslie Folcarelli, championne d'Europe. Cours collectifs, privés, stages, milongas, shows et prestations DJ.",
  url: SITE_URL,
  image: `${SITE_URL}/images/leslie-folcarelli/hero.jpg`,
  email: EMAIL,
  telephone: PHONE,
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nice",
    addressRegion: "Provence-Alpes-Côte d'Azur",
    postalCode: "06000",
    addressCountry: "FR",
  },
  areaServed: [
    { "@type": "City", name: "Nice" },
    { "@type": "City", name: "Cannes" },
    { "@type": "City", name: "Monaco" },
    { "@type": "City", name: "Vintimille" },
  ],
  founder: { "@id": `${SITE_URL}/#person` },
  knowsAbout: [
    "Tango argentin",
    "Tango Vals",
    "Milonga",
    "Tango de scène",
    "DJ tango",
    "Chorégraphie de mariage",
  ],
  sameAs: [
    "https://www.instagram.com/lesliefolcarelli/",
    "https://www.facebook.com/lesliefolcarelli",
    "https://www.youtube.com/@lesliefolcarelli",
  ],
};

export function buildEventSchema(event: {
  slug: string;
  title: string;
  date: string;
  description: string;
  location: string | null;
  photo: string | null;
  link: string | null;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    startDate: event.date,
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    description: event.description,
    image: event.photo ? `${SITE_URL}${event.photo}` : undefined,
    url: event.link || `${SITE_URL}/evenements-tango`,
    location: {
      "@type": "Place",
      name: event.location ?? "Nice",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Nice",
        addressCountry: "FR",
      },
    },
    organizer: {
      "@type": "Person",
      name: "Leslie Folcarelli",
      url: `${SITE_URL}/leslie-folcarelli`,
    },
  };
}
