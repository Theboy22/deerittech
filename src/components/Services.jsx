import React from 'react';
import '../styles/Services.css';

const services = [
  {
    title: 'Web Development',
    description: 'Modern, responsive websites for business, portfolios, and brands.',
    icon: '🌐',
  },
  {
    title: 'Mobile App Development',
    description: 'Android and cross-platform apps tailored to your needs.',
    icon: '📱',
  },
  {
    title: 'Tech Training & Mentorship',
    description: 'Learn coding, Data Anaylsis,Cybersecurity, design and creativity, and digital skills from experts.',
    icon: '🎓',
  },
  {
    title: 'Branding & Design',
    description: 'Logos, UI/UX, visual identity to set you apart.',
    icon: '🎨',
  },
];

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <h2 className="section-title">What We Do</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index} data-aos="fade-up">
              <div className="icon">{service.icon}</div>
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
