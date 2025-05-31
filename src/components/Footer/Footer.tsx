import Image from "next/image";
import {
  FaWhatsapp,
  FaTelegramPlane,
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-300 pt-10 pb-6 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Image src="/logo2.png" alt="Logo" width={32} height={32} />
            <span className="text-lg font-semibold text-white">Sun</span>
          </div>
          <p className="text-sm text-neutral-400">
            Plataforma innovadora para desarrollo web y soluciones digitales.
            Trabajamos para llevar tus ideas a otro nivel con tecnología.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Enlaces Rápidos</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Inicio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Sobre Nosotros
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Servicios
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Contacto</h4>
          <ul className="text-sm space-y-3 text-neutral-400">
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt /> Caracas, Venezuela
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> contacto@suntech.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt /> +58 123 456 7890
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Síguenos</h4>
          <div className="flex gap-4 text-lg">
            <a href="#" aria-label="WhatsApp" className="hover:text-white">
              <FaWhatsapp />
            </a>
            <a href="#" aria-label="Telegram" className="hover:text-white">
              <FaTelegramPlane />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-white">
              <FaYoutube />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white">
              <FaInstagram />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-white">
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-neutral-700 pt-4 text-center text-sm text-neutral-500">
        © 2025 Sun. Todos los derechos reservados. Diseñado por The D&D.
      </div>
    </footer>
  );
}
