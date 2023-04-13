/* eslint-disable linebreak-style */
import React from 'react';
import styled from 'styled-components';
import GitHub from '../images/github-grey.svg'

const FooterWrapper = styled.footer`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 100%;
padding-top: 45px;
padding-bottom: 10px;
`

const FooterH2 = styled.h2`
font-size: 24px;
font-weight:400;
text-align: center;
font-family: 'Just another hand';
color: white;
margin-bottom: 0;
`

const NameWrapper = styled.div`
display: flex;
gap: 2rem;
`

const NameDiv = styled.div`
`

const Name = styled.p`
font-family: 'Roboto';
font-size: 10px;
margin-bottom: 0;
color: #BE4145;
`
const GhLink = styled.img`
width: 30px;
`

const StyledA = styled.a`
text-decoration: none;
color: #BE4145;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

&:hover {
  color: white;
  filter: brightness(100);
}
`

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterH2>Made by Hippos Group 1</FooterH2>
      <NameWrapper>
        <NameDiv>
          <StyledA href="https://github.com/Alexander-Gabor">
            <Name>Alexander</Name>
            <GhLink src={GitHub} alt="github" />
          </StyledA>
        </NameDiv>
        <NameDiv>
          <StyledA href="https://github.com/dannebrob">
            <Name>Daniel</Name>
            <GhLink src={GitHub} alt="github" />
          </StyledA>
        </NameDiv>
        <NameDiv>
          <StyledA href="https://github.com/Cheroptera">
            <Name>Frida</Name>
            <GhLink src={GitHub} alt="github" />
          </StyledA>
        </NameDiv>
        <NameDiv>
          <StyledA href="https://github.com/theresBL">
            <Name>Theres</Name>
            <GhLink src={GitHub} alt="github" />
          </StyledA>
        </NameDiv>
        <NameDiv>
          <StyledA href="https://github.com/code-and-cats">
            <Name>Vio</Name>
            <GhLink src={GitHub} alt="github" />
          </StyledA>
        </NameDiv>
      </NameWrapper>
    </FooterWrapper>
  )
}
