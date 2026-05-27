"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsapConfig";

export type GalerieItem = {
  slug: string;
  title: string;
  image: string;
  caption: string | null;
};

export default function GalerieClient({ photos }: { photos: GalerieItem[] }) {
  const [lightbox, setLightbox] = useState<string | null>(null);
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

  const openLightbox = (slug: string) => setLightbox(slug);
  const closeLightbox = () => setLightbox(null);
  const goPrev = () => {
    if (lightbox === null) return;
    const idx = photos.findIndex((p) => p.slug === lightbox);
    setLightbox(photos[(idx - 1 + photos.length) % photos.length].slug);
  };
  const goNext = () => {
    if (lightbox === null) return;
    const idx = photos.findIndex((p) => p.slug === lightbox);
    setLightbox(photos[(idx + 1) % photos.length].slug);
  };

  const current = lightbox ? photos.find((p) => p.slug === lightbox) ?? null : null;

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
        {photos.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="columns-2 md:columns-3 lg:columns-4 gap-3 max-w-[1600px] mx-auto">
            {photos.map((photo) => (
              <div
                key={photo.slug}
                onClick={() => openLightbox(photo.slug)}
                className="aspect-[3/4] mb-3 bg-charbon rounded-md overflow-hidden cursor-pointer relative group break-inside-avoid"
              >
                <Image
                  src={photo.image}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
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
        )}
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

          {/* Grille vidéos — placeholders en attendant les URLs YouTube/Vimeo */}
          <div className="space-y-5">
            <VideoPlaceholder size="large" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <VideoPlaceholder />
              <VideoPlaceholder />
            </div>
          </div>
        </div>
      </section>

      {/* ── LIGHTBOX ── */}
      {current && (
        <div
          className="fixed inset-0 z-[100] bg-noir/95 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-blanc/60 hover:text-blanc transition-colors"
            aria-label="Fermer"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goPrev(); }}
            className="absolute left-4 md:left-8 w-12 h-12 flex items-center justify-center text-blanc/40 hover:text-blanc transition-colors"
            aria-label="Précédent"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div
            className="relative max-w-[85vw] max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-[85vw] md:w-[70vw] aspect-[4/5] md:aspect-[3/2] max-h-[80vh]">
              <Image
                src={current.image}
                alt={current.title}
                fill
                sizes="85vw"
                className="object-contain"
              />
            </div>
            {current.caption && (
              <p className="mt-4 text-blanc/80 text-sm text-center max-w-md">
                {current.caption}
              </p>
            )}
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); goNext(); }}
            className="absolute right-4 md:right-8 w-12 h-12 flex items-center justify-center text-blanc/40 hover:text-blanc transition-colors"
            aria-label="Suivant"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-blanc/40 text-sm">
            {photos.findIndex((p) => p.slug === lightbox) + 1} / {photos.length}
          </div>
        </div>
      )}
    </>
  );
}

function EmptyState() {
  return (
    <div className="max-w-[min(700px,90vw)] mx-auto bg-blanc border border-beige rounded-lg py-[clamp(48px,8vw,100px)] px-[clamp(24px,5vw,80px)] text-center">
      <span className="text-3xl block mb-6 text-champagne">✦</span>
      <h2 className="font-display text-[clamp(22px,2vw,30px)] font-light text-noir mb-4">
        Les photos arrivent bientôt
      </h2>
      <p className="text-[clamp(13px,1vw,16px)] text-taupe leading-relaxed max-w-md mx-auto">
        La galerie est en cours de mise à jour. En attendant, retrouvez Leslie
        sur Instagram pour de nouvelles photos régulièrement.
      </p>
    </div>
  );
}

function VideoPlaceholder({ size = "small" }: { size?: "small" | "large" }) {
  const circle = size === "large" ? "w-16 h-16" : "w-14 h-14";
  const svgSize = size === "large" ? 20 : 18;
  return (
    <div className="relative aspect-video bg-charbon rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-noir/30 via-charbon/15 to-brun/10" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="group cursor-pointer flex flex-col items-center gap-3">
          <div className={`${circle} rounded-full border border-blanc/30 flex items-center justify-center group-hover:border-champagne/60 group-hover:scale-110 transition-all duration-500`}>
            <svg width={svgSize} height={svgSize} viewBox="0 0 24 24" fill="none" className="ml-1">
              <polygon points="6,3 20,12 6,21" fill="white" opacity="0.8" />
            </svg>
          </div>
          <span className="text-[10px] tracking-[3px] uppercase text-blanc/40">Vidéo</span>
        </div>
      </div>
    </div>
  );
}
