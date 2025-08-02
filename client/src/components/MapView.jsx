import React from 'react';

const MapView = ({ issues }) => {
  return (
    <div className="bg-gray-300 w-full h-96 rounded-lg flex items-center justify-center text-gray-700 text-lg">
      {/* This will later be replaced with an actual map (like Leaflet/Mapbox) */}
      Map Placeholder — {issues.length} pins will appear here.
    </div>
  );
};

export default MapView;
