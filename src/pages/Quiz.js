import React from 'react'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { quiz } from '../reducers/quiz'
import { Button } from '../lib/Buttons'
import { ButtonContainer } from '../lib/Containers'
import { CurrentQuestion } from '../components/CurrentQuestion'
import { Timer } from '../components/Timer'

export const Quiz = () => {
  const dispatch = useDispatch()

  return (
    <>
      <CurrentQuestion />
      <ButtonContainer>
        <Button onClick={() => dispatch(quiz.actions.goToPreviousQuestion())}>Back</Button>
        <Button onClick={() => dispatch(quiz.actions.goToNextQuestion())}>Next</Button>
        <NavLink to="/"><Button onClick={() => dispatch(quiz.actions.restart())}>Restart</Button></NavLink>
      </ButtonContainer>
      <Timer duration={10} />
    </>
  )
}
