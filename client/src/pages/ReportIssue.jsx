import React, { useState } from 'react';
import ImageUploader from '../components/ImageUploader';

const ReportIssue = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [anonymous, setAnonymous] = useState(false);
  const [images, setImages] = useState([]);
  const [issueLocation, setIssueLocation] = useState('Current Location'); // Renamed

  const isFormValid = title && description && category && issueLocation;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      alert('Please fill all required fields.');
      return;
    }
    console.log({ title, description, category, anonymous, images, issueLocation });
    alert('Issue Submitted Successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-6">Report an Issue</h2>
        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter issue title"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the issue"
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows={3}
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-3 py-2 border rounded"
            >
              <option value="">Select Category</option>
              <option value="Roads">Roads</option>
              <option value="Lighting">Lighting</option>
              <option value="Water Supply">Water Supply</option>
              <option value="Cleanliness">Cleanliness</option>
              <option value="Public Safety">Public Safety</option>
            </select>
          </div>

          <ImageUploader images={images} setImages={setImages} />

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={anonymous}
              onChange={(e) => setAnonymous(e.target.checked)}
              id="anonymous"
            />
            <label htmlFor="anonymous" className="text-sm">Report Anonymously</label>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Location</label>
            <div className="flex gap-2 items-center">
              <p className="text-sm">{issueLocation}</p>
              <button
                type="button"
                onClick={() => setIssueLocation('Manual Location')} // Dummy action
                className="px-3 py-1 rounded bg-gray-200 text-sm"
              >
                Change Location
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full py-2 rounded text-white ${isFormValid ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'}`}
          >
            Submit Issue
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReportIssue;
