import React from 'react';
import { useNavigate } from 'react-router-dom';

const AdminHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('adminToken'); // Clear auth token
    navigate('/admin/login');
  };

  return (
    <div style={{
      height: '60px',
      backgroundColor: '#007bff',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 20px',
      boxSizing: 'border-box'
    }}>
      <h1>Admin Dashboard</h1>
      <button 
        onClick={handleLogout} 
        style={{
          backgroundColor: 'white',
          color: '#007bff',
          border: 'none',
          padding: '8px 12px',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default AdminHeader;
