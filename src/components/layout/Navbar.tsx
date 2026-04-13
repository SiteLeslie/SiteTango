"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/leslie-folcarelli", label: "Qui suis-je" },
  { href: "/pourquoi-le-tango", label: "Pourquoi le Tango" },
  { href: "/cours-tango-nice", label: "Mes offres" },
  { href: "/evenements-tango", label: "Événements" },
  { href: "/galerie", label: "Galerie" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-brun shadow-md shadow-brun/20">
      <nav className="w-full flex items-center justify-between py-3 px-6 xl:px-10">
        {/* Logo */}
        <Link
          href="/"
          className="font-display text-xl font-light text-blanc hover:text-champagne-clair transition-colors duration-300 whitespace-nowrap shrink-0"
        >
          Leslie Folcarelli
        </Link>

        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-5 2xl:gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[12px] tracking-wide uppercase whitespace-nowrap transition-all duration-200 hover:text-champagne hover:-translate-y-px ${
                pathname === link.href
                  ? "text-blanc border-b border-champagne pb-0.5"
                  : "text-blanc"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* CTA Contact */}
          <Link
            href="/contact"
            className={`text-[12px] tracking-wide uppercase whitespace-nowrap px-5 py-2 rounded-full border transition-all duration-300 shrink-0 ${
              pathname === "/contact"
                ? "bg-champagne text-brun border-champagne"
                : "border-blanc text-blanc hover:bg-blanc hover:text-brun"
            }`}
          >
            Contactez-moi
          </Link>
        </div>

        {/* Mobile/tablet burger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="xl:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menu de navigation"
          aria-expanded={mobileOpen}
        >
          <span
            className={`w-6 h-px bg-blanc transition-all duration-300 ${
              mobileOpen ? "rotate-45 translate-y-[7px]" : ""
            }`}
          />
          <span
            className={`w-6 h-px bg-blanc transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`w-6 h-px bg-blanc transition-all duration-300 ${
              mobileOpen ? "-rotate-45 -translate-y-[7px]" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile/tablet drawer */}
      <div
        className={`xl:hidden fixed inset-0 top-0 bg-brun/98 backdrop-blur-md z-40 flex flex-col items-center justify-center gap-8 transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`font-display text-2xl font-light transition-colors duration-200 ${
              pathname === link.href ? "text-champagne" : "text-blanc hover:text-champagne-clair"
            }`}
          >
            {link.label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="mt-4 px-8 py-3 rounded-full border border-champagne text-champagne hover:bg-champagne hover:text-brun transition-all duration-300 font-body text-sm tracking-wider uppercase"
        >
          Contactez-moi
        </Link>
      </div>
    </header>
  );
}
