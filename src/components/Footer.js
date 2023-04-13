import React from 'react';
import styled from 'styled-components';
import { StyledFooterTextH2 } from './StyledTexts';

export const Container = styled.div`
background: #4F200D;
height: 70px;
position:absolute;
left:0;
bottom:0;
right:0;
color: #FFD93D;
text-align:center;
`;

export const Footer = () => {
  return (
    <div>
      <Container>
        <StyledFooterTextH2>ANNIKA ⦿ AJMAL ⦿ OSCAR ⦿ ANDREAS</StyledFooterTextH2>
      </Container>
    </div>
  )
}