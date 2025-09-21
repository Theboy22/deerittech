import React, { useEffect, useState } from 'react';
import '../styles/FeaturedProjects.css';

function FeaturedProjects() {
  const [projects, setProjects] = useState([]);

  // TODO: Replace this with real fetch
  useEffect(() => {
    const fakeData = [
      {
        id: 1,
        title: 'Smart School App',
        description: 'E-learning platform with student, teacher, and parent dashboards.',
        image: '/assets/project1.jpg',
      },
      {
        id: 2,
        title: 'Agro Marketplace',
        description: 'Connecting farmers to buyers using modern tech.',
        image: '/assets/project2.jpg',
      },
      {
        id: 3,
        title: 'NGO Website Portal',
        description: 'Donation system and community blog with admin backend.',
        image: '/assets/project3.jpg',
      }
    ];
    setProjects(fakeData);
  }, []);

  return (
    <section className="featured-projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="project-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card" data-aos="fade-up">
              <img src={project.image} alt={project.title} />
              <div className="project-content">
                <h4>{project.title}</h4>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        <a href="/projects" className="view-all-btn">View All Projects</a>
      </div>
    </section>
  );
}

export default FeaturedProjects;
