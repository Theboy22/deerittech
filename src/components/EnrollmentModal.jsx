
import React, { useState } from 'react';
import axios from 'axios';
import '../styles/TrainingModal.css'; // ✅ Ensure styles are applied

function EnrollmentModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    program: '',
  });

  const programOptions = [
    { label: 'Web Development', value: 'Web Development', amount: 5000 },
    { label: 'Mobile App Development', value: 'Mobile App Development', amount: 8000 },
    { label: 'Graphics & UI/UX', value: 'Graphics & UI/UX', amount: 4500 },
  ];

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const selected = programOptions.find(p => p.value === formData.program);
    const amount = selected ? selected.amount : 5000;

    try {
      const response = await axios.post('/api/paystack/initialize', {
        ...formData,
        amount,
      });

      window.location.href = response.data.authorization_url;
    } catch (err) {
      alert('Payment initialization failed.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>&times;</button>
        <h2>Training Enrollment</h2>
        <form className="modal-form" onSubmit={handleSubmit}>
          <label>
            Full Name
            <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
          </label>
          <label>
            Email
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
          <label>
            Phone Number
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          </label>
          <label>
            Address
            <input type="text" name="address" value={formData.address} onChange={handleChange} required />
          </label>
          <label>
            Training Program
            <select name="program" value={formData.program} onChange={handleChange} required>
              <option value="">Select a program</option>
              {programOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label} – ₦{option.amount.toLocaleString()}
                </option>
              ))}
            </select>
          </label>
          <button type="submit" disabled={loading}>
            {loading ? 'Processing...' : 'Proceed to Paystack'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default EnrollmentModal;
