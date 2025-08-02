import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const BottomNav = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/' },
    { name: 'Map', path: '/map' }, // You can later route this
    { name: 'Profile', path: '/profile' }, // Optional Dummy Route
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-inner flex justify-around py-2 md:hidden">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`flex-1 text-center py-1 ${location.pathname === item.path ? 'text-blue-600 font-semibold' : 'text-gray-600'}`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
};

export default BottomNav;
