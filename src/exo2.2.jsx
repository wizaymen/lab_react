import React from 'react';

const DisplayTabb = () => {
  const tab = ["hello", "world", "from", "react"];

  return (
    <ul>
      {tab.map((element, index) => (
        <li key={index}>Element {index + 1} is: {element}</li>
      ))}
    </ul>
  );
};

export default DisplayTabb;
