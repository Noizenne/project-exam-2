import styled from "styled-components";

export const StyledLoader = styled.div`
  text-align: center;
  margin: auto;
  margin-bottom: 40px;
  width: 15px;
  aspect-ratio: 1;
  border-radius: 50%;
  animation: d5 1s infinite linear alternate;
  @keyframes d5 {
    0% {
      box-shadow: 20px 0 #4c00ff, -20px 0 #0002;
      background: #4c00ff;
    }
    33% {
      box-shadow: 20px 0 #4c00ff, -20px 0 #0002;
      background: #0002;
    }
    66% {
      box-shadow: 20px 0 #0002, -20px 0 #4c00ff;
      background: #0002;
    }
    100% {
      box-shadow: 20px 0 #0002, -20px 0 #4c00ff;
      background: #4c00ff;
    }
  }
`;
