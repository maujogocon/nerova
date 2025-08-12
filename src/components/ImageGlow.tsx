"use client";

import React from 'react';

const ImageGlow = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={`relative group ${className}`}>
      {/* Efecto de resplandor de fondo */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyPurple/20 via-cyan-400/20 to-cyPurple/20 rounded-lg blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>

      {/* Anillo de luz exterior */}
      <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent rounded-xl blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

      {/* Resplandor interno */}
      <div className="absolute inset-1 bg-gradient-to-br from-purple-400/10 via-transparent to-cyan-400/10 rounded-lg"></div>

      {/* Contenido de la imagen */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Partículas flotantes */}
      <div className="absolute inset-0 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-ping"
            style={{
              top: `${20 + i * 20}%`,
              left: `${10 + i * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '3s',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageGlow;
