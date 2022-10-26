import React from 'react'
import { useSelector } from 'react-redux'
import { ReturnButton } from 'components/ReturnButton'

const Summary = () => {
  const summaryAnswers = useSelector((state) => state.quiz.answers)

  return (
    <div>
      {summaryAnswers.map((results) => (
        <div>
          <h1>Your quiz summary</h1>
          <h2>Question number: {results.questionId}</h2>
          <h3>You answered: {results.answer}</h3>

          {results.isCorrect ? (
            <h4> Your answer is correct </h4>
          ) : (
            <h4> Your answer is not correct </h4>
          )}
          {!results.isCorrect && (
            <p>
            Correct answer is: {results.question.options[results.question.correctAnswerIndex]}
            </p>
          )}
        </div>
      ))}
      <ReturnButton />
    </div>
  )
}
export default Summary;
