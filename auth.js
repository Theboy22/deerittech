const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

const router = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

// Hardcoded super admin for now (replace with DB later)
const SUPER_ADMIN = {
  email: 'super@test.com',
  passwordHash: '$2a$10$y2Zc85J/EhQGh8sIUOeMQOVLbzWf/2bSCuQIEUCr9d8VNvbAvWNs6', // Super admin Login
  name: 'Super Admin',
  role: 'superadmin'
};

// @route   POST /api/auth/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Check if email matches
  if (email !== SUPER_ADMIN.email) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  // Compare password
  const isMatch = await bcrypt.compare(password, SUPER_ADMIN.passwordHash);
  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  // Create JWT payload
  const payload = {
    name: SUPER_ADMIN.name,
    email: SUPER_ADMIN.email,
    role: SUPER_ADMIN.role
  };

  // Sign token
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

  res.json({
    message: 'Login successful',
    token
  });
});

module.exports = router;
