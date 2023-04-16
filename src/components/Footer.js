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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding-top: 45px;
    padding-bottom: 10px;
  `;

const FooterH2 = styled.h2`
    font-size: 24px;
    font-weight: 400;
    text-align: center;
    font-family: 'Roboto';
    color: white;
    margin-bottom: 0;
  `;

const NameWrapper = styled.div`
    display: flex;
    gap: 2rem;
  `;

const Name = styled.p`
    font-family: 'Roboto';
    font-size: 15px;
    margin-bottom: 0;
    color: #be4145;
  `;
const GhLink = styled.img`
    width: 30px;
  `;

const StyledA = styled.a`
    text-shadow: #FC0 1px 0 10px;
    text-decoration-line: none;
    color: #be4145;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &:hover {
      color: white;
      filter: brightness(150);
    }
  `;