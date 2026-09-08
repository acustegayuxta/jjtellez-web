import Link from "next/link";
import { escritos } from "@/content/escritos";
import { guias } from "@/content/guias";
import { videos } from "@/content/videos";
import Boletin from "@/components/Boletin";
import VideoTarjeta from "@/components/VideoTarjeta";

function Seccion({
  titulo, verMas, hrefMas, children,
}: { titulo: string; verMas?: string; hrefMas?: string; children: React.ReactNode }) {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-baseline justify-between gap-4 border-b border-linea pb-3">
        <h2 className="font-ui text-[13px] font-bold tracking-[0.14em] uppercase text-suave">{titulo}</h2>
        {verMas && hrefMas && (
          <Link href={hrefMas} className="font-ui text-[13px] text-accion hover:underline underline-offset-4">
            {verMas}
          </Link>
        )}
      </div>
      {children}
    </section>
  );
}

export default function Inicio() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 flex flex-col gap-20">

      <Seccion titulo="Escritos" verMas="Todos" hrefMas="/escritos">
        {escritos.length === 0 ? (
          <p className="text-[16px] text-suave max-w-[60ch]">
            El primero está en camino. Si quieres que te llegue, apúntate abajo.
          </p>
        ) : (
          <ul className="flex flex-col divide-y divide-linea">
            {escritos.slice(0, 3).map((e) => (
              <li key={e.slug} className="py-5">
                <Link href={`/escritos/${e.slug}`} className="group flex flex-col gap-1.5">
                  <h3 className="font-display text-[22px] leading-snug text-balance group-hover:text-accion transition-colors">
                    {e.titulo}
                  </h3>
                  <p className="text-[15.5px] text-suave max-w-[62ch]">{e.bajada}</p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Seccion>

      <Seccion titulo="Guías" verMas="Todas" hrefMas="/guias">
        <ul className="flex flex-col divide-y divide-linea">
          {guias.slice(0, 3).map((g) => (
            <li key={g.slug} className="py-5">
              <Link href={`/guias/${g.slug}`} className="group flex flex-col gap-1.5">
                <h3 className="font-ui text-[19px] font-semibold leading-snug text-balance group-hover:text-accion transition-colors">
                  {g.titulo}
                </h3>
                <p className="text-[15.5px] text-suave max-w-[62ch]">{g.bajada}</p>
              </Link>
            </li>
          ))}
        </ul>
      </Seccion>

      <Boletin />

      <Seccion titulo="Estudios por dentro" verMas="Todos" hrefMas="/videos">
        <div className="grid sm:grid-cols-2 gap-5">
          {videos.slice(0, 4).map((v) => <VideoTarjeta key={v.id} video={v} />)}
        </div>
      </Seccion>

    </div>
  );
}
