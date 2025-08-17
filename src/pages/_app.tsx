import "../core/styles/globals.css"
import Head from "next/head";
import type { AppProps } from 'next/app';
import { Header } from "@/components/Header";

export function App({ Component, pageProps, }: AppProps) {

  return (
    <>
      <Header />
      <Head>
        <title>Urología Siglo XXI</title>
        <meta name="description" content="Sitio oficial de Urología Siglo XXI. Director y fundador Dr. Norberto Omar Rodriguez. Atención especializada en urología con tecnología de última generación en Buenos Aires." />
        {/* WhatsApp y Facebook */}
        <meta property="og:title" content="Urología Siglo XXI" />
        <meta property="og:description" content="Atención especializada en urología. Director Dr. Norberto Omar Rodríguez. Tecnología de última generación en Buenos Aires." />
        <meta property="og:image" content="https://tusitio.com/preview.jpg" />
        <meta property="og:url" content="https://lisandrorp.github.io/urologia-siglo-XXI/" />
        <meta property="og:type" content="website" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Urología Siglo XXI" />
        <meta name="twitter:description" content="Atención especializada en urología con el Dr. Norberto Omar Rodríguez en Buenos Aires." />
        <meta name="twitter:image" content="https://tusitio.com/preview.jpg" />
      </Head>
      <Component
        {...pageProps}
      />
    </>
  );
}

export default App;
