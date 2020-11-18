import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { quiz } from 'reducers/quiz'

export const Status = () => {
  const dispatch = useDispatch()
  const currentPage = useSelector((store) => store.quiz.currentQuestionIndex)
  console.log(quiz.currentQuestionIndex)
  return (
    <section>
      <button type="button" onClick={() => dispatch(quiz.actions.goToNextQuestion())}>Next Question</button>
      <button type="button" onClick={() => dispatch(quiz.actions.restart())}>Restart Quiz</button>
      <div>You are on question {currentPage} of 5.</div>
    </section>
  )
}