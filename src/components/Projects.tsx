import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Github, ExternalLink } from 'lucide-react';
import GitHubProjects from './GitHubProjects';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack MERN application with authentication, payment integration, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
      tags: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      github: 'https://github.com/abhisekpenthoi/ecommerce-platform',
      demo: 'https://ecommerce-platform-demo.netlify.app'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Real-time social media analytics dashboard with WebSocket integration.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
      tags: ['React', 'Node.js', 'Socket.io', 'Charts.js'],
      github: 'https://github.com/abhisekpenthoi/social-dashboard',
      demo: 'https://social-dashboard-demo.netlify.app'
    },
    {
      title: 'Task Management System',
      description: 'Collaborative task management platform with real-time updates.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
      tags: ['MERN Stack', 'Redux', 'WebSocket'],
      github: 'https://github.com/abhisekpenthoi/task-manager',
      demo: 'https://task-manager-demo.netlify.app'
    },
  ];

  return (
    <section className="py-20 bg-gray-900" id="projects">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-white text-center mb-12">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
              >
                <div className="relative h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-indigo-600/20 text-indigo-400 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <Github className="w-6 h-6" />
                    </a>
                    <a 
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-20">
            <GitHubProjects />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;