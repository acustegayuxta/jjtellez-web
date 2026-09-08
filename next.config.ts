import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fija la raíz al propio proyecto: si no, Turbopack infiere /Users/josejulian y
  // mete "2-Proyectos Código" (con tilde) en los identificadores internos, lo que
  // hace panic al truncarlos por bytes.
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
