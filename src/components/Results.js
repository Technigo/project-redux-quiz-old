import React from 'react'
import { useSelector } from "react-redux"

export const Results = () => {
  const answers = useSelector((state) => state.quiz.answers)

  console.log(answers)

  return (
    <div>
      {answers.map(answer => (
        <div key={answer.question.id}>
          <h2>Correct Answer: {answer.question.options[answer.question.correctAnswerIndex]}</h2>
          <p>Your Answer: {answer.answer}</p>
        </div>
      ))}
    </div>
  )
}
