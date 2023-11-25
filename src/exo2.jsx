import React from 'react';

const DisplayTab = () => {
  const tab = ["hello", "world", "from", "react"];

  return (
    <ul>
      {tab.map((element, index) => (
        <li key={index}>{element}</li>
      ))}
    </ul>
  );
};

export default DisplayTab;
