import React from "react";
import { useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";
import LoadingOverlay from 'react-loading-overlay-ts';
import { useEffect } from "react";
import { useState } from "react";
import { UserLikes } from "./UserLikes";
import { useGetUserByIdMutation,useUpdateLikeMutation } from "../../redux/auth/auth";
import { HeaderContainer,ProfileContainer,HeaderTitel,LikeBtn,
    UserCointainer,UserBasicInfoContainer,UserAvatar,
    UserName,UserStatus,UserInfoList,UserInfoItem,UserPsewName,
    UserInteresContainer,UserNameAndIndenfContainer,UserInteresTitle,UserInteresParagraf} from "./MyProfilePage.styled";
export const ProfilePage = () => {
  const dispatch = useDispatch()
  const {id} = useParams()
  const [getUser,{data,refetch}] = useGetUserByIdMutation()
   useEffect( () => {
    getUser({_id:id})
   },[])

//FUNCION

   if(data){
    const {avatarURL,name,surName,login,bio,interess,city,age} = data.user[0]
    return (
      <ProfileContainer>
        <HeaderContainer>
          <HeaderTitel>My profile</HeaderTitel>
        </HeaderContainer>
      
      <UserCointainer>
    <UserBasicInfoContainer>
      <UserAvatar src={avatarURL} alt="" />
      <UserNameAndIndenfContainer>
      <UserName>{name} {surName}</UserName>
      <UserPsewName>{login}</UserPsewName>
      </UserNameAndIndenfContainer>
    </UserBasicInfoContainer>
    <UserStatus>
    {bio}
    </UserStatus>
    <UserInteresContainer>
      <UserInteresTitle>Interests:</UserInteresTitle>
   {interess.map((e:string,i:number) =>  <div key={i}>{e} </div>)}
    </UserInteresContainer> 
    <UserInfoList>
      <UserInfoItem>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="16"
          viewBox="0 0 14 16"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M6.95368 0C10.7873 0 13.9074 3.12004 13.9074 6.95208V6.95369C13.9074 8.4761 13.4258 9.91932 12.5138 11.1321L12.5122 11.1305L12.5066 11.1417C11.2041 12.7994 7.48409 15.7474 7.32649 15.8714C7.21609 15.9586 7.08489 16.001 6.95449 16.001C6.82408 16.001 6.69288 15.9586 6.58248 15.8706C6.42488 15.7466 2.70483 12.797 1.40242 11.1409L1.39682 11.1289L1.39442 11.1305C0.482406 9.91852 0 8.4737 0 6.95208C0 3.12004 3.12004 0 6.95368 0ZM2.34883 10.4041C3.33764 11.6601 5.97447 13.8402 6.95368 14.6322V14.6306C7.9329 13.8378 10.5697 11.6585 11.5585 10.4025C12.3097 9.40172 12.7074 8.2081 12.7074 6.95208C12.7074 3.78085 10.1257 1.20001 6.95368 1.20001C3.78165 1.20001 1.20001 3.78165 1.20001 6.95448C1.20001 8.2105 1.59682 9.40411 2.34883 10.4041ZM3.92388 6.82328C3.92388 8.4937 5.28309 9.85211 6.95351 9.85211V9.84971C8.62313 9.84971 9.98315 8.4913 9.98315 6.82168C9.98315 5.15206 8.62313 3.79204 6.95351 3.79204C5.28389 3.79204 3.92388 5.15286 3.92388 6.82328ZM5.12389 6.82328C5.12389 5.81446 5.9455 4.99365 6.95351 4.99365V4.99205C7.96152 4.99205 8.78314 5.81366 8.78314 6.82248C8.78314 7.83129 7.96152 8.6513 6.95351 8.6513C5.9455 8.6513 5.12389 7.83209 5.12389 6.82328Z"
            fill="#F2F2F2"
          />
        </svg>{" "}
        {city}
      </UserInfoItem>
      <UserInfoItem>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="23"
          viewBox="0 0 20 23"
          fill="none"
        >
          <path
            d="M6.6665 5.74992V9.58229H9.1665V5.74992H10.8332V9.58229H13.3332V5.74992H14.9998V9.58229L15.8332 9.58325C16.4708 9.58321 17.0844 9.8634 17.5484 10.3665C18.0123 10.8696 18.2916 11.5575 18.329 12.2896L18.3332 12.4583V13.4166C18.3332 14.3883 18.019 15.2758 17.5007 15.9514L17.4998 20.1249C17.4998 20.3791 17.412 20.6228 17.2558 20.8026C17.0995 20.9823 16.8875 21.0833 16.6665 21.0833H3.33317C3.11216 21.0833 2.9002 20.9823 2.74391 20.8026C2.58763 20.6228 2.49984 20.3791 2.49984 20.1249V15.9466C2.05206 15.3599 1.76962 14.6307 1.68984 13.8555L1.6715 13.613L1.6665 13.4166V12.4583C1.66647 11.7249 1.91011 11.0193 2.34757 10.4858C2.78504 9.9522 3.38326 9.63107 4.01984 9.58805L4.1665 9.58325L4.99984 9.58229V5.74992H6.6665ZM15.8332 11.4999H4.1665C3.96239 11.5 3.76539 11.5861 3.61286 11.7421C3.46033 11.8981 3.36288 12.113 3.339 12.3461L3.33317 12.4583V13.3888L3.33567 13.5297C3.36075 14.0177 3.54702 14.4762 3.85636 14.8114C4.16571 15.1467 4.57476 15.3334 4.99984 15.3333C5.39897 15.3341 5.78508 15.17 6.0879 14.871C6.39073 14.572 6.59014 14.1579 6.64984 13.7041L6.66234 13.5575L6.6665 13.3888C6.6965 12.1928 8.189 12.1497 8.324 13.2604L8.33234 13.3888L8.33567 13.5297C8.35898 14.0164 8.54271 14.4747 8.84947 14.8112C9.15623 15.1477 9.56296 15.3371 9.98687 15.3409C10.4108 15.3447 10.82 15.1626 11.1313 14.8316C11.4426 14.5006 11.6325 14.0457 11.6623 13.5594L11.6723 13.2891C11.7757 12.1813 13.224 12.1813 13.3273 13.2891L13.3373 13.5594C13.3671 14.0431 13.5552 14.4958 13.8637 14.8263C14.1722 15.1568 14.5782 15.3406 14.9998 15.3406C15.4215 15.3406 15.8274 15.1568 16.1359 14.8263C16.4444 14.4958 16.6325 14.0431 16.6623 13.5594L16.6665 13.4166V12.4583C16.6665 12.2235 16.5915 11.997 16.4559 11.8216C16.3203 11.6462 16.1334 11.5341 15.9307 11.5066L15.8332 11.4999ZM5.83317 0.958252C6.93317 1.79296 7.219 2.95925 7.04067 3.72592C6.95492 4.09421 6.74546 4.40823 6.45837 4.59892C6.17128 4.7896 5.83009 4.84133 5.50984 4.74271C5.18959 4.64409 4.91652 4.40322 4.75071 4.07307C4.58489 3.74292 4.53992 3.35054 4.62567 2.98225C4.87484 1.9185 5.83317 2.39575 5.83317 0.958252ZM9.99984 0.958252C11.0998 1.79296 11.3857 2.95925 11.2073 3.72592C11.1216 4.09421 10.9121 4.40823 10.625 4.59892C10.338 4.7896 9.99675 4.84133 9.6765 4.74271C9.35626 4.64409 9.08319 4.40322 8.91737 4.07307C8.75156 3.74292 8.70658 3.35054 8.79234 2.98225C9.0415 1.9185 9.99984 2.39575 9.99984 0.958252ZM14.1665 0.958252C15.2665 1.79296 15.5523 2.95925 15.374 3.72592C15.2882 4.09421 15.0788 4.40823 14.7917 4.59892C14.5046 4.7896 14.1634 4.84133 13.8432 4.74271C13.5229 4.64409 13.2499 4.40322 13.084 4.07307C12.9182 3.74292 12.8733 3.35054 12.959 2.98225C13.2082 1.9185 14.1665 2.39575 14.1665 0.958252Z"
            fill="#F2F2F2"
          />
        </svg>{" "}
        {age} y.o
      </UserInfoItem>
      <UserInfoItem>
        <UserLikes id={id}></UserLikes>
      </UserInfoItem>
    </UserInfoList>
    
  </UserCointainer>
  
      
      </ProfileContainer>
    );

   }
    return ( <LoadingOverlay
    active={true}
    spinner
    text='Loading your profile...'
  ></LoadingOverlay>
  )
 
};
