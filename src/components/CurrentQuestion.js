import React from 'react'
import { useSelector } from 'react-redux'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      <input type="radio" /> {question.options[0]}
      <input type="radio" /> {question.options[1]}
      <input type="radio" /> {question.options[2]}
      <input type="radio" /> {question.options[3]}
    </div>
  )
}
