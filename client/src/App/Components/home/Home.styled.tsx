import React from "react";
import styled from 'styled-components'
export const HomeContainer = styled.div`
border: 1px solid gray;
grid-area: 1 / 2 / 5 / 4;
`
export const HomePageP = styled.p`
overflow-wrap: anywhere;`
export const HomeHeader = styled.div`
padding: 11px;
    padding-bottom: 25px;
`
export const HomeTitle = styled.h2`
color: #FFF;
font-feature-settings: 'clig' off, 'liga' off;
font-family: Manrope;
font-size: 30px;
font-style: normal;
font-weight: 400;
line-height: 38px; /* 126.667% */
letter-spacing: -1.35px;
`

export const HomeForm = styled.form`
display: flex;
    justify-content: center;
    gap:5px;
    margin-top: 13px;
`
export const SeatchFriendTitle = styled.h3`
text-align: center;
    margin-top: 22px;
`
export const HomeInput = styled.input`
height: 17px;
    width: 30%;
    border-radius: 17px;
    color: white;
    background-color: #848080;
`

export const HomeBtn = styled.button`
display: flex;
flex-direction: column;
align-items: center;
gap: 8px;
border-radius: 4px;
background: #FFB800;
box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.20);
`

export const SeachContainer = styled.div`
height: 80%;
`
export const SeachList = styled.ul`
height: 100%;
overflow: auto;
margin-top: 22px;
padding: 22px 28px;
box-sizing: border-box;

&::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #424242;
}
&::-webkit-scrollbar {
  width: 12px;
  background-color: #black;
}
&::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #bfbfbf;
}
`
export const AbauthUserContainer = styled.div`
margin-left: 21px;
padding-top: 12px;
display: flex;
flex-direction: column;
gap: 5px;

`
export const UserAddAndMessage = styled.div`
margin-left: auto;
display: flex;
flex-direction: column;
gap: 12px;
padding: 25px;
`

export const SeachItem = styled.li`
height:120px;
box-sizing: border-box;
display: flex;
border-top: 1px solid gray;
border-bottom: 1px solid gray;
`
export const UserAddandMessageBtn = styled.button`
background: inherit;
color: white;
text-decoration: underline;
`
export const SeachImg = styled.img`
padding: 10px;
border-radius: 50%;
box-sizing: border-box;
width: 110px;
`