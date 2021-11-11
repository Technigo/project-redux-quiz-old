import React from 'react'
import styled from 'styled-components'

// import { quiz } from '../reducers/quiz'
// import Header from 'components/Header'
import { SummaryBackground } from './Summary'

const StyledAnchorTag = styled.a`
  text-decoration: none;
  color: #000;
  padding: 4px;
  &:hover {
    text-decoration: underline;
  }
`

const About = () => {
  return (
    <SummaryBackground>
      <section className='main-container'>
        <h1>Creators of quiz:</h1>
        <StyledAnchorTag
          href='https://www.linkedin.com/in/sarah-mottram-808142222/'
          target='_blank'
        >
          Sarah Mottram
        </StyledAnchorTag>
        <StyledAnchorTag
          href='https://www.linkedin.com/in/jakoblindstroem/'
          target='_blank'
        >
          Jakob Lindström
        </StyledAnchorTag>
        <StyledAnchorTag
          href='https://www.linkedin.com/in/lovisa-carling/'
          target='_blank'
        >
          Lovisa Carling
        </StyledAnchorTag>
        <StyledAnchorTag
          href='https://www.linkedin.com/in/ruruahn/'
          target='_blank'
        >
          Haru Ahn
        </StyledAnchorTag>
        <StyledAnchorTag
          href='https://www.linkedin.com/in/johanna-mannest%C3%A5l-johansson/'
          target='_blank'
        >
          Johanna Mannestål
        </StyledAnchorTag>
        <StyledAnchorTag
          href='https://www.linkedin.com/in/maria-bergman-95994517a/'
          target='_blank'
        >
          Maria Bergman
        </StyledAnchorTag>
      </section>
    </SummaryBackground>
  )
}

export default About
