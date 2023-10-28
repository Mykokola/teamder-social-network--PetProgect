import styled from 'styled-components'
export const ChatConitaner = styled.div`
border: 1px solid gray;
    grid-area: 1/2/5/4;
`
export const ChatTitle = styled.h2`

color: #FFF;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Manrope;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 38px;
    letter-spacing: -1.35px;
    padding: 13px;
    border: 1px solid gray;
`
export const MessageConiter = styled.div``
export const UserName = styled.h3``
export const Message = styled.p`
word-break: break-all;
white-space: normal;
`
export const ChatIntarface = styled.div`
    margin-top: 33px;
    margin-right: 15px;
    margin-left: 15px;
    height: 514px;
    background: #6e6c62b3;
    border-radius: 2%;
    height: 514px;
overflow: auto;
margin-top: 22px;
padding: 22px 28px;
box-sizing: border-box;
scroll-behavior: smooth;
&::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  background-color: #eed289;
}
&::-webkit-scrollbar {
  width: 12px;
  background-color: #black;
}
&::-webkit-scrollbar-thumb {
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #FFB800;
}
`
export const SendMassageContainer = styled.div`
gap: 22px;
    margin-top: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const SendMassageInput = styled.input`
color: white;
    border-radius: 11px;
height: 31px;
width: 56%;
background: #7c7979;
`
export const SendMassageBtn = styled.button`
    display: flex;
    padding: 4px 12px;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    border-radius: 4px;
    background: #FFB800;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.20);
    color: #000;
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 171.429% */
    letter-spacing: 0.4px;
    text-transform: uppercase;
`
