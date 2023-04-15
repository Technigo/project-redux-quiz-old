import React from 'react';
import styled from 'styled-components';
import { StartButton } from './styled_components/buttons';
import TestImg from '../images/testimg.jpeg'

const LandingHeadline = styled.h1`
color: black;`

export const LandingPage = ({ onStart }) => {
  return (
    <div>
      <img src={TestImg} alt="something" />
      <LandingHeadline>Welcome to the last quiz</LandingHeadline>
      <p>Test your knowledge about AI</p>
      <StartButton onClick={onStart}>START QUIZ</StartButton>
    </div>
  );
};
