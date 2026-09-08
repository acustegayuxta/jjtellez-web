import type { Metadata } from "next";
import { lecturas } from "@/content/lecturas";

export const metadata: Metadata = {
  title: "Lecturas",
  description: "Libros que recomiendo y por qué.",
};

export default function Lecturas() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 flex flex-col gap-10">
      <header className="flex flex-col gap-3">
        <h1 className="font-display text-[34px] leading-tight text-balance">Lecturas</h1>
        <p className="text-[17px] text-suave max-w-[60ch]">
          Libros que me cambiaron algo. No hay reseñas: solo por qué vale la pena cada uno.
        </p>
      </header>

      {lecturas.length === 0 ? (
        <p className="text-[16px] text-suave">Todavía no he puesto ninguno. Van pronto.</p>
      ) : (
        <ul className="flex flex-col divide-y divide-linea border-t border-linea">
          {lecturas.map((l) => (
            <li key={l.titulo} className="py-6 flex flex-col gap-2">
              <h2 className="font-display text-[22px] leading-snug text-balance">{l.titulo}</h2>
              <p className="font-ui text-[13px] text-suave">{l.autor}</p>
              <p className="text-[16.5px] leading-relaxed max-w-[62ch]">{l.porque}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
