import React from 'react'
import { useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'

export const StartPage = () => {
  const dispatch = useDispatch()
  const startOnClick = () => {
    dispatch(quiz.actions.startQuiz())
  }
  return (
    <div>
      <button type="button" onClick={startOnClick}>Start</button>
    </div>
  )
}