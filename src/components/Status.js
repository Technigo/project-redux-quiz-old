import React from 'react'
import { useDispatch } from 'react-redux'

import { quiz } from 'reducers/quiz'

export const Status = () => {
  const dispatch = useDispatch()

  return (
    <section>
      <button type="button" onClick={() => dispatch(quiz.actions.goToNextQuestion())}>Next Question</button>
      <button type="button" onClick={() => dispatch(quiz.actions.restart())}>Restart Quiz</button>
    </section>
  )
}