import React from 'react';
import '../styles/Partners.css';
import partner1 from '../assets/partner2.png';
import partner2 from '../assets/partner3.png';
import partner3 from '../assets/partner4.png';

function Partners() {
  const partners = [partner1, partner2, partner3];

  return (
    <div className="partners-section">
      <h2 className="section-title">Our Partners</h2>
      <div className="slider">
        <div className="slide-track">
          {partners.concat(partners).map((logo, i) => (
            <div className="slide" key={i}>
              <img src={logo} alt={`Partner ${i + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Partners;
