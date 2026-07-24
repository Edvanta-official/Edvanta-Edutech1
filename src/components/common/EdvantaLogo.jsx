import React from 'react';

const EdvantaLogo = ({ height = 48, className = '' }) => {
  return (
    <img 
      src="images/logo_white_background.jpg.jpeg" 
      alt="Edvanta Logo" 
      style={{ height: `${height}px`, width: 'auto', display: 'block', objectFit: 'contain', borderRadius: '6px' }}
      className={className} 
    />
  );
};

export default EdvantaLogo;
