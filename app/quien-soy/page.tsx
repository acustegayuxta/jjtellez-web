"use client";

import { useState } from "react";
import { perfil } from "@/content/perfil";

type Pestana = "corta" | "larga" | "prensa";

const PESTANAS: { id: Pestana; texto: string }[] = [
  { id: "corta",  texto: "En corto" },
  { id: "larga",  texto: "La versión larga" },
  { id: "prensa", texto: "Kit de prensa" },
];

export default function QuienSoy() {
  const [activa, setActiva] = useState<Pestana>("corta");

  return (
    <div className="mx-auto max-w-3xl px-6 py-16 flex flex-col gap-10">
      <h1 className="font-display text-[34px] leading-tight text-balance">Quién soy</h1>

      <div role="tablist" aria-label="Versiones" className="flex flex-wrap gap-x-6 gap-y-2 border-b border-linea">
        {PESTANAS.map((p) => (
          <button
            key={p.id}
            role="tab"
            id={`tab-${p.id}`}
            aria-selected={activa === p.id}
            aria-controls={`panel-${p.id}`}
            onClick={() => setActiva(p.id)}
            className={
              "font-ui text-[14px] pb-3 -mb-px border-b-2 transition-colors " +
              (activa === p.id
                ? "border-accion text-tinta font-semibold"
                : "border-transparent text-suave hover:text-tinta")
            }
          >
            {p.texto}
          </button>
        ))}
      </div>

      {activa === "corta" && (
        <section role="tabpanel" id="panel-corta" aria-labelledby="tab-corta" className="flex flex-col gap-6">
          <p className="text-[18px] leading-relaxed">
            Soy ingeniero de sonido y me dedico a la acústica: a que un espacio suene como
            necesita sonar. Vivo en Medellín desde 2006 y nací en Valencia, Venezuela.
          </p>
          <p className="text-[17px] leading-relaxed text-suave">
            He diseñado más de cien estudios y espacios profesionales en nueve países. Hoy
            trabajo sobre todo en diseño y diagnóstico; la obra la ejecutan otros.
          </p>
        </section>
      )}

      {activa === "larga" && (
        <section role="tabpanel" id="panel-larga" aria-labelledby="tab-larga" className="flex flex-col gap-8">
          <div className="flex flex-col gap-5">
            <p className="text-[17.5px] leading-[1.75]">
              Entré a la música por casualidad. Trabajaba en control de ruido industrial en
              Medellín cuando me llamaron de un número privado para hacer un estudio. Eran
              The Rude Boyz, productores de Envigado. Ese fue el primer estudio de grabación
              que construí en Colombia, y en ese momento yo no tenía ni idea de quiénes eran.
            </p>
            <p className="text-[17.5px] leading-[1.75]">
              Desde entonces han pasado más de cien salas en nueve países, entre estudios,
              cabinas, iglesias, restaurantes y oficinas. Cambia el uso, pero el problema de
              fondo es el mismo: casi siempre llegan cuando el cuarto ya está construido y la
              plata ya se gastó en equipo.
            </p>
            <p className="text-[17.5px] leading-[1.75]">
              Últimamente me interesa más el diseño y el diagnóstico que la obra. Por eso
              buena parte de mi trabajo hoy es hacer que lo que sé quepa en algo que otro
              pueda usar sin llamarme: guías, calculadoras, un diagnóstico que corre solo.
            </p>
          </div>

          <div className="border-t border-linea pt-8 flex flex-col gap-4">
            <h2 className="font-ui text-[13px] font-bold tracking-[0.14em] uppercase text-suave">La ruta</h2>
            <ul className="flex flex-col gap-4">
              {perfil.ruta.map((r) => (
                <li key={r.anio} className="grid grid-cols-[60px_1fr] gap-4">
                  <span className="font-ui text-[13px] font-semibold text-accion pt-1">{r.anio}</span>
                  <span className="text-[16.5px] leading-relaxed">{r.texto}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {activa === "prensa" && (
        <section role="tabpanel" id="panel-prensa" aria-labelledby="tab-prensa" className="flex flex-col gap-8">
          <p className="text-[16px] text-suave max-w-[60ch]">
            Para periodistas. Todo lo de abajo se puede citar tal cual. Para material gráfico
            o una entrevista, escríbeme a{" "}
            <a href={`mailto:${perfil.correo}`} className="text-accion hover:underline underline-offset-4">
              {perfil.correo}
            </a>.
          </p>

          <div className="flex flex-col gap-3">
            <h2 className="font-ui text-[13px] font-bold tracking-[0.14em] uppercase text-suave">Cómo describirme</h2>
            <p className="text-[16.5px] leading-relaxed">
              {perfil.nombre}, {perfil.titulo.toLowerCase()}, con matrícula profesional{" "}
              {perfil.credenciales.matricula}. Nacido en Valencia, Venezuela; radicado en
              Medellín desde 2006. Ha diseñado más de cien estudios y espacios profesionales
              en nueve países, entre ellos salas para {perfil.artistas.slice(0, -1).join(", ")} y{" "}
              {perfil.artistas.at(-1)}.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h2 className="font-ui text-[13px] font-bold tracking-[0.14em] uppercase text-suave">Publicación</h2>
            <p className="text-[16px] leading-relaxed">
              «{perfil.credenciales.publicacion.titulo}». {perfil.credenciales.publicacion.revista},{" "}
              {perfil.credenciales.publicacion.anio}.{" "}
              <a href={perfil.credenciales.publicacion.doi} target="_blank" rel="noopener"
                 className="text-accion hover:underline underline-offset-4">
                Ver publicación
              </a>
            </p>
            <p className="font-ui text-[13px] text-suave">ORCID {perfil.credenciales.orcid}</p>
          </div>

          {perfil.citas.length > 0 && (
            <div className="flex flex-col gap-4">
              <h2 className="font-ui text-[13px] font-bold tracking-[0.14em] uppercase text-suave">En prensa</h2>
              {perfil.citas.map((c) => (
                <blockquote key={c.url} className="border-l-2 border-linea pl-5 flex flex-col gap-2">
                  <p className="font-display text-[18px] leading-relaxed">«{c.texto}»</p>
                  <a href={c.url} target="_blank" rel="noopener"
                     className="font-ui text-[13px] text-accion hover:underline underline-offset-4">
                    {c.medio}, {c.fecha}
                  </a>
                </blockquote>
              ))}
            </div>
          )}
        </section>
      )}
    </div>
  );
}
