import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Next.js 16 bloque par défaut les requêtes cross-origin vers les ressources dev
  // (chunks JS, HMR). Sans ça, les téléphones du réseau local ne peuvent pas hydrater React.
  allowedDevOrigins: ["192.168.1.24"],
};

export default nextConfig;
