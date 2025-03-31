import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-[#0A0A1F] z-50 flex items-center justify-center">
      <div className="relative">
        {/* Animated circles */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 border-2 border-indigo-500 rounded-full"
            initial={{ scale: 1, opacity: 0.25 }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.25, 0.5, 0.25],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut"
            }}
          />
        ))}
        
        {/* Center logo/text */}
        <motion.div
          className="relative w-16 h-16 flex items-center justify-center"
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
            <span className="text-xl font-bold text-white">AP</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingScreen; 