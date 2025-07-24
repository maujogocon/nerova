// Componente de sección "Sobre nosotros".
// Muestra información de la empresa y un botón de contacto.

import Image from "next/image";

const About = () => {
  return (
    <section  id="about" className="w-full  px-7 py-8 md:py-15">
      <div className="w-auto max-w-screen-xl mx-auto px-4 flex flex-col md:flex-row items-center gap-5">
         {/* Columna de imagen */}
                <div className="flex-1 flex justify-center items-center h-full max-h-full">
                  <Image
                    src="/images/chatbot.png"
                    alt="AI Chatbot"
                    width={300}
                    height={428}
                    className="w-[40%] h-full max-w-xs md:max-w-md lg:max-w-lg max-h-full object-contain drop-shadow-xl"
                    priority
                  />
                </div>

        {/* Columna de texto */}
        <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left md:px-16 gap-6">
          <h2 className="text-lg  font-bold leading-tight">
           ¿Quienes somos?
          </h2>
          <h1 className="text-5xl md:text-4xl font-bold mb-2">
            <span className="text-cyPurple">NERO</span><span className="text-cyan-400">VA</span>
          </h1>
          <p className="text-lg leading-relaxed max-w-xl">
            <span className="font-semibold">
              Somos un aliado estratégico, un equipo de expertos en IA y
              desarrollo de software, nos dedicamos a transformar organizaciones mediante soluciones IA
              que automatizan procesos,optimizan recursos y mejoran la toma de decisiones.
            </span>
          </p>
          <p className="text-lg leading-relaxed max-w-xl">
            <span className="font-semibold">
              Nuestro enfoque principal es generar  resultados medibles y sostenibles siempre alineados con
              los objetivos de cada cliente.
            </span>
          </p>
          {/*<p className="text-lg leading-relaxed max-w-xl">
            <span className="font-semibold">
              Acompañamos a las empresas en su camino hacia la innovación, el crecimiento y la eficiencia operativa.
              Con nosotros, las organizaciones pueden aprovechar al máximo el potencial de la inteligencia artificial.
            </span>
           </p>*/}

          <a
            href="#contact"
            className="inline-block bg-cyPurple hover:bg-cyan-400 text-white hover:text-gray-900 font-semibold px-6 py-3 rounded transition-colors duration-200 shadow"
          >
            Contactanos
          </a>
        </div>

      </div>
    </section>
  );
};

export default About;
