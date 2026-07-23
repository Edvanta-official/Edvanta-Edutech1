import React from 'react';
import { PARTNERS_LOGOS } from '../../utils/constants';

const Partners = () => {
  return (
    <section className="py-12 bg-primary-dark/30 border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-6 text-center">
        <span className="text-gray-500 uppercase tracking-widest text-xs font-semibold">
          OUR STUDENTS WORK AT WORLD CLASS COMPANIES
        </span>
      </div>
      
      {/* Infinite scrolling logo ticker */}
      <div className="relative w-full flex overflow-x-hidden">
        <div className="animate-ticker flex items-center gap-20 py-4">
          {/* Double the logos to make ticker loop seamless */}
          {[...PARTNERS_LOGOS, ...PARTNERS_LOGOS, ...PARTNERS_LOGOS, ...PARTNERS_LOGOS].map((p, idx) => (
            <div key={idx} className="flex items-center gap-2 grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all cursor-pointer">
              <span className="text-white text-xl font-bold tracking-wider font-manrope">{p.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
