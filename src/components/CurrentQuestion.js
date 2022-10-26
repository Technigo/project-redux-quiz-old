import React from 'react'
import { useSelector } from 'react-redux'
// import styled from 'styled-components'
// import { quiz } from '../reducers/quiz'
import { AnswerButton } from './AnswerButton'

export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <>
      <AnswerButton />
      <p>test</p>
    </>
  )
}