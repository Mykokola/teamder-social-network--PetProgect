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
  import { useForm } from "react-hook-form";
  import { hobbies } from '../constants/hobbyArry';
  import { useAppState } from "../state/index";
  import { useRegUserMutation } from '../../../redux/auth/auth';
  import {validateFruitSelection} from '../../../../untils/validateInteresChice'
export const RegisterInterests:React.FC = () => {
    const [setNewUser] = useRegUserMutation()
    const { register, handleSubmit,  formState: { errors }, watch } = useForm();
    const [state, setState] =  useAppState();
    const saveData = async (data:any)  => {
        const selectedInterests = watch('interests');
        setState({...state,...{selectedInterests}})
        setNewUser(state)
    }
    return(
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
            {hobbies.map((e,i) => {
                return(
                    <InterestsItem key={i}>
                    <InterestsLabel>
                        <IteresInput
                        type="checkbox"
                        value={e} 
                        {...register('interests',{ validate: validateFruitSelection })}
                        />{e}
                        </InterestsLabel>
                    </InterestsItem>
                )
            })}
                   </InterestsList>
        {/* <ScrollCustopm>

        </ScrollCustopm> */}
        </IteresContainer>
        <RegisterNext type='submit'>SIGN UP!</RegisterNext>
    <AuthParagraf>
          You already have an account? <SingUp to="/login">Login</SingUp>
            </AuthParagraf>
        </RegForm>
        </>
    )
}