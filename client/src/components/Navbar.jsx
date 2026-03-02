import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Terminal, Monitor } from 'lucide-react';

const navItems = ['home', 'about', 'skills', 'experience', 'projects'];

const Navbar = ({ isCliMode, toggleMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`navbar fixed top-0 inset-x-0 z-50 border-b border-[rgba(0,212,255,0.12)] ${
        scrolled ? 'shadow-lg' : ''
      }`}
    >
      <div className="navbar-bg" aria-hidden />

      <div className="navbar-inner max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="navbar-row flex items-center justify-between">

          <Link
            to="home"
            smooth
            duration={500}
            className="logo-mark text-2xl cursor-pointer whitespace-nowrap leading-none text-[var(--text-primary)]"
          >
            KSV<span className="logo-underscore">_</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item}
                to={item}
                smooth
                duration={500}
                offset={-64}
                spy
                activeClass="nav-active"
                className="nav-link relative text-base font-medium text-[#94A3B8] hover:text-[var(--text-primary)] cursor-pointer whitespace-nowrap leading-none"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="/Vignesh_Resume.pdf"
              download="Sai_Vignesh_Kalivarapu_Resume.pdf"
              className="border border-[rgba(0,212,255,0.35)] bg-[rgba(0,212,255,0.08)] hover:bg-[#00d4ff] text-[#00d4ff] hover:text-[#080c10] px-4 py-2 rounded-[3px] text-sm font-medium flex items-center gap-2 shadow-lg leading-none transition font-['JetBrains_Mono']"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>

            <button
              onClick={toggleMode}
              className="bg-[#080c10] hover:bg-[#111820] text-[#e8edf2] border border-[rgba(0,212,255,0.35)] px-4 py-2 rounded-[3px] text-sm font-medium flex items-center gap-2 leading-none transition font-['JetBrains_Mono']"
              title={isCliMode ? 'Switch to GUI Mode' : 'Switch to CLI Mode'}
            >
              {isCliMode ? (
                <Monitor className="w-4 h-4" />
              ) : (
                <Terminal className="w-4 h-4" />
              )}
              {isCliMode ? 'GUI' : 'CLI'}
            </button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleMode}
              className="flex items-center justify-center min-w-[44px] min-h-[44px] px-3 rounded-[3px] border border-[rgba(0,212,255,0.35)] bg-[#080c10] text-[#e8edf2] text-[0.75rem] font-['JetBrains_Mono'] leading-none"
              title={isCliMode ? 'Switch to GUI Mode' : 'Switch to CLI Mode'}
            >
              {'>_ CLI'}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-[#94A3B8] hover:text-[#f0ede8] hover:bg-[#0d1117]"
              aria-label="Toggle menu"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full inset-x-0 bg-[#080c10]/95 backdrop-blur-xl border-t border-[rgba(0,212,255,0.1)]"
          >
            <div className="px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item}
                  to={item}
                  smooth
                  duration={500}
                  offset={-64}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-lg font-medium text-[#94A3B8] hover:text-[#f0ede8] hover:bg-[#0d1117] rounded-md cursor-pointer"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  );
};

export default Navbar;
