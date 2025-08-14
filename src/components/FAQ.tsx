// Componente de sección de preguntas frecuentes (FAQ).
// Muestra preguntas y respuestas comunes en formato acordeón.

"use client";

import React, { useState, useEffect } from "react";
import { FaHandshake, FaLightbulb, FaTools, FaPuzzlePiece } from "react-icons/fa";
import Image from "next/image";

const features = [
	{
		icon: FaHandshake,
		title: "¿Por qué trabajar con Nerova?",
		description:
			"Te acompañamos en tu camino hacia la innovación aprovechando al máximo el potencial de la inteligencia artificial.",
	},
	{
		icon: FaLightbulb,
		title: "¿Cómo sé si mi empresa puede implementar IA?",
		description:
			"Si buscas optimizar procesos, reducir costos o tomar mejores decisiones, podemos ayudarte.",
	},
	{
		icon: FaTools,
		title: "¿Desarrollan soluciones a medida?",
		description:
			"Sí, adaptamos cada proyecto a tus necesidades y objetivos.",
	},
	{
		icon: FaPuzzlePiece,
		title: " ¿Sus soluciones se integran con sistemas existentes?",
		description:
			"Sí, desarrollamos integraciones compatibles con tus plataformas actuales.",
	},

];
const FAQ = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(0);
	// Cambio automático de tab cada 4 segundos si no hay interacción
    	useEffect(() => {
    		const interval = setInterval(() => {
    			setActiveIndex((prev) => ((prev ?? 0) + 1) % features.length);
    		}, 4000);
    		return () => clearInterval(interval);
    	}, []);
	return (
		<section id="faq" className="w-full  px-7 ">
			<div className="gap-8 flex flex-col items-center">
				<h2 className="text-3xl md:text-4xl font-bold text-center mt-4 mb-8">
					<span className="text-purple-600">Preguntas</span>
				</h2>
			</div>
			<div className="w-auto max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center gap-5">
				{/* Columna de imagen */}
				<div className="w-full md:w-2/5 flex justify-center items-center h-full max-h-full">
					<Image
						src="/images/FAQ.png"
						alt="AI Chatbot"
						width={300}
						height={428}
						className="w-[60%] h-full max-w-xs md:max-w-md lg:max-w-lg max-h-full object-contain drop-shadow-xl"
						priority
					/>
				</div>
				{/* Columna de servicios */}
				<div className="w-full md:w-3/5 flex flex-col justify-center gap-8 p-6 md:p-12">
					<div className="grid gap-8 md:grid-cols-1 text-2xl ">
						{features.map(({ icon: Icon, title, description }, index) => (
							<div
								key={index}
								className={`flex items-center gap-4 cursor-pointer transition-colors duration-300 rounded-lg p-6 border-2 border-transparent ${activeIndex === index
										? "bg-transparent text-white"
										: "bg-gray-900"
									}`}
								onClick={() =>
									setActiveIndex(activeIndex === index ? null : index)
								}
							>
								<Icon className={activeIndex === index ? "text-cyPurple w-10 h-10" : "text-cyan-300 w-10 h-10"} />
								<div className="flex flex-col items-start w-full">
									<div className="flex items-center gap-2 w-full">
										<h3 className={`text-xl font-bold ${activeIndex === index ? "text-cyPurple" : "text-white"}`}>{title}</h3>
									</div>
									{activeIndex === index && (
										<p className="text-white mt-2 text-base text-left w-full">{description}</p>
									)}
								</div>
							</div>
						))}
					</div>
				</div>


			</div>

		</section>
	);
};

export default FAQ;