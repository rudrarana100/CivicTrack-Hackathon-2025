import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const FAB = () => {
  const location = useLocation();

  // Hide FAB on /report page
  if (location.pathname === '/report') return null;

  return (
    <Link
      to="/report"
      className="fixed bottom-20 right-6 md:hidden bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg text-3xl hover:bg-blue-700 transition"
    >
      +
    </Link>
  );
};

export default FAB;
