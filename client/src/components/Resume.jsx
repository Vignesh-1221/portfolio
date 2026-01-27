import React from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, FileText, Award, GraduationCap, Briefcase } from 'lucide-react';

const Resume = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Vignesh_Resume.pdf';
    link.download = 'Vignesh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleView = () => {
    window.open('/Vignesh_Resume.pdf', '_blank');
  };

  const resumeHighlights = [
    {
      icon: GraduationCap,
      title: "Education",
      content: "B.Tech CSE",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Award,
      title: "Achievements",
      content: "ISRO SHAR  Intern, Academic Excellence",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Briefcase,
      title: "Experience",
      content: "On-site Internship, Full Stack & Data-Driven Web Systems",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section
      id="resume"
      className="min-h-screen px-6 py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-800 text-white relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-indigo-500 rounded-full blur-2xl animate-bounce"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            My Resume
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Download or view my resume highlighting my skills, experience, and academic journey
          </p>
        </motion.div>

        {/* Resume Highlights */}
        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {resumeHighlights.map((highlight, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${highlight.color} flex items-center justify-center mb-4 mx-auto`}
              >
                <highlight.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3 text-white">
                {highlight.title}
              </h3>
              <p className="text-gray-300 text-center leading-relaxed">
                {highlight.content}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Resume Preview Card */}
        <motion.div
          className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-32 h-40 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl">
                <FileText className="w-16 h-16 text-white" />
              </div>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-3xl font-bold text-white mb-4">
                Professional Resume
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                A concise overview of my technical skills, internships, projects,
                and academic background in Computer Science, AI, and Full Stack Development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <motion.button
                  onClick={handleDownload}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-2xl shadow-lg transition-all duration-300 flex items-center gap-3 justify-center"
                >
                  <Download className="w-5 h-5 group-hover:animate-bounce" />
                  Download Resume
                </motion.button>
                <motion.button
                  onClick={handleView}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 flex items-center gap-3 justify-center"
                >
                  <Eye className="w-5 h-5 group-hover:animate-pulse" />
                  View Online
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm">
            Last updated: 2025 • Available in PDF format
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
