/* eslint-disable max-len */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { quiz } from 'reducers/quiz'
import { Progress } from './Styles'

export const Status = ({ handleNextQuestion }) => {
  const dispatch = useDispatch()
  const currentPage = useSelector((store) => store.quiz.currentQuestionIndex)
  console.log(quiz.currentQuestionIndex)

  const nextButton = () => {
    handleNextQuestion(false)
    return dispatch(quiz.actions.goToNextQuestion())
  }

  const backButton = () => {
    handleNextQuestion(false)
    return dispatch(quiz.actions.restart())
  }

  return (
    <section>
      <button type="button" onClick={nextButton}>Next Question</button>
      <button type="button" onClick={backButton}>Restart Quiz</button>
      <div>You are on question {currentPage + 1} of 5.</div>
    </section>
  )
}