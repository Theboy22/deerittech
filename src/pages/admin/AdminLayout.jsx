import React, { useEffect, useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Admin.css";

export default function AdminLayout() {
  const navigate = useNavigate();
  const [profile, setProfile] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/admin/profile", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setProfile(res.data);
      } catch (err) {
        // if token invalid/expired, force login
        localStorage.removeItem("adminToken");
        navigate("/admin/login");
      }
    };
    fetchProfile();
  }, [token, navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  };

  return (
    <div className={`admin-shell ${sidebarOpen ? "sidebar-open" : ""}`}>
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <div className="brand">DeeRit TechPill Ltd</div>
          <button
            className="sidebar-close"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close sidebar"
          >
            ✕
          </button>
        </div>

        <nav className="sidebar-nav">
          <NavLink to="/admin/dashboard" className="nav-item">
            Dashboard
          </NavLink>
          <NavLink to="/admin/users" className="nav-item">
            Users
          </NavLink>
          <NavLink to="/admin/admins" className="nav-item">
            Admins
            
        
          </NavLink>
          <NavLink to="/admin/products" className="nav-item">
            Products
          </NavLink>
          
          <NavLink to="/admin/settings" className="nav-item">
            Settings
          </NavLink>
        </nav>

        <div className="sidebar-footer">
          <button className="logout-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="admin-main">
        <header className="admin-topbar">
          <button
            className="hamburger"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open sidebar"
          >
            ☰
          </button>

          <div className="topbar-right">
            {profile ? (
              <div className="admin-badge">
                <span className="admin-name">{profile.name}</span>
                <span className="admin-role">{profile.role}</span>
              </div>
            ) : (
              <div className="admin-badge skeleton" />
            )}
          </div>
        </header>

        <section className="admin-content">
          <Outlet />
        </section>
      </div>

      {/* Backdrop for mobile */}
      {sidebarOpen && (
        <div
          className="backdrop"
          onClick={() => setSidebarOpen(false)}
          aria-hidden
        />
      )}
    </div>
  );
}
