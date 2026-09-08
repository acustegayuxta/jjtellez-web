"use client";

import { useState } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// El boletín.
//
// Escribe en Resend: guarda el contacto en la audiencia y manda la
// confirmación. Ya estaba conectado, así que no se cambia el destino.
//
// Regla de la promesa: lo que dice este formulario es lo que va a pasar. Si
// aquí dijera "recibe cada semana" y no se publica cada semana, el primer
// correo ya llegaría rompiendo algo.
// ─────────────────────────────────────────────────────────────────────────────

interface Props {
  titulo?: string;
  promesa?: string;
  boton?: string;
}

export default function Boletin({
  titulo = "Escribo cuando tengo algo que decir",
  promesa = "Un escrito de vez en cuando y una guía al mes. Ni publicidad ni relleno; te puedes ir en un clic.",
  boton = "Apuntarme",
}: Props) {
  const [email, setEmail] = useState("");
  const [estado, setEstado] = useState<"quieto" | "enviando" | "listo" | "error">("quieto");
  const [error, setError] = useState("");

  const enviar = async (e: React.FormEvent) => {
    e.preventDefault();
    if (estado === "enviando") return;
    setEstado("enviando");
    setError("");
    try {
      const res = await fetch("/api/suscribir", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const datos = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(datos.error ?? "No se pudo completar");
      setEstado("listo");
      setEmail("");
    } catch (err) {
      setError(err instanceof Error ? err.message : "No se pudo completar");
      setEstado("error");
    }
  };

  if (estado === "listo") {
    return (
      <div className="border border-linea bg-blanco rounded-sm p-7">
        <p className="font-display text-[20px] leading-snug mb-2">Listo, quedaste apuntado.</p>
        <p className="text-[15px] text-suave">
          Te acaba de llegar un correo de confirmación. Si no aparece, mira en promociones o spam.
        </p>
      </div>
    );
  }

  return (
    <div className="border border-linea bg-blanco rounded-sm p-7">
      <h2 className="font-display text-[22px] leading-snug mb-2">{titulo}</h2>
      <p className="text-[15px] text-suave mb-5 max-w-[52ch]">{promesa}</p>
      <form onSubmit={enviar} className="flex flex-col sm:flex-row gap-2">
        <label htmlFor="correo-boletin" className="sr-only">Tu correo</label>
        <input
          id="correo-boletin"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@correo.com"
          className="flex-1 border border-linea rounded-sm px-4 py-3 font-sans text-[15px] outline-none focus:border-accion"
        />
        <button
          type="submit"
          disabled={estado === "enviando"}
          className="font-ui text-[14px] font-semibold bg-accion text-white rounded-sm px-6 py-3 disabled:opacity-60 hover:opacity-90 transition-opacity"
        >
          {estado === "enviando" ? "Un momento…" : boton}
        </button>
      </form>
      {error && (
        <p role="alert" className="text-[13px] text-suave mt-3">
          {error}. Prueba otra vez o escríbeme directo.
        </p>
      )}
    </div>
  );
}
