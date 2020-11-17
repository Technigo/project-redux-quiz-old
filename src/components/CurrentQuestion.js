import React from 'react'
import { useSelector } from 'react-redux'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <div>
      <h1>{question.questionText}</h1>
      {/* <button onClick={() => dispatch(quiz.actions.goToNextQuestion())} type="button">
        Next Question
      </button> */}
    </div>
  )
}
