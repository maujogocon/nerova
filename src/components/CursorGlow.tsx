"use client";

import React, { useEffect, useState } from 'react';

const CursorGlow = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Agregar event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <>
      {/* Resplandor principal del cursor */}
      <div
        className={`fixed pointer-events-none z-50 transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20,
          width: '40px',
          height: '40px',
          background: 'radial-gradient(circle, rgba(179, 102, 207, 0.6) 0%, rgba(81, 26, 199, 0.4) 30%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(8px)',
        }}
      />

      {/* Anillo exterior brillante */}
      <div
        className={`fixed pointer-events-none z-50 transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: mousePosition.x - 30,
          top: mousePosition.y - 30,
          width: '60px',
          height: '60px',
          background: 'radial-gradient(circle, transparent 40%, rgba(0, 255, 255, 0.3) 50%, rgba(0, 255, 255, 0.1) 60%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(4px)',
        }}
      />

      {/* Punto central del cursor */}
      <div
        className={`fixed pointer-events-none z-50 transition-opacity duration-200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: mousePosition.x - 2,
          top: mousePosition.y - 2,
          width: '4px',
          height: '4px',
          background: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '50%',
          boxShadow: '0 0 10px rgba(179, 102, 207, 0.8)',
        }}
      />

      {/* Partículas flotantes alrededor del cursor */}
      <div
        className={`fixed pointer-events-none z-40 transition-opacity duration-500 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          left: mousePosition.x - 50,
          top: mousePosition.y - 50,
          width: '100px',
          height: '100px',
        }}
      >
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${30 + Math.cos((i * Math.PI) / 3) * 25}px`,
              top: `${30 + Math.sin((i * Math.PI) / 3) * 25}px`,
              width: '3px',
              height: '3px',
              background: i % 2 === 0 ? 'rgba(179, 102, 207, 0.7)' : 'rgba(0, 255, 255, 0.7)',
              borderRadius: '50%',
              animationDelay: `${i * 0.2}s`,
              animationDuration: '2s',
            }}
          />
        ))}
      </div>
    </>
  );
};

export default CursorGlow;
