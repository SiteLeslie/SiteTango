"use client";

import { useState, useEffect, useCallback } from "react";
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
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
    document.body.style.overflow = "";
  }, [pathname]);

  const toggleMenu = useCallback(() => {
    setMobileOpen((prev) => {
      const next = !prev;
      document.body.style.overflow = next ? "hidden" : "";
      return next;
    });
  }, []);

  const closeMenu = useCallback(() => {
    setMobileOpen(false);
    document.body.style.overflow = "";
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-brun shadow-md shadow-brun/20">
        <nav className="flex items-center justify-between py-3 px-5 md:px-6 xl:px-10">
          <Link
            href="/"
            className="font-display text-xl font-light text-blanc hover:text-champagne-clair transition-colors duration-300 whitespace-nowrap shrink-0"
          >
            Leslie Folcarelli
          </Link>

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

          <button
            type="button"
            onClick={toggleMenu}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            className="flex h-12 w-12 items-center justify-center xl:hidden"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round">
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </nav>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] xl:hidden" aria-modal="true" role="dialog">
          <div
            className="absolute inset-0 bg-noir/30"
            onClick={closeMenu}
            aria-hidden="true"
          />
          <div className="absolute right-0 top-0 bottom-0 w-80 max-w-full bg-brun flex flex-col">
            <div className="flex items-center justify-between px-5 py-4 border-b border-blanc/10">
              <span className="font-display text-lg text-blanc">Menu</span>
              <button
                type="button"
                onClick={closeMenu}
                aria-label="Fermer le menu"
                className="flex h-11 w-11 items-center justify-center"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`px-6 py-3 text-lg font-light transition-colors ${
                    pathname === link.href ? "text-champagne" : "text-blanc hover:text-champagne-clair"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-6 pt-6">
                <Link
                  href="/contact"
                  onClick={closeMenu}
                  className="block text-center px-6 py-3 rounded-full border border-champagne text-champagne hover:bg-champagne hover:text-brun transition-all duration-300 text-sm tracking-wider uppercase"
                >
                  Contactez-moi
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
