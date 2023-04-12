/* eslint-disable no-shadow */
/* eslint-disable no-nested-ternary */
import React from 'react'
import { useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import styled from 'styled-components'

const StyledButton = styled.button`
border: solid red 2px;
padding: 2rem;
`

export const Button = () => {
  return (
    <StyledButton>Play!</StyledButton>
  )
}

/* We might add this later export const StartButton */

export const RestartButton = () => {
  const dispatch = useDispatch();

  const clickRestart = () => {
    dispatch(quiz.actions.restart());
  }

  return (
    <StyledButton onClick={clickRestart}>Restart quiz</StyledButton>
  )
}

export const AnswerButton = ({
  item,
  index,
  questionId,
  question,
  answer,
  setDisabled,
  disabled
}) => {
  const dispatch = useDispatch();
  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }));
    setDisabled(true);
  };

  return (
    <button
      className={
        !answer
          ? 'defaultbtn'
          : index === question.correctAnswerIndex
            ? 'correct'
            : 'wrong'
      }
      type="submit"
      disabled={disabled}
      onClick={() => onAnswerSubmit(questionId, index)}
      key={item}>
      {item}
    </button>
  );
}
export const NextQuestion = ({ setDisabled }) => {
  const dispatch = useDispatch();
  const nextQuestion = () => {
    dispatch(quiz.actions.goToNextQuestion());
    setDisabled(false);
  };

  return (
    <button className="next" type="submit" onClick={() => nextQuestion()}>
      Next question
    </button>
  );
};