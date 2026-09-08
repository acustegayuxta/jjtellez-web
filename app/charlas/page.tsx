import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Charlas y curso",
  description: "Ponencias sobre acústica y el curso de acústica práctica.",
};

export default function Charlas() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-16 flex flex-col gap-12">
      <header className="flex flex-col gap-3">
        <h1 className="font-display text-[34px] leading-tight text-balance">Charlas y curso</h1>
        <p className="text-[17px] text-suave max-w-[60ch]">
          Enseñar me obliga a entender mejor lo que hago. Si te interesa que hable en algún
          sitio, escríbeme.
        </p>
      </header>

      <section className="flex flex-col gap-4">
        <h2 className="font-ui text-[13px] font-bold tracking-[0.14em] uppercase text-suave">El curso</h2>
        <h3 className="font-display text-[24px] leading-snug text-balance">
          La acústica práctica que nadie te enseñó
        </h3>
        <p className="text-[16.5px] leading-relaxed max-w-[62ch]">
          Lo que hace falta saber para no gastar mal: cómo se comporta un cuarto, qué se puede
          resolver y qué no, y en qué orden conviene hacerlo.
        </p>
      </section>

      <section className="flex flex-col gap-4 border-t border-linea pt-8">
        <h2 className="font-ui text-[13px] font-bold tracking-[0.14em] uppercase text-suave">Ponencias</h2>
        <p className="text-[16.5px] leading-relaxed max-w-[62ch] text-suave">
          He dado charlas en ferias de la AES, invitado por el comité. Aquí irán las próximas
          con su fecha y su sitio.
        </p>
      </section>
    </div>
  );
}
