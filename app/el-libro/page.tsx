import type { Metadata } from "next";
import Boletin from "@/components/Boletin";

export const metadata: Metadata = {
  title: "El libro",
  description:
    "Un libro sobre Medellín y la música latina, contado desde adentro de los estudios de grabación.",
};

export default function ElLibro() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-16 flex flex-col gap-10">
      <header className="flex flex-col gap-4">
        <h1 className="font-display text-[34px] leading-tight text-balance">El libro</h1>
        <p className="text-[18px] leading-relaxed text-suave">
          Todavía no tiene título. Sí tiene tesis.
        </p>
      </header>

      <div className="flex flex-col gap-6">
        <p className="text-[17.5px] leading-[1.75]">
          Entre 2010 y hoy, Medellín pasó de no tener industria musical a exportar buena parte
          de lo que suena en el mundo. Esa historia se ha contado desde los artistas y desde
          los sellos. Falta contarla desde el otro lado del vidrio: desde los cuartos donde
          eso se grabó, y desde la gente que los construyó sin que nadie supiera su nombre.
        </p>
        <p className="text-[17.5px] leading-[1.75]">
          Yo estuve en muchos de esos cuartos, midiendo, diseñando, discutiendo presupuestos.
          Es un lugar raro para mirar una escena: uno no ve el éxito, ve las decisiones que se
          tomaron antes, casi siempre con poco dinero y mucha prisa.
        </p>
        <p className="text-[17.5px] leading-[1.75]">
          El libro es eso: memoria personal y, de paso, una historia de la ciudad contada por
          sus habitaciones.
        </p>
      </div>

      <Boletin
        titulo="Avísame cuando salga"
        promesa="Te escribo cuando haya algo que leer. Puede tardar. No te va a llegar otra cosa."
        boton="Avísame"
      />
    </div>
  );
}
