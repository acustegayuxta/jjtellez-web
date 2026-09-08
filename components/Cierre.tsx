import Link from "next/link";

// ─────────────────────────────────────────────────────────────────────────────
// El cierre de cada texto. Cambia según qué se acaba de leer, porque quien
// llega a una guía y quien llega a un escrito no son la misma persona.
//
//   guia    → alguien que buscó en Google y no te conocía. Va a Acustega.
//   escrito → alguien que te sigue. Va al libro.
// ─────────────────────────────────────────────────────────────────────────────

export default function Cierre({ tipo }: { tipo: "guia" | "escrito" }) {
  if (tipo === "guia") {
    return (
      <aside className="border-t border-linea mt-14 pt-8 flex flex-col gap-4">
        <p className="text-[16px] leading-relaxed max-w-[60ch]">
          Si quieres saber cómo está tu cuarto antes de gastar en material, en Acustega
          hay un diagnóstico gratuito y una calculadora que estima la reverberación y
          los modos a partir de las medidas.
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2 font-ui text-[14px] font-semibold">
          <a href="https://acustega.com/asesor" target="_blank" rel="noopener"
             className="text-accion hover:underline underline-offset-4">
            Diagnóstico gratis →
          </a>
          <a href="https://acustega.com/calculadora" target="_blank" rel="noopener"
             className="text-accion hover:underline underline-offset-4">
            Calculadora acústica →
          </a>
        </div>
      </aside>
    );
  }

  return (
    <aside className="border-t border-linea mt-14 pt-8 flex flex-col gap-4">
      <p className="text-[16px] leading-relaxed max-w-[60ch]">
        Esto es parte de lo que estoy escribiendo en un libro sobre Medellín y la
        música latina, visto desde adentro de los estudios.
      </p>
      <Link href="/el-libro" className="font-ui text-[14px] font-semibold text-accion hover:underline underline-offset-4">
        Sobre el libro →
      </Link>
    </aside>
  );
}
