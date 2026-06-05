import React from "react";
import { BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

// Item component with animation
const Item = ({ name, level }) => (
  <motion.div
    className="
      flex flex-col items-center text-center
      sm:flex-row sm:items-start sm:text-left
      gap-2 sm:gap-3
      w-full
    "
    initial={{ opacity: 0, x: -30 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <BadgeCheck className="h-5 w-5 shrink-0 text-gray-800" strokeWidth={1.75} />

    <div>
      <p className="font-semibold text-gray-900">{name}</p>

      <p className="text-sm text-gray-500">{level}</p>
    </div>
  </motion.div>
);

// Card component with animation
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

    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 place-items-center">
      {items.map((it, idx) => (
        <Item key={idx} name={it.name} level={it.level} />
      ))}
    </div>
  </motion.div>
);

export default function Experience() {
  const frontend = [
    { name: "HTML", level: "Experienced" },
    { name: "CSS", level: "Experienced" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "React.js", level: "Intermediate" },
    { name: "Next.js", level: "Intermediate" },
    { name: "TailwindCSS", level: "Intermediate" },
  ];

  const backend = [
    { name: "Node.js", level: "Intermediate" },
    { name: "Express.js", level: "Intermediate" },
    { name: "MongoDB", level: "Intermediate" },
    { name: "MySQL", level: "Basic" },
    { name: "PostgreSQL", level: "Basic" },
    { name: "Git", level: "Intermediate" },
  ];

  return (
    <section className="w-full py-24 px-4 sm:px-6 bg-white text-black select-none">
      <div className="max-w-4xl mx-auto">
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

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <Card title="Frontend Development" items={frontend} />
          <Card title="Backend Development" items={backend} />
        </div>
      </div>
    </section>
  );
}
