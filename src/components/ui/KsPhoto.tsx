import Image from "next/image";

/* ─────────────────────────────────────────────────────────────
   KsPhoto — affiche une image Keystatic dans son cadre sans
   jamais la couper. La photo est en object-contain (entière)
   et un fond flou réutilise la même image en object-cover pour
   remplir les marges quand le ratio diffère du cadre.
   Fallback : placeholder dégradé si Leslie n'a pas encore uploadé.
   ───────────────────────────────────────────────────────────── */

type Props = {
  src: string | null | undefined;
  alt: string;
  /** Label affiché dans le placeholder si pas d'image */
  placeholderLabel?: string;
  /** Sizes attribute pour next/image — défaut générique */
  sizes?: string;
  /** Priorité de chargement (LCP) */
  priority?: boolean;
};

export default function KsPhoto({
  src,
  alt,
  placeholderLabel = "Photo",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
}: Props) {
  if (src) {
    return (
      <>
        <Image
          src={src}
          alt=""
          aria-hidden
          fill
          sizes={sizes}
          className="object-cover scale-110 blur-2xl opacity-80"
        />
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-contain"
        />
      </>
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
