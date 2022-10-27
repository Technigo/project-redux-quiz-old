import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import background from 'assets/welcome-page.jpg'
import { InnerWrapper, OuterWrapper } from 'styling/Wrappers'

export const Welcome = () => {
  return (
    <OuterWrapper>
      <WelcomeWrapper>
        <BackgroundWrapper>
          <TitleButtonWrapper>
            <WelcomeTitle>Quizflix</WelcomeTitle>
            <Link to="/quizflix">
              <PlayButton type="button">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="Hawkins-Icon Hawkins-Icon-Standard">
                  <path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" fill="currentColor" />
                </svg>
              </PlayButton>
            </Link>
          </TitleButtonWrapper>
        </BackgroundWrapper>
      </WelcomeWrapper>
    </OuterWrapper>
  )
}

const WelcomeWrapper = styled(InnerWrapper)`
  width: 100%;
  height: 100vh;
`
const PlayButton = styled.button`
  padding: 1rem;
  border-radius: 4px;
  cursor: pointer;  
  border: none;
  outline: 0;
  display: inline-block;
  padding: 50px 75px;
  color: orange;
  background-color: transparent;
  text-align: center;
  cursor: pointer;
`

const BackgroundWrapper = styled.div`
  background-image: url(${background});
  width: 100%;
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`

const TitleButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15vh;
  height: 60vh;
  justify-content: center;

  @media only screen and (min-width: 800px) {
    gap: 10vh;
    height: 60vh;
  }
`
const WelcomeTitle = styled.h1`
  color: white;
  font-family: 'VintageRoundPersonalUse';
  font-size: 50px
`
