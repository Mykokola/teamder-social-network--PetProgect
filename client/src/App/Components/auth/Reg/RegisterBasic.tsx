import React from "react";
import {
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
} from "../styles/auth.styled";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import { schema, FormErrors } from "../schemaRegister/basicRegSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAppState } from "../state/index";
import { useGetAllUsersQuery } from "../../../redux/auth/auth";
import { createErrorRegForm } from "../../../../untils/createErrorReg";
export const RegisterBasic: React.FC = () => {
  const { data } = useGetAllUsersQuery();
  const [state, setState] = useAppState();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormErrors>({ resolver: yupResolver(schema) });
  const notify = (message: string) => toast(message);

  useEffect(() => {
    createErrorRegForm(errors);
  });

  const emailCheck = (userEmail: string) => {
    const { users } = data;
    const result = users.some(
      ({ email }: { email: string }) => email === userEmail
    );
    return result;
  };

  const saveData = (data: any) => {
    const { email } = data;
    if (!emailCheck(email)) {
      setState({ ...state, ...data });
      reset();
      navigate("/auth/register/additional");
    } else {
      notify("user with this email is already registered");
    }
  };
  return (
    <>
      <BallContainer>
        <ActiveItemBall>1</ActiveItemBall>
        <BallItem>2</BallItem>
        <BallItem>3</BallItem>
      </BallContainer>
      <RegForm onSubmit={handleSubmit(saveData)}>
        <AuthFormTitle>Basic information</AuthFormTitle>
        <RegisterInput
          required
          {...register("login")}
          placeholder="Login"
          type="login"
        />
        <RegisterInput
          required
          {...register("email")}
          placeholder="Email"
          type="email"
        />
        <ToLineRegInput>
          <RegisterInput
            required
            {...register("name")}
            placeholder="Name"
            type="name"
          />
          <RegisterInput
            required
            {...register("surName")}
            placeholder="Surmane"
            type="surName"
          />
        </ToLineRegInput>
        <RegisterInput
          required
          {...register("password")}
          placeholder="Password"
          type="password"
        />
        <ToLineRegInput>
          <RegisterInput
            required
            {...register("city")}
            placeholder="City"
            type="text"
          />
          <RegisterInput
            required
            {...register("age")}
            placeholder="Age"
            type="text"
          />
        </ToLineRegInput>

        <RegisterNext type="submit">CONTINUE</RegisterNext>
        <AuthParagraf>
          You already have an account? <SingUp to="/auth/login">Login</SingUp>
        </AuthParagraf>
      </RegForm>
      <ToastContainer />
    </>
  );
};
