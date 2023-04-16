import React from 'react';
import styled from 'styled-components';
import { StartButton } from './styled_components/buttons';
import videoBackground from '../images/videoBackground.mp4';

const VideoBackground = styled.video`
  position: absolute;
  width: 100%;
  height: 40vh;
  object-fit: cover;

  @media (min-width: 667px) {
    height: 70vh;
  }
`;

const BackgroundContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const LandingContainer = styled.div`
  position: absolute;
  top: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @media (min-width: 667px) {
    top: 70%;
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
