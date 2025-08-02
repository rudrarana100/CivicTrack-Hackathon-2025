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
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-lg space-y-8">

        {/* Issue Title & Status */}
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{dummyIssue.title}</h1>
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-sm px-3 py-1 rounded-full bg-blue-100 text-blue-600">{dummyIssue.category}</span>
            <span className={`text-sm px-3 py-1 rounded-full ${
              currentStatus === 'Reported' ? 'bg-yellow-100 text-yellow-600' :
              currentStatus === 'In Progress' ? 'bg-blue-100 text-blue-600' :
              'bg-green-100 text-green-600'
            }`}>
              {currentStatus}
            </span>
          </div>
        </div>

        {/* Image Gallery */}
        <ImageGallery images={dummyIssue.images} />

        {/* Description */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Issue Description</h3>
          <p className="text-gray-700 leading-relaxed">{dummyIssue.description}</p>
        </div>

        {/* Timeline */}
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

        {/* Action Buttons */}
        <div className="flex gap-4">
          <button className="flex-1 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600">Upvote</button>
          <button className="flex-1 py-2 rounded-lg bg-red-500 text-white hover:bg-red-600">Downvote</button>
          <button className="flex-1 py-2 rounded-lg bg-gray-300 text-gray-700 hover:bg-gray-400">Flag as Spam</button>
        </div>

        {/* Comments Section */}
        <CommentThread comments={dummyIssue.comments} />

      </div>
    </div>
  );
};

export default IssueDetail;
