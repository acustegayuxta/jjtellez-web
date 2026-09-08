import Link from "next/link";
import type { Metadata } from "next";
import { escritos } from "@/content/escritos";
import Boletin from "@/components/Boletin";

export const metadata: Metadata = {
  title: "Escritos",
  description: "Emprendimiento, decisiones y historias del oficio, desde adentro de los estudios de grabación.",
};

export default function Escritos() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 flex flex-col gap-12">
      <header className="flex flex-col gap-3">
        <h1 className="font-display text-[34px] leading-tight text-balance">Escritos</h1>
        <p className="text-[17px] text-suave max-w-[60ch]">
          Lo que voy aprendiendo del oficio, de montar cosas y de esta ciudad. Salen los domingos.
        </p>
      </header>

      {escritos.length === 0 ? (
        <p className="text-[16px] text-suave">El primero está en camino.</p>
      ) : (
        <ul className="flex flex-col divide-y divide-linea border-t border-linea">
          {escritos.map((e) => (
            <li key={e.slug} className="py-6">
              <Link href={`/escritos/${e.slug}`} className="group flex flex-col gap-2">
                <span className="font-ui text-[12px] text-suave">
                  {new Date(`${e.fecha}T12:00:00`).toLocaleDateString("es-CO", { day: "numeric", month: "long", year: "numeric" })}
                </span>
                <h2 className="font-display text-[24px] leading-snug text-balance group-hover:text-accion transition-colors">
                  {e.titulo}
                </h2>
                <p className="text-[16px] text-suave max-w-[62ch]">{e.bajada}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}

      <Boletin />
    </div>
  );
}
