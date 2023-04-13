// /////////////// IMPORT //////////////////////// //

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { StyledWelcomeText, StyledParagraphText } from './StyledTexts';

// /////////////// COMPONENT //////////////////////// //

export const QuestionsContainer = styled.div`
background: #FFD93D;
justify-content: center;
height: 100%;
width: 250px;
color: #FFD93D;
text-align: center;
border-radius: 15px;
padding: 20px;
margin: 20px;

@media (min-width: 668px) {
  width: 400px;
  margin-top: 20px;
}
`;

export const WelcomePage = () => {
  return (
    <QuestionsContainer>
      <StyledWelcomeText>Welcome to a Javascript-quiz</StyledWelcomeText>
      <StyledParagraphText>This is a paragraphtext.</StyledParagraphText>
      <Link to="/quiz">
        <button type="button">Start Quiz</button>
      </Link>
    </QuestionsContainer>
  )
}