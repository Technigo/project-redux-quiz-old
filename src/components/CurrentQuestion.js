import React from 'react'
import { useSelector } from 'react-redux'
import { Summary } from './Summary'
import { ProgressBar } from './ProgressBar'
import { Header } from './Header'
import { Footer } from './Footer'



export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <div>
      <h1>Question: {question.questionText}</h1>
    </div>
  )
}
