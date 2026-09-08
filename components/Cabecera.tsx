"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { perfil } from "@/content/perfil";

// ─────────────────────────────────────────────────────────────────────────────
// La cabecera.
//
// En la portada es la banda completa: retrato a la izquierda, la frase grande a
// la derecha. En las páginas de dentro se recoge a una barra delgada.
//
// El motivo del cambio: repetir un retrato a media pantalla y una frase de
// treinta puntos encima de cada texto empuja el contenido fuera de vista y le
// quita fuerza a la frase, que solo funciona cuando se dice una vez. La
// identidad se sostiene por el azul noche y la tipografía, no por repetir el
// mismo bloque nueve veces.
// ─────────────────────────────────────────────────────────────────────────────

const MENU = [
  { href: "/escritos",  texto: "Escritos" },
  { href: "/guias",     texto: "Guías" },
  { href: "/videos",    texto: "Videos" },
  { href: "/el-libro",  texto: "El libro" },
  { href: "/quien-soy", texto: "Quién soy" },
];

function Menu({ activo }: { activo: string }) {
  return (
    <nav aria-label="Principal">
      <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 font-ui text-[13px]">
        {MENU.map(({ href, texto }) => {
          const aqui = activo === href || activo.startsWith(`${href}/`);
          return (
            <li key={href}>
              <Link
                href={href}
                aria-current={aqui ? "page" : undefined}
                className={
                  aqui
                    ? "text-white font-semibold underline decoration-2 underline-offset-[6px]"
                    : "text-white/70 hover:text-white transition-colors"
                }
              >
                {texto}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default function Cabecera() {
  const ruta = usePathname() ?? "/";
  const enPortada = ruta === "/";

  if (!enPortada) {
    return (
      <header className="bg-noche">
        <div className="mx-auto max-w-5xl px-6 py-4 flex flex-wrap items-center justify-between gap-4">
          <Link href="/" className="font-ui text-sm font-bold text-white tracking-tight">
            {perfil.nombre}
          </Link>
          <Menu activo={ruta} />
        </div>
      </header>
    );
  }

  return (
    <header className="bg-noche">
      <div className="mx-auto max-w-5xl px-6 pt-5 pb-3">
        <Menu activo={ruta} />
      </div>
      <div className="mx-auto max-w-5xl px-6 pb-12 md:pb-16 grid md:grid-cols-[2fr_3fr] gap-8 md:gap-10 items-center">
        <div className="relative aspect-[4/5] w-full max-w-[280px] md:max-w-none overflow-hidden rounded-sm bg-white/5">
          {perfil.foto.lista ? (
            <Image
              src={perfil.foto.src}
              alt={perfil.foto.alt}
              fill
              priority
              sizes="(max-width: 768px) 280px, 40vw"
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 grid place-items-center border border-white/10">
              <span className="font-ui text-[11px] tracking-[0.18em] uppercase text-white/25">
                Retrato
              </span>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="font-display text-white text-[30px] leading-[1.15] sm:text-[38px] md:text-[44px] text-balance">
            {perfil.frase}
          </h1>
          <p className="font-ui text-[13px] text-white/60">
            {perfil.nombre} · {perfil.titulo}
          </p>
        </div>
      </div>
    </header>
  );
}
