import React from "react";
import { motion } from "framer-motion";
import AchievementCard from "./AchievementCard";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen text-[#f0ede8] flex items-center justify-center px-4 sm:px-6 lg:px-16 relative overflow-hidden"
    >
      <div className="max-w-6xl w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-start">
          {/* Editorial layout - text flows naturally */}
          <motion.div
            className="space-y-8 about-text-block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-xs font-['JetBrains_Mono'] text-[#00d4ff] tracking-[0.15em] uppercase mb-2">
              // 01
            </p>
            <h2 className="section-heading text-4xl sm:text-5xl text-[#f0ede8]">
              <span>About Me</span>
              <span className="section-heading-underline" />
            </h2>

            <div className="space-y-5 text-lg leading-relaxed text-[#94A3B8]">
              <p>
                Hello! I'm{" "}
                <span className="highlight-keyword font-semibold text-[#f0ede8]">
                  Kalivarapu Sai Vignesh
                </span>
                , a final-year engineering student passionate about{" "}
                <span className="highlight-keyword font-semibold text-[#00d4ff]">
                  Machine Learning
                </span>
                ,{" "}
                <span className="highlight-keyword font-semibold text-[#00d4ff]">
                  Data Analytics
                </span>
                , and{" "}
                <span className="highlight-keyword font-semibold text-[#00d4ff]">
                  MERN stack
                </span>
                , focused on building impactful real-world technology solutions.
              </p>

              <p>
                I primarily work with{" "}
                <span className="highlight-keyword font-semibold text-[#f0ede8]">
                  Python
                </span>{" "}
                and{" "}
                <span className="highlight-keyword font-semibold text-[#f0ede8]">
                  JavaScript
                </span>
                . My experience includes{" "}
                <span className="highlight-keyword font-medium text-[#00d4ff]">
                  TensorFlow, REST APIs, data-driven model development, and scalable web systems
                </span>
                .
              </p>

              <p>
                My projects include{" "}
                <span className="font-semibold text-[#f0ede8]">NephroFind</span>, an{" "}
                <span className="font-semibold text-[#f0ede8]">Air Quality Management System</span>
                , and an{" "}
                <span className="font-semibold text-[#f0ede8]">Agentic Context-Aware Optimizer</span>
                .
              </p>
            </div>
          </motion.div>

          {/* Achievements - trophies */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl bg-[#0d1117] border border-[rgba(0,212,255,0.1)] p-6 lg:p-7">
              <h3 className="text-xl font-bold mb-6 flex items-center text-[#f0ede8] font-['JetBrains_Mono']">
                <span className="w-2 h-2 bg-[#00d4ff] inline-block mr-3 rounded-[1px]" />
                &gt; Achievements
              </h3>

              <div className="space-y-4">
                <AchievementCard
                  index={1}
                  title="Microsoft Odyssey Challenge 2024"
                  subtitle="Completed challenge by Microsoft"
                  proofLink="/microsoft.pdf"
                />
                <AchievementCard
                  index={2}
                  title="National Level VJ Hackathon"
                  subtitle="Top 10 out of 1000+ teams nationwide"
                  proofLink="/hackathon.png"
                />
                <AchievementCard
                  index={3}
                  title="ISRO Internship"
                  subtitle="Selected for internship at SDSC SHAR"
                  proofLink="/internship.png"
                />
                <AchievementCard
                  index={4}
                  title="Institutional Recognition"
                  subtitle="Felicitation for achievements"
                  proofLink="/isro-felicitation-mail.png"
                />
              </div>
            </div>

            <div className="rounded-2xl bg-[#0d1117] border border-[rgba(0,212,255,0.1)] p-6">
              <h3 className="text-lg font-bold mb-3 text-[#f0ede8]">
                Continuous Learning
              </h3>
              <p className="text-[#94A3B8] italic">
                "I enjoy building intelligent systems with real-world impact."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
