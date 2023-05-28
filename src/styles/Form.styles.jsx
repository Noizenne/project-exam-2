import styled from "styled-components";

export const StyledForm = styled.div`
  h1 {
    font-size: 25px;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.blue};
    border-radius: 15px 15px 0 0;
  }
  form {
    display: flex;
    flex-direction: column;

    label {
      margin-left: 2.5rem;
      padding: 5px;
      font-weight: 600;
    }
    input {
      margin: auto;
      width: 300px;
      height: 30px;
      border-radius: 15px;
      border: 1px solid;
      border-color: ${({ theme }) => theme.colors.primary};
    }

    textarea {
      width: 80%;
      padding: 5px;
      margin: auto;
      border-radius: 15px;
      border: 1px solid;
      border-color: ${({ theme }) => theme.colors.primary};
    }

    .smaller {
      display: flex;
      margin: auto;
      width: 80%;
      div {
        display: flex;
        flex-direction: column;
        label {
          margin: 0;
        }
      }
      input {
        width: 90%;
      }
    }
    .options {
      display: flex;

      input {
        width: 20px;
      }
    }

    .facility {
      display: flex;

      label {
        width: 100px;
        font-weight: 100;
      }
      input {
        width: 20px;
        margin: auto;
      }
    }
    .btn {
      display: flex;
      justify-content: center;
      padding: 10px;

      button {
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.white};
        width: 105px;
        height: 40px;
        border: none;
        border-radius: 15px;
        cursor: pointer;
      }
    }

    p {
      margin: auto;
      color: orangered;
      font-size: 14px;
    }
  }
`;
