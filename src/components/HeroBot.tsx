"use client";

import React, { useState } from "react";
import { FaHandshake, FaLightbulb, FaTools,FaPuzzlePiece } from "react-icons/fa";
import Image from "next/image";
import ImageGlow from "./ImageGlow";


const HeroBot = () => {
	return (
		<section id="herobot" className="w-full py-8 px-7 md:px-12 lg:px-16">
			<div className="max-w-screen-xl mx-auto px-4 ">
			<ImageGlow>
				{/* Contenido principal - Responsive: columna en móvil, fila en desktop */}
				<div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
					{/* Columna de imagen */}
					<div className="w-full lg:w-2/5 flex justify-center items-center">

							<Image
								src="/images/nerobot.png"
								alt="AI Chatbot"
								width={300}
								height={400}
								className="w-64 md:w-72 lg:w-80 object-contain drop-shadow-xl"
								priority
							/>

					</div>

					{/* Columna de texto */}
					<div className="w-full lg:w-4/5 text-center lg:text-left">
						{/* Contenedor principal del texto */}
						<div className="flex flex-col gap-6">
							{/* Título */}
							<h1 className="text-3xl md:text-4xl font-bold text-center">
								Conoce y emplea tu propio <span className="text-purple-600">Chatbot</span> personalizado.
							</h1>

							{/* Contenedor horizontal: párrafo + imagen */}
							<div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
								{/* Div del párrafo */}
								<div className="flex-1 text-gray-200 space-y-6">
								    {/* Párrafo descriptivo */}
								    <p className="text-lg font-semibold ">
								    <span className=" text-xl text-purple-600">Nerova </span> Te ofrece tu propio<span className="text-xl text-cyan-400"> chatbot</span>, listo para conocer tus procesos.
                                    </p>
									<p className="text-xl font-extrabold">
										Utilizando tu chatbot puedes reducir los tiempos de respuesta y aumentar la satisfacción del cliente.
									</p>
									<span className="block text-lg">
                                      Lo adaptamos a tus necesidades, integrándolo con tus sistemas y plataformas existentes.
                                    </span>
                                    <div className="flex justify-center lg:justify-start">
                                        <button
                                             type="button"
                                             onClick={() => {
                                                 const contactSection = document.getElementById('contact');
                                                 contactSection?.scrollIntoView({ behavior: 'smooth' });
                                             }}
                                             className="bg-cyPurple hover:bg-cyan-500 text-white font-semibold py-3 px-6 rounded-md transition-colors duration-300"
                                         >
                                            SOLICITA UNA DEMO
                                       </button>
                                    </div>
								</div>

								{/* Div de imagen
								<div className="flex justify-center md:justify-end md:w-1/3">
									<Image
										src="/images/linea-bot.png"
										alt="AI Chatbot"
										width={300}
										height={300}
										className="w-56 md:w-72 lg:w-80 object-contain drop-shadow-xl"
										priority
									/>
								</div>*/}

							</div>
						</div>
					</div>
				</div>
                </ImageGlow>
			</div>
		</section>
	);
};

export default HeroBot;