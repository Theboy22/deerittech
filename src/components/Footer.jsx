import React from 'react';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer-section">
      <div className="social-links">
        <a href="https://facebook.com">Facebook</a>
        <a href="https://twitter.com">Twitter</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>
      <p>&copy; {new Date().getFullYear()} DeerIT Tech Pill. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
