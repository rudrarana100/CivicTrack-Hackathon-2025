import React from 'react';
import TimelineStep from '../components/TimelineStep';
import CommentThread from '../components/CommentThread';
import ImageGallery from '../components/ImageGallery';

const dummyIssue = {
  title: 'Pothole on Main Street',
  category: 'Roads',
  status: 'In Progress',
  description: 'There is a large pothole on Main Street near the intersection.',
  images: [
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
  ],
  timeline: ['Reported', 'In Progress', 'Resolved'],
  comments: [
    { user: 'John Doe', text: 'This needs urgent fixing!' },
    { user: 'Admin', text: 'We have initiated repair work.' },
  ],
};

const IssueDetail = () => {
  const currentStatus = dummyIssue.status;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-6">
        
        <div>
          <h1 className="text-2xl font-bold mb-2">{dummyIssue.title}</h1>
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm px-2 py-1 rounded bg-blue-100 text-blue-600">{dummyIssue.category}</span>
            <span className={`text-sm px-2 py-1 rounded ${
              currentStatus === 'Reported' ? 'bg-yellow-100 text-yellow-600' :
              currentStatus === 'In Progress' ? 'bg-blue-100 text-blue-600' :
              'bg-green-100 text-green-600'
            }`}>
              {currentStatus}
            </span>
          </div>
        </div>

        <ImageGallery images={dummyIssue.images} />

        <p className="text-gray-700">{dummyIssue.description}</p>

        <div>
          <h3 className="text-lg font-semibold mb-2">Status Timeline</h3>
          <div className="space-y-3">
            {dummyIssue.timeline.map((step, index) => (
              <TimelineStep
                key={index}
                label={step}
                isActive={step === currentStatus || dummyIssue.timeline.indexOf(currentStatus) > index}
              />
            ))}
          </div>
        </div>

        <div className="flex gap-4">
          <button className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600">Upvote</button>
          <button className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600">Downvote</button>
          <button className="ml-auto px-4 py-2 rounded bg-gray-200 text-sm">Flag as Spam</button>
        </div>

        <CommentThread comments={dummyIssue.comments} />

      </div>
    </div>
  );
};

export default IssueDetail;
