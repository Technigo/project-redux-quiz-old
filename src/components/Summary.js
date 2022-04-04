import React from 'react'
import { quiz } from 'reducers/quiz'
import { useSelector } from 'react-redux'
import { RestartButton } from './Buttons'

export const Summary = () => {
  const answers = useSelector((state) => state.quiz.answers)
console.log(answers)
  return (
    <><div>Summary</div><RestartButton /></>

  )
}
