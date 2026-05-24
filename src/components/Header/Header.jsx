import React, { useState, useEffect } from 'react';
import './Header.css';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import DarkMode from '../DarkMode/DarkMode';
import { FormattedMessage } from 'react-intl';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { to: 'inicio', id: 'home' },
    { to: 'sobre-mi', id: 'about' },
    { to: 'education', id: 'education' },
    { to: 'servicios', id: 'skills' },
    { to: 'proyectos', id: 'projects' },
    { to: 'hackathon', id: 'achievements' },
    { to: 'contactos', id: 'contact' },
  ];

  return (
    <header className={`site-header ${scrolled ? 'header-scrolled' : ''}`}>
      <NavLink className="logo" to="/">
        <span className="logo-bracket">&lt;</span>
        <span className="logo-name">Shravan</span>
        <span className="logo-bracket">/&gt;</span>
      </NavLink>

      <nav className={`navbar ${menuOpen ? 'nav-active' : ''}`}>
        {navLinks.map((item) => (
          <Link
            key={item.to}
            to={item.to}
            spy
            offset={-150}
            href={`#${item.to}`}
            onClick={closeMenu}
          >
            <FormattedMessage id={item.id} />
          </Link>
        ))}
      </nav>

      <div className="header-right">
        <div className="switch" id="switch">
          <DarkMode />
        </div>
        <div
          className={`menu-toggle ${menuOpen ? 'menu-active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          role="button"
          tabIndex={0}
          aria-label="Toggle navigation"
          onKeyDown={(e) => e.key === 'Enter' && setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </div>
      </div>
    </header>
  );
};

export default Header;
