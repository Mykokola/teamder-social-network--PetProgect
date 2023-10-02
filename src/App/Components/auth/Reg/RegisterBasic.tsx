import React from 'react'
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
export const RegisterBasic:React.FC = () => {
return(
    <>
    <BallContainer>
        <ActiveItemBall>1</ActiveItemBall>
        <BallItem>2</BallItem>
        <BallItem>3</BallItem>
    </BallContainer>
    <RegForm>
    <AuthFormTitle>Basic information</AuthFormTitle>
    <RegisterInput placeholder="Login" type="text" />
      <RegisterInput placeholder="Email" type="text" />
      <ToLineRegInput>
      <RegisterInput placeholder="Name" type="text" />
      <RegisterInput placeholder="Surmane" type="text" />
      </ToLineRegInput>
      <RegisterInput placeholder="Password" type="text" />
      <ToLineRegInput>
      <RegisterInput placeholder="City" type="text" />
      <RegisterInput placeholder="Age" type="text" />
      </ToLineRegInput>
      <RegisterNext to={'/register/additional'}>CONTINUE</RegisterNext>
          <AuthParagraf>
          You already have an account? <SingUp to="/">Login</SingUp>
            </AuthParagraf>
          </RegForm>

    </>
)
}