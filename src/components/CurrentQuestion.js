/* eslint-disable linebreak-style */
import React from 'react'
import { Container, QuestionWrapper } from 'Globalstyles'
import { useSelector /* useDispatch */ } from 'react-redux'

export const CurrentQuestion = () => {
  /* const dispatch = useDispatch() */

  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])

  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    <Container>
      <QuestionWrapper>
        <h1>{question.questionText}</h1>
      </QuestionWrapper>
    </Container>
  )
}
