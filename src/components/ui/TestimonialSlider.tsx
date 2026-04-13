"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsapConfig";

interface Testimonial {
  quote: string;
  name: string;
  detail: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Leslie m'a fait découvrir bien plus qu'une danse. En quelques mois, j'ai retrouvé une connexion à mon corps que j'avais perdue depuis des années.",
    name: "Sophie M.",
    detail: "Élève depuis 2 ans",
  },
  {
    quote:
      "Je suis venu seul, sans rien connaître. L'accueil de Leslie et sa pédagogie m'ont immédiatement mis en confiance. Aujourd'hui, le tango fait partie de ma vie.",
    name: "Marc D.",
    detail: "Débutant devenu passionné",
  },
  {
    quote:
      "Notre ouverture de bal en tango a été le moment le plus émouvant de notre mariage. Leslie a su capter exactement ce qu'on voulait transmettre.",
    name: "Claire & Thomas",
    detail: "Mariage, juin 2024",
  },
  {
    quote:
      "En tant que DJ, Leslie crée une atmosphère unique. Sa sélection musicale est d'une sensibilité rare — chaque tanda raconte une histoire.",
    name: "Ricardo P.",
    detail: "Organisateur de milonga",
  },
];

export default function TestimonialSlider() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLBlockquoteElement>(null);

  const animate = useCallback(
    (direction: "in" | "out") => {
      if (!quoteRef.current) return;
      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;
      if (prefersReducedMotion) return;

      if (direction === "out") {
        return gsap.to(quoteRef.current, {
          opacity: 0,
          y: -10,
          duration: 0.4,
          ease: "power2.in",
        });
      }
      return gsap.fromTo(
        quoteRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" }
      );
    },
    []
  );

  const goTo = useCallback(
    async (index: number) => {
      await animate("out");
      setActive(index);
      // Small delay for state to update
      requestAnimationFrame(() => animate("in"));
    },
    [animate]
  );

  // Auto-rotate every 5s, pause on hover
  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      const next = (active + 1) % testimonials.length;
      goTo(next);
    }, 5000);
    return () => clearInterval(interval);
  }, [active, paused, goTo]);

  // Initial fade-in
  useGSAP(() => {
    animate("in");
  }, { scope: containerRef });

  const current = testimonials[active];

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="max-w-3xl mx-auto text-center"
    >
      <blockquote ref={quoteRef}>
        <p className="font-display text-[clamp(18px,2.2vw,28px)] font-light italic text-noir leading-relaxed">
          &ldquo;{current.quote}&rdquo;
        </p>
        <footer className="mt-6">
          <cite className="not-italic">
            <span className="text-dore text-sm font-medium tracking-wide">
              {current.name}
            </span>
            <span className="text-taupe text-xs ml-2">
              &mdash; {current.detail}
            </span>
          </cite>
        </footer>
      </blockquote>

      {/* Dots */}
      <div className="flex justify-center gap-3 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Témoignage ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === active
                ? "bg-dore scale-125"
                : "bg-beige hover:bg-champagne"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
