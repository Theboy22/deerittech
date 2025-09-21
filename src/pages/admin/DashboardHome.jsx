import React from "react";

export default function DashboardHome() {
  return (
    <div className="card-grid">
      <div className="card">
        <h3>Welcome back 👋</h3>
        <p>This is your dashboard overview.</p>
      </div>
      <div className="card">
        <h4>Quick Stats</h4>
        <ul className="stats">
          <li>Total Users: 120</li>
          <li>Active Subscriptions: 45</li>
          <li>Pending Tickets: 6</li>
        </ul>
      </div>
      <div className="card">
        <h4>Recent Activity</h4>
        <p>Nothing new for now.</p>
      </div>
    </div>
  );
}
