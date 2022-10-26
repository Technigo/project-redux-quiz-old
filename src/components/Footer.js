import React from 'react';
import styled from 'styled-components';

const FooterText = styled.p`
    text-align: center;
    font-size: 0.9rem;
    letter-spacing: 0.5px;
`

const Footer = () => {
  return (
    <FooterText>
          Made by Amanda Wellington, Annika Gadman, Cecilia Frånlund,
          Kristin Larsson, Linus Eriksson
    </FooterText>
  )
}
export default Footer;
