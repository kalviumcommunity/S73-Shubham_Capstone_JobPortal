import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Store navigation links in an array to keep the code clean and scalable.
  const navLinks = [
    { text: 'Jobs', path: '/jobs' },
    { text: 'Companies', path: '/companies' },
    { text: 'Resources', path: '/resources' },
    { text: 'Salary Guide', path: '/salary-guide' },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <span className="logo" onClick={() => navigate('/')}>
          HireOnyx
        </span>

        <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.text}>
                {/* NavLink automatically adds the 'active' class for styling */}
                <NavLink to={link.path} className="nav-item" onClick={closeMenu}>
                  {link.text}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="auth-buttons">
          <span className="signin">Sign in</span>
          <button className="signup">Sign up</button>
        </div>

        <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </div>
      </div>
    </header>
  );
};

export default Navbar;