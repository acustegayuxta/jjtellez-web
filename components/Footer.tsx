import Link from "next/link";
import { perfil } from "@/content/perfil";

export default function Footer() {
  return (
    <footer className="border-t border-linea mt-24">
      <div className="mx-auto max-w-5xl px-6 py-12 flex flex-col gap-8">
        <div className="flex flex-wrap gap-x-8 gap-y-3 font-ui text-[13px]">
          {perfil.perfiles.map((p) => (
            <a
              key={p.nombre}
              href={p.url}
              rel="me noopener"
              target="_blank"
              className="text-accion hover:underline underline-offset-4"
            >
              {p.nombre}
            </a>
          ))}
          <a
            href={`mailto:${perfil.correo}`}
            className="text-accion hover:underline underline-offset-4"
          >
            Escríbeme
          </a>
        </div>
        <div className="flex flex-wrap gap-x-8 gap-y-3 font-ui text-[13px] text-suave">
          <Link href="/mi-trabajo" className="hover:text-tinta transition-colors">Mi trabajo</Link>
          <Link href="/charlas" className="hover:text-tinta transition-colors">Charlas</Link>
          <Link href="/lecturas" className="hover:text-tinta transition-colors">Lecturas</Link>
          <Link href="/empieza-aqui" className="hover:text-tinta transition-colors">Empieza aquí</Link>
        </div>
        <p className="font-ui text-[12px] text-suave">
          {perfil.nombre} · {perfil.ubicacion}
        </p>
      </div>
    </footer>
  );
}
