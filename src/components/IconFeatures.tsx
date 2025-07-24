// Componente para mostrar una colección de características con iconos.
// Utiliza IconBoxSection para renderizar la lista de features.

import { FaStore, FaUserCog , FaBriefcaseMedical , FaChalkboardTeacher, FaDesktop, FaSeedling } from "react-icons/fa";
import IconBoxSection from "@/components/IconBoxSection";

import React from "react";

const list = [
	{
		icon: <FaStore size={36} />,
		title: "E-commerce",
		description: "Automatiza la atención al cliente con chatbots inteligentes.",
	},
	{
		icon: <FaUserCog  size={36} />,
		title: "Gestión de talentos",
		description: "Visualiza el desempeño por área y antigüedad con dashboards personalizados.",
	},
	{
		icon: <FaChalkboardTeacher size={36} />,
		title: "Marketing",
		description: "Identifica oportunidades virales y personaliza contenido en tiempo real.",
	},
    {
		icon: <FaBriefcaseMedical  size={36} />,
		title: "Salud",
		description: "Optimiza recursos mediante el análisis de tiempos de espera.",
	},
    {
		icon: <FaDesktop size={36} />,
		title: "Logistica",
		description: "Supervisa operaciones con monitoreo en tiempo real y tableros de control.",
	},
    {
        icon: <FaSeedling  size={36} />,
    	title: "Agricultura y Agroindustria",
    	description: "Analiza cultivos y condiciones del terreno con drones e IA.",
    },

];

const IconFeatures = () => {
	return (
		<div className="relative flex flex-col items-center justify-center gap-4">

			<div className="text-2xl font-bold    border-2 border-transparent bg-gradient-to-r from-cyPurple via-cyan-300 to-cyPurple   bg-opacity-30 backdrop-blur-md rounded">
				<IconBoxSection
					title="Impulsa el crecimiento de tu organización"
					subtitle="Adaptamos la IA a las necesidades unicas de  cada industria y acompañamos a las empresas en su camino hacia la innovación, el crecimiento y la eficiencia operativa."
					list={list}
					bgColor="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900"
					textColor="text-white"
				/>
			</div>
		</div>
	);
};
export default IconFeatures;
