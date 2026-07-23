import React from 'react';

const Card = ({ children, className = '', onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`glass glass-hover p-6 rounded-xl relative overflow-hidden group ${onClick ? 'cursor-pointer' : ''} ${className}`}
    >
      {/* Decorative top-right neon highlight border */}
      <div className="absolute top-0 right-0 w-24 h-[1px] bg-gradient-to-l from-accent to-transparent"></div>
      <div className="absolute top-0 right-0 h-24 w-[1px] bg-gradient-to-b from-accent to-transparent"></div>
      
      {children}
    </div>
  );
};

export default Card;
