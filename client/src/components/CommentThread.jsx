import React from 'react';

const CommentThread = ({ comments }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Comments</h3>
      {comments.map((comment, index) => (
        <div key={index} className="bg-gray-100 p-3 rounded-lg">
          <p className="text-sm font-medium">{comment.user}</p>
          <p className="text-sm text-gray-700">{comment.text}</p>
        </div>
      ))}
    </div>
  );
};

export default CommentThread;
