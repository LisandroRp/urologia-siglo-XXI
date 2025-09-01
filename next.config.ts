import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // exporta como estático
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: "/:path*", // todas las rutas
        has: [{ type: "host", value: "www.urologiasigloxxi.com" }], // si viene de www
        destination: "https://urologiasigloxxi.com/:path*", // redirigir a sin www
        permanent: true, // 301
      },
    ];
  },
};

module.exports = nextConfig;
