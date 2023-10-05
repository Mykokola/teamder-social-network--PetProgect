import React from 'react'
import {
    AuthFormTitle,
    AuthParagraf,
    SingUp,
    BallContainer,
    ActiveItemBall,
    RegForm,
    RegisterNext,
    BallItemActive,
    IteresContainer,
    InterestsList,
    InterestsLabel,
    InterestsItem,
    IteresInput
  } from "../styles/auth.styled";
export const RegisterInterests:React.FC = () => {
    return(
        <>
            <BallContainer>
        <ActiveItemBall>1</ActiveItemBall>
        <BallItemActive>2</BallItemActive>
        <BallItemActive>3</BallItemActive>
    </BallContainer>
    <RegForm>
        <AuthFormTitle>Interests</AuthFormTitle>
        <IteresContainer>
        <InterestsList>
        <InterestsItem>
            <InterestsLabel>
                <IteresInput type="checkbox" />Sport
                </InterestsLabel>
            </InterestsItem>
            <InterestsItem>
            <InterestsLabel>
                <IteresInput type="checkbox" />Sport
                </InterestsLabel>
            </InterestsItem>
            <InterestsItem>
            <InterestsLabel>
                <IteresInput type="checkbox" />Sport
                </InterestsLabel>
            </InterestsItem>
            <InterestsItem>
            <InterestsLabel>
                <IteresInput type="checkbox" />Sport
                </InterestsLabel>
            </InterestsItem>
            <InterestsItem>
            <InterestsLabel>
                <IteresInput type="checkbox" />Sport
                </InterestsLabel>
            </InterestsItem>
            <InterestsItem>
            <InterestsLabel>
                <IteresInput type="checkbox" />Sport
                </InterestsLabel>
            </InterestsItem>
              <InterestsItem>
            <InterestsLabel>
                <IteresInput type="checkbox" />Sport
                </InterestsLabel>
            </InterestsItem>
            <InterestsItem>
            <InterestsLabel>
                <IteresInput type="checkbox" />Sport
                </InterestsLabel>
            </InterestsItem>
            <InterestsItem>
            <InterestsLabel>
                <IteresInput type="checkbox" />Sport
                </InterestsLabel>
            </InterestsItem>
            <InterestsItem>
            <InterestsLabel>
                <IteresInput type="checkbox" />Sport
                </InterestsLabel>
            </InterestsItem>
              <InterestsItem>
            <InterestsLabel>
                <IteresInput type="checkbox" />Sport
                </InterestsLabel>
            </InterestsItem>
            <InterestsItem>
            <InterestsLabel>
                <IteresInput type="checkbox" />Sport
                </InterestsLabel>
            </InterestsItem>
            <InterestsItem>
            <InterestsLabel>
                <input type="checkbox" />Sport
                </InterestsLabel>
            </InterestsItem>
            <InterestsItem>
            <InterestsLabel>
                <IteresInput type="checkbox" />Sport
                </InterestsLabel>
            </InterestsItem>
              <InterestsItem>
            <InterestsLabel>
                <IteresInput type="checkbox" />Sport
                </InterestsLabel>
            </InterestsItem>
              <InterestsItem>
            <InterestsLabel>
                <IteresInput type="checkbox" />Sport
                </InterestsLabel>
            </InterestsItem>
            <InterestsItem>
            <InterestsLabel>
                <IteresInput type="checkbox" />Sport
                </InterestsLabel>
            </InterestsItem>
            <InterestsItem>
            <InterestsLabel>
                <IteresInput type="checkbox" />Sport
                </InterestsLabel>
            </InterestsItem>
            <InterestsItem>
            <InterestsLabel>
                <IteresInput type="checkbox" />Sport
                </InterestsLabel>
            </InterestsItem>
              <InterestsItem>
            <InterestsLabel>
                <IteresInput type="checkbox" />Sport
                </InterestsLabel>
            </InterestsItem>
              <InterestsItem>
            <InterestsLabel>
                <IteresInput type="checkbox" />Sport
                </InterestsLabel>
            </InterestsItem>
            <InterestsItem>
            <InterestsLabel>
                <IteresInput type="checkbox" />Sport
                </InterestsLabel>
            </InterestsItem>
              <InterestsItem>
            <InterestsLabel>
                <IteresInput type="checkbox" />Sport
                </InterestsLabel>
            </InterestsItem>
            <InterestsItem>
            <InterestsLabel>
                <IteresInput type="checkbox" />Sport
                </InterestsLabel>
            </InterestsItem>
            <InterestsItem>
            <InterestsLabel>
                <IteresInput type="checkbox" />Sport
                </InterestsLabel>
            </InterestsItem>
            <InterestsItem>
            <InterestsLabel>
                <IteresInput type="checkbox" />Sport
                </InterestsLabel>
            </InterestsItem>
            <InterestsItem>
            <InterestsLabel>
                <IteresInput type="checkbox" />Sport
                </InterestsLabel>
            </InterestsItem>
            <InterestsItem>
            <InterestsLabel>
                <IteresInput type="checkbox" />Sport
                </InterestsLabel>
            </InterestsItem>
            <InterestsItem>
            <InterestsLabel>
                <IteresInput type="checkbox" />Sport
                </InterestsLabel>
            </InterestsItem>
           
        </InterestsList>
        {/* <ScrollCustopm>

        </ScrollCustopm> */}
        </IteresContainer>
        <RegisterNext >SIGN UP!</RegisterNext>
    <AuthParagraf>
          You already have an account? <SingUp to="/login">Login</SingUp>
            </AuthParagraf>
        </RegForm>
        </>
    )
}