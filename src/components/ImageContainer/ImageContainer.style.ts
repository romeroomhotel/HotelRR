import styled from "styled-components";

export const ImgContainer = styled.div`
    font-family: Montserrat sans-serif;
    text-transform: uppercase;
    display: flex;
    flex-direction: column;
    position:relative;
    height: 100vh;
    @media (max-width: 779px){
        height: 80vh
    }
    @media (max-width: 600px){
        width: 100%;
        height: 60vh;
    }
`

export const ImgOpacity = styled.div`
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    z-index: 1; 
    display: flex; 
    @media (max-width: 779px){
        height: 80vh
    }
    @media (max-width: 600px){
        width: 100%;
        height: 60vh;
    }

    .smallTitle{
        text-align: center;
        margin: 0; 
        color: #fbe0b1;
        text-shadow: #937251 2px 1px 2px;
        font-size: 1.5rem;
        font-weight: lighter;
        letter-spacing: 0.2rem;

        @media (max-width: 779px){
            font-size: 1rem
        }
    }

    .bigTitle{
        text-align: center;
         margin-top: 0;
        color: #fbe0b1;
        text-shadow: #937251 2px 1px 2px;
        font-size: 4rem;
        letter-spacing: 0.3rem;

        @media (max-width: 779px){
            font-size: 2rem;
        }
    }

`