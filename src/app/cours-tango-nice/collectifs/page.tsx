"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsapConfig";
import SectionReveal from "@/components/ui/SectionReveal";

/* ───────────────── 3 COURS ───────────────── */

const cours = [
  {
    title: "Cours de groupe mixte",
    schedule: "Tous les mercredis · 18h — 19h",
    location: "Centre de Nice Masséna",
    paragraphs: [
      "Vous pouvez vous y inscrire seul(e) ou en couple.",
      "Je vous apprends à danser le tango dans son intégralité. Vous apprendrez la base et sa technique, la musique et son interprétation, les codes de la milonga, le tango et sa culture.",
      "Mon objectif : vous transmettre tout ce que je peux afin que vous puissiez profiter en allant danser en milonga rapidement, et par la suite voyager pour découvrir le tango d'ailleurs.",
    ],
    imageAlt: "Cours collectif de tango",
    reverse: false,
  },
  {
    title: "Technique Femme / Follower",
    schedule: "Tous les mercredis · 19h — 20h",
    location: "Centre de Nice Masséna",
    paragraphs: [
      "Quelque soit votre niveau ou votre sexe, ce cours est ouvert à toutes les personnes désireuses de travailler leur technique personnelle.",
      "Je vous apprends à être indépendant(e)s dans votre danse, à prendre conscience de votre corps pour pouvoir le contrôler et ainsi embellir votre danse quand vous serez en abrazo avec le leader.",
      "Je vous aide à développer votre confiance en vous pour laisser place à votre créativité et laisser parler votre féminité. Je vous enseigne à être une danseuse et non une follower, à être en écoute active et non passive.",
    ],
    imageAlt: "Cours technique follower",
    reverse: true,
  },
  {
    title: "Chorégraphique TangoFemme",
    schedule: "Tous les mercredis · 20h — 21h",
    location: "Centre de Nice Masséna",
    paragraphs: [
      "C'est un cours où nous travaillerons le côté scénique du tango et où chaque élève sera indépendante. Ce cours vous permettra de développer votre féminité, votre confiance en vous et votre propre personnalité à l'intérieur de la danse.",
      "C'est un cours qui vous sera aussi bénéfique pour votre tango en couple puisque vous apprenez à danser et vous gérer seule — vous développerez donc votre côté danseuse.",
      "Nous travaillerons sur un thème spécifique, le but étant de le présenter en public pour celles qui le souhaiteront.",
    ],
    imageAlt: "Cours chorégraphique TangoFemme",
    reverse: false,
  },
];

/* ───────────────── TARIFS ───────────────── */

const tarifsUnite = [
  { label: "Cours à l'unité (-25 ans)", price: "12€" },
  { label: "Cours à l'unité (+25 ans)", price: "15€" },
];

const forfaits = [
  {
    name: "1 cours / semaine",
    prices: [
      { label: "-25 ans", price: "43€" },
      { label: "+25 ans", price: "55€" },
    ],
  },
  {
    name: "2 cours / semaine",
    prices: [
      { label: "-25 ans", price: "90€" },
      { label: "+25 ans", price: "115€" },
    ],
  },
  {
    name: "3 cours / semaine",
    prices: [
      { label: "-25 ans", price: "134€" },
      { label: "+25 ans", price: "170€" },
    ],
  },
];

/* ───────────────── PAGE ───────────────── */

export default function CoursCollectifs() {
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
      {/* ── TITRE ── */}
      <section ref={heroRef} className="pt-20 md:pt-28 pb-10 px-[clamp(20px,5vw,80px)] text-center">
        <h1 className="hero-animate font-display text-[clamp(36px,5vw,64px)] font-light leading-[1.1] text-noir mb-4">
          Cours collectifs
        </h1>
        <p className="hero-animate text-[clamp(14px,1.1vw,17px)] text-taupe leading-relaxed max-w-xl mx-auto">
          Tous les mercredis en plein centre de Nice Masséna.
          Trois cours pour trois approches du tango.
        </p>
      </section>

      {/* ── 3 COURS — alternance photo/texte ── */}
      <section className="py-[clamp(40px,6vw,80px)] px-[clamp(16px,3vw,40px)]">
        <div className="max-w-[1400px] mx-auto space-y-0">
          {cours.map((c, i) => (
            <SectionReveal key={i}>
              <div className={`flex flex-col ${c.reverse ? "md:flex-row-reverse" : "md:flex-row"} border-b border-beige last:border-b-0`}>
                {/* Photo */}
                <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-[450px] bg-charbon overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-noir/50 via-charbon/30 to-brun/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[10px] tracking-[3px] uppercase text-blanc/30">
                      {c.imageAlt}
                    </span>
                  </div>
                </div>

                {/* Texte */}
                <div className="w-full md:w-1/2 flex items-center p-[clamp(24px,4vw,60px)]">
                  <div className="max-w-lg">
                    <h2 className="font-display text-[clamp(26px,2.5vw,38px)] font-light text-noir mb-2">
                      {c.title}
                    </h2>
                    <div className="flex flex-wrap gap-3 mb-5">
                      <span className="text-[clamp(11px,0.85vw,13px)] px-3 py-1 rounded-full bg-creme border border-beige text-dore">
                        {c.schedule}
                      </span>
                      <span className="text-[clamp(11px,0.85vw,13px)] px-3 py-1 rounded-full bg-creme border border-beige text-taupe">
                        {c.location}
                      </span>
                    </div>
                    <div className="w-10 h-px bg-champagne mb-6" />
                    <div className="space-y-4">
                      {c.paragraphs.map((p, j) => (
                        <p key={j} className="text-[clamp(14px,1.05vw,16px)] text-taupe leading-relaxed">
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* ── TARIFS ── */}
      <section className="py-[clamp(64px,10vw,120px)] px-[clamp(16px,3vw,40px)] bg-creme/40 border-t border-beige">
        <div className="max-w-[min(900px,90vw)] mx-auto">
          <SectionReveal className="text-center mb-14">
            <p className="text-[clamp(10px,0.8vw,12px)] tracking-[3px] uppercase text-dore mb-3">
              Tarifs
            </p>
            <h2 className="font-display text-[clamp(28px,3vw,44px)] font-light text-noir">
              Grille tarifaire
            </h2>
          </SectionReveal>

          {/* Cours à l'unité */}
          <SectionReveal className="mb-10">
            <h3 className="font-display text-[clamp(20px,1.8vw,26px)] font-light text-noir mb-6 text-center">
              Cours à l&apos;unité
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {tarifsUnite.map((t, i) => (
                <div key={i} className="bg-blanc border border-beige rounded-lg p-6 flex items-center justify-between hover:border-champagne/40 transition-colors duration-200">
                  <span className="text-[clamp(14px,1.05vw,16px)] text-texte">{t.label}</span>
                  <span className="font-display text-[clamp(24px,2vw,32px)] font-light text-brun">{t.price}</span>
                </div>
              ))}
            </div>
          </SectionReveal>

          {/* Forfaits mensuels */}
          <SectionReveal>
            <h3 className="font-display text-[clamp(20px,1.8vw,26px)] font-light text-noir mb-6 text-center">
              Forfaits mensuels
            </h3>
            <div className="space-y-4">
              {forfaits.map((f, i) => (
                <div key={i} className="bg-blanc border border-beige rounded-lg overflow-hidden hover:border-champagne/40 transition-colors duration-200">
                  {/* Header forfait */}
                  <div className="bg-brun px-6 py-3">
                    <span className="text-[clamp(13px,1vw,15px)] text-blanc font-medium tracking-wide">
                      {f.name}
                    </span>
                  </div>
                  {/* Prix */}
                  <div className="grid grid-cols-2 divide-x divide-beige">
                    {f.prices.map((p, j) => (
                      <div key={j} className="p-5 text-center">
                        <span className="block text-[clamp(11px,0.85vw,13px)] text-taupe mb-1">{p.label}</span>
                        <span className="font-display text-[clamp(28px,2.5vw,38px)] font-light text-brun">{p.price}</span>
                        <span className="block text-[clamp(10px,0.8vw,12px)] text-taupe mt-1">/ mois</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <SectionReveal className="py-[clamp(64px,10vw,120px)] px-[clamp(20px,5vw,80px)] border-t border-beige">
        <div className="max-w-[min(600px,90vw)] mx-auto text-center">
          <p className="font-script text-[clamp(24px,2.8vw,38px)] text-brun mb-6">
            Prêt(e) à rejoindre le cours ?
          </p>
          <p className="text-[clamp(14px,1.05vw,16px)] text-taupe leading-relaxed mb-10">
            Contactez-moi pour vous inscrire ou pour toute question.
            Le premier cours est toujours un moment unique.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+33677509897"
              className="px-8 py-3.5 bg-brun text-blanc rounded-full text-sm tracking-wider uppercase hover:bg-dore transition-colors duration-300"
            >
              Appeler Leslie
            </a>
            <a
              href="mailto:lesliefolcarelli.tango@gmail.com"
              className="px-8 py-3.5 border border-beige text-brun rounded-full text-sm tracking-wider uppercase hover:border-champagne hover:bg-creme/50 transition-all duration-300"
            >
              Écrire par email
            </a>
          </div>
          <Link
            href="/cours-tango-nice"
            className="inline-flex items-center gap-2 text-taupe text-sm mt-8 hover:text-brun transition-colors duration-200"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Retour aux offres
          </Link>
        </div>
      </SectionReveal>
    </>
  );
}
