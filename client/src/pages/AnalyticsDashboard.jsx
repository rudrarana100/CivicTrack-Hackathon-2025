import React from 'react';
import AnalyticsCard from '../components/AnalyticsCard';

const dummyAnalytics = {
  totalIssues: 120,
  flaggedIssues: 5,
  categoryBreakdown: [
    { category: 'Roads', count: 45 },
    { category: 'Lighting', count: 30 },
    { category: 'Water Supply', count: 20 },
    { category: 'Cleanliness', count: 15 },
    { category: 'Public Safety', count: 10 },
  ],
};

const AnalyticsDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Admin Analytics Dashboard</h1>

        <div className="flex gap-4 mb-6">
          <AnalyticsCard title="Total Issues" value={dummyAnalytics.totalIssues} color="bg-blue-500" />
          <AnalyticsCard title="Flagged Issues" value={dummyAnalytics.flaggedIssues} color="bg-red-500" />
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Category Breakdown</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {dummyAnalytics.categoryBreakdown.map((item, index) => (
              <div key={index} className="p-4 bg-gray-100 rounded-lg flex justify-between items-center">
                <span>{item.category}</span>
                <span className="font-bold">{item.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Optional Placeholder for Graph */}
        <div className="bg-white p-6 rounded-lg shadow-md mt-6">
          <h2 className="text-xl font-semibold mb-4">Activity Graph (Coming Soon)</h2>
          <div className="h-40 bg-gray-200 rounded flex items-center justify-center text-gray-500">
            Graph Placeholder
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;
