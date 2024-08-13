import React from 'react';

const TranslateButton = ({ className, buttonText, onMouseDown, onMouseUp }) => {
  return (
    <div className={className}>
      <button 
        className="fixed-button" 
        onMouseDown={onMouseDown} 
        onMouseUp={onMouseUp}
      >
        {buttonText}
      </button>
      
    </div>
  );
};

export default TranslateButton;