import React, { useState, useEffect } from "react";
import { Heart, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About me", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "My Project", href: "#work" },
];

// --- Animation Variants ---
const navContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120 },
  },
};

const mobileMenuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -10,
    transition: { duration: 0.2 },
  },
};

const mobileItemVariants = {
  hidden: { y: -15, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 120 },
  },
};

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
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`w-full px-6 md:px-12 lg:px-20 py-5 flex justify-between items-center sticky top-0 z-50 transition-colors duration-300
        ${
          scrolled
            ? "backdrop-blur-md bg-white/40 shadow-sm"
            : "bg-transparent text-black"
        }`}
    >
      {/* Logo */}
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-3xl font-bold whitespace-nowrap z-50 cursor-pointer"
      >
        Narakron{" "}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            repeatType: "reverse",
          }}
          className="text-pink-500 inline-block"
        >
          .
        </motion.span>
      </motion.h1>

      {/* Desktop Nav */}
      <motion.nav
        variants={navContainerVariants}
        initial="hidden"
        animate="visible"
        className={`hidden md:flex gap-8 px-6 py-2 rounded-full font-medium transition-all duration-300
          ${
            scrolled
              ? "bg-white/50 text-gray-900 backdrop-blur-md shadow-sm border border-gray-100"
              : "bg-transparent text-gray-800"
          }`}
      >
        {navLinks.map((link, index) => (
          <motion.a
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.05, color: "#ec4899" }} 
            whileTap={{ scale: 0.95 }}
            href={link.href}
            className="transition-colors"
          >
            {link.label}
          </motion.a>
        ))}
      </motion.nav>

      {/* Right Section (Contact & Mobile Toggle) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex items-center gap-4 z-50"
      >
        <motion.a
          whileHover={{ scale: 1.05, backgroundColor: "#f3f4f6" }}
          whileTap={{ scale: 0.95 }}
          href="#contact"
          className={`hidden sm:flex items-center gap-2 px-5 py-2 rounded-full border transition-colors
            ${
              scrolled
                ? "border-gray-300 text-gray-900 bg-white/50 backdrop-blur-md"
                : "border-gray-400 text-black hover:bg-gray-100"
            }`}
        >
          Contact <motion.span whileHover={{ x: 3, y: -3 }}>↗</motion.span>
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 md:hidden text-black hover:bg-gray-100 rounded-full transition cursor-pointer"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={isOpen ? "close" : "menu"}
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.div>
          </AnimatePresence>
        </motion.button>
      </motion.div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg border-b border-gray-100 p-6 flex flex-col gap-5 text-center font-medium shadow-xl md:hidden"
          >
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                variants={mobileItemVariants}
                href={link.href}
                onClick={() => setIsOpen(false)}
            
                whileTap={{ scale: 0.95 }}
                className="py-2  transition-colors"
              >
                {link.label}
              </motion.a>
            ))}

            <motion.a
              variants={mobileItemVariants}
              href="#contact"
              onClick={() => setIsOpen(false)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="sm:hidden mx-auto px-6 py-3 mt-2 border border-black rounded-full w-full max-w-[200px] bg-black text-white hover:bg-gray-800 transition-colors"
            >
              Contact
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;