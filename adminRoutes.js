// backend/routes/adminRoutes.js
const express = require("express");
const router = express.Router();
const verifyAdminToken = require("../middleware/verifyAdminToken");

// Profile
router.get("/profile", verifyAdminToken, (req, res) => {
  res.json(req.admin); // from token
});

// Create
router.post("/create", verifyAdminToken, (req, res) => {
  const { email, name } = req.body;
  return res.json({ message: `User ${name} with ${email} created (dummy)` });
});

// Suspend
router.post("/suspend", verifyAdminToken, (req, res) => {
  const { email } = req.body;
  return res.json({ message: `User with email ${email} suspended (dummy)` });
});

// Activate
router.post("/activate", verifyAdminToken, (req, res) => {
  const { email } = req.body;
  return res.json({ message: `User with email ${email} activated (dummy)` });
});

module.exports = router;
