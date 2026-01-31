import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CLI from './components/CLI';
import Experience from './components/Experience';
import AchevementCard from './components/AchievementCard';

function App() {
  const [isCliMode, setIsCliMode] = useState(false);

  const toggleMode = () => {
    setIsCliMode(!isCliMode);
  };

  if (isCliMode) {
    return (
      <>
        {/* Only toggle button in CLI mode - positioned to match navbar container */}
        <div className="fixed top-0 w-full z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-end pt-4">
              <button
                onClick={toggleMode}
                className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 shadow-lg"
                title="Switch to GUI Mode"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
                GUI
              </button>
            </div>
          </div>
        </div>
        <CLI toggleMode={toggleMode} />
      </>
    );
  }

  return (
    <>
      <Navbar isCliMode={isCliMode} toggleMode={toggleMode} />
      <main>
        <Home />
        <About />
        <Skills />
        <Experience />
        {/* <Resume /> */}
        <Projects />
        {/* <Contact /> */}
      </main>
    </>
  );
}

export default App;
