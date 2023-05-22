import styled from "styled-components";

export const StyledRegister = styled.div`

    h1 {
        font-size: 25px;
        text-align: center;
        background-color: ${({theme}) => theme.colors.blue};
        border-radius: 15px 15px 0 0;
    }
    form {
        display: flex;
        flex-direction: column;

        label {
            margin-left: 2.5rem;
            padding: 5px;
        }
        input {
            margin: auto;
            width: 300px;
            height: 30px;
            border-radius: 15px;
            border: 1px solid;
            border-color: ${({theme}) => theme.colors.primary};
        }

        .options {
            display: flex;

            input {
                width: 20px;
            }
        }

        .btn {
            display: flex;
            justify-content: center;
            padding: 10px;

            button {
            background-color: ${({theme}) => theme.colors.primary};
            color: ${({theme}) => theme.colors.white};
            width: 105px;
            height: 40px;
            border: none;
            border-radius: 15px;
            }
        }
        
    }

    
`