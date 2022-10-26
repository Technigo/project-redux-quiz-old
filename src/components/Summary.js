import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import styled from 'styled-components';

const SummaryText = styled.p`
    text-align: center;
    font-size: 2rem;
`

export const Summary = () => {
  const answers = useSelector((state) => state.quiz.answers);
  const correctAnswers = answers.filter((answer) => answer.isCorrect).length;
  const numOfAnswers = answers.length;
  const dispatch = useDispatch();
  return (
    <>
      <SummaryText>You got {correctAnswers} correct answers out of {numOfAnswers}</SummaryText>
      <button type="button" onClick={() => dispatch(quiz.actions.restart())}>Restart Quiz</button>
    </>
  );
};