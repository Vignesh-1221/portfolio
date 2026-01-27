import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaCode } from 'react-icons/fa';
import myImage from "../assets/images/image.png"; 

const Home = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);

  const roles = [
    "AI & ML Enthusiast",
    "Full Stack Developer Enthusiast", 
    "Data Analyst Enthusiast",
    "Healthcare AI Enthusiast",
    "Problem Solver"
  ];

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    
    if (isTyping) {
      if (charIndex < currentRole.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentRole.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, 100);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
        return () => clearTimeout(timeout);
      }
    } else {
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(currentRole.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, 50);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setIsTyping(true);
        }, 500);
        return () => clearTimeout(timeout);
      }
    }
  }, [charIndex, isTyping, currentRoleIndex, roles]);

  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center relative overflow-hidden">
      
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-slate-900">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform rotate-12"></div>
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/3 to-transparent transform -rotate-12"></div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-indigo-500/10 rounded-full blur-2xl animate-bounce"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        
        {/* Profile Image */}
        <div className="relative mb-8 group">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
          <img
            src={myImage}
            alt="Kalivarapu Sai Vignesh"
            className="relative w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-white/20 shadow-2xl mx-auto object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Greeting */}
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
            Kalivarapu Sai Vignesh 
          </h1>
          <div className="h-16 flex items-center justify-center">
            <h2 className="text-2xl md:text-3xl font-light text-gray-300 min-h-[3rem] flex items-center">
              {displayText}
              <span className="inline-block w-0.5 h-8 bg-purple-400 ml-1 animate-pulse"></span>
            </h2>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
          Passionate <span className="text-blue-400 font-semibold">engineering student</span> focused on 
          <span className="text-purple-400 font-semibold"> Machine Learning, Data Analytics, and MERN </span>, 
          building impactful, real-world technology solutions.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button 
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center gap-3 animate-pulse-glow"
          >
            <FaCode className="group-hover:animate-bounce" />
            View My Work
          </button>
          <button 
            onClick={() => {
              const link = document.createElement('a');
              link.href = 'src/assets/Vignesh_Resume.pdf';
              link.download = 'Vignesh_Resume.pdf';
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
            }}
            className="group border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-3"
          >
            <FaDownload className="group-hover:animate-bounce" />
            Download Resume
          </button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-8">
          {[
            { icon: FaGithub, href: "https://github.com/Vignesh-1221", color: "hover:text-gray-300", label: "GitHub" },
            { icon: FaLinkedin, href: "https://www.linkedin.com/in/kalivarapu-sai-vignesh-a7648b25a/", color: "hover:text-blue-400", label: "LinkedIn" },
            { icon: FaEnvelope, href: "mailto:ksaivignesh12@gmail.com", color: "hover:text-red-400", label: "Email" }
          ].map(({ icon: Icon, href, color, label }, index) => (
            <a
              key={index}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group text-gray-400 ${color} transition-all duration-300 transform hover:scale-125`}
              aria-label={label}
            >
              <div className="relative">
                <Icon className="text-3xl md:text-4xl group-hover:animate-pulse" />
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 blur transition-opacity duration-300"></div>
              </div>
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
