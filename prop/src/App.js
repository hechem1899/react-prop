import React from 'react';
import logo from './logo.png.png';
import Profile from './profile folder/Profile'
import './App.css';

function App() {
  const myfunction=(name)=>{alert(name)}
  return (
    <Profile FullName={"Hechem"} bio={"visca barca "} profession={"programer"}  handlename={myfunction}>
      <img src={logo}/>
    </Profile>



  );
}

export default App;
