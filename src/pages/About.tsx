import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaServer, FaTools, FaLightbulb, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const About = () => {
  return (
    <div className="min-h-screen w-full bg-[#0A0A1F] overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-600/10 via-blue-600/5 to-indigo-600/10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-600/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl" />

      <div className="relative container mx-auto px-4 sm:px-6 py-16">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <motion.h1 
            className="text-5xl sm:text-6xl font-bold text-white mb-6"
            whileHover={{ scale: 1.02 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              About Me
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            A passionate MERN stack developer crafting digital experiences 
            that combine innovation with excellence.
          </motion.p>
          
          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex justify-center gap-6 mt-8"
          >
            {[
              { icon: <FaGithub />, link: "#" },
              { icon: <FaLinkedin />, link: "#" },
              { icon: <FaTwitter />, link: "#" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                className="text-2xl text-gray-400 hover:text-indigo-400 transition-colors duration-300"
              >
                {social.icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto">
          {/* Profile Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-24">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-2/5"
            >
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
                <div className="relative aspect-[3/4] w-full">
                  <img
                    src="/images/about.jpg"
                    alt="Profile"
                    className="w-full h-full object-cover object-center rounded-2xl shadow-2xl"
                    style={{
                      imageRendering: 'crisp-edges',
                      maxWidth: '100%',
                      height: 'auto'
                    }}
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A1F]/80 to-transparent rounded-2xl" />
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-3/5"
            >
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-8">
                Turning Vision Into Reality
              </h2>
              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  With a deep passion for creating innovative web solutions, I specialize in the MERN stack
                  (MongoDB, Express.js, React, Node.js) to build powerful and scalable applications.
                </p>
                <p className="text-lg leading-relaxed">
                  My approach combines technical expertise with creative problem-solving,
                  ensuring each project not only meets but exceeds expectations.
                </p>
                <div className="flex gap-4 mt-8">
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:opacity-90 transition-opacity">
                    Download CV
                  </button>
                  <button className="px-6 py-3 border border-indigo-500 text-indigo-400 rounded-lg hover:bg-indigo-500/10 transition-colors">
                    Contact Me
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-3xl blur-3xl" />
            <div className="relative bg-gray-900/30 backdrop-blur-sm rounded-3xl border border-gray-800 p-8 sm:p-12">
              <h2 className="text-4xl font-bold text-center mb-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                  Technical Expertise
                </span>
              </h2>
              <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
                A comprehensive overview of my core technical competencies and specialized skills
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                <SkillCard
                  icon={<FaCode className="group-hover:text-blue-400 transition-colors duration-300" />}
                  title="Frontend Development"
                  skills={['React', 'JavaScript', 'TypeScript', 'TailwindCSS', 'Redux']}
                />
                <SkillCard
                  icon={<FaServer className="group-hover:text-indigo-400 transition-colors duration-300" />}
                  title="Backend Development"
                  skills={['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'GraphQL']}
                />
                <SkillCard
                  icon={<FaTools className="group-hover:text-purple-400 transition-colors duration-300" />}
                  title="Development Tools"
                  skills={['VS Code', 'Git', 'Docker', 'Webpack', 'Jest']}
                />
                <SkillCard
                  icon={<FaLightbulb className="group-hover:text-yellow-400 transition-colors duration-300" />}
                  title="Additional Skills"
                  skills={['Agile', 'AWS', 'System Design', 'CI/CD', 'Testing']}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

const SkillCard = ({ icon, title, skills }: SkillCardProps) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="group bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
  >
    <div className="text-3xl text-indigo-400 mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors duration-300">
      {title}
    </h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((skill) => (
        <span
          key={skill}
          className="bg-indigo-500/10 text-indigo-300 px-3 py-1 rounded-full text-sm hover:bg-indigo-500/20 transition-colors duration-300 cursor-default"
        >
          {skill}
        </span>
      ))}
    </div>
  </motion.div>
);

export default About; 