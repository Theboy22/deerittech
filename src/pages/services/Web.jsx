// src/pages/services/Web.jsx
import React, { useState, useEffect } from 'react';
import './Web.css';
import { FaMobileAlt, FaSearch, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Preloader from '../../components/Preloader'; // ✅ import Preloader

function WebDevelopment() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5s preloader
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />; // ✅ show preloader before content

  return (
    <div className="web-page">
      <section className="web-hero">
        <h1>Web Development Services</h1>
        <p>We build fast, scalable, and modern websites tailored to your business goals.</p>
      </section>

      <section className="web-features">
        {[
          {
            icon: <FaMobileAlt />,
            title: 'Responsive Design',
            desc: 'Your website will look great on all devices, from mobile to desktop.',
          },
          {
            icon: <FaSearch />,
            title: 'SEO Optimization',
            desc: 'We ensure your site is search engine friendly for better visibility and reach.',
          },
          {
            icon: <FaRocket />,
            title: 'Fast & Secure',
            desc: 'We deliver lightning-fast websites with industry-standard security.',
          },
        ].map((feature, index) => (
          <motion.div
            className="feature-card"
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.9 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div whileHover={{ rotate: 10 }} className="feature-icon">
              {feature.icon}
            </motion.div>
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
          </motion.div>
        ))}
      </section>

      <section className="web-cta">
        <h2>Ready to build your next website?</h2>
        <a href="/contact" className="cta-button">Get in Touch</a>
      </section>
    </div>
  );
}

export default WebDevelopment;
