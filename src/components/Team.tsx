// Componente de sección "Nuestro equipo".
// Muestra los miembros del equipo con foto, rol y redes sociales.

import { FaFacebookF, FaXTwitter, FaYoutube, FaLinkedinIn } from "react-icons/fa6";
import Image from "next/image";

const teamMembers = [
	{
		name: "Johan",
		role: "Senior Developer- SEO",
		image: "/images/seo2.png",
		social: {
			facebook: "#",
			x: "#",
			youtube: "#",
			linkedin: "#",
		},
	},
	{
		name: "Yaz",
		role: "Senior Developer",
		image: "/images/lider2.png",
		social: {
			facebook: "#",
			x: "#",
			youtube: "#",
			linkedin: "#",
		},
	},
	{
		name: "Jeff",
		role: "Operation Manager",
		image: "/images/data2.png",
		social: {
			facebook: "#",
			x: "#",
			youtube: "#",
			linkedin: "#",
		},
	},
	{
		name: "Mau",
		role: "Developer",
		image: "/images/dev2.png",
		social: {
			facebook: "#",
			x: "#",
			youtube: "#",
			linkedin: "#",
		},
	},
];

const Team = () => {
	return (
		<section id="team" className="w-full py-16 md:py-24 ">
			<div className="bg-gray-900 max-w-6xl mx-auto px-4 pb-4">
			    <div className="gap-8 flex flex-col items-center">
				<h2 className="text-3xl md:text-4xl font-bold text-center mt-8 mb-12 text-cyPurple">
					Our Team
				</h2>
				</div>
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-8 px-4">
					{teamMembers.map((member, idx) => (
						<div
							key={idx}
							className="bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-center group transition hover:scale-105"
						>
							<div className="w-40 h-40 rounded-full overflow-hidden mb-4 border-4 border-cyPurple hover:border-cyan-400 transition-colors duration-300">
								<Image
									src={member.image}
									alt={member.name}
									width={160}
									height={160}
									className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
								/>
							</div>
							<div className="text-center">
								<div className="text-cyPurple font-semibold text-sm mb-1">
									{member.role}
								</div>
								<h5 className="text-lg font-bold mb-2">{member.name}</h5>
								<div className="flex justify-center gap-3 mt-2">
                                      <a href={member.social.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyPurple transition">
                                        <FaFacebookF size={24} />
                                      </a>
                                      <a href={member.social.x} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyPurple transition">
                                        <FaXTwitter size={24} />
                                      </a>
                                      <a href={member.social.youtube} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyPurple transition">
                                        <FaYoutube size={24} />
                                      </a>
                                      <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyPurple transition">
                                        <FaLinkedinIn size={24} />
                                      </a>
                                </div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Team;
