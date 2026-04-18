"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsapConfig";
import SectionReveal from "@/components/ui/SectionReveal";

export default function ShowStageDj() {
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
      {/* ── HERO — juste une photo ── */}
      <section className="relative h-[50vh] overflow-hidden">
        <div className="absolute inset-0 bg-charbon">
          <div className="absolute inset-0 bg-gradient-to-t from-noir/30 via-charbon/10 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[10px] tracking-[3px] uppercase text-blanc/20">
              Photo hero show / stage
            </span>
          </div>
        </div>
      </section>

      {/* ── TITRE + WEEK END TANGO ── */}
      <section ref={heroRef} className="py-[clamp(48px,8vw,100px)] px-[clamp(16px,3vw,40px)]">
        <div className="max-w-[min(1000px,90vw)] mx-auto">
          <SectionReveal>
            <div className="text-center mb-12">
              <h1 className="hero-animate font-display text-[clamp(36px,5vw,64px)] font-light leading-[1.1] text-noir mb-4">
                Show, Stage <em className="italic text-brun">&amp; DJ</em>
              </h1>
              <p className="hero-animate text-[clamp(14px,1.1vw,17px)] text-taupe leading-relaxed max-w-xl mx-auto mb-8">
                Week-ends tango, stages exceptionnels, spectacles scéniques
                et musicalisation de soirées.
              </p>
            </div>

            <div className="bg-blanc border border-beige rounded-lg p-[clamp(24px,4vw,50px)] text-center">
              <p className="text-[clamp(15px,1.15vw,18px)] text-taupe leading-relaxed mb-6">
                Si vous êtes organisateurs de milonga, marathons, festivals ou
                tout autre événement et que vous souhaitez collaborer pour des
                stages, des shows ou musicaliser une soirée, je reste à votre
                disposition pour toutes informations.
              </p>
              <p className="text-[clamp(15px,1.15vw,18px)] text-taupe leading-relaxed">
                Je propose diverses formules et je travaille seule ou en
                collaboration avec différents danseurs professionnels
                européens et argentins.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── STAGES EXCEPTIONNELS ── */}
      <section className="py-[clamp(48px,8vw,100px)] px-[clamp(16px,3vw,40px)] bg-creme/40 border-t border-beige">
        <div className="max-w-[min(1200px,90vw)] mx-auto">
          <SectionReveal className="text-center mb-12">
            <h2 className="font-display text-[clamp(26px,2.5vw,38px)] font-light text-noir mb-6">
              Stages exceptionnels
            </h2>
          </SectionReveal>

          <SectionReveal>
            <div className="flex flex-col md:flex-row gap-8 items-center mb-14">
              <div className="md:w-1/2 space-y-5 text-[clamp(14px,1.05vw,16px)] text-taupe leading-relaxed">
                <p>
                  Les stages exceptionnels sont dispensés généralement une fois
                  par mois à Nice et j&apos;y aborde des thèmes spécifiques.
                  Cela vous permet de travailler votre technique en détail
                  et de manière plus intensive.
                </p>
                <p>
                  Ils sont ouverts à toutes et à tous, en couple ou seul(e),
                  et sont annoncés via le site ou les réseaux sociaux.
                </p>
                <p>
                  Certains stages seront dispensés par moi-même et d&apos;autres
                  par des danseurs professionnels européens et argentins, afin
                  de vous donner accès à d&apos;autres enseignements ainsi que
                  la possibilité de découvrir d&apos;autres types de tango,
                  de visions, de techniques, de personnalités — tout simplement
                  pour que vous puissiez profiter de la richesse de cette danse.
                </p>
              </div>
              <div className="md:w-1/2">
                <p className="font-display italic text-brun text-[clamp(20px,2vw,30px)] leading-snug text-center">
                  Chaque stage est une immersion.
                  Chaque rencontre, une ouverture.
                </p>
              </div>
            </div>
          </SectionReveal>

          {/* ── 3 Vidéos — 1 grande + 2 en dessous ── */}
          <SectionReveal>
            <div className="space-y-5">
              {/* Vidéo principale — grande */}
              <div className="relative aspect-video bg-charbon rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-noir/40 via-charbon/20 to-brun/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="group cursor-pointer flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-full border border-blanc/30 flex items-center justify-center group-hover:border-champagne/60 group-hover:scale-110 transition-all duration-500">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="ml-1">
                        <polygon points="6,3 20,12 6,21" fill="white" opacity="0.8" />
                      </svg>
                    </div>
                    <span className="text-[10px] tracking-[3px] uppercase text-blanc/40">
                      Vidéo stage / show
                    </span>
                  </div>
                </div>
              </div>

              {/* 2 vidéos en dessous */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="relative aspect-video bg-charbon rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-noir/40 via-charbon/20 to-brun/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="group cursor-pointer flex flex-col items-center gap-3">
                      <div className="w-14 h-14 rounded-full border border-blanc/30 flex items-center justify-center group-hover:border-champagne/60 group-hover:scale-110 transition-all duration-500">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="ml-1">
                          <polygon points="6,3 20,12 6,21" fill="white" opacity="0.8" />
                        </svg>
                      </div>
                      <span className="text-[10px] tracking-[3px] uppercase text-blanc/40">
                        Vidéo
                      </span>
                    </div>
                  </div>
                </div>

                <div className="relative aspect-video bg-charbon rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-noir/40 via-charbon/20 to-brun/10" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="group cursor-pointer flex flex-col items-center gap-3">
                      <div className="w-14 h-14 rounded-full border border-blanc/30 flex items-center justify-center group-hover:border-champagne/60 group-hover:scale-110 transition-all duration-500">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="ml-1">
                          <polygon points="6,3 20,12 6,21" fill="white" opacity="0.8" />
                        </svg>
                      </div>
                      <span className="text-[10px] tracking-[3px] uppercase text-blanc/40">
                        Vidéo
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <SectionReveal className="py-[clamp(64px,10vw,120px)] px-[clamp(20px,5vw,80px)] border-t border-beige">
        <div className="max-w-[min(600px,90vw)] mx-auto text-center">
          <p className="font-script text-[clamp(24px,2.8vw,38px)] text-brun mb-6">
            Envie de collaborer ?
          </p>
          <p className="text-[clamp(14px,1.05vw,16px)] text-taupe leading-relaxed mb-10">
            Contactez-moi pour discuter de votre événement,
            stage ou soirée. Je m&apos;adapte à vos besoins.
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
