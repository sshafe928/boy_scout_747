import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import LazyImage from './LazyImage';
import Skeleton from "@mui/material/Skeleton"

const Gallery = () => {
  const [allPhotos, setAllPhotos] = useState([]); 
  const [visiblePhotos, setVisiblePhotos] = useState([]); 
  const [hasMore, setHasMore] = useState(true);
  var pageSize = 30; 

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
          setAllPhotos(formattedPhotos);
          setVisiblePhotos(formattedPhotos.slice(0, pageSize));
          if (formattedPhotos.length <= pageSize) {
            setHasMore(false);
          }
        } else {
          console.error('Failed to fetch photos:', data.message);
        }
      })
      .catch((err) => console.error('Error fetching photos:', err));
  }, []);

  const fetchMoreData = () => {

    
    setTimeout(() => {
      const nextPhotos = allPhotos.slice(
        visiblePhotos.length,
        visiblePhotos.length + pageSize
      );
      setVisiblePhotos((prev) => [...prev, ...nextPhotos]);
      if (visiblePhotos.length + nextPhotos.length === allPhotos.length) {
        setHasMore(false);
      }
    }, 500);
  };

  return (
    <InfiniteScroll
      dataLength={visiblePhotos.length}
      next={fetchMoreData}
      hasMore={hasMore}
    >
      <div className="p-5 lg:p-10">
        <div className="columns-1 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4">
            {visiblePhotos.map((picture, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden"
                style={{ marginTop: index !== 0 ? '1.25rem' : '0' }}
              >
                {hasMore ? (
                  <Skeleton
                    variant='rounded'
                    className='w-full'
                    sx={{ 
                    paddingTop: '100%', 
                    height: 0, 
                  }} />
                ):(
                  <>
                  <LazyImage
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
                  </>
                )} 
              </div>
            ))}
        </div>
      </div>
    </InfiniteScroll>
  );
};

export default Gallery;
