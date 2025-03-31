import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaSearch, FaTimes } from 'react-icons/fa';

interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  completedAt: string;
}

const Projects = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      title: "PlantCare - Plant Disease Detection App",
      description: "An Android application built with Kotlin that uses machine learning to detect plant diseases from images. Features include real-time detection, comprehensive disease library, and detailed treatment information.",
      image: "/projects/plant-care.jpg",
      tags: ["Kotlin", "Android", "TensorFlow Lite", "Machine Learning", "Material Design"],
      liveUrl: "",
      githubUrl: "https://github.com/AbhisekPenthoi/PlantCare",
      featured: true,
      completedAt: "2024-01"
    },
    {
      title: "Plant Disease Classification ML Model",
      description: "A machine learning model for detecting and classifying plant diseases from images. Built with Python, PyTorch, and includes a GUI interface for easy disease diagnosis.",
      image: "/projects/plant-disease.png",
      tags: ["Python", "PyTorch", "Machine Learning", "Computer Vision", "GUI"],
      liveUrl: "",
      githubUrl: "https://github.com/AbhisekPenthoi/ML-model-disease-classification",
      featured: true,
      completedAt: "2024-01"
    },
    {
      title: "Netflix UI Clone",
      description: "A pixel-perfect Netflix landing page clone featuring responsive design, custom animations, and an interactive FAQ section. Built with pure HTML and CSS demonstrating advanced layout and styling techniques.",
      image: "/projects/netflix-clone.png",
      tags: ["HTML5", "CSS3", "Responsive Design", "CSS Grid", "CSS Animations"],
      liveUrl: "https://abhisekpenthoi.github.io/Netflix-UI-Clone/",
      githubUrl: "https://github.com/AbhisekPenthoi/Netflix-UI-Clone",
      featured: true,
      completedAt: "2024-02"
    },
    {
      title: "Simon Says Game",
      description: "A classic memory game built with vanilla JavaScript. Features include progressive difficulty, audio feedback, dynamic scoring, and engaging animations. Test your memory with increasingly complex patterns.",
      image: "/projects/simon-says.png",
      tags: ["JavaScript", "CSS3", "HTML5", "Web Audio API", "Game Development"],
      liveUrl: "https://abhisekpenthoi.github.io/Simon-Says-Game/",
      githubUrl: "https://github.com/AbhisekPenthoi/Simon-Says-Game",
      featured: true,
      completedAt: "2024-02"
    },
    {
      title: "Weather Dashboard",
      description: "A real-time weather monitoring application built with vanilla JavaScript. Features include current weather conditions, location search, temperature display, and dynamic weather icons. Uses OpenWeather API for accurate weather data.",
      image: "/projects/weather-app.png",
      tags: ["JavaScript", "CSS3", "HTML5", "Weather API", "Responsive Design"],
      liveUrl: "https://abhisekpenthoi.github.io/Weather-APP/",
      githubUrl: "https://github.com/AbhisekPenthoi/Weather-APP",
      featured: true,
      completedAt: "2024-03"
    }
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesSearch;
    });
  }, [searchQuery, projects]);

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
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <motion.h1
            className="text-5xl sm:text-6xl font-bold text-white mb-6"
            whileHover={{ scale: 1.02 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              Featured Projects
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Showcasing my journey through code with projects that demonstrate my expertise in development
          </motion.p>
        </motion.div>

        {/* Search Section */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="relative">
            <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects by name, description, or technology..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-indigo-400 transition-colors"
              >
                <FaTimes />
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
                onClick={() => setActiveProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Project Modal */}
        <AnimatePresence>
          {activeProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveProject(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-gray-900/90 backdrop-blur-sm rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="relative">
                  <img
                    src={activeProject.image}
                    alt={activeProject.title}
                    className="w-full h-64 object-cover rounded-xl mb-6"
                  />
                  <button
                    onClick={() => setActiveProject(null)}
                    className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <FaTimes />
                  </button>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">{activeProject.title}</h3>
                <p className="text-gray-300 mb-6">{activeProject.description}</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {activeProject.tags.map((tag, idx) => (
                    <div
                      key={idx}
                      className="bg-indigo-500/10 px-3 py-1 rounded-full text-sm text-indigo-300"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
                  >
                    <FaGithub /> View Source
                  </a>
                  {activeProject.liveUrl && (
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 border border-indigo-500 text-indigo-400 rounded-lg hover:bg-indigo-500/10 transition-colors"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

const ProjectCard = ({ project, index, onClick }: ProjectCardProps) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    onClick={onClick}
    className="group relative bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden cursor-pointer"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    
    {/* Project Image */}
    <div className="relative h-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10" />
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <span className="text-white text-lg font-medium">Click to View Details</span>
      </div>
    </div>

    {/* Project Content */}
    <div className="relative z-20 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300">
          {project.title}
        </h3>
        <div className="flex gap-3">
          <a
            href={project.githubUrl}
            className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
          >
            <FaGithub className="text-xl" />
          </a>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              className="text-gray-400 hover:text-indigo-400 transition-colors duration-300"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
            >
              <FaExternalLinkAlt className="text-lg" />
            </a>
          )}
        </div>
      </div>

      <p className="text-gray-300 mb-6 line-clamp-2">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap gap-3">
        {project.tags.slice(0, 3).map((tag, idx) => (
          <div
            key={idx}
            className="bg-indigo-500/10 px-3 py-1 rounded-full text-sm text-indigo-300"
          >
            {tag}
          </div>
        ))}
        {project.tags.length > 3 && (
          <div className="bg-indigo-500/10 px-3 py-1 rounded-full text-sm text-indigo-300">
            +{project.tags.length - 3} more
          </div>
        )}
      </div>
    </div>
  </motion.div>
);

export default Projects; 