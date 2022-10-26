import React from 'react'
// import { useSelector } from 'react-redux'

// export const OptionsButton = ({ questions.options }) => {
//     const question = useSelector((state
// ) => state.quiz.questions[state.quiz.currentQuestionIndex])

//     return (
//     {}
//     <button type="button"></button>
//   )
// }

export const Button = ({ buttonText, handleClick }) => {
  return (
    <button type="button" onClick={handleClick}>{buttonText}</button>
  )
}