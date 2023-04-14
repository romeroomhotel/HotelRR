import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavList = styled.ul`
    text-decoration: none;
    display: flex;
    justify-content: center;
    gap: 1rem;
`
export const HLink = styled(NavLink)`
    font-weight: bold;
    text-decoration: none;
    text-transform: uppercase;
    color: #fff;
    font-family: 'Prompt';
    box-shadow: inset 0 0 0 0 #fbe0b1;
    margin: 0 -.25rem;
    padding: 0 .25rem;
    transition: color .3s ease-in-out, box-shadow .3s ease-in-out;
    &:hover{
        box-shadow: inset 100px 0 0 0 #fbe0b1;
        color: #937251;
    }
    &.hotelName:hover{

    }
    &.active{
        box-shadow: inset 100px 0 0 0 #fbe0b1;
        color: #937251;
    }
`