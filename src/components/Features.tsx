// Componente de sección de características/servicios.
// Lista los servicios principales con iconos y descripción.
// Permite expandir/cerrar la descripción de cada servicio.

"use client";

import React, { useState } from "react";
import { FaChartBar, FaCogs, FaCloud, FaCode, FaComments } from "react-icons/fa";
import Image from "next/image";

const features = [
	{
		icon: FaChartBar,
		title: "Analisis de Datos",
		description:
			"Exploramos constantemente nuevas tecnologías para mantenerte a la vanguardia.",
	},
	{
		icon: FaCogs,
		title: "Automatización Inteligente de Procesos",
		description:
			"Soluciones basadas en inteligencia artificial para optimizar tus procesos.",
	},
	{
		icon: FaCloud,
		title: "Cloud",
		description:
			"Protegemos tus datos con las últimas medidas en ciberseguridad.",
	},
    {
		icon: FaCode,
		title: "Desarrollo de Software",
		description:
			"Protegemos tus datos con las últimas medidas en ciberseguridad.",
	},
    {
		icon: FaComments,
		title: "Integración de Api y Chatbots",
		description:
			"Protegemos tus datos con las últimas medidas en ciberseguridad.",
	},
];
const Features = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	return (
		<section id="features" className="w-full  px-7 ">
		    <div className="gap-2 flex flex-col items-center">
                                 <h2 className="text-3xl md:text-4xl font-bold text-center mt-8 mb-4">
                                    <span className="text-purple-600">Servicios Principales de Nerova</span>
                                 </h2>
                                 <p className="text-lg leading-relaxed max-w-xl">
                                  <span className="font-semibold">
                                    Nuestra misión es transformar ideas en soluciones que generen valor y aceleren
                                    el crecimiento de tu empresa.
                                  </span>
                                 </p>
            </div>
			<div className="w-auto max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center gap-5">

				{/* Columna de servicios */}
				<div className="w-full md:w-3/5 flex flex-col justify-center gap-8 p-6 md:p-12">
					<div className="grid gap-8 md:grid-cols-1 text-2xl ">
						{features.map(({ icon: Icon, title, description }, index) => (
							<div
								key={index}
								className={`flex flex-col md:flex-row items-center text-center gap-4 cursor-pointer transition-colors duration-300 rounded-lg p-6 border-2 border-transparent ${
									activeIndex === index
										? "bg-transparent text-white"
										: "bg-gray-900"
								}`}
								onClick={() =>
									setActiveIndex(activeIndex === index ? null : index)
								}
							>
								<Icon className={activeIndex === index ? "text-cyan-300 w-10 h-10" : "text-cyPurple w-10 h-10"}/>
								{activeIndex === index ? (
                                      <div className="flex flex-col items-center">
                                              <h3 className="text-xl font-bold text-cyPurple">{title}</h3>
                                              <p className="text-white mt-2">{description}</p>
                                      </div>
                                    ) : (
                                      <h3 className="text-xl font-bold text-white">{title}</h3>
								)}
							</div>
						))}
					</div>
				</div>
				{/* Columna de imagen */}
				<div className="w-full md:w-2/5 flex justify-center items-center h-full max-h-full">
					<Image
						src="/images/bot.png"
						alt="AI Chatbot"
						width={300}
						height={428}
						className="w-[80%] h-full max-w-xs md:max-w-md lg:max-w-lg max-h-full object-contain drop-shadow-xl"
						priority
					/>
				</div>
			</div>
		</section>
	);
};

export default Features;
