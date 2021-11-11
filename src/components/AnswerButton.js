import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { quiz } from '../reducers/quiz'

const StyledAnswerButton = styled.button.attrs({})`
  &.default {
    margin: 10px;
    padding: 20px;
    border-radius: 20px;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    border: 0;
  }
  &.correct {
    margin: 10px;
    padding: 20px;
    border-radius: 20px;
    cursor: pointer;
    background-color: rgba(41, 155, 56, 0.7);
    color: white;
    border: 2px solid green;
  }
  &.incorrect {
    margin: 10px;
    padding: 20px;
    border-radius: 20px;
    cursor: pointer;
    background-color: rgba(192, 59, 59, 0.7);
    color: white;
    border: 2px solid red;
  }
`

const AnswerButton = ({ question, option, index, usersAnswer }) => {
  const dispatch = useDispatch()

  const onAnswerSubmit = (id, index) => {
    dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }))
  }

  const correctAnswer =
    usersAnswer && option.id - 1 === question.correctAnswerIndex

  return (
    <StyledAnswerButton
      className={
        correctAnswer
          ? 'correct'
          : correctAnswer === false
          ? 'incorrect'
          : 'default'
      }
      disabled={usersAnswer}
      key={option.id}
      onClick={() => onAnswerSubmit(question.id, index)}
    >
      {option.answer}
    </StyledAnswerButton>
  )
}

export default AnswerButton
