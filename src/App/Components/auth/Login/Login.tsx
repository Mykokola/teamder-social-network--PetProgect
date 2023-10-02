import React from "react";
import {
  AuthFormInput,
  AuthFomrCheckBoxContainer,
  AuthFormBtn,
  AuthFormTitle,
  CheckboxCOntainer,
  CheckboxInput,
  CheckboxSpan,
  ForgotPassLink,
  AuthParagraf,
  SingUp,
  AuthFomr
} from "../styles/auth.styled";
export const Login: React.FC = () => {
  return (
    <>
         <AuthFomr action="">
      <AuthFormTitle>Welcome, login to your account! </AuthFormTitle>
      <AuthFormInput placeholder="Login" type="text" />
      <AuthFormInput placeholder="Password" type="text" />
      <AuthFomrCheckBoxContainer>
        <CheckboxCOntainer>
          <CheckboxInput type="checkbox" />
          <CheckboxSpan>Remember me</CheckboxSpan>
        </CheckboxCOntainer>
        <ForgotPassLink href="">Forgot password?</ForgotPassLink>
      </AuthFomrCheckBoxContainer>
      <AuthFormBtn>Login now</AuthFormBtn>
      <AuthParagraf>
              Don’t have an account yet? <SingUp to="/register">Sign Up</SingUp>
            </AuthParagraf>
            </AuthFomr>
    </>
  );
};
