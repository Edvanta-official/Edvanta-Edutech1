import React from 'react';
const EdvantaLogo = ({ height = 90, className = '' }) => {
  return (
    <img 
      src="images/edvanta_hd_logo.jpg" 
      alt="Edvanta Company Logo" 
      style={{ 
        height: `${height}px`, 
        width: 'auto', 
        display: 'block', 
        objectFit: 'contain',
        borderRadius: '4px'
      }}
      className={className} 
    />
  );
};
export default EdvantaLogo;