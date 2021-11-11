import React from 'react'
import { useSelector } from 'react-redux'

export const Counter = () => {
  const storeAnswer = useSelector((state) => state.quiz.answers)

  const correctAnswers = storeAnswer.filter(
    (answer) => answer.isCorrect === true
  )

  return (
    <div className='summary-result'>
      You got {correctAnswers.length} out of {storeAnswer.length}!
    </div>
  )
}
