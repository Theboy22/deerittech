import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminManagement = () => {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newAdmin, setNewAdmin] = useState({
    name: "",
    email: "",
    password: "",
    role: "admin",
  });

  const token = localStorage.getItem("token"); // SuperAdmin JWT

  // ✅ Fetch admins
  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/admins", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setAdmins(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchAdmins();
  }, [token]);

  // ✅ Create admin
  const createAdmin = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/admins/create", newAdmin, {
        headers: { Authorization: `Bearer ${token}` },
      });
      window.location.reload(); // reload after creating
    } catch (error) {
      console.error(error);
    }
  };

  // ✅ Suspend/activate admin
  const toggleStatus = async (id) => {
    try {
      await axios.patch(`http://localhost:5000/api/admins/${id}/suspend`, {}, {
        headers: { Authorization: `Bearer ${token}` },
      });
      window.location.reload();
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return <p>Loading admins...</p>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Admin Management</h2>

      {/* Create Admin Form */}
      <form onSubmit={createAdmin} className="mb-6 space-y-3 border p-4 rounded-lg">
        <h3 className="font-semibold">Create New Admin</h3>
        <input
          type="text"
          placeholder="Name"
          className="border p-2 w-full"
          value={newAdmin.name}
          onChange={(e) => setNewAdmin({ ...newAdmin, name: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-2 w-full"
          value={newAdmin.email}
          onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 w-full"
          value={newAdmin.password}
          onChange={(e) => setNewAdmin({ ...newAdmin, password: e.target.value })}
          required
        />
        <select
          className="border p-2 w-full"
          value={newAdmin.role}
          onChange={(e) => setNewAdmin({ ...newAdmin, role: e.target.value })}
        >
          <option value="admin">Admin</option>
          <option value="editor">Editor</option>
        </select>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Create Admin
        </button>
      </form>

      {/* List of Admins */}
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Email</th>
            <th className="p-2 border">Role</th>
            <th className="p-2 border">Status</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((admin) => (
            <tr key={admin.id}>
              <td className="p-2 border">{admin.id}</td>
              <td className="p-2 border">{admin.name}</td>
              <td className="p-2 border">{admin.email}</td>
              <td className="p-2 border">{admin.role}</td>
              <td className="p-2 border">{admin.status}</td>
              <td className="p-2 border">
                <button
                  onClick={() => toggleStatus(admin.id)}
                  className={`px-3 py-1 rounded ${
                    admin.status === "active" ? "bg-red-500 text-white" : "bg-green-500 text-white"
                  }`}
                >
                  {admin.status === "active" ? "Suspend" : "Activate"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminManagement;
