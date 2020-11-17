/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


import { Status } from 'components/Status'
import { quiz } from 'reducers/quiz'
import { Summary } from './Summary'
// This is the main component
// Next button will be included here

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const ifQuizOver = useSelector((state) => state.quiz.quizOver)

  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(quiz.actions.goToNextQuestion())
  }
  // const handleAnswer = () => {
  //   dispatch(quiz.actions.submitAnswer({ questionId: id, answerIndex: index }))
  // }

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  if (ifQuizOver) {
    return <Summary />
  }
  return (
    <div className="main">
      <img src={question.image} />
      {/* <h2 className="question-number">Question {question.id}:</h2> */}
      <h1>{question.questionText}</h1>
      <Status />
      {/* <button type="button" onClick={() => handleAnswer(question.id, index)}>{option}{index}</button> */}
      <button className="button-next" type="button" onClick={handleClick}>Next</button>
    </div>
  )
}