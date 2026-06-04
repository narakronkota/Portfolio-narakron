import React, { useState, useEffect } from "react";
import { Heart, Menu, X } from "lucide-react"; // ✅ เพิ่มไอคอน Menu และ X (กากบาท)

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
 

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
 

  return (
    <header
      className={`w-full px-6 md:px-12 lg:px-20 py-5 flex justify-between items-center sticky top-0 z-50 transition-all duration-300
        ${
          scrolled
            ? "backdrop-blur-md bg-white/40 shadow-sm"
            : "bg-transparent text-black"
        }`}
    >
      {/* logo */}
      <h1 className="text-3xl font-bold whitespace-nowrap z-50">
        Narakron <span className="text-pink-500">.</span>
      </h1>

      <nav
        className={`hidden md:flex gap-8 px-6 py-2 rounded-full font-medium transition-all duration-300
          ${
            scrolled
              ? "bg-white/40 text-gray-900 dark:text-white backdrop-blur-md border-none"
              : "bg-transparent text-gray-800"
          }`}
      >
        <a href="#home" className="hover:opacity-80 transition">
          Home
        </a>
        <a href="#about" className="hover:opacity-80 transition">
          About me
        </a>
        <a href="#experience" className="hover:opacity-80 transition">
          Experience
        </a>
        <a href="#work" className="hover:opacity-80 transition">
          My Project
        </a>
      </nav>

      <div className="flex items-center gap-4 z-50">
        <a
          href="#contact"
          className={`hidden sm:flex items-center gap-2 px-5 py-2 rounded-full border transition
            ${
              scrolled
                ? "border-gray-500 text-gray-900 dark:text-white hover:bg-white/30 backdrop-blur-md "
                : "border-gray-400 text-black hover:bg-gray-100"
            }`}
        >
          Contact <span>↗</span>
        </a>

       
 
        {/* Mobile Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 md:hidden text-black hover:bg-gray-100 rounded-full transition cursor-pointer"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        className={`absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg border-b border-gray-100 p-6 flex flex-col gap-5 text-center font-medium shadow-md transition-all duration-300 md:hidden
          ${
            isOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
      >
        <a
          href="#home"
          onClick={() => setIsOpen(false)}
          className="py-2 hover:text-pink-500 transition"
        >
          Home
        </a>
        <a
          href="#about"
          onClick={() => setIsOpen(false)}
          className="py-2 hover:text-pink-500 transition"
        >
          About me
        </a>
        <a
          href="#experience"
          onClick={() => setIsOpen(false)}
          className="py-2 hover:text-pink-500 transition"
        >
          Experience
        </a>
        <a
          href="#work"
          onClick={() => setIsOpen(false)}
          className="py-2 hover:text-pink-500 transition"
        >
          My Work
        </a>
        <a
          href="#contact"
          onClick={() => setIsOpen(false)}
          className="sm:hidden mx-auto px-6 py-2 border border-black rounded-full w-full max-w-[200px]"
        >
          Contact{" "}
        </a>
      </div>
    </header>
  );
};

export default Navbar;
