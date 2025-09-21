// src/api/api.js
export const API = {
  adminDashboard: '/api/admin/dashboard'
};

export function authHeaders() {
  const token = localStorage.getItem('W3F8uN1vZxRgqL8MsD29vPfK7QH5TxEyC9BJpWvLrZzYXPX2AYhVUs3tcq6z7LK1'); // assume you store token here
  return token ? { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' } : { 'Content-Type': 'application/json' };
}
