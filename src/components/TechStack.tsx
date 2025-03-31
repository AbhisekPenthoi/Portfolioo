import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, SiNodedotjs, SiMongodb, SiExpress,
  SiTypescript, SiJavascript, SiTailwindcss, SiRedux,
  SiGit, SiDocker, SiPython,
  SiHtml5, SiCss3, SiFirebase, SiPostgresql,
  SiAmazon
} from 'react-icons/si';

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
    <div className="w-full py-12 overflow-hidden bg-gradient-to-b from-gray-900/50 to-gray-900/30 backdrop-blur-sm">
      <h2 className="text-3xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
        Tech Stack
      </h2>
      
      <div className="relative flex flex-col gap-8">
        {/* First row - sliding left */}
        <div className="flex">
          <div className="flex animate-slide">
            {duplicatedTech.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex flex-col items-center justify-center mx-8 group"
              >
                <tech.icon className="w-12 h-12 text-gray-400 transition-colors duration-300 group-hover:text-indigo-500" />
                <span className="mt-2 text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Second row - sliding right */}
        <div className="flex">
          <div className="flex animate-slide-reverse">
            {duplicatedTech.slice().reverse().map((tech, index) => (
              <div
                key={`${tech.name}-reverse-${index}`}
                className="flex flex-col items-center justify-center mx-8 group"
              >
                <tech.icon className="w-12 h-12 text-gray-400 transition-colors duration-300 group-hover:text-indigo-500" />
                <span className="mt-2 text-sm text-gray-400 group-hover:text-white transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;