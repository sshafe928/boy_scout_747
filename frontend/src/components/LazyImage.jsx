import React from 'react';
import { useInView } from 'react-intersection-observer';
import Skeleton from "@mui/material/Skeleton"


const LazyImage = ({ src, alt, className = '', ...props }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '100px' 
  });

  return (
    <div ref={ref} className="relative">
      {inView ? (
        <img
          src={src}
          alt={alt}
          className={`${className} transition-opacity duration-500 opacity-100`}
          {...props}
        />
      ) : (
        <Skeleton
          variant='rounded'
          className='w-full'
          sx={{ 
          paddingTop: '100%', 
          height: 0, 
        }} />
      )}
    </div>
  );
};

export default LazyImage;
