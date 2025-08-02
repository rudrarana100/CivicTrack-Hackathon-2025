import React, { useState } from 'react';
import IssueCard from '../components/IssueCard';
import FilterSidebar from '../components/FilterSidebar';
import MapView from '../components/MapView';

const dummyIssues = [
  {
    id: 1,
    title: 'Pothole on Main Street',
    category: 'Roads',
    status: 'Reported',
    distance: 2.5,
    image: 'https://via.placeholder.com/80',
  },
  {
    id: 2,
    title: 'Streetlight Flickering',
    category: 'Lighting',
    status: 'In Progress',
    distance: 1.2,
    image: 'https://via.placeholder.com/80',
  },
  {
    id: 3,
    title: 'Overflowing Garbage Bin',
    category: 'Cleanliness',
    status: 'Resolved',
    distance: 3.1,
    image: 'https://via.placeholder.com/80',
  },
];

const Dashboard = () => {
  const [filters, setFilters] = useState({
    status: '',
    category: '',
    distance: 5,  // Default 5 km
  });

  const filteredIssues = dummyIssues.filter((issue) => {
    const statusMatch = filters.status ? issue.status === filters.status : true;
    const categoryMatch = filters.category ? issue.category === filters.category : true;
    const distanceMatch = issue.distance <= filters.distance;
    return statusMatch && categoryMatch && distanceMatch;
  });

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">Reported Issues</h1>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/4">
          <FilterSidebar filters={filters} setFilters={setFilters} />
        </div>
        <div className="flex-1 space-y-6">
          <MapView issues={filteredIssues} />
          <div className="space-y-4">
            {filteredIssues.length > 0 ? (
              filteredIssues.map((issue) => (
                <IssueCard key={issue.id} {...issue} />
              ))
            ) : (
              <p>No issues found for selected filters.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
