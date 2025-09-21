import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Public pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Web from './pages/services/Web';
import Apps from './pages/services/Apps';
import Training from './pages/services/Training';
import Career from './pages/services/Career';
import VerifyPayment from './pages/VerifyPayment';

import AdminLogin from './pages/AdminLogin';

// Layout / components
import HomeNavbar from './components/HomeNavbar';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import PrivateRoute from './components/PrivateRoute';

// Admin pages
import AdminLayout from './pages/admin/AdminLayout';
import DashboardHome from './pages/admin/DashboardHome';
import Users from './pages/admin/User';
import Products from './pages/admin/Product';
import Settings from './pages/admin/Settings';
import AdminManagement from "./pages/admin/AdminManagement";

function AppWrapper() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin');

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Preloader />;
  return (
    <>
      {!isAdminRoute && <HomeNavbar />}

      <main style={{ minHeight: '85vh' }}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/web" element={<Web />} />
          <Route path="/services/apps" element={<Apps />} />
          <Route path="/services/training" element={<Training />} />
          <Route path="/services/career" element={<Career />} />
          <Route path="/verify-payment" element={<VerifyPayment />} />

          {/* Admin Login */}
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* Admin Routes Nested */}
          <Route 
            path="/admin" 
            element={
              <PrivateRoute>
                <AdminLayout />
              </PrivateRoute>
            }
          >
            <Route index element={<DashboardHome />} />          {/* /admin */}
            <Route path="dashboard" element={<DashboardHome />} />  {/* /admin/dashboard */}
            <Route path="users" element={<Users />} />          {/* /admin/users */}
            <Route path="/admin/admins" element={<AdminManagement />} />
            <Route path="products" element={<Products />} />    {/* /admin/products */}
            <Route path="settings" element={<Settings />} />    {/* /admin/settings */}
          </Route>
        </Routes>
      </main>

      {!isAdminRoute && <Footer />}
    </>
  );
}

export default AppWrapper;
