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
`