import React from 'react';
import styled from 'styled-components';

const HeroSummaryContainer = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  display: flex;
  object-fit: cover;
  position: relative;
  min-height: 100vh;
  @media screen and (max-width: 768px) {
    min-height: 100vh;
  }
  @media screen and (min-width: 1440px) {
      min-height: 100vh;
  }
  @media screen and (min-width: 1632px) {
      min-height: 100vh;
  }
  @media screen and (max-width: 1024px) {
      min-height: 100vh;
  }
`;

export const StyledTitle = styled.h1`
 font-family: var(--headings-font-family);
 font-size:2rem;
 font-weight: 600;
 text-align: center;
 background: linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);
 -webkit-background-clip: text;
 -webkit-text-fill-color: transparent;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`

const Title = ({ text }) => {
  return (
    <StyledTitle>{text}</StyledTitle>
  );
};

const AnswerContainer = styled.div`
  margin: 20px 0;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
`;

const Question = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 10px;
`;

const UserAnswer = styled.p`
  font-size: 1.2rem;
  margin: 10px 0;
`;

const CorrectAnswer = styled.p`
  font-size: 1rem;
  margin: 10px 0;
`;

HeroSummaryContainer.AnswerContainer = AnswerContainer;
HeroSummaryContainer.Question = Question;
HeroSummaryContainer.UserAnswer = UserAnswer;
HeroSummaryContainer.CorrectAnswer = CorrectAnswer;

export { HeroSummaryContainer, Title };