import type { Metadata } from "next";
import { perfil } from "@/content/perfil";
import PestanasQuienSoy from "@/components/PestanasQuienSoy";

const SITIO = "https://jjtellez.lat";

/**
 * Esta es la página que tiene que salir cuando alguien busca su nombre.
 * Por eso es la única del sitio cuyo título empieza por el nombre completo
 * en vez de por el nombre de la sección.
 */
export const metadata: Metadata = {
  title: {
    absolute: `${perfil.nombre} — Quién soy`,
  },
  description:
    "Ingeniero de sonido especializado en acústica. Nacido en Valencia, Venezuela; " +
    "radicado en Medellín desde 2006. Ha diseñado más de cien estudios y espacios " +
    "profesionales en nueve países. Biografía, credenciales y kit de prensa.",
  alternates: { canonical: `${SITIO}/quien-soy` },
  openGraph: {
    type: "profile",
    url: `${SITIO}/quien-soy`,
    title: `${perfil.nombre} — Quién soy`,
    description: `${perfil.titulo}. Biografía, credenciales y kit de prensa.`,
  },
};

/**
 * Datos estructurados de la página de perfil.
 *
 * No repite a la persona: la referencia por su @id, que se declara una sola vez
 * en el layout. Eso es lo que le dice al buscador «esta página trata sobre esa
 * persona», que es distinto de «esta página menciona ese nombre».
 */
function datosDePagina() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${SITIO}/quien-soy#pagina`,
    url: `${SITIO}/quien-soy`,
    name: `${perfil.nombre} — Quién soy`,
    inLanguage: "es",
    mainEntity: { "@id": `${SITIO}/#persona` },
  };
}

export default function QuienSoy() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 flex flex-col gap-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datosDePagina()) }}
      />
      <h1 className="font-display text-[34px] leading-tight text-balance">Quién soy</h1>
      <PestanasQuienSoy />
    </div>
  );
}
