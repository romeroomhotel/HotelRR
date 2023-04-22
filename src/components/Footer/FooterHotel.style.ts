import styled from "styled-components";

export const FTextContainer = styled.div`
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    width: 70%;
    padding: 3rem 0;
    display: flex;
    text-align: center;

    @media(max-width: 600px){
        width: 90%;
        text-align: justify;
    }

    .footerP{

    @media(max-width: 600px){
        font-size: 0.8rem;
    }
    }
`