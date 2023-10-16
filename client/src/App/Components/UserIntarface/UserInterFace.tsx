import React from "react";
import { Route, Routes } from "react-router-dom";
import {NavMenu} from '../navMenu/NavMenu'
import { Home } from "../home/Home";
import { Hastags } from "../hashtags/Heshatags";
import { ProfilePage } from "../userProfile/MyProfilePage";
import { UserIntarFaceContainer } from "./UserInterFace.styled";
import { Chat } from "../Chat/Chat";
import {FriendsList} from '../FriendsList/FriendsList'
export const UserInterFace: React.FC = () => {
    return(
        <UserIntarFaceContainer>
        <NavMenu></NavMenu>
        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/friends" element={<FriendsList></FriendsList>}></Route>
            <Route path="/profile/:id" element={<ProfilePage></ProfilePage>}></Route>
            <Route path="/chat" element={<Chat></Chat>}></Route>
        </Routes>
        <Hastags></Hastags>
        </UserIntarFaceContainer>
    )
}