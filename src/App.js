
import './App.css';
import React, { useState } from 'react';

import ClickMeButton from './test1';
import ToggleButton from './test2';
import ButtonComponent from './test3';
import ParagraphComponent from './test4';
import CounterComponent from './test5';
import DisplayTab from './exo2';
import DisplayTabb from './exo2.2';
import DisplayTabr from './exo2.3';
import DisplayTabp from './exo2.4';
import AuthenticationForm from './exo3';
import UserList from './exo3.1';








function App() {
  const [clickedButton, setClickedButton] = useState(null);
  const table1 = ["apple", "orange", "banana"];
  const table2 = ["dog", "cat", "fish"];
  const [users, setUsers] = useState([]);

  const handleFormSubmit = (user) => {
    setUsers([...users, user]);
  };

  const handleDelete = (index) => {
    const updatedUsers = [...users];
    updatedUsers.splice(index, 1);
    setUsers(updatedUsers);
  };

  const handleButtonClick = (buttonNumber) => {
    setClickedButton(buttonNumber);

  };
  return (
    
    <div className="App">
    <h1>Hello World!</h1>
    <div>
     

      <ClickMeButton />
      <ToggleButton />
      <ButtonComponent buttonNumber={1} onClick={handleButtonClick} />
      <ButtonComponent buttonNumber={2} onClick={handleButtonClick} />
      <ButtonComponent buttonNumber={3} onClick={handleButtonClick} />
      
      <ParagraphComponent clickedButton={clickedButton} />

      <CounterComponent />
      <DisplayTab/>
      <br></br>
      <DisplayTabb/>
      <br></br>
      <DisplayTabr/>
      <br></br>
      <DisplayTabp tab={table1} />
      <DisplayTabp tab={table2} />
      <div>
      <h1>User Authentication</h1>
      <AuthenticationForm onFormSubmit={handleFormSubmit} />
      <UserList users={users} onDelete={handleDelete} />
    </div>
        
     
      

      




    </div>
    
  </div>
  
  );
}

export default App;
