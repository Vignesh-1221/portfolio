import Project from '../models/Project.js';

// Mock data matching YOUR frontend projects
const mockProjects = [
  {
    title: 'NephroFind',
    image: '/images/nephrofind.png',
    description:
      'Healthcare AI platform for early detection and analysis of IgA nephropathy using machine learning.',
    techStack: ['MERN', 'Machine Learning', 'Healthcare AI'],
    projectLink: 'https://github.com/Vignesh-1221/Nephrofind',
  },
  {
    title: 'Agentic Context-Aware Optimizer',
    image: '/images/maze-rl.png',
    description:
      'On-device Android agent using TinyML to autonomously optimize device performance.',
    techStack: ['Android', 'TinyML', 'TensorFlow Lite'],
    projectLink: 'https://github.com/Vignesh-1221/coptimizer',
  },
  {
    title: 'Air Quality Management System',
    image: '/images/spam.png',
    description:
      'IoT-based predictive air purification system using LSTM models for semi-closed environments.',
    techStack: ['ESP32', 'IoT', 'LSTM'],
    projectLink: 'https://github.com/Vignesh-1221',
  },
  {
    title: 'AURA – Automated Underwriting Risk Assessment',
    image: '/images/report.png',
    description:
      'Web-based system to assist underwriting decisions through data-driven risk evaluation.',
    techStack: ['HTML', 'JavaScript', 'Risk Analysis'],
    projectLink:
      'https://github.com/Vignesh-1221/AURA-Automated-Underwriting-Risk-Assessment',
  },
  {
    title: 'Random Quotes App',
    image: '/images/git-clone.png',
    description:
      'Lightweight JavaScript application that fetches and displays dynamic quotes via APIs.',
    techStack: ['JavaScript', 'API'],
    projectLink: 'https://github.com/Vignesh-1221/random_quotes',
  },
  {
    title: 'ML Mini Project',
    image: '/images/recovery.png',
    description:
      'Exploratory machine learning project focused on data analysis and prediction.',
    techStack: ['Python', 'Scikit-learn'],
    projectLink: 'https://github.com/Vignesh-1221',
  },
  {
    title: 'Backend REST API',
    image: '/images/bmi.png',
    description:
      'Node.js and Express-based REST API implementing CRUD operations with MongoDB.',
    techStack: ['Node.js', 'Express', 'MongoDB'],
    projectLink: 'https://github.com/Vignesh-1221',
  },
  {
    title: 'CSE Interview Quiz',
    image: '/images/zombie.png',
    description:
      'Web-based quiz application for Computer Science interview preparation, developed during an AICTE–Edunet Foundation internship.',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    projectLink: 'https://github.com/Vignesh-1221/cse_interview-quiz',
  },
];

// Get all projects
export const getProjects = async (req, res) => {
  try {
    // Try to fetch from database first
    const projects = await Project.find().sort({ createdAt: -1 });

    // If no projects in DB, return mock data
    if (projects.length === 0) {
      return res.json(mockProjects);
    }

    res.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    // Fallback to mock data on error
    res.json(mockProjects);
  }
};

// Create a project (for future use)
export const createProject = async (req, res) => {
  try {
    const project = await Project.create(req.body);
    res.status(201).json(project);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
