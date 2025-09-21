import React from 'react';
import { Link, Routes, Route, Navigate } from 'react-router-dom';
import Users from './Users';
import Profile from './Profile'; // create this simple file if you want to keep it modular

export default function AdminDashboard() {
  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    window.location.href = '/admin/login';
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <aside style={{ width: 250, background: '#222', color: '#fff', padding: 20 }}>
        <h2>Deerit Tech</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          <li><Link to="/admin/profile" style={{ color: '#fff' }}>Profile</Link></li>
          <li><Link to="/admin/users" style={{ color: '#fff' }}>Manage Admins</Link></li>
        </ul>
        <button onClick={handleLogout} style={{ marginTop: 16 }}>Logout</button>
      </aside>

      <main style={{ flex: 1, padding: 20 }}>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element={<Navigate to="/admin/users" replace />} />
        </Routes>
      </main>
    </div>
  );
}
