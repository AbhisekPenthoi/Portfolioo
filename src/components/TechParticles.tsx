import React, { useEffect, useState, useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
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
  const shouldReduceMotion = useReducedMotion();

  const techIcons = [
    SiReact, SiNodedotjs, SiMongodb, SiExpress,
    SiTypescript, SiJavascript, SiTailwindcss, SiRedux,
    SiGit, SiDocker, SiPython, SiHtml5,
    SiCss3, SiFirebase, SiPostgresql, SiAmazon
  ];

  const createParticles = useCallback((mobile: boolean) => {
    const newParticles: TechParticle[] = [];
    // Reduced particle count for mobile
    const numParticles = mobile ? 6 : 12;
    const maxSize = mobile ? 24 : 32;
    const minSize = mobile ? 16 : 24;
    
    // Calculate grid for better distribution
    const gridSize = Math.ceil(Math.sqrt(numParticles));
    const cellWidth = 100 / gridSize;
    const cellHeight = 100 / gridSize;

    for (let i = 0; i < numParticles; i++) {
      const row = Math.floor(i / gridSize);
      const col = i % gridSize;
      
      // Calculate base position within the cell
      const baseX = col * cellWidth;
      const baseY = row * cellHeight;
      
      // Add some randomness within the cell
      const x = baseX + (Math.random() * (cellWidth * 0.6) + cellWidth * 0.2);
      const y = baseY + (Math.random() * (cellHeight * 0.6) + cellHeight * 0.2);
      
      // Reduced float range for mobile
      const floatRange = mobile ? 5 : 8;

      newParticles.push({
        Icon: techIcons[Math.floor(Math.random() * techIcons.length)],
        x,
        y,
        size: Math.random() * (maxSize - minSize) + minSize,
        duration: mobile ? 4 + Math.random() * 2 : 6 + Math.random() * 3,
        delay: -Math.random() * 2,
        rotation: Math.random() * 90 - 45, // Reduced rotation range
        opacity: mobile ? 0.3 : 0.4,
        floatRange
      });
    }

    setParticles(newParticles);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const newIsMobile = width <= 768;
      
      if (newIsMobile !== isMobile) {
        setIsMobile(newIsMobile);
        createParticles(newIsMobile);
      }
    };

    createParticles(isMobile);
    
    const debouncedResize = debounce(handleResize, 250);
    window.addEventListener('resize', debouncedResize);
    return () => window.removeEventListener('resize', debouncedResize);
  }, [isMobile, createParticles]);

  // Debounce function to optimize resize handling
  function debounce(func: Function, wait: number) {
    let timeout: ReturnType<typeof setTimeout>;
    return function executedFunction(...args: any[]) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  return (
    <div className="fixed inset-0 pointer-events-none z-[1]">
      {particles.map((particle, index) => (
        <motion.div
          key={index}
          className="absolute transition-all duration-300 will-change-transform"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            fontSize: particle.size,
            opacity: particle.opacity,
            filter: 'drop-shadow(0 0 4px rgba(99, 102, 241, 0.2))',
            transform: 'translate3d(0,0,0)',
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden'
          }}
          animate={shouldReduceMotion ? {} : {
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
            opacity: 0.8,
            scale: 1.1,
            filter: 'drop-shadow(0 0 6px rgba(99, 102, 241, 0.3))',
            transition: { duration: 0.2 }
          }}
        >
          <particle.Icon 
            className="text-indigo-400 transform-gpu hover:text-indigo-300 transition-colors duration-200"
            style={{
              transform: 'translate3d(0,0,0)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden'
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default TechParticles; 