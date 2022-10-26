import React from 'react'
import { useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
// import { useSelector } from 'react-redux'

// export const OptionsButton = ({ questions.options }) => {
//     const question = useSelector((state
// ) => state.quiz.questions[state.quiz.currentQuestionIndex])

//     return (
//     {}
//     <button type="button"></button>
//   )
// }

export const Button = ({ buttonText }) => {
  const dispatch = useDispatch()
  const onRestart = () => {
    dispatch(quiz.actions.restart());
  }

  return (
    <button type="button" onClick={() => onRestart()}>{buttonText}</button>
  )
}