import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomeNavbar.css';
import logo from '../assets/RiteLogo.png';

function HomeNavbar() {
  const [dropdown, setDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = (menu) => {
    if (dropdown === menu) {
      setDropdown(null);
    } else {
      setDropdown(menu);
    }
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setDropdown(null);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <img src={logo} alt="Rite Logo" />
        </Link>

        {/* Hamburger Menu Button */}
        <div
          className={`hamburger ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation Menu */}
        <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={closeMenu}>Home</Link>
          </li>

          {/* Ecosystem */}
          <li
            className="nav-item dropdown"
            onClick={() => window.innerWidth <= 768 ? toggleDropdown('ecosystem') : null}
            onMouseEnter={() => window.innerWidth > 768 && toggleDropdown('ecosystem')}
            onMouseLeave={() => window.innerWidth > 768 && toggleDropdown(null)}
          >
            <span className="nav-link">Ecosystem ▾</span>
            {dropdown === 'ecosystem' && (
              <div className="dropdown-menu ecosystem-dropdown">
                <div className="dropdown-column">
                  <h4>Explore Our Ecosystem </h4>
                  <Link to="/marketplace" onClick={closeMenu}>Marketplace</Link>
                  <Link to="/crypto" onClick={closeMenu}>Cryptocurrency</Link>
                  <Link to="/community" onClick={closeMenu}>Community</Link>
                </div>
                <div className="dropdown-column">
                  <h4>Build</h4>
                  <Link to="/developers" onClick={closeMenu}>Developers</Link>
                  <Link to="/tools" onClick={closeMenu}>Tools</Link>
                  <Link to="/docs" onClick={closeMenu}>Docs</Link>
                </div>
                <div className="dropdown-column">
                  <h4>Our Solution</h4>
                  <Link to="/cards" onClick={closeMenu}>Rite Card</Link>
                  <Link to="/Agents" onClick={closeMenu}>Rite Agent</Link>
                  <Link to="/Education" onClick={closeMenu}>EduTech</Link>
                </div>
              </div>
            )}
          </li>

          {/* Services */}
          <li
            className="nav-item dropdown"
            onClick={() => window.innerWidth <= 768 ? toggleDropdown('services') : null}
            onMouseEnter={() => window.innerWidth > 768 && toggleDropdown('services')}
            onMouseLeave={() => window.innerWidth > 768 && toggleDropdown(null)}
          >
            <span className="nav-link">Services ▾</span>
            {dropdown === 'services' && (
              <div className="dropdown-menu">
                <Link to="/services/web" onClick={closeMenu}>Web Development</Link>
                <Link to="/services/apps" onClick={closeMenu}>App Development</Link>
                <Link to="/services/training" onClick={closeMenu}>Training</Link>
                <Link to="/services/career" onClick={closeMenu}>Career</Link>
              </div>
            )}
          </li>

          {/* Company */}
          <li
            className="nav-item dropdown"
            onClick={() => window.innerWidth <= 768 ? toggleDropdown('company') : null}
            onMouseEnter={() => window.innerWidth > 768 && toggleDropdown('company')}
            onMouseLeave={() => window.innerWidth > 768 && toggleDropdown(null)}
          >
            <span className="nav-link">Company ▾</span>
            {dropdown === 'company' && (
              <div className="dropdown-menu">
                <Link to="/about" onClick={closeMenu}>About Us</Link>
              </div>
            )}
          </li>

          {/* Support */}
          <li
            className="nav-item dropdown"
            onClick={() => window.innerWidth <= 768 ? toggleDropdown('support') : null}
            onMouseEnter={() => window.innerWidth > 768 && toggleDropdown('support')}
            onMouseLeave={() => window.innerWidth > 768 && toggleDropdown(null)}
          >
            <span className="nav-link">Support ▾</span>
            {dropdown === 'support' && (
              <div className="dropdown-menu">
                <Link to="/contact" onClick={closeMenu}>Contact Us</Link>
              </div>
            )}
          </li>

          {/* Mobile Buttons */}
          <div className="mobile-buttons">
            <Link to="/admin/dashboard" className="btn login-btn" onClick={closeMenu}>Admin page</Link>
          </div>
        </ul>

        {/* Desktop Buttons */}
        <div className="navbar-buttons">
          <Link to="/admin/dashboard" className="btn login-btn">Admin page</Link>
        </div>
      </div>
    </nav>
  );
}

export default HomeNavbar;
