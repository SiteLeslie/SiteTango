"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsapConfig";
import SectionReveal from "@/components/ui/SectionReveal";
import KsPhoto from "@/components/ui/KsPhoto";

type Props = {
  hero: string | null;
  djSet: string | null;
};

/* ───────────────── PAYS / SCÈNES ───────────────── */

const countries = [
  "France", "Italie", "Espagne", "Grèce",
  "Hongrie", "Tchéquie", "Chypre",
];

/* ───────────────── APPROCHE ───────────────── */

const approach = [
  {
    title: "Une oreille de danseuse",
    description:
      "Je sélectionne mes tandas en pensant au corps qui les écoute. Un bon DJ ne fait pas écouter de la musique — il fait danser.",
  },
  {
    title: "Le respect des codes",
    description:
      "Tango, Vals, Milonga, cortinas — je construis une soirée qui respecte la tradition et les attentes des danseurs en piste.",
  },
  {
    title: "Une lecture de la salle",
    description:
      "Chaque milonga a son énergie. J’adapte mes choix en fonction du niveau, de l’ambiance et du moment de la soirée.",
  },
];

/* ───────────────── PAGE ───────────────── */

export default function DjClient({ hero, djSet }: Props) {
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
      {/* ── HERO — Photo ── */}
      <section className="relative h-[45vh] overflow-hidden">
        <div className="absolute inset-0 bg-charbon">
          <KsPhoto
            src={hero}
            alt="Leslie Folcarelli, DJ tango"
            placeholderLabel="Photo hero DJ"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-noir/40 via-charbon/15 to-transparent pointer-events-none" />
        </div>
      </section>

      {/* ── TITRE ── */}
      <section ref={heroRef} className="py-[clamp(48px,8vw,100px)] px-[clamp(20px,5vw,80px)] text-center">
        <h1 className="hero-animate font-display text-[clamp(36px,5vw,64px)] font-light leading-[1.1] text-noir mb-4">
          DJ <em className="italic text-brun">Tango</em>
        </h1>
        <p className="hero-animate text-[clamp(14px,1.1vw,17px)] text-taupe leading-relaxed max-w-2xl mx-auto">
          La sensibilité d&apos;une danseuse au service des milongas,
          festivals et marathons — en France et à travers l&apos;Europe.
        </p>
      </section>

      {/* ── PRÉSENTATION — Photo + Texte ── */}
      <section className="px-[clamp(16px,3vw,40px)] pb-[clamp(40px,6vw,80px)]">
        <div className="max-w-[1400px] mx-auto">
          <SectionReveal>
            <div className="flex flex-col md:flex-row-reverse">
              {/* Photo */}
              <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-[500px] bg-charbon overflow-hidden rounded-t-lg md:rounded-r-lg md:rounded-tl-none">
                <KsPhoto
                  src={djSet}
                  alt="DJ set tango — Leslie Folcarelli"
                  placeholderLabel="Photo DJ set"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Texte */}
              <div className="w-full md:w-1/2 flex items-center bg-blanc p-[clamp(24px,4vw,60px)] border border-beige border-t-0 md:border-t md:border-r-0 rounded-b-lg md:rounded-l-lg md:rounded-br-none">
                <div className="max-w-lg space-y-5 text-[clamp(14px,1.05vw,16px)] text-taupe leading-relaxed">
                  <p>
                    Danseuse avant d&apos;être DJ, j&apos;ai construit mon
                    approche de la musicalisation en piste — à l&apos;écoute
                    de ce qui fait vibrer un corps qui danse.
                  </p>
                  <p>
                    Je musicalise des milongas, festivals et marathons en
                    France et à travers l&apos;Europe, avec une sélection
                    fidèle à la tradition du Tango Argentin (Golden Age,
                    Tango Vals, Milonga) et ouverte aux interprétations
                    contemporaines lorsque le contexte s&apos;y prête.
                  </p>
                  <p>
                    Mon objectif n&apos;est pas de me faire entendre,
                    mais de faire danser. Chaque tanda est pensée comme un
                    arc — un crescendo qui invite, qui élève, et qui laisse
                    aux danseurs l&apos;espace pour habiter pleinement la piste.
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── APPROCHE — 3 cartes ── */}
      <section className="py-[clamp(64px,10vw,120px)] px-[clamp(16px,3vw,40px)] bg-creme/40 border-t border-beige">
        <div className="max-w-[min(1200px,90vw)] mx-auto">
          <SectionReveal className="text-center mb-14">
            <p className="text-[clamp(10px,0.8vw,12px)] tracking-[3px] uppercase text-dore mb-3">
              Approche
            </p>
            <h2 className="font-display text-[clamp(28px,3vw,44px)] font-light text-noir">
              Ma façon de musicaliser
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {approach.map((item, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="bg-blanc border border-beige rounded-lg p-8 h-full hover:border-champagne hover:shadow-md hover:shadow-champagne/10 transition-all duration-300">
                  <span className="text-2xl block mb-4 text-champagne">◉</span>
                  <h3 className="font-display text-[clamp(20px,1.8vw,26px)] font-light text-noir mb-2">
                    {item.title}
                  </h3>
                  <div className="w-8 h-px bg-champagne my-4" />
                  <p className="text-[clamp(13px,1vw,15px)] text-taupe leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── PAYS ── */}
      <section className="py-[clamp(64px,10vw,120px)] px-[clamp(20px,5vw,80px)] border-t border-beige">
        <div className="max-w-[min(900px,90vw)] mx-auto text-center">
          <SectionReveal>
            <p className="text-[clamp(10px,0.8vw,12px)] tracking-[3px] uppercase text-dore mb-3">
              J&apos;ai musicalisé en
            </p>
            <h2 className="font-display text-[clamp(28px,3vw,44px)] font-light text-noir mb-10">
              Des scènes à travers l&apos;Europe
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {countries.map((c, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-creme/60 border border-beige rounded-full text-[clamp(12px,0.95vw,14px)] text-brun hover:border-champagne hover:bg-blanc transition-colors duration-200"
                >
                  {c}
                </span>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── CITATION ── */}
      <section className="py-[clamp(64px,10vw,120px)] px-[clamp(20px,5vw,80px)] bg-creme/40 border-t border-beige">
        <div className="max-w-[min(800px,90vw)] mx-auto text-center">
          <SectionReveal>
            <p className="font-display italic text-[clamp(22px,2.5vw,34px)] text-brun/80 leading-snug">
              Un bon DJ ne se fait pas écouter.
              <br />
              Il fait danser.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <SectionReveal className="py-[clamp(64px,10vw,120px)] px-[clamp(20px,5vw,80px)] border-t border-beige">
        <div className="max-w-[min(600px,90vw)] mx-auto text-center">
          <p className="font-script text-[clamp(24px,2.8vw,38px)] text-brun mb-6">
            Un événement à musicaliser ?
          </p>
          <p className="text-[clamp(14px,1.05vw,16px)] text-taupe leading-relaxed mb-10">
            Organisateurs de milongas, festivals ou marathons —
            parlons de votre événement et de ce qu&apos;on peut construire
            ensemble.
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
          <Link
            href="/evenements-tango"
            className="inline-flex items-center gap-2 text-taupe text-sm mt-8 hover:text-brun transition-colors duration-200"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Retour aux événements
          </Link>
        </div>
      </SectionReveal>
    </>
  );
}
