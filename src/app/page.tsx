// Página principal de la aplicación.
// Renderiza las secciones principales del sitio web.

import Hero from "../components/Hero";
import WhatWeDo from "../components/WhatWeDo";
import IconFeatures from "../components/IconFeatures";
import ScrollTech from "@/components/ScrollTech";
import About from "@/components/About";
import Features from "@/components/Features";
import HeroBot from "@/components/HeroBot";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";


export default function Home() {
  return (

    <main>
        <div className="relative z-10">
             <Hero />
             <IconFeatures />
             <HeroBot/>
             <WhatWeDo />
             <About/>
             <Features />
             <ScrollTech />
             <FAQ/>
             <Contact />
        </div>
    </main>
    
  );
}
