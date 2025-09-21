// src/pages/About.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaUsers,
  FaBullseye,
  FaEye,
  FaUserFriends,
} from 'react-icons/fa';
import '../styles/About.css';
import Preloader from '../components/Preloader';

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleViewTeam = () => {
    const teamSection = document.getElementById('team');
    if (teamSection) {
      teamSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) return <Preloader />;

  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1 data-aos="fade-up">About Us</h1>
          <p data-aos="fade-up" data-aos-delay="150">
            Empowering innovation and building solutions for a smarter future.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-section">
        <motion.div 
          className="container"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="icon-title">
            <FaBullseye className="about-icon" />
            <h2>Our Mission</h2>
          </div>
          <p>
            To deliver tech solutions that transform lives and drive sustainable innovation.
          </p>
        </motion.div>
      </section>

      {/* Vision Section */}
      <section className="about-section alt-bg">
        <motion.div 
          className="container"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="icon-title">
            <FaEye className="about-icon" />
            <h2>Our Vision</h2>
          </div>
          <p>
            To be Africa’s leading tech hub for solutions, education, and digital transformation.
          </p>
        </motion.div>
      </section>

      {/* Core Values Section */}
      <section className="about-section">
        <motion.div 
          className="container"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="icon-title">
            <FaUsers className="about-icon" />
            <h2>Core Values</h2>
          </div>
          <ul className="about-list">
            <li>Innovation</li>
            <li>Integrity</li>
            <li>Excellence</li>
            <li>Collaboration</li>
          </ul>
        </motion.div>
      </section>

      {/* View Team Section */}
      <section className="about-section team-preview alt-bg">
        <motion.div 
          className="container"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="icon-title">
            <FaUserFriends className="about-icon" />
            <h2>Meet Our Team</h2>
          </div>
          <p>
            We’re powered by a talented group of developers, designers, and innovator.
          </p>
          <button onClick={handleViewTeam} className="btn-primary">
            View Team →
          </button>
        </motion.div>
      </section>
    </motion.div>
  );
};

export default About;
