import styled from 'styled-components';

export const PageMap = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;

  aside {
    width: 440px;
    /* background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%); */
    padding: 80px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  h2 {
    font-size: 40px;
    font-weight: 800;
    line-height: 42px;
    margin-top: 64px;
    color: ${({ theme }) => theme.primaryTextColor};
  }

  p {
    line-height: 28px;
    margin-top: 24px;
    color: ${({ theme }) => theme.secondaryTextColor};
  }

  footer {
    display: flex;
    flex-direction: column;
    line-height: 24px;
    color: ${({ theme }) => theme.primaryTextColor};
  }

  strong {
    font-weight: 800;
    color: ${({ theme }) => theme.primaryTextColor};
  }

  h2,
  p,
  footer,
  strong {
    transition: all 0.25s linear;
  }

  .leaflet-container {
    z-index: 5;
  }

  .create-orphanage {
    position: absolute;
    right: 40px;
    bottom: 40px;
    width: 64px;
    height: 64px;
    background-color: #c194e3;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 200ms;
    z-index: 10;
  }

  .create-orphanage:hover {
    background-color: #87689f;
  }

  .map-popup .leaflet-popup-content-wrapper {
    background: rgba(255, 255, 255, 0.8);
    border-radius: 20px;
  }

  .map-popup .leaflet-popup-content {
    color: #87689f;
    font-size: 20px;
    font-weight: bold;
    margin: 8px 12px;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .map-popup .leaflet-popup-content a {
    width: 40px;
    height: 40px;
    background: #c194e3;
    box-shadow: 17.2868px 27.6589px 41.4884px rgba(23, 142, 166, 0.16);
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .map-popup .leaflet-popup-tip-container {
    display: none;
  }
`;
