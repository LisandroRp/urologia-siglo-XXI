import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',          // exporta como estático
  images: {
    unoptimized: true,       // desactiva optimización de imágenes
  },
};

module.exports = nextConfig;
