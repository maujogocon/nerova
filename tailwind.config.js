/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/layouts/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        darkBlue: '#0B0F2F',        // Fondo principal
        cyPurple: '#A36CFF',        // Botones, títulos destacados
        pureWhite: '#FFFFFF',       // Textos principales
        lightGray: '#C2C2C2',       // Textos secundarios
        navyBlack: '#121635',       // Fondo alterno, tarjetas
        electricBlue: '#3C92FF',    // Hover, iluminación
        neonPink: '#FF4FD8',        // Decorativos brillantes
        neonCyan: '#43F7FF',        // Elementos 3D animados
        neonYellow: '#FFD944',      // Iconos decorativos
      },
      backgroundImage: {
              'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
            },
    },
  },
  plugins: [],
}
