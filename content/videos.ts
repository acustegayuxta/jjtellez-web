// ─────────────────────────────────────────────────────────────────────────────
// Los videos. El id es lo que va después de v= en la URL de YouTube.
// La miniatura se descarga sola y se le aplica el duotono azul por CSS.
//
// Los títulos NO son los que tienen hoy en YouTube: están reescritos para que
// se encuentren. El nombre del artista va delante porque es lo que la gente
// escribe, y el nombre de la marca sale del título porque ya está en el canal.
// ─────────────────────────────────────────────────────────────────────────────

export interface Video {
  id: string;
  titulo: string;
  descripcion: string;
  /** Reproducciones acumuladas en YouTube. Es cierto aunque el contador no se vea. */
  vistas?: string;
}

export const videos: Video[] = [
  {
    id: "ij__jA6sW_M",
    titulo: "El estudio de Ovy on the Drums por dentro",
    descripcion:
      "Qué tiene la sala donde trabaja uno de los productores más escuchados de la música latina, y por qué cada superficie está como está.",
    vistas: "38.500",
  },
  {
    id: "HuAZ_q6hjYM",
    titulo: "Cómo se diseñó el estudio de Ryan Castro",
    descripcion:
      "Diecinueve minutos de recorrido: aislamiento, tratamiento y por qué el orden en que se hacen las cosas cambia el resultado y el presupuesto.",
    vistas: "32.800",
  },
  {
    id: "lBqs8UHkEsI",
    titulo: "El estudio de Georgy Parra, de Salvaje Music",
    descripcion:
      "Dónde va la absorción, qué se deja reflejar y por qué. Un recorrido corto por decisiones que se toman una sola vez.",
    vistas: "8.700",
  },
  {
    id: "GDA7zcxXFTg",
    titulo: "El estudio de Chan El Genio, de The Rude Boyz",
    descripcion:
      "La mitad de The Rude Boyz muestra su sala. Es también donde empezó todo esto: el primer estudio construido en Colombia.",
    vistas: "8.000",
  },
];
