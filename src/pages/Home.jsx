import React from 'react';
import Hero from '../components/Hero';
import Intro from '../components/Intro';
import TechStack from '../components/TechStack';
import Partners from '../components/Partners';
import Team from '../components/Team';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
// import Industries from '../components/Industries'; // Uncomment if you have this

import '../styles/Home.css';

function Home() {
  return (
    <>
      <section className="home-section section-dark">
        <Intro />
      </section>

      <section className="home-section section-light">
        <Hero />
      </section>

      <section className="home-section section-light">
        <TechStack />
      </section>

      {/* Uncomment when Industries component is ready */}
      {/* <section className="home-section section-light">
        <Industries />
      </section> */}

      <section className="home-section section-dark">
        <Partners />
      </section>

      <section className="home-section section-light">
        <Team />
      </section>

      <section className="home-section section-dark">
        <Contact />
      </section>

      <Footer />
    </>
  );
}

export default Home;
