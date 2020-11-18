/* eslint-disable max-len */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { quiz } from 'reducers/quiz'
import { ButtonStyled, Progress } from './Styles'

export const Status = () => {
  const dispatch = useDispatch()
  const currentPage = useSelector((store) => store.quiz.currentQuestionIndex)
  console.log(quiz.currentQuestionIndex)
  return (
    <section>
      <Progress>You are on question {currentPage} of 5.</Progress>
      <ButtonStyled type="button" onClick={() => dispatch(quiz.actions.goToNextQuestion())}>Next Question</ButtonStyled>
      {/* To be moved to the Summary component */}
      {/* <ButtonStyled type="button" onClick={() => dispatch(quiz.actions.restart())}>Restart Quiz</ButtonStyled> */}
    </section>
  )
}