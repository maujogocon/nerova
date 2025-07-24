"use client";
// src/components/Header.tsx
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";


const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-gray-900 bg-opacity-80 backdrop-blur-md text-white px-7 py-4 shadow-md transition-all duration-300">
      <div className="max-w-screen-xl mx-auto w-full flex flex-col md:flex-row justify-between gap-4 md:gap-8">
        {/* Logo y navegación */}
        <div className="flex flex-row items-center justify-between w-full">
          <div className="text-2xl font-bold tracking-wide ">

            <Link href="/" className="flex items-center gap-2">
                {/* Logo */}
                    <div className="relative w-10 h-10 flex items-center">
                      <Image src="/images/logo.png" alt="Logo" fill style={{ objectFit: "contain" }} />

                    </div>
                    <div className="text-center text-lg md:text-2xl font-bold">
                        <span className="text-cyPurple">NERO</span><span className="text-cyan-300">VA</span>
                    </div>
            </Link>
          </div>
          {/* Opciones de menú y hamburguesa */}
          <div className="flex flex-row items-center">
            <nav className={`hidden md:flex gap-x-8 text-sm font-medium items-center justify-end`}>
              <Link href="/">Home</Link>
              <Link href="#services">Services</Link>
              <Link href="#about">About Us</Link>
              <Link href="#features">Features</Link>
              <Link href="#faq">FAQ</Link>
              <Link href="#team">Team</Link>
              <Link href="#contact">Contact</Link>
            </nav>
            {/* Hamburguesa en móvil */}
            <button
              className="md:hidden ml-4 text-white focus:outline-none justify-center items-center p-2  hover:bg-gray-700 transition-colors duration-300"
              onClick={() => setOpen(!open)}
              aria-label="Abrir o cerrar menú"
            >
              {open ? (
                // Icono de "X"
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              ) : (
                // Icono de hamburguesa
                <svg width="32" height="32" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              )}
            </button>
          </div>
        </div>
        {/* Opciones de menú en móvil */}
        {open && (
          <nav className="flex flex-col gap-y-2 text-md font-medium w-full items-center justify-center mt-2 md:hidden">
            <Link href="/">Home</Link>
            <Link href="#services">Services</Link>
            <Link href="#about">About Us</Link>

            <Link href="#features">Features</Link>
            <Link href="#faq">FAQ</Link>
            <Link href="#team">Team</Link>
            <Link href="#contact">Contact</Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;

// Componente de encabezado y navegación principal.
// Incluye logo, menú de navegación y menú hamburguesa para móviles.
// El menú se adapta a pantallas móviles y de escritorio.
// Permite la navegación a diferentes secciones de la página y a otras páginas del sitio.
