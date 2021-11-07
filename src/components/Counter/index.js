import React from 'react'
import { useSelector } from 'react-redux'

import './counter.css'

export const Counter = () => {
  const questions = useSelector((store) => store.quiz.questions);
  const currentQuestion = useSelector((store) => {
    return store.quiz.questions[store.quiz.currentQuestionIndex]
  })

  return (
    <section className="counter-container">
      <h1 className="counter-text">Question {currentQuestion.id} of {questions.length}</h1>
    </section>
  )
}
