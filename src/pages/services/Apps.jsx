// src/pages/services/Apps.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaMobileAlt,
  FaApple,
  FaAndroid,
  FaCloudUploadAlt,
  FaCreditCard,
  FaSchool,
} from 'react-icons/fa';
import Preloader from '../../components/Preloader'; // ✅ import preloader
import '../../styles/ServicesPages.css';

const features = [
  {
    icon: <FaMobileAlt className="feature-icon" />,
    title: 'Cross-Platform Apps',
    description:
      'Build once, deploy everywhere—iOS, Android, and web using modern frameworks.',
  },
  {
    icon: <FaApple className="feature-icon" />,
    title: 'iOS Native Development',
    description:
      'Professional Swift/Swift UI apps with App Store optimization and compliance.',
  },
  {
    icon: <FaCreditCard className="feature-icon" />,
    title: 'Multiple Payment Systems',
    description:
      'Support for cards, bank transfers, PayPal, and mobile payments integration.',
  },
  {
    icon: <FaSchool className="feature-icon" />,
    title: 'School Management System',
    description:
      'Input scores, compute grades, manage attendance, and generate result sheets.',
  },
  {
    icon: <FaAndroid className="feature-icon" />,
    title: 'Android Native Development',
    description:
      'Robust Android apps with clean UI/UX using Java, Kotlin, and Material Design.',
  },
  {
    icon: <FaCloudUploadAlt className="feature-icon" />,
    title: 'App Deployment & Support',
    description:
      'Assistance with Play Store / App Store deployment, updates, and post-launch support.',
  },
];

function Apps() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // Show preloader for 1.5s
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />; // ✅ show preloader first

  return (
    <div className="web-page">
      <section className="web-hero">
        <h1>Mobile App Development</h1>
        <p>
          We design and develop modern, fast, and scalable apps tailored to your
          business needs.
        </p>
      </section>

      <section className="web-features">
        {features.map((feat, index) => (
          <motion.div
            key={index}
            className="feature-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {feat.icon}
            <h3>{feat.title}</h3>
            <p>{feat.description}</p>
          </motion.div>
        ))}
      </section>

      <section className="web-cta">
        <h2>Ready to Build Your App?</h2>
        <a href="/contact" className="cta-button">
          Get Started
        </a>
      </section>
    </div>
  );
}

export default Apps;
