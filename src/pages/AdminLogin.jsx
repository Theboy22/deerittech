import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import RiteLogo from "../assets/RiteLogo.png";
import LoginImage from "../assets/admin1.png";
import "./admin/AdminLogin.css";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await axios.post("http://localhost:5000/api/admin/login", {
        email,
        password,
      });

      localStorage.setItem("adminToken", res.data.token);
      navigate("/admin/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Login failed. You are not an Admin"
      );
    }
  };

  return (
    <div className="admin-login-wrapper">
      {/* Left background image panel */}
      <div
        className="admin-login-image"
        style={{ backgroundImage: `url(${LoginImage})` }}
      ></div>

      {/* Right form panel */}
      <div className="admin-login-form-container">
        <div className="admin-login-form-box">
          <img src={RiteLogo} alt="Rite Logo" className="admin-login-logo" />
          <h2 className="login-title">Welcome Back, Admin</h2>
          <p className="login-subtitle">
            Sign in to access your dashboard and manage the platform.
          </p>

          {error && <p className="admin-login-error">{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className="admin-login-field">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="admin-login-field">
              <label>Password</label>
              <div className="admin-password-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "🙈" : "👁️"}
                </span>
              </div>
            </div>

            <button type="submit" className="admin-login-btn">
              Sign In
            </button>
          </form>

          <p className="forgot-password">Forgot Password?</p>
        </div>
      </div>
    </div>
  );
}
