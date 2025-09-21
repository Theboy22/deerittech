import React from 'react';
import '../styles/Contact.css';

function Contact() {
  return (
    <div className="contact-section" data-aos="fade-up">
      <h2 className="section-title">Contact Us</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
