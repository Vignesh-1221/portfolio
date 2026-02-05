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

/* ================= IMAGE MAP (UNCHANGED) ================= */
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

/* ================= STATIC PROJECTS (YOUR DATA) ================= */
const staticProjects = [
  {
    title: 'NephroFind',
    image: nephrofindImg,
    description:
      'Platform for early detection and analysis of IgA nephropathy using ML.',
    techStack: ['MERN', 'Machine Learning', 'Healthcare AI'],
    projectLink: 'https://github.com/Vignesh-1221/Nephrofind',
  },
  {
    title: 'Agentic Context-Aware Optimizer',
    image: cooptimizerImg,
    description:
      'On-device Android agent using TinyML to autonomously optimize device performance.',
    techStack: ['Android', 'TinyML', 'TensorFlow Lite'],
    projectLink: 'https://github.com/Vignesh-1221/coptimizer',
  },
  {
    title: 'Air Quality Management System',
    image: aqmImg,
    description:
      'IoT-based predictive air purification system using LSTM models for semi-closed environments.',
    techStack: ['ML', 'Python', 'Audrino'],
    projectLink: 'https://github.com/Vignesh-1221/air_quality_management__ML.git',
  },
  {
    title: 'AURA',
    image: auraImg,
    description:
      'Web-based system to assist underwriting decisions through data-driven risk evaluation.',
    techStack: ['HTML', 'JavaScript', 'Risk Analysis'],
    projectLink:
      'https://github.com/Vignesh-1221/AURA-Automated-Underwriting-Risk-Assessment',
  },
  {
    title: 'Random Quotes App',
    image: gitCloneImg,
    description:
      'Lightweight JavaScript application that fetches and displays dynamic quotes via APIs.',
    techStack: ['JavaScript', 'API'],
    projectLink: 'https://github.com/Vignesh-1221/random_quotes',
  },
  {
    title: 'ML Mini Project',
    image: recoveryImg,
    description:
      'Exploratory machine learning project focused on data analysis and prediction.',
    techStack: ['Python', 'Scikit-learn'],
    projectLink: 'https://github.com/Vignesh-1221',
  },
  {
    title: 'Backend REST API',
    image: bmiImg,
    description:
      'Node.js and Express-based REST API implementing CRUD operations with MongoDB.',
    techStack: ['Node.js', 'Express', 'MongoDB'],
    projectLink: 'https://github.com/Vignesh-1221',
  },
  {
    title: 'CSE Interview Quiz',
    image: cse_prepImg,
    description:
      'Web-based quiz application for CS interview preparation.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    projectLink: 'https://github.com/Vignesh-1221/cse_interview-quiz',
  },
];

const Projects = () => {
  /* Initialize with static data so UI renders immediately */
  const [projects, setProjects] = useState(staticProjects);

  useEffect(() => {
    const loadProjects = async () => {
      const data = await fetchProjects();
      if (data && Array.isArray(data) && data.length > 0) {
        const mappedProjects = data.map((project) => ({
          ...project,
          image: imageMap[project.image] || project.image,
        }));
        setProjects(mappedProjects);
      }
    };
    loadProjects();
  }, []);

  return (
    <section id="projects" className="min-h-screen px-6 py-16 bg-[#0F172A] text-[#E5E7EB]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-[#14B8A6] mb-8">My Projects</h2>

        <div className="group/projects grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="transition-opacity duration-300 group-hover/projects:opacity-60 hover:opacity-100"
            >
              <ProjectCard
                title={project.title}
                image={project.image}
                description={project.description}
                techStack={project.techStack}
                projectLink={project.projectLink}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
