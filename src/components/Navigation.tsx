import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/skills', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/certificates', label: 'Certificates' }
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A1F]/80 backdrop-blur-md border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <Link 
            to="/"
            className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500"
          >
            AP
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive(item.path)
                      ? 'bg-indigo-500/20 text-indigo-400 font-medium'
                      : 'text-gray-400 hover:text-indigo-400 hover:bg-indigo-500/10'
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-400 hover:text-indigo-400 transition-colors p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0A0A1F]/95 border-b border-gray-800"
          >
            <div className="container mx-auto px-4 py-4">
              <ul className="flex flex-col space-y-2">
                {navItems.map((item) => (
                  <motion.li
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-4 py-3 rounded-lg transition-all duration-300 ${
                        isActive(item.path)
                          ? 'bg-indigo-500/20 text-indigo-400 font-medium'
                          : 'text-gray-400 hover:text-indigo-400 hover:bg-indigo-500/10'
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation; 