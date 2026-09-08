import type { Video } from "@/content/videos";

// El duotono se aplica por CSS sobre la miniatura que YouTube sirve sola, para
// que las cuatro se vean de la misma familia sin retocar ninguna imagen.
export default function VideoTarjeta({ video }: { video: Video }) {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${video.id}`}
      target="_blank"
      rel="noopener"
      className="group block bg-noche rounded-sm overflow-hidden"
    >
      <div className="relative aspect-video bg-noche">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
          alt=""
          loading="lazy"
          className="w-full h-full object-cover opacity-80 mix-blend-luminosity grayscale group-hover:opacity-100 group-hover:grayscale-0 group-hover:mix-blend-normal transition-all duration-300"
        />
      </div>
      <div className="p-5 flex flex-col gap-2">
        <h3 className="font-ui text-[15px] font-semibold text-white leading-snug text-balance">
          {video.titulo}
        </h3>
        <p className="text-[13.5px] leading-relaxed text-white/60">{video.descripcion}</p>
        {video.vistas && (
          <p className="font-ui text-[11.5px] text-white/40 mt-1">{video.vistas} reproducciones</p>
        )}
      </div>
    </a>
  );
}
