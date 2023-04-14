import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterStyle>
      <CreditStyle href="https://www.freepik.com/free-vector/blue-background-with-light-structure_1050270.htm#query=game%20show%20background&position=12&from_view=keyword&track=ais">
            Background Image by starline on Freepik
      </CreditStyle>
    </FooterStyle>
  )
};

export default Footer;

const FooterStyle = styled.footer`
    background-color: black;
    opacity: 0.7;
    width: 100%;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    margin-top: 5vh;
`;

const CreditStyle = styled.a`
    text-decoration: none;
    color: white;
    font-size: 12px;
`;