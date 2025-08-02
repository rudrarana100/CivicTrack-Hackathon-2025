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
          { id: 1, title: 'Sample Issue 1', description: 'Test Desc 1', category: 'Roads' },
          { id: 2, title: 'Sample Issue 2', description: 'Test Desc 2', category: 'Lighting' },
        ]);
      });
  }, []);

  if (!issues) return <p className="text-center mt-10">Loading Dashboard...</p>;

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Reported Issues</h1>
      {issues.length > 0 ? (
        issues.slice(0, 10).map((issue) => (
          <div key={issue.id} className="bg-white p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{issue.title}</h2>
            <p className="text-gray-700">{issue.description}</p>
            <span className="text-sm text-gray-500">{issue.category}</span>
          </div>
        ))
      ) : (
        <p>No issues found.</p>
      )}
    </div>
  );
};

export default Dashboard;
