// components/HeroSection.tsx

import Image from 'next/image';
import React from 'react';

const HeroSection = () => {
  return (
    <section className="w-full     md:px-16 flex items-center">

      <div className="max-w-screen-xl w-full mx-auto flex flex-col md:flex-row items-center justify-between  gap-8 min-h-[300px]">
        {/* Contenedor de texto */}
        <div className="w-full md:w-3/5 text-white flex flex-col justify-center mb-2 h-full space-y-4 px-6 md:px-12">
          <div className="text-center md:text-left">
            <h1 className="text-6xl md:text-7xl font-bold mb-2">
              <span className="text-cyPurple">NERO</span><span className="text-cyan-300">VA</span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Impulsando la Inteligencia Artificial en tu organización </h2>
          </div>

          <div className="text-center md:text-left">
            <p className="text-lg md:text-xl">
               Impulsamos a tu organización con soluciones basadas en inteligencia artificial
               que optimizan cada interacción. Automatizamos respuestas, aceleramos procesos
               y ofrecemos una experiencia más ágil, personalizada y eficiente para cada usuario.
            </p>
          </div>

         {/* <div className="text-center md:text-left">
            <ul className="list-none pl-5 space-y-1">
              <li>Diagnósticos estratégicos</li>
              <li>Modelo de negocio visual</li>
              <li>OKRs y KPIs en tiempo real</li>
              <li>Mapas de ruta inteligentes</li>
            </ul>
          </div>*/}

          <div className="flex justify-center md:justify-end">
            <a href="#contact">
            <button className="bg-cyPurple text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-cyPurple/80 transition-all">
              Contactanos
            </button>
            </a>
          </div>
        </div>


        {/* Contenedor de imagen */}
        <div className="w-full  md:w-2/5 flex justify-center md:justify-start items-end relative min-h-[200px] sm:min-h-[300px] md:min-h-[400px] order-2 md:order-none">
          <div className="relative w-full h-full flex justify-center md:justify-start items-end">
            <Image
              src="/images/nero.png"
              alt="Nero IA"
              width={400}
              height={400}
              className="object-contain h-full min-h-[200px] sm:min-h-[300px] md:min-h-[400px]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
