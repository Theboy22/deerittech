import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Hero.css';
import heroImg from '../assets/hero.jpg';

function Hero() {
  const navigate = useNavigate();
  return (
    <header 
      className="hero-section" 
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="hero-content" data-aos="fade-up">
        <h1>We Build. We Design. We Train.</h1>
        <p>Empowering businesses and individuals through modern digital solutions.</p>
        
        {/* Get Started navigates to contact page */}
        <button onClick={() => navigate('/contact')} className="hero-btn">
          Get Started
        </button>

        
      </div>
    </header>
  );
}

export default Hero;
