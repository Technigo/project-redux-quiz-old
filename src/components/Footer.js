import React from 'react';
import styled from 'styled-components';
import { Background } from 'styledcomponents/Global';

const FooterText = styled.p`
    text-align: center;
    font-size: 0.9rem;
    letter-spacing: 0.5px;
    color: #AF998E;
    height: 100px;
    width: 100%;
    font-weight: 400;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media (min-width: 1024px) {
      margin: 50px 0 0;
    }

`

const Footer = () => {
  return (
    <Background>
      <FooterText>
          Made by Amanda Wellington, Annika Gadman, Cecilia Frånlund,
          Kristin Larsson, Linus Eriksson
      </FooterText>
    </Background>
  )
}
export default Footer;
