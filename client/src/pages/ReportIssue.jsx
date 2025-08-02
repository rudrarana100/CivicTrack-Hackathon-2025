import React, { useState } from 'react';
import api from '../api/axiosConfig';

const ReportIssue = () => {
  const [form, setForm] = useState({
    title: '',
    description: '',
    category: '',
    anonymous: false,
    photos: []
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    if (type === 'checkbox') {
      setForm((prev) => ({ ...prev, [name]: checked }));
    } else if (type === 'file') {
      setForm((prev) => ({ ...prev, photos: files }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title || !form.description || !form.category) {
      alert('Please fill in all required fields.');
      return;
    }

    const formData = new FormData();
    formData.append('title', form.title);
    formData.append('description', form.description);
    formData.append('category', form.category);
    formData.append('anonymous', form.anonymous);
    for (let i = 0; i < form.photos.length && i < 3; i++) {
      formData.append('photos', form.photos[i]);
    }

    try {
      await api.post('/report', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert('Issue Reported Successfully!');
      setForm({
        title: '',
        description: '',
        category: '',
        anonymous: false,
        photos: []
      });
    } catch (err) {
      console.error(err);
      alert('Failed to submit issue.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-xl space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-700">Report an Issue</h2>

        <div className="space-y-4">
          <input
            name="title"
            placeholder="Issue Title"
            value={form.title}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />

          <textarea
            name="description"
            placeholder="Describe the issue"
            value={form.description}
            onChange={handleChange}
            rows={4}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          ></textarea>

          <input
            name="category"
            placeholder="Category"
            value={form.category}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              name="anonymous"
              checked={form.anonymous}
              onChange={handleChange}
              className="w-4 h-4"
            />
            <label className="text-sm">Report Anonymously</label>
          </div>

          <input
            type="file"
            name="photos"
            multiple
            accept="image/*"
            onChange={handleChange}
            className="w-full"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Submit Issue
        </button>
      </form>
    </div>
  );
};

export default ReportIssue;
