import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaCode, FaPhoneAlt } from 'react-icons/fa';
import myImage from "../assets/images/image.png";

const roles = [
  "AI & ML Enthusiast",
  "Full Stack Developer Enthusiast",
  "Data Analyst Enthusiast",
  "Healthcare AI Enthusiast",
  "Problem Solver"
];

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    if (isTyping) {
      if (charIndex < currentRole.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentRole.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 140);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => setIsTyping(false), 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(currentRole.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 60);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setIsTyping(true);
        }, 500);
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, isTyping, currentRoleIndex]);

  return (
    <section id="home" className="hero-section relative overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto w-full">
        <div className="hero-grid items-center">
          {/* LEFT: text, CTA, social */}
          <div className="hero-left text-left">
            <div>
              <div className="hero-label-row">
                <span className="hero-label-line" />
                <span className="hero-label-text">— PORTFOLIO 2025</span>
              </div>
              <h1 className="hero-name">
                Kalivarapu
                <br />
                <span>Sai Vignesh</span>
              </h1>
              <div className="h-10 flex items-center">
                <h2 className="hero-subtitle">
                  {displayText}
                  <span className="hero-subtitle-cursor" />
                </h2>
              </div>
            </div>

            <p className="hero-description">
              Passionate <span className="text-[#00d4ff] font-semibold">engineering student</span> focused on
              <span className="text-[#00d4ff] font-semibold"> Machine Learning, Data Analytics, and MERN </span>,
              building impactful, real-world technology solutions.
            </p>

            <div className="hero-actions justify-start items-center">
              <button
                onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                <FaCode />
                View My Work
              </button>

              <button
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Vignesh_Resume.pdf';
                  link.download = 'Vignesh_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="btn-secondary"
              >
                <FaDownload />
                Download Resume
              </button>
            </div>

            <div className="hero-social">
              <a
                href="https://github.com/Vignesh-1221"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                <FaLinkedin />
              </a>
              <a
                href="mailto:ksaivignesh12@gmail.com"
                className=""
              >
                <FaEnvelope />
              </a>
              <a
                href="tel:9100680121"
                className=""
              >
                <FaPhoneAlt />
              </a>
            </div>
          </div>

          {/* RIGHT: photo */}
          <div className="hero-right">
            <div className="hero-photo-wrapper">
              <img
                src={myImage}
                alt="Kalivarapu Sai Vignesh"
                className="hero-photo"
              />
              <div className="hero-availability">
                <span className="hero-availability-dot" />
                <span>Available for Opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - minimal chevron */}
      <div className="hero-scroll-indicator">
        <span>⌄</span>
      </div>
    </section>
  );
};

export default Home;
