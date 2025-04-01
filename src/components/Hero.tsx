import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Code2, Database, Server, Mail, MapPin, Download } from 'lucide-react';
import ProfilePhoto from './ProfilePhoto';
import TechStack from './TechStack';
import SocialLinks from './SocialLinks';

const Hero = () => {
  const navigate = useNavigate();

  const goToProjects = () => {
    navigate('/projects');
  };

  const downloadCV = () => {
    window.open('https://drive.google.com/file/d/1hR6onD4yipxN_mpeh5jnwRwq8iq4dI8h/view?usp=sharing', '_blank');
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16 sm:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
              <ProfilePhoto />
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6 sm:mb-8"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl text-indigo-400 font-medium mb-2">
              👋 Hello, I'm
            </h2>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 animate-[neon-pulse_1.5s_ease-in-out_infinite]">
              Abhisek Penthoi
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 sm:mb-6">
              MERN Stack Developer
            </p>
            
            <div className="flex flex-col items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex items-center gap-2 text-gray-400 text-sm sm:text-base"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                <a href="mailto:abhisekpenthoi@gmail.com" className="hover:text-indigo-400 transition-colors">
                  abhisekpenthoi@gmail.com
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-2 text-gray-400 text-sm sm:text-base"
              >
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>Bhubaneswar, India</span>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="max-w-2xl mx-auto text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 px-4"
            >
              A passionate Full Stack Developer specializing in MERN stack development.
              I create scalable web applications with modern technologies and best practices.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center mb-8 sm:mb-12"
          >
            <SocialLinks />
          </motion.div>

          <div className="flex justify-center gap-4 sm:gap-8 mb-8 sm:mb-12">
            {[
              { Icon: Code2, text: 'Frontend' },
              { Icon: Server, text: 'Backend' },
              { Icon: Database, text: 'Database' },
            ].map(({ Icon, text }, index) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                className="flex flex-col items-center"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-indigo-600/20 flex items-center justify-center mb-2 sm:mb-3">
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-400" />
                </div>
                <span className="text-gray-300 text-sm sm:text-base">{text}</span>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8 sm:mb-12">
            <motion.button
              onClick={goToProjects}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 overflow-hidden text-sm sm:text-base font-semibold rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 text-white transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_0_40px_8px_rgba(79,70,229,0.3)]"
            >
              <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease" />
              <span className="relative flex items-center gap-2">
                View My Work
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  animate={{
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </motion.svg>
              </span>
            </motion.button>

            <motion.button
              onClick={downloadCV}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 overflow-hidden text-sm sm:text-base font-semibold rounded-full border-2 border-indigo-500 text-indigo-400 transition-all duration-300 ease-out hover:bg-indigo-500/10"
            >
              <span className="relative flex items-center gap-2">
                <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                Download CV
              </span>
            </motion.button>
          </div>
        </motion.div>

        <div className="mt-8 sm:mt-12">
          <TechStack />
        </div>
      </div>
    </div>
  );
};

export default Hero;