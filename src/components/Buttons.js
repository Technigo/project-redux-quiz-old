import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { quiz } from 'reducers/quiz'

const Start = styled.button`
  margin: 2rem 0;
  width: 10rem;
  background-color: #62929e;
  color: white;
  border: none;
  text-transform: uppercase;
`

const ProgressButton = styled.button`
  margin-top: 2rem;
  width: 5rem;
  background-color: #62929e;
  color: white;
  border: none;
  text-transform: uppercase;
`

export const StartButton = () => {
  return (
    <Start>Start</Start>
  )
}

export const NextButton = ({ isNextDisabled, setIsNextDisabled, setIsOptionDisabled }) => {
  const dispatch = useDispatch()

  const onQuizNext = () => {
    dispatch(quiz.actions.goToNextQuestion())
    setIsOptionDisabled(false)
    setIsNextDisabled(true)
  }

  return (
    <ProgressButton
      type="button"
      disabled={isNextDisabled}
      onClick={onQuizNext}>
      Next
    </ProgressButton>
  )
}

export const SubmitButton = ({ isNextDisabled, setIsNextDisabled }) => {
  const dispatch = useDispatch()

  const onQuizSubmit = () => {
    dispatch(quiz.actions.goToNextQuestion())
  }

  return (
    <ProgressButton
      type="button"
      disabled={isNextDisabled}
      onClick={onQuizSubmit}>
      Submit
    </ProgressButton>
  )
}

export const RestartButton = () => {
  const dispatch = useDispatch()

  const onQuizRestart = () => {
    dispatch(quiz.actions.restart())
  }

  return (
    <Start
      type="button"
      onClick={onQuizRestart}>
      Restart
    </Start>
  )
}
