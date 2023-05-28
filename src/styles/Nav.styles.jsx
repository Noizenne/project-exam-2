import styled from "styled-components";

export const StyledNav = styled.nav`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.primary};
  width: 70%;
  margin: auto;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  position: fixed;
  box-shadow: 0px 8px 10px -10px #1b1b1b;
  z-index: 1001;

  img {
    width: 90%;
    min-width: 120px;
  }

  .links {
    width: 50%;
    display: flex;
    justify-content: space-around;
    align-items: center;

    a {
      font-weight: bold;
      text-decoration: none;
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  .accountLinks {
    display: flex;
    flex-direction: column;
  }
`;
