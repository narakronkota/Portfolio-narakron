import React from "react";
import { FaGithub, FaPhoneAlt, FaEnvelope } from "react-icons/fa"; // ใช้ React Icons ตัวเดียวกับปุ่ม GitHub เดิมของคุณ

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-black py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        

        <div className="text-center md:text-left">
          <h3 className="text-lg font-bold text-white tracking-wide">
            Narakron Kota
          </h3>
          <p className="text-xs text-white mt-1">
            © {currentYear} Designed & Built by Narakron Kota
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
      
          <a 
           
            className="flex items-center gap-2 text-sm text-white hover:text-grey transition duration-200"
          >
            <FaPhoneAlt size={14} className="text-white" />
            <span>096-260-7586</span> 
          </a>

          
          <span className="hidden sm:block h-4 w-px bg-gray-200"></span>

          {/* GitHub Link */}
          <a
            href="https://github.com/narakronkota" 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-white hover:text-grey transition duration-200"
          >
            <FaGithub size={18} />
            <span>GitHub</span>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;