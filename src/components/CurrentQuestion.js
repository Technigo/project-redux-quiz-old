import React from 'react'
import { useSelector } from 'react-redux'
import { QuizEnd } from './QuizEnd'
import { Question } from './Question'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const quizEnd = useSelector((state) => state.quiz.quizOver)

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <div>
      {!quizEnd ? <Question /> : <QuizEnd />}
    </div>
  )
}
