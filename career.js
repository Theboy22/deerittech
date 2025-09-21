const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadCV');
const CareerApplication = require('../models/CareerApplication');

router.post('/apply', upload.single('cv'), async (req, res) => {
  try {
    const { fullName, email, phone, role } = req.body;
    const cvFilename = req.file.filename;

    const newApplication = new CareerApplication({
      fullName,
      email,
      phone,
      role,
      cvFilename,
    });

    await newApplication.save();
    res.status(201).json({ success: true, message: 'Application submitted successfully.' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error. Could not submit application.' });
  }
});

module.exports = router;
