import styled from "styled-components";

export const ServicesContainer = styled.div`
    width: 100%;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-around;
    display:flex;
    padding: 2rem;

    @media(max-width: 1158px){
        justify-content: space-between;
        gap: 1rem;
        padding: 0 1rem;
    }
    @media(max-width: 600px){
    }

    .H4  {
        padding-bottom: 1rem;
        text-decoration: underline;
    }

`