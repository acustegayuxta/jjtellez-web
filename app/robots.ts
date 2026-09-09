import type { MetadataRoute } from "next";

const SITIO = "https://jjtellez.lat";

/**
 * robots.txt
 *
 * Le dice a los buscadores que pueden entrar a todo menos a la API del
 * formulario de correo, que no es una página y no tiene nada que indexar.
 * La línea que de verdad importa es la del sitemap: es como el buscador
 * encuentra el mapa sin que nadie se lo mande a mano.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: `${SITIO}/sitemap.xml`,
    host: SITIO,
  };
}
