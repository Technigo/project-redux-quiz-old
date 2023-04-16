import React from 'react';
import styled from 'styled-components';
import GitHubLogo from '../assets/github-logo.svg';

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterH2>Made by Elephants Group 2</FooterH2>
      <NameWrapper>
        <div>
          <StyledA href="https://github.com/YlvaKarlsson">
            <Name>Ylva</Name>
            <GhLink src={GitHubLogo} alt="github" />
          </StyledA>
        </div>
        <div>
          <StyledA href="https://github.com/smirrebinx">
            <Name>Michelle</Name>
            <GhLink src={GitHubLogo} alt="github" />
          </StyledA>
        </div>
        <div>
          <StyledA href="https://github.com/SandraMadeleine">
            <Name>Sandra</Name>
            <GhLink src={GitHubLogo} alt="github" />
          </StyledA>
        </div>
        <div>
          <StyledA href="https://github.com/edv-rd">
            <Name>Edvard</Name>
            <GhLink src={GitHubLogo} alt="github" />
          </StyledA>
        </div>
        <div>
          <StyledA href="https://github.com/cecavi">
            <Name>Cecilia</Name>
            <GhLink src={GitHubLogo} alt="github" />
          </StyledA>
        </div>
      </NameWrapper>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
    background:rgba(1, 25, 16, 0.8); 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-bottom: 1rem;
  `;

const FooterH2 = styled.h2`
    font-size: 30px;
    font-weight: 400;
    text-align: center;
    font-family: var(--second-headings-font-family);
    color: white;
    margin-bottom: 0;
  `;

const NameWrapper = styled.div`
    display: flex;
    gap: 2rem;
  `;

const Name = styled.p`
    font-family: var(--second-headings-font-family);
    font-size: 20px;
    margin-bottom: 0;
    color: black;
  `;
const GhLink = styled.img`
    width: 30px;
  `;

const StyledA = styled.a`
    text-decoration-line: none;
    color: #be4145;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &:hover {
      text-shadow: 0 0 10px #fed766, 
             0 0 20px #fed766, 
             0 0 30px #fed766, 
             0 0 40px #fed766, 
             0 0 50px #fed766, 
             0 0 70px rgba(0,0,0,0.4);
    }
  `;