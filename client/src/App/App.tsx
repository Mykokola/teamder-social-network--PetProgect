import React from 'react';
import { Auth } from './Components/auth/Auth';
import { UserInterFace } from './Components/UserIntarface/UserInterFace';
import './App.css';
import { useSelector } from 'react-redux';
import { selectIsLogin } from './redux/auth/selectors';
import { Route, Routes } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import { RestrictRoute } from '../untils/customProvider';
function App() {
  return (
    <>
    <Routes>
    <Route path="/auth/*" element={<RestrictRoute switherTo={false} redirectTo='/user/' component={Auth} />} />
    <Route path="/user/*" element={<RestrictRoute switherTo={true} component={UserInterFace} redirectTo='/auth/login' />} />
      </Routes>
      </>
  );
}

export default App;
