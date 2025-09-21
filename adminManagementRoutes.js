const express = require('express');
const bcrypt = require('bcryptjs'); // only to hash newly-created admin passwords
const { readAdmins, writeAdmins } = require('../utils/jsonDb');
const verifyAdminToken = require('../middleware/verifyAdminToken');

const router = express.Router();

// limit actions to superadmin only
const verifySuper = (req, res, next) => {
  if (req.admin?.role !== 'superadmin') {
    return res.status(403).json({ message: 'Forbidden: superadmin only' });
  }
  next();
};

// ============ LIST ADMINS ============
router.get('/admins', verifyAdminToken, verifySuper, (req, res) => {
  const admins = readAdmins();
  // never return password hashes to client
  const safe = admins.map(({ password, ...rest }) => rest);
  res.json(safe);
});

// ============ CREATE ADMIN ============
router.post('/admins', verifyAdminToken, verifySuper, (req, res) => {
  const { name, email, password, role = 'admin' } = req.body || {};

  if (!name || !email || !password)
    return res.status(400).json({ message: 'name, email, password are required' });

  const admins = readAdmins();

  if (admins.some(a => a.email.toLowerCase() === email.toLowerCase()))
    return res.status(409).json({ message: 'Email already exists' });

  const id = Math.max(...admins.map(a => a.id), 0) + 1;
  const hash = bcrypt.hashSync(password, 10);

  const newAdmin = {
    id,
    name,
    email,
    password: hash,
    role,               // 'admin' by default
    status: 'active'    // active on create
  };

  admins.push(newAdmin);
  writeAdmins(admins);

  const { password: _, ...safe } = newAdmin;
  res.status(201).json({ message: 'Admin created', admin: safe });
});

// ============ SUSPEND ADMIN ============
router.patch('/admins/:id/suspend', verifyAdminToken, verifySuper, (req, res) => {
  const id = Number(req.params.id);
  const admins = readAdmins();
  const admin = admins.find(a => a.id === id);

  if (!admin) return res.status(404).json({ message: 'Admin not found' });
  if (admin.role === 'superadmin') return res.status(400).json({ message: 'Cannot suspend superadmin' });

  admin.status = 'suspended';
  writeAdmins(admins);

  const { password, ...safe } = admin;
  res.json({ message: 'Admin suspended', admin: safe });
});

// ============ ACTIVATE ADMIN ============
router.patch('/admins/:id/activate', verifyAdminToken, verifySuper, (req, res) => {
  const id = Number(req.params.id);
  const admins = readAdmins();
  const admin = admins.find(a => a.id === id);

  if (!admin) return res.status(404).json({ message: 'Admin not found' });

  admin.status = 'active';
  writeAdmins(admins);

  const { password, ...safe } = admin;
  res.json({ message: 'Admin activated', admin: safe });
});

module.exports = router;
