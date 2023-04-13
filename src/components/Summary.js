/* eslint-disable max-len */
import React from 'react';
import { useSelector } from 'react-redux';

export const Summary = () => {
  const userAnswers = useSelector((state) => state.quiz.answers)

  const correctAnswer = userAnswers.filter((answers) => {
    return answers.isCorrect === true
  })

  return (
    <div>
      <h1>Quiz Summary</h1>
      <h2>Great job! You got {correctAnswer.length} out of 6!</h2>
      {userAnswers.map((singleAnswer) => {
        return (
          <div key={singleAnswer.questionId}>
            <h3>{singleAnswer.questionId}: {singleAnswer.question.questionText}</h3>
            <h3>Your answer was: {singleAnswer.answer}</h3>
            <h3>The correct answer was: {singleAnswer.question.options[singleAnswer.question.correctAnswerIndex]}
            </h3>
          </div>
        )
      })}
    </div>
  )
}