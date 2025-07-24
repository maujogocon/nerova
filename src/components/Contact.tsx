// Componente de sección de contacto.
// Incluye formulario para enviar mensajes y muestra mensajes de éxito o error.

"use client";

import { useState, useRef } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    interest: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Form submitted:", formData);
    // API Formspree.
    try {
        const response = await fetch('https://formspree.io/f/mblkordq', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          setSuccessMessage("¡Consulta enviada con éxito!");
          setFormData({ name: "", email: "", phone: "", message: "", interest: "" });
        } else {
          setSuccessMessage("Error al enviar el formulario.");
        }
      } catch (error) {
        setSuccessMessage("Error de red.");
      }
  // Limpiar mensaje después de 7 segundos
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setSuccessMessage(""), 7000);
        setIsLoading(false);
  };

  return (
    <section id="contact" className="px-4 py-10 ms:px-6">
      <div className="w-full max-w-4xl mx-auto px-4 py-10  shadow-lg rounded-lg">
      <div className="text-center mb-6">
        <p className="text-sm uppercase text-gray-500">Contact us</p>
        <h2 className="text-3xl font-bold">
          Tienes <span className="text-cyan-400">alguna</span>{" "}
          <span className="text-purple-600">Pregunta?</span>
        </h2>
      </div>

      {successMessage && (
          <div className="text-cyan-400 font-semibold mb-4">{successMessage}</div>
      )}

      <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name*"
            className="p-3 border rounded-md text-gray-500"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email ID*"
            className="p-3 border rounded-md text-gray-500"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Mobile*"
            className="p-3 border rounded-md text-gray-500"
            required
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="text-gray-500">
          <textarea
            name="message"
            rows={7}
            placeholder="Message"
            className="w-full p-3 border rounded-md text-gray-500"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="md:col-span-2 grid gap-4 md:grid-cols-2 text-gray-500">
          <select
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            className="p-3 text-gray border rounded-md text-gray-500"
          >
            <option value="" disabled>
              Que servicio te interesa?
            </option>
            <option  value="analisis-de-datos">Analisis de datos</option>
            <option  value="automatizacion-de-procesos">Automatización de Procesos</option>
            <option  value="cloud">Cloud</option>
            <option  value="desarrollo-software">Desarrollo de Software</option>
            <option  value="api-o-chatbot">Integración de Api o ChatBot</option>
            <option  value="otro">Otro</option>
          </select>

          <button
            type="submit"
            disabled={isLoading}
            className="bg-cyPurple hover:bg-cyan-500  text-white font-semibold py-3 px-6 rounded-md"
          >
            {isLoading ? "Enviando...": "Enviar Consulta"}
          </button>
        </div>
      </form>
      </div>
    </section>
  );
};

export default Contact;
