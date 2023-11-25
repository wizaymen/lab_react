import React, { useState } from 'react';

const DisplayTabr = () => {
  const [tab, setTab] = useState(["hello", "world", "from", "react"]);

  const handleItemClick = (index) => {
    const newTab = [...tab];
    newTab.splice(index, 1);
    setTab(newTab);
  };

  return (
    <ul>
      {tab.map((element, index) => (
        <li key={index} onClick={() => handleItemClick(index)}>
          Element {index + 1} is: {element}
        </li>
      ))}
    </ul>
  );
};

export default DisplayTabr;
