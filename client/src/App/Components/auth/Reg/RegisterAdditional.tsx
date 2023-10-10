import React from "react";
import {
  AuthFormTitle,
  AuthParagraf,
  SingUp,
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
import { ToastContainer } from "react-toastify";
import { useEffect } from "react";
import { useAppState } from "../state/index";
import { useNavigate } from "react-router-dom";
import { schema, FormErrors } from "../schemaRegister/additionalRegSchema";
import { useForm } from "react-hook-form";
import { createErrorRegForm } from "../../../../untils/createErrorReg";
export const RegisterAdditional: React.FC = () => {
  const [state, setState] = useAppState();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormErrors>({ resolver: yupResolver(schema) });
  useEffect(() => {
    createErrorRegForm(errors);
  });
  const saveData = (data: any) => {
    const { bio } = data;
    const socialMedia: string[] = [];
    for (let key in data) {
      if (key !== "bio" && data[key]) socialMedia.push(data[key]);
    }
    setState({ ...state, ...{ bio, socialMedia } });
    navigate("/auth/register/interests");
    reset();
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
        <RegAdditionalBio
          required
          {...register("bio")}
          placeholder="Bio"
        ></RegAdditionalBio>
        <RegisterInput
          required
          {...register("socialOne")}
          placeholder="Social Media URL #1"
          type="text"
        />
        <RegisterInput
          {...register("socialTwo")}
          name="socialTwo"
          placeholder="Social Media URL #2"
          type="text"
        />
        <RegisterInput
          {...register("socialFree")}
          placeholder="Social Media URL #3"
          name="socialFree"
          type="text"
        />
        <RegisterNext type="submit">CONTINUE</RegisterNext>
        <AuthParagraf>
          You already have an account? <SingUp to="/auth/login">Login</SingUp>
        </AuthParagraf>
      </RegForm>
      <ToastContainer />
    </>
  );
};
