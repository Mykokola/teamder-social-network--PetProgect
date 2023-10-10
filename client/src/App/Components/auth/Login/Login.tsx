import React from "react";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer, toast } from "react-toastify";
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
  AuthFomr,
} from "../styles/auth.styled";
import { useAuthUserMutation } from "../../../redux/auth/auth";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setToken } from "../../../redux/auth/taskSlice";
export const Login: React.FC = () => {
  const notify = (message: string) => toast(message);
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [authUserApi] = useAuthUserMutation();
  const authUser = async (dataForm: any) => {
    try {
      const response = await authUserApi(dataForm).unwrap();
      dispatch(setToken(response?.data.token));
    } catch (e: any) {
      notify(e?.data?.message);
    }
  };

  return (
    <>
      <AuthFomr onSubmit={handleSubmit(authUser)}>
        <AuthFormTitle>Welcome, login to your account! </AuthFormTitle>
        <AuthFormInput
          {...register("email")}
          required
          placeholder="Email"
          type="text"
        />
        <AuthFormInput
          {...register("password")}
          required
          placeholder="Password"
          type="text"
        />
        <AuthFomrCheckBoxContainer>
          <CheckboxCOntainer>
            <CheckboxInput type="checkbox" />
            <CheckboxSpan>Remember me</CheckboxSpan>
          </CheckboxCOntainer>
          <ForgotPassLink href="">Forgot password?</ForgotPassLink>
        </AuthFomrCheckBoxContainer>
        <AuthFormBtn>Login now</AuthFormBtn>
        <AuthParagraf>
          Don’t have an account yet? <SingUp to="/auth/register">Sign Up</SingUp>
        </AuthParagraf>
      </AuthFomr>
      <ToastContainer />
    </>
  );
};
