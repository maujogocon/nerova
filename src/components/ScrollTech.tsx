// Componente de scroll horizontal de tecnologías.
// Muestra un carrusel animado de iconos de tecnologías utilizadas.
// components/Marquee.tsx
import React from "react";

const techStack = [
	{ name: "Angular", icon: "/svg/angular.svg" },
	{ name: "Babel", icon: "/svg/babel.svg" },
	{ name: "Bootstrap", icon: "/svg/bootstrap.svg" },
	{ name: "C", icon: "/svg/c.svg" },
	{ name: "C++", icon: "/svg/c-plusplus.svg" },
	{ name: "C#", icon: "/svg/csharp.svg" },
	{ name: "CSS", icon: "/svg/css_old.svg" },
	{ name: "Cypress", icon: "/svg/cypress.svg" },
	{ name: "DeepSeek", icon: "/svg/deepseek.svg" },
	{ name: "Express", icon: "/svg/expressjs.svg" },
	{ name: "Git", icon: "/svg/git.svg" },
	{ name: "HTML5", icon: "/svg/html5.svg" },
	{ name: "JavaScript", icon: "/svg/javascript.svg" },
	{ name: "JSON", icon: "/svg/json.svg" },
	{ name: "Laravel", icon: "/svg/laravel.svg" },
	{ name: "MariaDB", icon: "/svg/mariadb.svg" },
	{ name: "MongoDB", icon: "/svg/mongodb.svg" },
	{ name: "MySQL", icon: "/svg/mysql.svg" },
	{ name: "Next.js", icon: "/svg/nextjs.svg" },
	{ name: "Node.js", icon: "/svg/nodejs.svg" },
	{ name: "PHP", icon: "/svg/php_dark.svg" },
	{ name: "PostgreSQL", icon: "/svg/postgresql.svg" },
	{ name: "Python", icon: "/svg/python.svg" },
	{ name: "React", icon: "/svg/react.svg" },
	{ name: "Redux", icon: "/svg/redux.svg" },
	{ name: "Spring", icon: "/svg/spring.svg" },
	{ name: "SQL Server", icon: "/svg/sql-server.svg" },
	{ name: "Styled Components", icon: "/svg/styledcomponents.svg" },
	{ name: "Tailwind", icon: "/svg/tailwindcss.svg" },
	{ name: "TypeScript", icon: "/svg/typescript.svg" },
	{ name: "Vue", icon: "/svg/vue.svg" },
];

const ScrollTech = () => {
	return (
		<div className="w-full max-w-screen-xl mx-auto flex justify-center items-center relative overflow-hidden py-4 px-4 md:px-12">
			<div className="animate-scroll flex w-full gap-6 md:gap-10 px-4 hover:[animation-play-state:paused] justify-center">
				{[...techStack, ...techStack].map((tech, index) => (
					<div
						key={`${tech.name}-${index}`}
						className="flex items-center gap-2 group min-w-fit"
					>
						<img
							src={tech.icon}
							alt={tech.name}
							className="h-5 sm:h-6 md:h-7 w-auto opacity-70 transition-transform duration-300 group-hover:scale-110"
							loading="lazy"
						/>
						<span className="text-xs sm:text-sm md:text-base text-white font-medium whitespace-nowrap">
							{tech.name}
						</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default ScrollTech;
