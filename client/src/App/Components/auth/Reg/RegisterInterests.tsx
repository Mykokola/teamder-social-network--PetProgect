import React from "react";
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
  IteresInput,
} from "../styles/auth.styled";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { hobbies } from "../constants/hobbyArry";
import { useAppState } from "../state/index";
import { useRegUserMutation } from "../../../redux/auth/auth";
import { validateInteresSelection } from "../../../../untils/validateInteresChice";
export const RegisterInterests: React.FC = () => {
  const navigate = useNavigate()
  const [setNewUser] = useRegUserMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [state, setState] = useAppState();
  const saveData = async (data: any) => {
    const interess = watch("interests");
    setNewUser({ ...state, ...{ interess } });
    navigate('/auth/login')
  };
  return (
    <>
      <BallContainer>
        <ActiveItemBall>1</ActiveItemBall>
        <BallItemActive>2</BallItemActive>
        <BallItemActive>3</BallItemActive>
      </BallContainer>
      <RegForm onSubmit={handleSubmit(saveData)}>
        <AuthFormTitle>Interests</AuthFormTitle>
        <IteresContainer>
          <InterestsList>
            {hobbies.map((e, i) => {
              return (
                <InterestsItem key={i}>
                  <InterestsLabel>
                    <IteresInput
                      type="checkbox"
                      value={e}
                      {...register("interests", {
                        validate: validateInteresSelection,
                      })}
                    />
                    {e}
                  </InterestsLabel>
                </InterestsItem>
              );
            })}
          </InterestsList>
        </IteresContainer>
        <RegisterNext type="submit">SIGN UP!</RegisterNext>
        <AuthParagraf>
          You already have an account? <SingUp to="/auth/login">Login</SingUp>
        </AuthParagraf>
      </RegForm>
    </>
  );
};
