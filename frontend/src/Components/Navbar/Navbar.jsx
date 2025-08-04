import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Store navigation links in an array to keep the code clean and scalable.
  const navLinks = [
    { text: 'Jobs', path: '/jobs' },
    { text: 'Companies', path: '/companies' },
    { text: 'Resources', path: '/resources' },
    { text: 'Salary Guide', path: '/salary-guide' },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  // Effect to handle scroll detection for styling
  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state to true if user scrolls more than 10px, otherwise false
      setIsScrolled(window.scrollY > 10);
    };

    // Add event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array means this effect runs only once on mount

  // Combine class names dynamically
  const navbarClasses = `navbar ${isScrolled ? 'scrolled' : ''}`;

  return (
    // The 'scrolled' class is now dynamically added here
    <header className={navbarClasses}>
      <div className="navbar-container">
        <span className="logo" onClick={() => navigate('/')}>
          HireOnyx
        </span>

        {/* The nav-menu now correctly centers the links */}
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
