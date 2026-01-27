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
    green: {
      primary: 'text-green-400',
      secondary: 'text-green-300',
      accent: 'text-green-500',
      bg: 'bg-black'
    },
    blue: {
      primary: 'text-blue-400',
      secondary: 'text-blue-300',
      accent: 'text-blue-500',
      bg: 'bg-gray-900'
    },
    purple: {
      primary: 'text-purple-400',
      secondary: 'text-purple-300',
      accent: 'text-purple-500',
      bg: 'bg-gray-900'
    },
    matrix: {
      primary: 'text-green-400',
      secondary: 'text-green-300',
      accent: 'text-green-500',
      bg: 'bg-black'
    }
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
      title: 'Academic / Hackathon Project',
      description: 'Problem-solving project built during college or hackathons.',
      techStack: ['Web Tech', 'Problem Solving'],
      githubLink: 'https://github.com/Vignesh-1221'
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
    cgpa: '—',
    email: 'ksaivignesh12@gmail.com',
    github: 'https://github.com/Vignesh-1221',
    linkedin: 'https://www.linkedin.com/in/kalivarapu-sai-vignesh-a7648b25a/',
    achievements: [
      'Built healthcare-focused ML and MERN platforms',
      'Worked on IoT + predictive systems using LSTM'
    ]
  };

  /* ===================== COMMAND DEFINITIONS ===================== */
  const commands = {
    help: { description: 'Show available commands', usage: 'help [command]' },
    about: { description: 'Display personal information', usage: 'about' },
    skills: { description: 'List technical skills', usage: 'skills [category]' },
    projects: { description: 'Show project portfolio', usage: 'projects [id]' },
    contact: { description: 'Display contact information', usage: 'contact' },
    resume: { description: 'Download resume', usage: 'resume' },
    clear: { description: 'Clear terminal screen', usage: 'clear' },
    whoami: { description: 'Display current user info', usage: 'whoami' },
    achievements: { description: 'Display achievements', usage: 'achievements' },
    social: { description: 'Open social media links', usage: 'social [github|linkedin|email]' },
    theme: { description: 'Change terminal theme', usage: 'theme [green|blue|purple|matrix]' },
    gui: { description: 'Switch to GUI mode', usage: 'gui' },
    exit: { description: 'Exit CLI mode', usage: 'exit' }
  };

  useEffect(() => {
    setOutput([
      { type: 'system', content: '╔══════════════════════════════════════════════════════════════╗' },
      { type: 'system', content: '║                Welcome to Vignesh\'s Portfolio CLI           ║' },
      { type: 'system', content: '║  Type "help" to see available commands                      ║' },
      { type: 'system', content: '║  Type "gui" or "exit" to return to GUI mode                ║' },
      { type: 'system', content: '╚══════════════════════════════════════════════════════════════╝' },
      { type: 'system', content: '' }
    ]);
  }, []);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);

  const executeCommand = (cmd) => {
    const [command, ...args] = cmd.trim().toLowerCase().split(' ');

    if (cmd.trim()) {
      setCommandHistory(prev => [...prev, cmd.trim()]);
      setHistoryIndex(-1);
    }

    setOutput(prev => [...prev, { type: 'command', content: `${currentPath}$ ${cmd}` }]);

    switch (command) {
      case 'help':
        setOutput(prev => [
          ...prev,
          ...Object.entries(commands).map(
            ([c, i]) => ({ type: 'output', content: `${c.padEnd(12)} - ${i.description}` })
          )
        ]);
        break;

      case 'about':
        setOutput(prev => [
          ...prev,
          { type: 'output', content: `Name: ${personalInfo.name}` },
          { type: 'output', content: `Title: ${personalInfo.title}` },
          { type: 'output', content: `Education: ${personalInfo.education}` }
        ]);
        break;

      case 'projects':
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
        break;

      case 'contact':
        setOutput(prev => [
          ...prev,
          { type: 'output', content: `Email: ${personalInfo.email}` },
          { type: 'output', content: `GitHub: ${personalInfo.github}` },
          { type: 'output', content: `LinkedIn: ${personalInfo.linkedin}` }
        ]);
        break;

      case 'clear':
        setOutput([]);
        break;

      case 'gui':
      case 'exit':
        toggleMode();
        break;

      default:
        setOutput(prev => [...prev, { type: 'error', content: `Command '${command}' not found` }]);
    }
  };

  return (
    <div className={`h-screen ${themes[theme].bg} ${themes[theme].primary} font-mono`}>
      <div className="p-4" ref={terminalRef}>
        {output.map((line, i) => (
          <div key={i} className="whitespace-pre-wrap">
            {line.content}
          </div>
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
