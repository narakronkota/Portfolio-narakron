import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Employee Contact Management System (Full-Stack)",
    subtitle: "Employee Contact Management System",
    description:
      "ระบบบริหารจัดการข้อมูลและเงินเดือนพนักงานแบบ Full-Stack บนระบบ Cloud รองรับการทำงานผ่าน Admin Dashboard แสดงผลแบบ Real-time พร้อมระบบ Authentication และจัดการข้อมูลพนักงานแบบ CRUD สมบูรณ์แบบ",
    tags: [
      "React",
      "MySQL",
      "Tailwind CSS",
      "JWT Authentication",
      "Node.js & Express.js",
      "Cloudinary",
      "DBeaver",
      "Aiven",
      "Vercel",
    ],
    link: "https://staff-management-system-omega.vercel.app",
    image:
      "https://res.cloudinary.com/dyiksnmcb/image/upload/v1780830620/Screenshot_2026-06-07_180940_aede7w.png",
    github: "https://github.com/narakronkota/emolyee-contact",
  },
  {
    id: 2,
    title: "Blog Website",
    subtitle: "Blog Website",
    description:
      "ระบบบล็อกและจัดการเนื้อหาเว็บแอปพลิเคชันแบบ Full-Stack ที่สมบูรณ์แบบ รองรับการบริหารจัดการบทความ (CRUD) เต็มรูปแบบ ปลอดภัยด้วยระบบ Authentication ผ่าน JWT พร้อมเพิ่มระบบ Authorization จำกัดสิทธิ์ให้เฉพาะบัญชีผู้ดูแลระบบ (Admin) ที่กำหนดเท่านั้น จึงจะสามารถอัปโหลดและจัดการไฟล์รูปภาพผ่าน Cloudinary ได้ โดยจัดเก็บข้อมูลทั้งหมดอย่างมีประสิทธิภาพบน MongoDB",
    tags: [
      "Next.js",
      "JavaScript",
      "Cloudinary",
      "Tailwind CSS",
      "JWT Authentication",
      "MongoDB",
      "Node.js & Express.js",
      "Vercel",
    ],
    image:
      "https://res.cloudinary.com/dyiksnmcb/image/upload/v1780501906/Screenshot_2026-06-03_225133_lboexf.png",
    link: "https://my-blog-sand-phi.vercel.app",
    github:
      "https://github.com/narakronkota/https---github.com-narakronkota-my-blog",
  },
  {
    id: 3,
    title: "Personal Portfolio Website",
    subtitle: "Frontend Web App",
    description:
      "ระบบเว็บไซต์พอร์ตโฟลิโอส่วนตัวแบบ Responsive ดีไซน์สะอาดตาและใช้งานง่าย สำหรับรวบรวมผลงาน แสดงทักษะความสามารถทางเทคนิค และช่องทางการติดต่อ ",
    tags: [
      "React",
      "Tailwind CSS",
      "Framer Motion",
      "Responsive Design",
      "Lucide Icons",
      "React Icons",
      "Vercel",
    ],
    image:
      "https://res.cloudinary.com/dyiksnmcb/image/upload/v1780830871/Screenshot_2026-06-07_181419_wwdmds.png",
    link: "#https://portfolio-narakron-qflq.vercel.app",
    github: "https://github.com/narakronkota/Portfolio-narakron",
  },
];

const Projects = () => {
  const [expandedProjects, setExpandedProjects] = useState({});

  const toggleExpand = (id) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-gray-400 block mb-3">
            my project
          </span>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight uppercase">
            MY Project
          </h1>
          <div className="w-12 h-[2px] bg-black mx-auto mt-4"></div>
        </motion.div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
          {projects.map((project, index) => {
            const isExpanded = expandedProjects[project.id];

            return (
              <motion.div
                key={project.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transform hover:-translate-y-2 hover:scale-105 transition duration-300 flex flex-col overflow-hidden h-full"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
              >
                <div className="w-full h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 flex flex-col flex-grow justify-between">
                  <div>
                    {/* Subtitle + GitHub */}
                    <div className="flex justify-between items-center">
                      <p className="text-sm text-gray-500 truncate mr-2">
                        {project.subtitle}
                      </p>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-black transition flex-shrink-0"
                      >
                        <FaGithub size={20} />
                      </a>
                    </div>

                    <h3 className="text-xl text-gray-900 dark:text-white mt-1 min-h-[56px] line-clamp-2">
                      {project.title}
                    </h3>

                    <div className="flex flex-wrap gap-2 mt-3 min-h-[110px] content-start">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 bg-gray-100 text-gray-700 font-thai rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    
                    <div className="mt-4">
                      <p
                        className={`text-gray-600 font-thai text-sm transition-all duration-300 ${
                          isExpanded ? "" : "line-clamp-4"
                        }`}
                      >
                        {project.description}
                      </p>

                      {project.description.length > 150 && (
                        <button
                          onClick={() => toggleExpand(project.id)}
                          className="text-xs font-thai text-gray-800 hover:text-black mt-1 underline block focus:outline-none"
                        >
                          {isExpanded ? "" : "... อ่านเพิ่มเติม"}
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="mt-6">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 block w-full text-center py-3 border border-gray-200 text-gray-800 text-sm font-semibold rounded-xl hover:bg-gray-800 hover:text-white hover:border-black transition duration-200"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
