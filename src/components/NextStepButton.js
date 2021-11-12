import React from 'react'
import { quiz } from 'reducers/quiz'
import { useSelector, useDispatch } from 'react-redux'
import { StyledButton } from './StyledButton'
import { useHistory } from 'react-router-dom'

const NextStepButton = ({ usersAnswer }) => {
  const isQuizFinished = useSelector(
    (state) =>
      state.quiz.questions.length === state.quiz.currentQuestionIndex + 1
  )

  const dispatch = useDispatch()
  const history = useHistory()

  const handleFinish = () => {
    history.push('/summary')
  }

  const onNextQuestionSubmit = () => {
    dispatch(quiz.actions.goToNextQuestion())
  }

  return (
    <>
      {isQuizFinished ? (
        <StyledButton onClick={handleFinish} disabled={!usersAnswer}>
          Finish
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
