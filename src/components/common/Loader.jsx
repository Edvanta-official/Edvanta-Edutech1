import React from 'react';

const Loader = ({ size = 'medium', className = '' }) => {
  const sizes = {
    small: 'w-6 h-6 border-2',
    medium: 'w-12 h-12 border-3',
    large: 'w-16 h-16 border-4',
  };

  return (
    <div className={`flex flex-col items-center justify-center gap-3 ${className}`}>
      <div className={`${sizes[size]} border-t-accent border-secondary/20 rounded-full animate-spin`}></div>
      <span className="text-gray-400 font-medium text-sm tracking-wider animate-pulse">Loading Edvanta...</span>
    </div>
  );
};

export default Loader;
