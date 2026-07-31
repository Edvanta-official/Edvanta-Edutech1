import React from 'react';
const BubbleBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      <div className="absolute inset-0 bubble-container animate-bubble-rotate">
        <div className="absolute rounded-full bubble bubble-green" 
             style={{ width: '240px', height: '240px', top: '15%', left: '10%' }} />
        <div className="absolute rounded-full bubble bubble-white" 
             style={{ width: '200px', height: '200px', top: '25%', left: '75%' }} />
        <div className="absolute rounded-full bubble bubble-black" 
             style={{ width: '260px', height: '260px', top: '60%', left: '15%' }} />
        <div className="absolute rounded-full bubble bubble-green" 
             style={{ width: '220px', height: '220px', top: '70%', left: '80%' }} />
        <div className="absolute rounded-full bubble bubble-white" 
             style={{ width: '240px', height: '240px', top: '40%', left: '45%' }} />
        <div className="absolute rounded-full bubble bubble-green bubble-alt" 
             style={{ width: '180px', height: '180px', top: '80%', left: '35%' }} />
        <div className="absolute rounded-full bubble bubble-black bubble-alt" 
             style={{ width: '220px', height: '220px', top: '10%', left: '40%' }} />
        <div className="absolute rounded-full bubble bubble-green bubble-alt" 
             style={{ width: '190px', height: '190px', top: '35%', left: '85%' }} />
        <div className="absolute rounded-full bubble bubble-white bubble-alt" 
             style={{ width: '250px', height: '250px', top: '5%', left: '85%' }} />
        <div className="absolute rounded-full bubble bubble-black bubble-alt" 
             style={{ width: '200px', height: '200px', top: '85%', left: '60%' }} />
      </div>
    </div>
  );
};
export default BubbleBackground;