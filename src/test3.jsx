// ButtonComponent.js
import React from 'react';

const ButtonComponent = ({ buttonNumber, onClick }) => {
  return (
    <button onClick={() => onClick(buttonNumber)}>
      Button{buttonNumber}
    </button>
  );
};

export default ButtonComponent;
