import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',          // exporta como estático
  images: {
    unoptimized: true,       // desactiva optimización de imágenes
  },
  basePath: '/urologia-siglo-XXI', // 👈 nombre del repo
  assetPrefix: '/urologia-siglo-XXI/', // 👈 prefijo de assets
};

module.exports = nextConfig;
