import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { escritos } from "@/content/escritos";
import Cierre from "@/components/Cierre";

export function generateStaticParams() {
  return escritos.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const e = escritos.find((x) => x.slug === slug);
  if (!e) return {};
  return {
    title: e.titulo,
    description: e.bajada,
    openGraph: { type: "article", title: e.titulo, description: e.bajada, publishedTime: e.fecha },
  };
}

export default async function Escrito({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const escrito = escritos.find((e) => e.slug === slug);
  if (!escrito) notFound();

  return (
    <article className="mx-auto max-w-2xl px-6 py-16">
      <header className="flex flex-col gap-3 mb-10">
        <span className="font-ui text-[12px] text-suave">
          {new Date(`${escrito.fecha}T12:00:00`).toLocaleDateString("es-CO", { day: "numeric", month: "long", year: "numeric" })}
        </span>
        <h1 className="font-display text-[34px] leading-tight text-balance">{escrito.titulo}</h1>
        <p className="text-[18px] text-suave leading-relaxed">{escrito.bajada}</p>
      </header>
      <div className="flex flex-col gap-6">
        {escrito.parrafos.map((p, i) => (
          <p key={i} className="text-[17.5px] leading-[1.75]">{p}</p>
        ))}
      </div>
      <Cierre tipo="escrito" />
    </article>
  );
}
