import React from "react";
import {
  HeshatagsContainer,
  HashtagTitleContainer,
  HashtagTitle,
  HashtagsListTitle,
  HashtagsList,
  HashtagsTableContainer,
  HashtagsItem,
  HashtagsItemTitle,
} from "./Hashtags.styled";
import { useCurrentUserQuery } from "../../redux/auth/auth";
export const Hastags: React.FC = () => {
  const {data} = useCurrentUserQuery()
  return (
    <HeshatagsContainer>
      <HashtagTitleContainer>
        <HashtagTitle>Search for friends by interests</HashtagTitle>
      </HashtagTitleContainer>
      <HashtagsTableContainer>
        <HashtagsList>
          <HashtagsListTitle>Hashtags for you</HashtagsListTitle>
        {data?.user?.interess?.map((interes:string,i:number) => {
         return( 
         <HashtagsItem key={i}>
          <HashtagsItemTitle>{interes}</HashtagsItemTitle>
        </HashtagsItem>
        )
        })}
        </HashtagsList>
      </HashtagsTableContainer>
    </HeshatagsContainer>
  );
};
