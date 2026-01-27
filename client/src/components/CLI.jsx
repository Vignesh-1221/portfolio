import React, { useState, useEffect, useRef } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaTerminal } from 'react-icons/fa';

const CLI = ({ toggleMode }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [currentPath, setCurrentPath] = useState('~');
  const [theme, setTheme] = useState('green');
  const terminalRef = useRef(null);
  const inputRef = useRef(null);

  const themes = {
    green: { primary: 'text-green-400', secondary: 'text-green-300', accent: 'text-green-500', bg: 'bg-black' },
    blue: { primary: 'text-blue-400', secondary: 'text-blue-300', accent: 'text-blue-500', bg: 'bg-gray-900' },
    purple: { primary: 'text-purple-400', secondary: 'text-purple-300', accent: 'text-purple-500', bg: 'bg-gray-900' },
    matrix: { primary: 'text-green-400', secondary: 'text-green-300', accent: 'text-green-500', bg: 'bg-black' }
  };

  /* ===================== PROJECTS (8) ===================== */
  const projects = [
    {
      id: 1,
      title: 'NephroFind',
      description: 'Healthcare AI platform for early detection of IgA nephropathy.',
      techStack: ['MERN', 'Machine Learning', 'Healthcare AI'],
      githubLink: 'https://github.com/Vignesh-1221/Nephrofind'
    },
    {
      id: 2,
      title: 'Agentic Context-Aware Optimizer',
      description: 'On-device Android agent using TinyML for autonomous optimization.',
      techStack: ['Android', 'TinyML', 'TensorFlow Lite'],
      githubLink: 'https://github.com/Vignesh-1221/coptimizer'
    },
    {
      id: 3,
      title: 'Air Quality Management System',
      description: 'IoT + LSTM-based predictive air purification system.',
      techStack: ['ESP32', 'IoT', 'LSTM'],
      githubLink: 'https://github.com/Vignesh-1221'
    },
    {
      id: 4,
      title: 'AURA – Automated Underwriting Risk Assessment',
      description: 'Data-driven system for underwriting risk evaluation.',
      techStack: ['HTML', 'JavaScript', 'Risk Analysis'],
      githubLink: 'https://github.com/Vignesh-1221/AURA-Automated-Underwriting-Risk-Assessment'
    },
    {
      id: 5,
      title: 'Random Quotes App',
      description: 'Simple JavaScript app using APIs for dynamic quote generation.',
      techStack: ['JavaScript', 'API'],
      githubLink: 'https://github.com/Vignesh-1221/random_quotes'
    },
    {
      id: 6,
      title: 'ML Mini Project',
      description: 'Exploratory ML project for data analysis and prediction.',
      techStack: ['Python', 'Scikit-learn'],
      githubLink: 'https://github.com/Vignesh-1221'
    },
    {
      id: 7,
      title: 'Backend REST API',
      description: 'Node.js + Express REST API with CRUD operations.',
      techStack: ['Node.js', 'Express', 'MongoDB'],
      githubLink: 'https://github.com/Vignesh-1221'
    },
    {
      id: 8,
      title: 'CSE Interview Quiz',
      description:
        'Web-based quiz application for Computer Science interview preparation, developed during an AICTE–Edunet Foundation internship.',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/Vignesh-1221/cse_interview-quiz'
    }
  ];

  /* ===================== SKILLS ===================== */
  const skills = {
    'Programming Languages': ['Python', 'JavaScript', 'C'],
    'Web Technologies': ['React', 'Node.js', 'Express', 'HTML', 'CSS', 'TailwindCSS'],
    'Databases': ['MongoDB'],
    'AI / ML': ['TensorFlow', 'Scikit-learn', 'NumPy', 'Pandas'],
    'Tools': ['Git', 'Postman']
  };

  /* ===================== PERSONAL INFO ===================== */
  const personalInfo = {
    name: 'Sai Vignesh Kalivarapu',
    title: 'AI / ML Engineer | MERN Developer',
    education: 'Final Year Engineering Student',
    email: 'ksaivignesh12@gmail.com',
    github: 'https://github.com/Vignesh-1221',
    linkedin: 'https://www.linkedin.com/in/kalivarapu-sai-vignesh-a7648b25a/'
  };

  const commands = {
    help: { description: 'Show available commands' },
    about: { description: 'Display personal information' },
    skills: { description: 'List technical skills' },
    projects: { description: 'Show project portfolio' },
    contact: { description: 'Display contact information' },
    clear: { description: 'Clear terminal screen' },
    gui: { description: 'Switch to GUI mode' },
    exit: { description: 'Exit CLI mode' }
  };

  useEffect(() => {
    setOutput([
      { type: 'system', content: '╔══════════════════════════════════════════════════════════════╗' },
      { type: 'system', content: '║              Welcome to Vignesh\'s Portfolio CLI             ║' },
      { type: 'system', content: '║  Type "help" to see available commands                      ║' },
      { type: 'system', content: '║  Type "gui" or "exit" to return to GUI mode                ║' },
      { type: 'system', content: '╚══════════════════════════════════════════════════════════════╝' },
      { type: 'system', content: '' }
    ]);
  }, []);

  useEffect(() => {
    terminalRef.current?.scrollTo(0, terminalRef.current.scrollHeight);
  }, [output]);

  const executeCommand = (cmd) => {
    const command = cmd.trim().toLowerCase();
    setOutput(prev => [...prev, { type: 'command', content: `${currentPath}$ ${cmd}` }]);

    if (command === 'projects') {
      setOutput(prev => [
        ...prev,
        ...projects.flatMap(p => [
          { type: 'output', content: `${p.id}. ${p.title}` },
          { type: 'output', content: `   ${p.description}` },
          { type: 'output', content: `   Tech: ${p.techStack.join(', ')}` },
          { type: 'output', content: `   GitHub: ${p.githubLink}` },
          { type: 'output', content: '' }
        ])
      ]);
      return;
    }

    if (command === 'contact') {
      setOutput(prev => [
        ...prev,
        { type: 'output', content: `Email: ${personalInfo.email}` },
        { type: 'output', content: `GitHub: ${personalInfo.github}` },
        { type: 'output', content: `LinkedIn: ${personalInfo.linkedin}` }
      ]);
      return;
    }

    if (command === 'clear') {
      setOutput([]);
      return;
    }

    if (command === 'gui' || command === 'exit') {
      toggleMode();
      return;
    }

    setOutput(prev => [...prev, { type: 'error', content: `Command '${command}' not found` }]);
  };

  return (
    <div className={`h-screen ${themes[theme].bg} ${themes[theme].primary} font-mono`}>
      <div className="p-4" ref={terminalRef}>
        {output.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap">{line.content}</div>
        ))}
        <div className="flex">
          <span>{currentPath}$</span>
          <input
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && (executeCommand(input), setInput(''))}
            className="bg-transparent outline-none ml-2 flex-1"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};

export default CLI;
