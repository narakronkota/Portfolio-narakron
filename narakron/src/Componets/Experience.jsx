import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiCloudinary,
  SiVercel,
} from "react-icons/si";
import { HiOutlineCodeBracket } from "react-icons/hi2";
import { MdVerifiedUser } from "react-icons/md";


const Item = ({ name, level, icon }) => (
  <motion.div
    className="
      flex flex-col items-center text-center
      sm:flex-row sm:items-start sm:text-left
      gap-2 sm:gap-4
      w-full
    "
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <div className="text-2xl shrink-0 sm:mt-0.5">{icon}</div>

    <div>
      <p className="font-semibold text-gray-900">{name}</p>
      <p className="text-sm text-gray-500 mt-0.5">{level}</p>
    </div>
  </motion.div>
);

// Card component
const Card = ({ title, items }) => (
  <motion.div
    className="
      rounded-[28px]
      border border-gray-200
      bg-gradient-to-b from-white to-gray-50/60
      shadow-sm
      p-6 sm:p-8
      transition-all duration-300
      hover:border-black/50
      hover:shadow-md
    "
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7 }}
    viewport={{ once: true }}
  >
    <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
      {title}
    </h3>

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
      {items.map((it, idx) => (
        <Item key={idx} name={it.name} level={it.level} icon={it.icon} />
      ))}
    </div>
  </motion.div>
);

export default function Experience() {
  
  const frontend = [
    { name: "HTML", level: "Experienced", icon: <FaHtml5 className="text-black" /> },
    { name: "CSS", level: "Experienced", icon: <FaCss3Alt className="text-black" /> },
    { name: "JavaScript", level: "In Progress", icon: <SiJavascript className="text-black rounded" /> },
    { name: "TypeScript", level: "In Progress", icon: <SiTypescript className="text-black" /> },
    { name: "React.js", level: "Intermediate", icon: <SiReact className="text-black" /> },
    { name: "Next.js", level: "In Progress", icon: <SiNextdotjs className="text-black dark:text-white" /> },
    { name: "TailwindCSS", level: "Intermediate", icon: <SiTailwindcss className="text-black" /> },
  ];

  const backend = [
    { name: "Node.js", level: "In Progress", icon: <SiNodedotjs className="text-black" /> },
    { name: "Express.js", level: "In Progress", icon: <SiExpress className="text-black dark:text-white" /> },
    { name: "REST API", level: "In Progress", icon: <HiOutlineCodeBracket className="text-black" /> },
    { name: "MongoDB", level: "Exploring", icon: <SiMongodb className="text-black" /> },
    { name: "MySQL", level: "Exploring", icon: <SiMysql className="text-black" /> },
    { name: "PostgreSQL", level: "Exploring", icon: <SiPostgresql className="text-black" /> },
  ];

  const toolsAndCloud = [
    { name: "Git / GitHub", level: "Exploring", icon: <SiGithub className="text-black dark:text-white" /> },
    { name: "JWT Auth", level: "Exploring", icon: <MdVerifiedUser className="text-black" /> },
    { name: "Cloudinary", level: "Learning", icon: <SiCloudinary className="text-black" /> },
    { name: "Vercel", level: "In Progress", icon: <SiVercel className="text-black dark:text-white" /> }, 
  ];

  return (
    <section className="w-full py-24 px-4 sm:px-6 bg-white text-black select-none">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-gray-400 block mb-3">
            Explore My Skills
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight uppercase">
            MY EXPERIENCE
          </h1>
          <div className="w-12 h-[2px] bg-black mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 items-start">
          <Card title="Frontend Development" items={frontend} />
          <Card title="Backend Development" items={backend} />
          <Card title="Tools & Cloud Services" items={toolsAndCloud} />
        </div>
      </div>
    </section>
  );
}
