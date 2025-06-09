import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setIsMenuOpen(false); // Close mobile menu after clicking
  };

  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="nav-logo">
          <button onClick={() => handleNavigation('/')}>
            Logo
          </button>
        </div>
        
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <button 
              className="nav-link" 
              onClick={() => handleNavigation('/')}
            >
              Home
            </button>
          </li>
          <li className="nav-item">
            <button 
              className="nav-link" 
              onClick={() => handleNavigation('/about')}
            >
              About
            </button>
          </li>
          <li className="nav-item">
            <button 
              className="nav-link" 
              onClick={() => handleNavigation('/contact')}
            >
              Contact
            </button>
          </li>
        </ul>
        
        <div className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Nav;