import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-slate-900 dark:to-gray-800 text-gray-800 dark:text-white flex items-center justify-center px-4 sm:px-6 lg:px-16 py-16 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-float-slow delay-1000"></div>
      </div>

      <div className="max-w-6xl w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
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
              <h2 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
            </motion.div>

            <div className="space-y-6">
              <motion.p 
                className="text-xl leading-relaxed text-gray-700 dark:text-gray-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                Hello! I'm{' '}
                <span className="font-bold text-blue-600 dark:text-blue-400">Kalivarapu Sai Vignesh</span>, a final-year engineering student passionate about{' '}
                <strong className="text-indigo-600 dark:text-indigo-400">Machine Learning, Data Analytics, and MERN stack</strong>, with a strong focus on building impactful technology-driven solutions.
              </motion.p>

              <motion.div 
                className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 border border-blue-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  I work extensively with{' '}
                  <strong className="text-blue-600 dark:text-blue-400">Python</strong> for Machine Learning and Deep Learning, along with{' '}
                  <strong className="text-orange-600 dark:text-orange-400">JavaScript</strong> across the MERN stack. My experience includes{' '}
                  <strong className="text-purple-600 dark:text-purple-400">TensorFlow, data-driven model building, REST APIs, and scalable web architectures</strong>.
                </p>
              </motion.div>

              <motion.p 
                className="text-lg leading-relaxed text-gray-700 dark:text-gray-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
              >
                My projects reflect real-world problem solving — from{' '}
                <strong className="text-emerald-600 dark:text-emerald-400">NephroFind</strong>, a healthcare AI platform for early IgA nephropathy detection, to an{' '}
                <strong className="text-cyan-600 dark:text-cyan-400">Air Quality Management System</strong> using IoT and LSTM prediction, and an{' '}
                <strong className="text-rose-600 dark:text-rose-400">Agentic Context-Aware Optimizer</strong> focused on on-device intelligent automation.
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
              className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="w-3 h-3 bg-yellow-400 rounded-full mr-3 animate-pulse"></span>
                Achievements
              </h3>
              <div className="space-y-4">
                <motion.div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <p className="font-semibold text-yellow-200">🧠 Research & Innovation</p>
                  <p className="text-sm text-white/90">
                    Active research focus on Healthcare AI and early disease prediction systems.
                  </p>
                </motion.div>
                <motion.div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                  <p className="font-semibold text-yellow-200">🏆 Hackathons & Projects</p>
                  <p className="text-sm text-white/90">
                    Built production-style MERN and ML systems for real-world problem statements.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Continuous Learning */}
            <motion.div 
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl p-8 border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></span>
                Continuous Learning
              </h3>
              <p className="text-gray-600 dark:text-gray-300 italic text-lg">
                "I enjoy building systems that combine intelligence, scalability, and real-world impact."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
