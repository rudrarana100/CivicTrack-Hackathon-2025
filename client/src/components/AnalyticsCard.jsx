import React from 'react';

const AnalyticsCard = ({ title, value, color = 'bg-blue-500' }) => {
  return (
    <div className={`p-4 rounded-lg shadow-md text-white ${color} flex-1`}>
      <h3 className="text-sm font-medium">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
};

export default AnalyticsCard;
