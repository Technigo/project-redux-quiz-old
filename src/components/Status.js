/* eslint-disable max-len */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { quiz } from 'reducers/quiz'
import { Progress } from './Styles'

export const Status = () => {
  const dispatch = useDispatch()
  const currentPage = useSelector((store) => store.quiz.currentQuestionIndex)
  console.log(quiz.currentQuestionIndex)
  return (
    <section>
      <Progress>You are on question {currentPage} of 5.</Progress>
      <button type="button" onClick={() => dispatch(quiz.actions.goToNextQuestion())}>Next Question</button>
    </section>
  )
}