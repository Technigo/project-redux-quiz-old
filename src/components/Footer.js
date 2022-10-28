import React from 'react'
import styled from 'styled-components/macro'

export const Footer = () => {
  return (
    <FooterWrapper>
      <p>
        Technigo 2022
        <span role="img" aria-label="fox emoji">
          &nbsp;🦊&nbsp;
        </span>
      </p>
      <div>
        <p>
          <a href="https://antonellacardozo-react-portfolio.netlify.app/" target="_blank" rel="noreferrer">Antonella</a>{' '}
          <a href="https://davidballester.dev/" target="_blank" rel="noreferrer">David</a>{' '}
          <a href="https://miadahlgren-portfolio.netlify.app/" target="_blank" rel="noreferrer">Mia</a>{' '}
          <a href="https://sarahkneedler-portfolio.netlify.app/" target="_blank" rel="noreferrer">Sarah</a>{' '}
          <a href="https://saralie-bognandi.netlify.app/" target="_blank" rel="noreferrer">Saralie</a>
        </p>
      </div>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: white;
  bottom: 0;
  /* position: absolute */;
  width: auto;
  height: auto;
  margin: 0;

  p{
    margin: 2px;
  }

  a{
    color: white;
    text-align: center;
  }
`