import React from 'react';
import Slider from 'react-slick';
import '../styles/Team.css';
import member1 from '../assets/Team1.png';
import member2 from '../assets/Team2.jpg';
import member3 from '../assets/Team3.jpg';
import teamBg from '../assets/team-bg1.png';

function Team() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };

  const team = [
    { img: member1, name: 'James Timothy P.', role: 'Co-Founder | CTO & Frontend Dev' },
    { img: member2, name: 'Igwe Promise', role: 'Co-Founder | CFO & Data Analyst' },
    { img: member3, name: 'Okpo John', role: 'Co-Founder | CEO & Full Stack Dev' },
  ];

  return (
    <section
      id="team"  // 👈 Add this for scroll target
      className="team-section hero-style"
      style={{ backgroundImage: `url(${teamBg})` }}
    >
      <div className="overlay"></div>
      <div className="container">
        <h2 className="section-title">Meet Our Team</h2>
        <p className="section-subtitle">
          The minds behind our success.
        </p>
        <Slider {...settings}>
          {team.map((member, index) => (
            <div key={index} className="team-card" data-aos="fade-up">
              <div className="team-image">
                <img src={member.img} alt={member.name} />
              </div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Team;
