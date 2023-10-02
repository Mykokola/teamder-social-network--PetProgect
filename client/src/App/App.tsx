import React from 'react';
import { Auth } from './Components/auth/Auth';
import { UserInterFace } from './Components/UserIntarface/UserInterFace';
import './App.css';
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>

     {/* <Auth></Auth> */}
    <UserInterFace></UserInterFace>
 </>
  );
}

export default App;
