import React from 'react';

const FilterSidebar = ({ filters, setFilters }) => {
  const toggleStatus = (status) => {
    setFilters((prev) => ({
      ...prev,
      status: prev.status === status ? '' : status
    }));
  };

  const changeCategory = (e) => {
    setFilters((prev) => ({
      ...prev,
      category: e.target.value
    }));
  };

  const setDistance = (distance) => {
    setFilters((prev) => ({
      ...prev,
      distance
    }));
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <h3 className="text-lg font-semibold mb-4">Filters</h3>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Status</label>
        <div className="flex gap-2 flex-wrap">
          {['Reported', 'In Progress', 'Resolved'].map((status) => (
            <button
              key={status}
              onClick={() => toggleStatus(status)}
              className={`px-3 py-1 rounded text-sm ${
                filters.status === status ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Category</label>
        <select
          className="w-full mt-1 border rounded px-2 py-1"
          value={filters.category}
          onChange={changeCategory}
        >
          <option value="">All Categories</option>
          <option value="Roads">Roads</option>
          <option value="Lighting">Lighting</option>
          <option value="Water Supply">Water Supply</option>
          <option value="Cleanliness">Cleanliness</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Distance</label>
        <div className="flex gap-2">
          {[1, 3, 5].map((dist) => (
            <button
              key={dist}
              onClick={() => setDistance(dist)}
              className={`px-3 py-1 rounded text-sm ${
                filters.distance === dist ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
            >
              {dist} km
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
