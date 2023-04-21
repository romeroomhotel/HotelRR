import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavBar = styled.div`

    justify-content: center;
    align-items: center;
    background-color: #937251; 
    padding: 0.5rem 0; 
    position: fixed; 
    z-index: 10;
    width: 100%;
    display: flex;

    @media (max-width: 882px){

        justify-content: space-between;

    }

    .logo{
        justify-content: center;
        align-items: center;
        gap: 1rem;
        padding-right: 1rem;
        @media (max-width: 882px){
            padding-left: 1rem;
        }
    }

    .burgerMenu{
        display:none;

        @media (max-width: 882px){
            display: flex;
            padding-right: 1rem
        }

    }
`

export const NavList = styled.ul`
    text-decoration: none;
    display: flex;
    justify-content: center;
    gap: 1rem;
    @media (max-width: 882px){
        flex-direction: column; 
        display:none;
    }

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