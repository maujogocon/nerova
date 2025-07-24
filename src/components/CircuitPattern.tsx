// components/CircuitPattern.tsx
const CircuitPattern = () => {
  return (
    <svg
      className="w-full h-full text-cyPurple/20"
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Líneas horizontales y verticales */}
      <path d="M 50 100 H 200 V 200 H 300 V 50 H 450" stroke="currentColor" strokeWidth="2" />
      <path d="M 100 300 V 400 H 250 V 300 H 400" stroke="currentColor" strokeWidth="2" />

      {/* Nodos circulares */}
      <circle cx="50" cy="100" r="4" fill="currentColor" />
      <circle cx="200" cy="100" r="4" fill="currentColor" />
      <circle cx="300" cy="200" r="4" fill="currentColor" />
      <circle cx="450" cy="50" r="4" fill="currentColor" />
      <circle cx="250" cy="300" r="4" fill="currentColor" />
      <circle cx="400" cy="300" r="4" fill="currentColor" />
    </svg>
  );
};

export default CircuitPattern;
