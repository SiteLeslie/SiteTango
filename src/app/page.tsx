"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsapConfig";
import SectionReveal from "@/components/ui/SectionReveal";
import TestimonialSlider from "@/components/ui/TestimonialSlider";

/* ───────────────────────── HERO SPLIT ───────────────────── */

function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!heroRef.current) return;
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReducedMotion) return;

      const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

      // Media side fades in
      tl.from(mediaRef.current, {
        opacity: 0,
        scale: 1.05,
        duration: 1.4,
      }, 0);

      // Text elements stagger in
      if (textRef.current) {
        const elements = textRef.current.querySelectorAll(".hero-animate");
        tl.from(elements, {
          y: 30,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
        }, 0.4);
      }
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      className="h-[85vh] md:h-[75vh] pt-14 md:pt-16 flex flex-col md:flex-row"
    >
      {/* ── LEFT: Média / Vidéo — bord à bord, sombre ── */}
      <div
        ref={mediaRef}
        className="relative w-full md:w-1/2 min-h-[40vh] md:h-full overflow-hidden"
      >
        {/* Fond sombre immersif — sera remplacé par la vidéo */}
        <div className="absolute inset-0 bg-charbon">
          {/* Image/Vidéo placeholder */}
          <div className="absolute inset-0 bg-gradient-to-br from-noir via-charbon to-brun/40" />

          {/* Play button central */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="group cursor-pointer flex flex-col items-center gap-4">
              <div className="w-20 h-20 rounded-full border border-blanc/30 flex items-center justify-center group-hover:border-champagne/60 group-hover:scale-110 transition-all duration-500">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="ml-1">
                  <polygon points="6,3 20,12 6,21" fill="white" opacity="0.8" />
                </svg>
              </div>
              <span className="text-[10px] tracking-[3px] uppercase text-blanc/40">
                Vidéo
              </span>
            </div>
          </div>

          {/* Subtle overlay text on media */}
          <div className="absolute bottom-8 left-8 right-8">
            <p className="text-[10px] tracking-[3px] uppercase text-blanc/30">
              Tango Argentin &middot; Nice &middot; France
            </p>
          </div>
        </div>
      </div>

      {/* ── RIGHT: Texte — centré dans le cadre ── */}
      <div
        ref={textRef}
        className="w-full md:w-1/2 flex items-center justify-center bg-blanc px-[clamp(30px,6vw,100px)] py-16 md:py-0"
      >
        <div className="text-center max-w-lg">
          {/* Badge champion */}
          <div className="hero-animate inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brun/5 border border-champagne/30 mb-8">
            <span className="text-champagne text-sm">◆</span>
            <span className="text-[clamp(12px,1vw,14px)] tracking-[1px] uppercase text-brun font-medium">
              Championne d&apos;Europe 2019
            </span>
          </div>

          <h1 className="hero-animate font-display text-[clamp(50px,6vw,96px)] font-light leading-[1] text-noir whitespace-nowrap mb-5">
            Leslie <em className="italic text-brun">Folcarelli</em>
          </h1>

          <p className="hero-animate text-[clamp(14px,1.1vw,16px)] tracking-[1px] text-dore mb-8 whitespace-nowrap">
            Danseuse professionnelle &middot; Professeure de tango argentin
          </p>

          <p className="hero-animate font-script text-[clamp(24px,2.5vw,38px)] text-brun mb-6 whitespace-nowrap">
            La connexion entre deux &Acirc;mes, deux C&oelig;urs, deux Corps
          </p>

          <p className="hero-animate text-[clamp(15px,1.1vw,18px)] text-taupe mb-10 whitespace-nowrap">
            Un sublime mariage d&apos;&Eacute;l&eacute;gance, de Sensualit&eacute;, d&apos;&Eacute;coute &amp; de Connexion
          </p>

          <div className="hero-animate flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/leslie-folcarelli"
              className="px-8 py-3.5 border border-beige text-brun rounded-full text-[clamp(11px,0.85vw,13px)] tracking-wider uppercase hover:border-champagne hover:bg-creme/50 transition-all duration-300"
            >
              Qui suis-je
            </Link>
            <Link
              href="/cours-tango-nice"
              className="px-8 py-3.5 bg-brun text-blanc rounded-full text-[clamp(11px,0.85vw,13px)] tracking-wider uppercase hover:bg-dore transition-colors duration-300"
            >
              Découvrir les cours
            </Link>
          </div>

          {/* Social icons — comme moovance */}
          <div className="hero-animate flex gap-5 justify-center">
            <a href="https://www.instagram.com/lesliefolcarelli/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-taupe hover:text-dore transition-colors duration-200">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="https://www.facebook.com/lesliefolcarelli" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-taupe hover:text-dore transition-colors duration-200">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.youtube.com/@lesliefolcarelli" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-taupe hover:text-dore transition-colors duration-200">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── 3 PORTAILS ─────────────────────── */

const portals = [
  {
    href: "/cours-tango-nice",
    title: "Cours",
    subtitle: "Collectifs, privés & stages",
    description: "Tous niveaux, sans partenaire nécessaire. Trouvez le cours qui vous correspond.",
    icon: "◈",
  },
  {
    href: "/evenements-tango",
    title: "Événements",
    subtitle: "Milongas, shows & DJ",
    description: "Soirées dansantes, spectacles scéniques et prestations sur mesure.",
    icon: "◉",
  },
  {
    href: "/pourquoi-le-tango",
    title: "Pourquoi le Tango",
    subtitle: "Une danse qui transforme",
    description: "Bien plus qu'une danse : un chemin vers soi. Corps, esprit, émotion, âme.",
    icon: "✧",
  },
];

function Portals() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReducedMotion) return;

      const cards = containerRef.current.querySelectorAll(".portal-card");
      gsap.from(cards, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section className="py-[clamp(48px,8vw,120px)] px-[clamp(20px,5vw,80px)]">
      <div
        ref={containerRef}
        className="max-w-[min(1200px,90vw)] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        {portals.map((portal) => (
          <Link
            key={portal.href}
            href={portal.href}
            className="portal-card group bg-blanc border border-beige rounded-lg p-8 overflow-hidden transition-all duration-500 hover:border-champagne hover:-translate-y-1 hover:shadow-lg hover:shadow-champagne/10"
          >
            <span className="text-2xl mb-4 block text-champagne group-hover:text-dore transition-colors duration-300">
              {portal.icon}
            </span>
            <h3 className="font-display text-[clamp(22px,2vw,30px)] font-light text-noir mb-1">
              {portal.title}
            </h3>
            <p className="text-[clamp(10px,0.8vw,12px)] tracking-[2px] uppercase text-dore mb-4">
              {portal.subtitle}
            </p>
            <p className="text-[clamp(12px,0.95vw,14px)] text-taupe leading-relaxed">
              {portal.description}
            </p>

            <div className="mt-6 flex items-center gap-2 text-dore text-sm opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-2 transition-all duration-300">
              <span className="text-xs tracking-wider uppercase">Découvrir</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* ─────────────────── PRÉSENTATION LESLIE ──────────────── */

function AboutPreview() {
  return (
    <SectionReveal className="py-[clamp(48px,8vw,120px)] px-[clamp(20px,5vw,80px)] border-t border-beige">
      <div className="max-w-[min(1200px,90vw)] mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Photo placeholder */}
        <div className="w-64 h-80 md:w-72 md:h-96 rounded-lg bg-creme border border-beige flex items-center justify-center flex-shrink-0 overflow-hidden">
          <div className="text-center">
            <span className="text-4xl block mb-3 text-champagne">✦</span>
            <span className="text-[10px] tracking-[3px] uppercase text-taupe">
              Photo de Leslie
            </span>
          </div>
        </div>

        {/* Text */}
        <div className="text-center md:text-left">
          <p className="text-[clamp(9px,0.7vw,11px)] tracking-[3px] uppercase text-dore mb-4">
            Danseuse &middot; Professeure &middot; DJ
          </p>
          <h2 className="font-display text-[clamp(28px,3vw,44px)] font-light text-noir leading-tight mb-6">
            Leslie Folcarelli
          </h2>
          <p className="text-[clamp(13px,1.1vw,16px)] text-taupe leading-relaxed max-w-xl mb-8">
            Formée en Europe et en Argentine, Leslie transmet un tango vivant,
            sensible et transformateur. Danseuse de scène, DJ de milongas et
            professeure passionnée, elle invite chacun à découvrir cette danse
            comme un chemin vers soi.
          </p>
          <Link
            href="/leslie-folcarelli"
            className="inline-flex items-center gap-2 text-dore text-sm tracking-wider uppercase group"
          >
            <span className="border-b border-champagne/30 group-hover:border-dore pb-0.5 transition-colors duration-300">
              Découvrir son parcours
            </span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="group-hover:translate-x-1 transition-transform duration-300"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </SectionReveal>
  );
}

/* ─────────────────── TÉMOIGNAGES ──────────────────────── */

function Testimonials() {
  return (
    <SectionReveal className="py-[clamp(64px,10vw,140px)] px-[clamp(20px,5vw,80px)] bg-creme/60 border-t border-b border-beige">
      <div className="max-w-[min(1200px,90vw)] mx-auto">
        <p className="text-[clamp(9px,0.7vw,11px)] tracking-[3px] uppercase text-dore text-center mb-12">
          Ce qu&apos;ils disent
        </p>
        <TestimonialSlider />
      </div>
    </SectionReveal>
  );
}

/* ─────────────────── AGENDA À VENIR ──────────────────── */

const upcomingEvents = [
  {
    date: "25 Avr.",
    title: "Milonga En Tus Brazos",
    detail: "Soirée dansante · 21h · Nice",
    type: "Milonga",
  },
  {
    date: "3 Mai",
    title: "Stage Tango Débutant",
    detail: "Week-end intensif · 10h-13h · Nice",
    type: "Stage",
  },
  {
    date: "17 Mai",
    title: "Show Tango — Gala de Danse",
    detail: "Performance scénique · Théâtre de Nice",
    type: "Show",
  },
];

function Agenda() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReducedMotion) return;

      const cards = containerRef.current.querySelectorAll(".event-card");
      gsap.from(cards, {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          once: true,
        },
      });
    },
    { scope: containerRef }
  );

  return (
    <section className="py-[clamp(48px,8vw,120px)] px-[clamp(20px,5vw,80px)]">
      <div className="max-w-[min(1200px,90vw)] mx-auto">
        <div className="text-center mb-12">
          <p className="text-[clamp(9px,0.7vw,11px)] tracking-[3px] uppercase text-dore mb-3">
            Prochainement
          </p>
          <h2 className="font-display text-[clamp(24px,3vw,44px)] font-light text-noir">
            Agenda &agrave; venir
          </h2>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {upcomingEvents.map((event, i) => (
            <div
              key={i}
              className="event-card group bg-blanc border border-beige rounded-lg p-6 hover:border-champagne hover:shadow-md hover:shadow-champagne/10 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="font-display text-[clamp(20px,2vw,28px)] font-light text-dore leading-none">
                  {event.date}
                </div>
                <span className="text-[9px] tracking-[2px] uppercase px-2 py-1 rounded bg-creme text-dore border border-beige">
                  {event.type}
                </span>
              </div>
              <h3 className="font-display text-lg text-noir font-light mb-2">
                {event.title}
              </h3>
              <p className="text-[clamp(11px,0.9vw,13px)] text-taupe">
                {event.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/evenements-tango"
            className="inline-flex items-center gap-2 text-dore text-sm tracking-wider uppercase group"
          >
            <span className="border-b border-champagne/30 group-hover:border-dore pb-0.5 transition-colors duration-300">
              Voir tous les événements
            </span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="group-hover:translate-x-1 transition-transform duration-300"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── SECTION CTA FINALE ──────────────── */

function CtaSection() {
  return (
    <SectionReveal className="py-[clamp(64px,10vw,140px)] px-[clamp(20px,5vw,80px)] bg-creme/60 border-t border-beige">
      <div className="max-w-[min(700px,90vw)] mx-auto text-center">
        <p className="text-[clamp(9px,0.7vw,11px)] tracking-[3px] uppercase text-dore mb-6">
          Prêt(e) à danser ?
        </p>
        <h2 className="font-display text-[clamp(28px,4vw,56px)] font-light text-noir leading-tight mb-6">
          <em className="italic text-brun">Parlons-en.</em>
        </h2>
        <p className="text-[clamp(13px,1.1vw,16px)] text-taupe leading-relaxed mb-10 max-w-md mx-auto">
          Que vous soyez curieux, débutant ou danseur confirmé, Leslie vous
          accueille avec le même enthousiasme. Un simple appel ou un email
          suffit.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+33677509897"
            className="px-8 py-3.5 bg-brun text-blanc rounded-full text-sm tracking-wider uppercase font-medium hover:bg-dore transition-colors duration-300"
          >
            Appeler Leslie
          </a>
          <a
            href="mailto:lesliefolcarelli.tango@gmail.com"
            className="px-8 py-3.5 border border-brun text-brun rounded-full text-sm tracking-wider uppercase hover:bg-brun hover:text-blanc transition-all duration-300"
          >
            Écrire par email
          </a>
        </div>
      </div>
    </SectionReveal>
  );
}

/* ─────────────────── PAGE ACCUEIL ─────────────────────── */

export default function Home() {
  return (
    <>
      <Hero />
      <Portals />
      <AboutPreview />
      <Testimonials />
      <Agenda />
      <CtaSection />
    </>
  );
}
