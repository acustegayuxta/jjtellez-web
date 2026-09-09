import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, Roboto } from "next/font/google";
import { perfil } from "@/content/perfil";
import Cabecera from "@/components/Cabecera";
import Footer from "@/components/Footer";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ variable: "--jakarta", subsets: ["latin"], display: "swap" });
const playfair = Playfair_Display({ variable: "--playfair", subsets: ["latin"], display: "swap" });
const roboto = Roboto({ variable: "--roboto", subsets: ["latin"], weight: ["400", "500", "700"], display: "swap" });

const SITIO = "https://jjtellez.lat";

export const metadata: Metadata = {
  metadataBase: new URL(SITIO),
  title: {
    default: `${perfil.nombre} — ${perfil.titulo}`,
    template: `%s — ${perfil.nombre}`,
  },
  description:
    "Escritos y guías sobre acústica, estudios de grabación y el oficio de hacer que un cuarto suene. " +
    "Diseño de estudios en nueve países.",
  alternates: { canonical: SITIO },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: SITIO,
    siteName: perfil.nombre,
    title: `${perfil.nombre} — ${perfil.titulo}`,
    description: perfil.frase,
  },
  twitter: {
    card: "summary_large_image",
    title: `${perfil.nombre} — ${perfil.titulo}`,
    description: perfil.frase,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

/**
 * Datos estructurados de persona.
 *
 * Es lo que permite que un buscador entienda que "José Julián Téllez García"
 * es una persona concreta y no una coincidencia de palabras. El ORCID y el DOI
 * son las únicas señales de aquí que se pueden verificar contra una fuente
 * externa e independiente, y por eso van.
 *
 * El canal de YouTube NO va: los videos se enlazan uno por uno.
 */
function datosDePersona() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITIO}/#persona`,
    name: perfil.nombre,
    alternateName: perfil.nombreAlterno,
    givenName: "José Julián",
    familyName: "Téllez García",
    jobTitle: perfil.titulo,
    url: SITIO,
    email: `mailto:${perfil.correo}`,
    image: `${SITIO}${perfil.foto.src}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Medellín",
      addressCountry: "CO",
    },
    identifier: {
      "@type": "PropertyValue",
      propertyID: "ORCID",
      value: perfil.credenciales.orcid,
    },
    knowsAbout: [
      "Acústica arquitectónica",
      "Aislamiento acústico",
      "Tratamiento acústico",
      "Diseño de estudios de grabación",
      "Tiempo de reverberación",
      "Modos de sala",
      "Ruido ambiental",
    ],
    knowsLanguage: ["es", "en"],
    sameAs: perfil.perfiles.map((p) => p.url),
    worksFor: perfil.trabajo
      .filter((t) => t.url)
      .map((t) => ({ "@type": "Organization", name: t.nombre, url: t.url })),
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${jakarta.variable} ${playfair.variable} ${roboto.variable}`}>
      <body className="min-h-screen flex flex-col bg-papel text-tinta">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(datosDePersona()) }}
        />
        <Cabecera />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
