"use client";

import Image from "next/image";
import { useState } from "react";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { CiSearch } from "react-icons/ci";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import { navItems } from "@/data/navItems";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        <div className="sm:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <HiOutlineX size={24} /> : <HiOutlineMenu size={24} />}
          </button>
        </div>

        <div className="sm:static absolute left-1/2 sm:left-0 transform sm:transform-none -translate-x-1/2 sm:translate-x-0 flex items-center gap-2">
          <Image src="/logo.png" alt="Logo" width={24} height={24} />
          <span className="text-lg font-semibold">Sun</span>
        </div>

        <nav className="hidden sm:flex absolute left-1/2 transform -translate-x-1/2 gap-6 text-sm text-gray-700">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="header-text hover:text-black transition"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden sm:flex items-center gap-4 ml-auto">
          <CiSearch size={20} className="cursor-pointer" />
          <LiaShoppingBagSolid size={20} className="cursor-pointer" />
          <Image
            src="/avatar.png"
            alt="Profile"
            width={32}
            height={32}
            className="rounded-full"
          />
        </div>

        <div className="sm:hidden">
          <LiaShoppingBagSolid size={22} className="text-gray-800" />
        </div>
      </div>

      {menuOpen && (
        <div className="sm:hidden mt-4 space-y-3 text-sm text-gray-700">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="block px-2 py-1 hover:text-black transition"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
