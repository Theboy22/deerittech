import React from 'react';
import '../styles/Intro.css';

function Intro() {
  return (
    <div className="intro-section" data-aos="fade-up">
      <div className="intro-container">
        <h2 className="intro-title">Welcome to DeerIT Tech Pill Limited</h2>
        <p className="intro-subtitle">
          We provide cutting-edge solutions to help your business thrive in the digital era.
          Our team specializes in design, development, and training tailored to your needs.
        </p>
        <a href="/about" className="intro-btn">Learn More</a>
      </div>
    </div>
  );
}

export default Intro;
