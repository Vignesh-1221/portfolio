import React, { useState, useEffect, useRef } from 'react';

const CLI = ({ toggleMode }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);
  const [currentPath] = useState('~');
  const terminalRef = useRef(null);
  const inputRef = useRef(null);
  const [isBooting, setIsBooting] = useState(true);
  const [showMatrix, setShowMatrix] = useState(false);

  /* ===================== PROJECTS ===================== */
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
        'Web-based quiz application for CS interview preparation (AICTE–Edunet Internship).',
      techStack: ['HTML', 'CSS', 'JavaScript'],
      githubLink: 'https://github.com/Vignesh-1221/cse_interview-quiz'
    }
  ];

  /* ===================== PERSONAL INFO ===================== */
  const personalInfo = {
    name: 'Sai Vignesh Kalivarapu',
    title: 'AI / ML Engineer | MERN Developer',
    education: 'Final Year Engineering Student',
    email: 'ksaivignesh12@gmail.com',
    phone: '9100680121',
    github: 'https://github.com/Vignesh-1221',
    linkedin: 'https://www.linkedin.com/in/kalivarapu-sai-vignesh-a7648b25a/'
  };

  useEffect(() => {
    let isCancelled = false;

    const bootLines = [
      'KSV Portfolio OS v1.0.0',
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
      'Booting system...',
      '[██░░░░░░░░] 20%  Loading kernel modules...',
      '[████░░░░░░] 40%  Mounting file systems...',
      '[██████░░░░] 60%  Starting services...',
      '[████████░░] 80%  Initializing portfolio...',
      '[██████████] 100% System ready.',
      '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
    ];

    const runBoot = async () => {
      for (let i = 0; i < bootLines.length; i += 1) {
        await new Promise((resolve) => setTimeout(resolve, 80));
        if (isCancelled) return;
        setOutput((prev) => [...prev, { type: 'output', content: bootLines[i] }]);
      }

      await new Promise((resolve) => setTimeout(resolve, 300));
      if (isCancelled) return;

      setOutput((prev) => [
        ...prev,
        { type: 'system', content: '╔══════════════════════════════════════════════════════════════╗' },
        { type: 'system', content: '║        Welcome to Vignesh\'s Portfolio CLI                   ║' },
        { type: 'system', content: '║  Type "help" to see available commands                      ║' },
        { type: 'system', content: '║  Type "gui" or "exit" to return to GUI mode                ║' },
        { type: 'system', content: '╚══════════════════════════════════════════════════════════════╝' },
        { type: 'system', content: '' }
      ]);
      setIsBooting(false);
    };

    runBoot();

    return () => {
      isCancelled = true;
    };
  }, []);

  useEffect(() => {
    terminalRef.current?.scrollTo(0, terminalRef.current.scrollHeight);
  }, [output]);

  const executeCommand = (cmd) => {
    const trimmed = cmd.trim();
    if (!trimmed || isBooting) {
      return;
    }

    const command = trimmed.toLowerCase();
    const [base, ...args] = command.split(/\s+/);
    const argString = args.join(' ');
    setOutput(prev => [...prev, { type: 'command', content: `${currentPath}$ ${trimmed}` }]);

    if (base === 'help') {
      const helpLines = [
        'Available commands:',
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        'NAVIGATION',
        '  about          — Display personal information',
        '  skills         — List technical skills  ',
        '  projects       — Show project portfolio',
        '  contact        — Display contact information',
        '',
        'FILES',
        '  whoami         — Current user info',
        '  cat about.txt  — Read about file',
        '  ls projects    — List all projects',
        '  open <name>    — Open a specific project',
        '',
        'SYSTEM',
        '  resume         — Download resume',
        '  ping           — Test connection',
        '  sudo hire-me   — (if you dare)',
        '  matrix         — ???',
        '  clear          — Clear terminal',
        '  gui / exit     — Return to GUI mode',
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
      ];

      setOutput(prev => [
        ...prev,
        ...helpLines.map((line) => ({ type: 'output', content: line }))
      ]);
      return;
    }

    if (base === 'about') {
      setOutput(prev => [
        ...prev,
        { type: 'output', content: `Name      : ${personalInfo.name}` },
        { type: 'output', content: `Title     : ${personalInfo.title}` },
        { type: 'output', content: `Education : ${personalInfo.education}` },
        { type: 'output', content: `Email     : ${personalInfo.email}` },
        { type: 'output', content: `Mobile    : ${personalInfo.phone}` }
      ]);
      return;
    }

    if (base === 'skills') {
      const skillsLines = [
        'LANGUAGES    Python · Java · C',
        'WEB DEV      React · Node.js · Express · HTML · CSS · TailwindCSS',
        'DATABASES    PostgreSQL · MongoDB',
        'ML/AI        TensorFlow · Scikit-learn · NumPy · Pandas',
        'TOOLS        Git · Postman'
      ];

      setOutput(prev => [
        ...prev,
        ...skillsLines.map((line) => ({ type: 'output', content: line }))
      ]);
      return;
    }

    if (base === 'projects') {
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

    if (base === 'contact') {
      setOutput(prev => [
        ...prev,
        { type: 'output', content: `Email   : ${personalInfo.email}` },
        { type: 'output', content: `Mobile  : ${personalInfo.phone}` },
        { type: 'output', content: `GitHub  : ${personalInfo.github}` },
        { type: 'output', content: `LinkedIn: ${personalInfo.linkedin}` }
      ]);
      return;
    }

    if (base === 'whoami') {
      const whoamiLines = [
        '> Kalivarapu Sai Vignesh',
        '> Final-year Engineering Student',
        '> AI & ML Enthusiast | MERN Developer | ISRO Intern',
        '> Currently: Building intelligent systems with real-world impact.'
      ];

      setOutput(prev => [
        ...prev,
        ...whoamiLines.map((line) => ({ type: 'output', content: line }))
      ]);
      return;
    }

    if (base === 'ls' && argString === 'projects') {
      const lsLines = [
        'total 6 projects',
        '',
        'drwxr-xr-x  NephroFind/          [MERN · ML · Healthcare]',
        'drwxr-xr-x  AgenticOptimizer/    [Android · TinyML · TensorFlow Lite]',
        'drwxr-xr-x  AirQualitySystem/    [IoT · Python · Arduino]',
        'drwxr-xr-x  AURA/                [HTML · JavaScript · Risk Analysis]',
        'drwxr-xr-x  RandomQuotesApp/     [JavaScript · API]',
        'drwxr-xr-x  MLMiniProject/       [Python · Scikit-learn]',
        '',
        'Type "open <projectname>" to view details.'
      ];

      setOutput(prev => [
        ...prev,
        ...lsLines.map((line) => ({ type: 'output', content: line }))
      ]);
      return;
    }

    if (base === 'cat' && argString === 'about.txt') {
      const aboutFileLines = [
        '/home/ksv/about.txt',
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━',
        'Name    : Kalivarapu Sai Vignesh',
        'Role    : Final-year Engineering Student',
        'Focus   : Machine Learning, Data Analytics, MERN',
        'Stack   : Python, JavaScript, TensorFlow, React',
        'Intern  : ISRO SHAR (SDSC Sriharikota) — May-June 2025',
        'Awards  : Microsoft Odyssey Challenge 2024',
        '          National Level VJ Hackathon — Top 10/1000+ teams',
        'Quote   : "I enjoy building intelligent systems ',
        '           with real-world impact."',
        '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'
      ];

      setOutput(prev => [
        ...prev,
        ...aboutFileLines.map((line) => ({ type: 'output', content: line }))
      ]);
      return;
    }

    if (base === 'resume') {
      const resumeLines = [
        '> Downloading resume...',
        '> ████████████████████ 100%',
        '> resume_KSV.pdf downloaded successfully.'
      ];

      setOutput(prev => [
        ...prev,
        ...resumeLines.map((line) => ({ type: 'success', content: line }))
      ]);

      try {
        const link = document.createElement('a');
        link.href = '/Vignesh_Resume.pdf';
        link.download = 'Sai_Vignesh_Kalivarapu_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        // ignore download errors in CLI
      }

      return;
    }

    if (base === 'ping') {
      const pingLines = [
        'PING kalivarapu-sai-vignesh.dev',
        '64 bytes from ksv: icmp_seq=1 ttl=64 time=0.42ms',
        '64 bytes from ksv: icmp_seq=2 ttl=64 time=0.38ms',
        '64 bytes from ksv: icmp_seq=3 ttl=64 time=0.41ms',
        '--- ping statistics ---',
        '3 packets transmitted, 3 received, 0% packet loss',
        'Round-trip: min=0.38ms avg=0.40ms max=0.42ms'
      ];

      pingLines.forEach((line, index) => {
        setTimeout(() => {
          setOutput(prev => [...prev, { type: 'output', content: line }]);
        }, 80 * (index + 1));
      });

      return;
    }

    if (base === 'sudo' && argString === 'hire-me') {
      const sudoLines = [
        '[sudo] password for recruiter: ••••••••',
        'Verifying credentials...',
        'Access granted. ✓',
        '',
        '> Candidate: Kalivarapu Sai Vignesh',
        '> Status: HIGHLY RECOMMENDED',
        '> Reason: Builds real things. Ships fast. Thinks deep.',
        '> Action: Redirecting to contact info...'
      ];

      sudoLines.forEach((line, index) => {
        const isSuccess = line.startsWith('Access granted') || line.startsWith('> Candidate') || line.startsWith('> Status') || line.startsWith('> Reason') || line.startsWith('> Action');
        setTimeout(() => {
          setOutput(prev => [
            ...prev,
            { type: isSuccess ? 'success' : 'output', content: line }
          ]);
        }, 100 * (index + 1));
      });

      setTimeout(() => {
        setOutput(prev => [
          ...prev,
          { type: 'output', content: `Email   : ${personalInfo.email}` },
          { type: 'output', content: `Mobile  : ${personalInfo.phone}` },
          { type: 'output', content: `GitHub  : ${personalInfo.github}` },
          { type: 'output', content: `LinkedIn: ${personalInfo.linkedin}` }
        ]);
      }, 100 * sudoLines.length + 1000);

      return;
    }

    if (base === 'open' && args.length > 0) {
      const projectKey = args.join('').toLowerCase();

      const projectMap = {
        nephrofind: {
          name: 'NephroFind',
          lines: [
            '> Opening NephroFind...',
            '> Platform for early detection of IgA nephropathy using ML',
            '> Stack: MERN · Machine Learning · Healthcare AI',
            '> Status: Redirecting to project...'
          ],
          guiTitle: 'NephroFind'
        },
        agenticoptimizer: {
          name: 'AgenticOptimizer',
          lines: [
            '> Opening AgenticOptimizer...',
            '> On-device Android agent using TinyML for autonomous optimization.',
            '> Stack: Android · TinyML · TensorFlow Lite',
            '> Status: Redirecting to project...'
          ],
          guiTitle: 'Agentic Context-Aware Optimizer'
        },
        airqualitysystem: {
          name: 'AirQualitySystem',
          lines: [
            '> Opening AirQualitySystem...',
            '> IoT-based predictive air purification system using LSTM models.',
            '> Stack: IoT · Python · Arduino',
            '> Status: Redirecting to project...'
          ],
          guiTitle: 'Air Quality Management System'
        },
        aura: {
          name: 'AURA',
          lines: [
            '> Opening AURA...',
            '> Web-based system to assist underwriting decisions through data-driven risk evaluation.',
            '> Stack: HTML · JavaScript · Risk Analysis',
            '> Status: Redirecting to project...'
          ],
          guiTitle: 'AURA'
        },
        randomquotesapp: {
          name: 'RandomQuotesApp',
          lines: [
            '> Opening RandomQuotesApp...',
            '> Lightweight JavaScript application that fetches and displays dynamic quotes via APIs.',
            '> Stack: JavaScript · API',
            '> Status: Redirecting to project...'
          ],
          guiTitle: 'Random Quotes App'
        },
        mlminiproject: {
          name: 'MLMiniProject',
          lines: [
            '> Opening MLMiniProject...',
            '> Exploratory machine learning project focused on data analysis and prediction.',
            '> Stack: Python · Scikit-learn',
            '> Status: Redirecting to project...'
          ],
          guiTitle: 'ML Mini Project'
        }
      };

      const project = projectMap[projectKey];

      if (project) {
        setOutput(prev => [
          ...prev,
          ...project.lines.map((line) => ({ type: 'output', content: line }))
        ]);

        setTimeout(() => {
          toggleMode();
          setTimeout(() => {
            const cards = document.querySelectorAll('.project-card[data-project-title]');
            const target = Array.from(cards).find(
              (el) => el.getAttribute('data-project-title') === project.guiTitle
            );

            if (target && 'scrollIntoView' in target) {
              target.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
              const projectsSection = document.getElementById('projects');
              projectsSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }, 500);
        }, 600);

        return;
      }
    }

    if (base === 'matrix') {
      setShowMatrix(true);

      setTimeout(() => {
        setShowMatrix(false);
        setOutput(prev => [
          ...prev,
          { type: 'output', content: 'There is no spoon, only code.' }
        ]);
      }, 2000);

      return;
    }

    if (base === 'clear') {
      setOutput([]);
      return;
    }

    if (base === 'gui' || base === 'exit') {
      toggleMode();
      return;
    }

    setOutput(prev => [
      ...prev,
      { type: 'error', content: `bash: ${trimmed}: command not found` },
      { type: 'hint', content: `Type 'help' to see available commands.` }
    ]);
  };

  const handleInputFocus = () => {
    if (inputRef.current) {
      inputRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  return (
    <div className={`cli-terminal ${showMatrix ? 'cli-terminal--matrix' : ''}`}>
      <button
        type="button"
        onClick={toggleMode}
        className="cli-terminal__close"
        title="Switch to GUI Mode"
      >
        GUI
      </button>
      {showMatrix && (
        <div className="cli-matrix-overlay" aria-hidden="true" />
      )}
      <div className="cli-terminal__inner" ref={terminalRef}>
        {output.map((line, i) => {
          let className = 'cli-terminal__line';
          if (line.type === 'error' || line.type === 'hint') {
            className += ' cli-terminal__line--error';
          }
          if (line.type === 'success') {
            className += ' cli-terminal__line--success';
          }
          if (line.type === 'command') {
            className += ' cli-terminal__line--command';
          }

          return (
            <div key={i} className={className}>
              {line.content}
            </div>
          );
        })}
        <div className="cli-terminal__prompt-row">
          <span className="cli-terminal__prompt">{`${currentPath}$`}</span>
          <input
            ref={inputRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                executeCommand(input);
                setInput('');
              }
            }}
            onFocus={handleInputFocus}
            className="cli-terminal__input"
            autoFocus
            disabled={isBooting}
          />
        </div>
      </div>
    </div>
  );
};

export default CLI;
