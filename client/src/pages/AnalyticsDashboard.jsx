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
        setStats({ Roads: 5, Lighting: 2, Cleanliness: 3 });
      });
  }, []);

  if (!stats) return <p>Loading...</p>;

  return (
    <div>
      <h1>Analytics</h1>
      {Object.entries(stats).map(([category, count]) => (
        <p key={category}>{category}: {count}</p>
      ))}
    </div>
  );
};

export default AnalyticsDashboard;
