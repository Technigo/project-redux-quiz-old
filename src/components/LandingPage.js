import React from 'react';
import styled from 'styled-components';
import { StartButton } from './styled_components/buttons';
import videoBackground from '../images/videoBackground.mp4';

const VideoBackground = styled.video`
  position: absolute;
  width: 100%;
  height: 70vh;
  object-fit: cover;
`;

const BackgroundContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
`;

const LandingContainer = styled.div`
  position: absolute;
  top: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const LandingHeadline = styled.h1`
  color: black;
  text-align: center;
  width: 70%;
  margin: 0 auto;
  margin-top:10%;

`;

const LandingText = styled.p`
  text-align: center;
  padding:4%;
  width: 70%;
  margin: 0 auto;
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
        <LandingText>Test your knowledge about AI</LandingText>
        <StartButton onClick={onStart}>START QUIZ</StartButton>
      </LandingContainer>
    </>
  );
};
