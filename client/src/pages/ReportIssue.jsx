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
      // Reset Form
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
    <form onSubmit={handleSubmit} className="space-y-4 p-6 max-w-lg mx-auto mt-10 bg-white rounded shadow">
      <h2 className="text-xl font-bold text-center">Report an Issue</h2>

      <input
        name="title"
        placeholder="Title"
        value={form.title}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      <textarea
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      <input
        name="category"
        placeholder="Category"
        value={form.category}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />

      <div className="flex items-center gap-2">
        <input
          type="checkbox"
          name="anonymous"
          checked={form.anonymous}
          onChange={handleChange}
        />
        <label>Report Anonymously</label>
      </div>

      <input
        type="file"
        name="photos"
        multiple
        accept="image/*"
        onChange={handleChange}
        className="w-full"
      />

      <button
        type="submit"
        className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Submit Issue
      </button>
    </form>
  );
};

export default ReportIssue;
