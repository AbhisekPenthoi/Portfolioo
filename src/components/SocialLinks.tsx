import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

interface SocialLinksProps {
  className?: string;
}

const SocialLinks = ({ className = "" }: SocialLinksProps) => {
  const socialLinks = [
    {
      icon: <FaGithub className="w-6 h-6" />,
      url: "https://github.com/AbhisekPenthoi",
      label: "GitHub"
    },
    {
      icon: <FaLinkedin className="w-6 h-6" />,
      url: "https://www.linkedin.com/in/abhisek-penthoi/",
      label: "LinkedIn"
    }
  ];

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socialLinks.map((social) => (
        <motion.a
          key={social.label}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          title={social.label}
        >
          {social.icon}
        </motion.a>
      ))}
    </div>
  );
};

export default SocialLinks; 