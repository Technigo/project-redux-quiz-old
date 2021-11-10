import React from 'react'
import { quiz } from 'reducers/quiz'
import { useSelector, useDispatch } from 'react-redux'
import { StyledButton, StyledLink } from './StyledButton'

const NextStepButton = ({usersAnswer}) => {

  const isQuizFinished = useSelector((state) => 
  state.quiz.questions.length === (state.quiz.currentQuestionIndex + 1))

  const dispatch = useDispatch()

  const onNextQuestionSubmit = () => {
    dispatch(quiz.actions.goToNextQuestion())
  }

  return (
    <>
      {isQuizFinished ? (
        <StyledButton disabled={!usersAnswer}>
          <StyledLink to='/summary'>Finish</StyledLink>
        </StyledButton>
      ) : (
        <StyledButton
          disabled={!usersAnswer}
          onClick={() => onNextQuestionSubmit()}
        >
          Next
        </StyledButton>
      )}
    </>
  )
}

export default NextStepButton
