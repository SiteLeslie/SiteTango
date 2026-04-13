"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsapConfig";
import SectionReveal from "@/components/ui/SectionReveal";

export default function MilongaNice() {
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
          Milonga <em className="italic text-brun">En Tus Brazos</em>
        </h1>
        <p className="hero-animate text-[clamp(14px,1.1vw,17px)] text-taupe leading-relaxed max-w-xl mx-auto">
          Un samedi par mois à Nice — une soirée de tango conviviale,
          chaleureuse et passionnément dansante.
        </p>
      </section>

      {/* ── PRÉSENTATION — Photo + Texte ── */}
      <section className="px-[clamp(16px,3vw,40px)] pb-[clamp(40px,6vw,80px)]">
        <div className="max-w-[1400px] mx-auto">
          <SectionReveal>
            <div className="flex flex-col md:flex-row">
              {/* Photo */}
              <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-[500px] bg-charbon overflow-hidden rounded-t-lg md:rounded-l-lg md:rounded-tr-none">
                <div className="absolute inset-0 bg-gradient-to-br from-noir/50 via-charbon/30 to-brun/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[10px] tracking-[3px] uppercase text-blanc/30">
                    Photo milonga
                  </span>
                </div>
              </div>

              {/* Texte */}
              <div className="w-full md:w-1/2 flex items-center bg-blanc p-[clamp(24px,4vw,60px)] border border-beige border-t-0 md:border-t md:border-l-0 rounded-b-lg md:rounded-r-lg md:rounded-bl-none">
                <div className="max-w-lg space-y-5 text-[clamp(14px,1.05vw,16px)] text-taupe leading-relaxed">
                  <p>
                    La milonga est un endroit où se retrouvent tous les passionné(e)s
                    de tango, quelque soit leur niveau.
                  </p>
                  <p>
                    C&apos;est une soirée où l&apos;on danse uniquement le Tango Argentin
                    — traditionnel, Vals, Milonga, Nuevo et Neo — et où l&apos;on pourra
                    partager quelques <em className="text-brun italic">tandas</em>*,
                    échanger des sourires, des discussions, boire un verre
                    et surtout s&apos;amuser 😊💃🕺
                  </p>
                  <p>
                    C&apos;est un endroit convivial et chaleureux.
                  </p>
                  <p>
                    Je vous invite à me retrouver un samedi par mois à la
                    Milonga En Tus Brazos. Les dates vous seront annoncées
                    sur le site et les réseaux sociaux.
                  </p>
                  <p className="text-[clamp(12px,0.9vw,14px)] text-taupe/70 italic border-t border-beige pt-4">
                    *Tandas : regroupement de 3 à 4 tangos de même style musical
                    (Tango, Tango Vals ou Tango Milonga) durant lequel les couples
                    dansent sans changer de partenaire. Séparées par une cortina.
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── ÉVÉNEMENT À LA UNE — Photo avec texte qui l'englobe ── */}
      <section className="py-[clamp(48px,8vw,100px)] px-[clamp(16px,3vw,40px)] bg-creme/40 border-t border-beige">
        <div className="max-w-[min(1000px,90vw)] mx-auto">
          <SectionReveal className="text-center mb-12">
            <p className="text-[clamp(10px,0.8vw,12px)] tracking-[3px] uppercase text-dore mb-3">
              Événement
            </p>
            <h2 className="font-display text-[clamp(28px,3vw,44px)] font-light text-noir">
              Soirée d&apos;ouverture
            </h2>
          </SectionReveal>

          <SectionReveal>
            <div className="text-[clamp(14px,1.05vw,16px)] text-taupe leading-relaxed">
              {/* Photo flottante à gauche */}
              <div className="float-left mr-8 mb-4 w-full sm:w-[45%]">
                <div className="relative aspect-[4/5] bg-charbon rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-noir/50 via-charbon/30 to-brun/20" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[10px] tracking-[3px] uppercase text-blanc/30">
                      Photo événement
                    </span>
                  </div>
                </div>
              </div>

              <p className="mb-5">
                C&apos;est avec une grande joie que je vous annonce l&apos;ouverture
                de ma Milonga En Tus Brazos !
              </p>

              <p className="mb-5">
                Pour cette occasion, j&apos;aurais le plaisir d&apos;accueillir
                <strong className="text-texte font-medium"> Julio Bassan</strong>,
                danseur et professeur international argentin, avec qui je
                dispenserai un cours à 19h et ferai une représentation
                durant la soirée.
              </p>

              <p className="mb-5">
                J&apos;aurais aussi l&apos;immense plaisir de vous présenter
                mon groupe chorégraphique que j&apos;ai mis en place il y a 5 mois,
                <strong className="text-texte font-medium"> Las Folca Tangueras</strong>,
                composé des superbes Milo, Kim, Marie-Pierre, Angela et Candice
                qui vous feront une petite représentation.
              </p>

              <p className="mb-5">
                Bien sûr une telle soirée a besoin d&apos;un DJ hors pair et il
                était évident qu&apos;il nous fallait le meilleur. Il est reconnu
                avec sa sublime partenaire et femme comme un grand professionnel,
                et sa renommée n&apos;est plus à refaire de par sa musicalité
                irréprochable. Pour ce jour, il nous fera l&apos;honneur et le
                plaisir de revêtir sa casquette de DJ pour nous faire danser
                sur sa meilleure sélection musicale —
                <strong className="text-texte font-medium"> Édouard Pacaud</strong>.
              </p>

              <p className="mb-5 font-display italic text-brun text-[clamp(16px,1.3vw,20px)]">
                Alors ne ratez pas cet événement ! Nous vous attendons nombreuses
                et nombreux pour partager de superbes abrazos chaleureux et
                passionnément tango dans une ambiance conviviale, pour
                l&apos;amour du tango.
              </p>

              <p className="font-script text-[clamp(20px,2vw,28px)] text-brun mb-6">
                Abrazooo todos y nos vemos en la pista
              </p>

              <div className="clear-both" />

              <div className="bg-brun/5 border border-champagne/30 rounded-lg p-5 mt-4">
                <p className="text-brun font-medium text-[clamp(13px,1vw,15px)]">
                  La participation au cours se fait sur réservation
                  et est limitée — pensez à réserver votre place !
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <SectionReveal className="py-[clamp(64px,10vw,120px)] px-[clamp(20px,5vw,80px)] border-t border-beige">
        <div className="max-w-[min(600px,90vw)] mx-auto text-center">
          <p className="font-script text-[clamp(24px,2.8vw,38px)] text-brun mb-6">
            Rejoignez-nous sur la piste
          </p>
          <p className="text-[clamp(14px,1.05vw,16px)] text-taupe leading-relaxed mb-10">
            Suivez les prochaines dates sur les réseaux sociaux
            ou contactez-moi directement.
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
