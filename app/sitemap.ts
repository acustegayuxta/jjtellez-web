import type { MetadataRoute } from "next";
import { guias } from "@/content/guias";
import { escritos } from "@/content/escritos";

const SITIO = "https://jjtellez.lat";

/**
 * El mapa del sitio.
 *
 * Es el archivo que Google pide primero: la lista de todo lo que existe aquí,
 * con la fecha de lo último que cambió. Sin él, el buscador tiene que adivinar
 * las páginas siguiendo enlaces, y las que están a dos clics de la portada
 * pueden tardar semanas en aparecer.
 *
 * Las guías y los escritos se añaden solos: salen de content/, así que publicar
 * una guía la mete en el mapa sin tocar este archivo.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const hoy = new Date();

  const ultimaGuia = guias[0]?.fecha ? new Date(guias[0].fecha) : hoy;
  const ultimoEscrito = escritos[0]?.fecha ? new Date(escritos[0].fecha) : hoy;

  const fijas: MetadataRoute.Sitemap = [
    { url: SITIO,                   lastModified: hoy,           changeFrequency: "weekly",  priority: 1.0 },
    { url: `${SITIO}/quien-soy`,    lastModified: hoy,           changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITIO}/guias`,        lastModified: ultimaGuia,    changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITIO}/escritos`,     lastModified: ultimoEscrito, changeFrequency: "weekly",  priority: 0.8 },
    { url: `${SITIO}/mi-trabajo`,   lastModified: hoy,           changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITIO}/el-libro`,     lastModified: hoy,           changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITIO}/videos`,       lastModified: hoy,           changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITIO}/charlas`,      lastModified: hoy,           changeFrequency: "yearly",  priority: 0.5 },
    { url: `${SITIO}/lecturas`,     lastModified: hoy,           changeFrequency: "yearly",  priority: 0.4 },
    { url: `${SITIO}/empieza-aqui`, lastModified: hoy,           changeFrequency: "monthly", priority: 0.6 },
  ];

  const deGuias: MetadataRoute.Sitemap = guias.map((g) => ({
    url: `${SITIO}/guias/${g.slug}`,
    lastModified: new Date(g.fecha),
    changeFrequency: "yearly" as const,
    priority: 0.8,
  }));

  const deEscritos: MetadataRoute.Sitemap = escritos.map((e) => ({
    url: `${SITIO}/escritos/${e.slug}`,
    lastModified: new Date(e.fecha),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  return [...fijas, ...deGuias, ...deEscritos];
}
