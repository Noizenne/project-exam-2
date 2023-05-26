import styled from "styled-components";

export const StyledVenueCard = styled.li`
    list-style: none;
    width: 230px;
    height: 250px;
    padding: 10px;

    a {
        text-decoration: none;
    }
    img {
        width: 230px;
        height: 180px;
        border-radius: 15px;
    }

    .options {
        display: flex;
        justify-content: space-between;
        align-items: center;
        h3 {
        color: black;
    }

    .icon {
        color: ${({theme}) => theme.colors.primary};
    }
    }
    


`