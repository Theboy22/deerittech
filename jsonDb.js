const fs = require('fs');
const path = require('path');

const ADMIN_FILE = path.join(__dirname, '..', 'data', 'admins.json');

function readAdmins() {
  const raw = fs.readFileSync(ADMIN_FILE, 'utf-8');
  return JSON.parse(raw);
}

function writeAdmins(admins) {
  fs.writeFileSync(ADMIN_FILE, JSON.stringify(admins, null, 2), 'utf-8');
}

module.exports = { readAdmins, writeAdmins };
