import React from "react";
import {
  AuthFormBtn,
  AuthFormTitle,
  AuthParagraf,
  SingUp,
  ToLineRegInput,
  RegisterInput,
  BallItem,
  BallContainer,
  ActiveItemBall,
  RegForm,
  RegisterNext,
  BallItemActive,
  RegAdditionalBio,
} from "../styles/auth.styled";
export const RegisterAdditional: React.FC = () => {
  return (
    <>
      <BallContainer>
        <ActiveItemBall>1</ActiveItemBall>
        <BallItemActive>2</BallItemActive>
        <BallItem>3</BallItem>
      </BallContainer>
      <RegForm>
        <AuthFormTitle>Additional information</AuthFormTitle>
        <RegAdditionalBio placeholder="Bio"></RegAdditionalBio>
        <RegisterInput placeholder="Social Media URL #1" type="text" />
        <RegisterInput placeholder="Social Media URL #2" type="text" />
        <RegisterInput placeholder="Social Media URL #3" type="text" />
        <RegisterNext to={"/register/interests"}>CONTINUE</RegisterNext>
        <AuthParagraf>
          You already have an account? <SingUp to="/login">Login</SingUp>
        </AuthParagraf>
      </RegForm>
    </>
  );
};
