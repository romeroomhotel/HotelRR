import { Link } from "react-router-dom";
import styled from "styled-components";

export const BookingButton = styled.div`
    background-color:#937251;
    padding: 1rem 2rem;
    border-radius: 10px;

`

export const BookingLink = styled(Link)`
    text-transform: uppercase;
    text-decoration: none;
    color: #FFF;
`

export const PrenotationBannerContainer = styled.div`
    flex-direction: column;
    align-items: center;
    padding: 4rem;
    font-family: Montserrat , sans-serif;
    text-align: center;

    @media(max-width: 882px){
        padding: 2rem 2rem;
        text-align: center
    }
`