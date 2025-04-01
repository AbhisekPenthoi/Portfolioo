import React, { useEffect, useState } from 'react';
import { useScroll, useSpring, motion, useTransform, useReducedMotion } from 'framer-motion';

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // Optimize spring animation for mobile
  const springConfig = isMobile ? {
    damping: 30,
    stiffness: 300,
    mass: 0.8
  } : {
    damping: 50,
    stiffness: 400,
    mass: 0.5
  };

  const smoothProgress = useSpring(scrollYProgress, springConfig);

  // Reduced parallax effect for mobile
  const backgroundY = useTransform(
    smoothProgress,
    [0, 1],
    ['0%', isMobile ? '10%' : '20%']
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    // Smooth scroll behavior for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href');
        if (targetId && targetId !== '#') {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            const offset = isMobile ? 60 : 80; // Reduced offset for mobile
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
              top: offsetPosition,
              behavior: shouldReduceMotion ? 'auto' : 'smooth'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [isMobile, shouldReduceMotion]);

  return (
    <>
      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 origin-left z-50"
        style={{ scaleX: smoothProgress }}
      />

      {/* Background parallax effect */}
      <motion.div
        className="fixed inset-0 z-0"
        style={{ y: shouldReduceMotion ? 0 : backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-blue-900/20 opacity-50" />
      </motion.div>

      {/* Main content */}
      <motion.div
        style={{
          position: 'relative',
          zIndex: 1,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};

export default SmoothScroll; 