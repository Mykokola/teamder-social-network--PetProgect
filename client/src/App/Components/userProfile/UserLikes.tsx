import React from "react";
import { LikeBtn } from "./MyProfilePage.styled";
import LoadingOverlay from 'react-loading-overlay-ts';
import { useEffect } from "react";
import { useUpdateLikeMutation } from "../../redux/auth/auth";
export const UserLikes:React.FC<{id:any}>  = ({id}) => {
    const [setLike,{data}] = useUpdateLikeMutation()
    const likes = data?.likes >= 0 ? data?.likes : 'loding...'
    useEffect(() => {
        setLike({_id:id})
    },[])
    const updateLike = async () => {
        await setLike({_id:id,change:true})
        }

    return(
        <>
          <LikeBtn type="button" onClick={updateLike}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M20 8H14.388L15.511 4.633C15.713 4.025 15.611 3.351 15.236 2.831C14.861 2.311 14.253 2 13.612 2H12C11.703 2 11.422 2.132 11.231 2.36L6.531 8H4C2.897 8 2 8.897 2 10V19C2 20.103 2.897 21 4 21H17.307C17.7139 20.9986 18.1108 20.8738 18.4452 20.6421C18.7797 20.4103 19.0359 20.0825 19.18 19.702L21.937 12.351C21.9789 12.2387 22.0002 12.1198 22 12V10C22 8.897 21.103 8 20 8ZM4 10H6V19H4V10ZM20 11.819L17.307 19H8V9.362L12.468 4H13.614L12.052 8.683C12.0013 8.83331 11.9871 8.99355 12.0107 9.15043C12.0343 9.3073 12.095 9.45629 12.1877 9.58504C12.2803 9.71379 12.4024 9.8186 12.5436 9.89076C12.6849 9.96293 12.8414 10.0004 13 10H20V11.819Z"
            fill="#F2F2F2"
          />
        </svg>{" "}
        </LikeBtn>
        {likes}
        </>
    )
    
}