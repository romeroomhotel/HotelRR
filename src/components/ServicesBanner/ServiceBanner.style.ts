import styled from "styled-components";

export const ServiceBannerContainer = styled.div`
    flex-direction: column;
    background-color: #f7f7f7;
    display:flex;
    flex-direction: column;
`

export const Serviceh2 = styled.h2`
    text-align: center;
    margin: 3rem auto 0; 
    font-size: 2.5rem;
    text-shadow: #fbe0b1 2px 1px 2px;
    color: #937251;

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
padding: 5em 0 15rem;
font-family: Montserrat , sans-serif;
display: flex;
align-items: center;

@media(max-width:882px){
    flex-direction: column;
    padding: 0;
}

@media(max-width:600px){
    
}

`