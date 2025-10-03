import "../core/styles/globals.css"
import Head from "next/head";
import type { AppProps } from 'next/app';
import { Header } from "@/components/Header";

export function App({ Component, pageProps, }: AppProps) {
  const siteUrl = "https://www.urologiasigloxxi.com/";
  return (
    <>
      <Header />
      <Head>
        <title>Urología Siglo XXI | Dr. Norberto Omar Rodríguez - Canning y Cañuelas</title>
        <link rel="canonical" href={siteUrl} />
        <meta name="description" content="Urología Siglo XXI en Canning y Cañuelas con el Dr. Norberto Omar Rodríguez. Consultas, diagnóstico preciso y tratamientos de última generación en urología." />

        {/* favicon */}
        <link rel="icon" type="image/x-icon" href={`${siteUrl}favicon.ico`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${siteUrl}favicon-x16.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`${siteUrl}favicon-x32.png`} />
        {/* apple */}
        <link rel="apple-touch-icon" sizes="180x180" href={`${siteUrl}apple-favicon.png`} />
        {/* android */}
        <link rel="icon" type="image/png" sizes="192x192" href={`${siteUrl}android-favicon-x192.png`} />
        <link rel="icon" type="image/png" sizes="512x512" href={`${siteUrl}android-favicon-x512.png`} />
        <link rel="manifest" href={`${siteUrl}site.webmanifest`} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Urología Siglo XXI" />
        <meta property="og:description" content="Tecnología de vanguardia y más de 30 años de experiencia en diagnóstico y tratamiento integral de patologías urológicas." />
        <meta property="og:image" content={`${siteUrl}green1.jpg`} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:locale" content={"es-AR"} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Urología Siglo XXI" />
        <meta name="twitter:description" content="Más de 30 años de experiencia en diagnóstico y tratamiento integral de patologías urológicas." />
        <meta name="twitter:image" content={`${siteUrl}green1.jpg`} />

        {/* google verification */}
        <meta name="google-site-verification" content="3DbC4BYutAtJ61l4yee-gKNuSoJ4Hn-RChHfZN6Ayh0" />

        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Organization",
                  "@id": `${siteUrl}#XXI`,
                  name: "Urología Siglo XXI - Canning y Cañuelas",
                  alternateName: "Urología Siglo XXI",
                  url: siteUrl,
                  logo: `${siteUrl}logo.png`,
                  sameAs: [
                    "https://www.instagram.com/urologiastuconsulta"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": `${siteUrl}#website`,
                  url: siteUrl,
                  name: "Urología Siglo XXI - Canning y Cañuelas",
                  alternateName: "Urología Siglo XXI",
                  publisher: { "@id": `${siteUrl}#XXI` }
                },
                {
                  "@type": "MedicalClinic",
                  "@id": `${siteUrl}#XXI-canning`,
                  name: "Urología Siglo XXI - Las Toscas Office",
                  image: `${siteUrl}logo.png`,
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
                  "@id": `${siteUrl}#XXI-canuelas`,
                  name: "Urología Siglo XXI - CICAS",
                  image: `${siteUrl}logo.png`,
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
                  image: `${siteUrl}green3.jpg`,
                  jobTitle: "Urología y Proctología",
                  worksFor: [
                    { "@id": `${siteUrl}#XXI-canning` },
                    { "@id": `${siteUrl}#XXI-canuelas` },
                  ],
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": `${siteUrl}#breadcrumb`,
                  "itemListElement": [
                    {
                      "@type": "ListItem",
                      "position": 1,
                      "name": "Urología Siglo XXI - Canning y Cañuelas",
                      "item": `${siteUrl}`
                    }
                  ]
                }
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
