import styled from "styled-components";

export const StyledProfile = styled.div`
  padding-top: 8rem;
  width: 70%;
  margin: auto;
  .container {
    display: flex;
    justify-content: center;

    .profileInfo {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.white};
      height: 380px;
      border-radius: 15px;

      .profileImg {
        width: 140px;
        border: 1px solid ${({ theme }) => theme.colors.white};
        border-radius: 50%;
        margin: 10px;
      }
    }
    .bookings {
      .add {
        display: flex;
        justify-content: space-between;
      }
      .title {
        display: flex;
        margin-left: 30px;

        .icon {
          color: ${({ theme }) => theme.colors.primary};
          background-color: #0095ff47;
          border-radius: 5px;
          margin: 5px;
          padding: 5px;
        }

        h3 {
          margin: 0;
          font-size: 25px;
          align-self: center;
        }

        .addVenue {
          p {
            font-weight: 600;
          }
        }
      }
    }
    .booking {
      img {
        width: 140px;
        height: 110px;
        border-radius: 15px;
        margin-right: 10px;
      }
      ul {
        display: flex;
        padding: 0;
        flex-wrap: wrap;
        justify-content: space-around;

        li {
          display: flex;
          list-style: none;
          margin: 10px;

          a {
            text-decoration: none;
            color: black;
            display: flex;
            font-weight: 600;

            .info {
              .options {
                display: flex;
                justify-content: space-between;
                .icon {
                  color: ${({ theme }) => theme.colors.primary};
                }
              }

              .dates {
                display: flex;
                p {
                  font-size: 14px;
                  margin: 5px;
                }
              }
            }
          }
        }
      }
    }
  }
`;
