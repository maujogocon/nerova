// Componente para mostrar una colección de características con iconos.
// Utiliza IconBoxSection para renderizar la lista de features.

import { FaStore, FaUserCog , FaBriefcaseMedical , FaChalkboardTeacher, FaDesktop, FaSeedling } from "react-icons/fa";
import IconBoxSection from "@/components/IconBoxSection";

import React from "react";

const list = [
	{
		icon: <FaStore size={36} />,
		title: "E-commerce",
		description: "Atención al cliente automatizada, recomendadores inteligentes, integración con CRM.",
	},
	{
		icon: <FaUserCog  size={36} />,
		title: "Gestión de talentos",
		description: "Visualiza el desempeño por área y antigüedad con dashboards personalizados.",
	},
	{
		icon: <FaChalkboardTeacher size={36} />,
		title: "Marketing",
		description: "Automatización de leads, chatbots para campañas, análisis de comportamiento de usuarios.",
	},
    {
		icon: <FaBriefcaseMedical  size={36} />,
		title: "Salud",
		description: "Agendamiento de citas, orientación médica automatizada, procesamiento seguro de datos.",
	},
    {
		icon: <FaDesktop size={36} />,
		title: "Logistica",
		description: "Supervisa operaciones con monitoreo en tiempo real y tableros de control.",
	},
    {
        icon: <FaSeedling  size={36} />,
    	title: "Agricultura y Agroindustria",
    	description: "Gestión de cultivos, monitoreo automatizado, soporte técnico vía chatbot.",
    },

];

const IconFeatures = () => {
	return (
		<div className="relative flex flex-col items-center justify-center gap-4">

			<div className="text-2xl font-bold    border-2 border-transparent bg-gradient-to-r from-cyPurple via-cyan-300 to-cyPurple   bg-opacity-30 backdrop-blur-md rounded">
				<IconBoxSection
					title="Somos especialistas en IA para múltiples industrias."
					subtitle="Adaptamos nuestras soluciones de IA, automatización y desarrollo a las necesidades únicas de distintos sectores."
					list={list}
					bgColor="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"
					textColor="text-white"
				/>
			</div>
		</div>
	);
};
export default IconFeatures;
