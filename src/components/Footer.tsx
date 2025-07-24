"use client";

// components/Footer.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12">
      {/* Scroll to Top */}
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-full shadow"
        >
          <i className="base-icon-next-1"></i>
          <span>Back to top</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo & Subscribe */}
        <div>
          <div className="mb-4">
            <div className="text-center md:text-left">
                  <h1 className=" font-bold mb-2">
                     Nero<span className="text-cyan-300">va</span>
                  </h1>
              </div>
          </div>

          <form className="space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded bg-gray-800 text-white"
              required
            />
            <button
              type="submit"
              className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded"
            >
              <i className="base-icon-right-arrow"></i>
              <span>Subscribe</span>
            </button>
          </form>

          <p className="mt-4 italic text-sm text-gray-400">
            "Adaptamos la IA  a tus necesidades."
          </p>
        </div>

        {/* Address */}
        <div>
          <h6 className="text-white font-semibold mb-3">Address</h6>
          <p>Barrio robledo el diamante, Medellín</p>
          <p>
            <strong>Open:</strong> 8:00 AM - 6:00 PM
          </p>
          <div className="mt-2 space-y-1 text-sm">
            <p>
              <span className="font-medium">Phone:</span> +57 (000) 000 0000
            </p>
            <p>
              <span className="font-medium">Email:</span>{" "}
              nerova@nerova.com
            </p>
          </div>

          <div className="flex space-x-3 mt-4 text-xl">
            <Link href="#" className="hover:text-white">
              <i className="fab fa-instagram"></i>
            </Link>
            <Link href="#" className="hover:text-white">
              <i className="fab fa-facebook-f"></i>
            </Link>
            <Link href="#" className="hover:text-white">
              <i className="fab fa-twitter"></i>
            </Link>
          </div>
        </div>

        {/* Recent Posts */}
        <div>
          <h6 className="text-white font-semibold mb-3">Recent Posts</h6>
         {/* <ul className="space-y-2 text-sm">
            <li>
              <Link href="#" className="hover:underline">
                Kills You Slowly
              </Link>
              <div className="text-xs text-gray-500">November 8, 2019</div>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Clout
              </Link>
              <div className="text-xs text-gray-500">April 22, 2019</div>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Jerome
              </Link>
              <div className="text-xs text-gray-500">April 22, 2019</div>
            </li>

          </ul>*/}
        </div>

        {/* Recent Comments */}
        <div>
          <h6 className="text-white font-semibold mb-3">Sitemap web</h6>
          <ul className="space-y-2 text-sm">
            <li>

              <Link href="#services" className="hover:underline">
                Services
              </Link>
            </li>
            <li>

              <Link href="#about" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="#features" className="hover:underline">
                Features
              </Link>
            </li>
            <li>
               <Link href="#faq" className="hover:underline">
                   FAG
               </Link>
             </li>
             <li>
                <Link href="#team" className="hover:underline">
                    Team
                </Link>
             </li>
             <li>
                <Link href="#contact" className="hover:underline">
                    Contact
                </Link>
             </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 py-4 text-sm text-center text-gray-400">
        <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-4">
          <div className="mb-2 md:mb-0">
            © {new Date().getFullYear()}, NEROVA Theme |{' '}
            <Link href="#" className="hover:underline">
              Team
            </Link>{' '}
            |{' '}
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>{' '}
            |{' '}
            <Link href="#" className="hover:underline">
              Sitemap
            </Link>
          </div>
          <div className="text-gray-500">All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// Componente de pie de página.
// Muestra información de derechos de autor y enlaces sociales.
// Permite la suscripción a boletines y muestra publicaciones y comentarios recientes.
