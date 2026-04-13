"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsapConfig";

export default function Contact() {
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
      {/* ── HERO — Photo ── */}
      <section className="relative h-[45vh] overflow-hidden">
        <div className="absolute inset-0 bg-charbon">
          <div className="absolute inset-0 bg-gradient-to-t from-noir/40 via-charbon/15 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[10px] tracking-[3px] uppercase text-blanc/20">
              Photo de Leslie
            </span>
          </div>
        </div>
      </section>

      {/* ── CONTENU ── */}
      <section ref={contentRef} className="py-[clamp(48px,8vw,100px)] px-[clamp(16px,3vw,40px)]">
        <div className="max-w-[min(700px,90vw)] mx-auto text-center">

          <p className="animate font-script text-[clamp(28px,3.5vw,48px)] text-brun mb-4">
            Parlons-en
          </p>

          <p className="animate text-[clamp(14px,1.1vw,17px)] text-taupe leading-relaxed mb-12">
            Pour toutes informations concernant les cours, stages,
            prestations de service et tarifs, contactez-moi par
            téléphone ou par email.
          </p>

          {/* ── Deux blocs : Tel + Email ── */}
          <div className="animate grid grid-cols-1 sm:grid-cols-2 gap-6 mb-14">
            {/* Téléphone */}
            <a
              href="tel:+33677509897"
              className="group bg-brun text-blanc rounded-xl p-8 flex flex-col items-center gap-4 hover:bg-dore transition-colors duration-300"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className="font-display text-[clamp(18px,1.5vw,22px)] font-light">
                Appeler Leslie
              </span>
              <span className="text-[clamp(13px,1vw,15px)] text-blanc/70">
                +33 (0)6 77 50 98 97
              </span>
            </a>

            {/* Email */}
            <a
              href="mailto:lesliefolcarelli.tango@gmail.com"
              className="group bg-blanc border-2 border-beige text-brun rounded-xl p-8 flex flex-col items-center gap-4 hover:border-champagne transition-colors duration-300"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 4l-10 8L2 4" />
              </svg>
              <span className="font-display text-[clamp(18px,1.5vw,22px)] font-light">
                Écrire par email
              </span>
              <span className="text-[clamp(13px,1vw,15px)] text-taupe">
                lesliefolcarelli.tango@gmail.com
              </span>
            </a>
          </div>

          {/* ── Infos ── */}
          <div className="animate text-center mb-14">
            <p className="text-[clamp(14px,1.05vw,16px)] text-taupe">
              Nice, France
            </p>
          </div>

          {/* ── Réseaux sociaux ── */}
          <div className="animate">
            <p className="text-[clamp(10px,0.8vw,12px)] tracking-[3px] uppercase text-dore mb-6">
              Me suivre
            </p>
            <div className="flex gap-6 justify-center">
              <a href="https://www.instagram.com/lesliefolcarelli/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-taupe hover:text-dore transition-colors duration-200">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
              </a>
              <a href="https://www.facebook.com/lesliefolcarelli" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-taupe hover:text-dore transition-colors duration-200">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://www.youtube.com/@lesliefolcarelli" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-taupe hover:text-dore transition-colors duration-200">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
