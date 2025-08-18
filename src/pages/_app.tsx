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
        <title>Urología Siglo XXI | Clínica de Urología en Buenos Aires</title>
        <link rel="canonical" href={siteUrl} />
        <meta
          name="description"
          content="Urología Siglo XXI en Buenos Aires. Atención especializada del Dr. Norberto Omar Rodríguez con tecnología de última generación."
        />
        {/* favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicon.ico" />
        {/* <link rel="manifest" href="/site.webmanifest" /> */}

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

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "MedicalClinic",
                  "@id": `${siteUrl}#XXI`,
                  name: "Urología Siglo XXI - Las Toscas Office",
                  image: `${siteUrl}/logo.png`,
                  url: siteUrl,
                  telephone: "+54 9 11 2298-6080",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Giribone 909",
                    addressLocality: "Canning, Ezeiza",
                    addressRegion: "Buenos Aires",
                    addressCountry: "AR",
                  },
                  openingHoursSpecification: [
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: "Monday",
                      opens: "18:00",
                      closes: "20:00",
                    },
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: "Wednesday",
                      opens: "18:00",
                      closes: "20:00",
                    },
                  ],
                  sameAs: [
                    "https://www.instagram.com/urologiastuconsulta",
                  ],
                },
                {
                  "@type": "MedicalClinic",
                  "@id": `${siteUrl}#XXI`,
                  name: "Urología Siglo XXI - CICAS",
                  image: `${siteUrl}/logo.png`,
                  url: siteUrl,
                  telephone: "+54 9 11 3770-1199",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress: "Florentino Ameghino 770",
                    addressLocality: "Cañuelas",
                    addressRegion: "Buenos Aires",
                    addressCountry: "AR",
                  },
                  openingHoursSpecification: [
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: "Tuesday",
                      opens: "18:00",
                      closes: "20:00",
                    },
                    {
                      "@type": "OpeningHoursSpecification",
                      dayOfWeek: "Thursday",
                      opens: "18:00",
                      closes: "20:00",
                    },
                  ],
                  sameAs: [
                    "https://www.instagram.com/urologiastuconsulta",
                  ],
                },
                {
                  "@type": "Person",
                  "@id": `${siteUrl}#norberto`,
                  name: "Dr. Norberto Omar Rodríguez",
                  url: "https://ar.linkedin.com/in/norberto-omar-rodriguez-b8b63590",
                  image: `${siteUrl}/green3.jpg`,
                  jobTitle: "Urología y Proctología",
                  worksFor: [
                    { "@id": `${siteUrl}#XXI` },
                  ],
                },
              ],
            }),
          }}
        />


      </Head>
      <Component
        {...pageProps}
      />
    </>
  );
}

export default App;
