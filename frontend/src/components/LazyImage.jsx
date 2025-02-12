import React from 'react';
import { useInView } from 'react-intersection-observer';

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
        <div className="h-64 w-full bg-gray-300 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-t-blue-500 border-gray-300 rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
};

export default LazyImage;
