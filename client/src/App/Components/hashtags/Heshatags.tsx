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
  HashtagsItemParagraf,
} from "./Hashtags.styled";
export const Hastags: React.FC = () => {
  return (
    <HeshatagsContainer>
      <HashtagTitleContainer>
        <HashtagTitle>Search for friends by interests</HashtagTitle>
      </HashtagTitleContainer>
      <HashtagsTableContainer>
        <HashtagsList>
          <HashtagsListTitle>Hashtags for you</HashtagsListTitle>
          <HashtagsItem>
            <HashtagsItemTitle>#frontend</HashtagsItemTitle>
            <HashtagsItemParagraf>1,222 Teams</HashtagsItemParagraf>
          </HashtagsItem>
          <HashtagsItem>
            <HashtagsItemTitle>#frontend</HashtagsItemTitle>
            <HashtagsItemParagraf>1,222 Teams</HashtagsItemParagraf>
          </HashtagsItem>
          <HashtagsItem>
            <HashtagsItemTitle>#frontend</HashtagsItemTitle>
            <HashtagsItemParagraf>1,222 Teams</HashtagsItemParagraf>
          </HashtagsItem>
          <HashtagsItem>
            <HashtagsItemTitle>#frontend</HashtagsItemTitle>
            <HashtagsItemParagraf>1,222 Teams</HashtagsItemParagraf>
          </HashtagsItem>
        </HashtagsList>
      </HashtagsTableContainer>
    </HeshatagsContainer>
  );
};
