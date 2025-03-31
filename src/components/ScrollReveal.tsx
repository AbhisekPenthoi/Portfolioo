import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ScrollRevealProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  className?: string;
}

const ScrollReveal = ({
  children,
  direction = 'up',
  delay = 0,
  className = ''
}: ScrollRevealProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 50 };
      case 'down':
        return { opacity: 0, y: -50 };
      case 'left':
        return { opacity: 0, x: 50 };
      case 'right':
        return { opacity: 0, x: -50 };
      default:
        return { opacity: 0, y: 50 };
    }
  };

  const getFinalPosition = () => {
    switch (direction) {
      case 'up':
      case 'down':
        return { opacity: 1, y: 0 };
      case 'left':
      case 'right':
        return { opacity: 1, x: 0 };
      default:
        return { opacity: 1, y: 0 };
    }
  };

  useEffect(() => {
    if (inView) {
      controls.start(getFinalPosition());
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={getInitialPosition()}
      animate={controls}
      transition={{
        type: 'spring',
        damping: 25,
        stiffness: 100,
        delay,
        duration: 0.6
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal; 