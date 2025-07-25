import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Habilita la exportación estática
  output: 'export',
  
  // Desactiva la optimización de imágenes para static export
  images: {
    unoptimized: true,
  },
  
  // Opcional: Configurar el trailingSlash para compatibilidad
  trailingSlash: true,
  
  // Opcional: Configurar basePath si despliegas en un subdirectorio
  // basePath: '/mi-app',
};

export default nextConfig;