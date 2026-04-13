"use client";

import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsapConfig";

/* ───────────────── PHOTOS PLACEHOLDER ───────────────── */

const photos = [
  { id: 1, alt: "Tango scène", ratio: "aspect-[3/4]" },
  { id: 2, alt: "Milonga Nice", ratio: "aspect-square" },
  { id: 3, alt: "Show tango", ratio: "aspect-[4/5]" },
  { id: 4, alt: "Cours collectif", ratio: "aspect-[3/4]" },
  { id: 5, alt: "Performance duo", ratio: "aspect-square" },
  { id: 6, alt: "Tango festival", ratio: "aspect-[4/5]" },
  { id: 7, alt: "Abrazo", ratio: "aspect-[3/4]" },
  { id: 8, alt: "DJ tango", ratio: "aspect-square" },
  { id: 9, alt: "Stage intensif", ratio: "aspect-[4/5]" },
  { id: 10, alt: "Mariage tango", ratio: "aspect-[3/4]" },
  { id: 11, alt: "Milonga ambiance", ratio: "aspect-square" },
  { id: 12, alt: "Tango Buenos Aires", ratio: "aspect-[4/5]" },
  { id: 13, alt: "Chorégraphie", ratio: "aspect-[3/4]" },
  { id: 14, alt: "Leslie portrait", ratio: "aspect-square" },
  { id: 15, alt: "Festival Europe", ratio: "aspect-[4/5]" },
  { id: 16, alt: "Cours privé", ratio: "aspect-[3/4]" },
  { id: 17, alt: "Tango nuit", ratio: "aspect-square" },
  { id: 18, alt: "Performance groupe", ratio: "aspect-[4/5]" },
];

export default function Galerie() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!titleRef.current) return;
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) return;
      const els = titleRef.current.querySelectorAll(".animate");
      gsap.from(els, { y: 20, opacity: 0, duration: 0.6, stagger: 0.1, ease: "power2.out" });
    },
    { scope: titleRef }
  );

  const openLightbox = (id: number) => setLightbox(id);
  const closeLightbox = () => setLightbox(null);
  const goPrev = () => {
    if (lightbox === null) return;
    const idx = photos.findIndex((p) => p.id === lightbox);
    setLightbox(photos[(idx - 1 + photos.length) % photos.length].id);
  };
  const goNext = () => {
    if (lightbox === null) return;
    const idx = photos.findIndex((p) => p.id === lightbox);
    setLightbox(photos[(idx + 1) % photos.length].id);
  };

  return (
    <>
      {/* ── TITRE ── */}
      <section ref={titleRef} className="pt-20 md:pt-28 pb-8 px-[clamp(16px,3vw,40px)] text-center">
        <h1 className="animate font-display text-[clamp(36px,5vw,64px)] font-light leading-[1.1] text-noir mb-4">
          Galerie
        </h1>
        <p className="animate text-[clamp(14px,1.1vw,17px)] text-taupe max-w-lg mx-auto">
          Scène, cours, milongas, festivals — des moments de tango en images.
        </p>
      </section>

      {/* ── MOSAÏQUE ── */}
      <section className="px-[clamp(8px,1.5vw,20px)] pb-[clamp(40px,6vw,80px)]">
        <div
          ref={gridRef}
          className="columns-2 md:columns-3 lg:columns-4 gap-3 max-w-[1600px] mx-auto"
        >
          {photos.map((photo) => (
            <div
              key={photo.id}
              onClick={() => openLightbox(photo.id)}
              className={`${photo.ratio} mb-3 bg-charbon rounded-md overflow-hidden cursor-pointer relative group break-inside-avoid`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-noir/30 via-charbon/15 to-brun/10 group-hover:opacity-50 transition-opacity duration-300" />

              {/* Numéro placeholder */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-blanc/20 text-[10px] tracking-[2px] uppercase">
                  {photo.alt}
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-brun/0 group-hover:bg-brun/30 transition-colors duration-300 flex items-center justify-center">
                <div className="w-10 h-10 rounded-full border border-blanc/0 group-hover:border-blanc/60 flex items-center justify-center opacity-0 group-hover:opacity-100 scale-75 group-hover:scale-100 transition-all duration-300">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── VIDÉOS ── */}
      <section className="px-[clamp(16px,3vw,40px)] pb-[clamp(40px,6vw,80px)]">
        <div className="max-w-[1600px] mx-auto">
          <div className="text-center mb-10">
            <div className="w-16 h-px bg-champagne mx-auto mb-10" />
            <h2 className="font-display text-[clamp(28px,3vw,44px)] font-light text-noir mb-4">
              Vidéos
            </h2>
            <p className="text-[clamp(14px,1.1vw,17px)] text-taupe max-w-lg mx-auto">
              Shows, performances et moments de danse en mouvement.
            </p>
          </div>

          {/* Grille vidéos — 1 grande + 2 en dessous */}
          <div className="space-y-5">
            <div className="relative aspect-video bg-charbon rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-noir/30 via-charbon/15 to-brun/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="group cursor-pointer flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-full border border-blanc/30 flex items-center justify-center group-hover:border-champagne/60 group-hover:scale-110 transition-all duration-500">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="ml-1">
                      <polygon points="6,3 20,12 6,21" fill="white" opacity="0.8" />
                    </svg>
                  </div>
                  <span className="text-[10px] tracking-[3px] uppercase text-blanc/40">Vidéo</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="relative aspect-video bg-charbon rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-noir/30 via-charbon/15 to-brun/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="group cursor-pointer flex flex-col items-center gap-3">
                    <div className="w-14 h-14 rounded-full border border-blanc/30 flex items-center justify-center group-hover:border-champagne/60 group-hover:scale-110 transition-all duration-500">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="ml-1">
                        <polygon points="6,3 20,12 6,21" fill="white" opacity="0.8" />
                      </svg>
                    </div>
                    <span className="text-[10px] tracking-[3px] uppercase text-blanc/40">Vidéo</span>
                  </div>
                </div>
              </div>

              <div className="relative aspect-video bg-charbon rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-noir/30 via-charbon/15 to-brun/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="group cursor-pointer flex flex-col items-center gap-3">
                    <div className="w-14 h-14 rounded-full border border-blanc/30 flex items-center justify-center group-hover:border-champagne/60 group-hover:scale-110 transition-all duration-500">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="ml-1">
                        <polygon points="6,3 20,12 6,21" fill="white" opacity="0.8" />
                      </svg>
                    </div>
                    <span className="text-[10px] tracking-[3px] uppercase text-blanc/40">Vidéo</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-noir/95 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-blanc/60 hover:text-blanc transition-colors"
            aria-label="Fermer"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 md:left-8 w-12 h-12 flex items-center justify-center text-blanc/40 hover:text-blanc transition-colors"
            aria-label="Précédent"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="max-w-[85vw] max-h-[85vh] bg-charbon rounded-lg overflow-hidden flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-[70vw] h-[70vh] flex items-center justify-center">
              <span className="text-blanc/30 text-[10px] tracking-[3px] uppercase">
                {photos.find((p) => p.id === lightbox)?.alt}
              </span>
            </div>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 md:right-8 w-12 h-12 flex items-center justify-center text-blanc/40 hover:text-blanc transition-colors"
            aria-label="Suivant"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-blanc/40 text-sm">
            {photos.findIndex((p) => p.id === lightbox) + 1} / {photos.length}
          </div>
        </div>
      )}
    </>
  );
}
