// Componente de fondo animado o decorativo.
// Añade efectos visuales al fondo de la página o sección.
// components/BackgroundFX.tsx

export default function BackgroundFX() {
  return (
    <>
      {/* Degradado radial sutil */}
      <div className="absolute inset-0 bg-gradient-radial from-[#181E40] via-transparent to-transparent opacity-70 pointer-events-none z-0" />

      {/* Halo violeta difuso inferior izquierdo */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8754F9] rounded-full blur-[120px] opacity-20 pointer-events-none z-0" />

      {/* Halo azul superior derecho */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#4C3F8F] rounded-full blur-[100px] opacity-20 pointer-events-none z-0" />
    </>
  );
}
