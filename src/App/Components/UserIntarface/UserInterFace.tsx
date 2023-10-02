import React from "react";
import { Route, Routes } from "react-router-dom";
import {NavMenu} from '../navMenu/NavMenu'
import { UserIntarFaceContainer } from "./UserInterFace.styled";
export const UserInterFace: React.FC = () => {
    return(
        <UserIntarFaceContainer>
        <NavMenu></NavMenu>
        </UserIntarFaceContainer>
    )
}