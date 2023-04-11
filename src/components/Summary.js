import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { quiz } from 'reducers/quiz';
import TriviaStyle from './TriviaStyle';

const Summary = () => {
  const dispatch = useDispatch();
  const answers = useSelector((state) => state.quiz.answers);
  const correctAnswers = answers.filter((answer) => answer.isCorrect).length;

  return (
    <TriviaStyle
      text={`You got ${correctAnswers} out of 6 answers correct!`}
      placeholder={<RestartBtn type="button" onClick={() => dispatch(quiz.actions.restart())}>Restart</RestartBtn>} />
  )
};

export default Summary;

const RestartBtn = styled.button`
  color: white;
  text-transform: uppercase;
  font-size: 32px;
  text-shadow: 1px 1px 2px black;
  background-color: transparent;
  border: none;
  margin: 0;
`;