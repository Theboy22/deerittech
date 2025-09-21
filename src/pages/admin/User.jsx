import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Users() {
  const [admins, setAdmins] = useState([]);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const token = localStorage.getItem('adminToken'); // stay consistent with your key

  const api = axios.create({
    baseURL: 'http://localhost:5000/api/admin',
    headers: { Authorization: `Bearer ${token}` }
  });

  const loadAdmins = async () => {
    try {
      const res = await api.get('/admins');
      setAdmins(res.data);
    } catch (e) {
      console.error(e);
      alert('Failed to load admins');
    }
  };

  useEffect(() => { loadAdmins(); /* on mount */ }, []);

  const createAdmin = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/admins', form);
      alert(res.data.message);
      setForm({ name: '', email: '', password: '' });
      await loadAdmins();
    } catch (e) {
      alert(e?.response?.data?.message || 'Failed to create admin');
    }
  };

  const suspendAdmin = async (id) => {
    try {
      const res = await api.patch(`/admins/${id}/suspend`);
      alert(res.data.message);
      await loadAdmins();
    } catch (e) {
      alert(e?.response?.data?.message || 'Failed to suspend admin');
    }
  };

  const activateAdmin = async (id) => {
    try {
      const res = await api.patch(`/admins/${id}/activate`);
      alert(res.data.message);
      await loadAdmins();
    } catch (e) {
      alert(e?.response?.data?.message || 'Failed to activate admin');
    }
  };

  return (
    <div>
      <h2>Manage Admins</h2>

      {/* Create form */}
      <form onSubmit={createAdmin} style={{ margin: '16px 0', display: 'flex', gap: 8 }}>
        <input
          required
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          required
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          required
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button type="submit">Create Admin</button>
      </form>

      {/* Admins table */}
      <table width="100%" cellPadding="8" border="1" style={{ borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Status</th>
            <th width="220">Actions</th>
          </tr>
        </thead>
        <tbody>
          {admins.map(a => (
            <tr key={a.id}>
              <td>{a.id}</td>
              <td>{a.name}</td>
              <td>{a.email}</td>
              <td>{a.role}</td>
              <td>{a.status}</td>
              <td>
                {a.status === 'active' ? (
                  <button onClick={() => suspendAdmin(a.id)}>Suspend</button>
                ) : (
                  <button onClick={() => activateAdmin(a.id)}>Activate</button>
                )}
              </td>
            </tr>
          ))}
          {admins.length === 0 && (
            <tr><td colSpan="6">No admins yet.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
