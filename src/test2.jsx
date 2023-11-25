// ToggleButton.js
import React, { useState } from 'react';

const ToggleButton = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      <button onClick={handleClick}>
        {clicked ? 'Clicked' : 'Not Clicked'}
      </button>
    </div>
  );
};

export default ToggleButton;
