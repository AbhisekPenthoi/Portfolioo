import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaExternalLinkAlt, FaTimes, FaMedal, FaCalendarAlt } from 'react-icons/fa';

interface Certificate {
  title: string;
  issuedBy: string;
  issuedDate: string;
  image: string;
  skills: string[];
  description: string;
  verificationUrl: string;
}

const Certificates = () => {
  const [activeCertificate, setActiveCertificate] = useState<Certificate | null>(null);

  const certificates: Certificate[] = [
    {
      title: "Generative AI in Action",
      issuedBy: "IBM SkillsBuild",
      issuedDate: "2025-03-28",
      image: "/certificates/ibm-generative-ai.png",
      skills: [
        "Generative AI",
        "Artificial Intelligence",
        "Machine Learning",
        "AI Applications",
        "IBM Technologies"
      ],
      description: "Successfully completed IBM's comprehensive course on Generative AI, covering practical applications and implementation of generative artificial intelligence technologies.",
      verificationUrl: "https://www.credly.com/badges/ab0e0381-8bf2-43a0-94a9-d94a5e5f6ad1"
    },
    {
      title: "AI for Entrepreneurship",
      issuedBy: "Intel & NITI Aayog",
      issuedDate: "2025-03-26",
      image: "/certificates/intel-ai-entrepreneurship.png",
      skills: [
        "Artificial Intelligence",
        "Entrepreneurship",
        "Business Innovation",
        "AI Applications",
        "Technology Strategy"
      ],
      description: "Successfully completed the micro-learning module on AI for Entrepreneurship, a collaborative program by Intel and NITI Aayog focused on applying AI in business innovation.",
      verificationUrl: ""
    },
    {
      title: "Smart India Hackathon 2024 - HACKIN'24",
      issuedBy: "Trident Academy of Technology, Bhubaneswar",
      issuedDate: "2024-08-31",
      image: "/certificates/sih-hackin24.png",
      skills: [
        "Hackathon",
        "Problem Solving",
        "Innovation",
        "Team Work",
        "Technology"
      ],
      description: "Participated in HACKIN'24, an internal hackathon conducted for Smart India Hackathon 2024, demonstrating innovation and problem-solving skills in a competitive environment.",
      verificationUrl: "f5153cff24d76c17f0ca248d2a2c560d"
    },
    {
      title: "Design and Analysis of Algorithms",
      issuedBy: "NPTEL - IIT Madras",
      issuedDate: "2024-09",
      image: "/certificates/nptel-algorithms.png",
      skills: [
        "Algorithms",
        "Data Structures",
        "Problem Solving",
        "Computational Thinking",
        "Computer Science"
      ],
      description: "Successfully completed an 8-week course on Design and Analysis of Algorithms from IIT Madras through NPTEL, achieving a consolidated score of 47% with proctored examination.",
      verificationUrl: "NPTEL24CS79S332700005"
    },
    {
      title: "Getting Started with Artificial Intelligence",
      issuedBy: "IBM SkillsBuild",
      issuedDate: "2025-02-08",
      image: "/certificates/ibm-ai-certificate.png",
      skills: [
        "Artificial Intelligence",
        "Machine Learning",
        "AI Fundamentals",
        "IBM Technologies"
      ],
      description: "Successfully completed IBM's comprehensive course on Artificial Intelligence fundamentals, covering core concepts and practical applications of AI technologies.",
      verificationUrl: "https://www.credly.com/badges/6cac108a-3aa1-4a4b-8e0f-1c1b25b7cdd6"
    },
    {
      title: "Web Development Internship",
      issuedBy: "Embrizon Technologies",
      issuedDate: "2024-08-20",
      image: "/certificates/embrizon-internship.png",
      skills: [
        "Web Development",
        "Frontend Development",
        "React.js",
        "JavaScript",
        "HTML/CSS"
      ],
      description: "Completed a comprehensive web development internship program at Embrizon Technologies, working on real-world projects and gaining hands-on experience in modern web technologies.",
      verificationUrl: "ET2024IC1380"
    }
  ];

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
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <motion.h1
            className="text-5xl sm:text-6xl font-bold text-white mb-6"
            whileHover={{ scale: 1.02 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              Certificates & Achievements
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            A collection of professional certifications and achievements that showcase my continuous learning journey
          </motion.p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <CertificateCard
              key={certificate.title}
              certificate={certificate}
              index={index}
              onClick={() => setActiveCertificate(certificate)}
            />
          ))}
        </div>

        {/* Certificate Modal */}
        <AnimatePresence>
          {activeCertificate && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveCertificate(null)}
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
                    src={activeCertificate.image}
                    alt={activeCertificate.title}
                    className="w-full aspect-[16/9] object-cover rounded-xl mb-6"
                  />
                  <button
                    onClick={() => setActiveCertificate(null)}
                    className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <FaTimes />
                  </button>
                </div>
                <h3 className="text-3xl font-bold text-white mb-2">{activeCertificate.title}</h3>
                <div className="flex items-center gap-2 text-gray-400 mb-4">
                  <span className="font-medium">{activeCertificate.issuedBy}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <FaCalendarAlt className="text-sm" />
                    {activeCertificate.issuedDate}
                  </span>
                </div>
                <p className="text-gray-300 mb-6">{activeCertificate.description}</p>
                <div className="flex flex-wrap gap-3 mb-6">
                  {activeCertificate.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="bg-indigo-500/10 px-3 py-1 rounded-full text-sm text-indigo-300"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
                <a
                  href={activeCertificate.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600 transition-colors"
                >
                  <FaExternalLinkAlt /> Verify Certificate
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

interface CertificateCardProps {
  certificate: Certificate;
  index: number;
  onClick: () => void;
}

const CertificateCard = ({ certificate, index, onClick }: CertificateCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    onClick={onClick}
    className="group relative bg-gray-900/30 backdrop-blur-sm rounded-2xl border border-gray-800 overflow-hidden cursor-pointer hover:border-indigo-500/50 transition-colors"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    
    {/* Certificate Image */}
    <div className="relative h-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10" />
      <img
        src={certificate.image}
        alt={certificate.title}
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <span className="text-white text-lg font-medium">View Details</span>
      </div>
    </div>

    {/* Certificate Content */}
    <div className="relative z-20 p-6">
      <div className="flex items-center gap-3 mb-3">
        <FaMedal className="text-indigo-400 text-xl" />
        <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors duration-300 line-clamp-1">
          {certificate.title}
        </h3>
      </div>
      
      <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
        <span>{certificate.issuedBy}</span>
        <span>•</span>
        <span className="flex items-center gap-1">
          <FaCalendarAlt className="text-xs" />
          {certificate.issuedDate}
        </span>
      </div>

      <p className="text-gray-300 mb-4 line-clamp-2">
        {certificate.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {certificate.skills.slice(0, 3).map((skill, idx) => (
          <div
            key={idx}
            className="bg-indigo-500/10 px-2 py-1 rounded-full text-xs text-indigo-300"
          >
            {skill}
          </div>
        ))}
        {certificate.skills.length > 3 && (
          <div className="bg-indigo-500/10 px-2 py-1 rounded-full text-xs text-indigo-300">
            +{certificate.skills.length - 3} more
          </div>
        )}
      </div>
    </div>
  </motion.div>
);

export default Certificates; 