import React from 'react'
import { useSelector } from 'react-redux'
// import { quiz } from 'reducers/quiz'

export const QuizEnd = () => {
  const selectedAnswer = useSelector((state) => state.quiz.answers)
  console.log(selectedAnswer)
  return (
    <div>
      <h1>This quiz is over! Please leave now.</h1>
      {selectedAnswer.map((item) => {
        return <p key={item.answer}>{item.isCorrect ? 'rätt' : 'fel'} {item.answer}</p>
      })}
    </div>
  )
}