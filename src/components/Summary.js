import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quiz } from 'reducers/quiz'

export const Summary = () => {
  const answerCheck = useSelector((state) => state.quiz.answers)

  return <div>HEJ</div>
}
