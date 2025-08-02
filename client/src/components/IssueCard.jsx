import React from 'react';

const IssueCard = ({ title, category, status, distance, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex items-center gap-4 hover:shadow-lg transition">
      <img src={image} alt={title} className="w-20 h-20 object-cover rounded-md" />
      <div className="flex-1">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="text-sm text-gray-600">{category}</div>
        <div className={`text-xs inline-block px-2 py-1 mt-1 rounded ${status === 'Reported' ? 'bg-yellow-100 text-yellow-600' : status === 'In Progress' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'}`}>
          {status}
        </div>
        <div className="text-xs text-gray-500 mt-1">{distance} km away</div>
      </div>
      <div className="flex flex-col gap-2">
        <button className="text-green-500 text-sm hover:underline">Upvote</button>
        <button className="text-red-500 text-sm hover:underline">Flag</button>
      </div>
    </div>
  );
};

export default IssueCard;
