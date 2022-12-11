import styled from 'styled-components'

export const OverallContainer = styled.div`
  width: 70px;
  height: 70px;
  background: rgba(240, 114, 182, 0.2);
  transform: rotate(45deg);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 16px;
  right: 16px;

  & div {
    width: 50px;
    height: 50px;
    background: linear-gradient(90deg, #fc5c7d 0%, #6a82fb 100%);
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      font-size: 2rem;
      line-height: 100%;
      color: #fff;
      transform: rotate(-45deg);
    }
  }
`
