import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import nephrofindImg from '../assets/images/nephrofind.png';
import cooptimizerImg from '../assets/images/cooptimizer.png';
import aqmImg from '../assets/images/aqm.png';
import auraImg from '../assets/images/aura.png';
import gitCloneImg from '../assets/images/git-clone.png';
import recoveryImg from '../assets/images/recovery.png';
import bmiImg from '../assets/images/bmi.png';
import cse_prepImg from '../assets/images/cse_prep.png';
import { fetchProjects } from '../utils/api';

const imageMap = {
  '/images/nephrofind.png': nephrofindImg,
  '/images/coptimizer.png': cooptimizerImg,
  '/images/aqm.png': aqmImg,
  '/images/aura.png': auraImg,
  '/images/git-clone.png': gitCloneImg,
  '/images/recovery.png': recoveryImg,
  '/images/bmi.png': bmiImg,
  '/images/cse_prep.png': cse_prepImg,
};

const staticProjects = [
  {
    title: 'NephroFind',
    image: nephrofindImg,
    description: 'Platform for early detection and analysis of IgA nephropathy using ML.',
    techStack: ['MERN', 'Machine Learning', 'Healthcare AI'],
    projectLink: 'https://github.com/Vignesh-1221/Nephrofind',
    impact: 'ML-powered early detection for kidney disease screening.',
    featured: true,
  },
  {
    title: 'Agentic Context-Aware Optimizer',
    image: cooptimizerImg,
    description: 'On-device Android agent using TinyML to autonomously optimize device performance.',
    techStack: ['Android', 'TinyML', 'TensorFlow Lite'],
    projectLink: 'https://github.com/Vignesh-1221/coptimizer',
    impact: 'Autonomous on-device optimization with TinyML.',
    featured: false,
  },
  {
    title: 'Air Quality Management System',
    image: aqmImg,
    description: 'IoT-based predictive air purification system using LSTM models for semi-closed environments.',
    techStack: ['ML', 'Python', 'Audrino'],
    projectLink: 'https://github.com/Vignesh-1221/air_quality_management__ML.git',
    impact: 'IoT + LSTM predictive air quality for enclosed spaces.',
    featured: false,
  },
  {
    title: 'AURA',
    image: auraImg,
    description: 'Web-based system to assist underwriting decisions through data-driven risk evaluation.',
    techStack: ['HTML', 'JavaScript', 'Risk Analysis'],
    projectLink: 'https://github.com/Vignesh-1221/AURA-Automated-Underwriting-Risk-Assessment',
    impact: 'Data-driven underwriting risk assessment.',
    featured: false,
  },
  {
    title: 'Random Quotes App',
    image: gitCloneImg,
    description: 'Lightweight JavaScript application that fetches and displays dynamic quotes via APIs.',
    techStack: ['JavaScript', 'API'],
    projectLink: 'https://github.com/Vignesh-1221/random_quotes',
    impact: 'API-driven dynamic quote display.',
    featured: false,
  },
  {
    title: 'ML Mini Project',
    image: recoveryImg,
    description: 'Exploratory machine learning project focused on data analysis and prediction.',
    techStack: ['Python', 'Scikit-learn'],
    projectLink: 'https://github.com/Vignesh-1221',
    impact: 'Exploratory ML for data analysis.',
    featured: false,
  },
  {
    title: 'Medical Third Opinion Agent',
    image: bmiImg,
    description: 'LLM-powered healthcare assistant that analyzes uploaded medical reports and generates a contextual third opinion to help patients better understand diagnoses and treatment options.',
    techStack: ['Python', 'LLM', 'Vector DB', 'LangChain','React.js', 'Node.js', 'Express.js', 'MongoDB'],
    projectLink: 'https://github.com/Vignesh-1221/ThirdOp',
    impact: 'Implemented an LLM + retrieval pipeline to interpret medical reports, surface relevant medical knowledge, and provide explainable third-opinion suggestions for patients.',
    featured: false,
  },
  {
    title: 'CSE Interview Quiz',
    image: cse_prepImg,
    description: 'Web-based quiz application for CS interview preparation.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    projectLink: 'https://github.com/Vignesh-1221/cse_interview-quiz',
    impact: 'CS interview prep quiz platform.',
    featured: false,
  },
];

const Projects = () => {
  const [projects, setProjects] = useState(staticProjects);

  useEffect(() => {
    const loadProjects = async () => {
      const data = await fetchProjects();
      if (data && Array.isArray(data) && data.length > 0) {
        const mapped = data.map((p) => {
          const existing = staticProjects.find((s) => s.title === p.title);
          return {
            ...existing,
            ...p,
            image: imageMap[p.image] || p.image,
            featured: p.title === 'NephroFind',
            impact: existing?.impact || p.description?.slice(0, 50) + '...',
          };
        });
        setProjects(mapped);
      }
    };
    loadProjects();
  }, []);

  return (
    <section id="projects" className="min-h-screen px-6 text-[#f0ede8]">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs font-['JetBrains_Mono'] text-[#00d4ff] tracking-[0.15em] uppercase text-center mb-1">
          // 04
        </p>
        <h2 className="projects-heading text-4xl text-center mb-8">
          My Projects
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              image={project.image}
              description={project.description}
              techStack={project.techStack}
              projectLink={project.projectLink}
              gitlabLink={project.gitlabLink}
              impact={project.impact}
              featured={project.featured}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
