import React from 'react'
import { useSelector } from 'react-redux'

import Buttons from './Buttons'

const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
      {question.options.map((option) => {
      return (
      <button type="button">
        {option.label}
      </button>
        );
      })}
      <Buttons />
    </div>
  )
}
export default CurrentQuestion