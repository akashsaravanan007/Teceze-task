import React, { useState } from 'react';
import './Navbar.css';  
import Logo from '../src/img/logo.png';  

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <img src={Logo} alt="Logo" />
        </div>
        <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
          <li><a href="#process">Process</a></li>
          <li><a href="#benefits">Benefits</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#faq">FAQ</a></li>
        </ul>
        <div className={`navbar-button ${isOpen ? 'open' : ''}`}>
          <button className="cta-button">Get Started</button>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          {isOpen ? (
            <div className="close-icon">✖</div> 
          ) : (
            <div className="hamburger-icon">
              <div className="hamburger-lines"></div>
              <div className="hamburger-lines"></div>
              <div className="hamburger-lines"></div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
