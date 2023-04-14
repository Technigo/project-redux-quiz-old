/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-closing-bracket-location */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { quiz } from 'reducers/quiz';
import styled from 'styled-components';
import { Summary } from './Summary';
import { CurrentQuestion } from './CurrentQuestion';

export const Board = () => {
  const dispatch = useDispatch();
  const quizOver = useSelector((store) => store.quiz.quizOver);

  const [isAnswered, setIsAnswered] = useState(false); // track whether current question is answered

  const onNextQuestion = () => {
    dispatch(quiz.actions.goToNextQuestion());
    setIsAnswered(false);
  };

  const onAnswerSelect = () => {
    setIsAnswered(true);
    setTimeout(() => onNextQuestion(), 2000);
  };

  if (!quizOver) {
    return <CurrentQuestion onAnswerSelect={onAnswerSelect} />;
  } else {
    return (
      <StyledSummaryWrapper>
        <Summary />
      </StyledSummaryWrapper>
    );
  }
};

const StyledSummaryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (min-width: 1024px) {
    width: 70%;
  }
`;
