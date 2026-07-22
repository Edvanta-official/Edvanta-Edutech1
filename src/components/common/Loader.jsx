import React from 'react';

const Loader = ({ size = 'medium', fullScreen = false }) => {
  const getSpinnerSize = () => {
    switch (size) {
      case 'small':
        return 'w-6 h-6 border-2';
      case 'large':
        return 'w-16 h-16 border-4';
      case 'medium':
      default:
        return 'w-10 h-10 border-3';
    }
  };

  const loaderContent = (
    <div className="loader-container" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '12px',
      padding: '24px'
    }}>
      <div className="spinner" style={{
        width: size === 'small' ? '24px' : size === 'large' ? '64px' : '40px',
        height: size === 'small' ? '24px' : size === 'large' ? '64px' : '40px',
        border: '3px solid rgba(59, 130, 246, 0.1)',
        borderTop: '3px solid var(--accent)',
        borderRadius: '50%',
        animation: 'spin 1s linear infinite'
      }} />
      <span style={{
        fontSize: '0.9rem',
        fontWeight: '500',
        color: 'var(--text-secondary)'
      }}>Loading Edvanta...</span>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}} />
    </div>
  );

  if (fullScreen) {
    return (
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: 'var(--bg-app)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {loaderContent}
      </div>
    );
  }

  return loaderContent;
};

export default Loader;
