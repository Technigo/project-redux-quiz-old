import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { quiz } from 'reducers/quiz'

// ----- STYLED COMPONENTS -----
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
// ----- STYLED COMPONENTS -----

export const StartButton = () => {
  return (
    <Start>Start</Start>
  )
}

export const NextButton = ({ isNextDisabled, setIsNextDisabled, setIsOptionDisabled, setIsCorrectAnswer }) => {
  const dispatch = useDispatch()

  // DISABLING BUTTONS STEP 5: reset the disabled states as they are at first, so 'false' for option and 'true' for next
  const onQuizNext = () => {
    dispatch(quiz.actions.goToNextQuestion())
    setIsCorrectAnswer(null)
    setIsOptionDisabled(false)
    setIsNextDisabled(true)
  }

  // DISABLING BUTTONS STEP 4: pass this information as attribute in button tag for next
  return (
    <ProgressButton
      type="button"
      disabled={isNextDisabled}
      onClick={onQuizNext}>
      Next
    </ProgressButton>
  )
}

// DISABLING BUTTONS STEP 4: pass this information as attribute in button tag for submit
export const SubmitButton = ({ isNextDisabled, setIsNextDisabled }) => {
  const dispatch = useDispatch()

  const onQuizSubmit = () => {
    dispatch(quiz.actions.goToNextQuestion())
    setIsNextDisabled(true)
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
