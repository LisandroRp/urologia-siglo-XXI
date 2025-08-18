import "../core/styles/globals.css"
import Head from "next/head";
import type { AppProps } from 'next/app';
import { Header } from "@/components/Header";

export function App({ Component, pageProps, }: AppProps) {
  const siteUrl = "https://urologia-siglo-xxi.vercel.app";
  return (
    <>
      <Header />
      <Head>
        <title>Urología Siglo XXI</title>
        <link rel="canonical" href={siteUrl} />
        <meta name="description" content="Tecnología de vanguardia y más de 30 años de experiencia en diagnóstico y tratamiento integral de patologías urológicas." />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Urología Siglo XXI" />
        <meta property="og:description" content="Tecnología de vanguardia y más de 30 años de experiencia en diagnóstico y tratamiento integral de patologías urológicas." />
        <meta property="og:image" content={`${siteUrl}/green1.jpg`} />
        <meta property="og:url" content={siteUrl} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Urología Siglo XXI" />
        <meta name="twitter:description" content="Más de 30 años de experiencia en diagnóstico y tratamiento integral de patologías urológicas." />
        <meta name="twitter:image" content={`${siteUrl}/green1.jpg`} />
      </Head>
      <Component
        {...pageProps}
      />
    </>
  );
}

export default App;
