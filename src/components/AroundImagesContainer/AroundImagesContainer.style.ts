import styled from "styled-components";

export const AroundImagesDiv = styled.div`
    width: 100%;
    gap: 2rem;
    justify-content: space-between;
    display: flex;

    @media(max-width: 600px){
        flex-direction: column;
        align-items: center;
    }
`
export const AroundImagesText = styled.div`
    width: 70%; 
    height: 24.417rem;
    text-align: left;

    @media(max-width: 600px){
        width: 100%;
        text-align: justify;
        height: unset;
    }
`