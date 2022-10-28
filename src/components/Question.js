/* eslint-disable no-nested-ternary */
import React, { useState } from 'react'
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { ProgressBar } from './ProgressBar';
import { Button } from './StyledComponents/Button';
import { ButtonContainer } from './StyledComponents/ButtonContainer';

export const QuestionHeadline = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 30px;
`

export const Question = () => {
  const [disabled, setDisabled] = useState(false);
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const answer = useSelector(
    (state) => state.quiz.answers.find((a) => (a.questionId === question.id))
  )
  const dispatch = useDispatch();
  console.log(question);

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  const onAnswerSubmit = (questionId, answerIndex) => {
    dispatch(quiz.actions.submitAnswer({ questionId, answerIndex }))
    setDisabled(true);

    setTimeout(() => {
      dispatch(quiz.actions.goToNextQuestion())
      setDisabled(false)
    }, 1500);
  }

  const changeBgButton = (answerIndex) => {
    if (!answer) {
      return false
    } else if (question.correctAnswerIndex === answerIndex) {
      return '#228B22'
    } else if (question.correctAnswerIndex !== answerIndex) {
      return 'red'
    }
  }

  return (
    <div>
      <QuestionHeadline>Question: {question.questionText}</QuestionHeadline>
      <ButtonContainer>
        {question.options.map((option, index) => {
          return <Button background={changeBgButton(index)} disabled={disabled} onClick={() => onAnswerSubmit(question.id, index)} key={option} type="button">{option}</Button>
        })}
      </ButtonContainer>
      <ProgressBar />
    </div>
  )
}