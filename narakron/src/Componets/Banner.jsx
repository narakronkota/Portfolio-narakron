import React, { useState, useEffect, useMemo } from "react";
// ✅ แก้ไขจุดที่ 1: เพิ่ม AnimatePresence เข้ามาในบรรทัดนี้
import { motion, AnimatePresence } from "framer-motion";
// ✅ แก้ไขจุดที่ 2: เพิ่ม FaTimes สำหรับไอคอนปุ่มกากบาทปิดโมดอล
import { FaGithub, FaTimes } from "react-icons/fa";

function Banner() {
  const words = useMemo(() => ["Frontend", "Full-Stack"], []);

  const [currentWord, setCurrentWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const [isOpenResume, setIsOpenResume] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => setIsReady(true), 1000);
    return () => clearTimeout(startTimer);
  }, []);

  useEffect(() => {
    if (!isReady) return;

    const current = words[wordIndex];
    let typingSpeed = isDeleting ? 80 : 150;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < current.length) {
        setCurrentWord(current.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentWord(current.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === current.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setWordIndex((wordIndex + 1) % words.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, wordIndex, words, isReady]);

  return (
    <div className="min-h-screen flex items-center justify-center  bg-white dark:bg-zinc-950 relative">
      <motion.div
        className="text-center p-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Profile Picture */}
        <motion.div
          className="mb-6"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        ></motion.div>

        {/* Greeting */}
        

       
        {/* Title */}
        <motion.h1
          className="text-5xl md:text-6xl font-serif font-semibold text-gray-900 dark:text-white dark:text-white leading-tight mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <span className="text-gray-800 dark:text-white inline-block min-w-[220px] text-left sm:text-center">
            {currentWord}
            <span className="inline-block w-[3px] h-[40px] bg-gray-800 ml-1 animate-pulse align-middle"></span>
          </span>{" "}
          web developer <br /> based in bangkok.
        </motion.h1>

        {/* Description */}
        <motion.p
          className="text-gray-600 dark:text-white text-md max-w-2xl mx-auto mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          พร้อมเรียนรู้ประสบการณ์ทํางานในด้าน frontend และ fullstack
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex justify-center space-x-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
        >
          <a
            href="https://github.com/narakronkota"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-black text-white px-6 py-3 rounded-full text-lg hover:bg-gray-800 dark:text-white transition-colors duration-300 cursor-pointer gap-2"
          >
            <FaGithub size={22} />
            <span>GitHub</span>
          </a>

          <button
            onClick={() => setIsOpenResume(true)}
            className="flex items-center border border-gray-300 text-gray-800 px-6 py-3 rounded-full text-lg dark:text-white hover:bg-gray-50 transition-colors duration-300 cursor-pointer"
          >
            My Resume <span className="ml-2">↓</span>
          </button>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isOpenResume && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 cursor-zoom-out"
            onClick={() => setIsOpenResume(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-xl md:max-w-2xl max-h-[90vh] bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsOpenResume(false)}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 transition z-10 cursor-pointer"
              >
                <FaTimes size={18} />
              </button>

              <div className="overflow-y-auto w-full p-2 bg-gray-100 flex justify-center items-start">
                <img
                  src="https://res.cloudinary.com/dyiksnmcb/image/upload/v1780505415/Black_and_White_Clean_Professional_A4_Resume_1_vkvhyw.jpg"
                  alt="My Resume"
                  className="w-full h-auto object-contain rounded-xl shadow-sm"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Banner;
