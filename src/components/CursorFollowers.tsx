import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorFollowers = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Debounce the mouse movement for better performance
    let timeoutId: number;
    const updateMousePosition = (e: MouseEvent) => {
      if (timeoutId) {
        cancelAnimationFrame(timeoutId);
      }
      timeoutId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      if (timeoutId) {
        cancelAnimationFrame(timeoutId);
      }
    };
  }, []);

  if (!isClient) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-10">
      {/* Reduce number of followers from 5 to 3 */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed rounded-full bg-gradient-to-r from-indigo-500/30 via-purple-500/30 to-pink-500/30 backdrop-blur-sm"
          animate={{
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
          }}
          transition={{
            type: "spring",
            stiffness: 150 - i * 30,
            damping: 15,
            mass: 0.5 + i * 0.3,
          }}
          style={{
            width: `${32 - i * 4}px`,
            height: `${32 - i * 4}px`,
            opacity: 0.6 - i * 0.15,
          }}
        />
      ))}
      
      {/* Simplified glowing ring */}
      <motion.div
        className="fixed w-48 h-48 rounded-full border-2 border-indigo-500/20"
        animate={{
          x: mousePosition.x - 96,
          y: mousePosition.y - 96,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
      />
    </div>
  );
};

export default CursorFollowers;