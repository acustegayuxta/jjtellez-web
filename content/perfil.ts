// ─────────────────────────────────────────────────────────────────────────────
// Todos los datos personales del sitio viven aquí.
// Si algo hay que cambiar —un enlace, un año, una cifra— se cambia en este
// archivo y no en las páginas. Nada de esto debería estar escrito dos veces.
// ─────────────────────────────────────────────────────────────────────────────

export const perfil = {
  nombre: "José Julián Téllez García",
  /** Cómo se presenta en una línea. Sin adjetivos. */
  titulo: "Ingeniero de sonido especializado en acústica",
  ubicacion: "Medellín, Colombia",
  correo: "josejuliantellez@gmail.com",

  /** La frase de portada. No es un eslogan: es la tesis del sitio. */
  frase: "Hay una habitación antes de cada canción. Casi nadie la ve.",

  foto: {
    src: "/jose-julian-tellez-garcia.jpg",
    alt: "Retrato de José Julián Téllez García",
    /**
     * En false, la cabecera muestra un hueco sobrio en vez de una imagen rota:
     * una foto que no carga se ve peor que no tener foto.
     * El archivo viene recortado a 4:5, que es la proporción del marco.
     */
    lista: true,
  },

  // ── Perfiles ───────────────────────────────────────────────────────────────
  // Solo los verificables y activos. El canal de YouTube va aparte porque los
  // videos se enlazan uno por uno, no el canal.
  perfiles: [
    { nombre: "LinkedIn",  url: "https://www.linkedin.com/in/josejuliantellezgarcia/" },
    { nombre: "Instagram", url: "https://www.instagram.com/josejuliantega" },
    { nombre: "Substack",  url: "https://josejuliantellezgarcia.substack.com" },
    { nombre: "ORCID",     url: "https://orcid.org/0000-0003-1527-7523" },
  ],

  /** El boletín no se monta a mano: vive en Substack. */
  substack: "https://josejuliantellezgarcia.substack.com",

  // ── Credenciales ───────────────────────────────────────────────────────────
  // Se mencionan una sola vez, planas y sin adjetivos. Van en /quien-soy, no
  // en la portada.
  credenciales: {
    matricula: "COPNIA 05341-266265 ANT",
    orcid: "0000-0003-1527-7523",
    publicacion: {
      titulo:
        "Evaluación del método de cálculo RLS 90 para la predicción de ruido automotor en condiciones colombianas",
      revista: "Revista Facultad de Ingeniería, Universidad de Antioquia",
      anio: 2015,
      doi: "https://doi.org/10.17533/udea.redin.n75a17",
    },
  },

  // ── La ruta ────────────────────────────────────────────────────────────────
  ruta: [
    { anio: "2006", texto: "Llega a Medellín desde Valencia, Venezuela, y empieza trabajando en control de ruido industrial." },
    { anio: "2014", texto: "Su primer estudio de grabación en Colombia, para The Rude Boyz." },
    { anio: "2016", texto: "Funda Acustega." },
    { anio: "Hoy",  texto: "Más de cien estudios y espacios profesionales en nueve países. Diseño y acústica; la obra la ejecutan otros." },
  ],

  // ── Los tres frentes ───────────────────────────────────────────────────────
  trabajo: [
    {
      nombre: "Acustega",
      url: "https://acustega.com",
      que: "Ingeniería acústica: diseño de estudios, tratamiento y aislamiento. Y una plataforma que diagnostica un espacio con inteligencia artificial, con calculadora y tabla de materiales abiertas.",
    },
    {
      nombre: "Yuxta",
      url: "https://yuxta.lat",
      que: "Distribución musical y servicios financieros para artistas latinoamericanos.",
    },
    {
      nombre: "Headliner",
      url: "",
      que: "Agencia de marketing entre Miami y Medellín. Dirección de operaciones y parte técnica.",
    },
  ],

  /**
   * Artistas que se pueden nombrar en público. Solo estos, y solo así: una
   * enumeración plana, sin adjetivos y sin contar de quién era cada sala.
   * NUNCA residencias privadas.
   */
  artistas: ["Maluma", "Karol G", "Sebastián Yatra", "Pitbull", "Ryan Castro", "Apache"],

  /** Citas de prensa. Se llenan cuando salga la primera nota. */
  citas: [] as { medio: string; texto: string; url: string; fecha: string }[],
};

export type Perfil = typeof perfil;
