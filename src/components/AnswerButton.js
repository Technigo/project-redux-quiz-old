/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { quiz } from '../reducers/quiz';

export const AnswerButton = ({ index, option }) => {
  // TINAS ADDITION:
  const [check, setcheck] = useState('default');
  // END

  const dispatch = useDispatch();

  // Gets all question in the store
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex]);

  // Gets the answers the user has given
  const usersAnswer = useSelector((state) => state.quiz.answers[state.quiz.currentQuestionIndex]);

  const onAnswerSubmit = (questionId, answerIndex) => {
    dispatch(quiz.actions.submitAnswer({
      questionId, answerIndex
    }))
    // TINAS ADDITION:
    if (question.correctAnswerIndex === answerIndex) {
      setcheck('correct')
    } else if (question.correctAnswerIndex !== answerIndex) {
      setcheck('wrong')
    } else {
      setcheck('default')
    }
    // END
  }

  return (
    <StyledButton
      // TINAS ADDITION:
      className={check}
      // END
      onClick={() => onAnswerSubmit(question.id, index)}
      disabled={usersAnswer}
      type="button">{option}
    </StyledButton>
  )
};

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