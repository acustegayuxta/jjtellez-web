/**
 * Qué versión del sitio está viva en este momento.
 *
 * Existe por una razón sola: el atajo de publicar necesita saber si Vercel
 * terminó de construir de verdad, y no hay forma de averiguarlo desde fuera
 * sin preguntárselo al propio sitio. Vercel le pasa a cada despliegue el
 * identificador del commit del que salió; esto lo devuelve tal cual.
 *
 * force-dynamic es indispensable: si esto se cacheara, respondería la versión
 * vieja y el atajo daría por bueno un despliegue que nunca ocurrió.
 */
export const dynamic = "force-dynamic";

export function GET() {
  return Response.json(
    {
      commit: process.env.VERCEL_GIT_COMMIT_SHA ?? "local",
      entorno: process.env.VERCEL_ENV ?? "desarrollo",
    },
    { headers: { "cache-control": "no-store" } },
  );
}
