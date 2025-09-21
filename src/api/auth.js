import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

export const adminLogin = async (username, password) => {
  const res = await axios.post(`${API_URL}/admin/login`, { username, password });
  return res.data; // { token }
};
