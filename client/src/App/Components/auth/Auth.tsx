import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "./Login/Login";
import { RegisterInterests } from "./Reg/RegisterInterests";
import {
  AuthContainer,
  AuthImgContainer,
  AuthFormContainer,
  AuthLogoImg,
} from "./styles/auth.styled";
import { RegisterBasic } from "./Reg/RegisterBasic";
import { RegisterAdditional } from "./Reg/RegisterAdditional";
import { AppProvider } from "./state";
import formLogo from "../../images/auth/logoAuth 2.png";
export const Auth: React.FC = () => {
  return (
    <>
      <AuthContainer>
        <AuthImgContainer></AuthImgContainer>
        <AuthFormContainer>
          <AuthLogoImg src={formLogo} alt="" />
          <AppProvider>
            <Routes>
              <Route path="/login" element={<Login />}></Route>
              <Route
                path="/register"
                element={<RegisterBasic></RegisterBasic>}
              ></Route>
              <Route
                path="/register/additional"
                element={<RegisterAdditional></RegisterAdditional>}
              >
              </Route>
              <Route
                path="/register/interests"
                element={<RegisterInterests></RegisterInterests>}
              ></Route>
            </Routes>
          </AppProvider>
        </AuthFormContainer>
      </AuthContainer>
    </>
  );
};
