import React from 'react';
import styled from 'styled-components';
import { StartButton } from './styled_components/buttons';
import videoBackground from '../images/videoBackground.mp4';
import Imagebackground from '../images/img-landingpage.jpg'

const PhoneBackground = styled.img`
  object-fit: cover;
  position: absolute;
  height: 40vh;
  width: 100%;

  @media (min-width: 667px) {
    display: none;
  }
`

const VideoBackground = styled.video`
  display: none;

@media (min-width: 667px) {
  display: block;
  position: absolute;
  width: 100%;
  height: 60vh;
  object-fit: cover;
}

@media (min-width: 1024px) {
  height: 50vh;
}
`;

const BackgroundContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const LandingContainer = styled.div`
  position: absolute;
  top: 45%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (min-width: 667px) {
    top: 60%;
  }

  @media (min-width: 1024px) {
    top: 40%;
  }
`;

const LandingHeadline = styled.h1`
  color: black;
  text-align: center;
  width: 70%;
  margin: 0 auto;
  margin-top:10%;

  @media (min-width: 667px) {
    font-size: 3rem;
  }

  @media (min-width: 1024px) {
    font-size: 4rem;
  }
`;

const LandingText = styled.p`
  text-align: center;
  padding:4%;
  width: 70%;
  margin: 0 auto;

  @media (min-width: 667px) {
    font-size: 1.4rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.8rem;
  }
`;

export const LandingPage = ({ onStart }) => {
  return (
    <>
      <BackgroundContainer>
        <PhoneBackground src={Imagebackground} />
        <VideoBackground
          src={videoBackground}
          autoPlay
          muted
          loop />
      </BackgroundContainer>
      <LandingContainer>
        <LandingHeadline>Welcome to the Last Quiz</LandingHeadline>
        <LandingText>Test your knowledge about AI</LandingText>
        <StartButton onClick={onStart}>START QUIZ</StartButton>
      </LandingContainer>
    </>
  );
};
