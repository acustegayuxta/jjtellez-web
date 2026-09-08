import type { Metadata } from "next";
import { videos } from "@/content/videos";
import VideoTarjeta from "@/components/VideoTarjeta";

export const metadata: Metadata = {
  title: "Estudios por dentro",
  description: "Recorridos por estudios de grabación reales y las decisiones acústicas que hay detrás.",
};

export default function Videos() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16 flex flex-col gap-12">
      <header className="flex flex-col gap-3 max-w-3xl">
        <h1 className="font-display text-[34px] leading-tight text-balance">Estudios por dentro</h1>
        <p className="text-[17px] text-suave max-w-[60ch]">
          Salas reales, con lo que se decidió en cada una y por qué. Grabados con permiso de
          quienes trabajan en ellas.
        </p>
      </header>
      <div className="grid sm:grid-cols-2 gap-5">
        {videos.map((v) => <VideoTarjeta key={v.id} video={v} />)}
      </div>
    </div>
  );
}
