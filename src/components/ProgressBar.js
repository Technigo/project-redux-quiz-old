/* eslint-disable no-nested-ternary */
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

export const ProgressBar = () => {
  const answers = useSelector((store) => store.quiz.answers);
  const questions = useSelector((store) => store.quiz.questions);

  /* returns progress bar and checks if answer is correct or not */
  return (
    <ProgressBarWrapper>
      {questions.map((question) => (
        <ProgressSquares
          key={question.id}
          right={answers[question.id]?.isCorrect}
          wrong={answers[question.id]?.isCorrect === false} />
      ))}
    </ProgressBarWrapper>
  );
};

// Styled components

/* styles the sqaure green or red depending on right or wrong and media query for size */
const ProgressSquares = styled.p`
  background-color: ${(isCorrect) => (isCorrect.right ? 'green' : isCorrect.wrong ? 'red' : 'inherit')}; //change
  width: 50px;
  height: 50px;
  margin-right: 12px;
  border-radius: 50%;
  @media (max-width: 667px) {
    width: 20px;
    height: 20px;
    margin-right: 12px;
  }

  color: #fff;
  box-shadow:
      0 0 2px #fff,
      0 0 5px #fff,
      0 0 16px #fff,
      0 0 37px #0fa,
      0 0 77px #0fa,
      0 0 87px #0fa,
      0 0 97px #0fa,
      0 0 0px #0fa;
`;

//----------------------

/* progress bar wrapper and media query for margin of wrapper */
const ProgressBarWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin: 5% 0;

  @media (max-width: 667px) {
    margin: 10% 0;
  }
`;

