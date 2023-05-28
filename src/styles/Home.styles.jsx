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
        width: 100%;
        bottom: 50px;

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
          z-index: 1001;
          padding: 10px;

          a {
            color: ${({ theme }) => theme.colors.black};
            align-items: center;
            text-decoration: none;
            font-size: 16px;
            height: 100%;
            margin: 12px 0;
            padding: 0 20px;
            border-bottom: 1px solid black;
          }
        }
      }
    }
  }

  .suggested {
    width: 70%;
    margin: auto;

    .countries {
      display: flex;
      justify-content: space-between;
      margin-top: 2rem;
      flex-wrap: wrap;
    }

    .country {
        position: relative;
        padding: 10px;
      img {
        width: 200px;
        height: 100%;
        border-radius: 15px;
      }

      p {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: auto;
        color: black;
        font-size: 22px;
        font-weight: bold;
        background-color: #f6f6f675;
      }
    }
  }
  .venuesContainer {
    width: 70%;
    margin: auto;

    margin-top: 2rem;

    a {
      text-decoration: none;
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;
