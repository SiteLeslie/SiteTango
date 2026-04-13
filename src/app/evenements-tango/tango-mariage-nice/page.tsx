"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsapConfig";
import SectionReveal from "@/components/ui/SectionReveal";

export default function MariageEvenements() {
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!contentRef.current) return;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;
      const els = contentRef.current.querySelectorAll(".animate");
      gsap.from(els, { y: 30, opacity: 0, duration: 0.7, stagger: 0.1, ease: "power2.out" });
    },
    { scope: contentRef }
  );

  return (
    <>
      {/* ── HERO — Vidéo plein écran ── */}
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-charbon">
          <div className="absolute inset-0 bg-gradient-to-t from-noir/50 via-charbon/20 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="group cursor-pointer flex flex-col items-center gap-3">
              <div className="w-20 h-20 rounded-full border border-blanc/30 flex items-center justify-center group-hover:border-champagne/60 group-hover:scale-110 transition-all duration-500">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="ml-1">
                  <polygon points="6,3 20,12 6,21" fill="white" opacity="0.8" />
                </svg>
              </div>
              <span className="text-[10px] tracking-[3px] uppercase text-blanc/40">
                Vidéo mariage
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTENU ── */}
      <div ref={contentRef}>

        {/* ── SPECTACLE DE TANGO ── */}
        <section className="py-[clamp(48px,8vw,100px)] px-[clamp(16px,3vw,40px)]">
          <div className="max-w-[min(1000px,90vw)] mx-auto">
            <h1 className="animate font-display text-[clamp(32px,4vw,56px)] font-light leading-[1.1] text-noir text-center mb-4">
              Anniversaires, Mariage
              <br />
              <em className="italic text-brun">&amp; Événements professionnels</em>
            </h1>

            <div className="animate w-16 h-px bg-champagne mx-auto my-10" />

            <div className="animate text-center mb-14">
              <h2 className="font-display text-[clamp(24px,2.5vw,36px)] font-light text-noir mb-6">
                Spectacle de Tango Argentin
              </h2>
              <p className="font-display italic text-brun text-[clamp(17px,1.5vw,22px)] leading-snug max-w-2xl mx-auto">
                Une expérience scénique unique
              </p>
            </div>

            <div className="space-y-6 text-[clamp(15px,1.15vw,18px)] text-taupe leading-relaxed">
              <SectionReveal>
                <p>
                  Vous souhaitez offrir à votre public un moment inoubliable,
                  vibrant d&apos;émotion et de passion ? Je vous propose des shows
                  de Tango Argentin sur-mesure, pensés pour s&apos;adapter à vos
                  envies, votre lieu, votre ambiance.
                </p>
              </SectionReveal>

              <SectionReveal>
                <p>
                  Danseuse professionnelle et chorégraphe, je travaille avec
                  différents danseurs et partenaires artistiques, tous issus
                  de la scène tango internationale. Selon votre projet, je compose
                  une équipe sur mesure, mêlant talent, élégance, connexion
                  et intensité émotionnelle.
                </p>
              </SectionReveal>
            </div>

            {/* Ce que je propose */}
            <SectionReveal className="mt-12">
              <div className="bg-blanc border border-beige rounded-lg p-[clamp(24px,4vw,50px)]">
                <h3 className="font-display text-[clamp(20px,1.8vw,26px)] font-light text-noir mb-6">
                  Ce que je vous propose
                </h3>
                <ul className="space-y-4 text-[clamp(14px,1.05vw,16px)] text-taupe leading-relaxed">
                  <li className="flex gap-3 items-start">
                    <span className="text-champagne mt-1 shrink-0">—</span>
                    Des duos de danse tango pour un moment fort et poétique
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-champagne mt-1 shrink-0">—</span>
                    Des performances en groupe, dynamiques et visuelles
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-champagne mt-1 shrink-0">—</span>
                    Une mise en scène adaptée à votre lieu — scène, salle, extérieur
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-champagne mt-1 shrink-0">—</span>
                    Une ambiance musicale vivante : violonistes, bandonéonistes, pianistes, guitaristes — pour un tango en live si vous le souhaitez
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="text-champagne mt-1 shrink-0">—</span>
                    Des prestations adaptées à tous les formats : événements culturels, festivals, mariages, soirées d&apos;entreprise, anniversaires, dîners privés
                  </li>
                </ul>
              </div>
            </SectionReveal>

            {/* Citation immersive */}
            <SectionReveal className="my-14">
              <div className="text-center">
                <p className="font-display italic text-brun text-[clamp(20px,2.2vw,32px)] leading-snug max-w-2xl mx-auto">
                  Entre tradition et modernité, mes spectacles racontent
                  l&apos;histoire d&apos;un lien, d&apos;un regard, d&apos;une musique
                  qui unit les corps.
                </p>
                <p className="text-[clamp(14px,1.05vw,16px)] text-taupe mt-4">
                  Qu&apos;il soit sensuel, théâtral ou festif, le tango touche
                  toujours au cœur.
                </p>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* ── OUVERTURE DE BAL ── */}
        <section className="py-[clamp(48px,8vw,100px)] px-[clamp(16px,3vw,40px)] bg-creme/40 border-t border-beige">
          <div className="max-w-[min(1200px,90vw)] mx-auto">
            <SectionReveal>
              <div className="flex flex-col md:flex-row gap-10 items-start">
                {/* Photo */}
                <div className="w-full md:w-[45%] shrink-0">
                  <div className="relative aspect-[3/4] bg-charbon rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-noir/40 via-charbon/20 to-brun/10" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-[10px] tracking-[3px] uppercase text-blanc/30">
                        Photo ouverture de bal
                      </span>
                    </div>
                  </div>
                </div>

                {/* Texte */}
                <div className="flex-1">
                  <p className="text-[clamp(10px,0.85vw,12px)] tracking-[3px] uppercase text-dore mb-3">
                    💍 Ouverture de bal
                  </p>
                  <h2 className="font-display text-[clamp(26px,2.5vw,38px)] font-light text-noir mb-6">
                    Une chorégraphie de mariage unique, à votre image
                  </h2>

                  <div className="space-y-5 text-[clamp(14px,1.05vw,16px)] text-taupe leading-relaxed">
                    <p>
                      Le jour de votre mariage est un moment inoubliable… Et quoi
                      de plus symbolique et magique qu&apos;une première danse qui
                      vous ressemble ?
                    </p>
                    <p>
                      Je vous propose une chorégraphie personnalisée, créée
                      spécialement pour vous deux : à votre rythme, selon vos envies,
                      votre histoire et vos émotions. Pas besoin d&apos;être danseur
                      ou danseuse !
                    </p>
                    <p>
                      Que vous soyez débutants, timides ou passionnés, je vous
                      accompagne avec bienveillance, patience et créativité.
                    </p>
                  </div>

                  {/* Ce que je propose */}
                  <div className="mt-8 space-y-3 text-[clamp(14px,1.05vw,16px)] text-taupe leading-relaxed">
                    <h3 className="font-display text-[clamp(18px,1.5vw,22px)] font-light text-noir mb-4">
                      Ce que je vous propose
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex gap-3 items-start">
                        <span className="text-champagne mt-1 shrink-0">—</span>
                        Une chorégraphie sur-mesure, en fonction de votre style, de votre niveau et de votre chanson coup de cœur
                      </li>
                      <li className="flex gap-3 items-start">
                        <span className="text-champagne mt-1 shrink-0">—</span>
                        Des cours en couple, dans une ambiance détendue et chaleureuse
                      </li>
                      <li className="flex gap-3 items-start">
                        <span className="text-champagne mt-1 shrink-0">—</span>
                        Une préparation à votre rythme, pour que vous soyez à l&apos;aise, élégants et connectés le jour J
                      </li>
                      <li className="flex gap-3 items-start">
                        <span className="text-champagne mt-1 shrink-0">—</span>
                        Des astuces pour gérer le stress, se tenir avec grâce, et vivre ce moment avec émotion
                      </li>
                    </ul>
                  </div>

                  <div className="mt-8 bg-brun/5 border border-champagne/30 rounded-lg p-5">
                    <p className="font-display italic text-brun text-[clamp(16px,1.3vw,20px)] leading-snug">
                      Parce que chaque couple est unique, votre danse le sera aussi.
                    </p>
                    <p className="text-[clamp(13px,1vw,15px)] text-taupe mt-2">
                      Tous les couples qui souhaitent une première danse sincère,
                      touchante ou originale — tango, valse ou tout autre style.
                    </p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* ── CTA ── */}
        <SectionReveal className="py-[clamp(64px,10vw,120px)] px-[clamp(20px,5vw,80px)] border-t border-beige">
          <div className="max-w-[min(600px,90vw)] mx-auto text-center">
            <p className="font-script text-[clamp(24px,2.8vw,38px)] text-brun mb-4">
              Vous avez un projet, une envie ?
            </p>
            <p className="text-[clamp(14px,1.05vw,16px)] text-taupe leading-relaxed mb-10">
              Je serai ravie d&apos;en discuter avec vous pour construire
              un moment sur-mesure qui marquera les esprits.
              Premier échange sans engagement.
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
      </div>
    </>
  );
}
