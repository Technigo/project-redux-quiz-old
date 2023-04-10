import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { quiz } from 'reducers/quiz';

const Summary = () => {
  const dispatch = useDispatch();
  const answers = useSelector((state) => state.quiz.answers);
  const correctAnswers = answers.filter((answer) => answer.isCorrect).length;

  return (
    <Wrapper>
      <p>You got {correctAnswers} answers out of 6 correct!</p>
      <button type="button" onClick={() => dispatch(quiz.actions.restart())}>Restart</button>
    </Wrapper>
  )
};

export default Summary;

const Wrapper = styled.div`
  background-color: white;
`;