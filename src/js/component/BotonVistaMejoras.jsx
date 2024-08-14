import React from 'react';

const ExcuseMoi_Button = ({ showImprovements, toggleImprovements }) => {
  return (
    <button onClick={toggleImprovements}>
      {showImprovements ? 'Ocultar Mejoras' : 'Mostrar Mejoras'}
    </button>
  );
};

export default ExcuseMoi_Button;