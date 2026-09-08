import Link from "next/link";
import type { Metadata } from "next";
import { guias } from "@/content/guias";

export const metadata: Metadata = {
  title: "Guías de acústica",
  description:
    "Guías prácticas sobre acústica de estudios: qué tratar primero, cuánto cuesta, cómo suena un cuarto y por qué.",
};

export default function Guias() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 flex flex-col gap-12">
      <header className="flex flex-col gap-3">
        <h1 className="font-display text-[34px] leading-tight text-balance">Guías</h1>
        <p className="text-[17px] text-suave max-w-[60ch]">
          Lo técnico, explicado para que sirva. Sin vender nada y sin dar por sabido lo que
          nadie te explicó. Una al mes.
        </p>
      </header>

      <ul className="flex flex-col divide-y divide-linea border-t border-linea">
        {guias.map((g) => (
          <li key={g.slug} className="py-6">
            <Link href={`/guias/${g.slug}`} className="group flex flex-col gap-2">
              <h2 className="font-ui text-[21px] font-semibold leading-snug text-balance group-hover:text-accion transition-colors">
                {g.titulo}
              </h2>
              <p className="text-[16px] text-suave max-w-[62ch]">{g.bajada}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
