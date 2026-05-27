"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsapConfig";
import SectionReveal from "@/components/ui/SectionReveal";

type Props = {
  heroPhoto: string | null;
  heroAlt: string;
};

/* ───────────────── PALMARÈS ───────────────── */

const palmaresHighlights = [
  {
    year: "2017",
    title: "Semi-finaliste Championnat du Monde",
    detail: "Buenos Aires — Catégorie Pista",
    tier: "world",
  },
  {
    year: "2019",
    title: "Championne d'Europe — Tango Vals",
    detail: "Munster, Allemagne",
    tier: "gold",
  },
  {
    year: "2019",
    title: "Vice-Championne d'Europe",
    detail: "Munster — Catégorie Pista",
    tier: "silver",
  },
];

const palmaresOther = [
  { year: "2024", title: "Finaliste Championnat Européen", detail: "Chypre — Pista, Vals & Milonga" },
  { year: "2019", title: "3e place — Championnat de Berlin", detail: "Catégorie Pista" },
  { year: "2019", title: "4e place — Championnat du Royaume-Uni", detail: "Catégorie Pista" },
  { year: "2018", title: "3e place — Championnat de Londres", detail: "Catégorie Pista" },
];

/* ───────────────── PAYS ───────────────── */

const countries = [
  "France", "Argentine", "Italie", "Espagne", "Allemagne",
  "Grèce", "Chypre", "Hongrie", "Tchéquie", "Suisse", "Royaume-Uni",
];

/* ───────────────── MAESTROS ───────────────── */

const maestros = [
  "Clarisa Aragon & Jonathan Saavedra",
  "Marianna Koutandou & Vaggelis Hatzopoulos",
  "Laila Rekz & Leandro Oliver",
  "Manuela Rossi & Juan Malizia",
  "Jose Fernandez & Martina Waldman",
];

/* ───────────────── PAGE ───────────────── */

export default function BiographieClient({ heroPhoto, heroAlt }: Props) {
  const heroRef = useRef<HTMLDivElement>(null);
  const palmaresRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!heroRef.current) return;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;
      const els = heroRef.current.querySelectorAll(".bio-animate");
      gsap.from(els, { y: 30, opacity: 0, duration: 0.7, stagger: 0.1, ease: "power2.out" });
    },
    { scope: heroRef }
  );

  useGSAP(
    () => {
      if (!palmaresRef.current) return;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      const highlights = palmaresRef.current.querySelectorAll(".palmares-highlight");
      gsap.from(highlights, {
        scale: 0.9, opacity: 0, duration: 0.7, stagger: 0.15, ease: "back.out(1.5)",
        scrollTrigger: { trigger: palmaresRef.current, start: "top 75%", once: true },
      });

      const others = palmaresRef.current.querySelectorAll(".palmares-other");
      gsap.from(others, {
        x: -20, opacity: 0, duration: 0.5, stagger: 0.08, ease: "power2.out",
        scrollTrigger: { trigger: others[0], start: "top 85%", once: true },
      });
    },
    { scope: palmaresRef }
  );

  useGSAP(
    () => {
      if (!statsRef.current) return;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;

      const counters = statsRef.current.querySelectorAll(".stat-number");
      counters.forEach((el) => {
        gsap.from(el, {
          innerText: 0, duration: 2, ease: "power2.out", snap: { innerText: 1 },
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        });
      });
    },
    { scope: statsRef }
  );

  return (
    <>
      {/* ── HERO SPLIT ── */}
      <section className="flex flex-col md:flex-row">
        {/* Photo sticky — fond crème assorti au fond de la photo, image positionnée sous le navbar, entière */}
        <div className="relative w-full md:w-1/2 bg-sable min-h-[70vh] md:min-h-0">
          <div className="md:sticky md:top-0 md:h-screen w-full relative">
            <div className="absolute top-16 md:top-20 left-0 right-0 bottom-0">
              <Image
                src={heroPhoto || "/images/leslie-folcarelli/hero.jpg"}
                alt={heroAlt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain object-top"
              />
            </div>
          </div>
        </div>

        {/* Bio — avec titre de championne dès le début */}
        <div ref={heroRef} className="w-full md:w-1/2 bg-blanc px-[clamp(30px,5vw,80px)] py-[clamp(80px,8vw,120px)]">
          <div className="max-w-xl mx-auto text-center">
            <p className="bio-animate text-[clamp(11px,0.9vw,13px)] tracking-[5px] uppercase text-dore mb-4">
              Qui suis-je
            </p>

            {/* Badge champion */}
            <div className="bio-animate inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brun/5 border border-champagne/30 mb-6">
              <span className="text-champagne text-sm">◆</span>
              <span className="text-[clamp(12px,0.95vw,14px)] tracking-[1px] uppercase text-brun font-medium">
                Championne d&apos;Europe 2019
              </span>
            </div>

            <h1 className="bio-animate font-display text-[clamp(44px,5vw,80px)] font-light leading-[1.1] text-noir mb-3">
              Leslie Folcarelli
            </h1>

            <p className="bio-animate text-[clamp(13px,1vw,15px)] tracking-[3px] uppercase text-dore mb-8">
              Danseuse &middot; Professeure &middot; DJ
            </p>

            <div className="bio-animate w-12 h-px bg-champagne mb-10 mx-auto" />

            <p className="bio-animate font-display italic text-[clamp(22px,2vw,30px)] text-brun/80 leading-snug mb-10">
              Une présence sincère, un tango vivant — mon engagement
              dans la transmission et la création.
            </p>

            <div className="space-y-6 text-[clamp(16px,1.2vw,19px)] text-texte leading-relaxed">
              <p className="bio-animate">
                Danseuse, professeure et DJ de tango argentin,
                semi-finaliste du championnat du monde et championne d&apos;Europe,
                je construis depuis plus de dix ans un univers artistique
                où se rencontrent rigueur, sensibilité et engagement.
              </p>

              <p className="bio-animate">
                Mon approche du tango est à la fois ancrée dans la tradition
                et ouverte à l&apos;exploration. Je développe une pratique
                exigeante, centrée sur la <em className="font-display italic text-brun">qualité
                de la présence</em>, la connexion authentique, et la liberté
                d&apos;interprétation.
              </p>

              <p className="bio-animate">
                Formée auprès de nombreux maestros en Europe et en Argentine,
                j&apos;affine un style qui allie précision technique, musicalité
                et écoute fine du partenaire. Je m&apos;intéresse
                particulièrement aux dynamiques de l&apos;improvisation,
                à l&apos;intelligence corporelle, et à ce que le tango permet
                d&apos;exprimer au-delà des pas.
              </p>

              <p className="bio-animate">
                Sur scène comme en cours, dans les milongas ou les projets
                artistiques, je cherche à créer des espaces où le tango reste
                vivant, habité et profondément humain.
              </p>
            </div>

            {/* Citation */}
            <div className="bio-animate my-12 border-l-2 border-champagne pl-6">
              <p className="font-display italic text-[clamp(18px,1.6vw,24px)] text-brun/80 leading-snug">
                Plus qu&apos;une danse, c&apos;est une rencontre.
                Avec l&apos;autre… et avec soi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS IMPACT — Barre de chiffres ── */}
      <section ref={statsRef} className="bg-brun py-12 border-t-4 border-champagne">
        <div className="max-w-[min(1200px,90vw)] mx-auto px-[clamp(20px,5vw,80px)]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-display text-[clamp(36px,4vw,60px)] font-light text-champagne leading-none mb-1">
                11
              </div>
              <div className="text-[clamp(10px,0.8vw,12px)] tracking-[2px] uppercase text-blanc/60">
                pays parcourus
              </div>
            </div>
            <div>
              <div className="font-display text-[clamp(36px,4vw,60px)] font-light text-champagne leading-none mb-1">
                6
              </div>
              <div className="text-[clamp(10px,0.8vw,12px)] tracking-[2px] uppercase text-blanc/60">
                titres en compétition
              </div>
            </div>
            <div>
              <div className="font-display text-[clamp(36px,4vw,60px)] font-light text-champagne leading-none mb-1">
                500+
              </div>
              <div className="text-[clamp(10px,0.8vw,12px)] tracking-[2px] uppercase text-blanc/60">
                élèves accompagnés
              </div>
            </div>
            <div>
              <div className="font-display text-[clamp(36px,4vw,60px)] font-light text-champagne leading-none mb-1">
                50+
              </div>
              <div className="text-[clamp(10px,0.8vw,12px)] tracking-[2px] uppercase text-blanc/60">
                festivals &amp; milongas
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PALMARÈS — section prestige ── */}
      <section ref={palmaresRef} className="py-[clamp(64px,10vw,120px)] px-[clamp(20px,5vw,80px)]">
        <div className="max-w-[min(1000px,90vw)] mx-auto">
          <SectionReveal className="text-center mb-14">
            <p className="text-[clamp(9px,0.7vw,11px)] tracking-[3px] uppercase text-dore mb-3">
              Compétitions internationales
            </p>
            <h2 className="font-display text-[clamp(28px,3vw,44px)] font-light text-noir">
              Palmarès
            </h2>
          </SectionReveal>

          {/* 3 highlights — cartes prestige */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {palmaresHighlights.map((item, i) => (
              <div
                key={i}
                className={`palmares-highlight relative rounded-xl p-6 text-center border overflow-hidden ${
                  item.tier === "world"
                    ? "bg-noir text-blanc border-champagne/30"
                    : item.tier === "gold"
                    ? "bg-brun text-blanc border-champagne/40"
                    : "bg-blanc text-noir border-champagne/40"
                }`}
              >
                {/* Decorative top accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${
                  item.tier === "world" ? "bg-champagne" : item.tier === "gold" ? "bg-champagne" : "bg-champagne/60"
                }`} />

                <div className={`font-display text-[clamp(14px,1.2vw,18px)] mb-3 ${
                  item.tier === "world" || item.tier === "gold" ? "text-champagne" : "text-dore"
                }`}>
                  {item.tier === "world" ? "◆◆◆" : item.tier === "gold" ? "◆◆" : "◆"}
                </div>

                <div className={`font-display text-[clamp(28px,2.5vw,38px)] font-light mb-3 ${
                  item.tier === "world" || item.tier === "gold" ? "text-champagne" : "text-brun"
                }`}>
                  {item.year}
                </div>

                <h3 className={`text-[clamp(14px,1.1vw,17px)] font-medium mb-2 leading-tight ${
                  item.tier === "silver" ? "text-noir" : "text-blanc"
                }`}>
                  {item.title}
                </h3>

                <p className={`text-[clamp(11px,0.85vw,13px)] ${
                  item.tier === "world" ? "text-blanc/50" : item.tier === "gold" ? "text-champagne-clair/60" : "text-taupe"
                }`}>
                  {item.detail}
                </p>
              </div>
            ))}
          </div>

          {/* Autres résultats */}
          <div className="space-y-3">
            {palmaresOther.map((item, i) => (
              <div
                key={i}
                className="palmares-other flex items-center gap-5 px-5 py-3 rounded-lg border border-beige hover:border-champagne/40 transition-colors duration-200"
              >
                <span className="font-display text-[clamp(18px,1.5vw,24px)] font-light text-dore shrink-0 w-14">
                  {item.year}
                </span>
                <span className="text-[clamp(13px,1vw,15px)] text-texte">{item.title}</span>
                <span className="text-[clamp(11px,0.85vw,13px)] text-taupe ml-auto hidden sm:block">{item.detail}</span>
              </div>
            ))}
          </div>

          {/* Pays */}
          <div className="mt-14 text-center">
            <p className="text-[clamp(9px,0.7vw,11px)] tracking-[3px] uppercase text-dore mb-4">
              Scène, enseignement &amp; DJ à travers
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {countries.map((c, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 bg-creme/60 border border-beige rounded-full text-[clamp(11px,0.85vw,13px)] text-brun"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PÉDAGOGIE — Followers & Leaders ── */}
      <section className="py-[clamp(64px,10vw,120px)] px-[clamp(20px,5vw,80px)] bg-creme/40 border-t border-beige">
        <div className="max-w-[min(1200px,90vw)] mx-auto">
          <SectionReveal className="text-center mb-14">
            <p className="text-[clamp(9px,0.7vw,11px)] tracking-[3px] uppercase text-dore mb-3">
              Pédagogie
            </p>
            <h2 className="font-display text-[clamp(28px,3vw,44px)] font-light text-noir">
              Un enseignement clair, sensible et structuré
            </h2>
            <p className="mt-4 text-[clamp(13px,1vw,16px)] text-taupe max-w-2xl mx-auto leading-relaxed">
              Je transmets un tango exigeant mais accessible. Mon
              enseignement repose sur l&apos;écoute attentive, des outils
              précis, et un cadre bienveillant où chacun progresse à son rythme.
            </p>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <SectionReveal>
              <div className="bg-blanc border border-beige rounded-lg p-8 h-full hover:border-champagne hover:shadow-md hover:shadow-champagne/10 transition-all duration-300">
                <p className="text-[clamp(9px,0.7vw,11px)] tracking-[3px] uppercase text-dore mb-3">Followers</p>
                <h3 className="font-display text-[clamp(22px,2vw,30px)] font-light text-noir mb-2">
                  Vers plus d&apos;autonomie et de confiance
                </h3>
                <div className="w-8 h-px bg-champagne my-5" />
                <ul className="space-y-3 text-[clamp(13px,1vw,15px)] text-taupe leading-relaxed">
                  <li className="flex gap-3 items-start"><span className="text-champagne mt-1 shrink-0">—</span>Je vous aide à gagner en confiance et à vous connecter à vos ressentis</li>
                  <li className="flex gap-3 items-start"><span className="text-champagne mt-1 shrink-0">—</span>Je vous accompagne vers plus d&apos;autonomie dans l&apos;interprétation et l&apos;embellissement</li>
                  <li className="flex gap-3 items-start"><span className="text-champagne mt-1 shrink-0">—</span>Je vous transmets une lecture musicale sensible et incarnée</li>
                  <li className="flex gap-3 items-start"><span className="text-champagne mt-1 shrink-0">—</span>Mon objectif : vous inviter à oser, créer, vous exprimer — révéler la danseuse qui sommeille en vous</li>
                </ul>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.15}>
              <div className="bg-blanc border border-beige rounded-lg p-8 h-full hover:border-champagne hover:shadow-md hover:shadow-champagne/10 transition-all duration-300">
                <p className="text-[clamp(9px,0.7vw,11px)] tracking-[3px] uppercase text-dore mb-3">Leaders</p>
                <h3 className="font-display text-[clamp(22px,2vw,30px)] font-light text-noir mb-2">
                  Affiner la présence et l&apos;intention
                </h3>
                <div className="w-8 h-px bg-champagne my-5" />
                <ul className="space-y-3 text-[clamp(13px,1vw,15px)] text-taupe leading-relaxed">
                  <li className="flex gap-3 items-start"><span className="text-champagne mt-1 shrink-0">—</span>Je vous guide pour entrer en connexion profonde avec votre partenaire</li>
                  <li className="flex gap-3 items-start"><span className="text-champagne mt-1 shrink-0">—</span>Je vous aide à affiner votre intention, votre écoute et votre musicalité</li>
                  <li className="flex gap-3 items-start"><span className="text-champagne mt-1 shrink-0">—</span>Je vous accompagne pour clarifier votre guidage tout en restant souple et sensible</li>
                  <li className="flex gap-3 items-start"><span className="text-champagne mt-1 shrink-0">—</span>Je vous encourage à ne pas seulement guider, mais à communiquer — avec précision et bienveillance</li>
                </ul>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ── TRIPLE CASQUETTE ── */}
      <section className="py-[clamp(64px,10vw,120px)] px-[clamp(20px,5vw,80px)] border-t border-beige">
        <div className="max-w-[min(1200px,90vw)] mx-auto">
          <SectionReveal className="text-center mb-14">
            <p className="text-[clamp(9px,0.7vw,11px)] tracking-[3px] uppercase text-dore mb-3">
              Trois passions, une même âme
            </p>
            <h2 className="font-display text-[clamp(28px,3vw,44px)] font-light text-noir">
              Danseuse, Professeure, DJ
            </h2>
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SectionReveal>
              <div className="bg-blanc border border-beige rounded-lg p-8 h-full hover:border-champagne hover:shadow-md hover:shadow-champagne/10 transition-all duration-300">
                <span className="text-2xl block mb-4 text-champagne">✦</span>
                <h3 className="font-display text-[clamp(22px,2vw,30px)] font-light text-noir mb-2">Danseuse</h3>
                <div className="w-8 h-px bg-champagne mb-4" />
                <p className="text-[clamp(13px,1vw,15px)] text-taupe leading-relaxed">
                  Semi-finaliste du championnat du monde, championne d&apos;Europe.
                  Sur scène ou en milonga, je danse avec une présence qui
                  touche — précision technique, musicalité et écoute fine.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.15}>
              <div className="bg-blanc border border-beige rounded-lg p-8 h-full hover:border-champagne hover:shadow-md hover:shadow-champagne/10 transition-all duration-300">
                <span className="text-2xl block mb-4 text-champagne">◈</span>
                <h3 className="font-display text-[clamp(22px,2vw,30px)] font-light text-noir mb-2">Professeure</h3>
                <div className="w-8 h-px bg-champagne mb-4" />
                <p className="text-[clamp(13px,1vw,15px)] text-taupe leading-relaxed">
                  Cours réguliers, stages thématiques, accompagnements
                  personnalisés. Je propose une pédagogie claire qui donne des outils
                  précis tout en valorisant l&apos;expression personnelle.
                  Plus de 500 élèves accompagnés.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div className="bg-blanc border border-beige rounded-lg p-8 h-full hover:border-champagne hover:shadow-md hover:shadow-champagne/10 transition-all duration-300">
                <span className="text-2xl block mb-4 text-champagne">◉</span>
                <h3 className="font-display text-[clamp(22px,2vw,30px)] font-light text-noir mb-2">DJ Tango</h3>
                <div className="w-8 h-px bg-champagne mb-4" />
                <p className="text-[clamp(13px,1vw,15px)] text-taupe leading-relaxed">
                  Avec ma sensibilité de danseuse, je capte
                  l&apos;ambiance et je crée des tandas qui parlent au corps.
                  Je musicalise en France, Italie, Espagne, Grèce, Hongrie,
                  Tchéquie, Chypre.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* ── FORMATION ── */}
      <section className="py-[clamp(48px,8vw,100px)] px-[clamp(20px,5vw,80px)] bg-creme/40 border-t border-beige">
        <div className="max-w-[min(800px,90vw)] mx-auto">
          <SectionReveal className="text-center mb-10">
            <p className="text-[clamp(9px,0.7vw,11px)] tracking-[3px] uppercase text-dore mb-3">Formation</p>
            <h2 className="font-display text-[clamp(22px,2.5vw,36px)] font-light text-noir">
              Mes maestros
            </h2>
          </SectionReveal>
          <SectionReveal>
            <div className="flex flex-wrap justify-center gap-3">
              {maestros.map((name, i) => (
                <span key={i} className="px-4 py-2 bg-blanc border border-beige rounded-full text-[clamp(11px,0.9vw,13px)] text-taupe hover:border-champagne hover:text-brun transition-colors duration-200">
                  {name}
                </span>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <SectionReveal className="py-[clamp(64px,10vw,120px)] px-[clamp(20px,5vw,80px)] border-t border-beige">
        <div className="max-w-[min(600px,90vw)] mx-auto text-center">
          <h2 className="font-display text-[clamp(28px,4vw,48px)] font-light text-noir mb-4">
            <em className="italic text-brun">Venez danser avec moi.</em>
          </h2>
          <p className="text-[clamp(13px,1vw,16px)] text-taupe leading-relaxed mb-10">
            Quel que soit votre niveau, je vous accueille avec joie.
            Le premier pas est toujours le plus beau.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/cours-tango-nice" className="px-8 py-3.5 bg-brun text-blanc rounded-full text-sm tracking-wider uppercase hover:bg-dore transition-colors duration-300">
              Voir les cours
            </Link>
            <Link href="/contact" className="px-8 py-3.5 border border-beige text-brun rounded-full text-sm tracking-wider uppercase hover:border-champagne hover:bg-creme/50 transition-all duration-300">
              Me contacter
            </Link>
          </div>
        </div>
      </SectionReveal>
    </>
  );
}
