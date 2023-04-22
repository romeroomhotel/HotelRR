import styled from "styled-components";

export const WWAcontainer = styled.div`
    flex-direction: column;
    align-items: center;
    text-align: center;
    height: 65vh;
    justify-content: 'center';
    color: #937251;
    font-family: "Montserrat , sans-serif";
    background-color: #FFF;
    display:flex;     

    @media(width:882px){
        height: 60vh;
    }

    @media(width:600px){
        height: 30vh;
    }

    .WWAh2{
        border-bottom: 5px solid #937251; 
        font-size: 2.5rem;
        text-shadow: #fbe0b1 2px 1px 2px;
        margin: 2rem 1rem;
        @media(max-width: 882px){
            font-size: 2rem;
        }
        @media(max-width:600){
            font-size: 1.5rem;
        }
    }

    .WWAp{
        font-size: 1.5rem;
        background-color: RGBA(251,224,177,0.9);
        padding: 2rem 2rem 3rem;
        color: #000;
        @media(max-width: 882px){
            font-size: 1.3rem;
        }
        @media(max-width: 600px){
            font-size: 1rem;
        }
    }
`