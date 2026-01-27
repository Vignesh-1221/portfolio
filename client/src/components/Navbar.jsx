import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Terminal, Monitor } from 'lucide-react';

const navItems = ['home', 'about', 'skills', 'experience', 'projects'];

const Navbar = ({ isCliMode, toggleMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#020617]/95 backdrop-blur-md shadow-lg border-b border-[#14B8A6]/15'
          : 'bg-[#020617]/80'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-2xl font-bold bg-gradient-to-r from-[#E5E7EB] to-[#14B8A6] bg-clip-text text-transparent cursor-pointer"
            >
              KSV
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={item}
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-60}
                    activeClass="nav-active"
                    className="nav-link relative px-3 py-2 text-base font-medium text-[#94A3B8] hover:text-[#E5E7EB] transition-all duration-300 cursor-pointer group"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#14B8A6] to-[#5EEAD4] group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right-side buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              onClick={handleDownload}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#14B8A6] hover:bg-[#5EEAD4] text-[#020617] px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 shadow-lg"
            >
              <Download className="w-4 h-4" />
              Resume
            </motion.button>

            <motion.button
              onClick={toggleMode}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#111827] hover:bg-[#020617] text-[#E5E7EB] px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 flex items-center gap-2 shadow-lg"
              title={isCliMode ? "Switch to GUI Mode" : "Switch to CLI Mode"}
            >
              {isCliMode ? <Monitor className="w-4 h-4" /> : <Terminal className="w-4 h-4" />}
              {isCliMode ? 'GUI' : 'CLI'}
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#94A3B8] hover:text-[#E5E7EB] hover:bg-[#111827]"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-[#020617]/95 backdrop-blur-md border-t border-[#14B8A6]/15">
              {navItems.map((item) => (
                <Link
                  key={item}
                  to={item}
                  spy={true}
                  smooth={true}
                  duration={500}
                  offset={-60}
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

      <style jsx>{`
        .nav-active {
          color: white !important;
        }
        .nav-active span {
          width: 100% !important;
        }
      `}</style>
    </motion.nav>
  );
};

export default Navbar;
