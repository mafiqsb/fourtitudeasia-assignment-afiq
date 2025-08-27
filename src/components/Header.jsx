import React, { useState, useEffect } from 'react';
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('services');
  const [ignoreScroll, setIgnoreScroll] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

  // Close sidebar on window resize if not mobile
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 768 && sidebarOpen) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [sidebarOpen]);

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
    setSidebarOpen(false);
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent:
            windowWidth <= 768 ? 'space-between' : 'space-between',
        }}
      >
        {windowWidth <= 768 ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              justifyContent: 'space-between',
            }}
          >
            <div className="logo">
              <img
                src="/logo.png"
                alt="FortitudeLabs Logo"
                style={{
                  height: '24px',
                  width: 'auto',
                  transition: 'height 0.2s',
                }}
              />
            </div>
            <button
              className="sidebar-toggle"
              aria-label="Open menu"
              onClick={() => setSidebarOpen(true)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '2rem',
                cursor: 'pointer',
                marginLeft: '12px',
              }}
            >
              &#9776;
            </button>
          </div>
        ) : (
          // Desktop: logo and nav
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <div className="logo">
              <img
                src="/logo.png"
                alt="FortitudeLabs Logo"
                style={{
                  height: '48px',
                  width: 'auto',
                  transition: 'height 0.2s',
                }}
              />
            </div>
          </div>
        )}
        {/* Desktop nav */}
        <nav
          className="desktop-nav"
          style={{ display: windowWidth > 768 ? 'block' : 'none' }}
        >
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
        {/* Sidebar for mobile */}
        <div
          className={`sidebar ${sidebarOpen ? 'open' : ''}`}
          style={{
            position: 'fixed',
            top: 0,
            right: 0,
            height: '100%',
            width: '70vw',
            background: '#fff',
            boxShadow: '0 0 10px rgba(0,0,0,0.2)',
            zIndex: 1000,
            transform: sidebarOpen ? 'translateX(0)' : 'translateX(100%)',
            transition: 'transform 0.3s ease',
            display: windowWidth <= 768 ? 'block' : 'none',
            paddingTop: '32px',
            paddingLeft: '24px',
            paddingRight: '12px',
          }}
        >
          <button
            className="close-sidebar"
            aria-label="Close menu"
            onClick={() => setSidebarOpen(false)}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '2rem',
              position: 'absolute',
              top: 20,
              right: 20,
              cursor: 'pointer',
            }}
          >
            &times;
          </button>
          <ul style={{ marginTop: 60, paddingLeft: 0 }}>
            <li style={{ paddingLeft: '8px', marginBottom: '20px' }}>
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
            <li style={{ paddingLeft: '8px', marginBottom: '20px' }}>
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
            <li style={{ paddingLeft: '8px' }}>
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
        </div>
      </div>
    </header>
  );
};
export default Header;
