import React, { useState } from 'react';
import './TrainingModal.css';

function TrainingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    program: '',
  });

  const programs = [
    'Frontend Development',
    'Backend Development',
    'Mobile App Development',
    'UI/UX Design',
    'Data Analysis',
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Optional: validate data here

    // Redirect to payment page (example)
    const query = new URLSearchParams(formData).toString();
    window.location.href = `/payment?${query}`;
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>&times;</button>
        <h2>Enroll for Training</h2>
        <form onSubmit={handleSubmit} className="enroll-form">
          <input type="text" name="name" placeholder="Full Name" required onChange={handleChange} />
          <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
          <input type="tel" name="phone" placeholder="Phone Number" required onChange={handleChange} />
          <input type="text" name="address" placeholder="Residential Address" required onChange={handleChange} />
          <select name="program" required onChange={handleChange}>
            <option value="">Select Training Program</option>
            {programs.map((p, idx) => (
              <option key={idx} value={p}>{p}</option>
            ))}
          </select>
          <button type="submit">Proceed to Payment</button>
        </form>
      </div>
    </div>
  );
}

export default TrainingModal;
