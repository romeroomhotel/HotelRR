import styled from "styled-components";

export const ServicesContainer = styled.div`
    width: 100%;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-around;
    display:flex;

    @media(max-width: 882px){
        justify-content: space-between;
        gap: 1rem;
        padding: 0 1rem;
    }
    @media(max-width: 600px){
        
    }

`