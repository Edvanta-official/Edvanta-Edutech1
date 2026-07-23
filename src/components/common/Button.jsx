import React from 'react';

const Button = ({ children, variant = 'primary', onClick, type = 'button', className = '', disabled = false }) => {
  const baseStyle = 'px-6 py-2.5 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 focus:outline-none';
  
  const variants = {
    primary: 'bg-secondary text-white hover:bg-secondary-light hover:shadow-glow active:scale-[0.98]',
    secondary: 'bg-primary border border-secondary/30 text-white hover:border-secondary hover:shadow-glow active:scale-[0.98]',
    accent: 'bg-gradient-to-r from-secondary to-accent text-bgDark font-bold hover:shadow-glow-lg active:scale-[0.98]',
    outline: 'border border-gray-600 text-gray-300 hover:text-white hover:border-white active:scale-[0.98]',
    danger: 'bg-red-600 text-white hover:bg-red-500 active:scale-[0.98]',
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed scale-100 shadow-none' : ''} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
