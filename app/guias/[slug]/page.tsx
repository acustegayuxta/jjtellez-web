import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { guias } from "@/content/guias";
import { perfil } from "@/content/perfil";
import Cierre from "@/components/Cierre";

export function generateStaticParams() {
  return guias.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const g = guias.find((x) => x.slug === slug);
  if (!g) return {};
  return {
    title: g.titulo,
    description: g.bajada,
    alternates: { canonical: `https://jjtellez.lat/guias/${g.slug}` },
    openGraph: { type: "article", title: g.titulo, description: g.bajada, publishedTime: g.fecha },
  };
}

export default async function Guia({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guia = guias.find((g) => g.slug === slug);
  if (!guia) notFound();

  // Una guía es un texto técnico con autor y fecha. Declararlo así es lo que
  // permite que un buscador sepa quién responde, y no solo qué se responde.
  const datos = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: guia.titulo,
    description: guia.bajada,
    datePublished: guia.fecha,
    inLanguage: "es",
    author: { "@id": "https://jjtellez.lat/#persona" },
    mainEntityOfPage: `https://jjtellez.lat/guias/${guia.slug}`,
  };

  return (
    <article className="mx-auto max-w-2xl px-6 py-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(datos) }} />
      <header className="flex flex-col gap-3 mb-10">
        <h1 className="font-ui text-[32px] font-bold leading-tight text-balance">{guia.titulo}</h1>
        <p className="text-[18px] text-suave leading-relaxed">{guia.bajada}</p>
      </header>
      <div className="flex flex-col gap-6">
        {guia.parrafos.map((p, i) => (
          <p key={i} className="text-[17.5px] leading-[1.75]">{p}</p>
        ))}
      </div>
      <p className="mt-10 font-ui text-[13px] text-suave">
        {perfil.nombre} · {perfil.titulo}
      </p>
      <Cierre tipo="guia" />
    </article>
  );
}
