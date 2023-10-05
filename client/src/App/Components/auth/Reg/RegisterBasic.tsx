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
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { schema,FormErrors } from "../schemaRegister/basicRegSchema";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useForm  } from "react-hook-form";
import { useAppState } from "../state/index";
export const RegisterBasic: React.FC = () => {
  const [state, setState] = useAppState();
  const navigate = useNavigate();
  const {register,handleSubmit,formState:{ errors },reset} = useForm({resolver:yupResolver(schema)})
  const notify = (message:string) => toast(message);


  

  const saveData = (data:any) => {
 
    setState({ ...state, ...data });
   // navigate("/register/additional");
  }
  return (
    <>
      <BallContainer>
        <ActiveItemBall>1</ActiveItemBall>
        <BallItem>2</BallItem>
        <BallItem>3</BallItem>
      </BallContainer>
      <RegForm onSubmit={handleSubmit(saveData)}>
        <AuthFormTitle>Basic information</AuthFormTitle>
        <RegisterInput  required {...register('login')} placeholder="Login" type="login" />
        <RegisterInput required {...register('email')} placeholder="Email" type="email" />
        <ToLineRegInput>
          <RegisterInput required {...register('name')} placeholder="Name" type="name" />
          <RegisterInput required {...register('surName')} placeholder="Surmane" type="surName" />
        </ToLineRegInput>
        <RegisterInput required {...register('password')} placeholder="Password" type="password" />
        <ToLineRegInput>
          <RegisterInput required {...register('city')} placeholder="City" type="text" />
          <RegisterInput required {...register('age')} placeholder="Age" type="text" />
        </ToLineRegInput>
        <RegisterNext type="submit">
          CONTINUE
        </RegisterNext>
        <AuthParagraf>
          You already have an account? <SingUp to="/login">Login</SingUp>
        </AuthParagraf>
      </RegForm>
      <ToastContainer />
    </>
  );
};
