import styled from "styled-components";

export const StyledNav = styled.nav`
    color: ${({theme}) => theme.colors.white};
    width: 70%;
    margin: auto;
    padding-top: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 1001;
    
    img {
        width: 240px;
    }

    
`