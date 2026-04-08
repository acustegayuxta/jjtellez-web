"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail("");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-6 py-16">
      <div className="flex flex-col items-center text-center max-w-xl w-full gap-7">

        {/* Top rule */}
        <div className="w-12 h-px bg-[#C9A84C]" />

        {/* Genre tag */}
        <p
          className="font-dm text-[0.65rem] tracking-[0.35em] uppercase text-[#C9A84C]"
        >
          Medellín &nbsp;·&nbsp; Música Latina
        </p>

        {/* Book title */}
        <h1
          className="font-playfair text-6xl sm:text-7xl font-bold text-[#F5F0E8] leading-[1.1] tracking-tight"
        >
          Detrás<br />del Vidrio
        </h1>

        {/* Author */}
        <p
          className="font-dm text-[0.7rem] tracking-[0.3em] uppercase text-[#C9A84C]"
        >
          José Julián Téllez García
        </p>

        {/* Mid rule */}
        <div className="w-8 h-px bg-[#C9A84C] opacity-40" />

        {/* Book subtitle */}
        <p
          className="font-playfair italic text-lg sm:text-xl text-[#F5F0E8] opacity-70 leading-relaxed max-w-md"
        >
          Veinte años construyendo los estudios donde Medellín se convirtió en
          la capital de la música latina.
        </p>

        {/* Email form */}
        <div className="w-full max-w-md mt-2">
          <p className="font-dm text-xs text-[#F5F0E8]/50 tracking-wider mb-3">
            Este libro aún no ha salido. Deja tu correo y serás de los primeros en leerlo.
          </p>
          {!submitted ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-2"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                required
                className="
                  flex-1 bg-transparent border border-[#C9A84C]/30
                  text-[#F5F0E8] placeholder-[#F5F0E8]/25
                  px-4 py-3 text-sm font-dm
                  focus:outline-none focus:border-[#C9A84C]
                  transition-colors duration-300
                "
              />
              <button
                type="submit"
                className="
                  bg-[#C9A84C] text-black font-dm text-[0.65rem]
                  font-semibold tracking-[0.2em] uppercase
                  px-6 py-3 whitespace-nowrap
                  hover:bg-[#F5F0E8] transition-colors duration-300
                "
              >
                Quiero leerlo primero
              </button>
            </form>
          ) : (
            <p className="font-dm text-xs tracking-[0.2em] text-[#C9A84C] uppercase">
              Gracias — te avisaremos cuando llegue el momento.
            </p>
          )}
        </div>

        {/* Release info */}
        <p
          className="font-dm text-[0.6rem] tracking-[0.45em] uppercase text-[#F5F0E8]/30 leading-6"
        >
          Septiembre 2026&nbsp;&nbsp;·&nbsp;&nbsp;Medellín, Colombia
        </p>

        {/* Bottom rule */}
        <div className="w-12 h-px bg-[#C9A84C] opacity-20" />

        {/* Social icons */}
        <div className="flex items-center gap-6">
          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-[#F5F0E8]/30 hover:text-[#C9A84C] transition-colors duration-300"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
            </svg>
          </a>

          {/* TikTok */}
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="text-[#F5F0E8]/30 hover:text-[#C9A84C] transition-colors duration-300"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z" />
            </svg>
          </a>

          {/* YouTube */}
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
            className="text-[#F5F0E8]/30 hover:text-[#C9A84C] transition-colors duration-300"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.55A3.02 3.02 0 0 0 .5 6.19C0 8.04 0 12 0 12s0 3.96.5 5.81a3.02 3.02 0 0 0 2.12 2.14C4.46 20.5 12 20.5 12 20.5s7.54 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14C24 15.96 24 12 24 12s0-3.96-.5-5.81zM9.75 15.5v-7l6.5 3.5-6.5 3.5z" />
            </svg>
          </a>
        </div>

      </div>
    </main>
  );
}
