import { ImageResponse } from "next/og";
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { perfil } from "@/content/perfil";

/**
 * La imagen que aparece cuando alguien pega el enlace del sitio en WhatsApp,
 * LinkedIn, X o Slack. Sin ella sale un recuadro vacío, que es la diferencia
 * entre un enlace que la gente abre y uno que no.
 *
 * Se genera una sola vez, al compilar. El retrato se lee del disco en vez de
 * pedirlo por HTTP: al compilar todavía no hay sitio al que pedírselo.
 */
export const runtime = "nodejs";
export const alt = `${perfil.nombre} — ${perfil.titulo}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const PAPEL  = "#FBFCFD";
const TINTA  = "#0E1A2B";
const SUAVE  = "#5A6673";
const ACCION = "#2E6BE6";

/**
 * Playfair Display para la frase. Si la descarga falla al compilar, la imagen
 * sale con la tipografía por defecto en vez de romper el despliegue: una
 * imagen menos bonita es mejor que un sitio que no compila.
 */
async function playfair(): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500",
      { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" } },
    ).then((r) => r.text());
    const url = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype)'\)/)?.[1];
    if (!url) return null;
    return await fetch(url).then((r) => r.arrayBuffer());
  } catch {
    return null;
  }
}

export default async function Imagen() {
  const retrato =
    "data:image/jpeg;base64," +
    readFileSync(join(process.cwd(), "public", "jose-julian-tellez-garcia.jpg")).toString("base64");

  const fuente = await playfair();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: PAPEL,
          color: TINTA,
        }}
      >
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "72px 64px",
          }}
        >
          <div
            style={{
              width: 56,
              height: 3,
              background: ACCION,
              marginBottom: 40,
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontFamily: fuente ? "Playfair" : undefined,
              fontSize: 54,
              lineHeight: 1.18,
              letterSpacing: "-0.5px",
              marginBottom: 44,
            }}
          >
            <div>Hay una habitación antes</div>
            <div>de cada canción.</div>
            <div>Casi nadie la ve.</div>
          </div>
          <div style={{ fontSize: 27, fontWeight: 600, marginBottom: 10 }}>{perfil.nombre}</div>
          <div style={{ fontSize: 22, color: SUAVE }}>{perfil.titulo}</div>
        </div>

        <div style={{ display: "flex", width: 440, height: "100%" }}>
          <img
            src={retrato}
            alt=""
            width={440}
            height={630}
            style={{ objectFit: "cover", objectPosition: "center top" }}
          />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fuente
        ? [{ name: "Playfair", data: fuente, style: "normal" as const, weight: 500 as const }]
        : undefined,
    },
  );
}
