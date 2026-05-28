import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next.js 16 bloque par défaut les requêtes cross-origin vers les ressources dev
  // (chunks JS, HMR). Sans ça, les téléphones du réseau local ne peuvent pas hydrater React.
  allowedDevOrigins: ["192.168.1.24"],

  // Le reader Keystatic lit content/ via process.cwd() — le tracker NFT ne le voit pas
  // et oublie d'inclure les nouveaux dossiers ajoutés par Leslie après le 1er build.
  // On force l'inclusion de tout content/ dans le bundle de chaque fonction serverless.
  outputFileTracingIncludes: {
    "/**/*": ["./content/**/*"],
  },
};

export default nextConfig;
