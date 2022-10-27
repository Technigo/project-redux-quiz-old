/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { quiz } from '../reducers/quiz';

const StyledButton = styled.button`
  background-color: aqua;
  color: white;
  font-weight: bold;
  font-size: 25px;
  padding: 20px;
  margin: 5px;

  &.correct {
    background-color: green;   
  }

  &.wrong {
    background-color: red;
  }
`

export const AnswerButton = ({ index, option }) => {
  const [check, setcheck] = useState('default');
  const dispatch = useDispatch();

  // Gets all question in the store
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);
  console.log('QUESTION:', question)

  // Gets the answers the user has given
  const usersAnswer = useSelector((state) => state.quiz.answers[state.quiz.currentQuestionIndex]);
  console.log('ANSWERS:', usersAnswer)

  const onAnswerSubmit = (questionId, answerIndex) => {
    dispatch(quiz.actions.submitAnswer({
      questionId, answerIndex
    }))
    if (question.correctAnswerIndex === answerIndex) {
      setcheck('correct')
    } else if (question.correctAnswerIndex !== answerIndex) {
      setcheck('wrong')
    } else {
      setcheck('default')
    }
  }

  return (
    <StyledButton
      onClick={() => onAnswerSubmit(question.id, index)}
      className={check}
      disabled={usersAnswer}
      type="button">{option}
    </StyledButton>
  )
};