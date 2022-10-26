import React from 'react';
import styled from 'styled-components';

const FooterText = styled.p`
    text-align: center;
    font-size: 1rem;
    font-weight: 700;
    letter-spacing: 0.5px;
`

const Footer = () => {
  return (
    <footer>
      <FooterText>This is the footer</FooterText>
    </footer>
  )
}
export default Footer;