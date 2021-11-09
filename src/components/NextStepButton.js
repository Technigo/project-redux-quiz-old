import React from 'react'
import { quiz } from 'reducers/quiz'
import { useSelector, useDispatch } from 'react-redux'
import { StyledButton, StyledLink } from './StyledButton'

const NextStepButton = () => {
  const question = useSelector(
    (state) => state.quiz.questions[state.quiz.currentQuestionIndex]
  )

  const numberOfQuestions = useSelector((state) => state.quiz.questions.length)

  const usersAnswer = useSelector(
    (state) => state.quiz.answers[state.quiz.currentQuestionIndex]
  )

  const currentQuestionNumber = useSelector(
    (state) => state.quiz.currentQuestionIndex
  )

  const dispatch = useDispatch()

  const onNextQuestionSubmit = () => {
    dispatch(quiz.actions.goToNextQuestion())
  }

  return (
    <>
      {numberOfQuestions - 1 === currentQuestionNumber ? (
        <StyledButton disabled={!usersAnswer}>
          <StyledLink to='/summary'>Finish</StyledLink>
        </StyledButton>
      ) : (
        <StyledButton
          disabled={!usersAnswer}
          onClick={() => onNextQuestionSubmit(question.id)}
        >
          Next
        </StyledButton>
      )}
    </>
  )
}

export default NextStepButton
