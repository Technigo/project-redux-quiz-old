/* eslint-disable max-len */
import React from 'react'
import { useSelector } from 'react-redux'

// import { quiz } from '../reducers/quiz'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }
  return (
    <div>
      <h1>{question.questionText}</h1>
    </div>
  )
}

// && goToNextQuestion()
// {question.options.map((answer, state.quiz.answerIndex) => {
//   return <button type="button" key={answerIndex} onPress={state.quiz.submitAnswer}>{answer}</button>
// })}