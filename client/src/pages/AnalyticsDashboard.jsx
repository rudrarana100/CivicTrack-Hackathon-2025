import React, { useEffect, useState } from 'react';
import api from '../api/axiosConfig';

const AnalyticsDashboard = () => {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    api.get('/analytics')
      .then(response => setStats(response.data))
      .catch(err => {
        console.error(err);
        // Fallback dummy data to ensure rendering
        setStats({ Roads: 5, Lighting: 2, Cleanliness: 3, Water: 1 });
      });
  }, []);

  if (!stats) return <p className="text-center mt-10 text-gray-600">Loading Analytics...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Issue Analytics</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {Object.entries(stats).map(([category, count]) => (
            <div
              key={category}
              className="bg-white rounded-lg shadow p-6 flex flex-col items-center justify-center"
            >
              <h3 className="text-lg font-semibold text-gray-700">{category}</h3>
              <p className="text-4xl font-bold text-blue-600">{count}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
