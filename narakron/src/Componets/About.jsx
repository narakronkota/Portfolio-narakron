import React from "react";
import { Code, GraduationCap, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

// ✅ Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const About = () => {
  return (
    <section className="min-h-screen bg-white dark:bg-zinc-950 py-24 px-6 text-black select-none">
      <div className="max-w-4xl mx-auto flex flex-col items-center">

        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-gray-400 dark:text-white block mb-3">
            Introduction
          </span>
          <h1 className="text-4xl md:text-5xl dark:text-white font-black tracking-tight uppercase">
            ABOUT ME
          </h1>
          <div className="w-12 h-[2px] bg-black mx-auto mt-4"></div>
        </motion.div>

        <motion.div
          className="text-center mb-16 max-w-2xl"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <h2 className="text-xl md:text-2xl font-thai text-gray-900 dark:text-white dark:text-white leading-relaxed mb-6 font-serif italic">
            "พัฒนาตัวเองผ่านการลงมือทำ เรียนรู้ไว และพร้อมเติบโตในสายงานจริง "
          </h2>
          <p className="text-gray-600 dark:text-white font-thai text-sm md:text-base leading-relaxed">
            แม้จะยังไม่มีประสบการณ์ทำงานในองค์กร
            แต่ผมฝึกฝนการเขียนโค้ดและสร้างโปรเจกต์ด้วยตัวเอง ผ่านการศึกษาจาก
            YouTube ควบคู่กับการใช้ AI ในการสืบค้นและช่วยแก้ปัญหาเชิงลึก
            ผมโฟกัสที่การลงมือทำจริง เจอปัญหาจริง
            และรู้วิธีค้นหาคำตอบเพื่อขับเคลื่อนงานให้สำเร็จครับ
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mb-20 items-stretch"
          initial="hidden"
          whileInView="visible"
          variants={container}
          viewport={{ once: true }}
        >
          {/* Languages */}
          <motion.div
            variants={item}
            className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:bg-white hover:border-black hover:-translate-y-1 hover:shadow-xl group"
          >
            <div className="p-3 rounded-xl bg-white border border-gray-100 group-hover:bg-black group-hover:text-white dark:text-white transition-colors duration-300 mb-4">
              <Code className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <h3 className="text-md font-bold tracking-wide uppercase mb-2">
              Languages
            </h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              HTML, CSS, JavaScript, React.js, Next.js, Tailwind CSS
            </p>
          </motion.div>

          {/* Education */}
          <motion.div
            variants={item}
            className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:bg-white hover:border-black hover:-translate-y-1 hover:shadow-xl group"
          >
            <div className="p-3 rounded-xl bg-white border border-gray-100 group-hover:bg-black group-hover:text-white  transition-colors duration-300 mb-4">
              <GraduationCap className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <h3 className="text-md font-bold tracking-wide uppercase mb-2">
              Education
            </h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              Sahapanich Business Technological College
            </p>
          </motion.div>

          {/* Projects */}
          <motion.div
            variants={item}
            className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center transition-all duration-300 hover:bg-white hover:border-black hover:-translate-y-1 hover:shadow-xl group"
          >
            <div className="p-3 rounded-xl bg-white border border-gray-100 group-hover:bg-black group-hover:text-white transition-colors duration-300 mb-4">
              <Briefcase className="w-6 h-6" strokeWidth={1.5} />
            </div>
            <h3 className="text-md font-bold tracking-wide uppercase mb-2">
              Projects
            </h3>
            <p className="text-gray-500 font-thai text-xs leading-relaxed">
              พัฒนาโปรเจกต์ส่วนตัวและใช้งานจริงมากกว่า 3 ผลงาน
            </p>
          </motion.div>
        </motion.div>

        
        <motion.div
          className="w-full text-center"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
        >
          <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-gray-400 mb-6">
            Tools
          </h3>

          <motion.div
            className="flex gap-4 flex-wrap justify-center items-center"
            variants={container}
          >
            {[
              {
                src: "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg",
                alt: "VS Code",
              },

              {
                src: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
                alt: "Node.js",
              },
              {
                src: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
                alt: "Figma",
              },
              {
                src: "https://www.vectorlogo.zone/logos/mongodb/mongodb-icon.svg",
                alt: "MongoDB",
              },
              {
                src: "https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg",
                alt: "MySQL",
              },
            ].map((tool, index) => (
              <motion.img
                key={index}
                src={tool.src}
                alt={tool.alt}
                className="w-12 h-12 border border-gray-200 bg-white rounded-xl p-2.5 shadow-sm grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                variants={item}
                whileHover={{
                  scale: 1.15,
                  y: -4,
                  transition: { type: "spring", stiffness: 400, damping: 15 },
                }}
                whileTap={{ scale: 0.95 }}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
