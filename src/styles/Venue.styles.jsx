import styled from "styled-components";

export const StyledVenue = styled.div`
  padding-top: 8rem;
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: auto;

  h2 {
    color: black;
    font-size: 25px;
  }

  p {
    font-size: 20px;
  }
  .container {
    text-align: center;

    .info {
      display: flex;
      justify-content: space-around;
      max-width: 50%;
      margin: auto;
      margin-bottom: 10px;

      .location {
        display: flex;

        .locationIcon {
          margin-right: 5px;
          color: ${({ theme }) => theme.colors.primary};
          background-color: #0095ff47;
          border-radius: 5px;
        }
      }

      .star {
        display: flex;

        .starIcon {
          color: gold;
        }
      }
    }
    .carousel {
      div {
        margin: auto;
      }
    }

    .desc {
      text-align: start;
    }

    .facilities {
      text-align: start;

      .icons {
        color: ${({ theme }) => theme.colors.primary};
        background-color: #0095ff47;
        width: 40px;
        height: 40px;
        border-radius: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
