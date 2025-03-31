import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const Contact = () => {
  return (
    <section className="py-20 bg-gray-800" id="contact">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-8">Get In Touch</h2>
          <p className="text-gray-300 text-lg mb-12">
            I'm always open to new opportunities and collaborations.
            Feel free to reach out!
          </p>

          <div className="flex justify-center gap-8 mb-12">
            {[
              { Icon: Mail, href: 'mailto:your.email@example.com' },
              { Icon: Github, href: 'https://github.com/yourusername' },
              { Icon: Linkedin, href: 'https://linkedin.com/in/yourusername' },
              { Icon: Twitter, href: 'https://twitter.com/yourusername' },
            ].map(({ Icon, href }, index) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:text-indigo-400 hover:bg-gray-600 transition-colors"
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-indigo-600 text-white rounded-full text-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Send Message
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;