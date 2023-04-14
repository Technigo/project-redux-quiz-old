// /////////////// IMPORT //////////////////////// //

import React from 'react';
import styled from 'styled-components';
import { StyledFooterTextH2 } from './StyledTexts';
import television from '../images/television.svg'

// /////////////// STYLING //////////////////////// //

// Styling for the container div

export const Container = styled.div`
background: #4F200D;
height: 40px;
position: fixed;
left:0;
bottom:0;
right:0;
color: #FFD93D;
text-align:center;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;

const Image = styled.img`
  position: fixed; /* add absolute positioning */
  bottom: 23px;
  right: 10px;
  width: 70px;
  height: 70px;
  z-index: 2; /* add a higher z-index value */

  @media (min-width: 411px){
    width: 100px;
    height: 100px;
    bottom: 15px;
  }
  
  @media (min-width: 668px) {
  width: 200px;
  height: 200px;
  bottom: -10px;
}

@media (min-width: 1024px) {
  width: 300px;
  height: 300px;
  bottom: -30px;
  
}`

// /////////////// COMPONENT //////////////////////// //

export const Footer = () => {
  return (
    <div>
      <Image src={television} alt="television" />
      <Container>
        <StyledFooterTextH2>ANNIKA ⦿ AJMAL ⦿ OSCAR ⦿ ANDREAS</StyledFooterTextH2>
      </Container>
    </div>
  )
}