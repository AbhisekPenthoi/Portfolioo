import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaReact, FaNodeJs, FaGitAlt, FaDocker, FaAws,
  FaPython, FaJs, FaCode, FaDatabase, FaTools
} from 'react-icons/fa';
import { 
  SiTypescript, SiTailwindcss, SiExpress, 
  SiMongodb, SiCplusplus, SiRedux, SiFirebase,
  SiPostgresql, SiGithub, SiPostman
} from 'react-icons/si';
import ScrollReveal from '../components/ScrollReveal';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      description: "Creating responsive and interactive user interfaces",
      skills: [
        { name: "React", icon: <FaReact className="text-[#61DAFB]" />, level: 90 },
        { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" />, level: 85 },
        { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" />, level: 90 },
        { name: "TailwindCSS", icon: <SiTailwindcss className="text-[#38B2AC]" />, level: 88 },
        { name: "Redux", icon: <SiRedux className="text-[#764ABC]" />, level: 85 }
      ]
    },
    {
      title: "Backend Development",
      description: "Building robust and scalable server-side applications",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" />, level: 88 },
        { name: "Express.js", icon: <SiExpress className="text-white" />, level: 85 },
        { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" />, level: 82 },
        { name: "Python", icon: <FaPython className="text-[#3776AB]" />, level: 80 },
        { name: "C++", icon: <SiCplusplus className="text-[#00599C]" />, level: 75 }
      ]
    },
    {
      title: "Database & Tools",
      description: "Managing data and development workflow",
      skills: [
        { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" />, level: 80 },
        { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" />, level: 85 },
        { name: "Git", icon: <FaGitAlt className="text-[#F05032]" />, level: 88 },
        { name: "Docker", icon: <FaDocker className="text-[#2496ED]" />, level: 78 },
        { name: "AWS", icon: <FaAws className="text-[#FF9900]" />, level: 75 }
      ]
    },
    {
      title: "Development Tools",
      description: "Tools and utilities for efficient development",
      skills: [
        { name: "VS Code", icon: <FaCode className="text-[#007ACC]" />, level: 90 },
        { name: "GitHub", icon: <SiGithub className="text-white" />, level: 88 },
        { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" />, level: 85 }
      ]
    }
  ];

  return (
    <div className="min-h-screen w-full bg-[#0A0A1F] py-12 px-4 sm:px-6">
      <motion.div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <motion.h1 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              Technical Expertise
            </span>
          </motion.h1>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <motion.p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto text-lg">
            A comprehensive overview of my technical skills and proficiency levels
          </motion.p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <ScrollReveal
              key={category.title}
              direction={idx % 2 === 0 ? 'left' : 'right'}
              delay={0.1 * idx}
            >
              <motion.div className="bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-800 hover:border-indigo-500/50 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl text-indigo-400">
                    {idx === 0 ? <FaCode /> : idx === 1 ? <FaDatabase /> : <FaTools />}
                  </span>
                  <div>
                    <h2 className="text-xl font-semibold text-white">{category.title}</h2>
                    <p className="text-sm text-gray-400">{category.description}</p>
                  </div>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="relative">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xl">{skill.icon}</span>
                          <span className="text-gray-300">{skill.name}</span>
                        </div>
                        <span className="text-sm text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: 0.2 }}
                          className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Skills; 