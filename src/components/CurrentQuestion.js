import React from 'react'
import { useSelector } from 'react-redux'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <div>
      <h1>Question {question.id}: {question.questionText}</h1>
      <ul>
        {question.options.map((answer) => {
          return (
            <li key={answer}>{answer}</li>
          )
        })}
      </ul>
      <button type="button">Next question</button>
    </div>
  )
}
