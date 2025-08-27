import React, { useState, useEffect } from 'react';
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('services');
  const [ignoreScroll, setIgnoreScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (ignoreScroll) return;
      const sections = ['services', 'ui-ux', 'connect'];
      let current = 'services';
      for (let i = 0; i < sections.length; i++) {
        const id = sections[i];
        const el = document.getElementById(id);
        if (el) {
          const offset = el.offsetTop - 120;
          const nextEl = document.getElementById(sections[i + 1]);
          const nextOffset = nextEl ? nextEl.offsetTop - 120 : Infinity;
          if (window.scrollY >= offset && window.scrollY < nextOffset) {
            current = id;
          }

          if (
            window.innerHeight + window.scrollY >=
            document.body.offsetHeight
          ) {
            current = 'connect';
          }
        }
      }
      setActiveSection(current);
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled, ignoreScroll]);
  const scrollToSection = (id) => {
    setIgnoreScroll(true);
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => {
        setIgnoreScroll(false);
      }, 500);
    } else {
      setIgnoreScroll(false);
    }
  };
  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <img src="/logo.png" alt="FortitudeLabs Logo" />
        </div>
        <nav>
          <ul>
            <li>
              <a
                href="#services"
                className={activeSection === 'services' ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('services');
                }}
              >
                Development & Integration
              </a>
            </li>
            <li>
              <a
                href="#ui-ux"
                className={activeSection === 'ui-ux' ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('ui-ux');
                }}
              >
                UI & UX Design
              </a>
            </li>
            <li>
              <a
                href="#connect"
                className={activeSection === 'connect' ? 'active' : ''}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('connect');
                }}
              >
                Connect
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
