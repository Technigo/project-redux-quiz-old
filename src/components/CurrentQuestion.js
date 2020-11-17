/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


import { Status } from 'components/Status'
import { quiz } from 'reducers/quiz'
import { Summary } from './Summary'
import q1 from './images/q1.jpg'
import q2 from './images/q2.png'
import q3 from './images/q3.jpg'
import q4 from './images/q4.jpg'
import q5 from './images/q5.png'
import q6 from './images/q6.jpeg'
import q7 from './images/q7.jpg'
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

  const imageForQuestion = () => {
    if (question.id === 1) {
      return q1
    } else if (question.id === 2) {
      return q2
    } else if (question.id === 3) {
      return q3
    } else if (question.id === 4) {
      return q4
    } else if (question.id === 5) {
      return q5
    } else if (question.id === 6) {
      return q6
    } else if (question.id === 7) {
      return q7
    }
  }

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  if (ifQuizOver) {
    return <Summary />
  }
  return (
    <div className="main">
      <Status />
      {/* <h1 className="question-number">Question {question.id}:</h1> */}
      <img src={imageForQuestion()} alt="Friends Images" />
      <h1>{question.questionText}</h1>
      {/* <button type="button" onClick={() => handleAnswer(question.id, index)}>{option}{index}</button> */}
      <button className="button-next" type="button" onClick={handleClick}>Next</button>
    </div>
  )
}