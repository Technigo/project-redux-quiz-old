import React from 'react';
import styled from 'styled-components';

const HeroSummaryContainer = styled.div`
  background-image: url(${(props) => props.image});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  object-fit: cover;
  position: relative;
  min-height: 100vh;
  align-items: center;
  text-align: center;
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
  margin: 2rem auto 0;
`

const Title = ({ text }) => {
  return (
    <StyledTitle>{text}</StyledTitle>
  );
};

export const AnswerContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 0.2rem #fff, 0 0 0.2rem #fff, 
    0 0 2rem var(--tertiary-bg-color), 0 0 0.8rem var(--tertiary-bg-color), 
    0 0 2.8rem var(--tertiary-bg-color), inset 0 0 1.3rem var(--tertiary-bg-color);
    width: 90%;
    margin-top: 4rem;
`;

export const Question = styled.h2`
 background: linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);
 -webkit-background-clip: text;
 -webkit-text-fill-color: transparent;
  font-family: var(--second-headings-font-family);
  font-size: 1.5rem;
  font-weight: 100;
`;

export const UserAnswer = styled.p`
  font-family: var(--paragraph-font-family);
  font-size: 1.2rem;
  color: #fff;
`;

export const CorrectAnswer = styled.p`
  font-family: var(--paragraph-font-family);
  font-size: 1rem;
  color: #fff;
`;

export const RestartButton = styled.button`
 cursor: pointer;
`

export const StyledRestartButton = styled(RestartButton)`
  display: block;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  margin: 1rem;
  background: linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);
  color: #000;
  border: none;
  border-radius: 0.25rem;
  &:hover {
    background-color: #B38728;
  }
`;

HeroSummaryContainer.AnswerContainer = AnswerContainer;
HeroSummaryContainer.Question = Question;
HeroSummaryContainer.UserAnswer = UserAnswer;
HeroSummaryContainer.CorrectAnswer = CorrectAnswer;

export { HeroSummaryContainer, Title };