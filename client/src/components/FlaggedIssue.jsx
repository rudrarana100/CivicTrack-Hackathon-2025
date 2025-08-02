import React from 'react';

const FlaggedIssue = ({ issue, onApprove, onDismiss }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center mb-4">
      <div>
        <h3 className="text-lg font-semibold">{issue.title}</h3>
        <p className="text-sm text-gray-600">{issue.category}</p>
        <span className="inline-block mt-1 text-xs bg-red-100 text-red-600 px-2 py-1 rounded">Flagged</span>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => onApprove(issue.id)}
          className="px-3 py-1 rounded bg-green-500 text-white text-sm"
        >
          Approve
        </button>
        <button
          onClick={() => onDismiss(issue.id)}
          className="px-3 py-1 rounded bg-red-500 text-white text-sm"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
};

export default FlaggedIssue;
