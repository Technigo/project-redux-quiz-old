import React from 'react'
// import { quiz } from '../reducers/quiz'
import { useSelector } from 'react-redux'

export const Summary = () => {
  const storeAnswer = useSelector((state) => state.quiz.answers)
  console.log(storeAnswer)

  return (
    <div>
      <p className='summary-text'>SUMMARY!</p>
      <p className='summary-text'>Question 1</p>
      <p className='summary-text'>{storeAnswer[0].answer}</p>
    </div>
  )
}
