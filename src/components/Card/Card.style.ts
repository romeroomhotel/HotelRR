import styled from "styled-components";

export const CardContainer = styled.div`
    width: 23.75rem;
    height: 31.25rem;
    background-color: #937251;
    position: relative;

    @media(max-width:600px){
        width:100%;
    }
`

export const CardImg = styled.div`
    height: 16.25rem;
    width: 100%;
    z-index: 1;
    position: absolute;
`

export const CardText = styled.div`
    flex-direction: column;
    display: flex;
    color: #FFF; 
    z-index: 1;
    position: absolute; 
    top: 55%;
    justify-content: flex-start; 
    align-items: center;
    padding: 0 1.5rem;
    @media(max-width:600px){
        top:60%;
        text-align: justify
    }
`