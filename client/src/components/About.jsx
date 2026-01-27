import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-[#020617] text-[#E5E7EB] flex items-center justify-center px-4 sm:px-6 lg:px-16 py-20 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-16 left-10 w-64 h-64 bg-[#14B8A6]/10 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#14B8A6]/10 rounded-full blur-3xl animate-float-slow delay-1000"></div>
      </div>

      {/* Glassmorphism container */}
      <div className="max-w-6xl w-full relative z-10">
        <div className="relative rounded-3xl bg-[#020617]/70 border border-[#14B8A6]/15 backdrop-blur-xl shadow-2xl px-6 sm:px-10 lg:px-14 py-10 lg:py-12">
          {/* Accent line */}
          <div className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full bg-gradient-to-b from-[#14B8A6] via-[#5EEAD4] to-transparent hidden sm:block" />

          <div className="grid lg:grid-cols-2 gap-12 items-start lg:items-center">
          {/* Left Column - Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#E5E7EB] via-[#14B8A6] to-[#E5E7EB] bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#14B8A6] to-[#5EEAD4] rounded-full"></div>
            </motion.div>

            <div className="space-y-6">
              <motion.p 
                className="text-lg leading-relaxed text-[#94A3B8]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Hello! I'm{' '}
                <span className="font-bold text-[#14B8A6]">Kalivarapu Sai Vignesh</span>, a final-year engineering student passionate about{' '}
                <strong className="text-[#5EEAD4]">Machine Learning, Data Analytics, and MERN stack</strong>, with a strong focus on building impactful technology-driven solutions.
              </motion.p>

              <motion.div 
                className="bg-[#020617]/80 backdrop-blur-sm rounded-2xl p-6 border border-[#14B8A6]/20 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-base sm:text-lg leading-relaxed text-[#94A3B8]">
                  I work extensively with{' '}
                  <strong className="text-[#5EEAD4]">Python</strong> for Machine Learning and Deep Learning, along with{' '}
                  <strong className="text-[#14B8A6]">JavaScript</strong> across the MERN stack. My experience includes{' '}
                  <strong className="text-[#5EEAD4]">TensorFlow, data-driven model building, REST APIs, and scalable web architectures</strong>.
                </p>
              </motion.div>

              <motion.p 
                className="text-base sm:text-lg leading-relaxed text-[#94A3B8]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                My projects reflect real-world problem solving — from{' '}
                <strong className="text-[#14B8A6]">NephroFind</strong>, a healthcare AI platform for early IgA nephropathy detection, to an{' '}
                <strong className="text-[#5EEAD4]">Air Quality Management System</strong> using IoT and LSTM prediction, and an{' '}
                <strong className="text-[#14B8A6]">Agentic Context-Aware Optimizer</strong> focused on on-device intelligent automation.
              </motion.p>
            </div>
          </motion.div>

          {/* Right Column - Achievements & Learning */}
            <motion.div 
              className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Achievements Card */}
            <motion.div 
              className="bg-gradient-to-br from-[#14B8A6] to-[#5EEAD4] rounded-3xl p-7 lg:p-8 text-[#020617] shadow-2xl hover:shadow-3xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-5 flex items-center">
                <span className="w-3 h-3 bg-yellow-400 rounded-full mr-3 animate-pulse"></span>
                Achievements
              </h3>
              <div className="space-y-4">
                <motion.div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <p className="font-semibold text-[#020617]">🧠 Research & Innovation</p>
                  <p className="text-sm text-[#020617]/90">
                    Active research focus on Healthcare AI and early disease prediction systems.
                  </p>
                </motion.div>
                <motion.div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <p className="font-semibold text-[#020617]">🏆 Hackathons & Projects</p>
                  <p className="text-sm text-[#020617]/90">
                    Built production-style MERN and ML systems for real-world problem statements.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Continuous Learning */}
            <motion.div 
              className="bg-[#020617]/80 backdrop-blur-sm rounded-3xl p-7 lg:p-8 border border-[#14B8A6]/20 shadow-xl hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-5 text-[#E5E7EB] flex items-center">
                <span className="w-3 h-3 bg-[#14B8A6] rounded-full mr-3 animate-pulse"></span>
                Continuous Learning
              </h3>
              <p className="text-[#94A3B8] italic text-base sm:text-lg">
                "I enjoy building systems that combine intelligence, scalability, and real-world impact."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default About;
