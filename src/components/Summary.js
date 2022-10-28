import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import Confetti from 'react-confetti'
import styled from 'styled-components';
import { StyledButton, ButtonWrap } from 'styledcomponents/Buttons';

const SummaryText = styled.div`
    text-align: center;
    font-size: 2rem;
    color: #33001A;
    padding-top: 100px;
    padding-bottom: 40px;
`

export const Summary = () => {
  const answers = useSelector((state) => state.quiz.answers);
  const correctAnswers = answers.filter((answer) => answer.isCorrect).length;
  // const numOfAnswers = answers.length;
  const dispatch = useDispatch();
  return (
    <>
      <Confetti />
      <SummaryText>You got {correctAnswers} correct answers out of 5</SummaryText>
      <ButtonWrap>
        <StyledButton type="button" onClick={() => dispatch(quiz.actions.restart())}>Restart Quiz</StyledButton>
      </ButtonWrap>
    </>
  );
};