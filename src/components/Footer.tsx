import React from 'react';
import { motion } from 'framer-motion';
import SocialLinks from './SocialLinks';

const Footer = () => {
  return (
    <footer className="relative z-10 bg-gray-900/50 backdrop-blur-sm border-t border-gray-800">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-gray-400"
          >
            © {new Date().getFullYear()} Abhisek Penthoi. All rights reserved.
          </motion.p>
          
          <SocialLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer; 