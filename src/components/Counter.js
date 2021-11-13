import React from 'react'
import { useSelector } from 'react-redux'

export const Counter = () => {
  const storeAnswer = useSelector((state) => state.quiz.answers)

  const correctAnswers = storeAnswer.filter(
    (answer) => answer.isCorrect === true
  )

  return (
    <section className='summary-result'>
      <h1>
        You got <span className='numberofcorrect'>{correctAnswers.length}</span> out of {storeAnswer.length}!
      </h1>
    </section>
  )
}
