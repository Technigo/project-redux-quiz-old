/* eslint-disable linebreak-style */
/* eslint-disable max-len */
import React from 'react'
import { useSelector } from 'react-redux'
// import styled from 'styled-components'

export const Summary = () => {
  const selectedAnswers = useSelector((store) => store.quiz.answers)
  const numberOfQuestions = useSelector((store) => store.quiz.questions)
  const numberOfCorrectAnswers = selectedAnswers.filter((answer) => answer.isCorrect)

  return (
    <div>
      <h1>Summary</h1>
      {selectedAnswers.map((singleAnswer) => {
        if (singleAnswer.isCorrect) {
          return (
            <p>
              <h2>Question {singleAnswer.question.id}: {singleAnswer.question.questionText}</h2>
              <p>👍 {singleAnswer.answer}</p>
            </p>
          )
        } else {
          return (
            <p>
              <h2>Question {singleAnswer.question.id}: {singleAnswer.question.questionText}</h2>
              <p>👎 {singleAnswer.answer}</p>
              <h2>The correct answer: {singleAnswer.question.options[singleAnswer.question.correctAnswerIndex]}</h2>
            </p>
          )
        }
      })}
      <h3>Your total score is {numberOfCorrectAnswers.length}/{numberOfQuestions.length}</h3>
    </div>
  )
}
