/* eslint-disable max-len */
// /////////////// IMPORT //////////////////////// //

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { StartButton } from './Button';
import { StyledWelcomeText, StyledParagraphText, StyledQuestionText } from './StyledTexts';

// /////////////// COMPONENT //////////////////////// //

export const QuestionsContainer = styled.div`
background: #FFD93D;
justify-content: center;
height: 100%;
width: 250px;
color: #FFD93D;
text-align: center;
border-radius: 15px;
padding: 10px;
margin-top: 20px;
display: flex;
flex-direction: column;
align-items: center;
gap: 15px;

@media (min-width: 668px) {
  width: 500px;
  margin-top: 20px;
  gap: 20px;
}

@media (min-width: 1024px) {
  width: 900px;
  margin-top: 40px;
  gap: 30px;
  
}
`;

export const WelcomePage = () => {
  return (
    <QuestionsContainer>
      <StyledQuestionText>Welcome to</StyledQuestionText>
      <StyledWelcomeText>JavaScript Jeopardy </StyledWelcomeText>
      <StyledParagraphText> So you wanna be a developer, ey?
        <br />Test you knowledge in JavaScript by answering questions! <span role="img" aria-label="sheep">🤔</span>
      </StyledParagraphText>
      <Link to="/quiz">
        <StartButton height>Start Quiz</StartButton>
      </Link>
    </QuestionsContainer>
  )
}