import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import StayUpdatedImg from '../assets/newsalert.png';

function Contact() {
  // Contact form state
  const form = useRef();
  const [submitted, setSubmitted] = useState(false);

  // Newsletter subscribe states
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [subscribeError, setSubscribeError] = useState('');
  const [loading, setLoading] = useState(false);

  // Contact form email send
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_82g55wd',
        'template_zvmao3k',
        form.current,
        'e1r2dmoTpsJXTiDxv'
      )
      .then(
        () => {
          setSubmitted(true);
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          alert('Failed to send message. Please try again.');
        }
      );
  };

  // Newsletter subscribe handler
  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribeError('');
    if (!newsletterEmail) {
      setSubscribeError('Please enter your email.');
      return;
    }
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newsletterEmail)) {
      setSubscribeError('Please enter a valid email address.');
      return;
    }

    setLoading(true);

    // Simulate async subscription (replace this with real API call)
    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
      setNewsletterEmail('');
    }, 1500);
  };

  return (
    <>
      {/* CONTACT SECTION */}
      <section className="contact-section">
        <div className="contact-container">
          {/* LEFT SIDE */}
          <div className="contact-info-side">
            <h1>Contact Us</h1>
            <p>
              We’re here to help. Whether you have questions, feedback, or
              require support, our team is ready to assist you.
            </p>
            <ul className="contact-details">
              <li>
                <strong>Call us on:</strong> +2348151152248
              </li>
              <li>
                <strong>WhatsApp:</strong> +2348151152248
              </li>
              <li>
                <strong>Email:</strong>{' '}
                <a href="mailto:hello@ritech.com.ng">
                  hello@ritech.com.ng
                </a>
              </li>
              <li>
                <strong>Address:</strong> Suite 3 Ammah Plaza, Lugbe, Abuja
              </li>
            </ul>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="contact-form-side">
            {submitted && (
              <p className="success-message">
                ✅ Message sent successfully!
              </p>
            )}
            <form ref={form} onSubmit={sendEmail} className="contact-form">
              <div className="input-group">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name *"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name *"
                  required
                />
              </div>
              <input
                type="email"
                name="user_email"
                placeholder="Email address *"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone *"
                required
              />
              <select name="subject" required>
                <option value="">Select Subject</option>
                <option value="general">General Inquiry</option>
                <option value="support">Support</option>
                <option value="feedback">Feedback</option>
              </select>
              <textarea
                name="message"
                placeholder="Message"
                required
              />
              <label className="checkbox-label">
                <input type="checkbox" required /> I agree with Terms of Use and
                Privacy Policy
              </label>
              <button type="submit" className="submit-btn">
                Send your message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* STAY UPDATED SECTION */}
      <section className="stay-updated-section">
        <div className="stay-updated-container">
          <div className="stay-updated-image">
            <img src={StayUpdatedImg} alt="Stay Updated" />
          </div>
          <div className="stay-updated-content">
            <h2>Stay Updated!</h2>
            <p>
              Join our newsletter to receive the latest news, updates, and
              offers directly in your inbox.
            </p>
            <form className="newsletter-form" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Your email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
                disabled={loading || subscribed}
              />
              <button
                type="submit"
                className="subscribe-btn"
                disabled={loading || subscribed}
              >
                {loading ? 'Subscribing...' : subscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
            {subscribeError && (
              <p style={{ color: 'red', marginTop: '0.5rem' }}>
                {subscribeError}
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}



export default Contact;
