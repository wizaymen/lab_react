import React from 'react';

const DisplayTabp = ({ tab }) => {
  return (
    <ul>
      {tab.map((element, index) => (
        <li key={index}>Element {index + 1} is: {element}</li>
      ))}
    </ul>
  );
};

export default DisplayTabp;
