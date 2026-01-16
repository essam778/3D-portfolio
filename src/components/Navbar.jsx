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
    if (toggle) {
      setActive('');
    }
  }, [toggle]);

  const renderNavLinks = (isSecondary) => (
    <ul className={`list-none ${isSecondary ? 'flex sm:hidden' : 'hidden sm:flex'} flex-row gap-6`}>
      {navLinks.map((link) => (
        <li
          key={link.id}
          className={`${
            active === link.title ? 'text-white' : isSecondary ? 'text-secondary' : 'text-white'
          } hover:text-white text-[20px] font-medium cursor-pointer`}
          onClick={() => {
            setActive(link.title);
            if (isSecondary) {
              setToggle(false);
            }
          }}
        >
          <a href={`#${link.id}`}>{link.title}</a>
        </li>
      ))}
      <li
        className={`text-${
          isSecondary ? 'secondary' : 'white'
        } hover:text-white text-[20px] font-medium cursor-pointer`}
      >
        <button onClick={toggleResume}>Resume</button>
      </li>
    </ul>
  );

  return (
    <>
      <nav
        className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 bg-primary`}
      >
        <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => {
              setActive('');
              window.scrollTo(0, 0);
            }}
          >
            <p className="text-white text-[20px] font-bold cursor-pointer flex">
              ESSAM&nbsp;
              <span className="sm:block hidden">HISHAM</span>
            </p>
          </Link>
          {renderNavLinks(false)}
          <div className="sm:hidden flex flex-1 justify-end items-center">
            <img
              src={toggle ? close : menu}
              alt="menu"
              className="w-[28px] h-[18px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
            {toggle && (
              <div
                className="fixed inset-0 top-14 left-0 right-0 bottom-0 bg-black/50 z-10"
                onClick={() => setToggle(false)}
              />
            )}
            <div
              className={`fixed top-14 left-0 h-screen w-64 black-gradient z-20 transform transition-transform duration-300 ease-in-out ${
                toggle ? 'translate-x-0' : '-translate-x-full'
              }`}
            >
              <div className="p-6 flex flex-col gap-6">
                {renderNavLinks(true)}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
