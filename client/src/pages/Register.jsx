import React, { useState } from 'react';
import api from '../api/axiosConfig';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.username || !form.password) {
      alert('Please enter both username and password.');
      return;
    }

    api.post('/register', form)
      .then(() => {
        alert('Registered Successfully!');
        navigate('/login');
      })
      .catch(err => {
        console.error('Registration Failed', err);
        alert('Registration failed. Try a different username.');
      });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-6 max-w-sm mx-auto mt-10 bg-white rounded shadow">
      <h2 className="text-xl font-bold text-center">Register</h2>
      <input
        name="username"
        placeholder="Username"
        value={form.username}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <input
        name="password"
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        className="w-full py-2 bg-green-600 text-white rounded hover:bg-green-700"
      >
        Register
      </button>
    </form>
  );
};

export default Register;
