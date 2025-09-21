import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const linkStyle = ({ isActive }) => ({
    display: 'block',
    padding: '10px 20px',
    textDecoration: 'none',
    color: isActive ? 'white' : '#333',
    backgroundColor: isActive ? '#007bff' : 'transparent',
    borderRadius: '4px',
    margin: '5px 0'
  });

  return (
    <div style={{
      width: '200px',
      backgroundColor: '#f4f4f4',
      minHeight: '100vh',
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      <h2 style={{ marginBottom: '20px' }}>Deerit Tech</h2>
      <NavLink to="/admin/dashboard" style={linkStyle}>Dashboard</NavLink>
      <NavLink to="/admin/users" style={linkStyle}>Users</NavLink>
      <NavLink to="/admin/products" style={linkStyle}>Products</NavLink>
      <NavLink to="/admin/settings" style={linkStyle}>Settings</NavLink>
    </div>
  );
};

export default Sidebar;
