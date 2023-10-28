import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import bagroundImg from '../../../images/auth/imgForAuthPage.png'
export const AuthContainer = styled.div`
  display: flex;
  background: #000;
`;
export const AuthImgContainer = styled.div`
  background-image: url(${bagroundImg});
  background-size: 50vw 100%; /* Зображення розтягнеся на всю ширину та висоту контейнера */
  background-repeat: no-repeat;
  height: 100vh; /* Встановлюємо висоту контейнера на висоту екрана */
  width: 50%;
`;
export const AuthFormContainer = styled.div`
  width: 50%;
  text-align: center;
`;

export const AuthLogoImg = styled.img`
  margin-top: 98px;
`;
export const AuthFomr = styled.form`
  width: 439px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 54px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const RegForm = styled(AuthFomr)`
  margin-top: 20px;
`;
export const AuthFormTitle = styled.h2`
  color: #f2f2f2;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Roboto;
  font-size: 30px;
  font-style: normal;
  font-weight: 400;
  line-height: 38px; /* 126.667% */
  letter-spacing: 0.15px;
`;
export const CheckboxCOntainer = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
`;
export const CheckboxInput = styled.input``;
export const CheckboxSpan = styled.span`
  color: #bdbdbd;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const AuthFormInput = styled.input`
  width: 100%;
  height: 45px;
  color: white;
  border-bottom: 1px solid #f2f2f2;
  margin-top: 44px;
  &:nth-child(2) {
    margin-top: 34px;
  }
  font-size: 20px;
  padding-left: 8px;
`;
export const ForgotPassLink = styled.a`
  color: #bdbdbd;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
export const AuthFomrCheckBoxContainer = styled.div`
  margin-top: 44px;
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;
export const RegisterNext = styled.button`
  display: flex;
  width: 100%;
  height: 64px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #ffb800;
  margin-top: 43px;
  color: #000;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #b18000;
  }
`;
export const AuthFormBtn = styled.button`
  width: 100%;
  height: 64px;
  flex-shrink: 0;
  border-radius: 5px;
  background: #ffb800;
  margin-top: 43px;
  color: #000;
  font-family: Roboto;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  &:hover {
    background: #b18000;
  }
`;
export const AuthParagraf = styled.p`
  color: #bdbdbd;
  text-align: center;
  font-family: Roboto;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 34px;
`;
export const SingUp = styled(NavLink)`
  color: #ffb800;
  line-height: normal;
  text-decoration-line: underline;
`;
export const RegisterInput = styled(AuthFormInput)`
  margin: 0;
  margin-top: 16px;
  &:nth-child(2) {
    margin-top: 0;
  }
`;
export const ToLineRegInput = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-end;
  gap: 26px;
`;
export const BallContainer = styled.div`
  margin-top: 11px;
  display: flex;
  overflow: hidden;
  width: 100%;
  justify-content: space-between;
  position: relative;
  width: 439px;
  margin-left: auto;
  margin-right: auto;
`;
export const BallItem = styled.div`
  color: white;
  background: black;
  z-index: 1;
  border: 2px solid #ffb800;
  width: 45px;
  height: 45px;
  flex-shrink: 0;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: Manrope;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.3px;
`;

export const BallItemActive = styled(BallItem)`
  background: #ffb800;
  color: #000;
`;
export const ActiveItemBall = styled(BallItemActive)`
  &:after {
    position: absolute;
    display: block;
    content: "";
    border-bottom: 2px solid #ffb800;
    width: 200%;
    z-index: -1;
  }
`;
export const RegAdditionalBio = styled.textarea`
  height: 105px;
  resize: none;
  width: 100%;
  background: inherit;
  color: white;
  font-size: 14px;
  overflow: hidden;
  outline: none;
  padding: 5px;
  margin-top: 11px;
`;
export const InterestsList = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
export const InterestsLabel = styled.label`
  display: flex;
  gap: 9px;
  color: rgba(255, 255, 255, 0.87);

  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: 0.15px;
`;
export const IteresInput = styled.input`
width: 16px;
margin: 0;
    padding: 0;
`
export const InterestsItem = styled.li`
width:100%;
`
export const IteresContainer = styled.div`
  width: 441px;
  height: 318px;
  overflow: auto;
  margin-top: 22px;
  padding: 22px 28px;
  box-sizing: border-box;

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #424242;
  }
  &::-webkit-scrollbar {
    width: 12px;
    background-color: #black;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #bfbfbf;
  }
`;
// export const ScrollCustopm = styled.div`
// min-height: 384px;
// `
