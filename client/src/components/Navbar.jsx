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

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Vignesh_resume.pdf';
    link.download = 'Vignesh_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`navbar fixed top-0 inset-x-0 z-50 ${
        scrolled ? 'shadow-lg border-[#14B8A6]/15' : 'border-transparent'
      }`}
    >
      {/* Blur background (visual only, no layout impact) */}
      <div className="navbar-bg" aria-hidden />

      {/* Fixed-height content wrapper */}
      <div className="navbar-inner max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="navbar-row flex items-center justify-between">

          {/* Logo */}
          <Link
            to="home"
            smooth
            duration={500}
            className="text-2xl font-bold bg-gradient-to-r from-[#E5E7EB] to-[#14B8A6] bg-clip-text text-transparent cursor-pointer whitespace-nowrap leading-none"
          >
            KSV
          </Link>

          {/* Desktop Nav */}
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
                className="nav-link relative text-base font-medium text-[#94A3B8] hover:text-[#E5E7EB] cursor-pointer whitespace-nowrap leading-none"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-[#14B8A6] to-[#5EEAD4] transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Right Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={handleDownload}
              className="bg-[#14B8A6] hover:bg-[#5EEAD4] text-[#020617] px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 shadow-lg leading-none"
            >
              <Download className="w-4 h-4" />
              Resume
            </button>

            <button
              onClick={toggleMode}
              className="bg-[#111827] hover:bg-[#020617] text-[#E5E7EB] px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 shadow-lg leading-none"
              title={isCliMode ? 'Switch to GUI Mode' : 'Switch to CLI Mode'}
            >
              {isCliMode ? <Monitor className="w-4 h-4" /> : <Terminal className="w-4 h-4" />}
              {isCliMode ? 'GUI' : 'CLI'}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-[#94A3B8] hover:text-[#E5E7EB] hover:bg-[#111827]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full inset-x-0 bg-[#020617]/95 backdrop-blur-lg border-t border-[#14B8A6]/15"
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
                  className="block px-3 py-2 text-lg font-medium text-[#94A3B8] hover:text-[#E5E7EB] hover:bg-[#111827] rounded-md cursor-pointer"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Component styles */}
      <style jsx>{`
        .navbar {
          --nav-h: 64px;
          --sat: env(safe-area-inset-top, 0px);
          height: var(--nav-h);
          border-bottom-width: 1px;
          box-sizing: border-box;
        }

        .navbar-bg {
          position: absolute;
          inset: 0;
          background: rgba(2, 6, 23, 0.8);
          backdrop-filter: blur(12px);
          pointer-events: none;
          z-index: 0;
        }

        .navbar-inner {
          position: relative;
          z-index: 1;
          height: 100%;
          padding-top: var(--sat);
        }

        .navbar-row {
          height: calc(var(--nav-h) - var(--sat));
        }

        .nav-active {
          color: #ffffff !important;
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
