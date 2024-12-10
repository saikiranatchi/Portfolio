import React, { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">Portfolio.</div>
      <button className="navbar-toggler" onClick={toggleMenu}>
          <span className={`toggler-icon ${isOpen ? 'open' : ''}`}></span>
          <span className={`toggler-icon ${isOpen ? 'open' : ''}`}></span>
          <span className={`toggler-icon ${isOpen ? 'open' : ''}`}></span>
        </button>
        <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#certifications" onClick={closeMenu}>Certifications</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>
    </nav>
  );
}

export default Navbar;
