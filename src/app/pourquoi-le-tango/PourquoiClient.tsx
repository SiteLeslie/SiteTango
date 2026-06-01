"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsapConfig";
import SectionReveal from "@/components/ui/SectionReveal";
import KsPhoto from "@/components/ui/KsPhoto";

type Props = {
  photo: string | null;
};

/* ───────────────── 4 DIMENSIONS ───────────────── */

const dimensions = [
  {
    title: "Physiquement",
    text: "Vous prenez conscience de votre corps, gagnez en élégance, travaillez votre posture, votre souplesse, tout en douceur. Vous apprenez à bouger autrement, à prévenir les douleurs et la raideur du quotidien.",
  },
  {
    title: "Intellectuellement",
    text: "Vous stimulez votre créativité, renforcez votre mémoire, et surtout, vous apprenez à lâcher prise.",
  },
  {
    title: "Émotionnellement",
    text: "Vous explorez vos ressentis, apprenez à accueillir vos émotions, à vous comprendre et à comprendre l'autre, à vivre l'instant sans jugement, dans la bienveillance.",
  },
  {
    title: "Spirituellement",
    text: "Vous percevez ce qui ne se voit pas, vous vous connectez à des énergies subtiles, vous découvrez une forme de langage silencieux, profond, presque méditatif.",
  },
];

/* ───────────────── PAGE ───────────────── */

export default function PourquoiClient({ photo }: Props) {
  const heroRef = useRef<HTMLDivElement>(null);
  const dimensionsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!heroRef.current) return;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;
      const els = heroRef.current.querySelectorAll(".hero-animate");
      gsap.from(els, { y: 30, opacity: 0, duration: 0.8, stagger: 0.12, ease: "power2.out" });
    },
    { scope: heroRef }
  );

  useGSAP(
    () => {
      if (!dimensionsRef.current) return;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;
      const cards = dimensionsRef.current.querySelectorAll(".dim-card");
      cards.forEach((card, i) => {
        gsap.from(card, {
          y: 50, opacity: 0, duration: 0.7, delay: i * 0.15, ease: "power2.out",
          scrollTrigger: { trigger: card, start: "top 85%", once: true },
        });
      });
    },
    { scope: dimensionsRef }
  );

  return (
    <>
      {/* ── HERO IMMERSIF ── */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-charbon">
          <div className="absolute inset-0 bg-gradient-to-r from-noir/80 via-charbon/60 to-noir/80" />
        </div>

        <div ref={heroRef} className="relative z-10 max-w-[min(900px,90vw)] mx-auto text-center px-[clamp(20px,5vw,80px)] py-16">
          <p className="hero-animate text-[clamp(10px,0.85vw,12px)] tracking-[4px] uppercase text-champagne mb-6">
            Le tango argentin
          </p>

          <h1 className="hero-animate font-display text-[clamp(36px,5vw,72px)] font-light leading-[1.1] text-blanc mb-8">
            Entrez dans l&apos;univers magique
            <br />
            <em className="italic text-champagne-clair">du Tango Argentin</em>
          </h1>

          <p className="hero-animate font-script text-[clamp(20px,2.2vw,34px)] text-champagne-clair">
            Bien plus qu&apos;une danse, un art de vivre
          </p>
        </div>
      </section>

      {/* ── TEXTE POÉTIQUE — les mots de Leslie ── */}
      <section className="py-[clamp(64px,10vw,120px)] px-[clamp(20px,5vw,80px)]">
        <div className="max-w-[min(1100px,90vw)] mx-auto flex flex-col md:flex-row gap-[clamp(32px,5vw,72px)] items-center md:items-start">
          {/* Photo à gauche */}
          <SectionReveal className="w-full md:w-[42%] flex-shrink-0">
            <div className="relative w-full aspect-[3/4] rounded-lg overflow-hidden bg-creme border border-beige md:sticky md:top-28">
              <KsPhoto
                src={photo}
                alt="Couple dansant le tango argentin"
                placeholderLabel="Photo tango"
                sizes="(max-width: 768px) 90vw, 42vw"
              />
            </div>
          </SectionReveal>

          {/* Texte à droite */}
          <div className="flex-1 space-y-8 text-[clamp(15px,1.15vw,18px)] text-texte leading-relaxed">
            <SectionReveal>
              <p>
                L&apos;union de deux personnes, deux âmes, deux cœurs, deux corps
                — parfois encore inconnus — qui, le temps d&apos;un instant,
                vont écrire une histoire. <em className="font-display italic text-brun text-[clamp(17px,1.3vw,21px)]">Leur histoire.</em>
              </p>
            </SectionReveal>

            <SectionReveal>
              <p>
                Un échange surprenant, envoûtant, riche, comme une conversation
                silencieuse qui se construit pas à pas, portée par l&apos;écoute
                mutuelle, la confiance et la créativité de chacun.
              </p>
            </SectionReveal>

            <SectionReveal>
              <p>
                Bien plus qu&apos;une danse, le Tango Argentin est un art de vivre.
                C&apos;est l&apos;art de s&apos;écouter soi-même tout en étant
                profondément à l&apos;écoute de l&apos;autre. Se connecter, se
                respecter, créer ensemble. C&apos;est savoir donner, recevoir,
                et oser être pleinement présent.
              </p>
            </SectionReveal>

            <SectionReveal>
              <p className="font-display italic text-brun text-[clamp(18px,1.6vw,24px)] leading-snug">
                Tout est là : dans le partage, la connexion,
                les émotions, la fusion… et le plaisir.
              </p>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ── SCÈNE ATMOSPHÉRIQUE ── */}
      <SectionReveal className="py-[clamp(48px,8vw,100px)] px-[clamp(20px,5vw,80px)] bg-brun">
        <div className="max-w-[min(800px,90vw)] mx-auto text-center">
          <p className="font-script text-[clamp(24px,2.8vw,40px)] text-champagne-clair leading-relaxed mb-8">
            Imaginez une salle tamisée. Le murmure du parquet sous les pas.
            Des regards qui se cherchent.
          </p>
          <p className="text-[clamp(15px,1.15vw,18px)] text-blanc/70 leading-relaxed max-w-2xl mx-auto">
            Un accord de bandonéon, et tout commence. Le monde s&apos;efface.
            Il ne reste que vous, l&apos;autre, et la musique.
          </p>
        </div>
      </SectionReveal>

      {/* ── 4 DIMENSIONS DE TRANSFORMATION ── */}
      <section className="py-[clamp(64px,10vw,120px)] px-[clamp(20px,5vw,80px)]">
        <div className="max-w-[min(1200px,90vw)] mx-auto">
          <SectionReveal className="text-center mb-6">
            <p className="text-[clamp(10px,0.8vw,12px)] tracking-[3px] uppercase text-dore mb-3">
              Un chemin de transformation
            </p>
            <h2 className="font-display text-[clamp(28px,3vw,44px)] font-light text-noir">
              Ce que le tango vous apporte
            </h2>
          </SectionReveal>

          <SectionReveal className="text-center mb-14">
            <p className="text-[clamp(14px,1.05vw,16px)] text-taupe max-w-2xl mx-auto leading-relaxed">
              Apprendre à danser le tango, c&apos;est bien plus qu&apos;acquérir
              une technique. C&apos;est un chemin de transformation personnelle,
              qui vous apporte à tous les niveaux de votre vie.
            </p>
          </SectionReveal>

          <div ref={dimensionsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dimensions.map((dim, i) => (
              <div
                key={i}
                className="dim-card bg-blanc border border-beige rounded-lg p-8 hover:border-champagne hover:shadow-lg hover:shadow-champagne/10 transition-all duration-300"
              >
                <h3 className="font-display text-[clamp(24px,2.2vw,32px)] font-light text-noir mb-5">
                  {dim.title}
                </h3>
                <div className="w-10 h-px bg-champagne mb-5" />
                <p className="text-[clamp(14px,1.05vw,16px)] text-taupe leading-relaxed">
                  {dim.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── LA RENCONTRE ── */}
      <SectionReveal className="py-[clamp(48px,8vw,100px)] px-[clamp(20px,5vw,80px)] bg-creme/40 border-t border-beige">
        <div className="max-w-[min(800px,90vw)] mx-auto text-center">
          <p className="text-[clamp(15px,1.15vw,18px)] text-texte leading-relaxed mb-8">
            Mais le tango, c&apos;est aussi une rencontre. Avec soi-même, avec
            les autres, avec une communauté chaleureuse et ouverte. On y
            découvre l&apos;humilité, l&apos;écoute, l&apos;entraide.
          </p>
          <p className="font-display italic text-brun text-[clamp(20px,2vw,30px)] leading-snug">
            Chacun y trouve sa place.
          </p>
        </div>
      </SectionReveal>

      {/* ── INVITATION ── */}
      <section className="py-[clamp(64px,10vw,120px)] px-[clamp(20px,5vw,80px)] border-t border-beige">
        <div className="max-w-[min(800px,90vw)] mx-auto">
          <SectionReveal>
            <div className="text-center space-y-8">
              <p className="text-[clamp(15px,1.15vw,18px)] text-texte leading-relaxed">
                Que vous soyez seul(e) ou en couple, débutant(e) ou
                expérimenté(e), je vous invite à franchir le pas. Venez
                découvrir un univers à la fois intime et collectif, puissant
                et délicat, où chaque pas devient une expression de soi.
              </p>

              <p className="text-[clamp(15px,1.15vw,18px)] text-texte leading-relaxed">
                Je propose des cours accessibles à tous, dans une ambiance
                bienveillante, chaleureuse et inspirante. Il n&apos;y a pas
                besoin de partenaire, seulement l&apos;envie de se laisser
                surprendre.
              </p>

              <p className="font-script text-[clamp(24px,2.8vw,38px)] text-brun">
                Une fois entré dans ce monde magique…
                vous n&apos;aurez plus envie d&apos;en ressortir.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal className="mt-14">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/cours-tango-nice"
                className="px-8 py-3.5 bg-brun text-blanc rounded-full text-sm tracking-wider uppercase hover:bg-dore transition-colors duration-300"
              >
                Découvrir les cours
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3.5 border border-beige text-brun rounded-full text-sm tracking-wider uppercase hover:border-champagne hover:bg-creme/50 transition-all duration-300"
              >
                Me contacter
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
