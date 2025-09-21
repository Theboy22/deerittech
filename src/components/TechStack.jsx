import React from 'react';
import '../styles/TechStack.css';
import htmlLogo from '../assets/RiteLogo.png';
import cssLogo from '../assets/RiteLogo.png';
import jsLogo from '../assets/RiteLogo.png';
import reactLogo from '../assets/RiteLogo.png';

function TechStack() {
  const techs = [
    { img: htmlLogo, name: 'HTML5' },
    { img: cssLogo, name: 'CSS3' },
    { img: jsLogo, name: 'JavaScript' },
    { img: reactLogo, name: 'React' },
  ];

  return (
    <div className="techstack-section">
      <h2 className="section-title">Our Tech Stack</h2>
      <div className="tech-slider">
        <div className="tech-slide-track">
          {techs.concat(techs).map((tech, index) => (
            <div key={index} className="tech-slide">
              <img src={tech.img} alt={tech.name} />
              <p>{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechStack;
