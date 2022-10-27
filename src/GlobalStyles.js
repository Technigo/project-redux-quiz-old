/* Vi behöver styling på answer buttons, font styles, root font size, färger */
import styled, { createGlobalStyle } from 'styled-components/macro';

export const GlobalStyles = createGlobalStyle`
 
// Project fonts
`;

// -------------------------

export const BgWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  height: 100vh;
  background-image: url(./images/blue_lila_bg-web.jpg);  
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  
`;

export const OuterWrapper = styled.div`
  position: relative;
  padding: auto;
  width: 100%; 
  text-align: center;
  padding-top: 10%;
`;

// export const MovieImg = styled.div`
//   height: 100%;
//   width: auto;
//   background-image: url(./images/blue_lila_bg_mov.jpg);
//   background-repeat: no-repeat;
//   background-position: center center;

// `;

export const Button = styled.button`
  position: absolute;  
  top: 47%;
  left: 50%; 
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  border: none;
  cursor: pointer;
  /* text-align: center; */
  /* box-shadow: 0 0 0 rgba(255, 255, 255, 0.9);
  animation: pulse 2s infinite; */

`;