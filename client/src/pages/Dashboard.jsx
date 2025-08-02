import React, { useEffect, useState } from 'react';
import api from '../api/axiosConfig';

const Dashboard = () => {
  const [issues, setIssues] = useState(null);

  useEffect(() => {
    api.get('/issues')
      .then(response => setIssues(response.data))
      .catch(err => {
        console.error(err);
        // Fallback dummy issues
        setIssues([
          { id: 1, title: 'Pothole on Main Street', description: 'Large pothole near traffic signal causing jams.', category: 'Roads' },
          { id: 2, title: 'Street Light Flickering', description: 'Street light blinking near park area.', category: 'Lighting' },
          { id: 3, title: 'Overflowing Dustbin', description: 'Garbage not collected for 3 days.', category: 'Cleanliness' },
        ]);
      });
  }, []);

  if (!issues) return <p className="text-center mt-10 text-gray-600">Loading Dashboard...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Reported Issues</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {issues.length > 0 ? (
            issues.map((issue) => (
              <div key={issue.id} className="bg-white rounded-lg shadow p-4 hover:shadow-md transition">
                <h2 className="text-lg font-semibold mb-2">{issue.title}</h2>
                <p className="text-gray-600 text-sm mb-2">{issue.description}</p>
                <span className="inline-block text-xs px-2 py-1 rounded bg-blue-100 text-blue-600">{issue.category}</span>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No issues found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
