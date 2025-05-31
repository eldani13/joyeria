"use client";

import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";

export default function WhatsAppButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="fixed bottom-5 right-5 z-50 group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && (
        <div className="mb-2 mr-2 px-4 py-2 rounded-lg bg-gray-800 text-white text-sm shadow-lg absolute right-16 bottom-1 animate-fade-in max-w-[200px]">
          For more information, contact our advisors.s
        </div>
      )}

      <a
        href="https://wa.me/+573011940150"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 flex items-center justify-center rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg transition-colors"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp size={28} />
      </a>
    </div>
  );
}
