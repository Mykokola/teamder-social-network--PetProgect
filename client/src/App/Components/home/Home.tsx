import React from "react";
import avarUser from "../../images/avatarUser.png";
import { UserProfile } from "./types";
import { nanoid } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useGetAllUsersQuery } from "../../redux/auth/auth";
import {
  HomePageP,
  HomeBtn,
  HomeContainer,
  HomeHeader,
  HomeTitle,
  HomeForm,
  HomeInput,
  SeatchFriendTitle,
  SeachContainer,
  SeachList,
  SeachItem,
  SeachImg,
  UserAddandMessageBtn,
  AbauthUserContainer,
  UserAddAndMessage,
} from "./Home.styled";
import { useState } from "react";
export const Home: React.FC = () => {
  const { data } = useGetAllUsersQuery();
  const { users = [] } = data ? data : [];
  const [filter, setFilter] = useState("");
  const [filterUsers, setUsersFilter] = useState([...users]);
  const searchUser = (event: React.FormEvent) => {
    event.preventDefault();
    let arryFilter = users.filter((e: any) => {
      return e.name.toLowerCase().includes(filter.toLocaleLowerCase());
    });
    setUsersFilter(arryFilter);
  };
  useEffect(() => {
    if (JSON.stringify(users) !== JSON.stringify(filterUsers)) {
      setUsersFilter(users);
    }
  }, [users]);

  return (
    <HomeContainer>
      <HomeHeader>
        <HomeTitle>Welcome, (USER NAME)!</HomeTitle>
        <SeatchFriendTitle>Search Friends</SeatchFriendTitle>
        <HomeForm onSubmit={searchUser}>
          <HomeInput
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            type="text"
          />
          <HomeBtn type="submit">Search</HomeBtn>
        </HomeForm>
      </HomeHeader>
      <SeachContainer>
        <SeachList>
          {filterUsers ? (
            filterUsers.map(
              (
                { _id, avatarURL, name, surName, bio }: UserProfile,
                i: number
              ) => {
                return (
                  <SeachItem key={_id}>
                    <SeachImg src={avatarURL} alt="" />
                    <AbauthUserContainer>
                      <h3>
                        {name} {surName}
                      </h3>
                      <HomePageP>{bio}</HomePageP>
                    </AbauthUserContainer>
                    <UserAddAndMessage>
                      <UserAddandMessageBtn>Add Friend</UserAddandMessageBtn>
                      <UserAddandMessageBtn>Send Message</UserAddandMessageBtn>
                    </UserAddAndMessage>
                  </SeachItem>
                );
              }
            )
          ) : (
            <p>loading...</p>
          )}
        </SeachList>
      </SeachContainer>
    </HomeContainer>
  );
};
