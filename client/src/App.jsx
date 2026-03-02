import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CLI from './components/CLI';
import Experience from './components/Experience';
import ScrollProgress from './components/ScrollProgress';
import FadeInSection from './components/FadeInSection';

function App() {
  const [isCliMode, setIsCliMode] = useState(false);

  const toggleMode = () => {
    setIsCliMode(!isCliMode);
  };

  if (isCliMode) {
    return <CLI toggleMode={toggleMode} />;
  }

  return (
    <div className="app-shell relative">
      <div className="grain-overlay" aria-hidden />
      <ScrollProgress />
      <Navbar isCliMode={isCliMode} toggleMode={toggleMode} />
      <main>
        <Home />
        <FadeInSection>
          <About />
        </FadeInSection>
        <FadeInSection>
          <Skills />
        </FadeInSection>
        <FadeInSection>
          <Experience />
        </FadeInSection>
        <FadeInSection>
          <Projects />
        </FadeInSection>
      </main>
      <footer className="py-8 px-6 text-center text-[#94A3B8] text-sm border-t border-[rgba(0,212,255,0.1)]">
        Designed & Built by Kalivarapu Sai Vignesh © {new Date().getFullYear()}
      </footer>
    </div>
  );
}

export default App;
