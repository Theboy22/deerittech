const express = require('express');
const router = express.Router();
const verifyAdminToken = require('../middleware/verifyAdminToken');
const bcrypt = require('bcryptjs');

// ===== Protected GET /profile =====
router.get('/profile', verifyAdminToken, (req, res) => {
  // req.admin comes from JWT payload
  res.json({
    name: req.admin.name || 'Super Admin', // fallback name
    email: req.admin.email,
    role: req.admin.role
  });
});

// ===== Protected POST /create-admin (superadmin only) =====
router.post('/create-admin', verifyAdminToken, (req, res) => {
  // Only superadmin from JWT can create new admins
  if (req.admin.role !== 'superadmin') {
    return res.status(403).json({ message: 'Forbidden: Only super admins can create admins' });
  }

  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Hash the password before storing (for now we just return it in response)
  const hashedPassword = bcrypt.hashSync(password, 10);

  // In future, you would save { name, email, hashedPassword, role: 'admin' } to DB
  res.json({
    message: 'New admin created successfully',
    admin: { name, email, hashedPassword, role: 'admin' }
  });
});

module.exports = router;
