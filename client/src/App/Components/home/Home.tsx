import React from "react";
import { UserProfile } from "./types";
import { useEffect } from "react";
import {
  useGetAllUsersQuery,
  useCurrentUserQuery,
  useAddFriendMutation
} from "../../redux/auth/auth";
import {
  UserSendMessageParagraf,
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
  SendMessage
} from "./Home.styled";
import { useState } from "react";
export const Home: React.FC = () => {
  const { data: allUsersArry } = useGetAllUsersQuery();
  const { data: currentUser ,refetch } = useCurrentUserQuery();
  const [addFrined] = useAddFriendMutation()
  const { users = [] } = allUsersArry ? allUsersArry : [];
  const [filter, setFilter] = useState("");
  const [filterUsers, setUsersFilter] = useState([...users]);
  //FUNCTION
  const addFriendBtn = async (login:string) => {
  await addFrined({login})
  await  refetch()
  }
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
                { _id, avatarURL, name, surName, bio, login }: UserProfile,
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
                      <>
                      {currentUser?.user?.login !== login ? (
                    currentUser?.user?.friends?.some((friend:{login:string}) => friend.login === login) ? (
                      <UserSendMessageParagraf>Send Messages your friend ;)</UserSendMessageParagraf>
                    ) : (
                      <UserAddandMessageBtn onClick={() => addFriendBtn(login)}>
                        Add Friend
                      </UserAddandMessageBtn>
                    )
                      ) : null
                     }
                     </>
                      <SendMessage to='chat'>Send Message</SendMessage>
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
