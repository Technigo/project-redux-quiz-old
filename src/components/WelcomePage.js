// /////////////// IMPORT //////////////////////// //

import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { StyledWelcomeText, StyledParagraphText } from './StyledTexts';

// /////////////// COMPONENT //////////////////////// //

export const QuestionsContainer = styled.div`
background: #FF8400;
height: 100%;
width: 70%;
color: #FFD93D;
text-align:center;
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