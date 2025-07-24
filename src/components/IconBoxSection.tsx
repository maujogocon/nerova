// Componente de sección de cajas de iconos.
// Muestra una lista de servicios o características con iconos y títulos.

import React, { ReactNode } from 'react';

type BoxIcons = {
  icon: ReactNode;
  title: string;
  description: string;
};

interface CollectionIconsProps {
  title?: string;
  subtitle?: string;
  list: BoxIcons[];
  bgColor?: string; // Ej: "bg-gray-900"
  textColor?: string; // Ej: "text-white"
}

const IconBoxSection: React.FC<CollectionIconsProps> = ({ bgColor = '', textColor = '', title, subtitle, list }) => {
  return (
    <section id="services" className={`${bgColor}  py-12 px-4 relative`}>
      <div className="absolute inset-0 bg-gradient-to-b  from-black/40 to-transparent z-0" />
      <div className="relative z-10 max-w-6xl mx-auto">
        {(title || subtitle) && (
          <div className={`mb-10 text-center ${textColor}`}>
            {title && <h2 className="text-3xl font-bold">{title}</h2>}
            {subtitle && <p className="text-lg mt-2">{subtitle}</p>}
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-4">
          {list.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-xl shadow-lg flex flex-col items-center text-center space-y-4 transition hover:scale-105 hover:shadow-xl ${textColor} bg-gray-800 hover:bg-gray-700`}
            >
              <div className="text-purple-600">{item.icon}</div>
              <h6 className="text-lg font-semibold">{item.title}</h6>
              <p className="text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IconBoxSection;
