import React, { useState } from 'react';

const CategoryManagement = () => {
  const [categories, setCategories] = useState(['Roads', 'Lighting', 'Water Supply']);
  const [newCategory, setNewCategory] = useState('');

  const addCategory = () => {
    if (newCategory.trim() && !categories.includes(newCategory.trim())) {
      setCategories((prev) => [...prev, newCategory.trim()]);
      setNewCategory('');
    }
  };

  const deleteCategory = (index) => {
    const updated = [...categories];
    updated.splice(index, 1);
    setCategories(updated);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <h3 className="text-lg font-semibold mb-4">Manage Categories</h3>
      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
          placeholder="New Category"
          className="border rounded px-3 py-1 flex-1"
        />
        <button
          onClick={addCategory}
          className="px-3 py-1 rounded bg-blue-500 text-white text-sm"
        >
          Add
        </button>
      </div>
      <ul className="space-y-2">
        {categories.map((cat, index) => (
          <li key={index} className="flex justify-between items-center bg-gray-100 px-3 py-2 rounded">
            <span>{cat}</span>
            <button
              onClick={() => deleteCategory(index)}
              className="text-red-500 text-sm"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryManagement;
