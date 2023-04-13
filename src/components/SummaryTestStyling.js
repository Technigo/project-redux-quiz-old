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

export const AnswerContainer = styled.div`
    padding: 2rem;
    position: relative;
    display: flex;
    flex-direction: column;
    margin: 1,875rem auto;
    box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 
    0 0 2rem var(--tertiary-bg-color), 0 0 0.8rem var(--tertiary-bg-color), 
    0 0 2.8rem var(--tertiary-bg-color), inset 0 0 1.3rem var(--tertiary-bg-color);
    width: 90%;
    background-color: rgba(14, 59, 59, 0.8); 
`;

export const Question = styled.h2`
 background: linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);
 -webkit-background-clip: text;
 -webkit-text-fill-color: transparent;
  font-family: var(--second-headings-font-family);
  font-size: 1.5rem;
  font-weight: 100;
  margin-bottom: 0.625rem;
`;

export const UserAnswer = styled.p`
  font-family: var(--paragraph-font-family);
  font-size: 1.2rem;
  margin: 0.625rem 0;
  color: #fff;
`;

export const CorrectAnswer = styled.p`
  font-family: var(--paragraph-font-family);
  font-size: 1rem;
  margin: 10px 0;
  color: #fff;
`;

HeroSummaryContainer.AnswerContainer = AnswerContainer;
HeroSummaryContainer.Question = Question;
HeroSummaryContainer.UserAnswer = UserAnswer;
HeroSummaryContainer.CorrectAnswer = CorrectAnswer;

export { HeroSummaryContainer, Title };