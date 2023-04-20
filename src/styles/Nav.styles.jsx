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
    box-shadow: 0px 8px 10px -10px #1b1b1b;  
    z-index: 1001;
    
    img {
        width: 240px;
        color: white;
    }

    .search {
        display: flex;
        flex-direction: column;
        margin: auto;
        max-width: 260px;
    }

    .searchItem {
        position: fixed;
        display: flex;
        flex-direction: column;
        top: 72px;
        background-color: ${({theme}) => theme.colors.white};
        border-radius: 0 0 15px 15px;
        max-width: 260px;
        a {
            
            color: ${({theme}) => theme.colors.black};
            text-decoration: none;
            font-size: 16px;
            height: 25px;
            margin: 12px 0;
            padding: 0 20px;
            
        }
        
    }
    
`