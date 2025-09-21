// server/routes/paystack.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const router = express.Router();

const PAYSTACK_SECRET_KEY = 'sk_test_cba96443096d40f82b86b1879cd1fc93334b0870';

// ==========================
// Enable CORS for frontend
// ==========================
router.use(cors({ origin: 'http://localhost:3000' }));

// ==========================
// @route   POST /api/paystack/initialize
// @desc    Initialize Paystack Payment
// ==========================
router.post('/initialize', async (req, res) => {
  const { fullName, email, phone, address, program, amount } = req.body;

  try {
    // Ensure amount is number (Naira → Kobo)
    const koboAmount = Math.floor(Number(amount) * 100);

    const response = await axios.post(
      'https://api.paystack.co/transaction/initialize',
      {
        email,
        amount: koboAmount,
        metadata: {
          fullName,
          phone,
          address,
          program,
        },
        callback_url: 'http://localhost:3000/verify-payment', // React page
      },
      {
        headers: {
          Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const { authorization_url } = response.data.data;
    res.status(200).json({ authorization_url });
  } catch (error) {
    console.error(
      'Paystack init error:',
      error.response?.data || error.message
    );
    res.status(500).json({
      message:
        error.response?.data?.message || 'Payment initialization failed',
      error: error.response?.data || error.message,
    });
  }
});

// ==========================
// @route   GET /api/paystack/verify/:reference
// @desc    Verify Paystack Payment
// ==========================
router.get('/verify/:reference', async (req, res) => {
  const { reference } = req.params;

  try {
    const response = await axios.get(
      `https://api.paystack.co/transaction/verify/${reference}`,
      {
        headers: {
          Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
        },
      }
    );

    const data = response.data.data;

    // You can save transaction to DB here if needed

    res.status(200).json({
      status: 'success',
      message: 'Payment verified successfully',
      data,
    });
  } catch (error) {
    console.error(
      'Paystack verify error:',
      error.response?.data || error.message
    );
    res.status(500).json({
      status: 'error',
      message: error.response?.data?.message || 'Payment verification failed',
      error: error.response?.data || error.message,
    });
  }
});

module.exports = router;
