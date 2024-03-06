// Navbar.js

import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen((prev) => !prev);
  };

  return (
    <nav className={`navbar ${isNavOpen ? 'open' : ''}`}>
      <div className="nav-container">
        <div className="logo">Your Logo</div>
        <div className={`nav-links ${isNavOpen ? 'show' : ''}`}>
          <Link to="/">Home</Link>
          <a href="#">Products</a>
          <a href="#">About</a>
          <Link to="/auth">Log In/Sign Up</Link>
        </div>
        <div className="toggle-btn" onClick={toggleNav}>
          <div className={`bar ${isNavOpen ? 'open' : ''}`} />
          <div className={`bar ${isNavOpen ? 'open' : ''}`} />
          <div className={`bar ${isNavOpen ? 'open' : ''}`} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
