import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const FloatingObjects = () => {
  // Use useMemo to prevent recalculating objects on every render
  const objects = useMemo(() => 
    Array.from({ length: 12 }, (_, i) => ({  // Reduced from 20 to 12
      id: i,
      size: Math.random() * 20 + 10, // Reduced max size
      initialX: Math.random() * 100,
      initialY: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 6 + Math.random() * 4,
    }))
  , []);

  const dots = useMemo(() => 
    Array.from({ length: 15 }, (_, i) => ({  // Reduced from 30 to 15
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
    }))
  , []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {objects.map((object) => (
        <motion.div
          key={object.id}
          className="absolute rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20"
          style={{
            width: object.size,
            height: object.size,
            left: `${object.initialX}%`,
            top: `${object.initialY}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 30, 0],
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: object.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: object.delay,
          }}
        />
      ))}
      
      {dots.map((dot) => (
        <div
          key={`dot-${dot.id}`}
          className="absolute w-1 h-1 bg-indigo-400 rounded-full glow-dot"
          style={{
            left: dot.left,
            top: dot.top,
            animationDelay: dot.delay,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingObjects;