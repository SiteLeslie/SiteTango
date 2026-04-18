import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat, Great_Vibes } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

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
    "Danseuse, professeure et DJ de tango argentin à Nice. Cours collectifs, privés, milongas et shows. Découvrez une danse qui transforme.",
  metadataBase: new URL("https://lesliefolcarelli.com"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Leslie Folcarelli — Tango Argentin Nice",
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
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
