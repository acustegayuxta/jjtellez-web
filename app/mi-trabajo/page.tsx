import type { Metadata } from "next";
import { perfil } from "@/content/perfil";

export const metadata: Metadata = {
  title: "Mi trabajo",
  description: "Acustega, Yuxta y Headliner: en qué ando y qué hace cada cosa.",
};

export default function MiTrabajo() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 flex flex-col gap-10">
      <header className="flex flex-col gap-3">
        <h1 className="font-display text-[34px] leading-tight text-balance">Mi trabajo</h1>
        <p className="text-[17px] text-suave max-w-[60ch]">
          Tres frentes. Uno es el oficio, los otros dos salieron de mirar el mismo problema
          desde otro lado.
        </p>
      </header>

      <ul className="flex flex-col divide-y divide-linea border-t border-linea">
        {perfil.trabajo.map((t) => (
          <li key={t.nombre} className="py-7 flex flex-col gap-2.5">
            <h2 className="font-ui text-[21px] font-semibold">{t.nombre}</h2>
            <p className="text-[16.5px] leading-relaxed text-suave max-w-[62ch]">{t.que}</p>
            {t.url && (
              <a href={t.url} target="_blank" rel="noopener"
                 className="font-ui text-[14px] font-semibold text-accion hover:underline underline-offset-4">
                {t.url.replace("https://", "")} →
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
