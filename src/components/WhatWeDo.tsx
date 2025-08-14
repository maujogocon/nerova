// components/WhatWeDo.tsx
"use client";
import { useState } from "react";
import { FaLaptopCode, FaRobot, FaComments } from "react-icons/fa";
import Image from "next/image";

export default function WhatWeDo() {
  const services = [
    {
      icon: <FaLaptopCode className="text-4xl text-purple-400" />,
      title: "Desarrollo Web y Mobile",
      description:
        "Creamos sitios, plataformas y apps totalmente personalizadas, diseñadas para crecer contigo y adaptarse a las necesidades específicas de tu sector.",
      image: "/images/development.png",
    },
    {
      icon: <FaRobot className="text-4xl text-purple-400" />,
      title: "Aplicaciones basadas en IA",
      description:
        "Desde motores de recomendación hasta asistentes virtuales, nuestras soluciones inteligentes aprenden, se adaptan y generan impacto en tus procesos.",
      image: "/images/IA.png",
    },
    {
      icon: <FaComments className="text-4xl text-purple-400" />,
      title: "Chatbots con Inteligencia Artificial",
      description:
        "Diseñamos asistentes conversacionales que entienden, responden y ejecutan tareas. Integrables con tus sistemas, operativos 24/7 y listos para escalar.",
      image: "/images/chat-bots.png",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const handleCardClick = (index: number) => {
    setFade(true);
    setTimeout(() => {
      setActiveIndex(index);
      setFade(false);
    }, 300); // Tiempo para el fade-out antes del cambio
  };

  return (
    <section id="whatwedo" className="w-full  px-7 py-8 md:py-18">
      <div className=" max-w-screen-xl mx-auto px-2  md:px-12 grid md:grid-cols-2 gap-2 items-center ">

        {/* Columna izquierda: Tarjetas */}
        <div className="space-y-7 items-center flex flex-col">
          <h2 className="text-4xl font-bold mb-6">
            ¿Qué{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              hacemos?
            </span>
          </h2>
          {services.map((service, index) => (
            <div
              key={index}
              onClick={() => handleCardClick(index)}
              className={`p-8  rounded-xl cursor-pointer transition duration-300 shadow-lg backdrop-blur-md bg-white/5 border border-white/10 hover:scale-105
                ${activeIndex === index ? "bg-gradient-to-r from-purple-500/20 to-blue-500/20 scale-105 border-white/30" : ""} `}
            >
              <div className="flex items-center gap-4">
                {service.icon}
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-gray-300 mt-2">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Columna derecha: Imagen dinámica con fade */}
        <div className="flex justify-center items-center relative py-2">
          <div className="relative w-80 h-80 md:h-[600px] rounded-xl overflow-hidden shadow-2xl">
            <Image
              src={services[activeIndex].image}
              alt={services[activeIndex].title}
              fill
              className={`object-contain rounded-xl transition-opacity duration-500 ${fade ? "opacity-0" : "opacity-100"}`}
            />
            {/* Efecto de borde brillante */}
            <div className="absolute inset-0 rounded-xl border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.2)] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
