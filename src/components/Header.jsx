import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { HashLink } from 'react-router-hash-link'; // Import HashLink

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="brand">
        <div className="logo-card">
          {/* Link brand to the Home page */}
          <Link to="/" onClick={closeMenu}>
            <img className="avatar" src="/assets/avatar.svg" alt="Himanshu Vishwakarma" />
          </Link>
          <div className="brand-text">
            <Link to="/" style={{textDecoration: 'none', color: 'inherit'}} onClick={closeMenu}>
              <h1>Himanshu Vishwakarma</h1>
            </Link>
            <p className="muted">Computer Science MS — Full‑stack & ML</p>
          </div>
        </div>
      </div>

      <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`} aria-label="Main navigation">
        {/* Change #1: Use <Link> for the new /about page */}
        <Link to="/about" onClick={closeMenu}>About</Link>
        
        {/* Change #2: Use <HashLink> for on-page scrolling */}
        <HashLink smooth to="/#projects" onClick={closeMenu}>Projects</HashLink>
        <HashLink smooth to="/#resume" onClick={closeMenu}>Resume</HashLink>
        
        <HashLink smooth to="/#contact" className="cta" onClick={closeMenu}>Contact</HashLink>
      </nav>

      <button
        className="menu-toggle"
        aria-label="Open menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        ☰
      </button>
    </header>
  );
}