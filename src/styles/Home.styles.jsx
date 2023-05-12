import styled from "styled-components";

export const StyledHome = styled.div`
  .hero {
    position: relative;
    .mask {
      background-image: url(/homeBG.jpg);
      background-size: "contain";
      -webkit-mask-image: linear-gradient(to top, transparent 25%, black 75%);
      mask-image: linear-gradient(to top, transparent 25%, black 75%);
      min-height: 70vh;
      z-index: 1000;
    }

    .hero-inner {
      display: flex;
      justify-content: center;
      width: 100%;
      color: black;

      .hero-center {
        position: absolute;
        display: flex;
        flex-direction: column;
        text-align: center;
        width: 500px;
        bottom: 100px;

        h1 {
          color: ${({ theme }) => theme.colors.primary};
          font-size: 30px;
          font-weight: 600;
          margin: 0;
        }

        p {
          font-size: 20px;
        }

        button {
          width: 165px;
          height: 40px;
          font-size: 20px;
          font-weight: 500;
          background-image: linear-gradient(to right, #ed7200 0%, #ffb800 90%);
          border: 1px solid #ed7200;
          border-radius: 0 15px 15px 0;
          color: ${({ theme }) => theme.colors.white};
          cursor: pointer;
        }

        .search {
          display: flex;
          justify-content: center;
        }

        .searchItem {
          display: flex;
          position: absolute;
          flex-direction: column;
          top: 164px;
          background-color: ${({ theme }) => theme.colors.white};
          

          a {
            color: ${({ theme }) => theme.colors.black};
            align-items: center;
            text-decoration: none;
            font-size: 16px;
            height: 25px;
            margin: 12px 0;
            padding: 0 20px;
            border-bottom: 1px solid black;
          }
        }
      }
    }
  }

  .venuesContainer {
    width: 70%;
    margin: auto;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;
