import styled from "styled-components";

export const StyledBook = styled.div`
  display: flex;
  justify-content: space-around;
  border: 1px solid black;
  border-radius: 15px;
  margin: 10px;
  padding: 10px;

  h3 {
    font-size: 20px;
    font-weight: 100;
  }
  .bookingInfo {
    display: flex;
    flex-direction: column;
    div {
      display: flex;
    }
    .guests {
      display: flex;
      justify-content: space-between;
      .guestsBtn {
        display: flex;
        align-items: center;

        button {
          margin: 5px;
        }
      }
    }
  }

  .btn {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    width: 105px;
    height: 40px;
    border: none;
    border-radius: 15px;
  }
  .message {
    margin-top: 2px;
    font-size: 12px;
  }
`;
