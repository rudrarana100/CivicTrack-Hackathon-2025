import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'Dashboard', path: '/' },
    { name: 'Report Issue', path: '/report' },
    { name: 'Admin', path: '/admin' },
    { name: 'Analytics', path: '/analytics' },
  ];

  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-blue-600">CivicTrack</Link>

      <div className="hidden md:flex gap-6 items-center">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={`text-sm ${location.pathname === link.path ? 'text-blue-600 font-semibold' : 'text-gray-600 hover:text-blue-600'}`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div className="flex gap-4 items-center">
        <Link to="/login" className="text-sm text-gray-600 hover:text-blue-600">Login</Link>
        <Link to="/register" className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
