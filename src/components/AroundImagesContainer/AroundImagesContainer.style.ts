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
export const ImgAround = styled.div`
    height: 400px;
@media(max-width: 600px){
        height: 250px;
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