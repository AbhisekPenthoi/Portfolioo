import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-800" id="about">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-8">About Me</h2>
          <div className="bg-gray-700/50 p-8 rounded-2xl backdrop-blur-sm">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm a passionate MERN Stack Developer with expertise in building modern web applications. 
              My journey in web development has equipped me with a strong foundation in MongoDB, Express.js, 
              React.js, and Node.js.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I love creating intuitive user interfaces and robust backend systems that deliver exceptional 
              user experiences. When I'm not coding, I'm constantly learning new technologies and best practices 
              to stay at the forefront of web development.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {['MongoDB', 'Express.js', 'React.js', 'Node.js'].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-700/30 p-4 rounded-xl"
              >
                <h3 className="text-indigo-400 font-semibold">{tech}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;