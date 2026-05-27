"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsapConfig";
import SectionReveal from "@/components/ui/SectionReveal";
import KsPhoto from "@/components/ui/KsPhoto";

type Props = {
  photo: string | null;
};

/* ───────────────── THÈMES ABORDÉS ───────────────── */

const themes = [
  {
    title: "Technique & posture",
    description:
      "Travail du transfert de poids, de la dissociation, de l'axe et de l'équilibre — les fondations qui rendent la danse fluide et confortable.",
  },
  {
    title: "Musicalité & interprétation",
    description:
      "Comprendre les orchestres, identifier les phrases musicales, jouer avec les silences et les accents pour habiter chaque tanda.",
  },
  {
    title: "Connexion & écoute",
    description:
      "Affiner l'abrazo, développer la qualité de présence à deux, et transformer chaque pas en dialogue plutôt qu'en suite mécanique.",
  },
  {
    title: "Embellissements & créativité",
    description:
      "Adornos, ganchos, sacadas — des outils d'expression à intégrer avec goût pour enrichir la danse sans la surcharger.",
  },
];

/* ───────────────── PAGE ───────────────── */

export default function StagesClient({ photo }: Props) {
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
          Stages
        </h1>
        <p className="hero-animate text-[clamp(14px,1.1vw,17px)] text-taupe leading-relaxed max-w-xl mx-auto">
          Une fois par mois à Nice — un thème, un week-end,
          une immersion pour faire progresser votre tango en profondeur.
        </p>
      </section>

      {/* ── PRÉSENTATION — Photo + Texte ── */}
      <section className="px-[clamp(16px,3vw,40px)] pb-[clamp(40px,6vw,80px)]">
        <div className="max-w-[1400px] mx-auto">
          <SectionReveal>
            <div className="flex flex-col md:flex-row">
              {/* Photo */}
              <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-[500px] bg-charbon overflow-hidden rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
                <KsPhoto
                  src={photo}
                  alt="Stage de tango argentin à Nice"
                  placeholderLabel="Photo stage"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Texte */}
              <div className="w-full md:w-1/2 flex items-center bg-blanc p-[clamp(24px,4vw,60px)] border border-beige border-t-0 md:border-t md:border-l-0 rounded-b-lg md:rounded-r-lg md:rounded-bl-none">
                <div className="max-w-lg space-y-5 text-[clamp(14px,1.05vw,16px)] text-taupe leading-relaxed">
                  <p>
                    Les stages thématiques mensuels sont des week-ends dédiés
                    à un aspect précis du tango. Vous y travaillez la technique,
                    la musicalité ou la connexion en détail et de manière intensive.
                  </p>
                  <p>
                    Ils sont ouverts à toutes et à tous, en couple ou seul(e),
                    et accessibles à tous les niveaux —
                    j&apos;adapte le contenu en fonction du groupe.
                  </p>
                  <p>
                    Certains stages sont dispensés par moi-même, d&apos;autres
                    en collaboration avec des danseurs professionnels européens
                    et argentins invités à Nice. Une façon de découvrir d&apos;autres
                    visions, d&apos;autres techniques, d&apos;autres personnalités
                    et de profiter de toute la richesse de cette danse.
                  </p>
                  <p>
                    Les dates et thèmes sont annoncés via le site
                    et les réseaux sociaux.
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── THÈMES ABORDÉS ── */}
      <section className="py-[clamp(64px,10vw,120px)] px-[clamp(16px,3vw,40px)] bg-creme/40 border-t border-beige">
        <div className="max-w-[min(1200px,90vw)] mx-auto">
          <SectionReveal className="text-center mb-14">
            <p className="text-[clamp(10px,0.8vw,12px)] tracking-[3px] uppercase text-dore mb-3">
              Au programme
            </p>
            <h2 className="font-display text-[clamp(28px,3vw,44px)] font-light text-noir">
              Thèmes abordés
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {themes.map((theme, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="bg-blanc border border-beige rounded-lg p-8 h-full hover:border-champagne hover:shadow-md hover:shadow-champagne/10 transition-all duration-300">
                  <span className="text-2xl block mb-4 text-champagne">◆</span>
                  <h3 className="font-display text-[clamp(20px,1.8vw,26px)] font-light text-noir mb-2">
                    {theme.title}
                  </h3>
                  <div className="w-8 h-px bg-champagne my-4" />
                  <p className="text-[clamp(13px,1vw,15px)] text-taupe leading-relaxed">
                    {theme.description}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FORMAT — Citation ── */}
      <section className="py-[clamp(64px,10vw,120px)] px-[clamp(20px,5vw,80px)] border-t border-beige">
        <div className="max-w-[min(800px,90vw)] mx-auto text-center">
          <SectionReveal>
            <p className="font-display italic text-[clamp(22px,2.5vw,34px)] text-brun/80 leading-snug">
              Chaque stage est une immersion.
              <br />
              Chaque rencontre, une ouverture.
            </p>
          </SectionReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <SectionReveal className="py-[clamp(64px,10vw,120px)] px-[clamp(20px,5vw,80px)] bg-creme/40 border-t border-beige">
        <div className="max-w-[min(600px,90vw)] mx-auto text-center">
          <p className="font-script text-[clamp(24px,2.8vw,38px)] text-brun mb-6">
            Le prochain stage vous appelle ?
          </p>
          <p className="text-[clamp(14px,1.05vw,16px)] text-taupe leading-relaxed mb-10">
            Contactez-moi pour connaître la date et le thème du prochain stage,
            ou pour être informé(e) en avant-première des prochaines sessions.
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
