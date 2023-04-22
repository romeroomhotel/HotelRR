import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavBar = styled.div`

    justify-content: center;
    align-items: center;
    background-color: #937251;  
    position: fixed; 
    z-index: 2;
    display: flex;
    padding: 1rem 2rem;
    width: 100%;

    .logo{
        justify-content: center;
        align-items: center;
        gap: 1rem;
        padding-right: 1rem;
        @media (max-width: 882px){
            font-size: 0.8rem;
        }
        @media (max-width: 600px){
            font-size: 0.5rem;
        }
    }

    .burgerMenu{
        display:none;

        @media (max-width: 882px){
            display: flex;
        }
        @media (max-width: 600px){

        }

    }

    @media (max-width: 882px){

    justify-content: space-between;

    }
    @media (max-width: 600px){

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