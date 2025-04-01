import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { 
  SiReact, SiNodedotjs, SiMongodb, SiExpress,
  SiTypescript, SiJavascript, SiTailwindcss, SiRedux,
  SiGit, SiDocker, SiPython, SiHtml5, 
  SiCss3, SiFirebase, SiPostgresql, SiAmazon
} from 'react-icons/si';
import { IconType } from 'react-icons';

interface TechParticle {
  Icon: IconType;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

const TechParticles = () => {
  const [particles, setParticles] = useState<TechParticle[]>([]);

  const techIcons = [
    SiReact, SiNodedotjs, SiMongodb, SiExpress,
    SiTypescript, SiJavascript, SiTailwindcss, SiRedux,
    SiGit, SiDocker, SiPython, SiHtml5,
    SiCss3, SiFirebase, SiPostgresql, SiAmazon
  ];

  useEffect(() => {
    const createParticles = () => {
      const newParticles: TechParticle[] = [];
      const numParticles = 20; // Number of floating icons

      for (let i = 0; i < numParticles; i++) {
        newParticles.push({
          Icon: techIcons[Math.floor(Math.random() * techIcons.length)],
          x: Math.random() * 100, // Random X position (0-100%)
          y: Math.random() * 100, // Random Y position (0-100%)
          size: Math.random() * 20 + 20, // Random size between 20-40px
          duration: Math.random() * 10 + 15, // Random duration between 15-25s
          delay: Math.random() * -20 // Random start delay
        });
      }

      setParticles(newParticles);
    };

    createParticles();
    
    // Recreate particles on window resize
    window.addEventListener('resize', createParticles);
    return () => window.removeEventListener('resize', createParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[1]">
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute opacity-20 hover:opacity-40 transition-opacity"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            fontSize: particle.size
          }}
          animate={{
            y: ['0%', '100%'],
            x: [
              `${particle.x}%`,
              `${particle.x + (Math.random() * 20 - 10)}%`
            ]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "linear",
            delay: particle.delay,
            repeatType: "reverse"
          }}
        >
          <particle.Icon className="text-indigo-400" />
        </motion.div>
      ))}
    </div>
  );
};

export default TechParticles; 