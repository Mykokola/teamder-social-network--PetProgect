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
import { useAppState } from "../state/index";

export const RegisterAdditional: React.FC = () => {
  const [state, setState] = useAppState();

  const saveData = (e: any) => {
    let g: {} = { 2: 2 };
    setState({ ...state, ...g });
    console.log(state);
  };
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
        <RegisterNext type="button" onClick={saveData}>
          CONTINUE
        </RegisterNext>
        <AuthParagraf>
          You already have an account? <SingUp to="/login">Login</SingUp>
        </AuthParagraf>
      </RegForm>
    </>
  );
};
