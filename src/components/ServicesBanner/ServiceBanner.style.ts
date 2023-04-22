import styled from "styled-components";

export const ServiceBannerContainer = styled.div`
    flex-direction: column;
    background-color: #f7f7f7;
    display:flex;
    padding: 1rem 2rem;
`

export const Serviceh2 = styled.h2`
    text-align: center;
    font-size: 2.5rem;
    text-shadow: #fbe0b1 2px 1px 2px;
    color: #937251;
    padding: 2rem 0;

    @media(max-width:882px){
        font-size: 2rem;
        margin-bottom: 2rem
    }

    @media(max-width:600px){
        font-size: 2rem;
    }
`

export const ServiceCardContainer = styled.div`
justify-content:center;
gap: 8rem; 
padding: 5rem 0 5rem;
font-family: Montserrat , sans-serif;
display: flex;
align-items: center;

@media(max-width:882px){
    padding: 0 1rem;
    gap: 0.5rem;
}

@media(max-width:600px){
    flex-direction: column;
    padding: 0;
}   

`