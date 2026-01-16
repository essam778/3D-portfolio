import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { close, menu } from '../assets';
import { navLinks } from '../constants';
import { styles } from '../styles';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  const toggleResume = () => {
    const resumeUrl = '/Resume.pdf';
    window.open(resumeUrl);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (toggle) setToggle(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [toggle]);

  const handleLinkClick = (title) => {
    setActive(title);
    setToggle(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <nav
        className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo/Name */}
          <Link
            to="/"
            className="text-white text-[18px] sm:text-[20px] font-bold cursor-pointer"
            onClick={() => {
              setActive('');
              window.scrollTo(0, 0);
            }}
          >
            ESSAM<span className="hidden sm:inline">&nbsp;HISHAM</span>
          </Link>

          {/* Menu Button */}
          <div className="flex items-center gap-8">
            <button
              onClick={() => setToggle(!toggle)}
              className="flex flex-col gap-1.5 cursor-pointer hover:opacity-80 transition-opacity"
              aria-label="Toggle menu"
            >
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${toggle ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${toggle ? 'opacity-0' : ''}`}></div>
              <div className={`w-6 h-0.5 bg-white transition-all duration-300 ${toggle ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {toggle && (
        <div className="fixed inset-0 top-20 z-10 bg-black/50" onClick={() => setToggle(false)} />
      )}
      
      <div
        className={`fixed top-20 left-0 h-screen w-80 bg-gradient-to-b from-black-200 to-black-300 z-20 transform transition-transform duration-300 ease-in-out shadow-lg ${
          toggle ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-8 flex flex-col gap-8 h-full overflow-y-auto">
          <ul className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`text-base font-medium transition-colors ${
                    active === link.title
                      ? 'text-[#915EFF]'
                      : 'text-white hover:text-[#915EFF]'
                  }`}
                  onClick={() => handleLinkClick(link.title)}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          <div className="border-t border-white/20 pt-6">
            <button
              onClick={toggleResume}
              className="w-full px-4 py-2 bg-[#915EFF] hover:bg-[#7e4cc3] text-white rounded-lg font-medium transition-colors"
            >
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
