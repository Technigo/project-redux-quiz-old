import React from 'react'
/* import { quiz } from 'reducers/quiz'
import { useSelector } from 'react-redux'

export const OptionsButton = ({ questions.options }) => {
    const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])

    return (
    {}
    <button type="button"></button>
  )
} */

export const Button = ({ buttonText }) => {
  return (
    <button type="button">{buttonText}</button>
  )
}
