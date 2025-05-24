import Image from "next/image";
import { FaWhatsapp, FaTelegramPlane, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-y-4 text-center md:text-left">
        <div className="flex items-center gap-2">
          <Image src="/logo2.png" alt="Logo" width={24} height={24} />
          <span className="text-sm font-medium">Sun</span>
        </div>

        <div className="text-xs text-neutral-400">
          2025 - Designed by The D&D
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#"
            aria-label="WhatsApp"
            className="hover:text-white text-neutral-400"
          >
            <FaWhatsapp size={18} />
          </a>
          <a
            href="#"
            aria-label="Telegram"
            className="hover:text-white text-neutral-400"
          >
            <FaTelegramPlane size={18} />
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="hover:text-white text-neutral-400"
          >
            <FaYoutube size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
