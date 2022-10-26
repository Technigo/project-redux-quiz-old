/* eslint-disable max-len */
import React from 'react'
import { useSelector } from 'react-redux'

const Summary = () => {
  const selectedAnswers = useSelector((store) => store.quiz.answers)
  const numberOfQuestions = useSelector((store) => store.quiz.questions)
  // this will be more accurate when we don't have to click the correct answer to go forward in the game
  const numberOfCorrectAnswers = selectedAnswers.filter((answer) => answer.isCorrect)

  return (
    <div>
      <h1>Summary</h1>
      {selectedAnswers.map((singleAnswer) => {
        if (singleAnswer.isCorrect) {
          return (
            <>
              <h2>Question {singleAnswer.question.id}: {singleAnswer.question.questionText}</h2>
              <p>Your answer: {singleAnswer.answer}</p>
              <p>That&apos;s correct! 👏⭐️ </p>
            </>
          )
        } else {
          return (
            <>
              <h2>Question {singleAnswer.question.id}: {singleAnswer.question.questionText}</h2>
              <p>Your answer: {singleAnswer.answer}</p>
              <p>That&apos;s wrong... ❌</p>
              <p>The correct answer is: {singleAnswer.question.options[singleAnswer.question.correctAnswerIndex]}</p>
            </>
          )
        }
      })}
      <h2>Your total score is {numberOfCorrectAnswers.length}/{numberOfQuestions.length}.</h2>
    </div>
  )
}

export default Summary;