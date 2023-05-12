import styled from "styled-components";

export const StyledSearch = styled.div`
    
    .searchBar {
        display: flex;
        align-items: center;
        background-color: ${({theme}) => theme.colors.white};
        border: none;
        border-radius: 15px 0 0 15px;
        max-width: 260px;

        input {
            background-color: ${({theme}) => theme.colors.white};
            height: 40px;
            border: none;
            border-radius: 15px;
            font-size: 16px;
            width: 260px;
            margin-left: 5px;
            :focus {
                outline: none;
            }
        }
    }
`