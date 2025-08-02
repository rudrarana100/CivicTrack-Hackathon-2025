import React, { useState } from 'react';
import FlaggedIssueCard from '../components/FlaggedIssue';
import CategoryManagement from '../components/CategoryManagement';

const dummyFlaggedIssues = [
  { id: 1, title: 'Overflowing Garbage', category: 'Cleanliness' },
  { id: 2, title: 'Broken Streetlight', category: 'Lighting' },
];

const AdminPanel = () => {
  const [flaggedIssues, setFlaggedIssues] = useState(dummyFlaggedIssues);

  const handleApprove = (id) => {
    setFlaggedIssues((prev) => prev.filter((issue) => issue.id !== id));
    alert(`Issue ID ${id} approved.`);
  };

  const handleDismiss = (id) => {
    setFlaggedIssues((prev) => prev.filter((issue) => issue.id !== id));
    alert(`Issue ID ${id} dismissed.`);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Admin Moderation Panel</h1>

        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Flagged Issues</h2>
          {flaggedIssues.length > 0 ? (
            flaggedIssues.map((issue) => (
              <FlaggedIssueCard
                key={issue.id}
                issue={issue}
                onApprove={handleApprove}
                onDismiss={handleDismiss}
              />
            ))
          ) : (
            <p>No flagged issues pending.</p>
          )}
        </div>

        <CategoryManagement />
      </div>
    </div>
  );
};

export default AdminPanel;
