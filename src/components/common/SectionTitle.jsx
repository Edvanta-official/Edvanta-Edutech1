import React from 'react';

const SectionTitle = ({ title, subtitle, align = 'center', className = '' }) => {
  return (
    <div className={`mb-12 ${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      {subtitle && (
        <span className="text-secondary uppercase tracking-[0.2em] font-semibold text-xs md:text-sm block mb-2">
          {subtitle}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-manrope font-bold text-gradient inline-block">
        {title}
      </h2>
      <div className={`h-[3px] w-24 bg-gradient-to-r from-secondary to-accent mt-4 ${align === 'center' ? 'mx-auto' : 'mr-auto'}`}></div>
    </div>
  );
};

export default SectionTitle;
