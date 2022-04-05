import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'

import { quiz } from 'reducers/quiz'

// ----- STYLED COMPONENTS -----
const Start = styled.button`
  /* code here */
`

const Next = styled.button`
  /* code here */
`

const Submit = styled.button`
  /* code here */
`

const Restart = styled.button`
  /* code here */
`
// ----- STYLED COMPONENTS -----

export const StartButton = () => {
  return (
    <Start>Start here!</Start>
  )
}

export const NextButton = () => {
  const dispatch = useDispatch()

  // code given in notion
  const onClickNext = () => {
    dispatch(quiz.actions.goToNextQuestion())
  }
  return (
    <Next
      type="button"
      onClick={onClickNext}>
      Next question
    </Next>
  )
}


export const SubmitButton = () => {
  const dispatch = useDispatch()

  // code given in notion
  const onClickSubmit = () => {
    dispatch(quiz.actions.goToNextQuestion())
  }

  return (
    <Submit
      type="button"
      onClick={onClickSubmit}>
      Submit
    </Submit>
  )
}

export const RestartButton = () => {
  const dispatch = useDispatch()

  // code given in notion
  const onClickRestart = () => {
    dispatch(quiz.actions.restart())
  }

  return (
    <Restart
      type="button"
      onClick={onClickRestart}>
      Restart
    </Restart>
  )
}


