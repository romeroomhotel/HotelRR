import styled from "styled-components";

export const OurRoomsTitle = styled.h3`
    text-align: center;
    padding-bottom: 3rem;

    @media(max-width: 882px){
        font-size: 1rem
    }

    @media(max-width: 600px){
        font-size: 0.8rem
    }
`

export const OurRoomsContainer = styled.div`
    flex-direction: column;
    padding: 3rem 0 8rem 0;
    width: 100%;
    background-color: #fbe0b1;
    display: flex;
    
    @media(max-width: 882px){

    }

    @media(max-width: 600px){
        background-color: unset;
    }
`

export const ShowRoomImg = styled.div`
    width: 25rem;
    height: 22rem;

    @media(max-width: 882px){

    }

    @media(max-width: 600px){
        height: 18rem;
        width: 20rem;
    }
`