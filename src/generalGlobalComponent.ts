import styled from "styled-components"

export const Stack = styled.div`
    display: flex;
    width: 100%:
` 

export const LiTabs = styled.li`
    color: #937251;
    font-family: 'Montserrat', sans-serif;
    font-weight: bolder;
    list-style-type: none;
    width: 100%;
    padding: 2rem;
    text-align: center;
    transition: all 0.7s;
    &:hover{
        cursor: pointer;
        text-decoration: underline;
    }
    &.Active{
        box-shadow: 0 2px 1px;
        background-color: #fbe0b1;
    }
`

export const NavTab = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    aling-items:center;
    
`