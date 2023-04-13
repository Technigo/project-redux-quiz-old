import React from 'react';
import { Link } from 'react-router-dom';
import { StyledWelcomeText, StyledParagraphText } from './StyledTexts';

export const WelcomePage = () => {
  return (
    <main>
      <StyledWelcomeText>Welcome to a Javascript-quiz</StyledWelcomeText>
      <StyledParagraphText>This is a paragraphtext.</StyledParagraphText>
      <Link to="/quiz">
        <button type="button">Start Quiz</button>
      </Link>
    </main>
  )
}