import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat, Great_Vibes } from "next/font/google";
import "./globals.css";
import LayoutChrome from "@/components/layout/LayoutChrome";
import JsonLd from "@/components/seo/JsonLd";
import { personSchema, localBusinessSchema } from "@/lib/seo";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-script",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Leslie Folcarelli — Cours de Tango Argentin à Nice",
    template: "%s | Leslie Folcarelli",
  },
  description:
    "Danseuse, professeure et DJ de tango argentin à Nice. Championne d'Europe 2019. Cours collectifs, privés, stages, milongas, shows et prestations privées.",
  metadataBase: new URL("https://lesliefolcarelli.com"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "tango argentin Nice",
    "cours de tango Nice",
    "professeure de tango",
    "milonga Nice",
    "Leslie Folcarelli",
    "DJ tango",
    "stages de tango",
    "tango Côte d'Azur",
  ],
  authors: [{ name: "Leslie Folcarelli" }],
  creator: "Leslie Folcarelli",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Leslie Folcarelli — Tango Argentin Nice",
    title: "Leslie Folcarelli — Cours de Tango Argentin à Nice",
    description:
      "Danseuse, professeure et DJ de tango argentin à Nice. Championne d'Europe 2019.",
    url: "https://lesliefolcarelli.com",
    images: [
      {
        url: "/images/leslie-folcarelli/hero.jpg",
        width: 1414,
        height: 2000,
        alt: "Leslie Folcarelli, danseuse et professeure de tango argentin",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leslie Folcarelli — Cours de Tango Argentin à Nice",
    description:
      "Danseuse, professeure et DJ de tango argentin à Nice. Championne d'Europe 2019.",
    images: ["/images/leslie-folcarelli/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={[cormorant.variable, montserrat.variable, greatVibes.variable].join(" ")}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col bg-nacre text-texte font-body font-light">
        <JsonLd data={[personSchema, localBusinessSchema]} />
        <LayoutChrome>{children}</LayoutChrome>
      </body>
    </html>
  );
}
