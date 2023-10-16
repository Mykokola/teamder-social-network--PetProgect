import React from "react";
import avarUser from '../../images/avatarUser.png'
import { HomePageP,SendMessage,HomeContainer ,HomeHeader,HomeTitle,
    UsersNameandSurname,SeatchFriendTitle,SeachContainer,SeachList,
    SeachItem,SeachImg,UserAddandMessageBtn,AbauthUserContainer,UserAddAndMessage} from "../home/Home.styled";
    import { useCurrentUserQuery } from "../../redux/auth/auth";
export const FriendsList:React.FC = () => {
  const {data}:{data:{user:{friends:[],name:string}}} = useCurrentUserQuery()
  const {friends,name} = data.user
    return(
  <HomeContainer>
    <HomeHeader>
    <HomeTitle>Welcome, {name}!</HomeTitle>
    <SeatchFriendTitle>Your Friends:)</SeatchFriendTitle>
    </HomeHeader>
    <SeachContainer>
        <SeachList>
        {friends.map(({_id:id, avatarURL, name, surName, bio, login }) => {
          return (
            <SeachItem key={id}>
               <UsersNameandSurname to={`/user/profile/${id}`}>
            <SeachImg src={avatarURL} alt="" />
            </UsersNameandSurname>
            <AbauthUserContainer>
            <UsersNameandSurname to={`/user/profile/${id}`}>
                        {name} {surName}
                      </UsersNameandSurname>
                      <HomePageP>{bio}</HomePageP>
            </AbauthUserContainer>
            <UserAddAndMessage>
            <SendMessage to='/user/chat'>Send Message</SendMessage>
            </UserAddAndMessage>
            </SeachItem>
          )
        })}
        </SeachList>
    </SeachContainer>
  </HomeContainer>
    )
}