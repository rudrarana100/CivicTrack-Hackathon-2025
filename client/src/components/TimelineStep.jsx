import React from 'react';

const TimelineStep = ({ label, isActive }) => {
  return (
    <div className="flex items-center">
      <div className={`w-4 h-4 rounded-full ${isActive ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
      <span className={`ml-2 text-sm ${isActive ? 'font-semibold text-blue-600' : 'text-gray-500'}`}>
        {label}
      </span>
    </div>
  );
};

export default TimelineStep;
