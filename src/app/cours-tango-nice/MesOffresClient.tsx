"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsapConfig";
import SectionReveal from "@/components/ui/SectionReveal";

/* ───────────────── 5 OFFRES ───────────────── */

const offers = [
  {
    title: "Cours collectifs",
    description: "Apprenez en groupe dans une ambiance chaleureuse. Tous niveaux, sans partenaire nécessaire.",
    href: "/cours-tango-nice/collectifs",
  },
  {
    title: "Cours privés",
    description: "Un accompagnement sur mesure, adapté à vos objectifs. Seul(e) ou en duo.",
    href: "/cours-tango-nice/prives",
  },
  {
    title: "Milonga En Tus Brazos",
    description: "Ma soirée de tango à Nice. Danse, rencontre et partage dans une atmosphère festive.",
    href: "/evenements-tango/milonga-nice",
  },
  {
    title: "Show, Stage & DJ",
    description: "Spectacles scéniques, stages intensifs et musicalisation de milongas.",
    href: "/evenements-tango/show-tango",
  },
  {
    title: "Mariage, Anniversaire & Entreprise",
    description: "Offrez un moment de tango inoubliable à vos invités. Prestations sur mesure.",
    href: "/evenements-tango/tango-mariage-nice",
  },
];

/* ───────────────── PAGE ───────────────── */

export default function MesOffresClient() {
  const heroRef = useRef<HTMLDivElement>(null);
  const offersRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!heroRef.current) return;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;
      const els = heroRef.current.querySelectorAll(".hero-animate");
      gsap.from(els, { y: 30, opacity: 0, duration: 0.7, stagger: 0.1, ease: "power2.out" });
    },
    { scope: heroRef }
  );


  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-charbon">
          <div className="absolute inset-0 bg-gradient-to-r from-noir/80 via-charbon/60 to-noir/80" />
        </div>

        <div ref={heroRef} className="relative z-10 max-w-[min(900px,90vw)] mx-auto text-center px-[clamp(20px,5vw,80px)] py-16">
          <div className="hero-animate inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blanc/5 border border-champagne/30 mb-6">
            <span className="text-champagne text-sm">◆</span>
            <span className="text-[clamp(10px,0.85vw,12px)] tracking-[1px] uppercase text-champagne-clair font-medium">
              Championne d&apos;Europe 2019
            </span>
          </div>

          <h1 className="hero-animate font-display text-[clamp(36px,5vw,72px)] font-light leading-[1.1] text-blanc mb-6">
            Mes <em className="italic text-champagne-clair">offres</em>
          </h1>

          <p className="hero-animate text-[clamp(15px,1.15vw,18px)] text-sable/80 leading-relaxed max-w-2xl mx-auto">
            Cours, stages, milongas, spectacles et événements privés —
            découvrez toutes les façons de vivre le tango avec moi.
          </p>
        </div>
      </section>

      {/* ── 5 OFFRES — Cartes avec photo + titre ── */}
      <section className="py-[clamp(40px,6vw,80px)] px-[clamp(16px,3vw,40px)]">
        <div ref={offersRef} className="max-w-[1400px] mx-auto space-y-5">
          {/* Toutes les cartes — même taille */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {offers.map((offer, i) => (
              <OfferCard key={i} offer={offer} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <SectionReveal className="py-[clamp(64px,10vw,120px)] px-[clamp(20px,5vw,80px)] bg-creme/40 border-t border-beige">
        <div className="max-w-[min(600px,90vw)] mx-auto text-center">
          <p className="font-script text-[clamp(24px,2.8vw,38px)] text-brun mb-6">
            Le premier pas est toujours le plus beau.
          </p>
          <p className="text-[clamp(14px,1.05vw,16px)] text-taupe leading-relaxed mb-10">
            Contactez-moi pour connaître les horaires, les tarifs,
            ou simplement pour en discuter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/33677509897?text=Bonjour%20Leslie%2C%20je%20vous%20contacte%20depuis%20votre%20site" target="_blank" rel="noopener noreferrer"
              className="px-8 py-3.5 bg-brun text-blanc rounded-full text-sm tracking-wider uppercase hover:bg-dore transition-colors duration-300"
            >
              Écrire à Leslie
            </a>
            <a
              href="mailto:lesliefolcarelli.tango@gmail.com"
              className="px-8 py-3.5 border border-beige text-brun rounded-full text-sm tracking-wider uppercase hover:border-champagne hover:bg-creme/50 transition-all duration-300"
            >
              Écrire par email
            </a>
          </div>
        </div>
      </SectionReveal>
    </>
  );
}

/* ───────────────── COMPOSANT CARTE OFFRE ───────────────── */

function OfferCard({ offer }: { offer: (typeof offers)[number] }) {
  return (
    <Link
      href={offer.href}
      className="offer-card group bg-sable/40 border border-beige rounded-lg overflow-hidden hover:border-champagne hover:shadow-lg hover:shadow-champagne/10 transition-all duration-300 flex flex-col"
    >
      {/* Photo placeholder — format portrait */}
      <div className="relative h-56 bg-charbon overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-noir/60 via-charbon/40 to-brun/30 group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-[10px] tracking-[3px] uppercase text-blanc/30">
            Photo
          </span>
        </div>
      </div>

      {/* Contenu */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-[clamp(20px,1.8vw,26px)] font-light text-noir mb-3">
          {offer.title}
        </h3>
        <p className="text-[clamp(13px,1vw,15px)] text-taupe leading-relaxed mb-6 flex-1">
          {offer.description}
        </p>
        <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-brun text-blanc rounded-full text-[clamp(11px,0.85vw,13px)] tracking-wider uppercase self-start group-hover:bg-dore transition-colors duration-300">
          En savoir plus
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition-transform duration-300">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
