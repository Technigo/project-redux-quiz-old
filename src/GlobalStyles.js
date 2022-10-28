import styled, { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyles = createGlobalStyle`

/* background image */
html {
  background: url('./images/blue_lila_bg_mov.jpg') no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
 
`;

//----------------------

export const BgWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  height: 100vh;
  
`;

//----------------------

export const OuterWrapper = styled.div`
  position: relative;
  padding: auto;
  width: 100%; 
  text-align: center;
  padding-top: 3%;
`;

//----------------------

export const ButtonWrapper = styled.div`
  position: relative;
`;

//----------------------

/* Styling for Start and Restart button */

export const ButtonNeon = styled.button`
  position: absolute;
  right: -5%;
  // bottom: 10;
  // margin: 3rem;
  padding: 10px;
  width: 20%;
  height: 10vh;
  background-color: transparent;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  border: none;
  cursor: pointer;

  @media (max-width: 667px) {
  right: 50%;
  bottom: -10%;
  }
`;

//----------------------

/* Styling for Header */

export const NeonHeader = styled.h2`
  color: #fff;
  text-shadow:
      0 0 7px #fff,
      0 0 10px #fff,
      0 0 21px #fff,
      0 0 42px #0fa,
      0 0 82px #0fa,
      0 0 92px #0fa,
      0 0 102px #0fa,
      0 0 151px #0fa;
      
      @media (max-width: 667px) {
        margin-top: 10%;
        font-size: 130%;
      }
 `;