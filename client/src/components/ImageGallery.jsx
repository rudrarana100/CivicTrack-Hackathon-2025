import React from 'react';

const ImageGallery = ({ images }) => {
  return (
    <div className="grid grid-cols-2 gap-2 mb-6">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`issue-${index}`}
          className="w-full h-40 object-cover rounded-lg"
        />
      ))}
    </div>
  );
};

export default ImageGallery;
