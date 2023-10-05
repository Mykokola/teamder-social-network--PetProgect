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
import { yupResolver } from "@hookform/resolvers/yup";

import { useAppState } from "../state/index";
import { schema,FormErrors } from "../schemaRegister/additionalRegSchema";

import { useForm } from "react-hook-form";
const {register,handleSubmit,formState:{ errors },reset} = useForm<FormErrors>({resolver:yupResolver(schema)})

export const RegisterAdditional: React.FC = () => {
  const [state, setState] = useAppState();

  const saveData = (e: any) => {
    setState({ ...state});
    console.log(state);
  };
  return (
    <>
      <BallContainer>
        <ActiveItemBall>1</ActiveItemBall>
        <BallItemActive>2</BallItemActive>
        <BallItem>3</BallItem>
      </BallContainer>
      <RegForm onSubmit={handleSubmit(saveData)}>
        <AuthFormTitle>Additional information</AuthFormTitle>
        <RegAdditionalBio {...register("bio")} placeholder="Bio"></RegAdditionalBio>
        <RegisterInput {...register("socialOne")} placeholder="Social Media URL #1" type="text" />
        <RegisterInput {...register("socialTwo")} placeholder="Social Media URL #2" type="text" />
        <RegisterInput {...register("socialFree")} placeholder="Social Media URL #3" type="text" />
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
