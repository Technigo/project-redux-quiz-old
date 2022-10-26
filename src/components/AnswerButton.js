/* eslint-disable no-nested-ternary */
import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { quiz } from '../reducers/quiz';

export const AnswerButton = ({ question, questionId, answerIndex }) => {
  const dispatch = useDispatch()

  const onAnswerSubmit = () => {
    dispatch(quiz.actions.submitAnswer({
      questionId, answerIndex
    }))
  }

  const correctAnswer = (question.correctAnswerIndex === answerIndex)

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      {question.options.map((item) => {
        return (
          <StyledButton
            className={correctAnswer ? 'correct' : !correctAnswer ? 'wrong' : 'default'}
            key={item}
            onClick={() => onAnswerSubmit()}
            type="button">{item}
          </StyledButton>
        )
      })}
    </div>
  )
}

const StyledButton = styled.button`
  background-color: aqua;

  &.correct {
    background-color: green;
  }

  &.wrong {
    background-color: red;
  }
`