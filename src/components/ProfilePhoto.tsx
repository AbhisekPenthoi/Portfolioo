import React from 'react';
import { motion } from 'framer-motion';

const ProfilePhoto = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 125,
        delay: 0.1,
        duration: 0.7
      }}
      className="relative group"
    >
      {/* Decorative ring */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
      
      {/* Profile photo container */}
      <div className="relative">
        <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-white/10">
          <img
            src="/profile.jpg"
            alt="Abhisek Penthoi"
            className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
          />
        </div>
        
        {/* Decorative elements */}
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
      </div>
    </motion.div>
  );
};

export default ProfilePhoto;