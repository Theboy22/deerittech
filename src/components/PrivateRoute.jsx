import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAdminLoggedIn = !!localStorage.getItem('adminToken'); // Example auth check

  if (!isAdminLoggedIn) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default PrivateRoute;
