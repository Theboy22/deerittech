// ===== 1️⃣ Import modules =====
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const adminRoutes = require('./routes/adminRoutes'); // 👈 added
const adminManagementRoutes = require('./routes/adminManagementRoutes');
const paystackRoutes = require('./routes/paystack');

// ===== 2️⃣ Load environment variables =====
dotenv.config();

// ===== 3️⃣ Create Express app =====
const app = express();

// ===== 4️⃣ Middleware =====
app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true
}));
app.use(express.json());
app.use(morgan('dev'));

// ===== 5️⃣ JWT verification middleware =====
const verifyAdminToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.admin = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized: Invalid token' });
  }
};

// ===== 6️⃣ Admin login route =====
app.post('/api/admin/login', (req, res) => {
  const { email, password } = req.body;

  if (email !== process.env.ADMIN_USERNAME) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  const isValid = bcrypt.compareSync(password, process.env.ADMIN_PASSWORD_HASH);
  if (!isValid) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  const token = jwt.sign(
    { email: process.env.ADMIN_USERNAME, name: 'Super Admin', role: 'superadmin' },
    process.env.JWT_SECRET,
    { expiresIn: '1h' }
  );

  res.json({ token });
});

// ===== 7️⃣ Protected admin routes =====
app.use('/api/admin', adminRoutes); // 👈 mount router
app.use('/api/admin', adminManagementRoutes);
app.use('/api/paystack', paystackRoutes);

// ===== 8️⃣ Health check =====
app.get('/', (req, res) => res.send('Portfolio Backend API running...'));
app.get('/api/health', (req, res) => res.json({ status: 'ok', timestamp: new Date().toISOString() }));

// ===== 9️⃣ Global error handler =====
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ message: err.message || 'Internal Server Error' });
});

// ===== 10️⃣ Start server =====
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
