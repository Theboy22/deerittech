// src/pages/services/Training.jsx
import React, { useState, useEffect } from 'react';
import { FaLaptopCode, FaMobileAlt, FaPaintBrush } from 'react-icons/fa';
import EnrollmentModal from '../../components/EnrollmentModal';
import Preloader from '../../components/Preloader';
import '../../styles/Training.css';

const Training = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(true); // Preloader state

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // Adjust time if needed
    return () => clearTimeout(timer);
  }, []);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  if (loading) return <Preloader />;

  return (
    <div className="training-page">
      <section className="training-hero">
        <h1>Professional Tech Training</h1>
        <p>Boost your skills in web, mobile, and UI/UX design through our expert-led programs.</p>
      </section>

      <section className="training-features">
        <div className="feature-card">
          <div className="feature-icon"><FaLaptopCode /></div>
          <h3>Web Development</h3>
          <p>Master HTML, CSS, JavaScript, React & backend technologies.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon"><FaMobileAlt /></div>
          <h3>Mobile App Development</h3>
          <p>Build powerful mobile apps using React Native and Flutter.</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon"><FaPaintBrush /></div>
          <h3>Graphics & UI/UX</h3>
          <p>Design beautiful interfaces and user experiences using Figma and Adobe tools.</p>
        </div>
      </section>

      <section className="training-cta">
        <h2>Ready to get started?</h2>
        <button className="cta-button" onClick={openModal}>Enroll Now</button>
      </section>

      <EnrollmentModal isOpen={modalOpen} onClose={closeModal} />
    </div>
  );
};

export default Training;
