import React from "react";
import { motion } from "framer-motion";
import AchievementCard from "./AchievementCard";

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

      {/* Main Container */}
      <div className="max-w-6xl w-full relative z-10">
        <div className="relative rounded-3xl bg-[#020617]/70 border border-[#14B8A6]/15 backdrop-blur-xl shadow-2xl px-6 sm:px-10 lg:px-14 py-10 lg:py-12">

          {/* Accent Line */}
          <div className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full bg-gradient-to-b from-[#14B8A6] via-[#5EEAD4] to-transparent hidden sm:block" />

          <div className="grid lg:grid-cols-2 gap-12 items-start lg:items-center">

            {/* LEFT COLUMN */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-[#E5E7EB] via-[#14B8A6] to-[#E5E7EB] bg-clip-text text-transparent">
                  About Me
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-[#14B8A6] to-[#5EEAD4] rounded-full"></div>
              </div>

              <p className="text-lg leading-relaxed text-[#94A3B8]">
                Hello! I'm{" "}
                <span className="font-bold text-[#14B8A6]">
                  Kalivarapu Sai Vignesh
                </span>
                , a final-year engineering student passionate about{" "}
                <strong className="text-[#5EEAD4]">
                  Machine Learning, Data Analytics, and MERN stack
                </strong>
                .
              </p>

              <div className="bg-[#020617]/80 backdrop-blur-sm rounded-2xl p-6 border border-[#14B8A6]/20 shadow-lg">
                <p className="text-base sm:text-lg text-[#94A3B8]">
                  I primarily work with <strong>Python</strong> and{" "}
                  <strong>JavaScript</strong>. My experience includes{" "}
                  <strong>
                    TensorFlow, REST APIs, data-driven model development, and
                    scalable web systems
                  </strong>
                  .
                </p>
              </div>

              <p className="text-base sm:text-lg text-[#94A3B8]">
                My projects include <strong>NephroFind</strong>, an{" "}
                <strong>Air Quality Management System</strong>, and an{" "}
                <strong>Agentic Context-Aware Optimizer</strong>.
              </p>
            </motion.div>

            {/* RIGHT COLUMN — ACHIEVEMENTS */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-[#14B8A6] to-[#5EEAD4] rounded-3xl p-6 lg:p-7 text-[#020617] shadow-2xl">
                <h3 className="text-lg sm:text-xl font-bold mb-5 flex items-center">
                  <span className="w-2.5 h-2.5 bg-yellow-400 rounded-full mr-3"></span>
                  Achievements
                </h3>

                <div className="space-y-4">
                  <AchievementCard
                    title=" 1. Microsoft Odyssey Challenge 2024"
                    subtitle="Completed Microsoft Odyssey Challenge"
                    proofLink="/microsoft.pdf"
                  />

                  <AchievementCard
                    title=" 2. National Level VJ Hackathon"
                    subtitle="Top 10 • 30 finalists • 1000+ teams"
                    proofLink="/hackathon.png"
                  />

                  <AchievementCard
                    title=" 3. ISRO Internship"
                    subtitle="Selected for ISRO internship"
                    proofLink="/internship.png"
                  />

                  <AchievementCard
                    title=" 4. Institutional Recognition"
                    subtitle="Felicitation for ISRO internship"
                    proofLink="/isro-felicitation-mail.png"
                  />
                </div>
              </div>

              <div className="bg-[#020617]/80 backdrop-blur-sm rounded-3xl p-7 border border-[#14B8A6]/20 shadow-xl">
                <h3 className="text-lg sm:text-xl font-bold mb-4">
                  Continuous Learning
                </h3>
                <p className="text-[#94A3B8] italic">
                  “I enjoy building intelligent systems with real-world impact.”
                </p>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
