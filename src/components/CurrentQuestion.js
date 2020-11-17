import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Status } from 'components/Status'
import { quiz } from 'reducers/quiz'
// This is the main component
// Next button will be included here

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])

  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(quiz.actions.goToNextQuestion())
  }

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }
  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      <button type="button" onClick={handleClick}>Next</button>
      <Status />
    </div>
  )
}