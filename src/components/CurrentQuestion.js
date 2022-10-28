import React from 'react'
import { useSelector } from 'react-redux'
import { QuizEnd } from './QuizEnd'
import { Question } from './Question'

const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const quizEnd = useSelector((state) => state.quiz.quizOver)

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <div className="wrapper">
      {!quizEnd ? <Question /> : <QuizEnd />}
    </div>
  )
};

export default CurrentQuestion;