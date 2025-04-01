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
  rotation: number;
  opacity: number;
  floatRange: number;
}

const TechParticles = () => {
  const [particles, setParticles] = useState<TechParticle[]>([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const techIcons = [
    SiReact, SiNodedotjs, SiMongodb, SiExpress,
    SiTypescript, SiJavascript, SiTailwindcss, SiRedux,
    SiGit, SiDocker, SiPython, SiHtml5,
    SiCss3, SiFirebase, SiPostgresql, SiAmazon
  ];

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const newIsMobile = width <= 768;
      
      if (newIsMobile !== isMobile) {
        setIsMobile(newIsMobile);
        createParticles(newIsMobile);
      }
    };

    const createParticles = (mobile: boolean) => {
      const newParticles: TechParticle[] = [];
      
      // Adjusted number of particles for better visibility
      const numParticles = mobile ? 12 : 20;
      
      // Significantly increased sizes for better visibility
      const maxSize = mobile ? 32 : 40;
      const minSize = mobile ? 24 : 32;

      for (let i = 0; i < numParticles; i++) {
        // Ensure even distribution across the screen with more spacing
        const x = Math.random() * 80 + 10; // Keep within 10-90% range for better spacing
        const y = Math.random() * 80 + 10; // Keep within 10-90% range for better spacing
        
        // Increased floating range for more noticeable movement
        const floatRange = Math.random() * 15 + 10; // 10-25% range of movement

        newParticles.push({
          Icon: techIcons[Math.floor(Math.random() * techIcons.length)],
          x,
          y,
          size: Math.random() * (maxSize - minSize) + minSize,
          duration: Math.random() * 4 + 8, // 8-12s duration for smoother movement
          delay: Math.random() * -4, // Varied delays
          rotation: Math.random() * 360 - 180, // -180 to 180 degrees for more dynamic rotation
          opacity: mobile ? 0.4 : 0.5, // Increased base opacity
          floatRange
        });
      }

      setParticles(newParticles);
    };

    createParticles(isMobile);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);

  return (
    <div className="fixed inset-0 pointer-events-none z-[2]">
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute transition-all duration-300"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            fontSize: particle.size,
            opacity: particle.opacity,
            filter: 'drop-shadow(0 0 8px rgba(99, 102, 241, 0.3))' // Added subtle glow effect
          }}
          animate={{
            y: [
              `${particle.y}%`,
              `${particle.y + particle.floatRange}%`,
              `${particle.y}%`
            ],
            x: [
              `${particle.x}%`,
              `${particle.x + (particle.floatRange / 2)}%`,
              `${particle.x}%`
            ],
            rotate: [-particle.rotation/2, particle.rotation/2, -particle.rotation/2]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
            times: [0, 0.5, 1]
          }}
          whileHover={{
            opacity: 0.9,
            scale: 1.3,
            filter: 'drop-shadow(0 0 12px rgba(99, 102, 241, 0.5))',
            transition: { duration: 0.3 }
          }}
        >
          <particle.Icon 
            className="text-indigo-400 transform-gpu hover:text-indigo-300 transition-colors duration-300"
            style={{
              filter: 'brightness(1.2)' // Make icons slightly brighter
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default TechParticles; 