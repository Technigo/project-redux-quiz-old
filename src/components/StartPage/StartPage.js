import React from 'react'
import { useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { StartContainer } from './StartPageStyling'

export const StartPage = () => {
  const dispatch = useDispatch()
  const startOnClick = () => {
    dispatch(quiz.actions.startQuiz())
  }
  return (
    <StartContainer>
      <h1> Q </h1>
      <img src="https://images.unsplash.com/photo-1599344941194-5eb5eaaaf73d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="start logo" />
      <button type="button" onClick={startOnClick}>Start</button>
    </StartContainer>
  )
}