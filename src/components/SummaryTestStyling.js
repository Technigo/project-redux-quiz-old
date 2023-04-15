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
`;

export const StyledTitle = styled.h1`
 font-family: var(--headings-font-family);
 font-size:2rem;
 font-weight: 600;
 text-align: center;
 background: linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);
 -webkit-background-clip: text;
 -webkit-text-fill-color: transparent;
  top: 0;
  margin: 2rem auto 0;
`

const Title = ({ text }) => {
  return (
    <StyledTitle>{text}</StyledTitle>
  );
};

export const CorrectAnswerContainer = styled.div`
  display: flex;
  margin-top: 2rem;
`

export const StyledCorrectAnswer = styled.p`
  display: flex;
  color: #fff;
  font-family: var(--paragraph-font-family);
  font-size: 1.2rem;
`;

export const ResultContainer = styled.div`
  background:rgba(13, 42, 42, 0.3);
  border: 0.3rem inset;
  border-image: linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C) 1;
  padding: 1rem 2rem;

  @media screen and (min-width: 1440px) {
    min-height: 80vh;
    padding: 0 10rem 4rem 10rem;
  }
`;

export const Question = styled.h2`
 background: linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);
 -webkit-background-clip: text;
 -webkit-text-fill-color: transparent;
  font-family: var(--second-headings-font-family);
  font-size: 1.5rem;
  font-weight: 600;
  margin: 3rem 0 0 0;
`;

export const UserAnswer = styled.p`
  font-family: var(--paragraph-font-family);
  font-size: 1.2rem;
  color: #fff;
  margin-top: 0;
`;

export const CorrectAnswer = styled.p`
  font-family: var(--paragraph-font-family);
  font-size: 1.2rem;
  color: #fff;
  margin: 0;
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
  color: #112E2E;
  border: none;
  border-radius: 1rem;

  &:hover {
    background-color: #B38728;
  }
`;

HeroSummaryContainer.Question = Question;
HeroSummaryContainer.UserAnswer = UserAnswer;
HeroSummaryContainer.CorrectAnswer = CorrectAnswer;

export { HeroSummaryContainer, Title };