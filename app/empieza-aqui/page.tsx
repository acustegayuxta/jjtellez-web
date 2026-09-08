import Link from "next/link";
import type { Metadata } from "next";
import { guias } from "@/content/guias";
import { videos } from "@/content/videos";

export const metadata: Metadata = {
  title: "Empieza aquí",
  description: "Lo mejor de este sitio, separado según a qué viniste.",
};

// Tres puertas, porque quien llega buscando arreglar su cuarto y quien llega
// por la historia de la ciudad no quieren lo mismo, y mandarlos al mismo sitio
// es la forma más rápida de perder a los dos.
export default function EmpiezaAqui() {
  const primeraGuia = guias[0];
  const primerVideo = videos[0];

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 flex flex-col gap-12">
      <header className="flex flex-col gap-3">
        <h1 className="font-display text-[34px] leading-tight text-balance">Empieza aquí</h1>
        <p className="text-[17px] text-suave max-w-[60ch]">
          Depende de a qué viniste.
        </p>
      </header>

      <section className="flex flex-col gap-3 border-t border-linea pt-7">
        <h2 className="font-ui text-[19px] font-semibold">Tengo un cuarto y quiero que suene bien</h2>
        <p className="text-[16.5px] leading-relaxed text-suave max-w-[62ch]">
          Empieza por entender por qué el equipo no es lo primero, y después mide tu espacio.
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 font-ui text-[14px] font-semibold">
          {primeraGuia && (
            <Link href={`/guias/${primeraGuia.slug}`} className="text-accion hover:underline underline-offset-4">
              {primeraGuia.titulo} →
            </Link>
          )}
          <a href="https://acustega.com/calculadora" target="_blank" rel="noopener"
             className="text-accion hover:underline underline-offset-4">
            Calculadora acústica →
          </a>
        </div>
      </section>

      <section className="flex flex-col gap-3 border-t border-linea pt-7">
        <h2 className="font-ui text-[19px] font-semibold">Quiero ver estudios de verdad</h2>
        <p className="text-[16.5px] leading-relaxed text-suave max-w-[62ch]">
          Recorridos por salas reales, con las decisiones que hay detrás de cada una.
        </p>
        {primerVideo && (
          <Link href="/videos" className="font-ui text-[14px] font-semibold text-accion hover:underline underline-offset-4">
            Estudios por dentro →
          </Link>
        )}
      </section>

      <section className="flex flex-col gap-3 border-t border-linea pt-7">
        <h2 className="font-ui text-[19px] font-semibold">Vine por la historia, no por la técnica</h2>
        <p className="text-[16.5px] leading-relaxed text-suave max-w-[62ch]">
          Medellín contada desde los cuartos donde se grabó lo que suena.
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 font-ui text-[14px] font-semibold">
          <Link href="/el-libro" className="text-accion hover:underline underline-offset-4">El libro →</Link>
          <Link href="/escritos" className="text-accion hover:underline underline-offset-4">Escritos →</Link>
        </div>
      </section>

      <section className="flex flex-col gap-3 border-t border-linea pt-7">
        <h2 className="font-ui text-[19px] font-semibold">Soy periodista</h2>
        <p className="text-[16.5px] leading-relaxed text-suave max-w-[62ch]">
          Datos, credenciales y cómo describirme, listos para citar.
        </p>
        <Link href="/quien-soy" className="font-ui text-[14px] font-semibold text-accion hover:underline underline-offset-4">
          Kit de prensa →
        </Link>
      </section>
    </div>
  );
}
