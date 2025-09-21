import React from 'react';
import '../styles/Industries.css';

// Example image imports — replace with your actual images
import industry1 from '../assets/tech.png';
import industry2 from '../assets/technova.png';
import industry3 from '../assets/tech.png';

function Industries() {
  const industries = [
    { id: 1, title: 'Finance & Banking', image: industry1 },
    { id: 2, title: 'Healthcare & Wellness', image: industry2 },
    { id: 3, title: 'E-commerce & Retail', image: industry3 },
  ];

  return (
    <section className="industries-section">
      <div className="industries-container">
        <h2>Industries We Serve</h2>
        <p>Providing innovative solutions tailored to diverse business needs.</p>

        <div className="industries-grid">
          {industries.map((item) => (
            <div key={item.id} className="industry-card" data-aos="fade-up">
              <img src={item.image} alt={item.title} className="industry-image" />
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Industries;
