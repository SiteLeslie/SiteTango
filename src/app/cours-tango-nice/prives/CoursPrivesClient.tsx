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

/* ───────────────── TARIFS ───────────────── */

const tarifs = [
  { name: "Cours 1h", price: "50€", detail: null },
  { name: "Cours 2h", price: "95€", detail: "au lieu de 100€" },
  { name: "Forfait 4h / mois", price: "190€", detail: "au lieu de 200€" },
  { name: "Forfait 6h / mois", price: "285€", detail: "au lieu de 300€" },
];

/* ───────────────── PAGE ───────────────── */

export default function CoursPrivesClient({ photo }: Props) {
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
          Cours privés
        </h1>
        <p className="hero-animate text-[clamp(14px,1.1vw,17px)] text-taupe leading-relaxed max-w-xl mx-auto">
          Un accompagnement sur mesure, seul(e) ou en couple,
          du lundi au dimanche de 9h à 21h.
        </p>
      </section>

      {/* ── CONTENU — Photo + Texte ── */}
      <section className="px-[clamp(16px,3vw,40px)] pb-[clamp(40px,6vw,80px)]">
        <div className="max-w-[1400px] mx-auto">
          <SectionReveal>
            <div className="flex flex-col md:flex-row">
              {/* Photo */}
              <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-[500px] bg-charbon overflow-hidden rounded-l-lg md:rounded-l-lg rounded-t-lg md:rounded-t-none">
                <KsPhoto
                  src={photo}
                  alt="Cours privé de tango avec Leslie Folcarelli"
                  placeholderLabel="Photo / Vidéo cours privé"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Texte */}
              <div className="w-full md:w-1/2 flex items-center bg-blanc p-[clamp(24px,4vw,60px)] border border-beige border-l-0 rounded-r-lg md:rounded-r-lg rounded-b-lg md:rounded-b-none">
                <div className="max-w-lg space-y-5 text-[clamp(14px,1.05vw,16px)] text-taupe leading-relaxed">
                  <p>
                    Les cours privés vous permettent de travailler plus en profondeur
                    votre tango : améliorer votre technique, votre guidage, votre
                    pratique ou apprendre une chorégraphie.
                  </p>
                  <p>
                    C&apos;est aussi un moyen de commencer tranquillement et
                    individuellement pour ceux et celles qui sont un peu timides
                    et qui n&apos;osent pas les cours collectifs dans un premier temps.
                  </p>
                  <p>
                    Vous pouvez être en couple ou seul(e) avec moi et nous décidons
                    ensemble de ce que vous souhaitez travailler.
                  </p>
                  <p>
                    Je dispense les cours privés <strong className="text-texte font-medium">du lundi au
                    dimanche de 9h à 21h</strong> sans limite de temps, en fonction
                    de la disponibilité de la salle, de vos disponibilités ainsi
                    que de mes créneaux restants.
                  </p>
                  <p>
                    Je me déplace aussi à domicile sur Nice et sa région,
                    de Cannes à Vintimille.
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── TARIFS ── */}
      <section className="py-[clamp(64px,10vw,120px)] px-[clamp(16px,3vw,40px)] bg-creme/40 border-t border-beige">
        <div className="max-w-[min(900px,90vw)] mx-auto">
          <SectionReveal className="text-center mb-14">
            <h2 className="font-display text-[clamp(28px,3vw,44px)] font-light text-noir">
              Tarifs
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {tarifs.map((t, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="bg-blanc border border-beige rounded-lg p-6 text-center hover:border-champagne/40 transition-colors duration-200 h-full flex flex-col items-center justify-center">
                  <h3 className="font-display text-[clamp(18px,1.5vw,22px)] font-light text-noir mb-4">
                    {t.name}
                  </h3>
                  <div className="font-display text-[clamp(32px,3vw,44px)] font-light text-brun mb-1">
                    {t.price}
                  </div>
                  {t.detail && (
                    <span className="text-[clamp(12px,0.9vw,14px)] text-dore italic">
                      {t.detail}
                    </span>
                  )}
                </div>
              </SectionReveal>
            ))}
          </div>

          <p className="text-center text-[clamp(14px,1.05vw,16px)] text-brun mt-8 font-medium underline underline-offset-4 decoration-champagne">
            Location de salle et déplacement non compris
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <SectionReveal className="py-[clamp(64px,10vw,120px)] px-[clamp(20px,5vw,80px)] border-t border-beige">
        <div className="max-w-[min(600px,90vw)] mx-auto text-center">
          <p className="font-script text-[clamp(24px,2.8vw,38px)] text-brun mb-6">
            Réservez votre cours privé
          </p>
          <p className="text-[clamp(14px,1.05vw,16px)] text-taupe leading-relaxed mb-10">
            Contactez-moi pour convenir d&apos;un créneau
            et définir vos objectifs ensemble.
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
