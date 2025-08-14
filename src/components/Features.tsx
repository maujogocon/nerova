// Componente de sección de características/servicios.
// Lista los servicios principales con iconos y descripción.
// Permite expandir/cerrar la descripción de cada servicio.

"use client";

import React, { useState, useEffect } from "react";
import { FaChartBar, FaCogs, FaCloud, FaCode, FaComments } from "react-icons/fa";
import Image from "next/image";

const features = [
	{
		icon: FaChartBar,
		title: "Analisis de Datos",
		description:
			"Ofrecemos análisis de datos avanzado para descubrir patrones, tendencias y oportunidades que impulsen la toma de decisiones estratégicas.",
	},
	{
		icon: FaCogs,
		title: "Automatización Inteligente de Procesos",
		description:
			"Automatización inteligente de procesos mediante IA, optimizando tareas repetitivas y mejorando la eficiencia operativa de tu empresa.",
	},
	{
		icon: FaCloud,
		title: "Cloud",
		description:
			"Aprovechamos la potencia de la nube para crecer sin límites y reducir costos de infraestructura.",
	},
	{
		icon: FaCode,
		title: "Desarrollo de Software",
		description:
			"Desarrollamos soluciones web a medida, adaptadas a las necesidades de tu negocio.",
	},
	{
		icon: FaComments,
		title: "Integración de Api y Chatbots",
		description:
			"Conectamos tus sistemas mediante integración de APIs y desarrollamos chatbots inteligentes para mejorar la interacción con tus clientes.",
	},
];
const Features = () => {
	const [activeIndex, setActiveIndex] = useState<number>(0);

	// Cambio automático de tab cada 4 segundos si no hay interacción
	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % features.length);
		}, 4000);
		return () => clearInterval(interval);
	}, []);
	return (
		<section id="features" className="w-full  px-7 ">
			<div className="w-auto max-w-screen-xl mx-auto gap-2 flex flex-col items-center">
				<h2 className="text-3xl md:text-4xl font-bold text-center mt-8 mb-4">
					<span className="text-purple-600">Servicios Principales de Nerova</span>
				</h2>
				<p className="text-lg leading-relaxed ">
					<span className="font-semibold">
						Nuestra misión es transformar ideas en soluciones que generen valor y aceleren el crecimiento de tu empresa.
					</span>
				</p>
			</div>
			<div className="w-auto max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-5">
				{/* Columna de servicios */}
				<div className="w-full md:w-3/5 flex flex-col justify-center gap-8 p-6 md:p-12">
					<div className="grid gap-8 md:grid-cols-1 text-2xl ">
						{features.map(({ icon: Icon, title, description }, index) => (
							<div
								key={index}
								className={`flex items-center gap-4 cursor-pointer transition-colors duration-300 rounded-lg p-6 border-2 border-transparent ${
									activeIndex === index
										? "bg-transparent text-white"
										: "bg-gray-900"
								}`}
								onClick={() => setActiveIndex(activeIndex === index ? null : index)}
							>
								<Icon className={activeIndex === index ? "text-cyPurple w-10 h-10" : "text-cyan-300 w-10 h-10"}/>
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
