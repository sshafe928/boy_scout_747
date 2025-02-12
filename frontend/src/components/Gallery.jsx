import React, { useEffect, useState } from 'react';

const Gallery = () => {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/photos')
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const formattedPhotos = data.data.map((photo) => ({
            name: photo.title,
            url: photo.image_url,
            description: photo.description,
          }));
          setPictures(formattedPhotos);
        } else {
          console.error('Failed to fetch photos:', data.message);
        }
      })
      .catch((err) => console.error('Error fetching photos:', err));
  }, []);
  

  return (
    <div className="p-5 md:p-10">
      <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>div:not(:first-child)]:mt-5 lg:[&>div:not(:first-child)]:mt-8">
        {pictures.map((picture, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden"
            style={{
              marginTop: index !== 0 ? '1.25rem' : '0',
              '@media (min-width: 1024px)': {
                marginTop: index !== 0 ? '2rem' : '0',
              },
            }}
          >
            <img
              src={picture.url}
              alt={picture.description}
              className="w-full transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-500 ease-in-out flex items-center justify-center">
              <div className="text-white text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out transform translate-y-50 group-hover:translate-y-50">
                <h3 className="text-2xl font-bold mb-2">{picture.name}</h3>
                <p className="text-sm line-clamp-3">{picture.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
