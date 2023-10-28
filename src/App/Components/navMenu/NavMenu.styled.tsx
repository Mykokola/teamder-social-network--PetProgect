import styled from "styled-components";
import { NavLink } from "react-router-dom";
export const NavMenuLinkNavigate = styled(NavLink)`
display:flex;
gap:5px;

`
export const LogoNav = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 9px;
`;
export const NavMenuList = styled.ul`
margin-top: 60px;
`
export const NavMenuItem = styled.li`
color: #F2F2F2;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.3px;
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    align-items:center;
    gap:14px;
    margin-top:30px;
    &:first-child{
        margin:0;
    }
`
export const NavMenuContainer = styled.div`
height: 100%;
position: relative;
grid-area: 1 / 1 / 5 / 2;
`
export const LogOutBtn = styled.button`
position: absolute;
bottom: 59px;

    display: flex;
    width: 195px;
    gap: 12px;
    height: 36px;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background: #FFB800;
    box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.20);
    color: #000;
    font-family: Manrope;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.4px;
    text-transform: uppercase;
`