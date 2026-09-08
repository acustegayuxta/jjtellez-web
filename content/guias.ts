// ─────────────────────────────────────────────────────────────────────────────
// Guías: textos técnicos y útiles.
// Los lee alguien que buscó en Google y no te conocía. No caducan. Una al mes.
// Cierran invitando a Acustega.
//
// Para publicar una, se añade arriba del todo.
// ─────────────────────────────────────────────────────────────────────────────

export interface Guia {
  slug: string;
  titulo: string;
  bajada: string;
  /** Formato 2026-09-13. */
  fecha: string;
  parrafos: string[];
}

export const guias: Guia[] = [
  {
    slug: "el-equipo-no-es-lo-primero",
    titulo: "El equipo no es lo primero",
    bajada:
      "Por qué un micrófono caro en un cuarto malo suena peor que uno barato en un cuarto bien hecho.",
    fecha: "2026-09-01",
    parrafos: [
      "Casi todo el que monta un estudio empieza por la misma pregunta: qué micrófono compro. Es la pregunta equivocada, y cuesta caro descubrirlo tarde.",
      "Un micrófono no graba una voz. Graba una voz más el cuarto donde está esa voz. Son inseparables, y el cuarto llega primero de lo que uno cree: en una habitación normal, el sonido rebota en la pared y vuelve al micrófono unos pocos milisegundos después del sonido directo. El oído no los separa, pero el micrófono los suma. Esa suma no es neutra: hay frecuencias que se refuerzan y frecuencias que se cancelan, y el resultado es una respuesta llena de picos y valles que no estaban en la voz.",
      "Lo importante de eso es que no se puede deshacer. Un ecualizador quita una frecuencia entera, no distingue entre la que venía de la voz y la que aparecio por el rebote. Cuando bajas el pico, te llevas también la voz. Por eso una grabación hecha en un cuarto malo se puede mejorar un poco, pero nunca se arregla.",
      "Ahora invierte el orden. Un micrófono de doscientos dólares en un cuarto tratado captura la voz y poco más. Ese archivo se puede mezclar, se puede ecualizar, y aguanta lo que le pongas encima. Un micrófono de dos mil en el mismo cuarto sin tratar captura la voz y el cuarto, con más detalle: captura mejor el problema.",
      "Hay un número que lo hace evidente. En una habitación de tres por cuatro metros, sin nada, el tiempo de reverberación a mil hercios anda por encima de dos segundos. En una sala de mezcla se busca entre 0,25 y 0,40. Estás grabando dentro de algo que suena cinco veces más vivo de lo que debería, y ninguna cadena de equipo corrige eso.",
      "El orden que sí funciona es aburrido y es este. Primero, saber cómo suena el cuarto que tienes: sus medidas mandan más que su decoración, porque de las tres dimensiones salen las frecuencias donde se va a acumular el grave. Segundo, resolver las primeras reflexiones y el exceso de reverberación, que es donde el dinero rinde más por metro cuadrado. Tercero, monitores decentes y bien colocados, porque de nada sirve tratar un cuarto si escuchas desde el sitio equivocado. Y solo entonces, el micrófono.",
      "Esto no es un argumento contra el buen equipo. Es un argumento sobre el orden. El equipo bueno se nota cuando el cuarto deja de estorbar; antes de eso, lo único que hace es contarte con más resolución lo que está mal.",
    ],
  },
];
