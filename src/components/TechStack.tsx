import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, SiNodedotjs, SiMongodb, SiExpress,
  SiTypescript, SiJavascript, SiTailwindcss, SiRedux,
  SiGit, SiDocker, SiPython, SiHtml5,
  SiCss3, SiFirebase, SiPostgresql, SiAmazon
} from 'react-icons/si';
import CodeBackground from './CodeBackground';

const technologies = [
  { icon: SiReact, name: 'React' },
  { icon: SiNodedotjs, name: 'Node.js' },
  { icon: SiMongodb, name: 'MongoDB' },
  { icon: SiExpress, name: 'Express' },
  { icon: SiTypescript, name: 'TypeScript' },
  { icon: SiJavascript, name: 'JavaScript' },
  { icon: SiTailwindcss, name: 'Tailwind' },
  { icon: SiRedux, name: 'Redux' },
  { icon: SiGit, name: 'Git' },
  { icon: SiDocker, name: 'Docker' },
  { icon: SiAmazon, name: 'AWS' },
  { icon: SiPython, name: 'Python' },
  { icon: SiHtml5, name: 'HTML5' },
  { icon: SiCss3, name: 'CSS3' },
  { icon: SiFirebase, name: 'Firebase' },
  { icon: SiPostgresql, name: 'PostgreSQL' }
];

const duplicatedTech = [...technologies, ...technologies];

const TechStack = () => {
  return (
    <div className="relative w-full py-16 overflow-hidden">
      {/* Background with blur effect */}
      <div className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm" />
      
      {/* Code Background */}
      <CodeBackground />

      {/* Content */}
      <div className="relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"
        >
          Tech Stack
        </motion.h2>
        
        <div className="relative flex flex-col gap-12">
          {/* First row - sliding left */}
          <div className="flex overflow-hidden">
            <div className="flex animate-slide">
              {duplicatedTech.map((tech, index) => (
                <motion.div
                  key={`${tech.name}-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex flex-col items-center justify-center mx-8 group"
                >
                  <div className="relative p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm group-hover:bg-gray-800/80 transition-all duration-300">
                    <tech.icon className="w-12 h-12 text-gray-400 transition-colors duration-300 group-hover:text-indigo-400" />
                  </div>
                  <span className="mt-3 text-sm text-gray-400 font-medium group-hover:text-indigo-400 transition-colors duration-300">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Second row - sliding right */}
          <div className="flex overflow-hidden">
            <div className="flex animate-slide-reverse">
              {duplicatedTech.slice().reverse().map((tech, index) => (
                <motion.div
                  key={`${tech.name}-reverse-${index}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex flex-col items-center justify-center mx-8 group"
                >
                  <div className="relative p-4 rounded-xl bg-gray-800/50 backdrop-blur-sm group-hover:bg-gray-800/80 transition-all duration-300">
                    <tech.icon className="w-12 h-12 text-gray-400 transition-colors duration-300 group-hover:text-indigo-400" />
                  </div>
                  <span className="mt-3 text-sm text-gray-400 font-medium group-hover:text-indigo-400 transition-colors duration-300">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none" />
    </div>
  );
};

export default TechStack;