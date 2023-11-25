// ParagraphComponent.js
import React from 'react';

const ParagraphComponent = ({ clickedButton }) => {
  return (
    <div>
      {clickedButton && <p>Button #{clickedButton} was clicked</p>}
    </div>
  );
};

export default ParagraphComponent;
