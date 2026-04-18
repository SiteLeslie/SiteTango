import Link from "next/link";

const footerNav = [
  { href: "/", label: "Accueil" },
  { href: "/pourquoi-le-tango", label: "Pourquoi le Tango" },
  { href: "/cours-tango-nice", label: "Cours" },
  { href: "/evenements-tango", label: "Événements" },
  { href: "/galerie", label: "Galerie" },
];

export default function Footer() {
  return (
    <footer className="border-t border-beige bg-creme/50">
      {/* Main footer */}
      <div className="max-w-[min(1200px,90vw)] mx-auto px-[clamp(20px,5vw,80px)] py-[clamp(48px,6vw,80px)]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center md:text-left">
          {/* Navigation */}
          <div>
            <h3 className="text-[9px] tracking-[3px] uppercase text-dore mb-6">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3">
              {footerNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-taupe text-[clamp(12px,0.9vw,14px)] hover:text-brun transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact direct */}
          <div>
            <h3 className="text-[9px] tracking-[3px] uppercase text-dore mb-6">
              Contact direct
            </h3>
            <ul className="flex flex-col gap-3 text-[clamp(12px,0.9vw,14px)]">
              <li>
                <a
                  href="tel:+33677509897"
                  className="text-taupe hover:text-brun transition-colors duration-200"
                >
                  +33 (0)6 77 50 98 97
                </a>
              </li>
              <li>
                <a
                  href="mailto:lesliefolcarelli.tango@gmail.com"
                  className="text-taupe hover:text-brun transition-colors duration-200"
                >
                  lesliefolcarelli.tango@gmail.com
                </a>
              </li>
              <li className="text-taupe">Nice, France</li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="text-[9px] tracking-[3px] uppercase text-dore mb-6">
              Suivre Leslie
            </h3>
            <div className="flex gap-5 justify-center md:justify-start">
              <a
                href="https://www.instagram.com/lesliefolcarelli/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-taupe hover:text-dore transition-colors duration-200"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="5" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/lesliefolcarelli"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-taupe hover:text-dore transition-colors duration-200"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@lesliefolcarelli"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="text-taupe hover:text-dore transition-colors duration-200"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19.1c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.43z" />
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-beige">
        <div className="max-w-[min(1200px,90vw)] mx-auto px-[clamp(20px,5vw,80px)] py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="font-display text-lg font-light text-brun">
            Leslie Folcarelli
          </div>
          <div className="text-[10px] text-taupe tracking-wide" suppressHydrationWarning>
            &copy; {new Date().getFullYear()} Leslie Folcarelli &middot; Tango
            Argentin &middot; Nice
          </div>
        </div>
      </div>
    </footer>
  );
}
