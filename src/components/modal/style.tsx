import styled from 'styled-components'

export const ModalBody = styled.div`
  @media (min-width: 1200px) {
    padding: 2rem 0;
    min-width: 800px;
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-around;

    .card-info-top {
      order: 2;
    }
    .card-info-bottom {
      order: 1;
    }

    .chart-container {
      order: 3;
      grid-column: span 2;
      height: 400px;
    }
  }
`

export const CloseButton = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;
  padding: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  border-radius: 8px;
  cursor: pointer;
`
export const ModalContainer = styled.div`
  background-color: #1d1f25;
  border: 4px solid #c4f750;
  background-image: url('./images/background-modal.png');
  background-repeat: no-repeat;
  background-size: cover;
  width: fit-content;
  padding: 1rem;
  position: relative;
  top: 0;
  left: 0;

  .card-info-top {
    display: flex;
    justify-content: space-between;
    gap: 24px;

    img {
      margin-left: -16px;
    }
  }
  .card-info-bottom {
    display: grid;
    grid-template-columns: auto auto 1fr;
    gap: 24px 32px;

    .name {
      grid-column: span 2;
    }
    .team {
      grid-column: span 3;
    }
  }
  .value {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    text-transform: uppercase;
    color: #c4f750;
  }
  .title {
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    text-transform: uppercase;
    color: #ffffff;
  }
`
export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding-top: 5rem;
  margin-bottom: 5rem;
`

export const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  min-width: 300px;
`
