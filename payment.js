// backend/routes/payment.js
const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/initialize', async (req, res) => {
  const { name, email, phone, address, program } = req.body;

  try {
    const response = await axios.post('https://api.paystack.co/transaction/initialize', {
      email,
      amount: 50000, // e.g. ₦5000 = 50000 kobo
      metadata: { name, phone, address, program },
      callback_url: "http://localhost:3000/payment-success"
    }, {
      headers: {
        Authorization: `Bearer Ysk_test_cba96443096d40f82b86b1879cd1fc93334b0870`,
        'Content-Type': 'application/json'
      }
    });

    res.json({ url: response.data.data.authorization_url });
  } catch (error) {
    console.error('Paystack error:', error.message);
    res.status(500).json({ error: 'Payments initialization failed' });
  }
});

module.exports = router;
