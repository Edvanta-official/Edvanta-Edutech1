import React from 'react';

const EdvantaLogo = ({ height = 44, className = '' }) => {
  return (
    <svg 
      viewBox="0 0 260 88" 
      height={height} 
      className={`w-auto display-block ${className}`} 
      style={{ height: `${height}px`, width: 'auto', display: 'block' }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Montserrat:wght@500;600&display=swap');
          .logo-e { font-family: 'Great Vibes', 'Brush Script MT', cursive; font-size: 52px; fill: #111827; text-anchor: middle; dominant-baseline: central; }
          .logo-text { font-family: 'Montserrat', 'Inter', sans-serif; font-weight: 500; font-size: 20px; fill: #ffffff; letter-spacing: 5px; text-anchor: middle; dominant-baseline: central; }
          .logo-tagline { font-family: 'Great Vibes', 'Dancing Script', cursive; font-size: 15px; fill: #374151; text-anchor: start; }
        `}</style>
      </defs>
      
      {/* Left White Square with Sage Border */}
      <rect x="2" y="2" width="58" height="58" rx="2" fill="#ffffff" stroke="#9caf9f" strokeWidth="2" />
      <text x="31" y="32" className="logo-e">E</text>
      
      {/* Right Sage Green Box */}
      <rect x="66" y="2" width="192" height="58" rx="2" fill="#9caf9f" />
      <text x="162" y="32" className="logo-text">EDVANTA</text>
      
      {/* Cursive Tagline */}
      <text x="18" y="80" className="logo-tagline">Ignite your growth, inspire your mind</text>
    </svg>
  );
};

export default EdvantaLogo;
