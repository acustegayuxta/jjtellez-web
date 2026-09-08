// Libros que recomienda. Cada uno con por qué, no con una reseña.
export interface Lectura {
  titulo: string;
  autor: string;
  porque: string;
}

export const lecturas: Lectura[] = [];
