import Image from "next/image";

/* ─────────────────────────────────────────────────────────────
   KsPhoto — affiche une image Keystatic, ou un placeholder
   sombre dégradé avec une étiquette si l'image n'a pas encore
   été uploadée par Leslie.
   ───────────────────────────────────────────────────────────── */

type Props = {
  src: string | null | undefined;
  alt: string;
  /** Label affiché dans le placeholder si pas d'image */
  placeholderLabel?: string;
  /** Tailwind classes pour l'object-fit / object-position */
  objectClassName?: string;
  /** Sizes attribute pour next/image — défaut générique */
  sizes?: string;
  /** Priorité de chargement (LCP) */
  priority?: boolean;
};

export default function KsPhoto({
  src,
  alt,
  placeholderLabel = "Photo",
  objectClassName = "object-cover",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
}: Props) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={objectClassName}
      />
    );
  }
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-noir/50 via-charbon/30 to-brun/20" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-[10px] tracking-[3px] uppercase text-blanc/30">
          {placeholderLabel}
        </span>
      </div>
    </>
  );
}
