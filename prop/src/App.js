import React from 'react';
import logo from './logo.png.png';
import Profile from './profile folder/Profile'
import './App.css';

function App() {
  return (
    <Profile FullName={"Hechem"} bio={"visca barca "} profession={"programer"} >
      <img src={logo}/>
    </Profile>



  );
}

export default App;
