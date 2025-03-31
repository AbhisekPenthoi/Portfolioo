import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

interface Point {
  x: number;
  y: number;
}

const MouseTrail = () => {
  const [points, setPoints] = useState<Point[]>([]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 700 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      setPoints(prev => {
        const newPoints = [...prev, { x: e.clientX, y: e.clientY }];
        if (newPoints.length > 5) newPoints.shift();
        return newPoints;
      });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {/* Main cursor */}
      <motion.div
        className="w-6 h-6 bg-indigo-500/30 rounded-full fixed blur-sm"
        style={{
          x: springX,
          y: springY,
          translateX: '-50%',
          translateY: '-50%'
        }}
      />

      {/* Trail points */}
      {points.map((point, i) => (
        <motion.div
          key={i}
          className="w-2 h-2 bg-indigo-400/20 rounded-full fixed blur-sm"
          initial={{ x: point.x, y: point.y, scale: 1, opacity: 0.7 }}
          animate={{ scale: 0, opacity: 0 }}
          transition={{ duration: 1 }}
          style={{
            x: point.x,
            y: point.y,
            translateX: '-50%',
            translateY: '-50%'
          }}
        />
      ))}
    </div>
  );
};

export default MouseTrail; 