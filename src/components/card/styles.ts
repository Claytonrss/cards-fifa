import styled from "styled-components";

export const Container = styled.div`
  color: #725b16;
  width: 270px;
  height: 430px;
  background: #ddd;
  clip-path: url("#svgPath");
  position: relative;
  transition: all 0.3s;
  cursor: pointer;
  user-select: none;

  #card-inner {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    #card-top {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 54%;
      overflow: hidden;
      background-color: #e1c072;
      background-image: url("./images/abstract.png");
      background-size: 50%;
      background-repeat: no-repeat;
      background-position: right bottom;

      .photo {
        position: absolute;
        bottom: 0;
        right: 3%;
      }

      .card-info {
        position: relative;
        left: 0;
        bottom: 0;
        width: 100px;
        height: 100%;
        display: flex;
        justify-content: flex-end;
        padding-top: 24px;

        .card-info-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;

          .card-overall {
            font-size: 72px;
            font-family: "Oswald", "sans-serif";
            color: #493d0e;
            font-weight: 500;
          }
          .card-position {
            font-size: 32px;
            font-family: "Oswald", "sans-serif";
            color: #493d0e;
            font-weight: 400;
            margin-top: -20px;
          }

          .card-flag {
            margin-top: 4px;
            padding: 8px 0;
            position: relative;
            &::before {
              content: "";
              position: absolute;
              top: 0;
              width: 30px;
              height: 2px;
              background: #c0af64;
            }
          }
        }
      }
    }
    #card-bottom {
      position: absolute;
      overflow: hidden;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 46%;
      background-color: #fdeaa7;

      h3{
        font-size: 24px;
        margin-top: 8px;
        font-family: "Oswald", "sans-serif";
        text-transform: uppercase;
        text-align: center;
      }
    }
  }
`;
