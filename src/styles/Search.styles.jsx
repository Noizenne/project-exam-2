import styled from "styled-components";

export const StyledSearch = styled.div`
    
    .searchBar {
        display: flex;
        align-items: center;
        background-color: ${({theme}) => theme.colors.white};
        border: none;
        border-radius: 15px;

        input {
            background-color: ${({theme}) => theme.colors.white};
            width: 260px;
            height: 40px;
            border: none;
            border-radius: 15px;
            font-size: 16px;

            :focus {
                outline: none;
            }
        }
    }
`