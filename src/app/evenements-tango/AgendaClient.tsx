"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsapConfig";
import SectionReveal from "@/components/ui/SectionReveal";

export type AgendaEvent = {
  slug: string;
  title: string;
  date: string;
  photo: string | null;
  description: string;
  location: string | null;
  link: string | null;
};

function formatDate(iso: string): { day: string; month: string; year: string } {
  const d = new Date(iso + "T12:00:00");
  return {
    day: d.toLocaleDateString("fr-FR", { day: "2-digit" }),
    month: d.toLocaleDateString("fr-FR", { month: "long" }),
    year: d.getFullYear().toString(),
  };
}

export default function AgendaClient({ events }: { events: AgendaEvent[] }) {
  const heroRef = useRef<HTMLDivElement>(null);

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
      <section ref={heroRef} className="pt-20 md:pt-28 pb-12 px-[clamp(20px,5vw,80px)] text-center">
        <p className="hero-animate text-[clamp(10px,0.85vw,12px)] tracking-[3px] uppercase text-dore mb-4">
          Agenda
        </p>
        <h1 className="hero-animate font-display text-[clamp(36px,5vw,64px)] font-light leading-[1.1] text-noir mb-4">
          Prochains <em className="italic text-brun">événements</em>
        </h1>
        <p className="hero-animate text-[clamp(14px,1.1vw,17px)] text-taupe leading-relaxed max-w-2xl mx-auto">
          Milongas, stages, shows et collaborations — retrouvez ici
          tous les rendez-vous tango à venir à Nice et ailleurs.
        </p>
      </section>

      {/* ── LISTE D'ÉVÉNEMENTS — horizontale, triée par date ── */}
      <section className="px-[clamp(16px,3vw,40px)] pb-[clamp(64px,10vw,120px)]">
        <div className="max-w-[1100px] mx-auto">
          {events.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="space-y-5">
              {events.map((event) => (
                <EventCard key={event.slug} event={event} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <SectionReveal className="py-[clamp(64px,10vw,120px)] px-[clamp(20px,5vw,80px)] bg-creme/40 border-t border-beige">
        <div className="max-w-[min(600px,90vw)] mx-auto text-center">
          <p className="font-script text-[clamp(24px,2.8vw,38px)] text-brun mb-6">
            Un projet, une envie, une date ?
          </p>
          <p className="text-[clamp(14px,1.05vw,16px)] text-taupe leading-relaxed mb-10">
            Parlons-en ensemble pour construire un événement qui vous ressemble.
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

/* ───────────────── ÉTAT VIDE ───────────────── */

function EmptyState() {
  return (
    <SectionReveal>
      <div className="bg-blanc border border-beige rounded-lg py-[clamp(48px,8vw,100px)] px-[clamp(24px,5vw,80px)] text-center max-w-[min(700px,90vw)] mx-auto">
        <span className="text-3xl block mb-6 text-champagne">◆</span>
        <h2 className="font-display text-[clamp(24px,2.5vw,36px)] font-light text-noir mb-4">
          Les prochaines dates arrivent bientôt
        </h2>
        <p className="text-[clamp(13px,1vw,16px)] text-taupe leading-relaxed mb-8 max-w-md mx-auto">
          Pour ne rien manquer des prochaines milongas, stages et shows,
          suivez-moi sur les réseaux sociaux ou écrivez-moi directement.
        </p>
        <div className="flex flex-wrap gap-3 justify-center items-center mb-8">
          <a
            href="https://www.instagram.com/lesliefolcarelli/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-beige text-brun text-[clamp(11px,0.85vw,13px)] tracking-wider uppercase hover:border-champagne hover:bg-creme/50 transition-all duration-300"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            Instagram
          </a>
          <a
            href="https://www.facebook.com/lesliefolcarelli"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-beige text-brun text-[clamp(11px,0.85vw,13px)] tracking-wider uppercase hover:border-champagne hover:bg-creme/50 transition-all duration-300"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
            Facebook
          </a>
        </div>
        <a
          href="https://wa.me/33677509897?text=Bonjour%20Leslie%2C%20je%20vous%20contacte%20depuis%20votre%20site"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-8 py-3.5 bg-brun text-blanc rounded-full text-sm tracking-wider uppercase hover:bg-dore transition-colors duration-300"
        >
          Écrire à Leslie
        </a>
      </div>
    </SectionReveal>
  );
}

/* ───────────────── CARTE ÉVÉNEMENT — HORIZONTALE ───────────────── */

function EventCard({ event }: { event: AgendaEvent }) {
  const d = formatDate(event.date);
  const Wrapper = event.link ? "a" : "div";
  const wrapperProps = event.link
    ? { href: event.link, target: "_blank" as const, rel: "noopener noreferrer" as const }
    : {};

  return (
    <SectionReveal>
      <Wrapper
        {...wrapperProps}
        className="group flex flex-col md:flex-row bg-blanc border border-beige rounded-lg overflow-hidden hover:border-champagne hover:shadow-lg hover:shadow-champagne/10 transition-all duration-300"
      >
        {/* DATE — colonne gauche */}
        <div className="md:w-44 flex md:flex-col items-center justify-center bg-creme/40 p-6 md:p-8 gap-4 md:gap-1 border-b md:border-b-0 md:border-r border-beige flex-shrink-0">
          <div className="font-display text-[clamp(44px,3.5vw,60px)] font-light text-brun leading-none">
            {d.day}
          </div>
          <div className="text-[clamp(11px,0.95vw,14px)] tracking-[3px] uppercase text-dore">
            {d.month}
          </div>
          <div className="text-[10px] tracking-[2px] uppercase text-taupe">
            {d.year}
          </div>
        </div>

        {/* PHOTO — colonne centre */}
        <div className="md:w-56 relative h-64 md:h-auto md:min-h-[240px] bg-charbon flex-shrink-0">
          {event.photo ? (
            <Image
              src={event.photo}
              alt={event.title}
              fill
              sizes="(max-width: 768px) 100vw, 224px"
              className="object-cover"
            />
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-noir/50 via-charbon/30 to-brun/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-[10px] tracking-[3px] uppercase text-blanc/30">
                  Photo
                </span>
              </div>
            </>
          )}
        </div>

        {/* DESCRIPTION — colonne droite */}
        <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
          <h3 className="font-display text-[clamp(22px,2vw,30px)] font-light text-noir mb-2 leading-tight">
            {event.title}
          </h3>
          {event.location && (
            <p className="text-[clamp(11px,0.85vw,13px)] tracking-[2px] uppercase text-dore mb-4">
              {event.location}
            </p>
          )}
          <p className="text-[clamp(14px,1vw,15px)] text-taupe leading-relaxed whitespace-pre-line">
            {event.description}
          </p>
          {event.link && (
            <span className="inline-flex items-center gap-2 mt-5 text-dore text-[clamp(11px,0.85vw,13px)] tracking-wider uppercase">
              <span className="border-b border-champagne/40 group-hover:border-dore pb-0.5 transition-colors duration-300">
                En savoir plus
              </span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:translate-x-1 transition-transform duration-300">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </span>
          )}
        </div>
      </Wrapper>
    </SectionReveal>
  );
}
