import React from 'react';
import styled from 'styled-components';
import { StartButton } from './styled_components/buttons';
import videoBackground from '../images/videoBackground.mp4';

const VideoBackground = styled.video`
  position: absolute;
  width: 40vw;
  height: 70vh;
  object-fit: cover;
`;

const BackgroundContainer = styled.div`
  position: relative;
  width: 40vw;
  height: 100vh;
`;

const LandingContainer = styled.div`
  position: absolute;
  top: 75%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40vw;
`;

const LandingHeadline = styled.h1`
  color: black;
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
        <LandingHeadline>Welcome to the last quiz</LandingHeadline>
        <p>Test your knowledge about AI</p>
        <StartButton onClick={onStart}>START QUIZ</StartButton>
      </LandingContainer>
    </>
  );
};

