// /////////////// IMPORT //////////////////////// //

import React from 'react';
import styled from 'styled-components';
import { StyledFooterTextH2 } from './StyledTexts';
import television from '../images/television.svg'

// /////////////// STYLING //////////////////////// //

// Styling for the container div

export const Container = styled.div`
background: #4F200D;
height: 50px;
position:absolute;
left:0;
bottom:0;
right:0;
color: #FFD93D;
text-align:center;
`;

const Image = styled.img`
  position: absolute; /* add absolute positioning */
  bottom: 36.5px;
  right: 10px;
  width: 70px;
  height: 70px;
  z-index: 2; /* add a higher z-index value */`

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