// ─────────────────────────────────────────────────────────────────────────────
// Tu voz: emprendimiento, decisiones, historias del oficio.
// Los lee quien ya te sigue. Cierran con el libro.
//
// Para publicar uno, se añade arriba del todo. El más reciente va primero.
// ─────────────────────────────────────────────────────────────────────────────

export interface Escrito {
  slug: string;
  titulo: string;
  bajada: string;
  /** Formato 2026-09-13. */
  fecha: string;
  parrafos: string[];
}

export const escritos: Escrito[] = [];
