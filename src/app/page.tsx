// Página principal de la aplicación.
// Renderiza las secciones principales del sitio web.

import Image from "next/image";

import Hero from "../components/Hero";
import IconFeatures from "../components/IconFeatures";
import ScrollTech from "@/components/ScrollTech";
import About from "@/components/About";
import Features from "@/components/Features";
import Team from "@/components/Team";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";


export default function Home() {
  return (

    <main>
        <div className="relative z-10">
             <Hero />
             <IconFeatures />
             <About/>
             <Features />
             <ScrollTech />
             <Team />
             <FAQ/>
             <Contact />
        </div>
    </main>
    
  );
}
